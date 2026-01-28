
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-[#cc0000] py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-[#cc0000] rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-xl">
             <span className="text-yellow-500 text-4xl">★</span>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-[#2d4a22] oswald uppercase tracking-tighter">
              ĐƠN VỊ BỘ ĐỘI CỤ HỒ
            </h1>
            <p className="text-slate-600 font-medium italic">Kỷ cương - Trách nhiệm - Quyết thắng</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right hidden md:block">
          <div className="text-sm text-slate-500">Ngày {new Date().toLocaleDateString('vi-VN')}</div>
          <div className="font-bold text-[#2d4a22]">Sẵn sàng chiến đấu cao</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
