import React, { useState, useMemo } from 'react';
import { HUNDRED_FAULT_CASES, FAULT_CATEGORIES, FaultCase } from '../data/cases100Data';
import { Search, AlertTriangle, ShieldCheck, Clock, ArrowRight, X, Sparkles, Filter } from 'lucide-react';

interface FaultCases100SectionProps {
  onOpenConsultation: (intent?: string) => void;
}

export const FaultCases100Section: React.FC<FaultCases100SectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeCase, setActiveCase] = useState<FaultCase | null>(null);

  // Filter cases based on category and search query
  const filteredCases = useMemo(() => {
    return HUNDRED_FAULT_CASES.filter((c) => {
      const matchCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.rootCause.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.chemicalUsed.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getSeverityBadge = (severity: FaultCase['severity']) => {
    switch (severity) {
      case 'critical':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'severe':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'moderate':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      default:
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    }
  };

  return (
    <section id="100-truong-hop-loi" className="py-20 bg-[#0d0e13] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <span className="font-semibold text-[#FF5E14]">03. THƯ VIỆN CA BỆNH THỰC TẾ</span>
              <span aria-hidden="true">·</span>
              <span>100 Trường Hợp Lỗi Đã Gặp</span>
              <span aria-hidden="true">·</span>
              <span>Dữ Liệu Lâm Sàng Phòng Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              100 Trường Hợp Lỗi Đồ Da &amp; Sneaker Thực Tế
            </h2>
            <p className="text-sm text-zinc-300 mt-2 max-w-2xl">
              Tổng hợp 100 ca hư tổn thường gặp nhất tại các spa đồ hiệu Việt Nam: nguyên nhân gốc rễ, phác đồ hóa chất xử lý và tỷ lệ khôi phục.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Yêu cầu chẩn đoán ca lỗi chưa có trong danh mục')}
            className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-lg"
          >
            Gửi Hình Ảnh Giày/Túi Cần Cứu Hộ
          </button>
        </div>

        {/* Featured Case: Interactive Before/After Split Slider */}
        <div className="mb-12 rounded-2xl bg-[#12141c] border border-white/10 p-6 md:p-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Image Slider */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#FF5E14] font-bold">
                  CASE TIÊU BIỂU #001 · AIR JORDAN 11 RETRO
                </span>
                <span className="text-xs text-zinc-400">
                  Kéo thanh trượt để so sánh Trước / Sau
                </span>
              </div>

              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden select-none border border-white/10 bg-black">
                {/* AFTER Image (Full width background) */}
                <img
                  src="/images/ba-sneaker-after.jpg"
                  alt="Sneaker sau khi khử ố quang hóa Fox Lab"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-emerald-500/90 text-white font-mono text-xs font-bold shadow">
                  SAU PHỤC HỒI (98%)
                </span>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="/images/ba-sneaker-before.jpg"
                    alt="Sneaker trước khi khử ố quang hóa Fox Lab"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', maxWidth: 'none' }}
                  />
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-rose-600/90 text-white font-mono text-xs font-bold shadow">
                    TRƯỚC XỬ LÝ (Ố VÀNG)
                  </span>
                </div>

                {/* Split Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20 flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#FF5E14] border-2 border-white text-white flex items-center justify-center shadow-lg text-[10px] font-bold">
                    ↔
                  </div>
                </div>

                {/* Invisible Touch Slider */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Thanh trượt so sánh trước và sau"
                />
              </div>
            </div>

            {/* Case Medical Record Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FF5E14]/10 text-[#FF5E14] border border-[#FF5E14]/20">
                  Lỗi #01 · Oxy hóa đế cao su Icy
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  Khử Ố Quang Hóa Đảo Ngược Oxy Hóa Cao Su
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Đế cao su trong suốt bị ngả vàng do lưu huỳnh trong cao su phản ứng với tia cực tím tự nhiên. Fox Lab dùng gel FL-UNY-02 kết hợp buồng UV 365nm đảo ngược sắc vàng mà không làm giòn nứt cao su.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1017] border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Hóa chất chỉ định:</span>
                  <span className="text-white font-mono font-semibold">FL-UNY-02 UV Gel</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Thời gian xử lý:</span>
                  <span className="text-white font-mono font-semibold">24 giờ (Ủ UV 3h)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Độ khôi phục:</span>
                  <span className="text-emerald-400 font-mono font-bold">98% độ trong suốt</span>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation('Tư vấn cứu hộ đế giày ố vàng')}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors cursor-pointer text-center"
              >
                Nhận Phác Đồ Xử Lý Cho Đôi Này
              </button>
            </div>

          </div>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 p-1 rounded-xl bg-[#14161f] border border-white/10 scrollbar-none">
            {FAULT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF5E14] text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm ca lỗi (ố vàng, rách, mốc, keo...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#14161f] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5E14]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-zinc-400 mb-4 flex items-center justify-between">
          <span>
            Hiển thị <strong className="text-white font-mono">{filteredCases.length}</strong> trường hợp lỗi phù hợp
          </span>
          <span className="text-[11px] text-[#FF5E14]">
            * Bấm vào từng ca để xem phác đồ chi tiết
          </span>
        </div>

        {/* Grid of 100 Fault Cases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCases.map((fc) => (
            <div
              key={fc.id}
              onClick={() => setActiveCase(fc)}
              className="p-5 rounded-xl bg-[#13151e] border border-white/10 hover:border-[#FF5E14]/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#FF5E14]">
                    #{String(fc.id).padStart(3, '0')} · {fc.code}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${getSeverityBadge(
                      fc.severity
                    )}`}
                  >
                    {fc.severityLabel}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-[#FF5E14] transition-colors font-display line-clamp-2 mb-1.5">
                  {fc.title}
                </h4>

                <p className="text-xs text-zinc-400 font-mono mb-3">
                  Sản phẩm: <span className="text-zinc-200">{fc.item}</span>
                </p>

                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                  <strong className="text-zinc-300">Nguyên nhân:</strong> {fc.rootCause}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#FF5E14] font-mono font-medium truncate max-w-[200px]">
                  {fc.chemicalUsed.split('+')[0]}
                </span>
                <span className="text-emerald-400 font-mono font-bold shrink-0">
                  {fc.successRate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Case Detail Modal */}
        {activeCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl bg-[#12141c] border border-white/15 p-6 shadow-2xl">
              <button
                onClick={() => setActiveCase(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#FF5E14]">
                  #{String(activeCase.id).padStart(3, '0')} · {activeCase.code}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-semibold ${getSeverityBadge(
                    activeCase.severity
                  )}`}
                >
                  {activeCase.severityLabel}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-display mb-2">
                {activeCase.title}
              </h3>

              <div className="p-3 rounded-xl bg-[#0b0c10] border border-white/10 space-y-2 text-xs mb-4">
                <div>
                  <span className="text-zinc-400">Dòng sản phẩm:</span>{' '}
                  <strong className="text-white font-mono">{activeCase.item}</strong>
                </div>
                <div>
                  <span className="text-zinc-400">Nguyên nhân gốc rễ:</span>{' '}
                  <span className="text-zinc-200">{activeCase.rootCause}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Phác đồ xử lý:</span>{' '}
                  <span className="text-zinc-200">{activeCase.solution}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Hóa chất Fox Lab:</span>{' '}
                  <strong className="text-[#FF5E14] font-mono">{activeCase.chemicalUsed}</strong>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span>
                    Thời gian: <strong className="text-white font-mono">{activeCase.turnaround}</strong>
                  </span>
                  <span>
                    Tỷ lệ khôi phục: <strong className="text-emerald-400 font-mono font-bold">{activeCase.successRate}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const intent = `Tư vấn xử lý lỗi: [${activeCase.code}] ${activeCase.title}`;
                    setActiveCase(null);
                    onOpenConsultation(intent);
                  }}
                  className="flex-1 py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors cursor-pointer text-center"
                >
                  Yêu Cầu Cứu Hộ Ca Lỗi Này
                </button>
                <button
                  onClick={() => setActiveCase(null)}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
