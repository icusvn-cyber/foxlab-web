import { Course, ChemicalProduct, BeforeAfterCase, DiagnosticMaterial, DiagnosticIssue } from '../types';

export const FOXLAB_INFO = {
  name: 'FOX LAB',
  fullName: 'Fox Lab Academy & Chemical Solutions',
  tagline: 'Đào tạo kỹ thuật chăm sóc giày & Cung cấp giải pháp hóa chất chuyên dụng cho ngành đồ da',
  established: '2020',
  parentEcosystem: 'ICUS Care & Restoration Ecosystem',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594878101291',
  website: 'www.foxlab.vn',
  hotlines: ['098 794 0077', '0325 442 8778'],
  emails: ['icusvn@gmail.com', 'contact@foxlab.vn'],
  labStations: [
    {
      title: 'Buồng Quang Hóa UV & Ozone',
      sub: 'Khử ố đế Icy 96% · Tiệt trùng 99.9%',
      image: '/images/foxlab_hero_main.jpg'
    },
    {
      title: 'Trạm Súng Phun Airbrush Nano',
      sub: 'Hạt màu siêu vi · Giữ 100% vân da thật',
      image: '/images/course-bags.jpg'
    },
    {
      title: 'Phòng Pha Màu Quang Phổ Pantone',
      sub: '200+ công thức màu Hermès, Chanel, Dior',
      image: '/images/course-leather.jpg'
    },
    {
      title: 'Xưởng Thực Hành 1 Kèm 1',
      sub: '100% thao tác trực tiếp trên đồ hiệu thật',
      image: '/images/academy-workshop.jpg'
    }
  ],
  branches: [
    {
      city: 'TP. Hồ Chí Minh',
      address: '586 Nguyễn Đình Chiểu, Phường 4, Quận 3, TP.HCM',
      type: 'Trụ sở chính & Lab Đào tạo Miền Nam',
      phone: '098 794 0077',
      hours: '08:30 - 19:30 (T2 - CN)',
      image: '/images/branch-hcm-q3.svg'
    },
    {
      city: 'TP. Thủ Đức',
      address: '12 Đường 12 Trần Não, Phường An Khánh, TP. Thủ Đức',
      type: 'Xưởng Kỹ Thuật & Thực Hành Custom',
      phone: '098 794 0077',
      hours: '09:00 - 18:30 (T2 - T7)',
      image: '/images/branch-hcm-td.svg'
    },
    {
      city: 'Hà Nội',
      address: '43 Ngõ 40 Tô Vĩnh Diện, Quận Thanh Xuân, Hà Nội',
      type: 'Trung tâm Đào tạo & Phân phối Miền Bắc',
      phone: '0325 442 8778',
      hours: '08:30 - 19:00 (T2 - CN)',
      image: '/images/branch-hn.svg'
    }
  ],
  stats: [
    { value: '1,200+', label: 'Học viên tốt nghiệp', sub: 'Trong & ngoài nước' },
    { value: '350+', label: 'Spa đồ hiệu chuyển giao', sub: 'Vận hành hiệu quả' },
    { value: '28+', label: 'Hóa chất độc quyền', sub: 'Chuẩn pH phòng Lab' },
    { value: '99.2%', label: 'Mở tiệm & có việc ngay', sub: 'Bảo hành tay nghề' }
  ]
};

