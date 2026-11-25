import React from 'react';
import { Microscope, Award, Cpu, HeartHandshake } from 'lucide-react';

export const BrandStory: React.FC = () => {
  const pillars = [
    {
      num: '01.',
      icon: Microscope,
      title: 'Hóa Sinh Học Chuẩn pH',
      desc: 'Loại bỏ hoàn toàn xút kiềm và dung môi công nghiệp. Cân chỉnh độ pH riêng cho da Veg-tan, Box Calf và Caviar.'
    },
    {
      num: '02.',
      icon: Award,
      title: 'Giữ 100% Vân Da Thật',
      desc: 'Sơn phủ hạt nano siêu vi thẩm thấu sâu, giữ nguyên lỗ chân lông và độ mềm nguyên bản của đồ hiệu.'
    },
    {
      num: '03.',
      icon: Cpu,
      title: 'Công Nghệ Phòng Lab',
      desc: 'Buồng quang hóa UV 365nm khử ố đế, tủ sấy tiệt trùng Ozone và súng phun Airbrush phân giải cao.'
    },
    {
      num: '04.',
      icon: HeartHandshake,
      title: 'Thực Chiến Từ ICUS',
      desc: 'Đúc kết từ hàng nghìn ca phục hồi túi & giày xa xỉ mỗi tháng tại hệ thống spa ICUS Hà Nội & TP.HCM.'
    }
  ];

  return (
    <section className="py-16 bg-[#0d0e12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-[#FF5E14]">Tiêu chuẩn kỹ thuật</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>Khoa học hóa sinh kết hợp thủ công Việt Nam</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Khác Biệt Giữa Giặt Tẩy Truyền Thống &amp; Chuẩn Phòng Lab FOX LAB
          </h2>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl p-6 bg-[#13141a] border border-white/10">
            <div className="text-xs font-semibold text-red-400 mb-2">
              Phương pháp giặt tẩy cũ
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-display">
              Rủi ro hư hỏng form &amp; cháy da
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-mono">✕</span>
                <span>Ngâm nước xà phòng kiềm cao làm cứng da bê và bung keo đế.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-mono">✕</span>
                <span>Dùng cồn công nghiệp tẩy mạnh gây loang màu và cháy biểu bì da.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-mono">✕</span>
                <span>Sơn bệt dày cộm làm mất vân hạt tự nhiên, dễ bong tróc khi gập.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-[#151720] border border-[#FF5E14]/35">
            <div className="text-xs font-semibold text-[#FF5E14] mb-2">
              Chuẩn công nghệ FOX LAB
            </div>
            <h3 className="text-lg font-bold text-white mb-4 font-display">
              An toàn cấu trúc sợi &amp; Phục hồi nguyên bản
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-200">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF5E14] font-mono">✓</span>
                <span>Vệ sinh khô bằng bọt Bio-Enzyme pH 7.0, phân giải bẩn sau 60 giây.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF5E14] font-mono">✓</span>
                <span>Sơn Nano-Pigment bám sâu, chịu uốn gập 100.000 lần không rạn nứt.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF5E14] font-mono">✓</span>
                <span>Khử ố đế bằng quang hóa photon UV 365nm, giữ nguyên độ đàn hồi cao su.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-xl p-5 bg-[#121319] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF5E14]">{item.num}</span>
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 font-display">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
