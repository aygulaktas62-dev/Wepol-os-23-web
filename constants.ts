export type LanguageType = 'English' | 'Turkish' | 'Korean' | 'Chinese';

export const UI_TRANSLATIONS: Record<string, Record<LanguageType, string>> = {
  // Apps
  calendar: { English: 'Calendar', Turkish: 'Takvim', Korean: '캘린더', Chinese: '日历' },
  weather: { English: 'Weather', Turkish: 'Hava Durumu', Korean: '날씨', Chinese: '天气' },
  photos: { English: 'Gallery', Turkish: 'Galeri', Korean: '갤러리', Chinese: '图库' },
  appstore: { English: 'App Store', Turkish: 'App Store', Korean: '앱 스토어', Chinese: '应用商店' },
  settings: { English: 'Settings', Turkish: 'Ayarlar', Korean: '설정', Chinese: '设置' },
  clock: { English: 'Clock', Turkish: 'Saat', Korean: '시계', Chinese: '时钟' },
  calculator: { English: 'Calculator', Turkish: 'Hesap Makinesi', Korean: '계산기', Chinese: '计算器' },
  maps: { English: 'Maps', Turkish: 'Haritalar', Korean: '지도', Chinese: '地图' },
  notes: { English: 'Notes', Turkish: 'Notlar', Korean: '메모', Chinese: '备忘录' },
  files_dock: { English: 'Files', Turkish: 'Dosyalar', Korean: '파일', Chinese: '文件' },
  mail: { English: 'Mail', Turkish: 'E-posta', Korean: '메일', Chinese: '邮件' },
  youtube: { English: 'YouTube', Turkish: 'YouTube', Korean: 'YouTube', Chinese: 'YouTube' },
  tiktok: { English: 'TikTok', Turkish: 'TikTok', Korean: 'TikTok', Chinese: 'TikTok' },
  playstore: { English: 'Play Store', Turkish: 'Play Store', Korean: '플레이스토어', Chinese: '应用商店' },
  themes: { English: 'Themes', Turkish: 'Temalar', Korean: '테마', Chinese: '主题' },
  discord: { English: 'Discord', Turkish: 'Discord', Korean: 'Discord', Chinese: 'Discord' },
  linkedin: { English: 'LinkedIn', Turkish: 'LinkedIn', Korean: 'LinkedIn', Chinese: 'LinkedIn' },
  zoom: { English: 'Zoom', Turkish: 'Zoom', Korean: 'Zoom', Chinese: 'Zoom' },
  twitch: { English: 'Twitch', Turkish: 'Twitch', Korean: 'Twitch', Chinese: 'Twitch' },
  translate: { English: 'Translate', Turkish: 'Çeviri', Korean: '번역', Chinese: '翻译' },
  phone: { English: 'Phone', Turkish: 'Telefon', Korean: '전화', Chinese: '电话' },
  safari: { English: 'Safari', Turkish: 'Safari', Korean: 'Safari', Chinese: 'Safari' },
  messages: { English: 'Messages', Turkish: 'Mesajlar', Korean: '메시지', Chinese: '信息' },
  music: { English: 'Music', Turkish: 'Müzik', Korean: '음악', Chinese: '音乐' },
  camera: { English: 'Camera', Turkish: 'Kamera', Korean: '카메라', Chinese: '相机' },
  terminal: { English: 'Magisk', Turkish: 'Magisk', Korean: 'Magisk', Chinese: 'Magisk' },
  device_security: { English: 'Security Hub', Turkish: 'Güvenlik Merkezi', Korean: '보안 허브', Chinese: '安全中心' },
  // Lock Screen
  swipe_up: { English: 'Swipe to unlock', Turkish: 'Açmak için kaydırın', Korean: '밀어서 잠금 해제', Chinese: '向上轻扫以解锁' },
  safe_mode: { English: 'Safe Mode', Turkish: 'Güvenli Mod', Korean: '안전 모드', Chinese: '安全模式' },
  // Control Panel
  not_playing: { English: 'Not Playing', Turkish: 'Oynatılmıyor', Korean: '재생 중이 아님', Chinese: '未在播放' },
  media_hub: { English: 'WePol Media Hub', Turkish: 'WePol Medya Merkezi', Korean: 'WePol 미디어 허브', Chinese: 'WePol 媒体中心' },
  airplane_mode: { English: 'Airplane Mode', Turkish: 'Uçak Modu', Korean: '에어플레인 모드', Chinese: '飞行模式' },
  wifi: { English: 'Wi-Fi', Turkish: 'Wi-Fi', Korean: '와이파이', Chinese: 'Wi-Fi' },
  cellular: { English: 'Cellular Data', Turkish: 'Hücresel Veri', Korean: '셀룰러 데이터', Chinese: '蜂窝网络' },
  network_ops: { English: 'Network Ops', Turkish: 'Ağ İşlemleri', Korean: '네트워크 작업', Chinese: '网络操作' },
  flashlight: { English: 'Flashlight', Turkish: 'Fener', Korean: '손전등', Chinese: '手电筒' },
  screen_mirroring: { English: 'Screen Mirroring', Turkish: 'Ekran Yansıtma', Korean: '화면 미러링', Chinese: '屏幕镜像' },
  brightness: { English: 'Brightness', Turkish: 'Parlaklık', Korean: '밝기', Chinese: '亮度' },
  volume: { English: 'Volume', Turkish: 'Ses', Korean: '음량', Chinese: '音量' },
  // Setup Screen
  setup_hello: { English: 'Hello', Turkish: 'Merhaba', Korean: '안녕하세요', Chinese: '你好' },
  setup_welcome: { English: 'Welcome to your new WePol OS device. Let\'s get things ready.', Turkish: 'Yeni WePol OS cihazınıza hoş geldiniz. Her şeyi hazırlayalım.', Korean: '새로운 WePol OS 디바이스에 오신 것을 환영합니다. 준비를 시작합니다.', Chinese: '欢迎使用您的全新 WePol OS 设备。让我们准备就绪。' },
  setup_continue: { English: 'Continue', Turkish: 'Devam Et', Korean: '계속', Chinese: '继续' },
  setup_step_1: { English: 'Step 1 of 2', Turkish: '1. Adım / 2', Korean: '1단계 / 2', Chinese: '第 1 步 / 共 2 步' },
  setup_step_2: { English: 'Step 2 of 2', Turkish: '2. Adım / 2', Korean: '2단계 / 2', Chinese: '第 2 步 / 共 2 步' },
  setup_personalize: { English: 'Personalize', Turkish: 'Kişiselleştir', Korean: '개인 맞춤 설정', Chinese: '个性化' },
  setup_personalize_desc: { English: 'Choose how your device looks and behaves.', Turkish: 'Cihazınızın görünümünü ve davranışını seçin.', Korean: '디바이스의 디자인과 옵션을 설정하세요.', Chinese: '选择设备的外观与行为方式。' },
  setup_icon_style: { English: 'Icon Style', Turkish: 'Simge Stili', Korean: '아이콘 스타일', Chinese: '图标样式' },
  setup_wallpaper: { English: 'Wallpaper', Turkish: 'Duvar Kağıdı', Korean: '배경화면', Chinese: '壁纸' },
  setup_next_step: { English: 'Next Step', Turkish: 'Sonraki Adım', Korean: '다음 단계', Chinese: '下一步' },
  setup_classic: { English: 'Classic', Turkish: 'Klasik', Korean: '클래식', Chinese: '经典' },
  setup_color: { English: 'Color', Turkish: 'Renkli', Korean: '컬러', Chinese: '色彩' },
  setup_slider_bar: { English: 'SLIDER BAR', Turkish: 'GEZİNME ÇUBUĞU', Korean: '슬라이더 바', Chinese: '导航条' },
  setup_3_button: { English: '3-BUTTON', Turkish: '3 TUŞLU GEZİNME', Korean: '3버튼 탐색', Chinese: '三键导航' },
  setup_sys_nav: { English: 'System Navigation', Turkish: 'Sistem Gezinmesi', Korean: '시스템 탐색', Chinese: '系统导航' },
  setup_choose_wifi: { English: 'Choose Network', Turkish: 'Ağ Seçin', Korean: '네트워크 선택', Chinese: '选择网络' },
  setup_select_wifi_desc: { English: 'Select a Wi-Fi network to activate your device features.', Turkish: 'Cihaz özelliklerini etkinleştirmek için bir Wi-Fi ağı seçin.', Korean: '디바이스 기능을 활성화하기 위해 와이파이 네트워크를 선택하세요.', Chinese: '选择 Wi-Fi 网络以激活设备功能。' },
  setup_connect: { English: 'CONNECT', Turkish: 'BAĞLAN', Korean: '연결', Chinese: '连接' },
  setup_later: { English: 'Set up later in Settings', Turkish: 'Ayarlardan daha sonra ayarla', Korean: '나중에 설정에서 구성', Chinese: '稍后在设置中设置' },
  silence: { English: 'Silence', Turkish: 'Sessizlik', Korean: '무음', Chinese: '静音' },
  // Settings Categories
  settings_about: { English: 'About Device', Turkish: 'Cihaz Hakkında', Korean: '디바이스 정보', Chinese: '关于设备' },
  settings_internet: { English: 'Internet', Turkish: 'Internet', Korean: '인터넷', Chinese: '互联网' },
  settings_home: { English: 'Home Screen', Turkish: 'Ana Ekran', Korean: '홈 화면', Chinese: '主屏幕' },
  settings_display: { English: 'Display & Brightness', Turkish: 'Ekran ve Parlaklık', Korean: '디스플레이 및 밝기', Chinese: '显示与亮度' },
  settings_animations: { English: 'Animations', Turkish: 'Animasyonlar', Korean: '애니메이션', Chinese: '动画' },
  settings_battery: { English: 'Battery', Turkish: 'Pil', Korean: '배터리', Chinese: '电池' },
  settings_security: { English: 'Security', Turkish: 'Güvenlik', Korean: '보안', Chinese: '安全' },
  settings_accessibility: { English: 'Accessibility', Turkish: 'Erişilebilirlik', Korean: '접근성', Chinese: '辅助功能' },
  settings_more: { English: 'More Settings', Turkish: 'Daha Fazla Ayar', Korean: '기타 설정', Chinese: '更多设置' },
  settings_lang_region: { English: 'Language & Region', Turkish: 'Dil ve Bölge', Korean: '언어 및 지역', Chinese: '语言与地区' },
  // Settings Subtexts
  settings_about_desc: { English: 'WEPOL OS 23', Turkish: 'WEPOL OS 23', Korean: 'WEPOL OS 23', Chinese: 'WEPOL OS 23' },
  settings_internet_desc: { English: 'WI-FI & CELLULAR', Turkish: 'WI-FI VE HÜCRESEL', Korean: '와이파이 및 셀러', Chinese: 'WI-FI 与移动网络' },
  settings_home_desc: { English: 'WALLPAPER & NAVIGATION', Turkish: 'DUVAR KAĞIDI VE GEZİNME', Korean: '배경화면 및 탐색', Chinese: '壁纸与导航' },
  settings_display_desc: { English: 'ZOOM & DISTANCE', Turkish: 'YAKINLAŞTIRMA VE BESLEME', Korean: '확대 및 미세 조정', Chinese: '缩放与距离' },
  settings_animations_desc: { English: 'SPEED & MOTION', Turkish: 'HIZ VE HAREKET', Korean: '속도 및 움직임', Chinese: '速度与动态' },
  settings_battery_desc: { English: 'HEALTH & SAVER', Turkish: 'SAĞLIK & TASARRUF', Korean: '성능 상태 및 절전', Chinese: '健康与省电' },
  settings_security_desc: { English: 'PASSCODE & LOCK', Turkish: 'PAROLA VE KİLİT', Korean: '암호 및 잠금', Chinese: '密码与锁定' },
  settings_accessibility_desc: { English: 'DYNAMIC ISLAND & VISUALS', Turkish: 'DİNAMİK ADA VE GÖRSELLER', Korean: '다이내믹 아일랜드 및 비주얼', Chinese: '灵动岛与视觉' },
  settings_more_desc: { English: 'GRID SIZE & MODS', Turkish: 'GRID BOYUTU & MODLAR', Korean: '그리드 크기 및 모드', Chinese: '网格大小与模式' },
  // Calendar
  cal_may: { English: 'May 2026', Turkish: 'Mayıs 2026', Korean: '2026년 5월', Chinese: '2026年5月' },
  cal_upcoming: { English: 'Upcoming Events', Turkish: 'Yaklaşan Etkinlikler', Korean: '예정된 이벤트', Chinese: '即将到来的日程' },
  cal_days: { English: 'SMTWTFS', Turkish: 'P P S Ç P C C', Korean: '일월화수목금토', Chinese: '日一二三四五六' },
  // Weather
  weather_city: { English: 'Istanbul', Turkish: 'İstanbul', Korean: '서울', Chinese: '北京' },
  weather_desc: { English: 'Sunny', Turkish: 'Güneşli', Korean: '맑음', Chinese: '晴朗' },
  // General App UI
  app_edit: { English: 'Edit', Turkish: 'Düzenle', Korean: '편집', Chinese: '编辑' },
  app_search: { English: 'Search', Turkish: 'Ara', Korean: '검색', Chinese: '搜索' },
  app_back: { English: 'Back', Turkish: 'Geri', Korean: '뒤로', Chinese: '返回' },
  app_done: { English: 'Done', Turkish: 'Bitti', Korean: '완료', Chinese: '完成' },
  app_save: { English: 'Save', Turkish: 'Kaydet', Korean: '저장', Chinese: '保存' },
  app_cancel: { English: 'Cancel', Turkish: 'İptal', Korean: '취소', Chinese: '取消' },
  // Safari
  safari_search: { English: 'Search or enter website', Turkish: 'Ara veya web sitesi gir', Korean: '검색 또는 웹사이트 입력', Chinese: '搜索或输入网站名称' },
  safari_favorites: { English: 'Favorites', Turkish: 'Favoriler', Korean: '즐겨찾기', Chinese: '收藏夹' },
  // Files
  files_documents: { English: 'Documents', Turkish: 'Belgeler', Korean: '문서', Chinese: '文档' },
  files_photos: { English: 'Photos', Turkish: 'Fotoğraflar', Korean: '사진', Chinese: '图片' },
  files_videos: { English: 'Videos', Turkish: 'Videolar', Korean: '동영상', Chinese: '视频' },
  files_downloads: { English: 'Downloads', Turkish: 'İndirilenler', Korean: '다운로드', Chinese: '下载' },
  files_active: { English: 'Active Downloads', Turkish: 'Aktif İndirmeler', Korean: '진행 중인 다운로드', Chinese: '正在下载' },
  files_ready: { English: 'Ready to Open', Turkish: 'Açmaya Hazır', Korean: '열기 준비 완료', Chinese: '准备就绪' },
  files_items: { English: 'items', Turkish: 'öge', Korean: '개 항목', Chinese: '个项目' },
  // Phone
  phone_favs: { English: 'Favorites', Turkish: 'Favoriler', Korean: '즐겨찾기', Chinese: '收藏' },
  phone_recents: { English: 'Recents', Turkish: 'Son Aramalar', Korean: '최근 통화', Chinese: '最近通话' },
  phone_contacts: { English: 'Contacts', Turkish: 'Kişiler', Korean: '연락처', Chinese: '联系人' },
  phone_keypad: { English: 'Keypad', Turkish: 'Klavye', Korean: '키패드', Chinese: '拨号盘' },
  // Clock
  clock_world: { English: 'World Clock', Turkish: 'Dünya Saati', Korean: '세계 시계', Chinese: '世界时钟' },
  clock_alarm: { English: 'Alarm', Turkish: 'Alarm', Korean: '알람', Chinese: '闹钟' },
  clock_stopwatch: { English: 'Stopwatch', Turkish: 'Kronometre', Korean: '스톱워치', Chinese: '秒表' },
  clock_timer: { English: 'Timer', Turkish: 'Zamanlayıcı', Korean: '타이머', Chinese: '计时器' },
  // Music
  music_library: { English: 'Library', Turkish: 'Kitaplık', Korean: '보관함', Chinese: '音乐库' },
  music_playing: { English: 'Now Playing', Turkish: 'Şimdi Çalıyor', Korean: '재생 중', Chinese: '正在播放' },
  // Play Store
  store_install: { English: 'Install', Turkish: 'Yükle', Korean: '설치', Chinese: '安装' },
  store_open: { English: 'Open', Turkish: 'Aç', Korean: '열기', Chinese: '打开' },
  store_installed: { English: 'Installed', Turkish: 'Yüklendi', Korean: '설치됨', Chinese: '已安装' },
};

