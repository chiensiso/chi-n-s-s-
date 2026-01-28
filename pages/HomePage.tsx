
import React from 'react';
import { MOCK_POSTS } from '../constants';
import { Category } from '../types';

const HomePage: React.FC = () => {
  const featured = MOCK_POSTS[0];
  const recentPosts = MOCK_POSTS.slice(1);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src={featured.imageUrl} 
          alt={featured.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
          <span className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold w-fit mb-4">
            TIN NỔI BẬT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 oswald">{featured.title}</h2>
          <p className="text-slate-200 line-clamp-2 max-w-2xl">{featured.excerpt}</p>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold border-l-4 border-[#2d4a22] pl-3 text-[#2d4a22]">TIN TỨC MỚI NHẤT</h3>
          {recentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row border border-slate-200 hover:shadow-md transition-shadow">
              <img src={post.imageUrl} className="w-full md:w-48 h-48 object-cover" alt={post.title} />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{post.category}</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 hover:text-[#2d4a22] cursor-pointer">{post.title}</h4>
                  <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="mt-4 flex justify-between items-center text-xs text-slate-400">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-[#2d4a22] p-6 rounded-xl text-white">
            <h3 className="text-lg font-bold mb-4 oswald border-b border-white/20 pb-2">NHIỆM VỤ TRỌNG TÂM</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">✔</span>
                <span>Huấn luyện giỏi, kỷ luật nghiêm</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">✔</span>
                <span>Sẵn sàng chiến đấu trong mọi tình huống</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">✔</span>
                <span>Xây dựng Đảng bộ trong sạch vững mạnh</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-yellow-500">✔</span>
                <span>Tăng gia sản xuất, cải thiện đời sống</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold mb-4 text-[#2d4a22] border-b pb-2">VIDEO NỔI BẬT</h3>
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
               <span className="text-4xl">▶</span>
            </div>
            <p className="mt-2 text-sm font-medium">Phim truyền thống 50 năm xây dựng và trưởng thành</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
