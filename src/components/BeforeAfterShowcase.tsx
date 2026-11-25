import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/foxlabData';
import { Eye } from 'lucide-react';

interface BeforeAfterShowcaseProps {
  onOpenConsultation: (intent?: string) => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onOpenConsultation }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(BEFORE_AFTER_CASES[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [showOnlyAfter, setShowOnlyAfter] = useState<boolean>(false);

  const activeCase = BEFORE_AFTER_CASES.find((c) => c.id === selectedCaseId) || BEFORE_AFTER_CASES[0];

  return (
    <section id="stage-yeu" className="py-20 bg-[#0d0e12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage 03 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <span className="font-semibold text-[#FF5E14]">Hành trình 03. YÊU</span>
              <span aria-hidden="true">·</span>
              <span>Minh chứng thực tế tại Lab</span>
              <span aria-hidden="true">·</span>
              <span>Trước &amp; Sau xử lý</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Sự Thay Đổi Trước &amp; Sau Khi Phục Hồi
            </h2>
          </div>

          {/* 3 Case Visual Selector Tabs */}
          <div className="flex overflow-x-auto gap-2 scrollbar-none">
            {BEFORE_AFTER_CASES.map((item) => {
              const isSelected = item.id === selectedCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedCaseId(item.id);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#FF5E14] text-white border-[#FF5E14]'
                      : 'bg-[#14161f] text-zinc-300 border-white/10 hover:text-white'
                  }`}
                >
                  {item.brand} · {item.itemType}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Slider + Concise Spec */}
        <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 select-none bg-black">
                <img
                  src={activeCase.afterImg}
                  alt={`Sau phục hồi: ${activeCase.title}`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: showOnlyAfter
                      ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
                      : `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                  }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`Trước phục hồi: ${activeCase.title}`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {!showOnlyAfter && (
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize flex items-center justify-center"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white text-zinc-900 shadow-lg flex items-center justify-center font-bold text-xs">
                      ⇆
                    </div>
                  </div>
                )}

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Kéo để so sánh trước và sau"
                />
              </div>

              <div className="flex items-center justify-between pt-3 text-xs text-zinc-400">
                <span>Kéo thanh trượt sang trái/phải để xem sự khác biệt</span>
                <button
                  onClick={() => setShowOnlyAfter(!showOnlyAfter)}
                  className="text-[#FF5E14] hover:underline flex items-center gap-1 cursor-pointer font-medium whitespace-nowrap shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showOnlyAfter ? 'Bật thanh so sánh' : 'Xem 100% sau phục hồi'}</span>
                </button>
              </div>
            </div>

            {/* Right: Concise Technical Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-zinc-400 mb-1">
                    <span className="text-[#FF5E14] font-semibold">{activeCase.brand}</span>
                    <span className="mx-2" aria-hidden="true">·</span>
                    <span>Hoàn thiện trong {activeCase.turnaroundTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {activeCase.title}
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#0d0f15] border border-white/10">
                    <span className="text-red-400 font-semibold block mb-1">Tình trạng ban đầu:</span>
                    <span className="text-zinc-300">{activeCase.problem}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0d0f15] border border-white/10">
                    <span className="text-emerald-400 font-semibold block mb-1">Phác đồ Fox Lab:</span>
                    <span className="text-zinc-300">{activeCase.solution}</span>
                  </div>
                </div>

                <div className="text-xs text-zinc-400">
                  <span>Hóa chất sử dụng: </span>
                  <strong className="text-zinc-200 font-mono">{activeCase.chemicalsUsed.join(' · ')}</strong>
                </div>

                <p className="text-xs text-zinc-300 italic">
                  "{activeCase.technicianNotes}"
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation(`Đăng ký học kỹ thuật: ${activeCase.title}`)}
                className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors cursor-pointer"
              >
                Học Kỹ Thuật Phục Hồi Ca Này
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