export const translate = (id: string, language: LanguageType, defaultText: string) => {
  const trans = UI_TRANSLATIONS[id];
  if (!trans) return defaultText;
  return trans[language] || trans['English'] || defaultText;
};

export interface AppInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  component: string;
  category?: string;
  isFolder?: boolean;
  apps?: AppInfo[];
  sections?: {
    title: { English: string; Turkish: string; Korean: string; Chinese: string };
    apps: AppInfo[];
  }[];
}

export const APPS: AppInfo[] = [
  { id: 'calendar', name: 'Calendar', icon: 'Calendar', color: 'bg-white text-red-500', component: 'CalendarApp' },
  { id: 'weather', name: 'Weather', icon: 'CloudSun', color: 'bg-gradient-to-b from-[#3DA5FF] to-[#2B56FF] text-white', component: 'WeatherApp' },
  { id: 'photos', name: 'Gallery', icon: 'Image', color: 'bg-white text-blue-500', component: 'PhotosApp' },
  { id: 'appstore', name: 'App Store', icon: 'ShoppingBag', color: 'bg-blue-600 text-white', component: 'AppStoreApp' },
  { id: 'settings', name: 'Settings', icon: 'Settings', color: 'bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 text-zinc-900', component: 'SettingsApp' },
  { id: 'clock', name: 'Clock', icon: 'Clock', color: 'bg-white text-zinc-900', component: 'ClockApp' },
  { id: 'calculator', name: 'Calculator', icon: 'Calculator', color: 'bg-gradient-to-br from-white to-zinc-100 text-zinc-900', component: 'CalculatorApp' },
  { id: 'maps', name: 'Maps', icon: 'MapPin', color: 'bg-white text-green-500', component: 'MapsApp' },
  { id: 'notes', name: 'Notes', icon: 'FileText', color: 'bg-gradient-to-br from-[#f8d84b] to-[#f5c62d] text-zinc-900', component: 'NotesApp' },
  { id: 'themes', name: 'Themes', icon: 'Themes', color: 'bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white', component: 'ThemesApp' },
  { id: 'mail', name: 'Mail', icon: 'Mail', color: 'bg-gradient-to-b from-[#2EB5FF] to-[#007AFF] text-white', component: 'MailApp' },
  { id: 'youtube', name: 'YouTube', icon: 'Youtube', color: 'bg-white text-red-600', component: 'YoutubeApp' },
  { id: 'tiktok', name: 'TikTok', icon: 'Music', color: 'bg-black text-white', component: 'TikTokApp' },
  { id: 'playstore', name: 'Play Store', icon: 'PlayStore', color: 'bg-white text-blue-500', component: 'PlayStoreApp' },
];

