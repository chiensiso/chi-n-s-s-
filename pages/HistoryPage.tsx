
import React from 'react';
import { HISTORY_TIMELINE } from '../constants';

const HistoryPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2d4a22] oswald mb-4 uppercase">LỊCH SỬ VÀ TRUYỀN THỐNG</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Trải qua gần nửa thế kỷ, đơn vị đã viết nên những trang sử vẻ vang, đóng góp to lớn vào sự nghiệp giải phóng dân tộc và bảo vệ Tổ quốc.
        </p>
      </div>

      <div className="relative border-l-4 border-yellow-500 ml-6 space-y-12">
        {HISTORY_TIMELINE.map((item, idx) => (
          <div key={idx} className="relative pl-10">
            <div className="absolute -left-[24px] top-0 w-10 h-10 bg-[#2d4a22] border-4 border-yellow-500 rounded-full flex items-center justify-center text-yellow-500 font-bold text-xs">
              {idx + 1}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
              <span className="text-2xl font-black text-yellow-600 oswald">{item.year}</span>
              <h3 className="text-xl font-bold text-[#2d4a22] mb-2">{item.event}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-100 p-8 rounded-2xl border-2 border-dashed border-[#2d4a22]/20">
        <h3 className="text-xl font-bold mb-4 text-[#2d4a22]">Lời căn dặn của Bác Hồ</h3>
        <blockquote className="italic text-lg text-slate-700">
          "Quân đội ta trung với Đảng, hiếu với dân, sẵn sàng chiến đấu hy sinh vì độc lập tự do của Tổ quốc, vì chủ nghĩa xã hội. Nhiệm vụ nào cũng hoàn thành, khó khăn nào cũng vượt qua, kẻ thù nào cũng đánh thắng."
        </blockquote>
      </div>
    </div>
  );
};

export default HistoryPage;
