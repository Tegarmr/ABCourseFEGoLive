
const API_URL = import.meta.env.VITE_API_URL;

export const sendGrammarCheck = async (input) => {
  if (!input) {
    console.error("❌ Input kosong");
    return;
  }

  console.log("✅ Kirim ke server:", { text: input });

  try {
    const response = await fetch(`${API_URL}/api/grammar/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ text: input }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error response:", errorText);
      throw new Error("Grammar check failed");
    }

    const data = await response.json();
    console.log("✅ Response dari backend:", data);

    // Process or return the data as needed, for example:
    // Display or save the corrected text in your frontend application.
    // For example, you might want to return the corrected text:
    return data;

  } catch (error) {
    console.error("❌ Error during grammar check:", error.message);
    // Optionally, return an error response or handle it in the UI
    return { error: "Grammar check failed, please try again later." };
  }
};
