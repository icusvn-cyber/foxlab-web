import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { FOXLAB_INFO } from '../data/foxlabData';

interface NavbarProps {
  onOpenConsultation: (intent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3 Primary Menu Items as requested by the user
  const primaryMenuItems = [
    { name: '1. Quy Trình', href: '#quy-trinh', badge: 'SOP Lab' },
    { name: '2. Hóa Chất', href: '#hoa-chat', badge: '06 Dòng' },
    { name: '3. 100 Trường Hợp Lỗi', href: '#100-truong-hop-loi', badge: 'Thực Tế' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0a0b0e]/95 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-[#0a0b0e]/85 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single-line Brand Wordmark with Official Facebook Logo */}
        <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          <img
            src="/logo.jpg"
            alt="Fox Lab Logo"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg object-contain bg-black border border-[#FF5E14]/30 shadow-md p-0.5 group-hover:border-[#FF5E14] transition-colors"
          />
          <span className="font-extrabold text-lg tracking-tight text-white font-display">
            FOX <span className="text-[#FF5E14]">LAB</span>
          </span>
        </a>

        {/* Zone 2: 3 Optimized Main Menu Pillars */}
        <nav className="hidden md:flex items-center gap-8">
          {primaryMenuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-zinc-200 hover:text-white hover:underline underline-offset-8 decoration-[#FF5E14] decoration-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>{item.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-[#FF5E14] border border-white/10">
                {item.badge}
              </span>
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Fanpage Link */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={FOXLAB_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
            title="Fanpage Facebook Fox Lab"
          >
            <span>Facebook Page</span>
            <ExternalLink className="w-3 h-3 text-[#1877F2]" />
          </a>

          <button
            onClick={() => onOpenConsultation('Tư vấn khóa học & hóa chất')}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-md"
          >
            Đăng Ký Tư Vấn
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-white/5 border border-white/10"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-white/10 px-4 py-4 space-y-2">
          {primaryMenuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:text-orange-400 hover:bg-white/5"
            >
              <span>{item.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FF5E14]/10 text-[#FF5E14]">
                {item.badge}
              </span>
            </a>
          ))}
          <a
            href={FOXLAB_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 pt-2 border-t border-white/5"
          >
            <span>Fanpage Facebook Fox Lab</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#1877F2]" />
          </a>
        </div>
      )}
    </header>
  );
};
