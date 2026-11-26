import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers, Award } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenConsultation: (intent?: string) => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'sneaker' | 'bag' | 'shoe'>('sneaker');

  const protocols = {
    sneaker: {
      title: 'Quy Trình Phục Hồi Sneaker & Khử Ố Quang Hóa',
      badge: 'Chuẩn SOP Sneaker Lab',
      description: 'Làm sạch sâu bọt sinh học, quang hóa UV khử ố đế 96%, khử khuẩn ozone và phủ màng nano.',
      timeEstimate: '24 – 48 giờ',
      steps: [
        {
          num: '01',
          name: 'Soi Quang Phổ & Đo Ẩm',
          action: 'Kiểm tra độ ẩm đế, phân loại 12 vật liệu (Knit, Mesh, Suede, EVA, Icy) và đo độ pH bề mặt.',
          chemical: 'Dung dịch test pH chuyên dụng'
        },
        {
          num: '02',
          name: 'Bóc Tách Bẩn Sinh Học Khô',
          action: 'Tạo bọt enzyme đậm đặc FL-BIO-01, chải theo chiều sớ sợi bằng bàn chải lông ngựa, hút ẩm khô lập tức.',
          chemical: 'FL-BIO-01 Bio Cleaner (pH 7.0)'
        },
        {
          num: '03',
          name: 'Quang Hóa Đảo Ngược Oxy Hóa',
          action: 'Ủ gel quang hóa FL-UNY-02, bọc kín màng co chân không và chiếu buồng UV 365nm đảo ngược sắc vàng.',
          chemical: 'FL-UNY-02 UV Midsole Gel'
        },
        {
          num: '04',
          name: 'Khử Trùng Khí Ozone & Sấy Lạnh',
          action: 'Đưa vào buồng ozone diệt 99.9% vi khuẩn nấm mốc trong lót giày, sấy lạnh đối lưu bảo toàn form dáng.',
          chemical: 'Buồng khử khuẩn Ozone -40ppm'
        },
        {
          num: '05',
          name: 'Phủ Màng Nano Kỵ Nước & QC',
          action: 'Phun sương 2 lớp màng nano FL-SHD-05 hiệu ứng lá sen chống bám nước cà phê và dán tem xuất xưởng.',
          chemical: 'FL-SHD-05 Hydro-Pro Shield'
        }
      ]
    },
    bag: {
      title: 'Quy Trình Spa & Vá Cốt Túi Xách Hàng Hiệu',
      badge: 'Chuẩn SOP Luxury Leather',
      description: 'Quy chuẩn bảo tồn vân da nguyên bản cho Hermès, Chanel, Dior, Louis Vuitton.',
      timeEstimate: '48 – 72 giờ',
      steps: [
        {
          num: '01',
          name: 'Biên Bản Giám Định Vi Điểm',
          action: 'Chụp macro 4 góc đáy, quai xách và khóa kim loại dưới ánh sáng chuẩn Pantone để xác định lỗi.',
          chemical: 'Bảng màu quang phổ 200 mã'
        },
        {
          num: '02',
          name: 'Làm Sạch Bề Mặt & Xả Dầu Bẩn',
          action: 'Dùng dung môi dịu nhẹ Prep Deglazer bóc tách lớp dầu nhờn tích tụ mà không làm mất dầu tự nhiên của da.',
          chemical: 'Fox Lab Leather Prep Solvent'
        },
        {
          num: '03',
          name: 'Cấy Cốt & Bả Đàn Hồi Vi Điểm',
          action: 'Cấy sợi da gia cố góc rách, dùng keo đàn hồi Elast-Filler trám phẳng và tái tạo hoa văn hạt da đồng nhất.',
          chemical: 'Fox Lab Elast-Filler'
        },
        {
          num: '04',
          name: 'Phun Nano Pigment & Sơn Cạnh',
          action: 'Pha màu quang phổ chuẩn 98% hãng, phun sương Airbrush 0.3mm hạt siêu vi và quét nhiệt 4 lớp sơn viền.',
          chemical: 'FL-DYE-03 Nano Pigment + Edge Paint'
        },
        {
          num: '05',
          name: 'Dưỡng Sáp Carnauba & Khóa Màng',
          action: 'Massage mỡ chồn tinh khiết và sáp cọ Brazil FL-BLM-04 nuôi dưỡng da mềm mượt, đánh bóng khóa mạ vàng.',
          chemical: 'FL-BLM-04 Royal Mink Balm'
        }
      ]
    },
    shoe: {
      title: 'Quy Trình Dán Đế Vibram & Đánh Bóng Gương Giày Tây',
      badge: 'Chuẩn SOP Bespoke Shoemaking',
      description: 'Kỹ nghệ đánh bóng gương Mirror Glaze chuẩn châu Âu và ép nhiệt đế cao su Vibram Ý.',
      timeEstimate: '36 – 48 giờ',
      steps: [
        {
          num: '01',
          name: 'Tháo Sáp Chết & Xử Lý Nếp Nhăn',
          action: 'Tẩy lớp xi silicon cũ tích tụ, ủ nóng cân bằng sợi da Box Calf trên cây giữ form Shoetree gỗ thông.',
          chemical: 'Fox Lab Wax Stripper'
        },
        {
          num: '02',
          name: 'Mài Đế & Quét Chất Xúc Tác Primer',
          action: 'Mài nhám đế da thật mép vát 45 độ, quét dung môi hoạt hóa bề mặt gia tăng liên kết phân tử cao su.',
          chemical: 'Polyurethane Surface Primer'
        },
        {
          num: '03',
          name: 'Ép Nhiệt Đế Cao Su Vibram Ý',
          action: 'Quét keo nhiệt PU FL-ADH-06 2 mặt, sấy kích nhiệt 70°C và ép khuôn nén áp suất 24 giờ không bung hở.',
          chemical: 'FL-ADH-06 Thermal PU Bond'
        },
        {
          num: '04',
          name: 'Nghệ Thuật Đánh Bóng Gương',
          action: 'Xếp từng lớp sáp cứng Carnauba kết hợp giọt nước lạnh, xoay tròn bằng khăn cotton mịn tạo mũi giày soi gương.',
          chemical: 'Xi sáp Fox Lab Heritage Wax'
        },
        {
          num: '05',
          name: 'Sơn Mép Lề & Hoàn Thiện',
          action: 'Chuốt cạnh đế và gót bằng sơn bóng chuyên dụng Edge Dressing, xịt dưỡng chống mốc và đóng gói túi nhung.',
          chemical: 'Edge Dressing + FL-SHD-05'
        }
      ]
    }
  };

  const currentProtocol = protocols[activeTab];

  return (
    <section id="quy-trinh" className="py-20 bg-[#0a0b0e] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <span className="font-semibold text-[#FF5E14]">HIỂU · QUY TRÌNH CHUẨN LAB</span>
              <span aria-hidden="true">·</span>
              <span>SOP 5 Bước Chuẩn Hóa</span>
              <span aria-hidden="true">·</span>
              <span>Bảo Hành Tay Nghề</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Quy Trình Phục Hồi &amp; Đào Tạo Kỹ Thuật Đồ Da
            </h2>
          </div>

          {/* Segmented SOP Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#14161f] border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('sneaker')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'sneaker'
                  ? 'bg-[#FF5E14] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SOP Sneaker &amp; Icy
            </button>
            <button
              onClick={() => setActiveTab('bag')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'bag'
                  ? 'bg-[#FF5E14] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SOP Túi Hiệu Luxury
            </button>
            <button
              onClick={() => setActiveTab('shoe')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'shoe'
                  ? 'bg-[#FF5E14] text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              SOP Giày Tây &amp; Vibram
            </button>
          </div>
        </div>

        {/* Studio Visual Banner & SOP Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Visual Workshop Picture */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 bg-[#13151e] min-h-[300px] group shadow-xl">
            <img
              src="/images/academy-workshop.jpg"
              alt="Học viện đào tạo kỹ thuật Fox Lab"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span className="inline-block px-2.5 py-1 rounded bg-[#FF5E14] text-white font-mono text-[11px] font-bold tracking-wider uppercase mb-2 w-max">
                {currentProtocol.badge}
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                {currentProtocol.title}
              </h3>
              <p className="text-xs text-zinc-300 mt-1">
                Thời gian xử lý trung bình: <strong className="text-white font-mono">{currentProtocol.timeEstimate}</strong>
              </p>
            </div>
          </div>

          {/* 5-Step Process Sequence */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {currentProtocol.steps.map((st) => (
              <div
                key={st.num}
                className="p-4 rounded-xl bg-[#12141c] border border-white/10 hover:border-[#FF5E14]/40 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF5E14]/15 border border-[#FF5E14]/30 flex items-center justify-center text-[#FF5E14] font-mono font-extrabold text-sm shrink-0">
                  {st.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white font-display">
                      {st.name}
                    </h4>
                    <span className="text-[11px] font-mono text-[#FF5E14] bg-[#FF5E14]/10 px-2 py-0.5 rounded border border-[#FF5E14]/20">
                      {st.chemical}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#171924] via-[#14161f] to-[#12131a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF5E14]/20 border border-[#FF5E14]/40 text-[#FF5E14] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Học viên được đào tạo 1 kèm 1 thành thạo cả 3 bộ quy trình SOP
              </div>
              <div className="text-xs text-zinc-400">
                Thao tác trực tiếp trên 100% giày Sneaker &amp; Túi xách hàng hiệu thật tại phòng Lab.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation(`Đăng ký học Quy trình SOP: ${currentProtocol.title}`)}
            className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Đăng Ký Học Quy Trình Này</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
