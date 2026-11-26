import React from 'react';
import { CHEMICAL_PRODUCTS } from '../data/foxlabData';
import { UnlockButton } from './UnlockButton';

const firstClause = (s: string) => s.split(/[,.]/)[0];

export const ChemicalsCompact: React.FC = () => (
  <section id="hoa-chat" className="py-16 bg-[#0d0e12] border-t border-white/5 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold text-[#FF5E14] mb-3">BIẾT · HÓA CHẤT</div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
        6 dòng hóa chất chuẩn pH phòng Lab
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CHEMICAL_PRODUCTS.map((c) => (
          <div key={c.id} className="p-5 rounded-xl bg-[#12141c] border border-white/10">
            <div className="text-[11px] font-mono text-[#FF5E14]">{c.code} · {c.pH}</div>
            <h3 className="mt-1 text-sm font-bold text-white font-display">{c.name.replace('Fox Lab ', '')}</h3>
            <p className="mt-1 text-sm text-zinc-400">{firstClause(c.shortDesc)}.</p>
          </div>
        ))}
      </div>
      <UnlockButton
        label="Công dụng chi tiết, tỷ lệ pha và cách dùng từng dòng"
        note="Dành cho người đã mua tài liệu Fox Lab."
      />
    </div>
  </section>
);
