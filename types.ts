
export enum Category {
  HOME = 'TRANG CHỦ',
  HISTORY = 'LỊCH SỬ TRUYỀN THỐNG',
  ACTIVITIES = 'HOẠT ĐỘNG ĐƠN VỊ',
  PARTNERSHIP = 'CHUYÊN TRANG KẾT NGHĨA',
  LAW = 'PHỔ BIẾN PHÁP LUẬT',
  YOUNG_SOLDIERS = 'LÍNH TRẺ'
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  imageUrl: string;
  author: string;
}

export interface Milestone {
  year: string;
  event: string;
  description: string;
}

export interface Partner {
  name: string;
  location: string;
  type: string;
  since: string;
  image: string;
}
