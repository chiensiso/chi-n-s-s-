
import React from 'react';
import { PARTNERS } from '../constants';

const PartnershipPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2d4a22] oswald mb-4 uppercase">CHUYÊN TRANG KẾT NGHĨA</h2>
        <p className="text-slate-600 max-w-2xl mx-auto italic">"Tình quân dân cá nước - Sát cánh cùng nhân dân xây dựng quê hương"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PARTNERS.map((partner, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="h-48 relative overflow-hidden">
               <img src={partner.image} className="w-full h-full object-cover" alt={partner.name} />
               <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-[10px] font-bold text-[#2d4a22]">
                  {partner.type}
               </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-1">{partner.name}</h3>
              <p className="text-slate-500 text-sm mb-4">📍 {partner.location}</p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-xs text-slate-400">Kết nghĩa từ: <span className="text-slate-700 font-bold">{partner.since}</span></span>
                <button className="text-[#2d4a22] text-sm font-bold hover:underline">Xem hoạt động →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[#2d4a22] text-white p-10 rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Đăng ký hoạt động tình nguyện</h3>
            <p className="text-slate-300">Chúng tôi luôn sẵn sàng hỗ trợ các đơn vị kết nghĩa trong các hoạt động xây dựng nông thôn mới, khắc phục hậu quả thiên tai và đền ơn đáp nghĩa.</p>
          </div>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 shadow-lg">Liên hệ Ban Dân Vận</button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
