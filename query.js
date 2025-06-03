const { OpenAI } = require("openai");

const openai = new OpenAI({
  baseURL: "http://192.168.29.90:1234/v1", // LM Studio's local server
  apiKey: "lm-studio", // Dummy key – LM Studio doesn’t validate it
});

async function queryLLM(prompt) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "tinyllama-1.1b-chat-v1.0",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    console.log("Prompt:", prompt);
    console.log("Response:", chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error("Error communicating with LM Studio:", error.message);
  }
}

queryLLM("Explain what a vector database is in simple terms.");