export const STORE_APPS: AppInfo[] = [
  { id: 'instagram', name: 'Instagram', icon: 'Camera', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white', component: 'InstagramApp', category: 'Social' },
  { id: 'snapchat', name: 'Snapchat', icon: 'MessageCircle', color: 'bg-yellow-300 text-black', component: 'SnapchatApp', category: 'Social' },
  { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle', color: 'bg-green-500 text-white', component: 'WhatsAppApp', category: 'Communication' },
  { id: 'webpol', name: 'WebPol', icon: 'Globe', color: 'bg-blue-500 text-white', component: 'WebPolApp', category: 'Social' },
  { id: 'minecraft', name: 'Minecraft', icon: 'Globe', color: 'bg-green-800 text-white', component: 'MinecraftApp', category: 'Games' },
  { id: 'roblox', name: 'Roblox', icon: 'Image', color: 'bg-zinc-800 text-white', component: 'RobloxApp', category: 'Games' },
  { id: 'spotify', name: 'Spotify', icon: 'Music', color: 'bg-green-500 text-white', component: 'SpotifyApp', category: 'Music' },
  { id: 'netflix', name: 'Netflix', icon: 'Video', color: 'bg-zinc-900 text-red-600', component: 'NetflixApp', category: 'Entertainment' },
  { id: 'twitter', name: 'X', icon: 'Twitter', color: 'bg-black text-white', component: 'TwitterApp', category: 'Social' },
  { id: 'discord', name: 'Discord', icon: 'MessageCircle', color: 'bg-indigo-500 text-white', component: 'DiscordApp', category: 'Social' },
  { id: 'linkedin', name: 'LinkedIn', icon: 'Globe', color: 'bg-blue-700 text-white', component: 'LinkedInApp', category: 'Social' },
  { id: 'zoom', name: 'Zoom', icon: 'Video', color: 'bg-blue-500 text-white', component: 'ZoomApp', category: 'Communication' },
  { id: 'twitch', name: 'Twitch', icon: 'Play', color: 'bg-purple-600 text-white', component: 'TwitchApp', category: 'Entertainment' },
];

export const DOCK_APPS: AppInfo[] = [
  { id: 'phone', name: 'Phone', icon: 'Phone', color: 'bg-green-500 text-white', component: 'PhoneApp' },
  { id: 'safari', name: 'Safari', icon: 'Compass', color: 'bg-white text-blue-500', component: 'SafariApp' },
  { id: 'messages', name: 'Messages', icon: 'MessageCircle', color: 'bg-gradient-to-br from-[#53d769] to-[#43c457] text-white', component: 'MessagesApp' },
  { id: 'files_dock', name: 'Files', icon: 'Folder', color: 'bg-gradient-to-br from-[#ffcc33] to-[#ff9900] text-zinc-900', component: 'FilesApp' },
];

export const PAGE_2_APPS: AppInfo[] = [
  { id: 'google_search', name: 'Google', icon: 'Search', color: 'bg-white text-zinc-900', component: 'DefaultApp' },
  { id: 'google_drive', name: 'Drive', icon: 'HardDrive', color: 'bg-white text-emerald-600', component: 'DefaultApp' },
  { id: 'google_meet', name: 'Meet', icon: 'Video', color: 'bg-white text-blue-500', component: 'DefaultApp' },
  { id: 'google_files', name: 'Files', icon: 'Folder', color: 'bg-white text-[#ff9900]', component: 'DefaultApp' },
  { id: 'google_one', name: 'Google One', icon: 'Shield', color: 'bg-white text-red-500', component: 'DefaultApp' },
  { id: 'google_home', name: 'Home', icon: 'Home', color: 'bg-white text-amber-500', component: 'DefaultApp' },
  { id: 'google_tv', name: 'Google TV', icon: 'Tv', color: 'bg-white text-indigo-500', component: 'DefaultApp' },
  { id: 'google_chrome', name: 'Chrome', icon: 'Chrome', color: 'bg-white text-blue-600', component: 'DefaultApp' },
  { id: 'device_security', name: 'Security Hub', icon: 'Shield', color: 'bg-gradient-to-br from-slate-900 to-slate-950 text-emerald-400', component: 'SecurityApp' },
];

export const PAGE_3_APPS: AppInfo[] = [];

export const PAGE_4_APPS: AppInfo[] = [];
