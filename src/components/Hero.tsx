import React from 'react';
import { FOXLAB_INFO } from '../data/foxlabData';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (intent?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="stage-biet" className="relative pt-28 pb-20 bg-[#0a0b0e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Journey Stage Indicator (Unboxed clean metadata) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-6">
          <span className="font-semibold text-[#FF5E14]">FOX LAB</span>
          <span aria-hidden="true">·</span>
          <span>Học viện Kỹ thuật &amp; Phòng Lab Hóa chất Đồ da</span>
          <span aria-hidden="true">·</span>
          <span>Bảo chứng bởi hệ thống ICUS (Từ 2020)</span>
        </div>

        {/* 2-Column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 py-2">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] font-display">
                Đào Tạo Kỹ Thuật Chăm Sóc Giày &amp;{' '}
                <span className="text-[#FF5E14]">Hóa Chất Đồ Da</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
                <strong className="text-white">FOX LAB</strong> chuẩn hóa nghề spa giày và túi xách hàng hiệu tại Việt Nam bằng công thức hóa sinh chuẩn pH kết hợp kỹ nghệ thủ công 1 kèm 1 trên sản phẩm thật.
              </p>

              {/* Unboxed key trust metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-zinc-400 pt-1">
                <span className="text-zinc-200 font-medium">100% Thực hành đồ thật</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-200 font-medium">Công thức pH độc quyền</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-200 font-medium">Chuyển giao mở tiệm A–Z</span>
              </div>
            </div>

            {/* Primary CTA + Secondary Fanpage Link */}
            <div className="space-y-5 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#triet-ly"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Khám Phá Khóa Học &amp; Hóa Chất</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenConsultation('Nhận tư vấn lộ trình học & bảng giá sỉ')}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Tải Khung Giáo Trình PDF
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2 border-t border-white/10">
                <span>Hotline Lab: <strong className="text-white font-mono">{FOXLAB_INFO.hotlines[0]}</strong></span>
                <span aria-hidden="true">·</span>
                <a
                  href={FOXLAB_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-[#FF5E14] transition-colors"
                >
                  <span>Fanpage Facebook Fox Lab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant Visual Studio Frame */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 bg-[#12141c] min-h-[360px] flex flex-col justify-end group shadow-2xl">
            <img
              src="/images/foxlab_hero_main.jpg"
              alt="Không gian phòng Lab đào tạo và nghiên cứu hóa chất đồ da Fox Lab"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/logo.jpg"
                  alt="Logo Fox Lab"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-contain bg-black border border-white/20 p-0.5 shrink-0"
                />
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    FOX LAB R&amp;D STUDIO
                  </div>
                  <div className="text-xs text-zinc-300">
                    TP. Hồ Chí Minh · Hà Nội · www.foxlab.vn
                  </div>
                </div>
              </div>
              <a
                href="#hoa-chat"
                className="text-xs font-semibold text-[#FF5E14] hover:underline whitespace-nowrap shrink-0"
              >
                Xem hóa chất →
              </a>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FOXLAB_INFO.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#FF5E14] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
