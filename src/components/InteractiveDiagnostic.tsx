import React, { useState } from 'react';
import { DIAGNOSTIC_MATERIALS, DIAGNOSTIC_ISSUES } from '../data/foxlabData';
import { CheckCircle } from 'lucide-react';

interface InteractiveDiagnosticProps {
  onOpenConsultation: (intent?: string) => void;
}

export const InteractiveDiagnostic: React.FC<InteractiveDiagnosticProps> = ({ onOpenConsultation }) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(DIAGNOSTIC_MATERIALS[0].id);
  const [selectedIssue, setSelectedIssue] = useState<string>(DIAGNOSTIC_ISSUES[0].id);

  const materialObj = DIAGNOSTIC_MATERIALS.find((m) => m.id === selectedMaterial) || DIAGNOSTIC_MATERIALS[0];
  const issueObj = DIAGNOSTIC_ISSUES.find((i) => i.id === selectedIssue) || DIAGNOSTIC_ISSUES[0];

  const getProtocol = (issId: string) => {
    if (issId === 'issue-yellowing') {
      return {
        image: '/images/chem-FL-UNY-02.svg',
        code: 'FL-UNY-02 + FL-BIO-01',
        course: 'Khóa Chăm Sóc Sneaker Chuyên Sâu',
        steps: [
          'Làm sạch khô bằng bọt enzyme sinh học FL-BIO-01 (pH 7.0).',
          'Dán băng keo che mép da, quét gel khử ố FL-UNY-02 lên đế.',
          'Chiếu buồng quang hóa UV 365nm trong 3 giờ, khôi phục 96% độ trắng.'
        ]
      };
    }
    if (issId === 'issue-fading') {
      return {
        image: '/images/chem-FL-DYE-03.svg',
        code: 'FL-DYE-03 + Prep Deglazer',
        course: 'Khóa Phục Hồi Túi Xách Hiệu / Patina',
        steps: [
          'Tẩy lớp sáp chết bề mặt bằng dung môi Fox Lab Prep Deglazer.',
          'Pha màu theo mã Pantone gốc và phun 3 lớp sương Nano-Pigment FL-DYE-03.',
          'Phủ lớp khóa màu Top Coat chống trầy và bảo toàn 100% vân da.'
        ]
      };
    }
    if (issId === 'issue-cracking') {
      return {
        image: '/images/chem-FL-BLM-04.svg',
        code: 'Elast-Filler + FL-BLM-04',
        course: 'Khóa Phục Hồi Túi Xách Hàng Hiệu',
        steps: [
          'Xử lý mịn vùng nứt và điền keo bả đàn hồi Fox Lab Elast-Filler.',
          'Tái tạo hạt vân da và phun dặm màu đồng nhất vùng xung quanh.',
          'Ủ kem dưỡng mỡ chồn & sáp cọ FL-BLM-04 phục hồi độ mềm.'
        ]
      };
    }
    if (issId === 'issue-mold') {
      return {
        image: '/images/chem-FL-BIO-01.svg',
        code: 'FL-BIO-01 + FL-SHD-05',
        course: 'Khóa Kỹ Thuật Spa Giày Da & Sneaker',
        steps: [
          'Vệ sinh bào tử nấm bằng dung dịch sinh học FL-BIO-01.',
          'Sấy tiệt trùng trong buồng Ozone 45 phút khử sạch mùi ẩm mốc.',
          'Dưỡng ẩm da và xịt phủ màng chống thấm Nano FL-SHD-05.'
        ]
      };
    }
    return {
      image: '/images/chem-FL-ADH-06.svg',
      code: 'FL-ADH-06 + Đế Vibram Ý',
      course: 'Khóa Spa Giày Da Cao Cấp & Vibram',
      steps: [
        'Tẩy sạch keo chết cũ, mài tạo nhám và quét dung dịch Primer.',
        'Quét keo nhiệt PU FL-ADH-06 có pha hoạt chất Crosslinker.',
        'Kích nhiệt ở 70°C và ép định hình khuôn 24 giờ chống nước 100%.'
      ]
    };
  };

  const protocol = getProtocol(selectedIssue);

  return (
    <section id="diagnostic" className="py-20 bg-[#0a0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
            <span className="font-semibold text-[#FF5E14]">Trợ lý Chẩn đoán Phòng Lab</span>
            <span aria-hidden="true">·</span>
            <span>Tra cứu phác đồ xử lý tự động</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Chọn Chất Liệu &amp; Tình Trạng Để Xem Giải Pháp
          </h2>
        </div>

        <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Selectors */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-bold text-zinc-300 uppercase mb-3 font-display">
                  01. Chọn Chất Liệu Da / Vải
                </h3>
                <div className="space-y-2">
                  {DIAGNOSTIC_MATERIALS.map((mat) => {
                    const isSelected = mat.id === selectedMaterial;
                    return (
                      <button
                        key={mat.id}
                        onClick={() => setSelectedMaterial(mat.id)}
                        className={`w-full p-3 rounded-xl text-left border transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-[#FF5E14]/15 border-[#FF5E14] text-white font-semibold'
                            : 'bg-[#0d0f15] border-white/10 text-zinc-300 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs">{mat.name.split('(')[0].trim()}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-300 uppercase mb-3 font-display">
                  02. Chọn Tình Trạng Hư Tổn
                </h3>
                <div className="space-y-2">
                  {DIAGNOSTIC_ISSUES.map((issue) => {
                    const isSelected = issue.id === selectedIssue;
                    return (
                      <button
                        key={issue.id}
                        onClick={() => setSelectedIssue(issue.id)}
                        className={`w-full p-3 rounded-xl text-left border transition-colors cursor-pointer flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'bg-[#FF5E14]/15 border-[#FF5E14] text-white font-semibold'
                            : 'bg-[#0d0f15] border-white/10 text-zinc-300 hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs">{issue.name}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-[#FF5E14] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Visual Prescription Card */}
            <div className="lg:col-span-6 rounded-xl bg-[#0d0f15] border border-white/10 p-5 sm:p-6 flex flex-col justify-between gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-5 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black">
                  <img
                    src={protocol.image}
                    alt={protocol.code}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7 space-y-1.5">
                  <div className="text-xs font-mono text-[#FF5E14] font-bold">
                    Chỉ định: {protocol.code}
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {materialObj.name.split('(')[0]} · {issueObj.name}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Đào tạo tại: <strong className="text-zinc-200">{protocol.course}</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                {protocol.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="font-mono font-bold text-[#FF5E14]">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-zinc-400">
                  Cần hướng dẫn định lượng chi tiết?
                </span>
                <button
                  onClick={() => onOpenConsultation(`Tư vấn phác đồ: ${materialObj.name} - ${issueObj.name}`)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Hỏi Kỹ Thuật Viên
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
