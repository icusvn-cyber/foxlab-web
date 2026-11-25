import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation: (intent?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [itemsPerDay, setItemsPerDay] = useState<number>(12);
  const [avgTicketPrice, setAvgTicketPrice] = useState<number>(250000);
  const [workingDays, setWorkingDays] = useState<number>(26);
  const initialInvestment = 65000000;

  const monthlyVolume = itemsPerDay * workingDays;
  const monthlyRevenue = monthlyVolume * avgTicketPrice;
  const chemicalCost = monthlyRevenue * 0.12;
  const fixedOverhead = 12000000;
  const packagingAndOther = monthlyRevenue * 0.05;

  const totalMonthlyCost = chemicalCost + fixedOverhead + packagingAndOther;
  const netMonthlyProfit = Math.max(0, monthlyRevenue - totalMonthlyCost);
  const paybackMonths = netMonthlyProfit > 0
    ? (initialInvestment / netMonthlyProfit).toFixed(1)
    : '—';

  const formatVND = (num: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);

  return (
    <section id="calculator" className="py-20 bg-[#0a0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-[#FF5E14]">Bài toán Đầu tư</span>
            <span aria-hidden="true">·</span>
            <span>Biên lợi nhuận ngành &gt; 65%</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Ước Tính Doanh Thu &amp; Thời Gian Hoàn Vốn Mở Xưởng
          </h2>
        </div>

        <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-zinc-300">Sản lượng xử lý mỗi ngày:</span>
                  <span className="text-[#FF5E14] font-bold font-mono tabular-nums">{itemsPerDay} đôi / túi</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="1"
                  value={itemsPerDay}
                  onChange={(e) => setItemsPerDay(Number(e.target.value))}
                  className="w-full accent-[#FF5E14] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-zinc-300">Giá dịch vụ trung bình / món:</span>
                  <span className="text-[#FF5E14] font-bold font-mono tabular-nums">{formatVND(avgTicketPrice)}</span>
                </div>
                <input
                  type="range"
                  min="120000"
                  max="700000"
                  step="10000"
                  value={avgTicketPrice}
                  onChange={(e) => setAvgTicketPrice(Number(e.target.value))}
                  className="w-full accent-[#FF5E14] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-zinc-300">Số ngày hoạt động / tháng:</span>
                  <span className="text-[#FF5E14] font-bold font-mono tabular-nums">{workingDays} ngày</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="30"
                  step="1"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(Number(e.target.value))}
                  className="w-full accent-[#FF5E14] bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <p className="text-xs text-zinc-400 pt-2">
                Chi phí hóa chất giá sỉ tại Fox Lab chỉ chiếm ~12% doanh thu, giúp tối ưu dòng tiền ngay từ tháng đầu tiên.
              </p>
            </div>

            {/* Right Financial Readout */}
            <div className="lg:col-span-6 rounded-xl bg-[#0d0f15] border border-white/10 p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-zinc-400 block mb-1">Doanh thu tháng ({monthlyVolume} món):</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                    {formatVND(monthlyRevenue)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#FF5E14] block mb-1">Lợi nhuận ròng / tháng:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#FF5E14] font-mono tabular-nums">
                    {formatVND(netMonthlyProfit)}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-zinc-400 pt-3 border-t border-white/10">
                <div className="flex justify-between">
                  <span>Hóa chất Fox Lab &amp; vật tư (12%):</span>
                  <span className="font-mono tabular-nums text-zinc-200">{formatVND(chemicalCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mặt bằng, điện nước &amp; đóng gói:</span>
                  <span className="font-mono tabular-nums text-zinc-200">{formatVND(fixedOverhead + packagingAndOther)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#FF5E14] shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">Thời gian hoàn vốn dự kiến:</span>
                    <span className="text-lg font-extrabold text-white font-mono tabular-nums">
                      {paybackMonths} Tháng
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`Nhận bản kế hoạch mở tiệm (${itemsPerDay} món/ngày)`)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Nhận Bảng Dự Toán Mở Tiệm
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
