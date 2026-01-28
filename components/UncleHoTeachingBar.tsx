
import React, { useEffect, useState } from 'react';
import { getUncleHoTeaching } from '../geminiService';

const UncleHoTeachingBar: React.FC = () => {
  const [teaching, setTeaching] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeaching = async () => {
      const result = await getUncleHoTeaching();
      setTeaching(result);
      setLoading(false);
    };
    fetchTeaching();
  }, []);

  return (
    <div className="bg-[#cc0000] text-yellow-500 py-2 overflow-hidden border-b border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 flex items-center bg-yellow-500 text-red-700 px-3 py-0.5 rounded-full font-bold text-xs mr-4 shadow-sm uppercase tracking-wider">
          <span className="mr-1">★</span> Lời Bác dạy
        </div>
        <div className="relative flex-grow h-6 overflow-hidden">
          {loading ? (
            <div className="animate-pulse flex space-x-4">
              <div className="h-2 bg-yellow-500/20 rounded w-full"></div>
            </div>
          ) : (
            <div className="absolute whitespace-nowrap animate-marquee flex items-center text-sm font-medium italic">
              <span className="mx-4">{teaching}</span>
              <span className="mx-4 hidden md:inline">|</span>
              <span className="mx-4 hidden md:inline">{teaching}</span>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default UncleHoTeachingBar;