export const COURSES: Course[] = [
  {
    id: 'course-sneaker-pro',
    title: 'Chăm Sóc & Vệ Sinh Sneaker Chuyên Sâu',
    badge: 'Khóa Nền Tảng',
    tagline: 'Làm chủ quy trình giặt khô enzyme, khử ố đế UV và phủ nano kỵ nước.',
    duration: '6 ngày · 48 giờ',
    level: 'Cơ bản đến Chuyên nghiệp',
    format: 'Thực hành 1-1 tại Lab',
    price: '7.500.000 đ',
    originalPrice: '9.000.000 đ',
    image: '/images/course-sneaker.jpg',
    popular: true,
    description: 'Thực hành 100% trên sneaker thật (Jordan, Yeezy, Balenciaga). Nắm vững kỹ thuật làm sạch sâu không biến dạng form và khử ố đế Icy chuẩn 96%.',
    modules: [
      {
        title: '01. Phân loại 12 chất liệu Sneaker & Chuẩn pH',
        description: 'Nhận diện Knit, Mesh, Suede, Nubuck, Boost, EVA và chọn hóa chất an toàn.',
        hours: '8 giờ'
      },
      {
        title: '02. Deep-Cleaning & Kiểm soát ẩm độ',
        description: 'Vệ sinh chi tiết từng bộ phận bằng bọt sinh học không cần ngâm nước.',
        hours: '12 giờ'
      },
      {
        title: '03. Quang hóa Khử Ố Vàng Đế (Unyellowing)',
        description: 'Ứng dụng gel FL-UNY-02 và buồng UV 365nm đảo ngược oxy hóa cao su.',
        hours: '12 giờ'
      },
      {
        title: '04. Khử khuẩn Ozone, Phủ Nano & QC Đóng gói',
        description: 'Sấy diệt nấm UV-C, phủ màng chống thấm lá sen và kiểm định bàn giao.',
        hours: '16 giờ'
      }
    ],
    highlights: [
      'Thực hành trực tiếp trên 15+ đôi sneaker cao cấp',
      'Tặng Bộ Kit Fox Lab Starter trị giá 2.500.000đ',
      'Cấp chứng chỉ Fox Lab Certified Technician',
      'Học lại miễn phí không giới hạn nếu chưa tự tin'
    ],
    equipmentIncluded: [
      'Bộ bàn chải lông ngựa, lông heo & cước đồng',
      'Dung dịch Bio-Enzyme 500ml & Gel khử ố UV 250g',
      'Bình tạo bọt Foam Dispenser & Khăn Microfiber'
    ]
  },
  {
    id: 'course-leather-shoes',
    title: 'Spa Giày Da Cao Cấp & Dán Đế Vibram',
    badge: 'Nghệ Nhân Giày Tây',
    tagline: 'Chuyên sâu Oxford, Loafer, Chelsea Boots: dưỡng da, đánh bóng gương và dán đế Ý.',
    duration: '10 ngày · 80 giờ',
    level: 'Nâng cao',
    format: 'Lớp tối đa 4 học viên',
    price: '14.500.000 đ',
    originalPrice: '17.000.000 đ',
    image: '/images/course-leather.jpg',
    popular: true,
    description: 'Chinh phục phân khúc thượng lưu: tẩy sáp cặn, dưỡng mỡ chồn, đánh bóng gương Mirror Glaze (Glaçage) và dán đế bảo vệ Vibram không bung keo.',
    modules: [
      {
        title: '01. Cấu trúc biểu bì da Veg-tan, Box Calf & Cordovan',
        description: 'Kiểm tra độ thẩm thấu và tẩy lớp sáp chết lâu năm không làm khô da.',
        hours: '20 giờ'
      },
      {
        title: '02. Dưỡng sâu Mỡ chồn & Sáp cọ Carnauba',
        description: 'Phục hồi độ đàn hồi, xử lý nhăn gãy và tái tạo ánh bóng tự nhiên.',
        hours: '20 giờ'
      },
      {
        title: '03. Nghệ thuật Đánh Bóng Gương (Mirror Glaze)',
        description: 'Kỹ thuật xếp lớp sáp cứng và nước lạnh tạo mũi giày soi gương.',
        hours: '20 giờ'
      },
      {
        title: '04. Dán đế Vibram Ý & Sơn mép lề (Edge Dressing)',
        description: 'Mài đế, ép keo nhiệt PU 70°C và hoàn thiện viền gót sắc nét.',
        hours: '20 giờ'
      }
    ],
    highlights: [
      'Làm chủ kỹ thuật Mirror Shine chuẩn châu Âu',
      'Quy trình ép nhiệt đế Vibram bảo hành 12 tháng',
      'Tặng bộ Xi sáp Fox Lab Heritage Carnauba',
      'Kết nối nguồn khách hàng thực tế từ hệ thống ICUS'
    ],
    equipmentIncluded: [
      'Bộ xi sáp & kem dưỡng Fox Lab Polish Trio',
      'Bàn chải lông dê đánh bóng siêu mịn',
      'Keo nhiệt PU FL-ADH-06 & Đế mẫu Vibram Italy'
    ]
  },
  {
    id: 'course-luxury-bags',
    title: 'Phục Hồi & Spa Túi Xách Hàng Hiệu',
    badge: 'Chuyên Gia Luxury',
    tagline: 'Xử lý toàn diện túi Hermès, Chanel, Dior, LV: vá góc, sơn viền và pha màu nano.',
    duration: '14 ngày · 112 giờ',
    level: 'Chuyên gia hàng hiệu',
    format: 'Kèm cặp 1-1 trực tiếp',
    price: '22.000.000 đ',
    originalPrice: '26.000.000 đ',
    image: '/images/course-bags.jpg',
    description: 'Giải quyết các ca khó giá trị cao: rách góc đáy, chảy viền mép, bạc màu da Caviar/Lambskin và đánh bóng khóa kim loại mạ vàng.',
    modules: [
      {
        title: '01. Đặc tính da Togo, Epsom, Caviar, Lambskin & Canvas',
        description: 'Phân tích cấu trúc hạt vân và quy chuẩn an toàn cho từng nhà mốt.',
        hours: '24 giờ'
      },
      {
        title: '02. Vá vi điểm, Bả góc rách & Sơn cạnh nhiệt 4 lớp',
        description: 'Dùng keo Elast-Filler đàn hồi và sơn viền chống chảy dính khí hậu ẩm.',
        hours: '32 giờ'
      },
      {
        title: '03. Pha màu Quang phổ Pantone & Phun Airbrush Nano',
        description: 'Cân tỷ lệ màu chuẩn 98% hãng, phun sương siêu mịn giữ nguyên vân da.',
        hours: '36 giờ'
      },
      {
        title: '04. Đánh bóng & Phủ Ceramic phụ kiện Kim loại',
        description: 'Tẩy xước răm khóa mạ vàng/bạc và khóa màng chống oxy hóa.',
        hours: '20 giờ'
      }
    ],
    highlights: [
      'Thực hành trực tiếp trên các dòng túi hiệu thật',
      'Sở hữu công thức 200+ mã màu túi hiệu thịnh hành',
      'Tặng máy phun sơn Airbrush độ phân giải cao',
      'Cố vấn trực tiếp trọn đời qua nhóm Master Lab'
    ],
    equipmentIncluded: [
      'Súng phun sơn Airbrush chuyên dụng',
      'Hộp bả da đàn hồi Elast-Filler & Bộ sơn cạnh Edge Paint',
      'Bộ màu gốc Nano-Pigment 12 sắc thái cơ bản'
    ]
  },
  {
    id: 'course-patina-custom',
    title: 'Nghệ Thuật Pha Màu, Nhuộm Patina & Custom',
    badge: 'Sáng Tạo Độc Bản',
    tagline: 'Nhuộm loang màu nghệ thuật Pháp/Ý và vẽ cá nhân hóa trên đồ da cao cấp.',
    duration: '8 ngày · 64 giờ',
    level: 'Nghệ nhân Custom',
    format: 'Studio Workshop',
    price: '11.000.000 đ',
    originalPrice: '13.500.000 đ',
    image: '/images/course-patina.jpg',
    description: 'Biến giày da mộc hoặc túi xách thành tác phẩm độc bản với hiệu ứng Museum Calf, cẩm thạch Marble, vân gỗ cổ thụ và khóa màu chống lem.',
    modules: [
      {
        title: '01. Lý thuyết Màu học & Thuốc nhuộm thẩm thấu gốc cồn',
        description: 'Làm chủ bánh xe màu sắc và tốc độ thẩm thấu trên da Veg-tan.',
        hours: '16 giờ'
      },
      {
        title: '02. Hiệu ứng Classic Fade, Marble & Vân gỗ nghệ thuật',
        description: 'Tạo chiều sâu quang học 3 tầng màu bằng cọ và mút biển tự nhiên.',
        hours: '28 giờ'
      },
      {
        title: '03. Kỹ thuật Khóa màu Fixative & Hoàn thiện bề mặt',
        description: 'Bảo vệ màu nhuộm bền bỉ, kháng nước mưa và mồ hôi tuyệt đối.',
        hours: '20 giờ'
      }
    ],
    highlights: [
      'Hoàn thành 2 tác phẩm Patina hoàn chỉnh mang về',
      'Tặng bộ thuốc nhuộm Fox Lab Dye Spectrum 8 màu',
      'Làm chủ kỹ thuật vẽ Monogram cá nhân hóa'
    ],
    equipmentIncluded: [
      'Set 8 chai cồn nhuộm thẩm thấu Fox Lab',
      'Dung dịch khóa màu Color Fixative & Cọ mỹ thuật'
    ]
  },
  {
    id: 'course-franchise-startup',
    title: 'Khởi Nghiệp & Setup Trọn Gói Spa Đồ Hiệu',
    badge: 'Chủ Doanh Nghiệp',
    tagline: 'Chuyển giao toàn diện Kỹ thuật, Máy móc, Quy trình QC và Marketing thu hút khách giàu.',
    duration: '21 ngày + 3 tháng hỗ trợ',
    level: 'Chủ Spa / Nhà đầu tư',
    format: 'Trọn gói Kỹ thuật & Vận hành',
    price: '38.000.000 đ',
    originalPrice: '45.000.000 đ',
    image: '/images/academy-workshop.jpg',
    popular: true,
    description: 'Giải pháp từ A-Z để mở tiệm spa giày & túi hiệu sinh lời ngay. Đào tạo cả chủ và nhân sự, tặng gói hóa chất mở xưởng và đồng hành khai trương.',
    modules: [
      {
        title: '01. Đào tạo toàn bộ Kỹ thuật Sneaker + Giày Tây + Túi Hiệu',
        description: 'Nắm trọn 3 mảng dịch vụ cốt lõi cho bạn và 1 kỹ thuật viên đi kèm.',
        hours: '120 giờ'
      },
      {
        title: '02. Bản vẽ Mặt bằng Xưởng & Danh mục Máy móc giá gốc',
        description: 'Tối ưu luồng vận hành, tủ sấy Ozone, buồng UV và bàn hút mùi.',
        hours: '20 giờ'
      },
      {
        title: '03. Quy trình Tiếp nhận, Bảng giá & Marketing High-Ticket',
        description: 'Mẫu biên bản soi lỗi chống đền bù và chiến lược nội dung Before/After.',
        hours: '20 giờ'
      }
    ],
    highlights: [
      'Miễn phí học kèm cho 01 nhân sự kỹ thuật của tiệm',
      'Tặng gói hóa chất & vật tư mở xưởng trị giá 8.000.000đ',
      'Chiết khấu sỉ hóa chất lên đến 40% trọn đời',
      'Cấp biển hiệu đối tác Fox Lab Certified Workshop'
    ],
    equipmentIncluded: [
      'Trọn bộ 12 dòng hóa chất phòng Lab quy cách xưởng',
      'Bộ quy trình SOP, phần mềm biên nhận & kho video 4K'
    ]
  }
];

