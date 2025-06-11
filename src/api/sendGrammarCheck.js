export const sendGrammarCheck = async (input) => {
  if (!input) {
    console.error("❌ Input kosong");
    return;
  }

  console.log("✅ Kirim ke server:", { text: input });

  try {
    const response = await fetch("https://web-production-748c7.up.railway.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include", // HAPUS ini kalau backend kamu TIDAK pakai session/login cookie
      body: JSON.stringify({ text: input }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Error response:", errorText);
      throw new Error("Grammar check failed");
    }

    const data = await response.json();
    console.log("✅ Response dari backend:", data);
    return data;

  } catch (error) {
    console.error("❌ Error during grammar check:", error.message);
    return { error: "Grammar check failed, please try again later." };
  }
};