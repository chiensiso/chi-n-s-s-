
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import UncleHoTeachingBar from './components/UncleHoTeachingBar';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import LawPage from './pages/LawPage';
import YoungSoldiersPage from './pages/YoungSoldiersPage';
import PartnershipPage from './pages/PartnershipPage';
import SearchResultsPage from './pages/SearchResultsPage';
import { Category, Post } from './types';
import { MOCK_POSTS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'SEARCH'>(Category.HOME);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<Category[]>(Object.values(Category));
  
  // Quản trị viên điều chỉnh phím chức năng nhanh (Quick Access Keys)
  const [quickActions, setQuickActions] = useState([
    { label: 'Bản tin chiến sĩ', color: 'bg-[#2d4a22]', link: '#', active: true },
    { label: 'Văn bản pháp quy', color: 'bg-[#cc0000]', link: 'https://thuvienphapluat.vn', active: true },
    { label: 'Tra cứu điều lệnh', color: 'bg-blue-800', link: '#', active: false }
  ]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = MOCK_POSTS.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setActiveCategory('SEARCH');
    setSelectedPost(null);
  };

  const toggleAction = (index: number) => {
    const newActions = [...quickActions];
    newActions[index].active = !newActions[index].active;
    setQuickActions(newActions);
  };

  // Fix for line 78: Handle post selection from search results
  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  // Fix for line 143: Toggle category visibility in admin panel
  const toggleCategoryVisibility = (cat: Category) => {
    setVisibleCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const renderPage = () => {
    if (selectedPost) {
      return (
        <div className="max-w-4xl mx-auto py-8 animate-fade-in">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 bg-slate-200 px-5 py-2.5 rounded-xl text-[#2d4a22] font-black text-xs uppercase tracking-widest flex items-center hover:bg-slate-300 transition-all shadow-sm border border-slate-300"
          >
            <span className="mr-2">⬅</span> Quay lại danh sách
          </button>
          <img src={selectedPost.imageUrl} className="w-full h-[450px] object-cover rounded-[2rem] mb-10 shadow-2xl ring-8 ring-white" alt="" />
          <h2 className="text-5xl font-black mb-6 oswald text-[#2d4a22] leading-tight tracking-tighter">{selectedPost.title}</h2>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 mb-10 bg-white p-6 rounded-2xl border shadow-lg ring-1 ring-slate-100">
            <span className="flex items-center px-3 py-1 bg-slate-50 rounded-lg"><span className="mr-2">🖋️</span> TÁC GIẢ: {selectedPost.author}</span>
            <span className="flex items-center px-3 py-1 bg-slate-50 rounded-lg"><span className="mr-2">📅</span> NGÀY ĐĂNG: {selectedPost.date}</span>
            <span className="bg-[#2d4a22] text-white px-4 py-1 rounded-full uppercase tracking-tighter">PHÂN LOẠI: {selectedPost.category}</span>
          </div>
          <div className="prose prose-xl max-w-none text-slate-800 leading-relaxed whitespace-pre-line bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            {selectedPost.content}
            <div className="mt-12 pt-8 border-t border-slate-100 text-sm italic text-slate-400 text-center">
              --- Bài viết mang tính chất tuyên truyền nội bộ ---
            </div>
          </div>
        </div>
      );
    }

    switch (activeCategory) {
      case 'SEARCH':
        return <SearchResultsPage query={searchQuery} results={searchResults} onSelectPost={handleSelectPost} />;
      case Category.HOME:
        return <HomePage />;
      case Category.HISTORY:
        return <HistoryPage />;
      case Category.LAW:
        return <LawPage />;
      case Category.YOUNG_SOLDIERS:
        return <YoungSoldiersPage />;
      case Category.PARTNERSHIP:
        return <PartnershipPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <UncleHoTeachingBar />
      
      {/* Search & Actions Bar */}
      <div className="bg-white border-b py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <SearchBar onSearch={handleSearch} />
            <button 
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`p-3 rounded-xl transition-all shadow-md ${isAdminMode ? 'bg-red-600 text-white ring-4 ring-red-100' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#2d4a22]'}`}
              title="Cài đặt quản trị"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="flex gap-3 flex-wrap justify-center">
            {quickActions.map((action, i) => action.active && (
              <a key={i} href={action.link} target={action.link !== '#' ? "_blank" : "_self"} className={`${action.color} text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider hover:brightness-110 flex items-center shadow-lg transition-transform hover:scale-105 active:scale-95`}>
                <span className="mr-2">⚡</span> {action.label}
              </a>
            ))}
            <div className="h-8 w-px bg-slate-200 mx-2 hidden lg:block"></div>
            <a href="https://mod.gov.vn" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider hover:bg-black flex items-center shadow-lg transition-all border border-white/10">
              <span className="mr-2 text-blue-400 font-serif">⚖</span> Tính pháp lý
            </a>
          </div>
        </div>
      </div>

      {/* Admin Panel (Quản trị viên điều chỉnh) */}
      {isAdminMode && (
        <div className="bg-yellow-50 border-b-2 border-yellow-200 p-6 animate-slide-down shadow-inner">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-sm font-black text-yellow-800 uppercase mb-4 flex items-center">
              <span className="mr-2">🛠️</span> BẢNG ĐIỀU KHIỂN QUẢN TRỊ VIÊN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest">Hiển thị chuyên mục:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.values(Category).map(cat => (
                    <button 
                      key={cat}
                      onClick={() => toggleCategoryVisibility(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${visibleCategories.includes(cat) ? 'bg-[#2d4a22] text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}
                    >
                      {visibleCategories.includes(cat) ? '✓ ' : '+ '} {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest">Bật/Tắt phím chức năng:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, i) => (
                    <button 
                      key={i}
                      onClick={() => toggleAction(i)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${action.active ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-400 border border-slate-200'}`}
                    >
                      {action.active ? '✓ ' : '+ '} {action.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-yellow-600 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-yellow-700 transition-all">
                  Lưu thay đổi hệ thống
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Navigation 
        activeCategory={activeCategory === 'SEARCH' ? Category.HOME : activeCategory} 
        categories={visibleCategories}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          setSelectedPost(null);
        }} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-10 max-w-7xl">
        <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 shadow-xl border border-white/60 ring-1 ring-black/5">
          {renderPage()}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-20 border-t-[12px] border-[#2d4a22]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
               <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center text-red-900 text-3xl font-black rotate-3 shadow-xl">★</div>
               <div>
                 <h4 className="text-white font-black oswald text-2xl tracking-tighter leading-none">CHIẾN SĨ SỐ</h4>
                 <div className="text-[10px] text-yellow-500 font-bold tracking-[0.3em] mt-1 uppercase">Đơn vị X - Quân khu Y</div>
               </div>
            </div>
            <p className="text-sm leading-relaxed font-medium">Hệ thống chuyển đổi số toàn diện cho công tác chính trị, tư tưởng và thi đua quyết thắng tại cơ sở.</p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 oswald uppercase tracking-widest border-l-4 border-yellow-500 pl-4">Cổng Pháp Lý</h4>
            <ul className="text-sm space-y-4 font-bold">
              <li><a href="http://chinhphu.vn" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">➔</span> Cổng Chính phủ</a></li>
              <li><a href="https://mod.gov.vn" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">➔</span> Bộ Quốc phòng</a></li>
              <li><a href="https://thuvienphapluat.vn" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">➔</span> Thư viện Pháp luật</a></li>
              <li><a href="https://baochinhphu.vn" className="hover:text-yellow-500 transition-colors flex items-center"><span className="mr-2">➔</span> Báo Chính phủ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 oswald uppercase tracking-widest border-l-4 border-yellow-500 pl-4">Thông Tin Đơn Vị</h4>
            <div className="space-y-4 text-sm font-medium">
              <p className="flex items-start"><span className="mr-3 opacity-50">📍</span> Hòm thư 1234, Tỉnh Y, Quân khu Z</p>
              <p className="flex items-start"><span className="mr-3 opacity-50">📞</span> Số máy Quân sự: 069.xxxxxx</p>
              <p className="flex items-start"><span className="mr-3 opacity-50">📧</span> Mail: bbt.chiensis@mod.gov.vn</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 oswald uppercase tracking-widest border-l-4 border-yellow-500 pl-4">An Ninh Hệ Thống</h4>
            <div className="flex flex-wrap gap-3 mb-6">
               <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black text-center w-24 tracking-tighter">AN NINH MẠNG</div>
               <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black text-center w-24 tracking-tighter">CƠ YẾU</div>
               <div className="px-4 py-2 bg-[#cc0000]/30 rounded-xl border border-[#cc0000]/50 text-[9px] font-black text-center w-24 tracking-tighter text-red-200">TUYỆT MẬT</div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-[10px] italic leading-tight opacity-60">Mọi hành vi truy cập trái phép hoặc phát tán thông tin quân sự nhạy cảm sẽ bị xử lý theo Luật An ninh mạng.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-white/5 text-center">
            <p className="text-xs uppercase tracking-[0.4em] font-black text-white/40">© 2024 CHIẾN SĨ SỐ | KỶ CƯƠNG - TRÁCH NHIỆM - QUYẾT THẮNG</p>
        </div>
      </footer>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slide-down { animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { transform: translateY(-40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default App;
