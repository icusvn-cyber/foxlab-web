import React from 'react';
import { FAULT_CATEGORIES, HUNDRED_FAULT_CASES } from '../data/cases100Data';
import { UnlockButton } from './UnlockButton';

export const FaultCasesCompact: React.FC = () => {
  const groups = FAULT_CATEGORIES.filter((g) => g.id !== 'all').map((g) => ({
    ...g,
    example: HUNDRED_FAULT_CASES.find((c) => c.category === g.id)?.title
  }));
  return (
    <section id="100-truong-hop-loi" className="py-16 bg-[#0a0b0e] border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs font-semibold text-[#FF5E14] mb-3">BIẾT · 100 TRƯỜNG HỢP LỖI</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
          100 ca lỗi thật đã gặp và cách xử lý
        </h2>
        <p className="mt-4 text-base text-zinc-300 max-w-3xl">
          Mỗi ca ghi rõ nguyên nhân, hóa chất đã dùng và tỷ lệ thành công. Biết trước lỗi là tránh được đền bù.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div key={g.id} className="p-5 rounded-xl bg-[#12141c] border border-white/10">
              <h3 className="text-sm font-bold text-white font-display">{g.label}</h3>
              {g.example && <p className="mt-2 text-xs text-zinc-400">Ví dụ: {g.example}</p>}
            </div>
          ))}
        </div>
        <UnlockButton
          label="Xem đủ 100 ca: nguyên nhân, hóa chất, cách xử lý"
          note="Dành cho người đã mua tài liệu Fox Lab."
        />
      </div>
    </section>
  );
};