export const CHEMICAL_PRODUCTS: ChemicalProduct[] = [
  {
    id: 'chem-bio-cleaner',
    name: 'Fox Lab Bio-Enzyme Deep Cleaner',
    code: 'FL-BIO-01',
    category: 'cleaning',
    categoryLabel: 'Làm sạch sinh học',
    volume: '500ml · 5L',
    pH: 'pH 7.0',
    image: '/images/chem-FL-BIO-01.svg',
    shortDesc: 'Dung dịch enzyme sinh học phân giải bẩn hữu cơ sau 60s, không xút ăn mòn, an toàn mọi loại da.',
    features: [
      'Bóc tách bùn đất, dầu mỡ và mồ hôi không làm khô cứng da',
      'Bọt mịn mật độ cao tiết kiệm 40% lượng dung dịch',
      'Hương thảo mộc tự nhiên khử sạch mùi hôi giày'
    ],
    idealFor: ['Sneaker', 'Canvas / Knit', 'Da Veg-tan & Da bê'],
    safetyGrade: 'Chuẩn Châu Âu · An toàn da tay',
    inStock: true,
    priceEstimate: '180.000 đ – 320.000 đ',
    usageSteps: [
      'Pha tỷ lệ 1:3 với nước hoặc tạo bọt trực tiếp bằng bình Foam',
      'Chà nhẹ theo chuyển động tròn bằng bàn chải lông ngựa',
      'Lau sạch bọt bằng khăn Microfiber khô và để ráo tự nhiên'
    ]
  },
  {
    id: 'chem-unyellowing',
    name: 'Fox Lab Midsole De-Oxidizer UV Gel',
    code: 'FL-UNY-02',
    category: 'restoration',
    categoryLabel: 'Khử ố vàng đế',
    volume: '250g · 500g',
    pH: 'pH 5.5',
    image: '/images/chem-FL-UNY-02.svg',
    shortDesc: 'Gel quang hóa cô đặc đảo ngược oxy hóa cao su dưới đèn UV, trả lại độ trắng sáng 96%.',
    features: [
      'Khử sạch sắc vàng trên đế Icy, Boost, AF1, Jordan',
      'Dạng gel bám dính tốt, không chảy lem lên thân vải',
      'Không làm giòn hay mục cao su sau khi chiếu nhiệt'
    ],
    idealFor: ['Đế cao su trắng', 'Đế Icy trong suốt', 'Viền nhựa TPU'],
    safetyGrade: 'Đeo găng tay nitrile khi thao tác',
    inStock: true,
    priceEstimate: '220.000 đ – 390.000 đ',
    usageSteps: [
      'Vệ sinh sạch đế và dán băng keo che mép upper',
      'Quét lớp mỏng gel FL-UNY-02 đều lên vùng ố vàng',
      'Bọc màng nilon và chiếu đèn UV 365nm trong 2–3 giờ'
    ]
  },
  {
    id: 'chem-leather-dye',
    name: 'Fox Lab Nano-Pigment Leather Dye',
    code: 'FL-DYE-03',
    category: 'dye',
    categoryLabel: 'Sơn & Nhuộm da',
    volume: '100ml · 250ml (36 màu)',
    pH: 'pH 7.5',
    image: '/images/chem-FL-DYE-03.svg',
    shortDesc: 'Hệ sơn hạt nano siêu vi thẩm thấu sâu, chịu uốn gập 100.000 lần và giữ nguyên 100% vân da.',
    features: [
      'Không tạo màng nhựa dày cộm, giữ độ mềm tự nhiên của da',
      'Chống bong tróc, kháng ma sát và mồ hôi tay vượt trội',
      'Tương thích súng phun Airbrush 0.3mm và cọ dặm'
    ],
    idealFor: ['Túi Hermès, Chanel, LV', 'Giày da tây', 'Áo khoác da'],
    safetyGrade: 'Đạt chuẩn REACH không kim loại nặng',
    inStock: true,
    priceEstimate: '190.000 đ – 450.000 đ',
    usageSteps: [
      'Lau bề mặt bằng dung môi Fox Lab Prep Deglazer',
      'Phun 2–3 lớp sương mỏng, sấy khô giữa mỗi lớp 10 phút',
      'Khóa bề mặt bằng lớp phủ Fox Lab Top Coat Matt/Gloss'
    ]
  },
  {
    id: 'chem-nourish-balm',
    name: 'Fox Lab Royal Carnauba & Mink Balm',
    code: 'FL-BLM-04',
    category: 'restoration',
    categoryLabel: 'Dưỡng sâu & Phục hồi',
    volume: '120ml · 250ml',
    pH: 'pH 6.5',
    image: '/images/chem-FL-BLM-04.svg',
    shortDesc: 'Kem dưỡng kết hợp mỡ chồn tinh khiết và sáp cọ Carnauba Brazil, cấp ẩm sâu và tạo ánh bóng quý phái.',
    features: [
      'Thẩm thấu nhanh, không gây bết dính hay bám bụi',
      'Ngăn ngừa triệt để hiện tượng khô rạn và nứt nếp gấp',
      'Nuôi dưỡng da Aniline, Box Calf và Caviar mềm mượt'
    ],
    idealFor: ['Túi xách da bê/cừu', 'Giày tây cao cấp', 'Ví & Thắt lưng'],
    safetyGrade: '100% Sáp & Dầu hữu cơ tự nhiên',
    inStock: true,
    priceEstimate: '260.000 đ – 480.000 đ',
    usageSteps: [
      'Thoa lượng kem mỏng bằng khăn cotton theo vòng tròn',
      'Chờ 15 phút cho dưỡng chất ngấm sâu vào sợi da',
      'Đánh bóng nhanh bằng bàn chải lông ngựa hoặc lông dê'
    ]
  },
  {
    id: 'chem-nano-coat',
    name: 'Fox Lab Nano Hydro-Pro Shield',
    code: 'FL-SHD-05',
    category: 'protection',
    categoryLabel: 'Chống thấm Nano',
    volume: '300ml · 2L',
    pH: 'Trung tính',
    image: '/images/chem-FL-SHD-05.svg',
    shortDesc: 'Xịt phủ màng nano hiệu ứng lá sen trượt nước, chống bám bẩn cà phê và dầu mỡ suốt 6 tháng.',
    features: [
      'Màng bảo vệ vô hình thoáng khí, không làm đổi màu da lộn',
      'Ngăn chất lỏng có màu thấm vào sợi vải và da mộc',
      'Bền bỉ lên đến 6 tháng chỉ sau 2 lớp xịt chuẩn'
    ],
    idealFor: ['Da lộn Suede / Nubuck', 'Sneaker trắng', 'Túi vải Canvas'],
    safetyGrade: 'Không chứa PFOS/PFOA độc hại',
    inStock: true,
    priceEstimate: '195.000 đ – 350.000 đ',
    usageSteps: [
      'Vệ sinh sạch và để khô hoàn toàn bề mặt sản phẩm',
      'Xịt đều cách 20cm lớp thứ nhất, chờ khô 20 phút',
      'Xịt phủ lớp thứ hai và để ổn định cấu trúc nano trong 2 giờ'
    ]
  },
  {
    id: 'chem-vibram-adhesive',
    name: 'Fox Lab Thermal PU Bond Adhesive',
    code: 'FL-ADH-06',
    category: 'adhesives',
    categoryLabel: 'Keo nhiệt & Vibram',
    volume: '500ml · 1000ml',
    pH: 'Kích hoạt nhiệt 70°C',
    image: '/images/chem-FL-ADH-06.svg',
    shortDesc: 'Keo polyurethane chịu lực kéo cực đại chuyên dán đế cao su Vibram Ý và phục hồi giày bung đế.',
    features: [
      'Kháng nước mưa và nhiệt độ mặt đường 100%',
      'Mối dán trong suốt đàn hồi, không lộ viền keo',
      'Kèm hoạt chất Crosslinker tăng gấp đôi tuổi thọ mối dán'
    ],
    idealFor: ['Dán đế Vibram', 'Ép đế Sneaker toàn phần', 'Gia cố quai túi'],
    safetyGrade: 'Thao tác tại bàn có quạt hút mùi',
    inStock: true,
    priceEstimate: '280.000 đ – 520.000 đ',
    usageSteps: [
      'Chà nhám bề mặt và lau sạch bằng dung môi Primer',
      'Quét keo 2 mặt, để se khô tự nhiên 15 phút',
      'Sấy kích nhiệt ở 65–70°C và ép chặt trên máy ép 24 giờ'
    ]
  }
];

