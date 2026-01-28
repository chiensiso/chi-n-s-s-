
import React, { useState } from 'react';
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

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
  };

  const renderPage = () => {
    if (selectedPost) {
      return (
        <div className="max-w-4xl mx-auto py-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-4 text-[#2d4a22] font-bold text-sm flex items-center hover:underline"
          >
            ← Quay lại
          </button>
          <img src={selectedPost.imageUrl} className="w-full h-80 object-cover rounded-2xl mb-6 shadow-lg" alt="" />
          <h2 className="text-3xl font-bold mb-4 oswald text-[#2d4a22]">{selectedPost.title}</h2>
          <div className="flex space-x-4 text-xs text-slate-400 mb-8 border-b pb-4">
            <span>Tác giả: {selectedPost.author}</span>
            <span>Ngày: {selectedPost.date}</span>
            <span className="text-yellow-600 font-bold uppercase">{selectedPost.category}</span>
          </div>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
            {selectedPost.content}
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
      case Category.ACTIVITIES:
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <UncleHoTeachingBar />
      
      {/* Search & Actions Bar */}
      <div className="bg-white border-b py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <SearchBar onSearch={handleSearch} />
          <div className="flex space-x-2">
            <span className="bg-[#2d4a22] text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Bản tin chiến sĩ</span>
            <span className="bg-[#cc0000] text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Hotline: 1900xxxx</span>
          </div>
        </div>
      </div>

      <Navigation 
        activeCategory={activeCategory === 'SEARCH' ? Category.HOME : activeCategory} 
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          setSelectedPost(null);
        }} 
      />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        {renderPage()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 oswald">VỀ CHÚNG TÔI</h4>
            <p className="text-sm">Trang tin điện tử chính thức của đơn vị X. Cung cấp thông tin hoạt động, tuyên truyền giáo dục truyền thống và pháp luật cho cán bộ, chiến sĩ.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 oswald">LIÊN HỆ</h4>
            <p className="text-sm">Địa chỉ: Hòm thư 1234, Tỉnh Y</p>
            <p className="text-sm">Điện thoại quân sự: 069.xxxxxx</p>
            <p className="text-sm">Email: donvi_x@mod.gov.vn</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 oswald">BẢN QUYỀN</h4>
            <p className="text-xs">© 2024 Cổng Thông Tin Điện Tử Đơn Vị X. Ghi rõ nguồn khi phát hành lại thông tin từ trang web này.</p>
            <div className="mt-4 flex space-x-4">
               <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold border border-white/20">QDND</div>
               <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold border border-white/20">BQP</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
