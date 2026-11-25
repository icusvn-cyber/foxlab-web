/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { CourseSection } from './components/CourseSection';
import { ChemicalProductsSection } from './components/ChemicalProductsSection';
import { FaultCases100Section } from './components/FaultCases100Section';
import { RoiCalculator } from './components/RoiCalculator';
import { StudentShowcase } from './components/StudentShowcase';
import { LocationsSection } from './components/LocationsSection';
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
        {/* GIAI ĐOẠN 01: BIẾT (Awareness, Lab Studio Identity & Brand Assets) */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* MỤC 01 MENU: QUY TRÌNH (SOP 5 Bước Chuẩn Hóa Phòng Lab) */}
        <WorkflowSection onOpenConsultation={handleOpenConsultation} />

        {/* CÁC KHÓA HỌC THỰC HÀNH 1 KÈM 1 */}
        <CourseSection onSelectCourse={(title) => handleOpenConsultation(`Đăng ký khóa học: ${title}`)} />

        {/* MỤC 02 MENU: HÓA CHẤT (06 Dòng Hóa Chất Độc Quyền Chuẩn pH Phòng Lab) */}
        <ChemicalProductsSection onInquireChemical={(chemName) => handleOpenConsultation(`Báo giá sỉ hóa chất: ${chemName}`)} />

        {/* MỤC 03 MENU: 100 TRƯỜNG HỢP LỖI ĐÃ GẶP (Thư Viện Thực Tế & Before/After) */}
        <FaultCases100Section onOpenConsultation={handleOpenConsultation} />

        {/* CASE SHOWCASE BỔ SUNG & ROI MỞ TIỆM */}
        <RoiCalculator onOpenConsultation={handleOpenConsultation} />
        <StudentShowcase onOpenConsultation={handleOpenConsultation} />

        {/* GIAI ĐOẠN 04: GẮN BÓ (Cơ Sở Đào Tạo, Hợp Tác Sỉ & FAQs) */}
        <LocationsSection onOpenConsultation={handleOpenConsultation} />
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
