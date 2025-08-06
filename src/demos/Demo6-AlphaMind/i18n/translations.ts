export interface Translation {
  // 通用
  common: {
    app: string;
    settings: string;
    account: string;
    usage: string;
    dataControls: string;
    scheduledTasks: string;
    cloudBrowser: string;
    connectedApps: string;
    getHelp: string;
    close: string;
    save: string;
    cancel: string;
    confirm: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    filter: string;
    sort: string;
    loading: string;
    noData: string;
    error: string;
    success: string;
  };

  // 设置页面
  settings: {
    title: string;
    general: string;
    language: string;
    appearance: string;
    light: string;
    dark: string;
    followSystem: string;
    personalization: string;
    receiveExclusiveContent: string;
    receiveExclusiveContentDesc: string;
    emailNotifications: string;
    emailNotificationsDesc: string;
    manageCookies: string;
    manage: string;
  };

  // 导航
  navigation: {
    chat: string;
    agents: string;
    data: string;
    knowledgeBase: string;
    materials: string;
    workflows: string;
    analytics: string;
  };

  // 聊天界面
  chat: {
    welcome: string;
    welcomeSubtitle: string;
    inputPlaceholder: string;
    send: string;
    newTask: string;
    all: string;
    favorites: string;
    scheduled: string;
    shareTitle: string;
    shareSubtitle: string;
    learnMore: string;
  };

  // 动作按钮
  actions: {
    image: string;
    slides: string;
    webpage: string;
    spreadsheet: string;
    visualization: string;
    more: string;
    new: string;
  };

  // 顶部导航
  header: {
    notifications: string;
    app: string;
  };

  // 语言切换对话框
  languageDialog: {
    title: string;
    message: string;
    switchLanguage: string;
    keepEnglish: string;
    keepCurrentLanguage: string;
  };
}

