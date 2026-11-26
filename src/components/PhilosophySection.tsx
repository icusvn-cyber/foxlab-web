import React from 'react';
import { Microscope, HeartPulse, Target, Leaf } from 'lucide-react';

const PRINCIPLES = [
  { icon: Microscope, title: 'Hiểu chất liệu trước khi chạm tay', text: 'Mỗi loại da có độ pH và giới hạn riêng.' },
  { icon: HeartPulse, title: 'Hóa chất an toàn cho người làm nghề', text: 'Bảo vệ sức khỏe kỹ thuật viên là kim chỉ nam của chúng tôi.' },
  { icon: Target, title: 'Làm đúng một lần', text: 'Quy trình chuẩn giúp không phải đền bù, không phải làm lại.' },
  { icon: Leaf, title: 'Bền vững', text: 'Kéo dài tuổi thọ món đồ thay vì vứt bỏ.' }
];

export const PhilosophySection: React.FC = () => (
  <section id="triet-ly" className="py-16 bg-[#0d0e12] border-t border-white/5 scroll-mt-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold text-[#FF5E14] mb-3">MINDSET · TRIẾT LÝ</div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
        Giữ lại giá trị, không chỉ làm sạch một món đồ.
      </h2>
      <p className="mt-4 text-base text-zinc-300 leading-relaxed max-w-3xl">
        Mỗi đôi giày, mỗi chiếc túi đều mang một câu chuyện. Fox Lab ra đời từ hệ thống ICUS (từ 2020),
        sau hàng nghìn đơn phục hồi thật. Bài học lớn nhất chúng tôi rút ra: sai một bước hóa chất là hỏng cả một món đồ hiệu.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PRINCIPLES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-5 rounded-xl bg-[#12141c] border border-white/10 flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FF5E14]/15 border border-[#FF5E14]/30 flex items-center justify-center text-[#FF5E14] shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-display">{title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm font-semibold tracking-wide text-zinc-200">
        Chất lượng · Tận tâm · Uy tín · Bền vững
      </div>
    </div>
  </section>
);
