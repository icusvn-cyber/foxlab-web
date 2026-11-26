/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { StudentShowcase } from './components/StudentShowcase';
import { PhilosophySection } from './components/PhilosophySection';
import { ChemicalsCompact } from './components/ChemicalsCompact';
import { FaultCasesCompact } from './components/FaultCasesCompact';
import { RoiCalculator } from './components/RoiCalculator';
import { GanBoSection } from './components/GanBoSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FOXLAB_INFO } from './data/foxlabData';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultationIntent, setConsultationIntent] = useState<string>('Tư vấn khóa học');

  const handleOpenConsultation = (intent?: string) => {
    if (intent) {
      setConsultationIntent(intent);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-zinc-100 font-sans antialiased selection:bg-[#FF5E14] selection:text-white">
      {/* Top 3-Zone Navigation with 3 Primary Menu Pillars: 1. Quy Trình · 2. Hóa Chất · 3. 100 Trường Hợp Lỗi */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* Mở đầu */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Mindset / Triết lý */}
        <PhilosophySection />

        {/* Hiểu: Quy trình */}
        <WorkflowSection onOpenConsultation={handleOpenConsultation} />

        {/* Biết: Hóa chất + 100 trường hợp lỗi (chi tiết sau nút Xem thêm) */}
        <ChemicalsCompact />
        <FaultCasesCompact />

        {/* Ước tính doanh thu & thời gian hoàn vốn mở xưởng */}
        <RoiCalculator onOpenConsultation={handleOpenConsultation} />

        {/* Yêu: Học viên */}
        <StudentShowcase onOpenConsultation={handleOpenConsultation} />

        {/* Gắn bó lâu dài */}
        <GanBoSection />
      </main>

      {/* Quiet Minimal Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Lead Capture Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultIntent={consultationIntent}
      />

      {/* Fast Contact Action Buttons */}
      <aside aria-label="Liên hệ nhanh" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={FOXLAB_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xl transition-colors whitespace-nowrap shrink-0"
          title="Fanpage Facebook Fox Lab"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Facebook Fox Lab</span>
        </a>

        <a
          href={`tel:${FOXLAB_INFO.hotlines[0].replace(/\s/g, '')}`}
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#FF5E14] hover:bg-[#e04f0c] text-white text-xs font-semibold font-mono shadow-xl transition-colors whitespace-nowrap shrink-0"
          title={`Gọi Hotline ${FOXLAB_INFO.hotlines[0]}`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>{FOXLAB_INFO.hotlines[0]}</span>
        </a>
      </aside>
    </div>
  );
}
