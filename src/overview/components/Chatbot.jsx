import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const fetchConversationId = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/chatbot/conversation-id`, {
          withCredentials: true,
        });

        if (res.data?.conversationId) {
          setConversationId(res.data.conversationId);
        }
      } catch (err) {
        console.error("Failed to fetch conversation ID:", err);
      }
    };

    fetchConversationId();
  }, []);

  useEffect(() => {
    if (!conversationId) return;

    setOffset(0);
    setHasMore(true);
    fetchHistory(conversationId, 5, 0, false);
  }, [conversationId]);

  const fetchHistory = async (conversationId, limit = 5, offsetVal = 0, appendToTop = false) => {
    try {
      const res = await axios.get(
        `${API_URL}/api/chatbot/chat/history?conversationId=${conversationId}&limit=${limit}&offset=${offsetVal}`,
        { withCredentials: true }
      );

      const history = res.data.messages.map(msg => ({
        sender: msg.sender === "user" ? "user" : "bot",
        text: msg.message
      }));

      if (appendToTop) {
        setMessages(prev => [...history, ...prev]);
      } else {
        setMessages(history);
      }

      if (history.length < limit) {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to fetch history:", err.message);
    }
  };

useEffect(() => {
  const handleScroll = async () => {
    if (!hasMore || isFetchingMore) return;

    const container = chatContainerRef.current;
    if (container && container.scrollTop === 0) {
      setIsFetchingMore(true);

      const prevScrollHeight = container.scrollHeight; // ⬅️ Simpan scroll height sebelumnya
      const newOffset = offset + 5;

      await fetchHistory(conversationId, 5, newOffset, true);

      // ⬇️ Geser scroll agar tetap di posisi lama
      requestAnimationFrame(() => {
        const newScrollHeight = container.scrollHeight;
        container.scrollTop = newScrollHeight - prevScrollHeight;
      });

      setOffset(newOffset);
      setIsFetchingMore(false);
    }
  };

  const container = chatContainerRef.current;
  if (container) {
    container.addEventListener("scroll", handleScroll);
  }

  return () => {
    if (container) {
      container.removeEventListener("scroll", handleScroll);
    }
  };
}, [conversationId, offset, hasMore, isFetchingMore]);


  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/api/chatbot/chat`,
        { message: input },
        { withCredentials: true }
      );

      const botReply = res.data.reply;
      const newConversationId = res.data.conversationId;

      if (!conversationId && newConversationId) {
        setConversationId(newConversationId);

        const historyRes = await axios.get(
          `${API_URL}/api/chatbot/chat/history?conversationId=${newConversationId}&limit=5&offset=0`,
          { withCredentials: true }
        );
        const history = historyRes.data.messages.map(msg => ({
          sender: msg.sender === "user" ? "user" : "bot",
          text: msg.message
        }));
        setMessages(history);
      } else {
        setMessages(prev => [
          ...prev,
          { sender: "user", text: input },
          { sender: "bot", text: botReply }
        ]);
      }

      setInput("");
    } catch (error) {
      console.error("Failed to send message:", error.response?.data || error.message);

      setMessages(prev => [
        ...prev,
        { sender: "user", text: input },
        { sender: "bot", text: error.response?.data?.error || "Failed to send message" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestionQuestions = [
    "What can I ask you to do?",
    "What is Grammar?",
    "How to improve my English?",
  ];

  return (
    <div className="dashboard-container">
      <div className="chatbot-content">
        <div className="chatbot-center">
          {messages.length === 0 && (
            <>
              <div className="chatbot-header">
                <div className="sparkle-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3L13.4328 8.56718L19 10L13.4328 11.4328L12 17L10.5672 11.4328L5 10L10.5672 8.56718L12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="chatbot-title">Ask our AI anything</h1>
              </div>

              <div className="chatbot-suggestions">
                <p className="suggestions-label">Suggestions on what to ask Our AI</p>
                <div className="suggestions-grid">
                  {suggestionQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="suggestion-button"
                      onClick={() => setInput(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div
            className="chat-messages"
            ref={chatContainerRef}
            style={{ overflowY: "auto", maxHeight: "400px", padding: "1rem" }}
          >
            {isFetchingMore && (
              <div className="chat-loading-top">Loading previous messages...</div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                <div className="chat-bubble">
  {msg.text.includes("*") ? (
    <ul style={{ paddingLeft: "1.2rem" }}>
      {msg.text
        .split("\n")
        .map((line, idx) =>
          line.trim().startsWith("*") ? (
            <li key={idx}>{line.replace(/^\*\s*/, "")}</li>
          ) : (
            <p key={idx}>{line}</p>
          )
        )}
    </ul>
  ) : (
    msg.text
  )}
</div>

              </div>
            ))}

            {loading && (
              <div className="chat-message bot">
                <div className="chat-bubble">Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <div className="chatbot-input-wrapper">
              <input
                type="text"
                className="chatbot-input"
                placeholder="What's on your mind?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
              />
              <button
                className="send-button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#49bbbd"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
