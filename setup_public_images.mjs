import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'public/images');
fs.mkdirSync(outDir, { recursive: true });

function makeChemicalBottle(code, title, subtitle, liquidColor, bottleShape = 'tall') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
    <defs>
      <linearGradient id="bg-${code}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#151722"/>
        <stop offset="100%" stop-color="#0b0d12"/>
      </linearGradient>
      <radialGradient id="glow-${code}" cx="50%" cy="48%" r="48%">
        <stop offset="0%" stop-color="${liquidColor}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="450" fill="url(#bg-${code})"/>
    <rect width="600" height="450" fill="url(#glow-${code})"/>
    <ellipse cx="300" cy="375" rx="170" ry="26" fill="#181a24" stroke="#27272a" stroke-width="2"/>
    ${bottleShape === 'jar' ? `
      <rect x="195" y="165" width="210" height="190" rx="26" fill="#1f1612" stroke="${liquidColor}" stroke-width="3"/>
      <rect x="210" y="125" width="180" height="42" rx="10" fill="#27272a" stroke="#52525b" stroke-width="2"/>
      <rect x="215" y="210" width="170" height="110" rx="10" fill="#0d0e12" stroke="${liquidColor}" stroke-opacity="0.5" stroke-width="1.5"/>
    ` : `
      <rect x="225" y="115" width="150" height="245" rx="24" fill="#1e1510" stroke="${liquidColor}" stroke-width="3"/>
      <rect x="268" y="62" width="64" height="55" rx="8" fill="#27272a" stroke="#52525b" stroke-width="2"/>
      <rect x="255" y="45" width="90" height="22" rx="6" fill="${liquidColor}"/>
      <rect x="238" y="175" width="124" height="135" rx="10" fill="#0d0e12" stroke="${liquidColor}" stroke-opacity="0.5" stroke-width="1.5"/>
    `}
    <text x="300" y="${bottleShape === 'jar' ? '248' : '220'}" text-anchor="middle" fill="${liquidColor}" font-family="monospace" font-size="18" font-weight="800">${code}</text>
    <text x="300" y="${bottleShape === 'jar' ? '275' : '248'}" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">${title}</text>
    <text x="300" y="${bottleShape === 'jar' ? '300' : '274'}" text-anchor="middle" fill="#a1a1aa" font-family="monospace" font-size="12">${subtitle}</text>
  </svg>`;
}

function makeVisualCard(bg1, bg2, accent, title, tag, iconType) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#g)"/>
    <circle cx="640" cy="140" r="190" fill="${accent}" fill-opacity="0.16"/>
    <circle cx="160" cy="380" r="160" fill="${accent}" fill-opacity="0.08"/>
    <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
      <line x1="0" y1="125" x2="800" y2="125"/>
      <line x1="0" y1="250" x2="800" y2="250"/>
      <line x1="0" y1="375" x2="800" y2="375"/>
      <line x1="200" y1="0" x2="200" y2="500"/>
      <line x1="400" y1="0" x2="400" y2="500"/>
      <line x1="600" y1="0" x2="600" y2="500"/>
    </g>
    <g transform="translate(260, 85)">
      <rect width="280" height="210" rx="22" fill="#0d0f17" fill-opacity="0.8" stroke="${accent}" stroke-width="2.5"/>
      ${iconType === 'uv' ? `
        <circle cx="140" cy="105" r="58" fill="none" stroke="${accent}" stroke-width="4" stroke-dasharray="10 6"/>
        <circle cx="140" cy="105" r="32" fill="${accent}" fill-opacity="0.3"/>
      ` : iconType === 'airbrush' ? `
        <path d="M75 135 L185 75 L205 95 L95 155 Z" fill="${accent}"/>
        <circle cx="215" cy="70" r="18" fill="${accent}" fill-opacity="0.4"/>
      ` : iconType === 'workshop' ? `
        <rect x="55" y="55" width="170" height="100" rx="12" fill="#181b26" stroke="${accent}" stroke-width="2"/>
        <path d="M90 105 L125 135 L190 75" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
      ` : `
        <polygon points="140,45 195,145 85,145" fill="${accent}" fill-opacity="0.25" stroke="${accent}" stroke-width="3"/>
      `}
    </g>
    <rect x="48" y="345" width="704" height="110" rx="16" fill="#090a0f" fill-opacity="0.88" stroke="#27272a"/>
    <text x="80" y="390" fill="#ffffff" font-family="sans-serif" font-size="23" font-weight="800">${title}</text>
    <text x="80" y="424" fill="${accent}" font-family="monospace" font-size="15" font-weight="700">${tag}</text>
  </svg>`;
}

