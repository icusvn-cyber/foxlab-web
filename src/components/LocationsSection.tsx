import React, { useState } from 'react';
import { FOXLAB_INFO, FAQS } from '../data/foxlabData';
import { MapPin, Phone, Clock, ExternalLink, Navigation, ChevronDown, ChevronUp } from 'lucide-react';

interface LocationsSectionProps {
  onOpenConsultation: (intent?: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="stage-gan-bo" className="py-20 bg-[#0a0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage 04 Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-[#FF5E14]">Hành trình 04. GẮN BÓ</span>
            <span aria-hidden="true">·</span>
            <span>Đồng hành trọn đời</span>
            <span aria-hidden="true">·</span>
            <span>Hệ thống 03 cơ sở TP.HCM &amp; Hà Nội</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Mạng Lưới Phòng Lab &amp; Hợp Tác Dài Hạn
          </h2>
        </div>

        {/* 3 Visual Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {FOXLAB_INFO.branches.map((branch, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12141c] border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border-b border-white/10">
                  <img
                    src={branch.image}
                    alt={branch.type}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <div className="text-xs text-zinc-400 mb-1">
                    <span className="text-[#FF5E14] font-semibold">{branch.city}</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>Cơ sở 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 font-display">
                    {branch.type}
                  </h3>

                  <div className="space-y-2 text-xs text-zinc-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#FF5E14] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="font-mono font-semibold hover:text-white">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF5E14] shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FF5E14]" />
                  <span>Bản đồ</span>
                </a>

                <button
                  onClick={() => onOpenConsultation(`Hẹn lịch tham quan: ${branch.type}`)}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-white/5 hover:bg-[#FF5E14] border border-white/10 hover:border-[#FF5E14] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Hẹn Lịch Đến Lab
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Partnership + FAQ Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Wholesale & Community Loyalty */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 space-y-4">
              <div className="text-xs font-semibold text-[#FF5E14]">
                Chính sách Đại lý &amp; Cựu học viên
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Cung Ứng Hóa Chất Giá Sỉ &amp; Hỗ Trợ Kỹ Thuật Trọn Đời
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Chiết khấu lên đến <strong>40%</strong> cho đơn hàng can 5L tại xưởng, hỗ trợ gia công nhãn riêng OEM và kết nối cộng đồng kỹ thuật viên Fox Lab trên toàn quốc.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultation('Đăng ký đại lý hóa chất giá sỉ')}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Nhận Bảng Giá Sỉ Xưởng
                </button>
                <a
                  href={FOXLAB_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Theo Dõi Fanpage Fox Lab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Concise FAQ */}
          <div className="lg:col-span-6 space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase mb-3 font-display">
              Câu Hỏi Thường Gặp Trước Khi Nhập Học
            </h3>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#12141c] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#FF5E14] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
