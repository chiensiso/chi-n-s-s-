
import React, { useState } from 'react';
import { askMilitaryAssistant } from '../geminiService';

const LawPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    const result = await askMilitaryAssistant(query);
    setAnswer(result);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-[#2d4a22] oswald mb-8 text-center uppercase">PHỔ BIẾN GIÁO DỤC PHÁP LUẬT</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-[#2d4a22] p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">⚖️</span> Trợ Lý Pháp Luật Ảo
            </h3>
            <p className="text-sm text-slate-300 mb-6 italic">Đặt câu hỏi về luật nghĩa vụ quân sự, điều lệnh quân đội...</p>
            
            <form onSubmit={handleAsk} className="space-y-4">
              <textarea 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ví dụ: Quy định về phép năm của hạ sĩ quan là gì?"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500 min-h-[100px]"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
              >
                {loading ? 'Đang tra cứu...' : 'Hỏi trợ lý'}
              </button>
            </form>

            {answer && (
              <div className="mt-6 bg-white/10 p-4 rounded-lg border border-white/10 animate-fade-in">
                <p className="text-sm leading-relaxed">{answer}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#2d4a22] border-b-2 border-yellow-500 pb-2">Tài liệu pháp luật cần biết</h3>
          <div className="space-y-4">
            {[
              "Luật Nghĩa vụ quân sự 2015",
              "Luật Sĩ quan Quân đội nhân dân Việt Nam",
              "Điều lệnh Quản lý bộ đội",
              "Thông tư quy định về chế độ phụ cấp"
            ].map((law, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center hover:bg-slate-50 cursor-pointer">
                <span className="font-medium text-slate-700">{law}</span>
                <span className="text-yellow-600 font-bold">PDF →</span>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-red-50 rounded-xl border border-red-100">
            <h4 className="text-red-700 font-bold mb-2">Cảnh báo pháp luật</h4>
            <p className="text-sm text-red-600">Tuyệt đối không đăng tải hình ảnh quân sự nhạy cảm lên mạng xã hội theo Quy định 132-QĐ/TW.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPage;
