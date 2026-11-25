import React, { useState, useEffect } from 'react';
import { FOXLAB_INFO, COURSES } from '../data/foxlabData';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Phone, 
  ExternalLink, 
  MessageSquare,
  GraduationCap,
  FlaskConical,
  Building2
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultIntent = 'Tư vấn khóa học'
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('TP. Hồ Chí Minh');
  const [interest, setInterest] = useState(defaultIntent);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultIntent) {
      setInterest(defaultIntent);
    }
  }, [defaultIntent]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#14161f] border border-orange-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-400 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fox Lab Advisory</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Đăng Ký Tư Vấn &amp; Nhận Hồ Sơ
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Để lại thông tin để chuyên gia Fox Lab liên hệ gửi khung giáo trình chi tiết, bảng giá hóa chất sỉ và ưu đãi học phí trong 5 phút.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Họ và tên của bạn: *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn Hoàng"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Số điện thoại / Zalo: *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0987 xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                    Khu vực sinh sống:
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1c26] border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                  >
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Cần Thơ">Cần Thơ</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Tỉnh thành khác">Tỉnh thành khác / Nước ngoài</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Nội dung bạn quan tâm nhất:
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1c26] border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm"
                >
                  <option value="Khóa Kỹ Thuật Sneaker Chuyên Sâu">Khóa Kỹ Thuật Sneaker Chuyên Sâu (7.500.000đ)</option>
                  <option value="Khóa Spa Giày Da Cao Cấp & Vibram">Khóa Spa Giày Da Cao Cấp &amp; Vibram (14.500.000đ)</option>
                  <option value="Khóa Phục Hồi Túi Xách Hàng Hiệu">Khóa Phục Hồi Túi Xách Hàng Hiệu (22.000.000đ)</option>
                  <option value="Khóa Patina & Custom Đồ Da Độc Bản">Khóa Patina &amp; Custom Đồ Da Độc Bản (11.000.000đ)</option>
                  <option value="Khóa Setup Trọn Gói Xưởng Khởi Nghiệp">Khóa Setup Trọn Gói Xưởng Khởi Nghiệp (38.000.000đ)</option>
                  <option value="Mua Hóa Chất Phòng Lab Giá Sỉ">Mua Hóa Chất Phòng Lab Giá Sỉ (Đơn hàng xưởng)</option>
                  <option value="Tải Giáo Trình & Nhận Mẫu Thử">Tải Giáo Trình Kỹ Thuật &amp; Nhận Mẫu Thử</option>
                  <option value="Hẹn lịch tham quan trực tiếp Lab">Hẹn lịch tham quan trực tiếp Lab</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                  Ghi chú hoặc câu hỏi cho giảng viên (tùy chọn):
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Tôi muốn mở tiệm tại Bình Dương, cần tư vấn máy móc cần thiết..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-orange-500 focus:outline-none text-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#FF5E14] to-[#E84E10] hover:brightness-110 shadow-lg shadow-orange-500/30 transition-all text-center cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Thông Tin Cho Giảng Viên Fox Lab</span>
              </button>
            </form>

            {/* Quick Contact Alternatives */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-zinc-400">Cần tư vấn khẩn cấp?</span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${FOXLAB_INFO.hotlines[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{FOXLAB_INFO.hotlines[0]}</span>
                </a>
                <span className="text-zinc-600">|</span>
                <a
                  href={FOXLAB_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                >
                  <span>Fanpage Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                Đăng Ký Thành Công!
              </h3>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                Cảm ơn bạn <strong className="text-white">{fullName}</strong>! Giảng viên phụ trách phòng Lab của <strong>Fox Lab</strong> sẽ gọi điện hoặc nhắn tin Zalo tới số <strong className="text-orange-400">{phone}</strong> trong vòng 5-10 phút để hỗ trợ bạn.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-left text-zinc-300 max-w-md mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-500">Mục quan tâm:</span>
                <span className="font-semibold text-white">{interest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Khu vực:</span>
                <span className="font-semibold text-white">{city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Hỗ trợ hotline 24/7:</span>
                <span className="font-mono text-orange-400 font-bold">{FOXLAB_INFO.hotlines[0]}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={FOXLAB_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] transition-colors flex items-center justify-center gap-2"
              >
                <span>Nhắn Tin Trực Tiếp Fanpage</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
