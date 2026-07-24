import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateQuote(prompt: string) {
  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are QuoteSnap AI. Generate short viral inspirational quotes." },
      { role: "user", content: prompt }
    ]
  });
  return res.choices[0].message.content;
}
