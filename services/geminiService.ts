import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateEngagementLetter = async (
  clientName: string,
  propertyAddress: string,
  fee: string
): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured. Please set a valid API Key to generate real content.\n\n[MOCK OUTPUT] Engagement Letter generated for " + clientName + "...";
  }

  try {
    const prompt = `
      Act as a professional lawyer in Zimbabwe. Write a formal Engagement Letter for a client named ${clientName}.
      
      Context:
      - Client Name: ${clientName}
      - Matter: Sale of property at ${propertyAddress}
      - Fee Structure: ${fee}
      - Firm Name: DAY1 AI Legal Partners
      
      The letter should be professional, concise, and include sections for Scope of Work, Fees, and Acceptance. 
      Keep it under 300 words for this demo.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Error generating content.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to AI service. Please try again later.";
  }
};

export const analyzeLegalText = async (text: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured.\n\n[MOCK OUTPUT] Analysis complete. 2 risks identified...";
  }

  try {
    const prompt = `
      Act as a senior legal analyst. Analyze the following unstructured text (which might be from an email or OCR scan) related to a property transaction.
      
      1. Summarize the key points.
      2. Identify any potential "red flags" or missing information.
      3. Format the output clearly with bullet points.

      Text to analyze:
      "${text}"
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Error analyzing text.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to AI service. Please try again later.";
  }
};

export const runCustomQuery = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "Demo Mode: API Key not configured.\n\n[MOCK OUTPUT] Processing custom query...";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No output generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Error: ${error instanceof Error ? error.message : "Unknown error occurred"}`;
  }
};
