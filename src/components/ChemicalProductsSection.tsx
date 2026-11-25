import React, { useState } from 'react';
import { CHEMICAL_PRODUCTS } from '../data/foxlabData';
import { ChemicalProduct } from '../types';
import { Check, X } from 'lucide-react';

interface ChemicalProductsSectionProps {
  onInquireChemical: (chemicalName: string) => void;
}

export const ChemicalProductsSection: React.FC<ChemicalProductsSectionProps> = ({ onInquireChemical }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeProductDetail, setActiveProductDetail] = useState<ChemicalProduct | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả (06)' },
    { id: 'cleaning', label: 'Làm Sạch Sinh Học' },
    { id: 'restoration', label: 'Khử Ố & Dưỡng Da' },
    { id: 'dye', label: 'Sơn Nano Pigment' },
    { id: 'protection', label: 'Chống Thấm Nano' },
    { id: 'adhesives', label: 'Keo Nhiệt & Vibram' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? CHEMICAL_PRODUCTS
    : CHEMICAL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="hoa-chat" className="py-20 bg-[#0d0e12] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <span className="font-semibold text-[#FF5E14]">02. HÓA CHẤT CHUYÊN DỤNG</span>
              <span aria-hidden="true">·</span>
              <span>Công thức pH cân bằng</span>
              <span aria-hidden="true">·</span>
              <span>An toàn cho đồ hiệu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              06 Dòng Hóa Chất Chuẩn Phòng Lab Fox Lab
            </h2>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div className="flex overflow-x-auto gap-1.5 p-1.5 rounded-xl bg-[#14161f] border border-white/10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF5E14] text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Product Photography Showcase Card */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 bg-[#12141c] relative group shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[2.8/1] min-h-[220px] w-full overflow-hidden">
            <img
              src="/images/chemical-bottles-all.jpg"
              alt="Hệ hóa chất chuyên dụng đồ da Fox Lab"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center p-6 sm:p-10 max-w-lg">
              <span className="text-[11px] font-mono font-bold text-[#FF5E14] uppercase tracking-wider mb-1">
                FOX LAB CHEMICAL LAB LINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                Hóa Chất Độc Quyền Cho Spa Giày &amp; Đồ Da
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                100% dung dịch kiểm soát độ pH chính xác, bảo toàn cấu trúc sợi collagen tự nhiên và lớp sơn gốc của Hermès, Chanel, Louis Vuitton, Air Jordan.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  ✓ Chiết khấu sỉ đến 40%
                </span>
                <span className="text-zinc-500">·</span>
                <span className="text-xs font-mono text-zinc-300">
                  Giao hàng toàn quốc
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-[#13151e] border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Product Studio Image */}
                <div className="relative aspect-[4/3] w-full bg-[#0b0d12] overflow-hidden border-b border-white/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono mb-2">
                    <span className="text-[#FF5E14] font-bold">{product.code}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.pH}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.volume}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 font-display">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <ul className="space-y-1.5">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5E14] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-zinc-400 block">Giá lẻ / sỉ tham khảo</span>
                  <span className="text-sm font-bold text-white font-mono tabular-nums">
                    {product.priceEstimate}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveProductDetail(product)}
                    className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Quy Trình
                  </button>
                  <button
                    onClick={() => onInquireChemical(product.name)}
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Báo Giá Sỉ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Technical Protocol Modal */}
      {activeProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#14161f] border border-white/15 rounded-2xl max-w-lg w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveProductDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
              <img
                src={activeProductDetail.image}
                alt={activeProductDetail.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-1">
              <span className="text-[#FF5E14] font-bold">{activeProductDetail.code}</span>
              <span aria-hidden="true">·</span>
              <span>{activeProductDetail.pH}</span>
              <span aria-hidden="true">·</span>
              <span>{activeProductDetail.volume}</span>
            </div>

            <h3 className="text-xl font-bold text-white font-display">
              {activeProductDetail.name}
            </h3>
            <p className="text-xs text-zinc-400 mt-1 mb-4">
              Ứng dụng: {activeProductDetail.idealFor.join(' · ')}
            </p>

            <div className="space-y-2 py-4 border-y border-white/10">
              <h4 className="text-xs font-bold text-white uppercase font-display">
                Quy trình 3 bước chuẩn phòng Lab:
              </h4>
              {activeProductDetail.usageSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span className="font-mono font-bold text-[#FF5E14]">0{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const name = activeProductDetail.name;
                setActiveProductDetail(null);
                onInquireChemical(name);
              }}
              className="mt-5 w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors cursor-pointer"
            >
              Nhận Báo Giá Sỉ &amp; Mẫu Thử {activeProductDetail.code}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
