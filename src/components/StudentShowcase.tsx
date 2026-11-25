import React from 'react';
import { STUDENT_WORKSHOPS } from '../data/foxlabData';
import { CheckCircle } from 'lucide-react';

interface StudentShowcaseProps {
  onOpenConsultation: (intent?: string) => void;
}

export const StudentShowcase: React.FC<StudentShowcaseProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-[#0d0e12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-[#FF5E14]">Học viên Thành công</span>
            <span aria-hidden="true">·</span>
            <span> hơn 350+ xưởng đã vận hành toàn quốc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Kết Quả Thực Tế Từ Các Chủ Xưởng Tốt Nghiệp Fox Lab
          </h2>
        </div>

        {/* 3 Visual Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {STUDENT_WORKSHOPS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#13151e] border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border-b border-white/10">
                  <img
                    src={item.image}
                    alt={item.role}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                    <span className="font-semibold text-white">{item.name}</span>
                    <span className="font-mono text-[#FF5E14] font-bold">{item.metric}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mb-3">
                    {item.role} · {item.location}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Credential Block */}
        <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs text-[#FF5E14] font-semibold">
                Bảo chứng năng lực hành nghề
              </div>
              <h3 className="text-2xl font-extrabold text-white font-display">
                Chứng Chỉ Fox Lab Certified Technician
              </h3>
              <p className="text-sm text-zinc-300 max-w-2xl">
                Cấp sau kỳ thi sát hạch thực hành trên đồ hiệu thật. Mã số chứng chỉ được lưu trữ trực tuyến, đi kèm quyền lợi nhập hóa chất giá sỉ trọn đời.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span>Tra cứu mã số kỹ thuật viên online</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span>Chiết khấu 30–40% hóa chất Fox Lab</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span>Hỗ trợ xử lý ca khó 24/7 cùng Master Lab</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />
                  <span>Cập nhật công nghệ mới miễn phí</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-52 h-64 rounded-xl bg-[#0d0f15] border border-[#FF5E14]/40 p-5 flex flex-col justify-between items-center text-center">
                <img
                  src="/logo.jpg"
                  alt="Fox Lab Seal"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-lg object-contain bg-black border border-white/15 p-0.5"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#FF5E14] font-bold block">
                    CERTIFIED TECHNICIAN
                  </span>
                  <h4 className="text-xs font-bold text-white font-display">
                    CHỨNG CHỈ KỸ THUẬT ĐỒ DA
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Fox Lab Academy Vietnam
                  </p>
                </div>
                <div className="w-full pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                  <span>FL-2026</span>
                  <span className="text-[#FF5E14] font-bold">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