export const DIAGNOSTIC_MATERIALS: DiagnosticMaterial[] = [
  {
    id: 'mat-calfskin',
    name: 'Da Bê & Da Trơn (Box Calf / Smooth)',
    description: 'Túi Chanel, Hermès, giày tây Oxford, Loafer.',
    icon: 'Sparkles'
  },
  {
    id: 'mat-suede',
    name: 'Da Lộn & Nubuck (Suede / Velvet)',
    description: 'Bề mặt tuyết nhung nhạy cảm nước và dầu mỡ.',
    icon: 'Feather'
  },
  {
    id: 'mat-canvas-knit',
    name: 'Vải Canvas & Dệt Knit Sneaker',
    description: 'Sneaker Jordan, Yeezy, vải Monogram LV/Gucci.',
    icon: 'Layers'
  },
  {
    id: 'mat-caviar',
    name: 'Da Hạt Ép (Caviar / Epsom / Saffiano)',
    description: 'Da dập vân nổi cần bảo toàn kết cấu hạt.',
    icon: 'ShieldCheck'
  },
  {
    id: 'mat-patent',
    name: 'Da Bóng Tráng Gương (Patent Leather)',
    description: 'Dễ bị ố loang màu (color transfer) và xỉn bóng.',
    icon: 'Sun'
  }
];

