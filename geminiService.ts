
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askMilitaryAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Bạn là một trợ lý ảo am hiểu về pháp luật quân đội Việt Nam và truyền thống quân sự. Hãy trả lời một cách trang nghiêm, chính xác và dễ hiểu.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Rất tiếc, tôi không thể trả lời câu hỏi này vào lúc này. Vui lòng thử lại sau.";
  }
}

export async function getLawSummary(lawName: string) {
  const prompt = `Tóm tắt ngắn gọn các điểm chính của ${lawName} đối với quân nhân.`;
  return askMilitaryAssistant(prompt);
}

export async function getUncleHoTeaching() {
  const today = new Date();
  const dateStr = `${today.getDate()}/${today.getMonth() + 1}`;
  const prompt = `Hãy cung cấp một câu nói hoặc lời dạy của Chủ tịch Hồ Chí Minh dành cho Quân đội nhân dân Việt Nam có liên quan hoặc phù hợp để nhắc lại vào ngày ${dateStr}. Chỉ trả lời nội dung lời dạy và hoàn cảnh/ý nghĩa ngắn gọn.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Bạn là một chuyên gia về tư tưởng Hồ Chí Minh và lịch sử quân sự. Hãy cung cấp lời dạy của Bác Hồ một cách trang trọng, súc tích.",
        temperature: 0.5,
      },
    });
    return response.text;
  } catch (error) {
    return "Quân đội ta trung với Đảng, hiếu với dân, sẵn sàng chiến đấu hy sinh vì độc lập tự do của Tổ quốc, vì chủ nghĩa xã hội.";
  }