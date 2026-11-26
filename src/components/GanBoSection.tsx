import React from 'react';
import { COURSES, FOXLAB_INFO } from '../data/foxlabData';
import { ZALO_URL } from './UnlockButton';

export const GanBoSection: React.FC = () => (
  <section id="gan-bo" className="py-16 bg-[#0a0b0e] border-t border-white/5 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-xs font-semibold text-[#FF5E14] mb-3">GẮN BÓ LÂU DÀI</div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
        Học nghề, mở tiệm và đồng hành cùng Fox Lab
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {COURSES.map((c) => (
          <div key={c.id} className="p-5 rounded-xl bg-[#12141c] border border-white/10">
            <h3 className="text-sm font-bold text-white font-display">{c.title}</h3>
            <p className="mt-1 text-xs text-zinc-400">{c.duration} · {c.level}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-zinc-300">
        <div>
          {FOXLAB_INFO.branches.map((b) => b.city).join(' · ')} · Hotline{' '}
          <strong className="text-white font-mono">{FOXLAB_INFO.hotlines[0]}</strong>
        </div>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors text-center"
        >
          Nhắn Zalo tư vấn
        </a>
      </div>
    </div>
  </section>
);