export const DIAGNOSTIC_ISSUES: DiagnosticIssue[] = [
  {
    id: 'issue-yellowing',
    name: 'Đế Ố Vàng & Oxy Hóa Cao Su',
    severity: 'moderate',
    commonIn: 'Sneaker trắng, đế Icy, Boost'
  },
  {
    id: 'issue-fading',
    name: 'Bạc Màu, Sờn Góc & Trầy Xước',
    severity: 'moderate',
    commonIn: 'Góc túi hiệu, mũi giày, quai xách'
  },
  {
    id: 'issue-cracking',
    name: 'Rạn Nứt Sâu & Chảy Viền Cạnh',
    severity: 'severe',
    commonIn: 'Nếp gấp giày tây, viền túi xách'
  },
  {
    id: 'issue-mold',
    name: 'Ẩm Mốc Lâu Năm & Ám Mùi Hôi',
    severity: 'moderate',
    commonIn: 'Đồ da bảo quản tủ kín ẩm'
  },
  {
    id: 'issue-unglued',
    name: 'Bung Keo Đế & Mòn Đế Cần Dán Vibram',
    severity: 'mild',
    commonIn: 'Sneaker lâu năm, đế da giày tây'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Khử Ố Quang Hóa Đế Icy Air Jordan 1',
    brand: 'Nike Jordan',
    itemType: 'Sneaker Đế Icy',
    problem: 'Đế cao su trong suốt ngả vàng đục do oxy hóa, thân da bám bẩn ố đen.',
    solution: 'Làm sạch khô bằng bọt Bio-Enzyme FL-BIO-01, ủ gel FL-UNY-02 trong buồng quang hóa UV 3 giờ.',
    chemicalsUsed: ['FL-BIO-01 Bio Cleaner', 'FL-UNY-02 UV Gel', 'FL-SHD-05 Nano Shield'],
    turnaroundTime: '24 giờ',
    beforeImg: '/images/ba-sneaker-before.jpg',
    afterImg: '/images/ba-sneaker-after.jpg',
    technicianNotes: 'Độ trong suốt khôi phục 96%, cao su giữ nguyên độ đàn hồi êm ái.'
  },
  {
    id: 'case-2',
    title: 'Tái Tạo 4 Góc Rách & Phun Màu Túi Chanel Classic',
    brand: 'Chanel Paris',
    itemType: 'Túi Da Lambskin',
    problem: '4 góc đáy bị mài rách lộ cốt, bề mặt da cừu khô rạn và phai màu ánh đen.',
    solution: 'Bả góc bằng keo đàn hồi Elast-Filler, phun 3 lớp sương Nano-Pigment FL-DYE-03 và dưỡng sáp Carnauba.',
    chemicalsUsed: ['Fox Lab Elast-Filler', 'FL-DYE-03 Nano Pigment', 'FL-BLM-04 Royal Balm'],
    turnaroundTime: '72 giờ',
    beforeImg: '/images/course-bags.jpg',
    afterImg: '/images/course-bags.jpg',
    technicianNotes: 'Góc túi căng phẳng tự nhiên, giữ trọn độ phồng mềm mại của ô trần trám.'
  },
  {
    id: 'case-3',
    title: 'Nhuộm Patina Hổ Phách & Dán Đế Vibram Giày Oxford',
    brand: 'Bespoke Shoe',
    itemType: 'Giày Tây Veg-Tan',
    problem: 'Bề mặt da mộc xỉn màu đơn điệu, đế da nguyên bản bị mòn trơn trượt.',
    solution: 'Tẩy lớp finish cũ, nhuộm loang 3 tầng màu Amber Tobacco, đánh bóng gương mũi giày và ép nhiệt đế Vibram Ý.',
    chemicalsUsed: ['Fox Lab Alcohol Dye', 'FL-BLM-04 Carnauba', 'FL-ADH-06 Thermal PU'],
    turnaroundTime: '48 giờ',
    beforeImg: '/images/course-leather.jpg',
    afterImg: '/images/course-patina.jpg',
    technicianNotes: 'Chiều sâu màu sắc sang trọng, mũi giày bóng gương và đế Vibram bám đường tuyệt đối.'
  }
];

