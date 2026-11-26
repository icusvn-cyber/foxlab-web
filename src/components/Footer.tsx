import React from 'react';
import { FOXLAB_INFO } from '../data/foxlabData';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (intent?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-zinc-400 border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Fox Lab"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg object-contain bg-black border border-white/15 p-0.5"
              />
              <span className="font-extrabold text-xl text-white tracking-tight font-display">
                FOX <span className="text-[#FF5E14]">LAB</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {FOXLAB_INFO.tagline}. Bảo chứng kỹ thuật từ hệ sinh thái chăm sóc đồ hiệu ICUS (Thành lập 2020).
            </p>
            <div className="flex items-center gap-3 pt-1 text-xs">
              <a
                href={FOXLAB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-[#FF5E14] transition-colors"
              >
                <span>Facebook Fanpage</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`https://zalo.me/${FOXLAB_INFO.hotlines[0].replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-[#FF5E14] transition-colors"
              >
                Zalo Tư Vấn
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-8 space-y-2 text-xs">
            <h4 className="font-bold text-white font-display">Liên Hệ Trực Tiếp</h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF5E14] shrink-0 mt-0.5" />
              <span>586 Nguyễn Đình Chiểu, Q.3, TP.HCM · 43 Ngõ 40 Tô Vĩnh Diện, Hà Nội</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FF5E14] shrink-0" />
              <span className="font-mono text-zinc-200">{FOXLAB_INFO.hotlines.join(' · ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#FF5E14] shrink-0" />
              <span className="font-mono text-zinc-200">{FOXLAB_INFO.emails.join(' · ')}</span>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {FOXLAB_INFO.established}–2026 FOX LAB Vietnam. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