const assets = {
  'hero-studio.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#14161f"/>
        <stop offset="50%" stop-color="#0d0f14"/>
        <stop offset="100%" stop-color="#191310"/>
      </linearGradient>
      <radialGradient id="amberGlow" cx="70%" cy="35%" r="50%">
        <stop offset="0%" stop-color="#FF5E14" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#F59E0B" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="uvGlow" cx="28%" cy="48%" r="35%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#272a36"/>
        <stop offset="100%" stop-color="#12141c"/>
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#FF5E14"/>
        <stop offset="100%" stop-color="#F59E0B"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="675" fill="url(#bg)"/>
    <rect width="1200" height="675" fill="url(#amberGlow)"/>
    <rect width="1200" height="675" fill="url(#uvGlow)"/>
    <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
      <line x1="0" y1="140" x2="1200" y2="140"/>
      <line x1="0" y1="300" x2="1200" y2="300"/>
      <line x1="0" y1="490" x2="1200" y2="490"/>
      <line x1="240" y1="0" x2="240" y2="675"/>
      <line x1="600" y1="0" x2="600" y2="675"/>
      <line x1="960" y1="0" x2="960" y2="675"/>
    </g>
    <rect x="180" y="28" width="840" height="10" rx="5" fill="#27272a"/>
    <rect x="220" y="38" width="760" height="4" fill="url(#orangeGrad)" opacity="0.9"/>
    <g transform="translate(90, 170)">
      <rect width="380" height="310" rx="16" fill="url(#metal)" stroke="#3f3f46" stroke-width="1.5"/>
      <rect x="22" y="24" width="336" height="210" rx="10" fill="#090d16" stroke="#38bdf8" stroke-opacity="0.45" stroke-width="1.5"/>
      <g stroke="#38bdf8" stroke-opacity="0.3" stroke-width="2">
        <line x1="60" y1="30" x2="90" y2="220"/>
        <line x1="140" y1="30" x2="160" y2="220"/>
        <line x1="220" y1="30" x2="210" y2="220"/>
        <line x1="300" y1="30" x2="280" y2="220"/>
      </g>
      <path d="M85 185 Q90 125 145 115 L205 140 Q255 155 295 160 Q315 165 315 185 Z" fill="#f4f4f5" stroke="#FF5E14" stroke-width="2.5"/>
      <rect x="80" y="185" width="240" height="22" rx="8" fill="#ffffff"/>
      <path d="M135 145 L185 162 L155 175 Z" fill="#FF5E14"/>
      <text x="40" y="268" fill="#e4e4e7" font-family="sans-serif" font-size="15" font-weight="700">BUỒNG QUANG HÓA UV-C 365nm</text>
      <text x="40" y="290" fill="#a1a1aa" font-family="monospace" font-size="12">FL-UNY-02 · Khử ố đế Icy &amp; Boost chuẩn 96%</text>
    </g>
    <g transform="translate(520, 130)">
      <rect width="590" height="350" rx="16" fill="url(#metal)" stroke="#52525b" stroke-width="1.5"/>
      <line x1="30" y1="155" x2="560" y2="155" stroke="#FF5E14" stroke-opacity="0.5" stroke-width="3"/>
      <g transform="translate(55, 50)">
        <rect x="0" y="25" width="48" height="78" rx="8" fill="#7c2d12" stroke="#f97316" stroke-width="1.5"/>
        <rect x="14" y="8" width="20" height="17" rx="3" fill="#27272a"/>
        <rect x="6" y="45" width="36" height="36" rx="3" fill="#18181b"/>
        <text x="11" y="67" fill="#f97316" font-family="monospace" font-size="10" font-weight="700">BIO-01</text>
      </g>
      <g transform="translate(125, 42)">
        <rect x="0" y="28" width="54" height="83" rx="8" fill="#9a3412" stroke="#fb923c" stroke-width="1.5"/>
        <rect x="17" y="10" width="20" height="18" rx="3" fill="#27272a"/>
        <rect x="7" y="48" width="40" height="38" rx="3" fill="#18181b"/>
        <text x="12" y="70" fill="#fb923c" font-family="monospace" font-size="10" font-weight="700">DYE-03</text>
      </g>
      <g transform="translate(202, 60)">
        <rect x="0" y="25" width="64" height="68" rx="10" fill="#27272a" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="8" y="14" width="48" height="12" rx="4" fill="#d97706"/>
        <text x="13" y="64" fill="#fbbf24" font-family="monospace" font-size="10" font-weight="700">BLM-04</text>
      </g>
      <g transform="translate(290, 46)">
        <rect x="0" y="24" width="46" height="83" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="13" y="6" width="20" height="18" rx="3" fill="#e4e4e7"/>
        <text x="8" y="72" fill="#38bdf8" font-family="monospace" font-size="10" font-weight="700">SHD-05</text>
      </g>
      <g transform="translate(375, 45)">
        <path d="M45 55 C45 15, 115 15, 115 55" fill="none" stroke="#f59e0b" stroke-width="5"/>
        <rect x="15" y="55" width="130" height="92" rx="12" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
        <line x1="15" y1="85" x2="145" y2="85" stroke="#27272a" stroke-width="1.5"/>
        <line x1="15" y1="115" x2="145" y2="115" stroke="#27272a" stroke-width="1.5"/>
        <circle cx="80" cy="88" r="10" fill="#f59e0b"/>
      </g>
      <rect x="35" y="185" width="520" height="130" rx="12" fill="#0f1117" stroke="#27272a"/>
      <circle cx="95" cy="250" r="36" fill="#FF5E14" fill-opacity="0.18" stroke="#FF5E14" stroke-width="2"/>
      <path d="M80 250 L92 262 L114 238" fill="none" stroke="#FF5E14" stroke-width="3.5" stroke-linecap="round"/>
      <text x="155" y="232" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">PHÒNG LAB ĐÀO TẠO &amp; PHA MÀU QUANG PHỔ</text>
      <text x="155" y="258" fill="#a1a1aa" font-family="sans-serif" font-size="13">Thực hành 1 kèm 1 trên giày Sneaker, Giày Tây &amp; Túi Hiệu</text>
      <text x="155" y="284" fill="#FF5E14" font-family="monospace" font-size="13" font-weight="700">pH 6.8 Balanced · Nano Pigment · Vibram Italy</text>
    </g>
    <rect x="0" y="520" width="1200" height="155" fill="#090a0f"/>
    <line x1="0" y1="520" x2="1200" y2="520" stroke="url(#orangeGrad)" stroke-width="3"/>
    <text x="90" y="575" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">FOX LAB VIETNAM — ACADEMY &amp; CHEMICAL SOLUTIONS</text>
    <text x="90" y="608" fill="#a1a1aa" font-family="sans-serif" font-size="15">Hệ sinh thái đào tạo kỹ thuật viên &amp; cung ứng hóa chất đồ da chuẩn phòng Lab</text>
  </svg>`,

  'course-sneaker.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#10141f"/>
    <circle cx="620" cy="160" r="190" fill="#FF5E14" fill-opacity="0.14"/>
    <circle cx="200" cy="420" r="180" fill="#38bdf8" fill-opacity="0.1"/>
    <rect x="140" y="70" width="520" height="16" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="180" y1="86" x2="140" y2="380" stroke="#38bdf8" stroke-opacity="0.2" stroke-width="24"/>
    <line x1="400" y1="86" x2="400" y2="380" stroke="#38bdf8" stroke-opacity="0.2" stroke-width="24"/>
    <line x1="620" y1="86" x2="660" y2="380" stroke="#38bdf8" stroke-opacity="0.2" stroke-width="24"/>
    <g transform="translate(150, 170)">
      <path d="M50 230 L50 90 L155 70 L235 145 L395 175 C445 182 465 205 465 230 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
      <path d="M50 140 L170 140 L215 195 L50 195 Z" fill="#FF5E14"/>
      <path d="M195 155 L295 185 L295 205 L195 180 Z" fill="#18181b"/>
      <rect x="40" y="230" width="435" height="38" rx="14" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="310" cy="155" r="22" fill="#ffffff" fill-opacity="0.85"/>
      <circle cx="342" cy="148" r="16" fill="#ffffff" fill-opacity="0.85"/>
    </g>
    <rect x="60" y="460" width="680" height="86" rx="14" fill="#090b10" fill-opacity="0.85" stroke="#27272a"/>
    <text x="95" y="498" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">CHĂM SÓC &amp; KHỬ Ố SNEAKER CHUYÊN SÂU</text>
    <text x="95" y="526" fill="#FF5E14" font-family="monospace" font-size="15" font-weight="600">48 Giờ Thực Hành · Bio-Enzyme &amp; UV Unyellowing</text>
  </svg>`,

  'course-leather.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#131110"/>
    <circle cx="600" cy="180" r="200" fill="#d97706" fill-opacity="0.16"/>
    <g transform="translate(130, 175)">
      <path d="M40 210 Q55 95 150 95 L265 150 Q380 165 480 175 C515 180 520 210 510 215 Z" fill="#9a3412" stroke="#f59e0b" stroke-width="2.5"/>
      <path d="M395 170 Q480 175 510 215 L380 215 Z" fill="#ea580c"/>
      <ellipse cx="455" cy="192" rx="30" ry="8" fill="#ffffff" fill-opacity="0.45"/>
      <rect x="35" y="215" width="480" height="28" rx="6" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
      <text x="245" y="234" fill="#f59e0b" font-family="monospace" font-size="13" font-weight="800">VIBRAM ITALY</text>
    </g>
    <circle cx="620" cy="340" r="58" fill="#27272a" stroke="#f59e0b" stroke-width="2.5"/>
    <circle cx="620" cy="340" r="42" fill="#78350f"/>
    <text x="588" y="345" fill="#fef3c7" font-family="monospace" font-size="13" font-weight="700">CARNAUBA</text>
    <rect x="60" y="460" width="680" height="86" rx="14" fill="#090b10" fill-opacity="0.85" stroke="#27272a"/>
    <text x="95" y="498" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">SPA GIÀY DA CAO CẤP &amp; DÁN ĐẾ VIBRAM</text>
    <text x="95" y="526" fill="#f59e0b" font-family="monospace" font-size="15" font-weight="600">80 Giờ Thực Hành · Mirror Glaze &amp; Keo Nhiệt PU</text>
  </svg>`,

  'course-bags.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#111217"/>
    <circle cx="400" cy="240" r="210" fill="#FF5E14" fill-opacity="0.14"/>
    <g transform="translate(220, 85)">
      <path d="M95 95 C95 10, 265 10, 265 95" fill="none" stroke="#fbbf24" stroke-width="8"/>
      <rect x="30" y="95" width="300" height="225" rx="22" fill="#18181b" stroke="#f59e0b" stroke-width="3"/>
      <path d="M30 95 L330 95 L330 190 Q180 225 30 190 Z" fill="#202026" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="180" cy="195" r="22" fill="#fbbf24"/>
      <circle cx="180" cy="195" r="10" fill="#18181b"/>
      <circle cx="320" cy="310" r="34" fill="none" stroke="#FF5E14" stroke-width="3" stroke-dasharray="6 4"/>
    </g>
    <rect x="60" y="460" width="680" height="86" rx="14" fill="#090b10" fill-opacity="0.85" stroke="#27272a"/>
    <text x="95" y="498" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">PHỤC HỒI &amp; SPA TÚI XÁCH HÀNG HIỆU</text>
    <text x="95" y="526" fill="#FF5E14" font-family="monospace" font-size="15" font-weight="600">112 Giờ Thực Hành · Hermès, Chanel, LV, Dior</text>
  </svg>`,

  'course-patina.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#141115"/>
    <circle cx="240" cy="250" r="115" fill="#9a3412" stroke="#f97316" stroke-width="4"/>
    <circle cx="340" cy="250" r="115" fill="#b45309" fill-opacity="0.85" stroke="#fbbf24" stroke-width="4"/>
    <circle cx="440" cy="250" r="115" fill="#7c2d12" fill-opacity="0.85" stroke="#ea580c" stroke-width="4"/>
    <circle cx="540" cy="250" r="115" fill="#1e293b" fill-opacity="0.85" stroke="#38bdf8" stroke-width="4"/>
    <text x="200" y="258" fill="#ffffff" font-family="monospace" font-size="20" font-weight="800">PANTONE &amp; PATINA</text>
    <rect x="60" y="460" width="680" height="86" rx="14" fill="#090b10" fill-opacity="0.85" stroke="#27272a"/>
    <text x="95" y="498" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">NGHỆ THUẬT PHA MÀU &amp; NHUỘM PATINA</text>
    <text x="95" y="526" fill="#f97316" font-family="monospace" font-size="15" font-weight="600">64 Giờ Thực Hành · Airbrush Gradient &amp; Custom</text>
  </svg>`,

  'course-startup.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#0f1319"/>
    <g transform="translate(120, 100)">
      <rect width="560" height="310" rx="18" fill="#181b24" stroke="#FF5E14" stroke-width="2.5"/>
      <rect x="30" y="30" width="500" height="50" rx="8" fill="#FF5E14"/>
      <text x="150" y="62" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">FOX LAB CERTIFIED SPA</text>
      <rect x="35" y="105" width="150" height="170" rx="10" fill="#101218" stroke="#3f3f46"/>
      <rect x="205" y="105" width="150" height="170" rx="10" fill="#101218" stroke="#3f3f46"/>
      <rect x="375" y="105" width="150" height="170" rx="10" fill="#101218" stroke="#3f3f46"/>
      <text x="62" y="195" fill="#f97316" font-family="monospace" font-size="15" font-weight="700">KỸ THUẬT</text>
      <text x="232" y="195" fill="#fbbf24" font-family="monospace" font-size="15" font-weight="700">MÁY MÓC</text>
      <text x="400" y="195" fill="#34d399" font-family="monospace" font-size="15" font-weight="700">VẬN HÀNH</text>
    </g>
    <rect x="60" y="460" width="680" height="86" rx="14" fill="#090b10" fill-opacity="0.85" stroke="#27272a"/>
    <text x="95" y="498" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="800">SETUP TRỌN GÓI XƯỞNG &amp; SPA ĐỒ HIỆU</text>
    <text x="95" y="526" fill="#34d399" font-family="monospace" font-size="15" font-weight="600">21 Ngày + 3 Tháng Đồng Hành · Hoàn Vốn 2.5 Tháng</text>
  </svg>`,

  'ba-sneaker-before.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#1c1917"/>
    <g transform="translate(110, 150)">
      <path d="M60 240 L60 80 L190 55 L290 140 L480 175 C535 185 555 210 555 240 Z" fill="#d6d3d1" stroke="#78716c" stroke-width="3"/>
      <ellipse cx="260" cy="195" rx="55" ry="22" fill="#78716c" opacity="0.65"/>
      <rect x="45" y="240" width="525" height="52" rx="14" fill="#ca8a04" stroke="#a16207" stroke-width="3"/>
      <text x="175" y="272" fill="#422006" font-family="monospace" font-size="18" font-weight="800">ĐẾ Ố VÀNG OXY HÓA NẶNG</text>
    </g>
    <text x="60" y="535" fill="#f87171" font-family="sans-serif" font-size="22" font-weight="800">TRƯỚC KHI XỬ LÝ: Đế ngả vàng đục &amp; bám bẩn</text>
  </svg>`,

  'ba-sneaker-after.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#0f172a"/>
    <circle cx="400" cy="260" r="240" fill="#38bdf8" fill-opacity="0.15"/>
    <g transform="translate(110, 150)">
      <path d="M60 240 L60 80 L190 55 L290 140 L480 175 C535 185 555 210 555 240 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
      <path d="M60 135 L195 135 L245 195 L60 195 Z" fill="#FF5E14"/>
      <rect x="45" y="240" width="525" height="52" rx="14" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>
      <text x="165" y="272" fill="#0369a1" font-family="monospace" font-size="18" font-weight="800">ĐẾ ICY TRẮNG SÁNG 96% (UV LAB)</text>
    </g>
    <text x="60" y="535" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">SAU PHỤC HỒI: Khử ố quang hóa FL-UNY-02</text>
  </svg>`,

  'ba-bag-before.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#1c1917"/>
    <g transform="translate(200, 90)">
      <rect x="20" y="70" width="360" height="260" rx="24" fill="#3f3f46" stroke="#71717a" stroke-width="3"/>
      <circle cx="35" cy="315" r="35" fill="#a8a29e"/>
      <circle cx="365" cy="315" r="35" fill="#a8a29e"/>
      <text x="85" y="160" fill="#fca5a5" font-family="monospace" font-size="18" font-weight="800">TRẦY GÓC &amp; BẠC MÀU DA CỪU</text>
    </g>
    <text x="60" y="535" fill="#f87171" font-family="sans-serif" font-size="22" font-weight="800">TRƯỚC KHI XỬ LÝ: Rách 4 góc đáy &amp; khô rạn</text>
  </svg>`,

  'ba-bag-after.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#0f1117"/>
    <circle cx="400" cy="240" r="240" fill="#f59e0b" fill-opacity="0.15"/>
    <g transform="translate(200, 90)">
      <rect x="20" y="70" width="360" height="260" rx="24" fill="#18181b" stroke="#fbbf24" stroke-width="3"/>
      <circle cx="200" cy="195" r="24" fill="#fbbf24"/>
      <text x="70" y="275" fill="#fde68a" font-family="monospace" font-size="17" font-weight="800">PHỤC HỒI GÓC &amp; SƠN NANO 100%</text>
    </g>
    <text x="60" y="535" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">SAU PHỤC HỒI: Bả Elast-Filler &amp; Nano Pigment</text>
  </svg>`,

  'ba-oxford-before.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#1c1917"/>
    <g transform="translate(110, 170)">
      <path d="M50 220 Q65 95 170 95 L290 155 Q410 170 520 180 C555 185 560 215 550 220 Z" fill="#a8a29e" stroke="#78716c" stroke-width="3"/>
      <rect x="45" y="220" width="510" height="24" rx="6" fill="#57534e"/>
      <text x="155" y="195" fill="#292524" font-family="monospace" font-size="18" font-weight="800">DA MỘC CŨ &amp; ĐẾ MÒN TRƠN</text>
    </g>
    <text x="60" y="535" fill="#f87171" font-family="sans-serif" font-size="22" font-weight="800">TRƯỚC KHI XỬ LÝ: Bề mặt xỉn màu &amp; đế mòn</text>
  </svg>`,

  'ba-oxford-after.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
    <rect width="800" height="600" fill="#14110f"/>
    <circle cx="400" cy="260" r="240" fill="#ea580c" fill-opacity="0.18"/>
    <g transform="translate(110, 170)">
      <path d="M50 220 Q65 95 170 95 L290 155 Q410 170 520 180 C555 185 560 215 550 220 Z" fill="#9a3412" stroke="#f59e0b" stroke-width="3"/>
      <path d="M410 172 Q515 180 550 220 L400 220 Z" fill="#7c2d12"/>
      <rect x="45" y="220" width="510" height="28" rx="6" fill="#18181b" stroke="#f59e0b" stroke-width="2"/>
      <text x="145" y="195" fill="#fef3c7" font-family="monospace" font-size="18" font-weight="800">PATINA HỔ PHÁCH + ĐẾ VIBRAM</text>
    </g>
    <text x="60" y="535" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">SAU PHỤC HỒI: Nhuộm Patina &amp; dán đế Vibram Ý</text>
  </svg>`,

  'chem-FL-BIO-01.svg': makeChemicalBottle('FL-BIO-01', 'BIO-ENZYME', 'pH 7.0 · 500ml / 5L', '#FF5E14', 'tall'),
  'chem-FL-UNY-02.svg': makeChemicalBottle('FL-UNY-02', 'UV DE-OXIDIZER', 'pH 5.5 · 250g / 500g', '#38bdf8', 'jar'),
  'chem-FL-DYE-03.svg': makeChemicalBottle('FL-DYE-03', 'NANO PIGMENT', '36 Màu · 100ml / 250ml', '#f97316', 'tall'),
  'chem-FL-BLM-04.svg': makeChemicalBottle('FL-BLM-04', 'CARNAUBA BALM', 'pH 6.5 · 120ml / 250ml', '#fbbf24', 'jar'),
  'chem-FL-SHD-05.svg': makeChemicalBottle('FL-SHD-05', 'HYDRO SHIELD', 'Nano Pro · 300ml / 2L', '#34d399', 'tall'),
  'chem-FL-ADH-06.svg': makeChemicalBottle('FL-ADH-06', 'THERMAL BOND', 'Keo PU Vibram · 500ml', '#f43f5e', 'tall'),

  'lab-station-1.svg': makeVisualCard('#131722', '#0b0e14', '#38bdf8', 'BUỒNG QUANG HÓA UV & OZONE', 'Khử ố đế Icy & Diệt nấm mốc sâu 99.9%', 'uv'),
  'lab-station-2.svg': makeVisualCard('#191310', '#0d0b0a', '#FF5E14', 'TRẠM SÚNG PHUN AIRBRUSH NANO', 'Phục hồi màu túi hiệu giữ 100% vân hạt da', 'airbrush'),
  'lab-station-3.svg': makeVisualCard('#16141c', '#0c0b10', '#fbbf24', 'PHÒNG PHA MÀU QUANG PHỔ PANTONE', 'Cân chỉnh 200+ mã màu Hermès, Chanel, Dior', 'pantone'),
  'lab-station-4.svg': makeVisualCard('#101816', '#0a0f0e', '#34d399', 'XƯỞNG THỰC HÀNH CẦM TAY CHỈ VIỆC', '100% Thực chiến trên giày & túi da thật', 'workshop'),

  'student-workshop-1.svg': makeVisualCard('#141720', '#0c0e14', '#FF5E14', 'THE KICKS LAB — HÀ NỘI', 'Cựu học viên K14 · Xử lý 35 đôi/ngày · 75tr/tháng', 'workshop'),
  'student-workshop-2.svg': makeVisualCard('#181317', '#0e0b0e', '#fbbf24', 'LUXURY BAG CARE — TP.HCM', 'Cựu học viên K18 · Chuyên túi Chanel & Hermès', 'airbrush'),
  'student-workshop-3.svg': makeVisualCard('#111819', '#0a0f10', '#34d399', 'BESPOKE SHOE SPA — ĐÀ NẴNG', 'Cựu học viên K22 · Hoàn vốn chỉ sau 75 ngày', 'uv'),

  'branch-hcm-q3.svg': makeVisualCard('#191412', '#0e0b0a', '#FF5E14', 'TRỤ SỞ QUẬN 3 · TP.HCM', '586 Nguyễn Đình Chiểu, Phường 4, Quận 3', 'workshop'),
  'branch-hcm-td.svg': makeVisualCard('#131620', '#0b0d13', '#fbbf24', 'XƯỞNG CUSTOM THỦ ĐỨC · TP.HCM', '12 Đường 12 Trần Não, Phường An Khánh', 'airbrush'),
  'branch-hn.svg': makeVisualCard('#12181b', '#0a0e10', '#38bdf8', 'TRUNG TÂM ĐÀO TẠO · HÀ NỘI', '43 Ngõ 40 Tô Vĩnh Diện, Quận Thanh Xuân', 'uv')
};

for (const [name, svg] of Object.entries(assets)) {
  fs.writeFileSync(path.join(outDir, name), svg.trim());
}
console.log('Successfully generated', Object.keys(assets).length, 'SVG files in', outDir);
