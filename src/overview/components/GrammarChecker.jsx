import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";
import { sendGrammarCheck } from "../../api/sendGrammarCheck";

const API_URL = import.meta.env.VITE_API_URL;

const GrammarChecker = ({ userId }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHistory = async () => {
      const response = await axios.get(`${API_URL}/api/grammar/history`, {
        withCredentials: true
      })

      const mapped = response.data.map(item => ({
        id: item.grammar_check_id,
        created_at: item.created_at,
        check: item.check_grammar,
        hasil: item.hasil
      }))

      setHistory(mapped)
    }
    getHistory()
  }, [])

  const handleCheck = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await sendGrammarCheck(input, userId);
      console.log(result)

      if (result) {
        setHistory((prev) => [
          {
            id: result.grammar_check_id || Date.now(), // fallback ID
            created_at: result.created_at || new Date().toISOString(),
            check: input,
            hasil: result.corrected || "",
          },
          ...prev,
        ]);
        setInput("");
      }
    } catch (error) {
      console.error("Grammar check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grammar-container">
      <h2 className="grammar-title">✨ Grammar Checker</h2>

      <div className="history-list">
        {history.length === 0 ? (
          <p>No history yet.</p>
        ) : (
          history.map((entry) => (
            <div key={entry.id} className="history-item">
              <p><strong>Original:</strong> {entry.check}</p>
              <p><strong>Corrected:</strong> {entry.hasil}</p>
              <span className="timestamp">{new Date(entry.created_at).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your sentence here..."
          disabled={loading}
        />
        <button onClick={handleCheck} disabled={loading || !input.trim()}>
          {loading ? "Checking..." : "Check"}
        </button>
      </div>
    </div>
  );
};

export default GrammarChecker;
