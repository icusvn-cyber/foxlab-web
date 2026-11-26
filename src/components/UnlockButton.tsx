import React from 'react';
import { Lock } from 'lucide-react';
import { FOXLAB_INFO } from '../data/foxlabData';

export const ZALO_URL = `https://zalo.me/${FOXLAB_INFO.hotlines[0].replace(/\s/g, '')}`;

export const UnlockButton: React.FC<{ label: string; note: string }> = ({ label, note }) => (
  <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-[#171924] to-[#12131a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-[#FF5E14]/20 border border-[#FF5E14]/40 text-[#FF5E14] shrink-0">
        <Lock className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-bold text-white">{label}</div>
        <div className="text-xs text-zinc-400">{note}</div>
      </div>
    </div>
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0"
    >
      Xem thêm · Mua tài liệu qua Zalo
    </a>
  </div>
);
