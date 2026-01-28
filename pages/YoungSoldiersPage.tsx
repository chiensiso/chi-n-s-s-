
import React from 'react';

const YoungSoldiersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="bg-[#4a6d3c] p-10 rounded-3xl text-white mb-10 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold oswald mb-2 uppercase tracking-tight">GÓC LÍNH TRẺ</h2>
          <p className="text-xl opacity-90 max-w-xl">Nơi lưu giữ những kỷ niệm đẹp nhất của tuổi trẻ trong màu áo lính.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Soldier of the Month */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="font-bold text-lg text-[#2d4a22]">GƯƠNG MẶT TIÊU BIỂU</h3>
            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Tháng 03/2024</span>
          </div>
          <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
            <img 
              src="https://picsum.photos/seed/soldier_portrait/300/400" 
              className="w-48 h-64 object-cover rounded-xl shadow-lg border-4 border-white ring-2 ring-slate-100" 
              alt="Soldier portrait" 
            />
            <div className="space-y-4">
              <div>
                <h4 className="text-2xl font-bold text-slate-800">Trung sĩ Nguyễn Văn Thành</h4>
                <p className="text-slate-500">Tiểu đội trưởng - Đại đội 1</p>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
                "Thành tích: Đạt giải Nhất hội thao bắn súng quân dụng cấp Sư đoàn. Luôn gương mẫu trong học tập và rèn luyện, là chỗ dựa tin cậy của anh em trong tiểu đội."
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-50 p-3 rounded-lg flex-1 text-center">
                  <div className="text-xs text-slate-400">Rèn luyện</div>
                  <div className="font-bold text-[#2d4a22]">Giỏi</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex-1 text-center">
                  <div className="text-xs text-slate-400">Kỷ luật</div>
                  <div className="font-bold text-[#2d4a22]">Nghiêm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Life Hacks */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-bold text-lg text-[#2d4a22] mb-6">MẸO HAY NHÀ BINH</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">1</div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm">Gấp chăn vuông góc</h5>
                <p className="text-xs text-slate-500">Dùng bìa cứng làm khuôn để tạo nếp vuông vắn trong những ngày đầu.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">2</div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm">Chăm sóc bàn chân</h5>
                <p className="text-xs text-slate-500">Dùng miếng lót giày thấm mồ hôi tốt để tránh phồng rộp khi hành quân xa.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">3</div>
              <div>
                <h5 className="font-bold text-slate-800 text-sm">Phơi đồ nhanh khô</h5>
                <p className="text-xs text-slate-500">Vắt thật kỹ và treo ở nơi thoáng gió, tránh nắng gắt trực tiếp làm bạc màu quân phục.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-2 text-sm font-bold text-[#2d4a22] border border-[#2d4a22] rounded-lg hover:bg-emerald-50 transition-colors">
            XEM THÊM KINH NGHIỆM
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoungSoldiersPage;
