
import React, { useEffect, useState } from 'react';
import { getUncleHoTeaching } from '../geminiService';

const UncleHoTeachingBar: React.FC = () => {
  const [teaching, setTeaching] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const today = new Date();
  const dateFormatted = `Ngày ${today.getDate()} tháng ${today.getMonth() + 1}`;
  const fullDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  useEffect(() => {
    const fetchTeaching = async () => {
      const result = await getUncleHoTeaching();
      setTeaching(result);
      setLoading(false);
    };
    fetchTeaching();
  }, []);

  return (
    <div className="bg-[#cc0000] text-white py-4 overflow-hidden border-b-2 border-yellow-500 shadow-xl relative z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Fixed Header Part */}
        <div className="flex-shrink-0 flex items-center bg-yellow-500 text-red-900 px-5 py-1.5 rounded-l-lg shadow-lg font-black text-sm uppercase tracking-tighter border-r-2 border-red-800/20">
          <span className="mr-2 text-lg">★</span> LỜI BÁC DẠY {dateFormatted}
        </div>
        
        {/* Scrolling Content Part */}
        <div className="relative flex-grow h-8 overflow-hidden bg-black/20 rounded-r-lg px-6 flex items-center border-l border-white/10">
          {loading ? (
            <div className="flex items-center space-x-2 animate-pulse">
              <div className="h-2 w-32 bg-white/30 rounded"></div>
              <div className="h-2 w-64 bg-white/10 rounded"></div>
            </div>
          ) : (
            <div className="absolute whitespace-nowrap animate-marquee-very-slow flex items-center h-full text-lg font-bold italic text-yellow-100 drop-shadow">
              <span className="mx-12">"{teaching}"</span>
              <span className="mx-12 text-white/20">|</span>
              <span className="mx-12">Ghi chú: Nội dung trích từ Hồ Chí Minh Toàn tập</span>
              <span className="mx-12 text-white/20">|</span>
              <span className="mx-12">Học tập và làm theo tấm gương đạo đức Hồ Chí Minh</span>
              <span className="mx-12 text-white/20">|</span>
              <span className="mx-12">"{teaching}"</span>
            </div>
          )}
        </div>

        {/* Legal link button */}
        <a 
          href="https://hochiminh.vn/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 flex-shrink-0 bg-white/10 hover:bg-white/20 text-[10px] font-bold px-3 py-1.5 rounded border border-white/20 transition-all uppercase tracking-widest hidden lg:block"
        >
          Nguồn Tư Liệu ⚖️
        </a>
      </div>
      <style>{`
        @keyframes marquee-very-slow {
          0% { transform: translateX(20%); }
          100% { transform: translateX(-180%); }
        }
        .animate-marquee-very-slow {
          /* Tốc độ rất chậm (60 giây) để đảm bảo bộ đội và nhân dân dễ đọc */
          animation: marquee-very-slow 60s linear infinite;
        }
        .animate-marquee-very-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default UncleHoTeachingBar;