export const STUDENT_WORKSHOPS = [
  {
    name: 'Nguyễn Thành Nam',
    location: 'Hà Nội',
    role: 'Chủ xưởng The Kicks Lab · Khóa K14',
    image: '/images/academy-workshop.jpg',
    metric: '75 triệu / tháng',
    comment: 'Nhờ công thức Bio-Enzyme và quy trình UV của Fox Lab, tiệm mình xử lý 35 đôi/ngày cực kỳ an tâm, không còn nỗi lo bung keo hay phai màu.'
  },
  {
    name: 'Trần Thảo Ly',
    location: 'TP. Hồ Chí Minh',
    role: 'Chuyên gia Luxury Bag Care · Khóa K18',
    image: '/images/course-bags.jpg',
    metric: 'Lợi nhuận > 45 triệu',
    comment: 'Kỹ thuật pha màu Pantone và phun Airbrush tại Fox Lab giúp mình tự tin nhận phục hồi túi Chanel, Hermès với biên lợi nhuận trên 70%.'
  },
  {
    name: 'Lê Hoàng Dũng',
    location: 'Đà Nẵng',
    role: 'Chủ Bespoke Shoe Spa · Khóa K22',
    image: '/images/course-leather.jpg',
    metric: 'Hoàn vốn sau 75 ngày',
    comment: 'Fox Lab hỗ trợ từ bản vẽ mặt bằng, máy móc đến hóa chất giá sỉ. Chỉ sau 2.5 tháng khai trương tại Đà Nẵng mình đã thu hồi đủ vốn.'
  }
];