export const translations: Record<string, Translation> = {
  'English': {
    common: {
      app: 'App',
      settings: 'Settings',
      account: 'Account',
      usage: 'Usage',
      dataControls: 'Data Controls',
      scheduledTasks: 'Scheduled Tasks',
      cloudBrowser: 'Cloud Browser',
      connectedApps: 'Connected Apps',
      getHelp: 'Get Help',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      loading: 'Loading',
      noData: 'No Data',
      error: 'Error',
      success: 'Success',
    },
    settings: {
      title: 'Settings',
      general: 'General',
      language: 'Language',
      appearance: 'Appearance',
      light: 'Light',
      dark: 'Dark',
      followSystem: 'Follow System',
      personalization: 'Personalization',
      receiveExclusiveContent: 'Receive exclusive content',
      receiveExclusiveContentDesc: 'Get exclusive offers, event updates, excellent case examples and new feature guides.',
      emailNotifications: 'Email me when my queued task starts processing',
      emailNotificationsDesc: 'When enabled, we\'ll send you a timely email once your task finishes queuing and begins processing, so you can easily check its progress. You can change this setting anytime.',
      manageCookies: 'Manage Cookies',
      manage: 'Manage',
    },
    navigation: {
      chat: 'Chat',
      agents: 'Agents',
      data: 'Data',
      knowledgeBase: 'Knowledge Base',
      materials: 'Materials',
      workflows: 'Workflows',
      analytics: 'Analytics',
    },
    chat: {
      welcome: 'Hello alex lei',
      welcomeSubtitle: 'What can I do for you?',
      inputPlaceholder: 'Assign a task or ask anything',
      send: 'Send',
      newTask: 'New Task',
      all: 'All',
      favorites: 'Favorites',
      scheduled: 'Scheduled',
      shareTitle: 'Share AlphaMind with a friend',
      shareSubtitle: 'Get 500 credits each',
      learnMore: 'Learn more',
    },
    actions: {
      image: 'Image',
      slides: 'Slides',
      webpage: 'Webpage',
      spreadsheet: 'Spreadsheet',
      visualization: 'Visualization',
      more: 'More',
      new: 'New',
    },
    header: {
      notifications: 'Notifications',
      app: 'App',
    },
    languageDialog: {
      title: 'Switch Language?',
      message: 'Would you like to switch to the local language for this region?',
      switchLanguage: 'Switch Language',
      keepEnglish: 'Keep English',
      keepCurrentLanguage: 'Keep Current Language',
    },
  },

  '中文 (简体)': {
    common: {
      app: '应用',
      settings: '设置',
      account: '账户',
      usage: '使用情况',
      dataControls: '数据控制',
      scheduledTasks: '计划任务',
      cloudBrowser: '云浏览器',
      connectedApps: '已连接应用',
      getHelp: '获取帮助',
      close: '关闭',
      save: '保存',
      cancel: '取消',
      confirm: '确认',
      delete: '删除',
      edit: '编辑',
      add: '添加',
      search: '搜索',
      filter: '筛选',
      sort: '排序',
      loading: '加载中',
      noData: '暂无数据',
      error: '错误',
      success: '成功',
    },
    settings: {
      title: '设置',
      general: '常规',
      language: '语言',
      appearance: '外观',
      light: '浅色',
      dark: '深色',
      followSystem: '跟随系统',
      personalization: '个性化',
      receiveExclusiveContent: '接收独家内容',
      receiveExclusiveContentDesc: '获取独家优惠、活动更新、优秀案例示例和新功能指南。',
      emailNotifications: '任务开始处理时发送邮件通知',
      emailNotificationsDesc: '启用后，当您的任务完成排队并开始处理时，我们会及时发送邮件，方便您查看进度。您可以随时更改此设置。',
      manageCookies: '管理 Cookie',
      manage: '管理',
    },
    navigation: {
      chat: '聊天',
      agents: '代理',
      data: '数据',
      knowledgeBase: '知识库',
      materials: '材料',
      workflows: '工作流',
      analytics: '分析',
    },
    chat: {
      welcome: '你好 alex lei',
      welcomeSubtitle: '我能为您做些什么？',
      inputPlaceholder: '分配任务或询问任何问题',
      send: '发送',
      newTask: '新建任务',
      all: '全部',
      favorites: '收藏',
      scheduled: '已计划',
      shareTitle: '与朋友分享 AlphaMind',
      shareSubtitle: '每人获得 500 积分',
      learnMore: '了解更多',
    },
    actions: {
      image: '图片',
      slides: '幻灯片',
      webpage: '网页',
      spreadsheet: '电子表格',
      visualization: '可视化',
      more: '更多',
      new: '新',
    },
    header: {
      notifications: '通知',
      app: '应用',
    },
    languageDialog: {
      title: '切换语言？',
      message: '您是否要切换到此地区的本地语言？',
      switchLanguage: '切换语言',
      keepEnglish: '保持英文',
      keepCurrentLanguage: '保持当前语言',
    },
  },

  'Bahasa Melayu': {
    common: {
      app: 'Aplikasi',
      settings: 'Tetapan',
      account: 'Akaun',
      usage: 'Penggunaan',
      dataControls: 'Kawalan Data',
      scheduledTasks: 'Tugas Berjadual',
      cloudBrowser: 'Pelayar Awan',
      connectedApps: 'Aplikasi Bersambung',
      getHelp: 'Dapatkan Bantuan',
      close: 'Tutup',
      save: 'Simpan',
      cancel: 'Batal',
      confirm: 'Sahkan',
      delete: 'Padam',
      edit: 'Sunting',
      add: 'Tambah',
      search: 'Cari',
      filter: 'Tapis',
      sort: 'Susun',
      loading: 'Memuatkan',
      noData: 'Tiada Data',
      error: 'Ralat',
      success: 'Berjaya',
    },
    settings: {
      title: 'Tetapan',
      general: 'Umum',
      language: 'Bahasa',
      appearance: 'Penampilan',
      light: 'Cahaya',
      dark: 'Gelap',
      followSystem: 'Ikut Sistem',
      personalization: 'Peribadi',
      receiveExclusiveContent: 'Terima kandungan eksklusif',
      receiveExclusiveContentDesc: 'Dapatkan tawaran eksklusif, kemas kini acara, contoh kes cemerlang dan panduan ciri baharu.',
      emailNotifications: 'E-mel saya apabila tugas beratur saya mula diproses',
      emailNotificationsDesc: 'Apabila diaktifkan, kami akan menghantar e-mel tepat pada masanya sebaik sahaja tugas anda selesai beratur dan mula diproses, supaya anda boleh menyemak kemajuannya dengan mudah. Anda boleh menukar tetapan ini pada bila-bila masa.',
      manageCookies: 'Urus Kuki',
      manage: 'Urus',
    },
    navigation: {
      chat: 'Sembang',
      agents: 'Ejen',
      data: 'Data',
      knowledgeBase: 'Pangkalan Pengetahuan',
      materials: 'Bahan',
      workflows: 'Aliran Kerja',
      analytics: 'Analitik',
    },
    chat: {
      welcome: 'Hai alex lei',
      welcomeSubtitle: 'Apa yang boleh saya lakukan untuk anda?',
      inputPlaceholder: 'Tugaskan tugas atau tanya apa-apa',
      send: 'Hantar',
      newTask: 'Tugas Baharu',
      all: 'Semua',
      favorites: 'Kegemaran',
      scheduled: 'Berjadual',
      shareTitle: 'Kongsi AlphaMind dengan rakan',
      shareSubtitle: 'Dapatkan 500 kredit setiap orang',
      learnMore: 'Ketahui lebih lanjut',
    },
    actions: {
      image: 'Imej',
      slides: 'Slaid',
      webpage: 'Laman Web',
      spreadsheet: 'Hamparan',
      visualization: 'Visualisasi',
      more: 'Lagi',
      new: 'Baharu',
    },
    header: {
      notifications: 'Pemberitahuan',
      app: 'Aplikasi',
    },
    languageDialog: {
      title: 'Tukar Bahasa?',
      message: 'Adakah anda mahu menukar kepada bahasa tempatan untuk rantau ini?',
      switchLanguage: 'Tukar Bahasa',
      keepEnglish: 'Kekalkan Bahasa Inggeris',
      keepCurrentLanguage: 'Kekalkan Bahasa Semasa',
    },
  },

  'ภาษาไทย': {
    common: {
      app: 'แอป',
      settings: 'การตั้งค่า',
      account: 'บัญชี',
      usage: 'การใช้งาน',
      dataControls: 'การควบคุมข้อมูล',
      scheduledTasks: 'งานที่กำหนดเวลา',
      cloudBrowser: 'เบราว์เซอร์คลาวด์',
      connectedApps: 'แอปที่เชื่อมต่อ',
      getHelp: 'รับความช่วยเหลือ',
      close: 'ปิด',
      save: 'บันทึก',
      cancel: 'ยกเลิก',
      confirm: 'ยืนยัน',
      delete: 'ลบ',
      edit: 'แก้ไข',
      add: 'เพิ่ม',
      search: 'ค้นหา',
      filter: 'กรอง',
      sort: 'เรียงลำดับ',
      loading: 'กำลังโหลด',
      noData: 'ไม่มีข้อมูล',
      error: 'ข้อผิดพลาด',
      success: 'สำเร็จ',
    },
    settings: {
      title: 'การตั้งค่า',
      general: 'ทั่วไป',
      language: 'ภาษา',
      appearance: 'ลักษณะ',
      light: 'สว่าง',
      dark: 'มืด',
      followSystem: 'ตามระบบ',
      personalization: 'ส่วนบุคคล',
      receiveExclusiveContent: 'รับเนื้อหาเฉพาะ',
      receiveExclusiveContentDesc: 'รับข้อเสนอพิเศษ การอัปเดตกิจกรรม ตัวอย่างกรณีศึกษาที่ดี และคู่มือฟีเจอร์ใหม่',
      emailNotifications: 'ส่งอีเมลเมื่องานที่คิวเริ่มประมวลผล',
      emailNotificationsDesc: 'เมื่อเปิดใช้งาน เราจะส่งอีเมลทันเวลาทันทีที่งานของคุณเสร็จสิ้นการคิวและเริ่มประมวลผล เพื่อให้คุณสามารถตรวจสอบความคืบหน้าได้อย่างง่ายดาย คุณสามารถเปลี่ยนการตั้งค่านี้ได้ตลอดเวลา',
      manageCookies: 'จัดการคุกกี้',
      manage: 'จัดการ',
    },
    navigation: {
      chat: 'แชท',
      agents: 'เอเจนต์',
      data: 'ข้อมูล',
      knowledgeBase: 'ฐานความรู้',
      materials: 'วัสดุ',
      workflows: 'เวิร์กโฟลว์',
      analytics: 'การวิเคราะห์',
    },
    chat: {
      welcome: 'สวัสดี alex lei',
      welcomeSubtitle: 'ฉันสามารถช่วยคุณได้อะไร?',
      inputPlaceholder: 'มอบหมายงานหรือถามอะไรก็ได้',
      send: 'ส่ง',
      newTask: 'งานใหม่',
      all: 'ทั้งหมด',
      favorites: 'รายการโปรด',
      scheduled: 'ที่กำหนดเวลา',
      shareTitle: 'แชร์ AlphaMind กับเพื่อน',
      shareSubtitle: 'รับเครดิต 500 ต่อคน',
      learnMore: 'เรียนรู้เพิ่มเติม',
    },
    actions: {
      image: 'ภาพ',
      slides: 'สไลด์',
      webpage: 'หน้าเว็บ',
      spreadsheet: 'สเปรดชีต',
      visualization: 'การแสดงภาพ',
      more: 'เพิ่มเติม',
      new: 'ใหม่',
    },
    header: {
      notifications: 'การแจ้งเตือน',
      app: 'แอป',
    },
    languageDialog: {
      title: 'เปลี่ยนภาษา?',
      message: 'คุณต้องการเปลี่ยนเป็นภาษาท้องถิ่นสำหรับภูมิภาคนี้หรือไม่?',
      switchLanguage: 'เปลี่ยนภาษา',
      keepEnglish: 'คงภาษาอังกฤษ',
      keepCurrentLanguage: 'คงภาษาปัจจุบัน',
    },
  },

  'Bahasa Indonesia': {
    common: {
      app: 'Aplikasi',
      settings: 'Pengaturan',
      account: 'Akun',
      usage: 'Penggunaan',
      dataControls: 'Kontrol Data',
      scheduledTasks: 'Tugas Terjadwal',
      cloudBrowser: 'Browser Awan',
      connectedApps: 'Aplikasi Terhubung',
      getHelp: 'Dapatkan Bantuan',
      close: 'Tutup',
      save: 'Simpan',
      cancel: 'Batal',
      confirm: 'Konfirmasi',
      delete: 'Hapus',
      edit: 'Edit',
      add: 'Tambah',
      search: 'Cari',
      filter: 'Filter',
      sort: 'Urutkan',
      loading: 'Memuat',
      noData: 'Tidak Ada Data',
      error: 'Error',
      success: 'Berhasil',
    },
    settings: {
      title: 'Pengaturan',
      general: 'Umum',
      language: 'Bahasa',
      appearance: 'Tampilan',
      light: 'Terang',
      dark: 'Gelap',
      followSystem: 'Ikuti Sistem',
      personalization: 'Personalisasi',
      receiveExclusiveContent: 'Terima konten eksklusif',
      receiveExclusiveContentDesc: 'Dapatkan penawaran eksklusif, pembaruan acara, contoh kasus yang luar biasa dan panduan fitur baru.',
      emailNotifications: 'Kirim email saat tugas antrian saya mulai diproses',
      emailNotificationsDesc: 'Ketika diaktifkan, kami akan mengirim email tepat waktu setelah tugas Anda selesai antrian dan mulai diproses, sehingga Anda dapat dengan mudah memeriksa kemajuannya. Anda dapat mengubah pengaturan ini kapan saja.',
      manageCookies: 'Kelola Cookie',
      manage: 'Kelola',
    },
    navigation: {
      chat: 'Obrolan',
      agents: 'Agen',
      data: 'Data',
      knowledgeBase: 'Basis Pengetahuan',
      materials: 'Materi',
      workflows: 'Alur Kerja',
      analytics: 'Analitik',
    },
    chat: {
      welcome: 'Halo alex lei',
      welcomeSubtitle: 'Apa yang bisa saya lakukan untuk Anda?',
      inputPlaceholder: 'Tetapkan tugas atau tanyakan apa saja',
      send: 'Kirim',
      newTask: 'Tugas Baru',
      all: 'Semua',
      favorites: 'Favorit',
      scheduled: 'Terjadwal',
      shareTitle: 'Bagikan AlphaMind dengan teman',
      shareSubtitle: 'Dapatkan 500 kredit masing-masing',
      learnMore: 'Pelajari lebih lanjut',
    },
    actions: {
      image: 'Gambar',
      slides: 'Slide',
      webpage: 'Halaman Web',
      spreadsheet: 'Spreadsheet',
      visualization: 'Visualisasi',
      more: 'Lainnya',
      new: 'Baru',
    },
    header: {
      notifications: 'Notifikasi',
      app: 'Aplikasi',
    },
    languageDialog: {
      title: 'Ganti Bahasa?',
      message: 'Apakah Anda ingin beralih ke bahasa lokal untuk wilayah ini?',
      switchLanguage: 'Ganti Bahasa',
      keepEnglish: 'Pertahankan Bahasa Inggris',
      keepCurrentLanguage: 'Pertahankan Bahasa Saat Ini',
    },
  },
};

export type Language = keyof typeof translations; 