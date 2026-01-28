
import { Category, Post, Milestone, Partner } from './types';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Lễ ra quân huấn luyện năm 2024: Khí thế thi đua sôi nổi',
    excerpt: 'Sáng nay, đơn vị đã tổ chức trọng thể lễ ra quân huấn luyện với khí thế quyết tâm cao nhất, hoàn thành xuất sắc các nội dung trong năm...',
    content: 'Nội dung chi tiết về buổi lễ ra quân huấn luyện với sự tham gia của toàn thể cán bộ chiến sĩ, các mô hình học cụ được chuẩn bị công phu...',
    category: Category.ACTIVITIES,
    date: '2024-03-01',
    imageUrl: 'https://picsum.photos/seed/military1/800/400',
    author: 'Ban Chính Trị'
  },
  {
    id: '2',
    title: 'Tìm hiểu về Luật Nghĩa vụ Quân sự 2015 và các sửa đổi',
    excerpt: 'Những điểm mới cần lưu ý trong công tác tuyển quân và chế độ chính sách đối với hạ sĩ quan, chiến sĩ đang tại ngũ...',
    content: 'Luật Nghĩa vụ quân sự năm 2015 quy định về nghĩa vụ quân sự; chế độ, chính sách đối với công dân trong thời gian thực hiện nghĩa vụ quân sự...',
    category: Category.LAW,
    date: '2024-02-15',
    imageUrl: 'https://picsum.photos/seed/law1/800/400',
    author: 'Tổ Pháp Chế'
  },
  {
    id: '3',
    title: 'Nhật ký tân binh: Tuần đầu tiên làm quen "11 chế độ"',
    excerpt: 'Bỡ ngỡ, lạ lẫm nhưng đầy tự hào là cảm xúc chung của các chiến sĩ mới khi thực hiện nền nếp chính quy...',
    content: 'Cảm nhận của chiến sĩ Nguyễn Văn A về tuần đầu tiên làm quen với 11 chế độ trong ngày và 3 chế độ trong tuần...',
    category: Category.YOUNG_SOLDIERS,
    date: '2024-02-28',
    imageUrl: 'https://picsum.photos/seed/soldier1/800/400',
    author: 'Nguyễn Văn A'
  },
  {
    id: '4',
    title: 'Giao lưu văn nghệ thắm tình Quân - Dân giữa đêm biên giới',
    excerpt: 'Buổi tối thắm đượm tình quân dân giữa đơn vị và Đoàn thanh niên địa phương kết nghĩa...',
    content: 'Các tiết mục văn nghệ đặc sắc ca ngợi quê hương, đất nước và truyền thống quân đội nhân dân Việt Nam anh hùng...',
    category: Category.PARTNERSHIP,
    date: '2024-02-20',
    imageUrl: 'https://picsum.photos/seed/friendship1/800/400',
    author: 'Đoàn Thanh Niên'
  },
  {
    id: '5',
    title: 'Huấn luyện đêm: Thách thức bản lĩnh người chiến sĩ',
    excerpt: 'Dưới điều kiện ánh sáng hạn chế, cán bộ chiến sĩ vẫn miệt mài luyện tập các phương án tác chiến...',
    content: 'Công tác huấn luyện đêm giúp bộ đội làm quen với thực địa trong mọi điều kiện thời gian, nâng cao khả năng sẵn sàng chiến đấu...',
    category: Category.ACTIVITIES,
    date: '2024-03-05',
    imageUrl: 'https://picsum.photos/seed/night-training/800/400',
    author: 'Ban Tham Mưu'
  },
  {
    id: '6',
    title: 'Hiệu quả từ mô hình "Vườn rau thanh niên"',
    excerpt: 'Công tác tăng gia sản xuất tại đơn vị không chỉ cải thiện bữa ăn mà còn tạo cảnh quan môi trường xanh, sạch, đẹp...',
    content: 'Mô hình vườn rau thanh niên do Đoàn cơ sở quản lý đã mang lại nguồn thực phẩm sạch dồi dào, đóng góp vào quỹ hoạt động đoàn...',
    category: Category.ACTIVITIES,
    date: '2024-03-10',
    imageUrl: 'https://picsum.photos/seed/garden/800/400',
    author: 'Ban Hậu Cần'
  }
];

export const HISTORY_TIMELINE: Milestone[] = [
  { year: '1975', event: 'Thành lập đơn vị', description: 'Đơn vị được thành lập trong bối cảnh đất nước vừa thống nhất, nhiệm vụ trọng tâm là bảo vệ biên giới.' },
  { year: '1985', event: 'Nhận Huân chương Chiến công hạng Nhất', description: 'Ghi nhận những thành tích đặc biệt xuất sắc trong huấn luyện và sẵn sàng chiến đấu.' },
  { year: '2005', event: 'Hiện đại hóa trang bị', description: 'Bắt đầu giai đoạn tiếp nhận các vũ khí trang bị kỹ thuật thế hệ mới.' },
  { year: '2023', event: 'Đơn vị vững mạnh toàn diện', description: 'Được Bộ Quốc phòng tặng cờ thi đua vì thành tích dẫn đầu trong phong trào thi đua quyết thắng.' }
];

export const PARTNERS: Partner[] = [
  { name: 'UBND Huyện X', location: 'Tỉnh Y', type: 'Chính quyền địa phương', since: '1990', image: 'https://picsum.photos/seed/loc1/200/200' },
  { name: 'Trường Đại học Z', location: 'Thành phố H', type: 'Giáo dục', since: '2010', image: 'https://picsum.photos/seed/uni1/200/200' },
  { name: 'Công ty M', location: 'Khu công nghiệp N', type: 'Doanh nghiệp', since: '2015', image: 'https://picsum.photos/seed/corp1/200/200' }
];