export const FAQS = [
  {
    q: 'Chưa có kinh nghiệm về đồ da có học được không?',
    a: 'Hơn 75% học viên bắt đầu từ con số 0. Giáo trình Fox Lab cầm tay chỉ việc 1-1 trên sản phẩm thật đến khi lành nghề.'
  },
  {
    q: 'Học xong có được hỗ trợ mở tiệm và nhập hóa chất giá sỉ không?',
    a: 'Có. Học viên được chuyển giao trọn bộ quy trình vận hành, bảng giá dịch vụ và hưởng chiết khấu hóa chất sỉ lên đến 40% trọn đời.'
  },
  {
    q: 'Chi phí mở một tiệm Spa Giày & Túi Hiệu khoảng bao nhiêu?',
    a: 'Chỉ từ 45 – 75 triệu đồng cho mô hình tiêu chuẩn. Với sản lượng 10–15 sản phẩm/ngày, thời gian hoàn vốn trung bình từ 2 đến 3 tháng.'
  },
  {
    q: 'Hóa chất Fox Lab có giao hàng toàn quốc và kèm hướng dẫn không?',
    a: 'Chúng tôi giao hỏa tốc toàn quốc, tặng kèm tài liệu định lượng pH và video hướng dẫn thao tác phòng Lab cho từng mã hóa chất.'
  }
];
