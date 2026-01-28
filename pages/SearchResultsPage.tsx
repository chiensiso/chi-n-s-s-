
import React from 'react';
import { Post } from '../types';

interface SearchResultsPageProps {
  query: string;
  results: Post[];
  onSelectPost: (post: Post) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ query, results, onSelectPost }) => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-[#2d4a22] oswald uppercase">KẾT QUẢ TÌM KIẾM</h2>
        <p className="text-slate-500 mt-2">Tìm thấy {results.length} kết quả cho từ khóa: <span className="font-bold text-[#cc0000]">"{query}"</span></p>
      </div>

      {results.length > 0 ? (
        <div className="space-y-6">
          {results.map(post => (
            <div 
              key={post.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-[#2d4a22] transition-colors cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">{post.category}</span>
                <span className="text-xs text-slate-400">{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{post.title}</h3>
              <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-400">Không tìm thấy kết quả phù hợp</h3>
          <p className="text-slate-500 mt-2">Hãy thử lại với từ khóa khác hoặc liên hệ Ban Biên Tập.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
