
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-[#cc0000] py-6 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="w-20 h-20 bg-[#cc0000] rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-xl relative overflow-hidden group">
             <span className="text-yellow-500 text-5xl relative z-10 transition-transform group-hover:scale-125 duration-300">★</span>
             <div className="absolute inset-0 bg-yellow-500/10 animate-pulse"></div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-[#2d4a22] oswald uppercase tracking-tighter leading-none">
              CHIẾN SĨ SỐ
            </h1>
            <p className="text-[#cc0000] font-bold uppercase tracking-[0.2em] text-sm md:text-lg mt-2 drop-shadow-sm">
              Đoàn kết - Trung dũng - Luyện hay - Đánh giỏi
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-0 text-right hidden md:block border-l-4 border-[#2d4a22]/10 pl-8">
          <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">Cơ quan chủ quản</div>
          <div className="font-black text-[#2d4a22] text-xl uppercase oswald">ĐƠN VỊ X - QUÂN KHU Y</div>
          <div className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 mt-2 border border-slate-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Hệ thống đang trực tuyến: {new Date().toLocaleDateString('vi-VN')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
