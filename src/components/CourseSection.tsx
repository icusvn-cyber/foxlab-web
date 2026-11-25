import React, { useState } from 'react';
import { COURSES } from '../data/foxlabData';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseSectionProps {
  onSelectCourse: (courseTitle: string) => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({ onSelectCourse }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES[0].id);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    [`${COURSES[0].id}-0`]: true
  });

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  const toggleModule = (moduleIdx: number) => {
    const key = `${activeCourse.id}-${moduleIdx}`;
    setExpandedModules((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="stage-hieu" className="py-20 bg-[#0a0b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stage 02 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <span className="font-semibold text-[#FF5E14]">Hành trình 02. HIỂU</span>
              <span aria-hidden="true">·</span>
              <span>Học viện Kỹ thuật Fox Lab</span>
              <span aria-hidden="true">·</span>
              <span>Thực hành 100% trên đồ hiệu thật</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              05 Chương Trình Đào Tạo Nghề Chuẩn Phòng Lab
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Chọn khóa học bên dưới để xem hình ảnh thực hành, khung giáo trình và bộ dụng cụ tặng kèm.
          </p>
        </div>

        {/* Visual 5-Course Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {COURSES.map((course, idx) => {
            const isActive = course.id === selectedCourseId;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`group text-left rounded-xl overflow-hidden border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#FF5E14] bg-[#161822] ring-1 ring-[#FF5E14]'
                    : 'border-white/10 bg-[#12131a] hover:border-white/25'
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={course.image}
                    alt={course.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2.5 text-[11px] font-mono font-bold text-[#FF5E14]">
                    0{idx + 1} · {course.duration.split('·')[0].trim()}
                  </span>
                </div>
                <div className="p-3">
                  <div className="text-xs font-bold text-white line-clamp-1 font-display">
                    {course.title}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono mt-0.5 tabular-nums">
                    {course.price}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Course Split Showcase */}
        <div className="rounded-2xl bg-[#12141c] border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Course Visual & Starter Kit & Price */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black mb-5">
                  <img
                    src={activeCourse.image}
                    alt={activeCourse.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Unboxed Course Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-2">
                  <span className="text-[#FF5E14] font-semibold">{activeCourse.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCourse.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeCourse.format}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-display">
                  {activeCourse.title}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {activeCourse.description}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-zinc-400 block">Học phí trọn gói (Tặng bộ Kit):</span>
                  <div className="flex items-baseline gap-2.5 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#FF5E14] font-mono tabular-nums">
                      {activeCourse.price}
                    </span>
                    {activeCourse.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through font-mono tabular-nums">
                        {activeCourse.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectCourse(activeCourse.title)}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-[#FF5E14] hover:bg-[#e04f0c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Đăng Ký Giữ Chỗ
                </button>
              </div>
            </div>

            {/* Right Column: Concise Syllabus & Kit */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white font-display">
                    Nội Dung Học Phần Thực Hành ({activeCourse.modules.length} Module)
                  </h4>
                  <span className="text-xs text-zinc-400">Nhấp để xem chi tiết</span>
                </div>

                <div className="space-y-2.5">
                  {activeCourse.modules.map((mod, idx) => {
                    const key = `${activeCourse.id}-${idx}`;
                    const isExpanded = !!expandedModules[key];
                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/10 bg-[#0d0f15] overflow-hidden"
                      >
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-white">
                            {mod.title}
                          </span>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs text-zinc-400 font-mono tabular-nums">
                              {mod.hours}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-[#FF5E14]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-zinc-400" />
                            )}
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-3.5 pt-1 text-xs text-zinc-400 border-t border-white/5">
                            {mod.description}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Starter Kit & Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h5 className="text-xs font-bold text-white mb-2 font-display">
                    Đặc quyền học viên
                  </h5>
                  <ul className="space-y-1.5">
                    {activeCourse.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5E14] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-white mb-2 font-display">
                    Bộ dụng cụ &amp; Hóa chất tặng kèm
                  </h5>
                  <ul className="space-y-1.5">
                    {activeCourse.equipmentIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <span className="text-[#FF5E14] font-mono">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
