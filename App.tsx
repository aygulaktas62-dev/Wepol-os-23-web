import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Reorder } from "motion/react";
import {
  Wifi,
  Battery,
  Signal,
  Calendar,
  CloudSun,
  Image,
  ShoppingBag,
  Settings,
  Clock,
  Calculator,
  MapPin,
  FileText,
  Mail,
  Phone,
  Compass,
  MessageCircle,
  Music,
  Camera,
  Flashlight,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Plane,
  Volume2,
  Sun,
  Shield,
  Fingerprint,
  Check,
  Palette,
  Smartphone,
  Layers,
  Layout,
  Accessibility,
  Circle,
  RotateCcw,
  Terminal,
  Zap,
  AlertTriangle,
  Youtube,
  Play,
  Download,
  CheckCircle2,
  Globe,
  Network,
  Bluetooth,
  Moon,
  Lock,
  ShieldAlert,
  Power,
  Disc,
  Eye,
  Edit2,
  Info,
  Share2,
  Trash2,
  Bot,
  Video,
  Twitter,
  X,
  Folder,
  File,
  Search,
  UserPlus,
  Menu,
  Grid,
  Users,
  MessageSquare,
  User,
  Plus,
  Minus,
  Heart,
  Bookmark,
  ChevronDown,
  ChevronUp,
  History,
  Send,
  Grid3X3,
  Repeat,
  Home,
  Bell,
  BellOff,
  Scissors,
  ChevronRight,
  RefreshCw,
  Radio,
  GraduationCap,
  QrCode,
  ShoppingCart,
  Skull,
  Gamepad2,
  FolderOpen,
} from "lucide-react";
import {
  APPS,
  DOCK_APPS,
  STORE_APPS,
  PAGE_2_APPS,
  PAGE_3_APPS,
  PAGE_4_APPS,
  AppInfo,
  UI_TRANSLATIONS,
  translate as rawGt,
  LanguageType,
} from "./constants";

let currentLanguage: LanguageType = "English";

const gt = (id: string, dummyLang: any, defaultText: string) => {
  return rawGt(id, currentLanguage, defaultText);
};

const ICON_MAP: Record<string, any> = {
  Calendar,
  CloudSun,
  Image,
  ShoppingBag,
  Settings,
  Clock,
  Calculator,
  MapPin,
  FileText,
  Mail,
  Phone,
  Compass,
  MessageCircle,
  Music,
  Camera,
  Flashlight,
  Shield,
  Fingerprint,
  Check,
  Palette,
  Accessibility,
  Circle,
  RotateCcw,
  Terminal,
  Zap,
  AlertTriangle,
  Youtube,
  Play,
  Download,
  CheckCircle2,
  Globe,
  Video,
  Twitter,
  Folder,
  Search,
  Radio,
  GraduationCap,
  QrCode,
  ShoppingCart,
  Skull,
  Gamepad2,
  FolderOpen,
};

const SettingsIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
      {/* Gear Teeth */}
      <circle
        cx="50"
        cy="50"
        r="41"
        fill="none"
        stroke="#f1f5f9"
        strokeWidth="12"
        strokeDasharray="6.4 4.1"
      />
      {/* Outer Metallic Ring */}
      <circle
        cx="50"
        cy="50"
        r="36"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      {/* Deep Inner Dark Well */}
      <circle
        cx="50"
        cy="50"
        r="32"
        fill="#1e293b"
        stroke="#334155"
        strokeWidth="2"
      />
      {/* Center 3-Spoke Divider */}
      <g stroke="#f8fafc" strokeWidth="7" strokeLinecap="round">
        <line x1="50" y1="50" x2="50" y2="24" />
        <line x1="50" y1="50" x2="72.5" y2="63" />
        <line x1="50" y1="50" x2="27.5" y2="63" />
      </g>
      {/* Center Dot Details */}
      <circle
        cx="50"
        cy="50"
        r="4.5"
        fill="#1e293b"
        stroke="#f8fafc"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="1" fill="#f8fafc" />
    </svg>
  </div>
);

const GoogleHomeIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center overflow-visible"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="googleHomeRainbow" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#EA4335" />   {/* Red peak */}
          <stop offset="30%" stopColor="#FBBC05" />  {/* Yellow left */}
          <stop offset="65%" stopColor="#34A853" />  {/* Green bottom */}
          <stop offset="100%" stopColor="#4285F4" /> {/* Blue right */}
        </linearGradient>
      </defs>
      <path
        d="M 50,15 L 18,41 L 18,74 L 82,74 L 82,41 Z"
        fill="none"
        stroke="url(#googleHomeRainbow)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const FilesIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      {/* Folder Back */}
      <path
        d="M10,25 Q10,18 18,18 L40,18 L50,28 L82,28 Q90,28 90,36 L90,82 Q90,90 82,90 L18,90 Q10,90 10,82 Z"
        fill="#f59e0b"
      />
      {/* Folder Tab/Front Shadow */}
      <path
        d="M10,42 Q10,35 18,35 L82,35 Q90,35 90,42 L90,82 Q90,90 82,90 L18,90 Q10,90 10,82 Z"
        fill="#fbbf24"
      />
      {/* White Paper Sheet peeking out */}
      <rect
        x="20"
        y="25"
        width="60"
        height="20"
        rx="2"
        fill="white"
        opacity="0.6"
      />
      {/* Gloss Effect */}
      <path d="M15,40 L85,40 L85,45 L15,45 Z" fill="white" opacity="0.1" />
    </svg>
  </div>
);

const CalculatorIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Plus quadrant (top left) */}
      <g stroke="#334155" strokeWidth="6" strokeLinecap="round">
        <line x1="30" y1="22" x2="30" y2="42" />
        <line x1="20" y1="32" x2="40" y2="32" />
      </g>

      {/* Minus quadrant (top right) */}
      <g stroke="#334155" strokeWidth="6" strokeLinecap="round">
        <line x1="60" y1="32" x2="80" y2="32" />
      </g>

      {/* Multiply quadrant (bottom left) */}
      <g stroke="#334155" strokeWidth="6" strokeLinecap="round">
        <line x1="22" y1="62" x2="38" y2="78" />
        <line x1="38" y1="62" x2="22" y2="78" />
      </g>

      {/* Equals quadrant (bottom right) with orange accent */}
      <rect
        x="56"
        y="56"
        width="32"
        height="32"
        rx="10"
        fill="#f97316"
        className="drop-shadow-sm"
      />
      <g stroke="white" strokeWidth="5" strokeLinecap="round">
        <line x1="65" y1="67" x2="79" y2="67" />
        <line x1="65" y1="77" x2="79" y2="77" />
      </g>
    </svg>
  </div>
);

const PhotosIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center scale-110"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
          <feOffset dx="0.5" dy="0.5" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(50, 50)" filter="url(#shadow)">
        {[
          { color: "#5AC8FA", angle: 0 },
          { color: "#007AFF", angle: 45 },
          { color: "#5856D6", angle: 90 },
          { color: "#AF52DE", angle: 135 },
          { color: "#FF2D55", angle: 180 },
          { color: "#FF3B30", angle: 225 },
          { color: "#FF9500", angle: 270 },
          { color: "#FFCC00", angle: 315 },
        ].map((petal, i) => (
          <path
            key={i}
            d="M0,0 C12,-26 36,-26 36,-10 C36,5 18,15 0,0"
            fill={petal.color}
            transform={`rotate(${petal.angle})`}
            style={{ mixBlendMode: "multiply" as any }}
            className="opacity-90"
          />
        ))}
      </g>
    </svg>
  </div>
);

const WeatherIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="100%" stopColor="#FF9500" />
        </linearGradient>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Sun */}
      <circle cx="65" cy="38" r="24" fill="url(#sunGradient)">
        <animate
          attributeName="r"
          values="24;25;24"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Cloud */}
      <path
        d="M25,65 Q25,45 45,45 Q45,30 65,30 Q85,30 85,50 Q100,50 100,65 Q100,80 85,80 L40,80 Q25,80 25,65"
        fill="url(#cloudGradient)"
        className="drop-shadow-sm"
        transform="scale(0.85) translate(5, 10)"
      />
    </svg>
  </div>
);

const ClockIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Black Face */}
      <circle cx="50" cy="50" r="45" fill="#18181b" />

      {/* Ticks */}
      <g stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        {[...Array(12)].map((_, i) => {
          const angle = i * 30 * (Math.PI / 180);
          const x1 = 50 + 36 * Math.sin(angle);
          const y1 = 50 - 36 * Math.cos(angle);
          const x2 = 50 + 41 * Math.sin(angle);
          const y2 = 50 - 41 * Math.cos(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* Primary Numbers */}
      <g
        fill="white"
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        <text x="50" y="24">
          12
        </text>
        <text x="78" y="54">
          3
        </text>
        <text x="50" y="84">
          6
        </text>
        <text x="22" y="54">
          9
        </text>
      </g>

      {/* Hands */}
      <g stroke="white" strokeLinecap="round">
        {/* Hour hand - pointing at ~10 */}
        <line x1="50" y1="50" x2="35" y2="38" strokeWidth="3.5" />
        {/* Minute hand - pointing at ~2 */}
        <line x1="50" y1="50" x2="70" y2="38" strokeWidth="2.5" />
      </g>

      {/* Center cap */}
      <circle cx="50" cy="50" r="2" fill="white" />
    </svg>
  </div>
);

const CalendarIcon = ({ size = 32 }: { size?: number }) => {
  const now = new Date();
  const dayName = now
    .toLocaleDateString("default", { weekday: "short" })
    .toUpperCase();
  const dateNum = now.getDate();

  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex flex-col items-center justify-center pt-1"
    >
      <span
        style={{ fontSize: size * 0.22 }}
        className="text-[#007AFF] font-bold leading-none tracking-tight"
      >
        {dayName}
      </span>
      <span
        style={{ fontSize: size * 0.55 }}
        className="text-[#1c1c1e] font-medium leading-none -mt-0.5"
      >
        {dateNum}
      </span>
    </div>
  );
};

const SearchIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center overflow-hidden"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="searchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#63E670" />
          <stop offset="100%" stopColor="#43D656" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#searchGradient)" />
      <g transform="translate(50, 50) rotate(-15)">
        <circle
          cx="-5"
          cy="-5"
          r="18"
          fill="none"
          stroke="white"
          strokeWidth="8"
        />
        <line
          x1="8"
          y1="8"
          x2="25"
          y2="25"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </div>
);

const PhoneIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center overflow-hidden"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#63E670" />
          <stop offset="100%" stopColor="#43D656" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#phoneGradient)" />
      <path
        d="M25,30 C25,25 30,22 35,25 L42,28 C47,31 47,36 42,39 L35,46 C42,58 52,68 64,75 L71,68 C74,63 79,63 82,68 L85,73 C88,78 85,83 80,83 C55,83 25,53 25,30 Z"
        fill="white"
        transform="rotate(-15, 55, 55)"
      />
    </svg>
  </div>
);

const PlayStoreIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg
      viewBox="0 0 512 512"
      className="w-full h-full drop-shadow-sm transform scale-[0.55]"
    >
      <path
        d="M46.7 10c-3.1 3.5-5 8.8-5 15.6v460.6c0 6.9 1.9 12.1 5 15.6l2.3 2.1L274 278.2V233.8L48.9 7.9l-2.2 2.1z"
        fill="#4285F4"
      />
      <path
        d="M349.1 353.4l-75.1-75.1V233.8l75.1-75.1 2.3 1.3 89.1 50.6c25.4 14.4 25.4 38.1 0 52.6l-89.1 50.8-2.3-0.6z"
        fill="#FBBC04"
      />
      <path
        d="M351.4 352.1l-77.4-77.4L46.7 502.8c8.3 8.8 21.9 9.8 37.1 1.2l267.6-151.9z"
        fill="#EA4335"
      />
      <path
        d="M351.4 159.9L83.8 8c-15.2-8.6-28.1 7.6-37.1 1.2l227.3 227.3 77.4-76.6z"
        fill="#34A853"
      />
    </svg>
  </div>
);

const ThemesIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="themesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5e95" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ffb950" />
        </linearGradient>
      </defs>
      {/* Background - fills the viewBox, will be clipped by parent rounding */}
      <rect width="100" height="100" fill="url(#themesGradient)" />

      {/* Paint Brush - Enlarged for 'full icon' look */}
      <g transform="translate(18, 12) scale(0.65)">
        {/* Brush Head - Metal/Wood part */}
        <path
          d="M10,20 Q10,12 20,12 L80,12 Q90,12 90,20 L90,60 Q90,68 80,68 L20,68 Q10,68 10,60 Z"
          fill="white"
          className="drop-shadow-md"
        />
        {/* Paint on Brush */}
        <path
          d="M10,20 Q10,12 20,12 L80,12 Q90,12 90,20 L90,45 L10,45 Z"
          fill="#ffb1d1"
        />
        {/* Handle */}
        <path
          d="M40,68 L40,110 Q40,125 50,125 Q60,125 60,110 L60,68"
          fill="white"
        />
        {/* Hole in handle */}
        <circle cx="50" cy="115" r="5" fill="#a855f7" />
      </g>
    </svg>
  </div>
);

const BrowserIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full transform scale-[0.7]">
      <defs>
        <linearGradient id="browserBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      {/* Back half of ring (lower opacity) */}
      <path
        d="M10,50 A40,12 0 0 1 90,50"
        fill="none"
        stroke="white"
        strokeWidth="7"
        strokeOpacity="0.4"
        transform="rotate(-25 50 50)"
      />
      {/* The Planet */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="url(#browserBlue)"
        className="drop-shadow-lg"
      />
      {/* Front half of ring (higher opacity) */}
      <path
        d="M10,50 A40,12 0 0 0 90,50"
        fill="none"
        stroke="white"
        strokeWidth="7"
        strokeOpacity="0.8"
        strokeLinecap="round"
        transform="rotate(-25 50 50)"
      />
    </svg>
  </div>
);

const MagiskIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full transform scale-[0.85]">
      <defs>
        <linearGradient id="magiskBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b0ff" />
          <stop offset="100%" stopColor="#0077ff" />
        </linearGradient>
      </defs>
      {/* Background Bubble */}
      <path
        d="M10,25 Q10,10 25,10 L75,10 Q90,10 90,25 L90,65 Q90,80 75,80 L58,80 L50,92 L42,80 L25,80 Q10,80 10,65 Z"
        fill="url(#magiskBlue)"
        className="drop-shadow-lg"
      />
      {/* Question Mark */}
      <path
        d="M50,55 C46,55 45,53 45,51 L45,48 C45,45 46,44 48,43 C52,41 55,38 55,34 C55,31 53,28 50,28 C47,28 45,31 45,34 L40,34 C40,28 44,23 50,23 C56,23 60,28 60,34 C60,39 57,43 52,46 C50,47 50,48 50,49 L50,51 C50,53 49,55 46,55 Z M50,68 C47,68 45,66 45,63 C45,60 47,58 50,58 C53,58 55,60 55,63 C55,66 53,68 50,68 Z"
        fill="white"
        transform="translate(0, 2)"
      />
    </svg>
  </div>
);

const YouTubeIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center overflow-hidden bg-white"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Red Rounded Rectangle */}
      <path
        d="M95,30 C95,20 90,15 80,15 L20,15 C10,15 5,20 5,30 L5,70 C5,80 10,85 20,85 L80,85 C90,85 95,80 95,70 L95,30 Z"
        fill="#FF0000"
      />
      {/* White Triangle (Play button) */}
      <path d="M40,35 L40,65 L68,50 Z" fill="white" />
    </svg>
  </div>
);

const TikTokIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="relative flex items-center justify-center overflow-hidden"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" fill="#000000" />
      {/* TikTok Musical Note Shape (Custom paths) */}
      <g transform="translate(15, 10) scale(0.7)">
        {/* The Cyan/Red Glitch offsets */}
        <path
          d="M80,20 C70,20 60,25 55,30 L55,80 C55,90 45,100 35,100 C25,100 15,90 15,80 C15,70 25,60 35,60 L35,70 C30,70 25,75 25,80 C25,85 30,90 35,90 C40,90 45,85 45,80 L45,10 L55,10 L55,40 C60,35 70,30 80,30 L80,20 Z"
          fill="#ff004f"
          transform="translate(2, 2)"
        />
        <path
          d="M80,20 C70,20 60,25 55,30 L55,80 C55,90 45,100 35,100 C25,100 15,90 15,80 C15,70 25,60 35,60 L35,70 C30,70 25,75 25,80 C25,85 30,90 35,90 C40,90 45,85 45,80 L45,10 L55,10 L55,40 C60,35 70,30 80,30 L80,20 Z"
          fill="#00f2ea"
          transform="translate(-2, -2)"
        />
        <path
          d="M80,20 C70,20 60,25 55,30 L55,80 C55,90 45,100 35,100 C25,100 15,90 15,80 C15,70 25,60 35,60 L35,70 C30,70 25,75 25,80 C25,85 30,90 35,90 C40,90 45,85 45,80 L45,10 L55,10 L55,40 C60,35 70,30 80,30 L80,20 Z"
          fill="white"
        />
      </g>
    </svg>
  </div>
);

const AppIcon = ({
  app,
  size = 32,
  isSafeMode = false,
}: {
  app: AppInfo;
  size?: number;
  isSafeMode?: boolean;
}) => {
  if (app.isFolder && app.apps) {
    return (
      <div className="grid grid-cols-2 gap-1 p-1 h-full w-full bg-zinc-200/50 dark:bg-zinc-800/40 rounded-2xl items-center justify-center">
        {app.apps.slice(0, 4).map((nestedApp) => (
          <div key={nestedApp.id} className="flex items-center justify-center bg-white dark:bg-zinc-900 rounded-[6px] overflow-hidden aspect-square h-full w-full p-0.5 shadow-sm border border-black/[0.04] dark:border-white/5">
            <AppIcon app={nestedApp} size={size * 0.35} />
          </div>
        ))}
      </div>
    );
  }

  if (isSafeMode) {
    return <Zap size={16} className="text-zinc-700" />;
  }

  if (app.id === "google_search") {
    return (
      <svg viewBox="0 0 24 24" style={{ width: size, height: size }} className="overflow-visible" id="google-search-icon">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
    );
  }

  if (app.id === "google_files") {
    return (
      <svg viewBox="0 0 192 192" style={{ width: size, height: size }} className="overflow-visible" id="google-files-icon">
        <path d="M154.5 33h-117c-13.8 0-25 11.2-25 25v101c0 13.8 11.2 25 25 25h117c13.8 0 25-11.2 25-25V58c0-13.8-11.2-25-25-25z" fill="#4285F4"/>
        <path d="M12.5 101l80.5 80.5c5.1.7 10.3 1 15.6 1 13.8 0 25-11.2 25-25V101H12.5z" fill="#34A853" />
        <path d="M154.5 33h-85.9l-22.3 33H12.5v35h121.1V33h21z" fill="#FBBC05" />
        <path d="M12.5 101h121.1V58c0-13.8-11.2-25-25-25h-54.8v34.4l-19 28.1v5.5z" fill="#EA4335" />
      </svg>
    );
  }

  if (app.id === "google_drive") {
    return (
      <svg role="img" viewBox="0 0 87.3 78" style={{ width: size, height: size }} className="overflow-visible" id="google-drive-icon">
        <defs>
          <linearGradient id="driveGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2da2ef" />
            <stop offset="100%" stopColor="#34a853" />
          </linearGradient>
          <linearGradient id="driveBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8f94ff" />
            <stop offset="100%" stopColor="#4285F4" />
          </linearGradient>
          <linearGradient id="driveYellow" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffea3a" />
            <stop offset="100%" stopColor="#ff9900" />
          </linearGradient>
        </defs>
        <g style={{ filter: "drop-shadow(0px 2.5px 3.5px rgba(0, 40, 100, 0.22))" }}>
          {/* Blue bottom-left corner segment */}
          <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="url(#driveBlue)" />
          
          {/* Green top-left corner segment */}
          <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="url(#driveGreen)" />
          
          {/* Yellow bottom-right corner segment (formally red, colored yellow to merge seamlessly with yellow band) */}
          <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="url(#driveYellow)" />
          
          {/* Green top slanted segment */}
          <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="url(#driveGreen)" />
          
          {/* Blue bottom horizontal segment */}
          <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="url(#driveBlue)" />
          
          {/* Yellow right slanted segment */}
          <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="url(#driveYellow)" />
        </g>
      </svg>
    );
  }

  if (app.id === "google_meet") {
    return (
      <svg
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="google-meet-icon"
      >
        <defs>
          <linearGradient id="meetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="35%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <radialGradient id="pinkGlow" cx="65%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          {/* Main camera body with leaf-shaped top-left corner */}
          <path
            fill="url(#meetGrad)"
            d="M 11,3 h 3.5 c 2.2,0 4,1.8 4,4 v 6 c 0,2.2 -1.8,4 -4,4 h -6 c -2.2,0 -4,-1.8 -4,-4 v -3 c 0,-3.9 3,-7 7,-7 z"
          />
          {/* Camera lens cone on the right */}
          <path
            fill="url(#meetGrad)"
            d="M 18,9.5 L 21.2,7.4 C 21.8,7 22.5,7.4 22.5,8.1 V 11.9 C 22.5,12.6 21.8,13 21.2,12.6 L 18,10.5 Z"
          />
          {/* Soft pinkish/red glowing reflection accent in the glass */}
          <circle cx="14" cy="10" r="5" fill="url(#pinkGlow)" style={{ mixBlendMode: "screen" as any }} />
          {/* White camera lens dot in lower left of body */}
          <circle cx="8" cy="12.5" r="1.5" fill="#ffffff" />
        </g>
      </svg>
    );
  }

  if (app.id === "google_one") {
    return (
      <svg
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="google-one-icon"
      >
        {/* Yellow Diagonal (Flag) */}
        <line
          x1="6.5"
          y1="9.5"
          x2="11.9"
          y2="4.1"
          stroke="#FBBC05"
          strokeWidth="4.4"
          strokeLinecap="round"
        />
        {/* Red Segment (Top rounded cap) */}
        <path
          fill="#EA4335"
          d="M 11.9 6.2 V 3.6 a 2.2 2.2 0 0 1 4.4 0 v 7.0 L 11.9 6.2 z"
        />
        {/* Blue Segment (Middle) */}
        <path
          fill="#4285F4"
          d="M 11.9 6.2 L 16.3 10.6 v 6.8 L 11.9 13.0 z"
        />
        {/* Green Segment (Bottom rounded cap) */}
        <path
          fill="#34A853"
          d="M 11.9 13.0 L 16.3 17.4 v 0.8 a 2.2 2.2 0 0 1 -4.4 0 z"
        />
      </svg>
    );
  }

  if (app.id === "google_chrome") {
    return (
      <svg
        viewBox="0 0 512 512"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="google-chrome-icon"
      >
        <defs>
          <linearGradient id="chrome-grad-1" gradientUnits="userSpaceOnUse" x1="283.2852" y1="18.9008" x2="62.8264" y2="400.7473" gradientTransform="matrix(1 0 0 -1 0 514)">
            <stop offset="0" stopColor="#1E8E3E"/>
            <stop offset="1" stopColor="#34A853"/>
          </linearGradient>
          <linearGradient id="chrome-grad-2" gradientUnits="userSpaceOnUse" x1="218.5901" y1="2.3333" x2="439.0491" y2="384.1796" gradientTransform="matrix(1 0 0 -1 0 514)">
            <stop offset="0" stopColor="#FCC934"/>
            <stop offset="1" stopColor="#FBBC04"/>
          </linearGradient>
          <linearGradient id="chrome-grad-3" gradientUnits="userSpaceOnUse" x1="35.2587" y1="353.0303" x2="476.177" y2="353.0303" gradientTransform="matrix(1 0 0 -1 0 514)">
            <stop offset="0" stopColor="#D93025"/>
            <stop offset="1" stopColor="#EA4335"/>
          </linearGradient>
        </defs>
        <path fill="#FFFFFF" d="M255.73,383.71c70.3,0,127.3-56.99,127.3-127.3s-56.99-127.3-127.3-127.3s-127.3,56.99-127.3,127.3S185.42,383.71,255.73,383.71z"/>
        <path fill="url(#chrome-grad-1)" d="M145.48,320.08L35.26,129.17c-22.35,38.7-34.12,82.6-34.12,127.29s11.76,88.59,34.11,127.29c22.35,38.7,54.49,70.83,93.2,93.17c38.71,22.34,82.61,34.09,127.3,34.08l110.22-190.92v-0.03c-11.16,19.36-27.23,35.44-46.58,46.62c-19.35,11.18-41.3,17.07-63.65,17.07s-44.3-5.88-63.65-17.07C172.72,355.52,156.65,339.44,145.48,320.08z"/>
        <path fill="url(#chrome-grad-2)" d="M365.96,320.08L255.74,510.99c44.69,0.01,88.59-11.75,127.29-34.1c38.7-22.34,70.84-54.48,93.18-93.18c22.34-38.7,34.1-82.61,34.09-127.3c-0.01-44.69-11.78-88.59-34.14-127.28H255.72l-0.03,0.02c22.35-0.01,44.31,5.86,63.66,17.03c19.36,11.17,35.43,27.24,46.61,46.59c11.18,19.35,17.06,41.31,17.06,63.66C383.03,278.77,377.14,300.72,365.96,320.08L365.96,320.08z"/>
        <path fill="#1A73E8" d="M255.73,357.21c55.66,0,100.78-45.12,100.78-100.78s-45.12-100.78-100.78-100.78s-100.78,45.12-100.78,100.78S200.07,357.21,255.73,357.21z"/>
        <path fill="url(#chrome-grad-3)" d="M255.73,129.14h220.45C453.84,90.43,421.7,58.29,383,35.95C344.3,13.6,300.4,1.84,255.71,1.84c-44.69,0-88.59,11.77-127.29,34.12c-38.7,22.35-70.83,54.5-93.16,93.2l110.22,190.92l0.03,0.02c-11.18-19.35-17.08-41.3-17.08-63.65s5.87-44.31,17.04-63.66c11.17-19.36,27.24-35.43,46.6-46.6C211.42,135.01,233.38,129.13,255.73,129.14z"/>
      </svg>
    );
  }

  if (app.id === "mail") {
    return (
      <svg
        viewBox="0 0 64 64"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="ios-mail-icon"
      >
        <defs>
          {/* Main soft shadow on the entire envelope */}
          <filter id="mailShadow" x="-20%" y="-15%" width="140%" height="130%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="2.5" floodColor="#003580" floodOpacity="0.28" />
          </filter>
          
          {/* Gradients for envelope facets to provide realistic lighting & 3D beveling */}
          <linearGradient id="envelopeBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EEF4FC" />
          </linearGradient>
          
          <linearGradient id="envelopeLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCFDFF" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#DCEDFE" stopOpacity="0.96" />
          </linearGradient>

          <linearGradient id="envelopeRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCFDFF" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#D5E8FA" stopOpacity="0.96" />
          </linearGradient>

          <linearGradient id="envelopeBottomGrad" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#F6FAFF" />
            <stop offset="100%" stopColor="#DFEDFC" />
          </linearGradient>

          <linearGradient id="envelopeFlapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F7FE" />
          </linearGradient>
        </defs>

        <g filter="url(#mailShadow)">
          {/* 1. Underlying rounded rectangle base plate with premium subtle border */}
          <rect x="7.5" y="15.5" width="49" height="33" rx="7" fill="url(#envelopeBaseGrad)" stroke="#A6CAFA" strokeWidth="1" />

          {/* 2. Side folds (left & right crisp triangles pointing inwards) */}
          <path d="M 8,16.5 L 28.5,32 L 8,47.5 Z" fill="url(#envelopeLeftGrad)" />
          <path d="M 56,16.5 L 35.5,32 L 56,47.5 Z" fill="url(#envelopeRightGrad)" />

          {/* 3. Bottom fold (triangle pointing upwards, elegantly overlapping side flaps) */}
          <path d="M 8,47.5 L 32,29.5 L 56,47.5 Z" fill="url(#envelopeBottomGrad)" stroke="#E4EFFC" strokeWidth="0.75" />

          {/* 4. Highly defined, crisp paper edge separation & high-contrast seam highlights/shadows */}
          {/* Perfectly aligned premium shadow lines along lower diagonal edges */}
          <path d="M 8,47 L 31.5,29.8" stroke="#8CAEE2" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
          <path d="M 56,47 L 32.5,29.8" stroke="#8CAEE2" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
          
          {/* Perfectly aligned shadow lines along upper diagonal edges */}
          <path d="M 8,17 L 27.5,31.5" stroke="#90B6E2" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
          <path d="M 56,17 L 36.5,31.5" stroke="#90B6E2" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

          {/* Bright white paper-edge highlights to make folds/lines poppingly crisp */}
          <path d="M 8.5,47.5 L 32,30.2 L 55.5,47.5" fill="none" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M 8,16.5 L 28,31.5" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
          <path d="M 56,16.5 L 36,31.5" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

          {/* 5. Top closing flap with premium physical tactile layering */}
          {/* Underlying gradient drop shade */}
          <path 
            d="M 8,16 L 30,31.5 C 31.2,32.3 32.8,32.3 34,31.5 L 56,16 Z" 
            fill="#011F4B" 
            opacity="0.1" 
            transform="translate(0, 1.75)"
          />
          {/* Elegant outer vector shade line boundary */}
          <path 
            d="M 8,16 L 30,31.5 C 31.2,32.3 32.8,32.3 34,31.5 L 56,16" 
            fill="none" 
            stroke="#759ED5" 
            strokeWidth="1.5" 
            opacity="0.32" 
            transform="translate(0, 0.75)"
          />
          {/* Main Top Flap shape plate */}
          <path 
            d="M 8,16 L 30,31.5 C 31.2,32.3 32.8,32.3 34,31.5 L 56,16 Z" 
            fill="url(#envelopeFlapGrad)" 
            stroke="#9AC2F3" 
            strokeWidth="1" 
          />
          
          {/* Highlight line directly defining the edge transition on the flap tip */}
          <path d="M 9.5,16.5 L 29.5,30.5 C 31,31.5 33,31.5 34.5,30.5 L 54.5,16.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.95" />
          
          {/* Bright premium highlight line along top envelope hinge boundary */}
          <path d="M 9,16 L 55,16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.95" />
        </g>
      </svg>
    );
  }

  if (app.id === "notes") {
    return (
      <svg
        viewBox="0 0 64 64"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="ios-notes-icon"
      >
        <defs>
          <filter id="pencilShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="-1.2" dy="2.8" stdDeviation="1.5" floodColor="#8B4F00" floodOpacity="0.45" />
          </filter>
          
          <linearGradient id="pencilTipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F4F2EB" />
            <stop offset="70%" stopColor="#DCD9D0" />
            <stop offset="100%" stopColor="#E6E3DB" />
          </linearGradient>

          <linearGradient id="metalCollarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CEC0B0" />
            <stop offset="25%" stopColor="#F5EFE6" />
            <stop offset="50%" stopColor="#BBA996" />
            <stop offset="75%" stopColor="#E6DDD2" />
            <stop offset="100%" stopColor="#9E8D7B" />
          </linearGradient>

          <linearGradient id="pointerBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FAF9F6" />
            <stop offset="70%" stopColor="#EBE9E2" />
            <stop offset="100%" stopColor="#FAF9F6" />
          </linearGradient>
        </defs>

        {/* 1. Precise, beautifully styled amber/gold notebook horizontal rules */}
        <g opacity="0.46">
          <line x1="0" y1="15" x2="64" y2="15" stroke="#D37900" strokeWidth="1.2" />
          <line x1="0" y1="27" x2="64" y2="27" stroke="#D37900" strokeWidth="1.2" />
          <line x1="0" y1="39" x2="64" y2="39" stroke="#D37900" strokeWidth="1.2" />
          <line x1="0" y1="51" x2="64" y2="51" stroke="#D37900" strokeWidth="1.2" />
        </g>

        {/* 2. Realistic 3D Pencil, positioned diagonally drawing on the lines */}
        <g transform="translate(18, 46) rotate(-41)">
          {/* Main Stylus Group with soft realistic shadow filter */}
          <g filter="url(#pencilShadow)">
            {/* Cone Tip */}
            <path d="M 1.5,-0.6 L 7,-2.4 L 7,2.4 L 1.5,0.6 Z" fill="url(#pencilTipGrad)" />
            
            {/* Graphite tip point */}
            <path d="M 0,0 L 1.5,-0.6 L 1.5,0.6 Z" fill="#5C4736" />
            
            {/* Metallic collar band */}
            <rect x="7" y="-2.4" width="2.5" height="4.8" fill="url(#metalCollarGrad)" />
            
            {/* White cylinder body */}
            <rect x="9.5" y="-2.5" width="42.5" height="5.0" fill="url(#pointerBodyGrad)" />
            
            {/* Rounded cap */}
            <path d="M 52,-2.5 L 53.5,-2.0 C 54.5,-1.5 55,-0.5 55,0 C 55,0.5 54.5,1.5 53.5,2.0 L 52,2.5 Z" fill="url(#pointerBodyGrad)" />
          </g>
        </g>
      </svg>
    );
  }

  if (app.id === "google_home") {
    return <GoogleHomeIcon size={size} />;
  }

  if (app.id === "calendar") {
    return <CalendarIcon size={size} />;
  }

  if (app.id === "phone" || app.icon === "Phone") {
    return <PhoneIcon size={size} />;
  }

  if (app.id === "youtube") {
    return <YouTubeIcon size={size} />;
  }

  if (app.id === "tiktok") {
    return <TikTokIcon size={size} />;
  }

  if (app.id === "settings") {
    return <SettingsIcon size={size} />;
  }

  if (app.icon === "Folder") {
    return <FilesIcon size={size} />;
  }

  if (app.icon === "Calculator") {
    return <CalculatorIcon size={size} />;
  }

  if (app.id === "photos") {
    return <PhotosIcon size={size} />;
  }

  if (app.id === "weather") {
    return <WeatherIcon size={size} />;
  }

  if (app.id === "clock") {
    return <ClockIcon size={size} />;
  }

  if (app.id === "playstore") {
    return <PlayStoreIcon size={size} />;
  }

  if (app.id === "themes") {
    return <ThemesIcon size={size} />;
  }

  if (app.id === "google_tv") {
    return (
      <svg
        viewBox="0 0 548.3 400"
        style={{ width: size, height: size }}
        className="overflow-visible"
        id="google-tv-icon"
      >
        <path
          fill="#4285F4"
          d="M477.4 0H153.2c-28.2 0-51.1 22.9-51.1 51.1v51.1h395.1c28.2 0 51.1 22.9 51.1 51.1V70.9c0-39.2-31.7-70.9-70.9-70.9z"
        />
        <path
          fill="#34A853"
          d="M70.9 0C31.7 0 0 31.7 0 70.9v175.9c0 28.2 22.9 51.1 51.1 51.1h51.1V51.1c0-28.2 22.8-51.1 51-51.1H70.9z"
        />
        <path
          fill="#FBBC04"
          d="M70.9 400h324.2c28.2 0 51.1-22.9 51.1-51.1v-51.1H51.1C22.9 297.8 0 275 0 246.8v82.3C0 368.3 31.7 400 70.9 400z"
        />
        <path
          fill="#EA4335"
          d="M477.4 400c39.2 0 70.9-31.7 70.9-70.9V153.2c0-28.2-22.9-51.1-51.1-51.1h-51.1v246.8c0 28.2-22.9 51.1-51.1 51.1h82.4z"
        />
      </svg>
    );
  }

  if (app.id === "terminal" || app.id === "magisk") {
    return <MagiskIcon size={size} />;
  }

  if (app.id === "safari") {
    return <BrowserIcon size={size} />;
  }

  if (app.icon === "Search") {
    return <SearchIcon size={size} />;
  }

  const Icon = ICON_MAP[app.icon] || Globe;
  const isFilled = ["MessageCircle", "Search"].includes(app.icon);

  return (
    <Icon
      size={app.id === "clock" ? size + 2 : size}
      strokeWidth={isFilled ? 1.5 : 2.2}
      fill={isFilled ? "currentColor" : "none"}
    />
  );
};

interface TerminalAppProps {
  isFrozen: boolean;
  isGlitching: boolean;
  isSafeMode: boolean;
  batteryLevel: number;
  triggerVirus: () => void;
  triggerHaptic: (type?: "light" | "medium" | "heavy") => void;
  onSystemDelete: () => void;
  onOSUpdate: () => void;
}

interface ThemesAppProps {
  themeStyle: "WePol" | "Hyper" | "Color" | "v4";
  setThemeStyle: (style: "WePol" | "Hyper" | "Color" | "v4") => void;
  wallpaper: string;
  setWallpaper: (url: string) => void;
  showAppNames: boolean;
  setShowAppNames: (show: boolean) => void;
  triggerHaptic: (type?: "light" | "medium" | "heavy") => void;
  photos: string[];
  theme: "light" | "dark";
}

interface Download {
  id: string;
  name: string;
  progress: number;
  status: "downloading" | "completed" | "paused" | "failed";
  size: string;
  type: string;
}

const MagiskApp = ({
  theme,
  language,
}: {
  theme: "light" | "dark";
  language: LanguageType;
}) => (
  <div
    className={`h-full flex flex-col items-center justify-center -m-6 p-12 text-center ${theme === "dark" ? "bg-zinc-950 text-white" : "bg-slate-50 text-zinc-900"}`}
  >
    <div className="mb-8 drop-shadow-2xl">
      <MagiskIcon size={96} />
    </div>
    <h3 className="text-3xl font-black mb-4 tracking-tighter">Magisk v27.0</h3>
    <p
      className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"} mb-8 leading-relaxed`}
    >
      {language === "Turkish"
        ? "Sisteminiz rootlandı ve Magisk v27.0 ile güncellendi. Modüller yüklenebilir."
        : "System rooted and updated with Magisk v27.0. Modules are ready to be installed."}
    </p>
    <div className="grid grid-cols-2 gap-4 w-full">
      <div
        className={`p-4 rounded-2xl ${theme === "dark" ? "bg-zinc-900" : "bg-white"} border shadow-sm`}
      >
        <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-1">
          Superuser
        </span>
        <span className="font-bold text-sm">Active</span>
      </div>
      <div
        className={`p-4 rounded-2xl ${theme === "dark" ? "bg-zinc-900" : "bg-white"} border shadow-sm`}
      >
        <span className="block text-[10px] font-bold text-zinc-400 uppercase mb-1">
          Modules
        </span>
        <span className="font-bold text-sm">0 Loaded</span>
      </div>
    </div>
  </div>
);

interface SecurityAppProps {
  theme: "light" | "dark";
  language: LanguageType;
  isPasscodeEnabled: boolean;
  isPatternEnabled: boolean;
  isFingerprintEnabled: boolean;
  isSafeMode: boolean;
  triggerHaptic: (type?: "light" | "medium" | "heavy") => void;
}

const SecurityApp = ({
  theme,
  language,
  isPasscodeEnabled,
  isPatternEnabled,
  isFingerprintEnabled,
  isSafeMode,
  triggerHaptic,
}: SecurityAppProps) => {
  const [scanState, setScanState] = useState<"idle" | "scanning" | "completed">("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [scanText, setScanText] = useState("");

  // App protection levels toggles
  const [realtimeShield, setRealtimeShield] = useState(true);
  const [usbProtection, setUsbProtection] = useState(true);
  const [webGuard, setWebGuard] = useState(true);

  useEffect(() => {
    let interval: any;
    if (scanState === "scanning") {
      let currentProgress = 0;
      interval = setInterval(() => {
        currentProgress += 1;
        setScanProgress(currentProgress);

        const currentText =
          language === "Turkish"
            ? currentProgress < 25
              ? "Sistem bütünlüğü doğrulanıyor..."
              : currentProgress < 50
                ? "Uygulama izinleri taranıyor..."
                : currentProgress < 75
                  ? "Magisk root erişimi kontrol ediliyor..."
                  : "Güvenli enclave doğrulanıyor..."
            : currentProgress < 25
              ? "Verifying system integrity..."
              : currentProgress < 50
                ? "Auditing application permissions..."
                : currentProgress < 75
                  ? "Checking Magisk root permissions..."
                  : "Syncing with secure enclave...";
        setScanText(currentText);

        if (currentProgress % 20 === 0) {
          triggerHaptic("light");
        }

        if (currentProgress >= 100) {
          clearInterval(interval);
          setScanState("completed");
          triggerHaptic("heavy");
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [scanState, language]);

  const runScan = () => {
    setScanProgress(0);
    setScanState("scanning");
    triggerHaptic("medium");
  };

  const isSecured = isPasscodeEnabled || isPatternEnabled || isFingerprintEnabled;

  const tSec = (en: string, tr: string, ko: string = en, zh: string = en) => {
    if (language === "Turkish") return tr;
    if (language === "Korean") return ko;
    if (language === "Chinese") return zh;
    return en;
  };

  return (
    <div className={`h-full overflow-y-auto no-scrollbar pb-24 -m-6 p-6 ${theme === "dark" ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-900"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-black tracking-tight">{tSec("Security Hub", "Güvenlik Merkezi", "보안 허브", "安全中心")}</h2>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{tSec("WePol Protect Active", "WePol Koruma Aktif", "WePol 보호 활성화", "WePol 防护启用")}</p>
        </div>
        <div className={`p-2.5 rounded-full ${isSecured ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}>
          <Shield size={24} className={isSecured ? "animate-pulse" : ""} />
        </div>
      </div>

      {/* Main Interactive Radar Scanner Panel */}
      <div className={`p-6 rounded-3xl mb-6 flex flex-col items-center justify-center text-center border shadow-sm ${theme === "dark" ? "bg-zinc-900/60 border-zinc-805" : "bg-white border-zinc-200"}`}>
        <div className="relative w-36 h-36 flex items-center justify-center mb-4">
          <AnimatePresence>
            {scanState === "scanning" && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  exit={{ scale: 1.8, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full bg-emerald-500/30"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.4, opacity: 0 }}
                  exit={{ scale: 1.4, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="absolute inset-0 rounded-full bg-emerald-500/20"
                />
              </>
            )}
          </AnimatePresence>

          <button
            onClick={runScan}
            disabled={scanState === "scanning"}
            className={`w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all ${
              scanState === "scanning"
                ? "bg-emerald-500/10 text-emerald-500"
                : scanState === "completed"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-800 hover:bg-zinc-700 text-white shadow-md active:scale-95"
            }`}
          >
            {scanState === "scanning" ? (
              <div className="flex flex-col items-center">
                <span className="text-xl font-black">{scanProgress}%</span>
                <span className="text-[8px] font-black uppercase tracking-wider">{tSec("Scanning", "Taranıyor", "스캔 중", "扫描中")}</span>
              </div>
            ) : scanState === "completed" ? (
              <div className="flex flex-col items-center">
                <CheckCircle2 size={32} />
                <span className="text-[8px] font-black uppercase tracking-wider mt-1">{tSec("Completed", "Tamamlandı", "완료됨", "已完成")}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Shield size={32} className="text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest mt-2">{tSec("Scan", "Tara", "스캔", "扫描")}</span>
              </div>
            )}
          </button>
        </div>

        {scanState === "scanning" ? (
          <p className="text-xs font-bold text-zinc-500 animate-pulse h-5">{scanText}</p>
        ) : scanState === "completed" ? (
          <div>
            <h4 className="font-bold text-emerald-500 text-sm">{tSec("System Fully Secured", "Sistem Tamamen Güvenli", "시스템 보안 유지됨", "系统完全安全")}</h4>
            <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">14 Apps & 1024 Blocks audited • 0 threats found</p>
          </div>
        ) : (
          <div>
            <h4 className="font-bold text-sm text-zinc-400">{tSec("Tap Shield to Scan Device", "Cihazı Taramak için Dokun", "기기를 스캔하려면 터치하세요", "点击盾牌扫描设备")}</h4>
            <p className="text-[10px] text-zinc-400 font-bold uppercase mt-1">{tSec("Last scanned: Just now", "Son tarama: Az önce", "마지막 스캔: 방금 전", "上次扫描：刚刚")}</p>
          </div>
        )}
      </div>

      {/* Main Status Reports */}
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3">{tSec("System Health", "Sistem Sağlığı", "시스템 상태", "系统健康状态")}</h3>
      <div className={`rounded-3xl border divide-y mb-6 overflow-hidden shadow-sm ${theme === "dark" ? "bg-zinc-900/60 border-zinc-800 divide-zinc-800" : "bg-white border-zinc-200 divide-zinc-100"}`}>
        {/* Passcode / Lock status */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Lock size={18} className={isSecured ? "text-emerald-500" : "text-amber-500"} />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{tSec("Lock Protection", "Kilit Koruması", "잠금 보호", "锁定保护")}</span>
              <span className="text-[9px] text-zinc-400 font-bold uppercase">
                {isSecured ? tSec("Passcode or Pattern is Active", "Parola veya Desen Aktif", "암호 또는 패턴 활성화됨", "密码或图案已启用") : tSec("Device is Vulnerable (No Lock)", "Cihaz Korumasız (Kilit Yok)", "취약함 (잠금 없음)", "未设密码")}
              </span>
            </div>
          </div>
          <span className={`px-2.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider ${isSecured ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}>
            {isSecured ? tSec("SECURE", "GÜVENLİ", "안전", "安全") : tSec("ACTION REQ", "KORUMASIZ", "조치 필요", "需要操作")}
          </span>
        </div>

        {/* Biometrics Status */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Fingerprint size={18} className={isFingerprintEnabled ? "text-emerald-500" : "text-zinc-400"} />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{tSec("Biometrics Check", "Biyometrik Kontrol", "생체 인식 검사", "生物识别检查")}</span>
              <span className="text-[9px] text-zinc-400 font-bold uppercase">
                {isFingerprintEnabled ? tSec("Fingerprint enrollment verified", "Parmak izi kaydı onaylandı", "지문 등록 확인됨", "指纹已录入") : tSec("No biometric records found", "Biyometrik kayıt bulunamadı", "생체 kayıt 없음", "未录入生物识别")}
              </span>
            </div>
          </div>
          <span className={`px-2.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider ${isFingerprintEnabled ? "bg-emerald-500/10 text-emerald-500" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"}`}>
            {isFingerprintEnabled ? tSec("ACTIVE", "AKTİF", "활성화", "活动") : tSec("NONE", "YOK", "없음", "无")}
          </span>
        </div>

        {/* Magisk Integration Status */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <Terminal size={18} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{tSec("Sandbox Root privileges", "Erişim Ayrıcalıkları", "샌드박스 루트 권한", "沙箱根权限")}</span>
              <span className="text-[9px] text-zinc-400 font-bold uppercase">
                Magisk Root Check • Integrity Level 4
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-blue-500/10 text-blue-500">
            {tSec("INTEGRAL", "TAM UYUMLU", "통합됨", "完整")}
          </span>
        </div>

        {/* Safe Mode Status */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <ShieldAlert size={18} className={isSafeMode ? "text-amber-500" : "text-emerald-500"} />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{tSec("Operating Mode Check", "Çalışma Modu Kontrolü", "작동 모드 검사", "运行模式检查")}</span>
              <span className="text-[9px] text-zinc-400 font-bold uppercase">
                {isSafeMode ? tSec("Currently running in Safe Mode", "Güvenli modda çalışıyor", "현재 안전 모드로 실행 중", "当前运行于安全模式") : tSec("Standard Operating Mode active", "Normal çalışma modu aktif", "표준 모드 활성화됨", "标准模式活动")}
              </span>
            </div>
          </div>
          <span className={`px-2.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider ${isSafeMode ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}>
            {isSafeMode ? tSec("SAFE MODE", "GÜVENLİ MOD", "안전 모드", "安全模式") : tSec("VERIFIED", "ONDANMIŞ", "확인됨", "已验证")}
          </span>
        </div>
      </div>

      {/* Advanced Privacy Toggles */}
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3">{tSec("Privacy Shields", "Gizlilik Kalkanları", "개인정보 보호", "隐私保护屏障")}</h3>
      <div className={`p-4 rounded-3xl border shadow-sm space-y-5 ${theme === "dark" ? "bg-zinc-900/60 border-zinc-800" : "bg-white border-zinc-200"}`}>
        {/* Real-time Web Guard */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-bold">{tSec("Real-time Threat Neutralizer", "Gerçek Zamanlı Tehdit Önleyici", "실시간 위협 차단", "实时威胁清除")}</span>
            <span className="text-[9px] text-zinc-400 font-bold uppercase">{tSec("Monitors active apps", "Aktif uygulamaları izler", "활성 앱 모니터링", "监控活动应用")}</span>
          </div>
          <button
            onClick={() => { triggerHaptic("medium"); setRealtimeShield(!realtimeShield); }}
            className={`w-12 h-6 rounded-full p-1 transition-all ${realtimeShield ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-all ${realtimeShield ? "ml-auto" : "ml-0"}`} />
          </button>
        </div>

        {/* Ad block / Web Guard */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100/10">
          <div className="flex flex-col">
            <span className="text-xs font-bold">{tSec("Intrusive Tracker Blocker", "İzleyici Engelleyici", "트래커 차단", "反跟踪防护")}</span>
            <span className="text-[9px] text-zinc-400 font-bold uppercase">{tSec("Filters browser metadata", "Web filtrelemelerini aktif kılar", "브라우저 메타데이터 필터링", "过滤浏览器元数据")}</span>
          </div>
          <button
            onClick={() => { triggerHaptic("medium"); setWebGuard(!webGuard); }}
            className={`w-12 h-6 rounded-full p-1 transition-all ${webGuard ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-all ${webGuard ? "ml-auto" : "ml-0"}`} />
          </button>
        </div>

        {/* USB Shielding */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-100/10">
          <div className="flex flex-col">
            <span className="text-xs font-bold">{tSec("Physical Enclave Protection", "Fiziksel Veri Güvenliği", "물리적 단자 보호", "物理接口防护")}</span>
            <span className="text-[9px] text-zinc-400 font-bold uppercase">{tSec("Block data via USB", "USB üzerinden veri geçişini engeller", "USB를 통한 데이터 전송 차단", "阻止USB数据泄露")}</span>
          </div>
          <button
            onClick={() => { triggerHaptic("medium"); setUsbProtection(!usbProtection); }}
            className={`w-12 h-6 rounded-full p-1 transition-all ${usbProtection ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-all ${usbProtection ? "ml-auto" : "ml-0"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ThemesApp = ({
  themeStyle,
  setThemeStyle,
  wallpaper,
  setWallpaper,
  showAppNames,
  setShowAppNames,
  triggerHaptic,
  photos,
  theme,
}: ThemesAppProps) => {
  return (
    <div
      className={`h-full ${theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"} overflow-y-auto pt-10 pb-20 px-6 space-y-10`}
    >
      <header className="space-y-1">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Themes
        </h2>
        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] italic opacity-70">
          Design Identity
        </p>
      </header>

      {/* Icon Styling */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Palette size={10} className="text-white" />
          </div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Icon Aesthetic
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              id: "WePol",
              name: "Original",
              desc: "Minimal v4",
              style: "bg-zinc-100 text-zinc-900",
              icon: Smartphone,
            },
            {
              id: "Hyper",
              name: "Hyper",
              desc: "Glass Tech",
              style: "bg-indigo-500 text-white",
              icon: Zap,
            },
            {
              id: "Color",
              name: "Vibrant",
              desc: "Deep Color",
              style: "bg-blue-500 text-white",
              icon: Palette,
            },
            {
              id: "v4",
              name: "Elite",
              desc: "Dark Mode",
              style: "bg-zinc-900 text-white",
              icon: Layers,
            },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                triggerHaptic("heavy");
                setThemeStyle(opt.id as any);
              }}
              className={`p-4 rounded-[2rem] border-2 transition-all duration-300 flex flex-col gap-3 group active:scale-95 text-left ${themeStyle === opt.id ? "border-indigo-500 bg-indigo-500/5" : "border-black/5 hover:border-black/10"}`}
            >
              <div
                className={`w-12 h-12 rounded-2xl ${opt.style} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
              >
                <opt.icon size={24} />
              </div>
              <div className="space-y-0.5">
                <p className="font-black text-[13px] uppercase tracking-tight">
                  {opt.name}
                </p>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
                  {opt.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Wallpapers */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Image size={10} className="text-white" />
          </div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Wallpaper Hub
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {photos.slice(0, 9).map((url, i) => (
            <button
              key={i}
              onClick={() => {
                triggerHaptic("medium");
                setWallpaper(url);
              }}
              className={`aspect-[9/16] rounded-[1.2rem] overflow-hidden border-2 transition-all duration-300 active:scale-90 ${wallpaper === url ? "border-orange-500 scale-95 shadow-2xl z-10" : "border-black/5 hover:scale-105 shadow-sm opacity-70 hover:opacity-100"}`}
            >
              <img
                src={url}
                className="w-full h-full object-cover"
                alt={`Wallpaper ${i}`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Interface Settings */}
      <section className="space-y-4 pb-10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
            <Layout size={10} className="text-white" />
          </div>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Interface
          </h3>
        </div>
        <div
          className={`p-6 rounded-[2rem] border ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-zinc-50 border-zinc-100"} space-y-6 shadow-sm`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-black uppercase tracking-tight">
                Show App Names
              </span>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tighter">
                Toggle home labels
              </span>
            </div>
            <button
              onClick={() => {
                triggerHaptic("medium");
                setShowAppNames(!showAppNames);
              }}
              className={`w-14 h-7 rounded-full p-1 transition-all duration-500 relative ${showAppNames ? "bg-green-500 shadow-lg shadow-green-500/20" : "bg-zinc-300"}`}
            >
              <motion.div
                animate={{ x: showAppNames ? 28 : 2 }}
                className="w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
          </div>

          <div className="pt-4 border-t border-zinc-200/20">
            <div className="flex items-center justify-between opacity-40">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-black uppercase tracking-tight italic">
                  Kernel Tuning
                </span>
                <span className="text-[9px] font-bold text-zinc-400 uppercase">
                  OS Performance
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-zinc-200 text-[9px] font-black italic">
                ROOT MODE
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-400 opacity-40 italic">
          WePol Design Division • 2026
        </p>
      </div>
    </div>
  );
};

const PatternLock = ({
  onComplete,
  error,
  title,
  subtitle,
}: {
  onComplete: (pattern: number[]) => void;
  error?: boolean;
  title?: string;
  subtitle?: string;
}) => {
  const [activeDots, setActiveDots] = React.useState<number[]>([]);

  const handleDotTouch = (index: number) => {
    if (!activeDots.includes(index)) {
      setActiveDots((prev) => [...prev, index]);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (activeDots.length === 0) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const element = document.elementFromPoint(clientX, clientY);
    if (element?.hasAttribute("data-dot-index")) {
      const index = parseInt(element.getAttribute("data-dot-index")!);
      handleDotTouch(index);
    }
  };

  const handleTouchEnd = () => {
    if (activeDots.length > 0) {
      onComplete(activeDots);
      setActiveDots([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 select-none p-6 rounded-3xl">
      {(title || subtitle) && (
        <div className="text-center space-y-1">
          {title && (
            <h3 className="text-xs font-black text-zinc-900 uppercase tracking-widest leading-none mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-[10px] font-bold text-zinc-400 uppercase">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className="grid grid-cols-3 gap-10 p-2 relative touch-none"
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            data-dot-index={i}
            onMouseDown={() => handleDotTouch(i)}
            onTouchStart={() => handleDotTouch(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 relative z-20 ${
              activeDots.includes(i)
                ? error
                  ? "bg-red-500 scale-150 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : "bg-blue-600 scale-150 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                : "bg-zinc-200 hover:bg-zinc-300"
            }`}
          />
        ))}
      </div>
      <div className="text-[9px] font-black text-zinc-300 uppercase tracking-tighter">
        Drag to connect dots
      </div>
    </div>
  );
};

const PhotosApp = ({
  theme,
  photos,
  language,
  handlePhotoUpload,
  setWallpaper,
  triggerHaptic,
}: {
  theme: "light" | "dark";
  photos: string[];
  language: LanguageType;
  handlePhotoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setWallpaper: (url: string) => void;
  triggerHaptic: (type?: any) => void;
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`h-full flex flex-col -m-6 border-white border ${theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}
    >
      <div
        className={`p-6 pb-4 pt-12 ${theme === "dark" ? "bg-zinc-950/80 border-white" : "bg-white/80 border-white"} backdrop-blur-xl sticky top-0 z-10 border-b`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold">
            {gt("files_photos", language, "Photos")}
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white text-white border border-white font-bold rounded-md"
            >
              <Download size={20} />
            </button>
            <span className="text-white bg-white border border-white font-bold px-2 rounded-md">
              Select
            </span>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 border-white">
        <div className="grid grid-cols-3 gap-1 border-white border">
          {photos.map((url, i) => (
            <motion.div
              key={i}
              layoutId={`photo-${i}`}
              onClick={() => {
                triggerHaptic("light");
                setSelectedPhoto(url);
              }}
              className="aspect-square bg-zinc-200 overflow-hidden cursor-pointer active:scale-95 transition-transform border border-white"
            >
              <img
                src={url}
                className="w-full h-full object-cover"
                alt="Library item"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 z-50 bg-black flex flex-col pt-12"
          >
            <div className="flex justify-between items-center p-6 text-white">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 -ml-2"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-6">
                <button
                  onClick={() => {
                    setWallpaper(selectedPhoto);
                    triggerHaptic("heavy");
                    setSelectedPhoto(null);
                  }}
                  className="bg-white/10 p-2 rounded-full backdrop-blur-md"
                  title="Set as wallpaper"
                >
                  <Image size={24} className="text-white" />
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={selectedPhoto}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                alt="Selected"
              />
            </div>
            <div className="p-8 pb-12 flex justify-center">
              <button
                onClick={() => {
                  setWallpaper(selectedPhoto);
                  triggerHaptic("heavy");
                  setSelectedPhoto(null);
                }}
                className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wide"
              >
                SET AS WALLPAPER
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FilesApp = ({
  theme,
  triggerHaptic,
  language,
}: {
  theme: "light" | "dark";
  triggerHaptic: (type?: any) => void;
  language: LanguageType;
}) => {
  const [downloads, setDownloads] = useState<Download[]>([
    {
      id: "1",
      name: "System_Update_v2.4.zip",
      progress: 100,
      status: "completed",
      size: "1.2 GB",
      type: "zip",
    },
    {
      id: "2",
      name: "Presentation_Draft.pptx",
      progress: 45,
      status: "downloading",
      size: "24 MB",
      type: "file",
    },
    {
      id: "3",
      name: "Vacation_Video.mp4",
      progress: 12,
      status: "downloading",
      size: "450 MB",
      type: "video",
    },
    {
      id: "4",
      name: "Design_Assets.fig",
      progress: 0,
      status: "paused",
      size: "89 MB",
      type: "file",
    },
  ]);

  const [activeTab, setActiveTab] = useState<"browse" | "downloads">("browse");

  return (
    <div
      className={`h-full flex flex-col -m-6 ${theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}
    >
      <div
        className={`p-6 pb-4 pt-12 ${theme === "dark" ? "bg-zinc-950/80 border-zinc-800" : "bg-white/80 border-zinc-100"} backdrop-blur-xl sticky top-0 z-10 border-b`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold">
            {gt("files_home", language, "Files")}
          </h3>
          <button className="text-blue-500 font-bold">
            {gt("app_edit", language, "Edit")}
          </button>
        </div>

        <div
          className={`flex p-1 rounded-xl ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"} border`}
        >
          <button
            onClick={() => {
              triggerHaptic("light");
              setActiveTab("browse");
            }}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === "browse" ? (theme === "dark" ? "bg-zinc-800 text-white shadow-sm" : "bg-white shadow-sm") : "text-zinc-500"}`}
          >
            {gt("files_browse", language, "Browse")}
          </button>
          <button
            onClick={() => {
              triggerHaptic("light");
              setActiveTab("downloads");
            }}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === "downloads" ? (theme === "dark" ? "bg-zinc-800 text-white shadow-sm" : "bg-white shadow-sm") : "text-zinc-500"} flex items-center justify-center gap-1.5`}
          >
            {gt("files_downloads", language, "Downloads")}
            {downloads.filter((d) => d.status === "downloading").length > 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            )}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {activeTab === "browse" ? (
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                id: "files_documents",
                name: "Documents",
                color: "bg-blue-500/10 text-blue-500",
                items: "15 items",
              },
              {
                id: "files_photos",
                name: "Photos",
                color: "bg-purple-500/10 text-purple-500",
                items: "245 items",
              },
              {
                id: "files_videos",
                name: "Videos",
                color: "bg-red-500/10 text-red-500",
                items: "12 items",
              },
              {
                id: "files_downloads",
                name: "Downloads",
                color: "bg-green-500/10 text-green-500",
                items: "4 items",
              },
            ].map((folder) => (
              <div
                key={folder.id}
                className={`p-4 rounded-2xl ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200/80"} border flex flex-col gap-3 group active:scale-95 transition-all`}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${folder.color} flex items-center justify-center`}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">
                    {gt(folder.id, language, folder.name)}
                  </h4>
                  <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
                    {folder.items.replace(
                      "items",
                      gt("files_items", language, "items"),
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider">
                {gt("files_active", language, "Active Downloads")}
              </span>
              <Download size={14} className="text-zinc-400" />
            </div>
            <div
              className={`rounded-2xl border divide-y overflow-hidden ${theme === "dark" ? "bg-zinc-900 border-zinc-800 divide-zinc-800" : "bg-white border-zinc-100 divide-zinc-100"}`}
            >
              {downloads.map((download) => (
                <div
                  key={download.id}
                  className="p-4 flex gap-4 items-center group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}
                  >
                    {download.status === "completed" ? (
                      <CheckCircle2 size={18} className="text-green-500" />
                    ) : (
                      <Download
                        size={18}
                        className={
                          download.status === "downloading"
                            ? "text-blue-500"
                            : "text-zinc-400"
                        }
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm truncate pr-2">
                        {download.name}
                      </h4>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase flex-shrink-0">
                        {download.size}
                      </span>
                    </div>
                    {download.status === "downloading" && (
                      <div className="space-y-1.5">
                        <div
                          className={`h-1 w-full rounded-full overflow-hidden ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-100"}`}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${download.progress}%` }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                        <span className="text-[9px] font-bold text-blue-500 uppercase tracking-tighter">
                          {download.progress}%{" "}
                          {language === "Turkish" ? "İndirildi" : "Downloaded"}
                        </span>
                      </div>
                    )}
                    {download.status === "completed" && (
                      <span className="text-[9px] font-bold text-green-500 uppercase tracking-tighter">
                        {gt("files_ready", language, "Ready to Open")}
                      </span>
                    )}
                    {download.status === "paused" && (
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">
                        {language === "Turkish" ? "Duraklatıldı" : "Paused"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"} border-2 border-dashed border-zinc-300 text-zinc-400`}
              >
                <span className="text-xl">+</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                {language === "Turkish" ? "Dosya İçe Aktar" : "Import Files"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TerminalApp = ({
  isFrozen,
  isGlitching,
  isSafeMode,
  batteryLevel,
  triggerVirus,
  triggerHaptic,
  onSystemDelete,
  onOSUpdate,
}: TerminalAppProps) => {
  const [history, setHistory] = useState<string[]>([
    "WePol OS Kernel v1.4.2 Booting...",
    "Login successful. Type commands to start.",
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    if (!cmdStr.trim()) return;

    const cmd = cmdStr.toLowerCase().trim();
    setHistory((prev) => [...prev, `> ${cmdStr}`]);

    if (cmd === "wepol os 24 beta") {
      setHistory((prev) => [
        ...prev,
        "UPDATING TO WEPOL OS 24 BETA...",
        "APPLYING PATCHES...",
        "RESTRUCTURING KERNEL...",
        "SYSTEM UPDATED SUCCESSFULLY.",
      ]);
      triggerHaptic("heavy");
      // This will be handled by a prop or callback
      onOSUpdate();
    } else if (cmd === "virus") {
      setHistory((prev) => [
        ...prev,
        "CRITICAL ERROR: EXECUTING MALICIOUS SCRIPT...",
        "SYSTEM OVERLOAD DETECTED",
        "REBOOT REQUIRED - ERROR 0x884",
      ]);
      triggerVirus();
    } else if (cmd === "system delete") {
      setHistory((prev) => [
        ...prev,
        "INITIALIZING SYSTEM DELETION...",
        "ACCESSING KERNEL...",
        "DELETING PROTECTED FILES...",
      ]);
      onSystemDelete();
    } else if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "help") {
      setHistory((prev) => [
        ...prev,
        "Available commands: virus, system delete, battery",
      ]);
    } else if (cmd === "battery" || cmd === "status") {
      setHistory((prev) => [
        ...prev,
        `Battery: ${batteryLevel}%`,
        `Safe Mode: ${isSafeMode ? "ACTIVE" : "INACTIVE"}`,
        "CPU: 92% Utilization",
      ]);
    } else {
      setHistory((prev) => [...prev, `Command not found: ${cmd}`]);
    }

    setInput("");
    triggerHaptic("light");
  };

  const onKeyPress = (key: string) => {
    if (isFrozen) return;

    // Virus effect: characters might be deleted or jitter
    if (isGlitching) {
      if (Math.random() > 0.6) {
        // Randomly "delete" or ignore when glitching
        setInput((prev) => prev.slice(0, -1));
        triggerHaptic("medium");
        return;
      }
    }

    triggerHaptic("light");
    if (key === "ENTER") {
      handleCommand(input);
    } else if (key === "BACKSPACE") {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === "SPACE") {
      setInput((prev) => prev + " ");
    } else {
      // Randomly glitch key input if virus active
      const keyToAdd =
        isGlitching && Math.random() > 0.9
          ? String.fromCharCode(Math.random() * 26 + 97)
          : key;
      setInput((prev) => prev + keyToAdd);
    }
  };

  return (
    <div className="h-full bg-black text-green-500 font-mono text-[10px] p-4 flex flex-col pt-12 overflow-hidden">
      <div ref={containerRef} className="flex-1 overflow-y-auto mb-2 space-y-1">
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith(">")
                ? "text-white"
                : line.includes("ERROR")
                  ? "text-red-500 animate-pulse"
                  : ""
            }
          >
            {line}
          </div>
        ))}
        {isFrozen && (
          <div className="text-red-600 bg-red-100 px-1 inline-block animate-pulse">
            SYSTEM HALTED
          </div>
        )}
      </div>

      <div className="flex border-t border-green-900/50 pt-2 pb-2">
        <span className="mr-2">$</span>
        <div className="flex-1 flex items-center min-h-[1.5em] relative">
          <span className="text-white whitespace-pre-wrap">{input}</span>
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-1.5 h-3 bg-green-500 ml-0.5"
          />
        </div>
      </div>

      <AnimatePresence>
        {isKeyboardVisible && !isFrozen && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            className="mt-2 -mx-4 -mb-4 bg-zinc-900/90 backdrop-blur-xl border-t border-white/10 p-2 pb-12 grid grid-cols-10 gap-1 shadow-2xl relative"
            style={
              isGlitching
                ? {
                    animation: `glitch 0.2s infinite`,
                    transform: `scale(${0.95 + Math.random() * 0.1}) translateY(${Math.random() * 4}px)`,
                  }
                : {}
            }
          >
            {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((key) => (
              <button
                key={key}
                onClick={() => onKeyPress(key.toLowerCase())}
                className="h-8 rounded bg-zinc-800 text-white text-[10px] font-bold active:bg-zinc-700"
              >
                {key}
              </button>
            ))}
            <button
              onClick={() => onKeyPress("BACKSPACE")}
              className="col-span-2 h-8 rounded bg-zinc-700 text-white text-[8px] font-bold"
            >
              DEL
            </button>
            <button
              onClick={() => onKeyPress("SPACE")}
              className="col-span-6 h-8 rounded bg-zinc-800 text-white text-[8px] font-bold"
            >
              SPACE
            </button>
            <button
              onClick={() => onKeyPress("ENTER")}
              className="col-span-2 h-8 rounded bg-green-700 text-white text-[8px] font-bold"
            >
              EXE
            </button>
            {isGlitching && (
              <div className="absolute inset-0 bg-green-500/10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-green-400 opacity-50 animate-bounce" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isLocked, setIsLocked] = useState(true);
  const [navStyle, setNavStyle] = useState<"bar" | "buttons">("bar");
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);
  const [recentApps, setRecentApps] = useState<AppInfo[]>([]);
  const [activeApp, setActiveApp] = useState<AppInfo | null>(null);
  const [activeFolder, setActiveFolder] = useState<AppInfo | null>(null);
  const [launchOrigin, setLaunchOrigin] = useState<{ x: number; y: number } | null>(null);

  const handleSetApp = (app: AppInfo | null) => {
    setActiveApp(app);
    if (!app) {
      setIsAndroid17EasterEggOpen(false);
    }
    if (app) {
      setRecentApps((prev) => {
        const filtered = prev.filter((a) => a.id !== app.id);
        return [app, ...filtered].slice(0, 6);
      });
    }
  };

  useEffect(() => {
    if (activeApp) {
      const el = document.getElementById(`app-icon-${activeApp.id}`);
      const innerRect = document.getElementById("phone-inner")?.getBoundingClientRect();
      if (el && innerRect) {
        const rect = el.getBoundingClientRect();
        setLaunchOrigin({
          x: rect.left - innerRect.left + rect.width / 2,
          y: rect.top - innerRect.top + rect.height / 2,
        });
      } else {
        setLaunchOrigin({ x: 195, y: 720 });
      }
    }
  }, [activeApp]);
  const [isControlPanelOpen, setIsControlPanelOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aboutDeviceOpen, setAboutDeviceOpen] = useState(false);
  const [isAndroid17EasterEggOpen, setIsAndroid17EasterEggOpen] =
    useState(false);
  const [isWepolAiOpen, setIsWepolAiOpen] = useState(false);
  const [isWepolAiOptimizing, setIsWepolAiOptimizing] = useState(false);
  const [isWepolAiOptimized, setIsWepolAiOptimized] = useState(false);
  const [homeScreenSettingsOpen, setHomeScreenSettingsOpen] = useState(false);
  const [wallpaperSettingsOpen, setWallpaperSettingsOpen] = useState(false);
  const [iconsSettingsOpen, setIconsSettingsOpen] = useState(false);
  const [navigationSettingsOpen, setNavigationSettingsOpen] = useState(false);
  const [internetSettingsOpen, setInternetSettingsOpen] = useState(false);
  const [mobileDataSettingsOpen, setMobileDataSettingsOpen] = useState(false);
  const [bluetoothSettingsOpen, setBluetoothSettingsOpen] = useState(false);
  const [screenSettingsOpen, setScreenSettingsOpen] = useState(false);
  const isCustomBgSetting =
    activeApp?.id === "settings" &&
    (aboutDeviceOpen ||
      isWepolAiOpen ||
      homeScreenSettingsOpen ||
      wallpaperSettingsOpen ||
      iconsSettingsOpen ||
      navigationSettingsOpen);
  const [displayZoom, setDisplayZoom] = useState(0.75);
  const [displayDistance, setDisplayDistance] = useState(50);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [animationSpeed, setAnimationSpeed] = useState(1.1);
  const [isParallelAnimation, setIsParallelAnimation] = useState(true);
  const [isNoAnimation, setIsNoAnimation] = useState(false);
  const [isSettingPasscode, setIsSettingPasscode] = useState(false);
  const [settingStep, setSettingStep] = useState<"current" | "new" | "confirm">(
    "new",
  );
  const [tempPasscode, setTempPasscode] = useState("");
  const [securityError, setSecurityError] = useState(false);
  const [lockScreenFont, setLockScreenFont] = useState<string>("font-display");
  const [lockScreenColor, setLockScreenColor] = useState<string>("#ffffff");
  const [lockScreenClockStyle, setLockScreenClockStyle] = useState<number>(1);
  const [lockScreenClockXOffset, setLockScreenClockXOffset] = useState<number>(0);
  const [lockScreenClockYOffset, setLockScreenClockYOffset] = useState<number>(0);
  const [lockScreenClockZoom, setLockScreenClockZoom] = useState<number>(100);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [batteryHealth, setBatteryHealth] = useState(100);
  const [showBatteryPercentage, setShowBatteryPercentage] = useState(true);
  const [batterySettingsOpen, setBatterySettingsOpen] = useState(false);
  const [contextMenuAppId, setContextMenuAppId] = useState<string | null>(null);
  const [wallpaper, setWallpaper] = useState(
    "/src/assets/images/orange_petals_wallpaper_final_1779106545200.png",
  );
  const [photos, setPhotos] = useState<string[]>([
    "/src/assets/images/orange_petals_wallpaper_final_1779106545200.png",
    "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2529&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
  ]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setPhotos((prev) => [url, ...prev]);
        triggerHaptic("medium");
      };
      reader.readAsDataURL(file);
    }
  };
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreen2, setIsFullscreen2] = useState(false);
  const [isFullscreen3, setIsFullscreen3] = useState(false);
  const [phoneColor, setPhoneColor] = useState("#ffffff");
  const [phoneRoundness, setPhoneRoundness] = useState(46);
  const [phoneThickness, setPhoneThickness] = useState(7);
  const [cameraPointScale, setCameraPointScale] = useState(1);
  const [cameraPointPosition, setCameraPointPosition] = useState<number>(100);
  const [screenHz, setScreenHz] = useState(30);
  const [animationSettingsOpen, setAnimationSettingsOpen] = useState(false);
  const [securitySettingsOpen, setSecuritySettingsOpen] = useState(false);
  const [accessibilitySettingsOpen, setAccessibilitySettingsOpen] =
    useState(false);
  const [appearanceSettingsOpen, setAppearanceSettingsOpen] = useState(false);
  const [moreSettingsOpen, setMoreSettingsOpen] = useState(false);
  const [appDrawerMode, setAppDrawerMode] = useState<"disabled" | "enabled">("disabled");
  const [isSimpleMode, setIsSimpleMode] = useState(false);
  const [isAppDrawerOpen, setIsAppDrawerOpen] = useState(false);
  const [drawerSearchQuery, setDrawerSearchQuery] = useState("");
  const [currentHomePage, setCurrentHomePage] = useState(0);
  const [appsPage2, setAppsPage2] = useState<AppInfo[]>(PAGE_2_APPS);
  const [appsPage3, setAppsPage3] = useState<AppInfo[]>(PAGE_3_APPS);
  const [appsPage4, setAppsPage4] = useState<AppInfo[]>(PAGE_4_APPS);
  const pointerStartY = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [appsSettingsOpen, setAppsSettingsOpen] = useState(false);
  const [soundSettingsOpen, setSoundSettingsOpen] = useState(false);
  const [volumeHUDStyle, setVolumeHUDStyle] = useState<"ios" | "android">(
    "ios",
  );
  const [volumeIncrementStyle, setVolumeIncrementStyle] = useState<
    "ios" | "standard"
  >("ios");
  const [selectedAppInfo, setSelectedAppInfo] = useState<any>(null);
  const [appsSearchQuery, setAppsSearchQuery] = useState("");
  const [appsFilterTab, setAppsFilterTab] = useState<
    "all" | "system" | "downloaded"
  >("all");
  const [appStates, setAppStates] = useState<
    Record<
      string,
      {
        cache: number;
        data: number;
        notifications: boolean;
        camera: boolean;
        microphone: boolean;
        isForceStopped: boolean;
      }
    >
  >({});
  const [showAppNames, setShowAppNames] = useState(true);
  const [appIconSize, setAppIconSize] = useState<number>(1.0);
  const [appIconEdgeStyle, setAppIconEdgeStyle] = useState<"squircle" | "rounded" | "soft-square" | "square" | "circle">("rounded");

  const getIconBorderRadius = (baseRadius: number, scale: number) => {
    switch (appIconEdgeStyle) {
      case "square":
        return "0px";
      case "soft-square":
        return `${baseRadius * 0.45 * scale}px`;
      case "squircle":
        return `${baseRadius * scale}px`;
      case "rounded":
        return `${baseRadius * 1.4 * scale}px`;
      case "circle":
        return "50%";
      default:
        return `${baseRadius * scale}px`;
    }
  };

  const [lockScreenSettingsOpen, setLockScreenSettingsOpen] = useState(false);
  const [enabledWidgets, setEnabledWidgets] = useState<string[]>([]); // Default enabled widgets (locked by default)

  // Widget visibility state & configuration
  const [showLockScreenWidgets, setShowLockScreenWidgets] = useState(true);
  const [isAutoCloseWidgetsEnabled, setIsAutoCloseWidgetsEnabled] = useState(true);
  const [isWidgetsSectionOpen, setIsWidgetsSectionOpen] = useState(false);

  // Automatically close widgets on the Lock Screen after 3 seconds if enabled
  useEffect(() => {
    if (isLocked) {
      setShowLockScreenWidgets(true);
      if (isAutoCloseWidgetsEnabled) {
        const timer = setTimeout(() => {
          setShowLockScreenWidgets(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } else {
      setShowLockScreenWidgets(true);
    }
  }, [isLocked, isAutoCloseWidgetsEnabled]);

  // Active lock screen profiles state & tracking variables
  const [lockScreenProfiles, setLockScreenProfiles] = useState<any[]>([
    {
      id: "profile_1",
      name: "Default Profile",
      font: "font-display",
      color: "#ffffff",
      clockStyle: 1,
      xOffset: 0,
      yOffset: 0,
      zoom: 100,
      enabledWidgets: ["weather", "calendar"],
      wallpaper: "/src/assets/images/orange_petals_wallpaper_final_1779106545200.png"
    }
  ]);
  const [activeLockScreenProfileId, setActiveLockScreenProfileId] = useState<string>("profile_1");

  // Sync state variables update back to profiles list
  useEffect(() => {
    setLockScreenProfiles((prevProfiles) => {
      return prevProfiles.map((p) => {
        if (p.id === activeLockScreenProfileId) {
          return {
            ...p,
            font: lockScreenFont,
            color: lockScreenColor,
            clockStyle: lockScreenClockStyle,
            xOffset: lockScreenClockXOffset,
            yOffset: lockScreenClockYOffset,
            zoom: lockScreenClockZoom,
            enabledWidgets: enabledWidgets,
            wallpaper: wallpaper
          };
        }
        return p;
      });
    });
  }, [
    lockScreenFont,
    lockScreenColor,
    lockScreenClockStyle,
    lockScreenClockXOffset,
    lockScreenClockYOffset,
    lockScreenClockZoom,
    enabledWidgets,
    wallpaper,
    activeLockScreenProfileId
  ]);

  const handleSelectProfile = (profileId: string) => {
    const profile = lockScreenProfiles.find((p) => p.id === profileId);
    if (profile) {
      setActiveLockScreenProfileId(profileId);
      setLockScreenFont(profile.font || "font-display");
      setLockScreenColor(profile.color || "#ffffff");
      setLockScreenClockStyle(profile.clockStyle || 1);
      setLockScreenClockXOffset(profile.xOffset || 0);
      setLockScreenClockYOffset(profile.yOffset || 0);
      setLockScreenClockZoom(profile.zoom || 100);
      setEnabledWidgets(profile.enabledWidgets || []);
      if (profile.wallpaper) {
        setWallpaper(profile.wallpaper);
      }
      setIsWidgetsSectionOpen(false); // Automatically close customizable widgets accordion in settings
    }
  };

  const handleAddLockScreenProfile = () => {
    const nextId = `profile_${Date.now()}`;
    const newProfileName = `Lock Screen ${lockScreenProfiles.length + 1}`;
    
    // Select different colors and styles for fresh profile
    const defaultColors = ["#ffffff", "#fca5a5", "#fcd34d", "#86efac", "#93c5fd", "#c084fc", "#fda4af"];
    const randomColor = defaultColors[lockScreenProfiles.length % defaultColors.length];
    
    const newProfile = {
      id: nextId,
      name: newProfileName,
      font: "font-sans",
      color: randomColor,
      clockStyle: (lockScreenProfiles.length % 10) + 1,
      xOffset: 0,
      yOffset: 0,
      zoom: 100,
      enabledWidgets: ["weather"],
      wallpaper: wallpaper
    };
    
    setLockScreenProfiles((prev) => [...prev, newProfile]);
    setActiveLockScreenProfileId(nextId);
    
    setLockScreenFont(newProfile.font);
    setLockScreenColor(newProfile.color);
    setLockScreenClockStyle(newProfile.clockStyle);
    setLockScreenClockXOffset(newProfile.xOffset);
    setLockScreenClockYOffset(newProfile.yOffset);
    setLockScreenClockZoom(newProfile.zoom);
    setEnabledWidgets(newProfile.enabledWidgets);
    setIsWidgetsSectionOpen(false); // Automatically close customizable widgets accordion in settings
    triggerHaptic("heavy");
  };
  const [themeStyle, setThemeStyle] = useState<
    "WePol" | "Hyper" | "Color" | "v4"
  >("v4");
  const [language, setLanguage] = useState<LanguageType>("English");
  const t = (id: string, defaultText: string) => gt(id, language, defaultText);

  // Sync state to currentLanguage tracking variable
  useEffect(() => {
    currentLanguage = language;
  }, [language]);

  // Deduplicate apps on mount or whenever apps change (extra safety)
  useEffect(() => {
    setApps((prevApps) => {
      const seen = new Set();
      const uniqueApps = prevApps.filter((app) => {
        const duplicate = seen.has(app.id);
        seen.add(app.id);
        return !duplicate;
      });
      if (uniqueApps.length !== prevApps.length) {
        return uniqueApps;
      }
      return prevApps;
    });
  }, []);

  const [dynamicIslandSettingsOpen, setDynamicIslandSettingsOpen] =
    useState(false);
  const [isDynamicIslandEnabled, setIsDynamicIslandEnabled] = useState(false);
  const [dynamicIslandWidth, setDynamicIslandWidth] = useState(1);
  const [dynamicIslandHeight, setDynamicIslandHeight] = useState(1);

  const [cameraMode, setCameraMode] = useState<
    "dot" | "v-notch" | "notch" | "two-point" | "three-point" | "none"
  >("dot");
  const [isPasscodeEnabled, setIsPasscodeEnabled] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeEntry, setPasscodeEntry] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isFingerprintEnabled, setIsFingerprintEnabled] = useState(false);
  const [isLockSoundEnabled, setIsLockSoundEnabled] = useState(true);
  const [isUnlockSoundEnabled, setIsUnlockSoundEnabled] = useState(true);
  const [isPatternEnabled, setIsPatternEnabled] = useState(false);
  const [pattern, setPattern] = useState<number[]>([]);
  const [isSettingPattern, setIsSettingPattern] = useState(false);
  const [patternStep, setPatternStep] = useState<"new" | "confirm">("new");
  const [tempPattern, setTempPattern] = useState<number[]>([]);
  const [patternEntry, setPatternEntry] = useState<number[]>([]);
  const [apps, setApps] = useState(APPS);
  const [installingAppId, setInstallingAppId] = useState<string | null>(null);
  const [installProgress, setInstallProgress] = useState(0);

  const installApp = (app: AppInfo) => {
    if (apps.some((a) => a.id === app.id) || installingAppId === app.id) {
      triggerHaptic("medium");
      if (!installingAppId) handleSetApp(app);
      return;
    }

    setInstallingAppId(app.id);
    setInstallProgress(0);
    triggerHaptic("medium");

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;

      if (currentProgress >= 100) {
        clearInterval(interval);
        setInstallProgress(100);

        setApps((prevApps) => {
          if (prevApps.some((a) => a.id === app.id)) return prevApps;
          return [...prevApps, app];
        });

        setInstallingAppId(null);
        setNotifications((prevNotifs) => {
          const newId = `playstore-${app.id}-${Math.random().toString(36).substr(2, 9)}`;
          if (prevNotifs.some((n) => n.id === newId)) return prevNotifs;

          return [
            {
              id: newId,
              title: "Play Store",
              text: `${app.name} installed successfully!`,
              time: "Just now",
              icon: "Download",
              color: "bg-blue-500",
            },
            ...prevNotifs,
          ];
        });
        triggerHaptic("heavy");
      } else {
        setInstallProgress(currentProgress);
      }
    }, 200);
  };

  const handleHomePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest(".reorder-item")) return;
    pointerStartY.current = e.clientY;
    pointerStartX.current = e.clientX;
  };

  const handleHomePointerUp = (e: React.PointerEvent) => {
    if (pointerStartY.current === null || pointerStartX.current === null) return;
    const deltaY = e.clientY - pointerStartY.current;
    const deltaX = e.clientX - pointerStartX.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < -40) {
        setCurrentHomePage((p) => Math.min(p + 1, 3));
        triggerHaptic("medium");
      } else if (deltaX > 40) {
        setCurrentHomePage((p) => Math.max(p - 1, 0));
        triggerHaptic("medium");
      }
    } else if (appDrawerMode === "enabled" && deltaY < -40) {
      setIsAppDrawerOpen(true);
      triggerHaptic("medium");
    }
    pointerStartY.current = null;
    pointerStartX.current = null;
  };

  const handleHomeTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest("button") || (e.target as HTMLElement).closest(".reorder-item")) return;
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleHomeTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < -40) {
        setCurrentHomePage((p) => Math.min(p + 1, 3));
        triggerHaptic("medium");
      } else if (deltaX > 40) {
        setCurrentHomePage((p) => Math.max(p - 1, 0));
        triggerHaptic("medium");
      }
    } else if (appDrawerMode === "enabled" && deltaY < -40) {
      setIsAppDrawerOpen(true);
      triggerHaptic("medium");
    }
    touchStartY.current = null;
    touchStartX.current = null;
  };

  const [dockApps, setDockApps] = useState(DOCK_APPS);
  const [isDockBarEnabled, setIsDockBarEnabled] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [customizingAppId, setCustomizingAppId] = useState<string | null>(null);
  const [isRestarting, setIsRestarting] = useState(false);
  const [restartCountdown, setRestartCountdown] = useState(15);
  const [isSystemOff, setIsSystemOff] = useState(false);
  const [isPowerMenuOpen, setIsPowerMenuOpen] = useState(false);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [isTWRPMode, setIsTWRPMode] = useState(false);
  const [twrpView, setTwrpView] = useState<"main" | "install" | "flashing">(
    "main",
  );
  const [twrpInstallProgress, setTwrpInstallProgress] = useState(0);
  const [osVersion, setOsVersion] = useState("Wepol OS 23");
  const [setupStep, setSetupStep] = useState<
    "hello" | "personalization" | "wifi" | "finished"
  >("hello");
  const [useYellowRedBg, setUseYellowRedBg] = useState(false);
  const [gridSize, setGridSize] = useState({ cols: 4, rows: 6 });
  const [isSystemRestarting, setIsSystemRestarting] = useState(true);
  const [bootType, setBootType] = useState<"ios" | "android">("ios");
  const [isGlitching, setIsGlitching] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isSafeMode, setIsSafeMode] = useState(false);
  const [isOS24Beta, setIsOS24Beta] = useState(false);
  const [isSystemUpdating, setIsSystemUpdating] = useState(false);
  const [systemUpdateProgress, setSystemUpdateProgress] = useState(0);
  const [hasUpdateAvailable, setHasUpdateAvailable] = useState(true);
  const [isSystemDeleting, setIsSystemDeleting] = useState(false);
  const [isANRShowing, setIsANRShowing] = useState(false);
  const [isNavBarDisabled, setIsNavBarDisabled] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (setupStep === "hello" && !isSetupComplete && !isSystemRestarting && !isSystemOff) {
      const timer = setTimeout(() => {
        setUseYellowRedBg(true);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setUseYellowRedBg(false);
    }
  }, [setupStep, isSetupComplete, isSystemRestarting, isSystemOff]);

  const playSound = (type: "lock" | "unlock" | "update") => {
    if (type === "lock" && !isLockSoundEnabled) return;
    if (type === "unlock" && !isUnlockSoundEnabled) return;
    const sounds = {
      lock: "https://cdn.pixabay.com/audio/2021/08/04/audio_bb3fa2312b.mp3", // Click
      unlock: "https://cdn.pixabay.com/audio/2022/03/24/audio_77f9059c2e.mp3", // Unlock alert
      update: "https://cdn.pixabay.com/audio/2022/03/09/audio_c35f29c42c.mp3", // Success
    };
    try {
      const audio = new Audio(sounds[type]);
      audio.volume = 0.5;
      audio.play().catch((e) => console.log("Audio play blocked:", e));
    } catch (e) {}
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [isLocked]);

  useEffect(() => {
    if (isSystemDeleting) {
      // 1. Close current application
      setActiveApp(null);

      // 2. Start deleting applications one by one
      const deleteInterval = setInterval(() => {
        setApps((prevApps) => {
          if (prevApps.length > 0) {
            const nextApps = [...prevApps];
            nextApps.splice(Math.floor(Math.random() * nextApps.length), 1);
            triggerHaptic("medium");
            return nextApps;
          } else {
            setDockApps((prevDock) => {
              if (prevDock.length > 0) {
                const nextDock = [...prevDock];
                nextDock.splice(Math.floor(Math.random() * nextDock.length), 1);
                triggerHaptic("medium");
                return nextDock;
              }
              clearInterval(deleteInterval);
              return [];
            });
            return [];
          }
        });
      }, 400);

      return () => clearInterval(deleteInterval);
    }
  }, [isSystemDeleting]);

  // Dynamic Island States
  const [islandMode, setIslandMode] = useState<
    "idle" | "music" | "timer" | "call" | "startup" | "shutdown"
  >("idle");
  const [islandStartupStep, setIslandStartupStep] = useState<number>(0);
  const [islandShutdownStep, setIslandShutdownStep] = useState<number>(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [musicProgress, setMusicProgress] = useState(33);
  const [timerRemaining, setTimerRemaining] = useState<number | null>(null);
  const [activeCall, setActiveCall] = useState<{
    name: string;
    status: "incoming" | "active";
  } | null>(null);

  // Notification states
  const [notifications, setNotifications] = useState<any[]>([
    {
      id: "1",
      title: "System",
      text: `Welcome to ${osVersion}. Explore your new device.`,
      icon: "Zap",
      color: "bg-indigo-500",
      time: "Just Now",
    },
    {
      id: "2",
      title: "Messages",
      text: "Aygul: The new update looks incredible!",
      icon: "MessageCircle",
      color: "bg-green-500",
      time: "2m ago",
    },
    {
      id: "3",
      title: "Mail",
      text: "GitHub: A personal access token was created",
      icon: "Mail",
      color: "bg-zinc-800",
      time: "1h ago",
    },
    {
      id: "4",
      title: "Calendar",
      text: "Team Sync: Starting in 15 minutes",
      icon: "Calendar",
      color: "bg-red-500",
      time: "15m ago",
    },
  ]);

  // Power Button Long Press logic
  const powerButtonTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [powerButtonHolding, setPowerButtonHolding] = useState(false);

  const startPowerButtonTimer = () => {
    setPowerButtonHolding(true);
    powerButtonTimerRef.current = setTimeout(() => {
      triggerHaptic("heavy");
      setIsPowerMenuOpen(true);
      setPowerButtonHolding(false);
    }, 1500); // 1.5 seconds hold to show menu

    // Hard restart/shutdown logic (5 seconds)
    forceRestartTimer.current = setTimeout(() => {
      triggerHaptic("heavy");
      setIsPowerMenuOpen(false);
      setIsSystemOff(true);
      setBootType("android");

      // Auto sequence for "Android WePoL" boot after shutdown
      setTimeout(() => {
        setIsSystemOff(false);
        setIsSystemRestarting(true);
        setTimeout(() => {
          setIsSystemRestarting(false);
        }, 8000);
      }, 3000);
    }, 5000);
  };

  const forceRestartTimer = useRef<NodeJS.Timeout | null>(null);

  const handleRestart = () => {
    triggerHaptic("heavy");
    setBootType("android");
    setIsPowerMenuOpen(false);
    setIsSystemRestarting(true);
    setActiveApp(null);
    setIsLocked(true);
    setTimeout(() => {
      setIsSystemRestarting(false);
    }, 10000);
  };

  const handleShutdown = () => {
    triggerHaptic("heavy");
    setBootType("android");
    setIsPowerMenuOpen(false);
    setIsSystemOff(true);
    setActiveApp(null);
  };

  const handleTWRP = () => {
    triggerHaptic("heavy");
    setBootType("android");
    setIsPowerMenuOpen(false);
    setIsSystemRestarting(true);
    setActiveApp(null);
    setIsLocked(true);
    setTimeout(() => {
      setIsSystemRestarting(false);
      setIsTWRPMode(true);
    }, 8000);
  };

  const startIslandStartupAnimation = () => {
    if (islandMode === "startup" || islandMode === "shutdown") return;
    setIsDynamicIslandEnabled(true);
    setCameraMode("dot");
    triggerHaptic("heavy");
    setIslandMode("startup");
    setIslandStartupStep(1);

    setTimeout(() => {
      setIslandStartupStep(2);
      triggerHaptic("medium");

      setTimeout(() => {
        setIslandStartupStep(3);
        triggerHaptic("light");
        setTimeout(() => {
          setIslandMode("idle");
          setIslandStartupStep(0);
        }, 600);
      }, 1500);
    }, 1200);
  };

  const startIslandShutdownAnimation = () => {
    if (islandMode === "startup" || islandMode === "shutdown") return;
    triggerHaptic("medium");
    setIslandMode("shutdown");
    setIslandShutdownStep(1);

    setTimeout(() => {
      setIslandShutdownStep(2);
      triggerHaptic("medium");

      setTimeout(() => {
        setIslandShutdownStep(3);
        triggerHaptic("heavy");
        setTimeout(() => {
          setIsDynamicIslandEnabled(false);
          setIslandMode("idle");
          setIslandShutdownStep(0);
        }, 800);
      }, 1200);
    }, 1200);
  };

  // Island Mode Management
  useEffect(() => {
    if (islandMode === "startup" || islandMode === "shutdown") {
      return;
    }
    if (activeCall) {
      setIslandMode("call");
    } else if (timerRemaining !== null && timerRemaining > 0) {
      setIslandMode("timer");
    } else if (isMusicPlaying) {
      setIslandMode("music");
    } else {
      setIslandMode("idle");
    }
  }, [activeCall, timerRemaining, isMusicPlaying, islandMode]);

  // Timer Countdown Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRemaining !== null && timerRemaining > 0) {
      interval = setInterval(() => {
        setTimerRemaining((prev) => {
          if (prev !== null && prev > 0) return prev - 1;
          return null;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRemaining]);

  // Music Progress Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMusicPlaying) {
      interval = setInterval(() => {
        setMusicProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isMusicPlaying]);

  const stopPowerButtonTimer = () => {
    let wasHolding = false;
    if (powerButtonTimerRef.current) {
      clearTimeout(powerButtonTimerRef.current);
      powerButtonTimerRef.current = null;
      wasHolding = true;
    }
    if (forceRestartTimer.current) {
      clearTimeout(forceRestartTimer.current);
      forceRestartTimer.current = null;
    }
    setPowerButtonHolding(false);
    return wasHolding;
  };

  const toggleLock = () => {
    if (isLocked) {
      // Unlocking handled by handleUnlock primarily, but for simple toggle:
      setIsLocked(false);
      playSound("unlock");
    } else {
      setIsLocked(true);
      playSound("lock");
    }
  };

  const ICON_COLORS = [
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-400 text-black",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
    "bg-zinc-800",
    "bg-white text-zinc-900",
    "bg-black text-white",
  ];

  const getIconStyle = (color: string) => {
    // Wepol OS v2 (formerly Hyper): Futuristic Glassmorphism
    if (themeStyle === "Hyper") {
      return "bg-white/15 backdrop-blur-xl ring-2 ring-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-[22px] scale-95 transition-all text-white hover:scale-100 hover:bg-white/20";
    }

    // Wepol OS v3 (formerly Color): Vibrant Circular with Depth
    if (themeStyle === "Color") {
      return `${color} rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] ring-4 ring-white/20 transition-all scale-105 hover:scale-115 hover:rotate-6 active:scale-95`;
    }

    // Wepol OS v4: Quantum Elite (2026 Design language)
    if (themeStyle === "v4") {
      return `${color} rounded-[24px] saturate-[1.5] brightness-[1.1] relative overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.2)] ring-1 ring-white/30 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/20 before:to-transparent after:absolute after:inset-[-50%] after:bg-[conic-gradient(from_0deg,_transparent_0%,_white_20%,_transparent_40%)] after:opacity-20`;
    }

    // WePol OS: Gradient & Glow (Default) v1
    if (color.includes("bg-red-500"))
      return "bg-gradient-to-br from-red-500 via-red-600 to-rose-700 shadow-[0_10px_25px_-5px_rgba(239,68,68,0.6),inset_0_4px_4px_rgba(255,255,255,0.2)] ring-1 ring-white/30 text-white rounded-[20px]";
    if (color.includes("bg-blue-500"))
      return "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.6),inset_0_4px_4px_rgba(255,255,255,0.2)] ring-1 ring-white/30 text-white rounded-[20px]";
    if (color.includes("bg-zinc-800"))
      return "bg-gradient-to-br from-zinc-700 via-zinc-800 to-black shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5),inset_0_4px_4px_rgba(255,255,255,0.1)] ring-1 ring-white/15 text-white rounded-[20px]";
    if (color.includes("bg-green-500"))
      return "bg-gradient-to-br from-green-400 via-green-500 to-emerald-700 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.6),inset_0_4px_4px_rgba(255,255,255,0.2)] ring-1 ring-white/30 text-white rounded-[20px]";
    if (color.includes("bg-orange-500"))
      return "bg-gradient-to-br from-orange-400 via-orange-500 to-amber-700 shadow-[0_10px_25px_-5px_rgba(249,115,22,0.6),inset_0_4px_4px_rgba(255,255,255,0.2)] ring-1 ring-white/30 text-white rounded-[20px]";
    if (color.includes("bg-purple-500"))
      return "bg-gradient-to-br from-purple-500 to-purple-600 shadow-[0_8px_20px_-4px_rgba(168,85,247,0.5)] ring-1 ring-white/20 text-white";
    if (color.includes("bg-yellow-400"))
      return "bg-gradient-to-br from-yellow-300 to-yellow-500 text-black shadow-[0_8px_20px_-4px_rgba(234,179,8,0.3)] ring-1 ring-black/5";
    if (color.includes("bg-gradient-to-br from-zinc-300"))
      return "bg-gradient-to-br from-zinc-200 via-zinc-400 to-zinc-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),inset_0_4px_6px_rgba(255,255,255,0.7)] ring-1 ring-black/20 text-zinc-900 rounded-[22px] border border-white/20";
    if (color.includes("bg-gradient-to-br from-[#53d769]"))
      return "bg-gradient-to-br from-[#5fdc75] via-[#4cd162] to-[#36b04b] shadow-[0_10px_25px_-5px_rgba(83,215,105,0.6),inset_0_4px_4px_rgba(255,255,255,0.4)] ring-1 ring-white/30 text-white rounded-[22px] overflow-hidden";
    if (color.includes("bg-gradient-to-br from-[#f8d84b]"))
      return "bg-gradient-to-br from-[#f8d84b] to-[#f5c62d] shadow-[0_10px_25px_-5px_rgba(248,216,75,0.4),inset_0_1px_0_rgba(255,255,255,1),inset_0_10px_10px_-10px_rgba(0,0,0,0.1)] ring-1 ring-black/5 text-zinc-800 rounded-[22px] overflow-hidden flex items-center justify-center";
    if (color.includes("bg-gradient-to-b from-[#3DA5FF]"))
      return "bg-gradient-to-b from-[#3DA5FF] to-[#2B56FF] shadow-[0_10px_25px_-5px_rgba(43,86,255,0.4),inset_0_4px_4px_rgba(255,255,255,0.3)] ring-1 ring-white/20 text-white rounded-[22px] overflow-hidden";
    if (color.includes("from-[#2EB5FF]"))
      return "bg-gradient-to-b from-[#2EB5FF] to-[#007AFF] shadow-[0_10px_25px_-5px_rgba(0,122,255,0.45),inset_0_4px_4px_rgba(255,255,255,0.35)] ring-1 ring-white/20 text-white rounded-[22px] overflow-hidden flex items-center justify-center";
    if (color.includes("bg-gradient-to-br from-white"))
      return "bg-gradient-to-br from-white via-zinc-50 to-zinc-200 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(255,255,255,1)] ring-1 ring-black/5 text-zinc-900 rounded-[22px]";
    if (color.includes("bg-gradient-to-br from-[#ffcc33]"))
      return "bg-gradient-to-br from-[#ffcc33] via-[#ffb700] to-[#ff9900] shadow-[0_12px_28px_-6px_rgba(251,191,36,0.6),inset_0_4px_6px_rgba(255,255,255,0.4)] ring-1 ring-white/30 text-zinc-800 rounded-[22px] overflow-hidden flex items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-[1px] after:bg-black/5 after:shadow-sm";
    if (color.includes("bg-zinc-900"))
      return "bg-gradient-to-br from-zinc-800 to-black shadow-[0_8px_20px_rgba(0,0,0,0.5)] ring-1 ring-white/5 text-white";
    return `${color} shadow-lg ring-1 ring-white/10`;
  };

  const updateAppColor = (appId: string, newColor: string) => {
    setApps((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, color: newColor } : app)),
    );
    setDockApps((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, color: newColor } : app)),
    );
  };

  const triggerHaptic = (type: "light" | "medium" | "heavy" = "light") => {
    if (
      typeof window !== "undefined" &&
      window.navigator &&
      window.navigator.vibrate
    ) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [40],
      };
      window.navigator.vibrate(patterns[type]);
    }
  };

  const handleANRConfirm = () => {
    setIsANRShowing(false);
    triggerHaptic("medium");
    setTimeout(() => {
      setIsNavBarDisabled(true);
      triggerHaptic("heavy");
    }, 5000);
  };

  // Quick Settings State
  const [isWifiEnabled, setIsWifiEnabled] = useState(true);
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(true);
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);
  const [isMobileDataEnabled, setIsMobileDataEnabled] = useState(false);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [isSilentMode, setIsSilentMode] = useState(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  const [isRotationLocked, setIsRotationLocked] = useState(false);
  const [isEyeShieldEnabled, setIsEyeShieldEnabled] = useState(false);
  const [isNfcEnabled, setIsNfcEnabled] = useState(false);
  const [brightness, setBrightness] = useState(65);
  const [volume, setVolume] = useState(50);
  const [showVolumeHUD, setShowVolumeHUD] = useState(false);
  const [volumeHUDTimeoutVal, setVolumeHUDTimeoutVal] = useState<any>(null);

  const [volumeHUDState, setVolumeHUDState] = useState<
    "idle" | "expanded" | "collapsed"
  >("idle");
  const [hudCollapseTimeout, setHudCollapseTimeout] = useState<any>(null);
  const [hudHideTimeout, setHudHideTimeout] = useState<any>(null);

  const triggerVolumeHUD = (customVol?: number) => {
    setShowVolumeHUD(true);
    setVolumeHUDState("expanded");

    if (hudCollapseTimeout) {
      clearTimeout(hudCollapseTimeout);
    }
    if (hudHideTimeout) {
      clearTimeout(hudHideTimeout);
    }

    // Collapse to raw bar after 900ms
    const t1 = setTimeout(() => {
      setVolumeHUDState("collapsed");
    }, 900);

    // Hide completely after 2400ms
    const t2 = setTimeout(() => {
      setVolumeHUDState("idle");
      setShowVolumeHUD(false);
    }, 2400);

    setHudCollapseTimeout(t1);
    setHudHideTimeout(t2);
  };

  // App specific state
  const [calculatorInput, setCalculatorInput] = useState("0");
  const [notes, setNotes] = useState([
    { id: 1, title: "Shopping List", content: "Bread, Milk, Eggs, Coffee" },
    { id: 2, title: "Ideas", content: "New app design for AI Studio" },
  ]);
  const [messages, setMessages] = useState([
    { id: 1, from: "Mom", text: "Call me when you are home ❤️", time: "14:20" },
    {
      id: 2,
      from: "Alex",
      text: "Did you see the new release?",
      time: "12:05",
    },
    { id: 3, from: "Sarah", text: "Lunch tomorrow?", time: "09:15" },
  ]);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [selectedYoutubeVideo, setSelectedYoutubeVideo] = useState<any | null>(
    null,
  );

  useEffect(() => {
    // Add Terminal app
    setApps((prev) => {
      if (prev.find((a) => a.id === "terminal")) return prev;
      return [
        ...prev,
        {
          id: "terminal",
          name: "Magisk",
          icon: "Terminal",
          color: "bg-white text-zinc-900",
          component: "TerminalApp",
        },
      ];
    });

    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFsChange);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // Initial boot sequence (restart once)
    const bootTimer = setTimeout(() => {
      setIsSystemRestarting(false);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(bootTimer);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .catch((e) => console.error(e));
    } else {
      document.exitFullscreen();
    }
  };

  const triggerVirus = () => {
    triggerHaptic("heavy");
    setIsGlitching(true);

    // Half screen green and distortion after typing virus
    setTimeout(() => {
      setIsFrozen(true);
      triggerHaptic("heavy");

      // Reboot into Safe Mode after "freeze"
      setTimeout(() => {
        setIsSystemRestarting(true);
        setIsGlitching(false);
        setIsFrozen(false);
        setActiveApp(null);

        setTimeout(() => {
          setIsSystemRestarting(false);
          setIsSafeMode(true);
          setIsLocked(true);
          triggerHaptic("heavy");
        }, 10000); // 10 seconds for the Wepol OS screen
      }, 4000);
    }, 3000);
  };

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const dateString = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleUnlock = () => {
    if (isPasscodeEnabled) {
      setIsAuthenticating(true);
      setPasscodeEntry("");
    } else {
      unlockSystem();
    }
  };

  const unlockSystem = () => {
    setIsLocked(false);
    setIsAuthenticating(false);
    playSound("unlock");
    triggerHaptic("heavy");
  };

  const handleSystemUpdate = () => {
    setIsSystemUpdating(true);
    setSystemUpdateProgress(0);
    triggerHaptic("medium");

    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setSystemUpdateProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSystemRestarting(true);
          setIsLocked(true);
          setHasUpdateAvailable(false);
          setIsSystemUpdating(false);
          setIsOS24Beta(true);
          setWallpaper(
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
          );
          playSound("update");

          setTimeout(() => {
            setIsSystemRestarting(false);
          }, 8000);
        }, 1000);
      }
    }, 50);
  };

  return (
    <div
      className={`fixed inset-0 flex h-full w-full items-center justify-center bg-zinc-950 font-sans text-white overflow-hidden ${isFullscreen2 ? "p-0" : "p-4"}`}
    >
      {/* Floating Full Screen 3 Trigger inside a white circle */}
      {!isFullscreen2 && (
        <button
          onClick={() => {
            triggerHaptic("heavy");
            const next = !isFullscreen3;
            setIsFullscreen3(next);
            if (next) {
              setIsFullscreen2(true);
              if (!document.fullscreenElement) {
                document.documentElement
                  .requestFullscreen()
                  .catch((e) => console.error(e));
              }
            }
          }}
          className="absolute top-4 left-4 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-zinc-900/80 shadow-[0_0_8px_rgba(255,255,255,0.25)] hover:scale-110 active:scale-95 transition-all text-white cursor-pointer group hover:bg-zinc-800"
          title="Toggle Full Screen 3"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[14px] h-[14px] rounded-[3px] border-[1px] border-white flex items-center justify-center font-black text-[7.5px] select-none tracking-tight group-hover:scale-105 transition-transform bg-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)]">
              3
            </div>
            <span className="text-[5px] font-black uppercase mt-0.5 tracking-wider opacity-80 group-hover:opacity-100">
              FS3
            </span>
          </div>
        </button>
      )}
      {/* Phone Frame Wrapper for Zoom */}
      <div
        className={`transition-transform ease-in-out ${isFullscreen2 ? "w-full h-full" : ""}`}
        style={{
          transform: isFullscreen2 ? "none" : `scale(${displayZoom})`,
          transitionDuration: `${300 / animationSpeed}ms`,
        }}
      >
        {/* Phone Frame */}
        <div
          className="relative transition-all duration-700 shadow-2xl overflow-visible"
          style={{}}
        >
          {/* Side Buttons (Placed outside to avoid overflow-hidden) */}
          {!isFullscreen2 && (
            <>
              {/* Physical Volume Up Button (Android Style - Right Side) */}
              <button
                onClick={() => {
                  triggerHaptic("light");
                  setVolume((prev) => {
                    const stepSize = volumeIncrementStyle === "ios" ? 6.25 : 5;
                    const next = Math.min(100, prev + stepSize);
                    const rounded = Math.round(next);
                    triggerVolumeHUD(rounded);
                    return rounded;
                  });
                }}
                style={{ right: `-${phoneThickness + 2}px`, width: "8px" }}
                className="absolute top-28 h-12 cursor-pointer rounded-r-[4px] bg-gradient-to-l from-zinc-700 to-zinc-900 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] border-r border-t border-b border-white/15 hover:brightness-110 active:scale-y-92 transition-all flex items-center justify-center"
                title="Volume Up"
              />

              {/* Physical Volume Down Button (Android Style - Right Side) */}
              <button
                onClick={() => {
                  triggerHaptic("light");
                  setVolume((prev) => {
                    const stepSize = volumeIncrementStyle === "ios" ? 6.25 : 5;
                    const next = Math.max(0, prev - stepSize);
                    const rounded = Math.round(next);
                    triggerVolumeHUD(rounded);
                    return rounded;
                  });
                }}
                style={{ right: `-${phoneThickness + 2}px`, width: "8px" }}
                className="absolute top-44 h-12 cursor-pointer rounded-r-[4px] bg-gradient-to-l from-zinc-700 to-zinc-900 shadow-[2px_2px_5px_rgba(0,0,0,0.5)] border-r border-t border-b border-white/15 hover:brightness-110 active:scale-y-92 transition-all flex items-center justify-center"
                title="Volume Down"
              />

              {/* Physical Power Button (User requested RED - Android Style - Right Side below Volume keys) */}
              <button
                onPointerDown={() => {
                  triggerHaptic("light");
                  startPowerButtonTimer();
                }}
                onPointerUp={(e) => {
                  const shortPress = stopPowerButtonTimer();
                  if (shortPress) {
                    if (isPowerMenuOpen) {
                      setIsPowerMenuOpen(false);
                    } else if (isSystemOff) {
                      setIsSystemOff(false);
                      setIsLocked(true);
                    } else {
                      // Sleep the screen and lock the phone
                      setIsSystemOff(true);
                      setIsLocked(true);
                      playSound("lock");
                    }
                    triggerHaptic("light");
                  }
                }}
                onPointerLeave={() => stopPowerButtonTimer()}
                style={{ right: `-${phoneThickness + 4}px`, width: "6px" }}
                className={`absolute top-60 h-16 cursor-pointer rounded-r-md bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] transition-all hover:bg-red-500 border-l border-zinc-900 ${powerButtonHolding ? "animate-pulse scale-y-110 bg-red-400" : "active:scale-y-95"}`}
              />
            </>
          )}

          <div
            id="phone-inner"
            className={`relative bg-black shadow-[0_0_80px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5 transition-all duration-500 overflow-hidden ${
              isFullscreen2
                ? "h-screen w-screen rounded-none border-0"
                : "h-[844px] w-[390px]"
            }`}
            style={{
              borderRadius: isFullscreen2 ? "0px" : `${phoneRoundness}px`,
              borderColor: isFullscreen2 ? "transparent" : phoneColor,
              borderStyle: "solid",
              borderWidth: isFullscreen2 ? "0px" : `${phoneThickness}px`,
            }}
          >
            {/* 5px Black Inner Frame Bezel */}
            {!isFullscreen2 && (
              <div
                className="absolute inset-[0.5px] pointer-events-none z-[99999] border-[5px] border-black"
                style={{
                  borderRadius: `${Math.max(0, phoneRoundness - phoneThickness)}px`,
                }}
              />
            )}
            {/* Dynamic Interactive Volume HUD */}
            <AnimatePresence>
              {showVolumeHUD &&
                (volumeHUDStyle === "ios" ? (
                  /* WePoll iOS Style Volume HUD: Left Edge Sliding Pill */
                  <motion.div
                    key="ios-hud"
                    initial={{ opacity: 0, x: -20, scaleY: 0.95 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scaleY: 1,
                      width: volumeHUDState === "collapsed" ? 8 : 28,
                    }}
                    exit={{ opacity: 0, x: -20, scaleY: 0.8 }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    onPointerDown={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const updateVolume = (moveEvent: PointerEvent) => {
                        const relativeY = Math.max(
                          0,
                          Math.min(rect.height, moveEvent.clientY - rect.top),
                        );
                        const percentage = Math.round(
                          100 - (relativeY / rect.height) * 100,
                        );
                        setVolume(percentage);
                        triggerVolumeHUD();
                      };
                      const upHandler = () => {
                        window.removeEventListener("pointermove", updateVolume);
                        window.removeEventListener("pointerup", upHandler);
                      };
                      window.addEventListener("pointermove", updateVolume);
                      window.addEventListener("pointerup", upHandler);
                      updateVolume(e.nativeEvent);
                    }}
                    className="absolute left-3 top-40 z-[9999] h-32 bg-zinc-950/85 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-end py-1 select-none shadow-[2px_10px_30px_rgba(0,0,0,0.6)] cursor-ns-resize overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-zinc-800/60 rounded-2xl pointer-events-none" />
                    <motion.div
                      layout
                      className="absolute bottom-0 inset-x-0 bg-white rounded-b-2xl"
                      style={{ height: `${volume}%` }}
                    />
                    {volumeHUDState === "expanded" && (
                      <div className="z-10 mb-2 flex flex-col items-center justify-center text-white mix-blend-difference pointer-events-none">
                        <Volume2 size={13} className="text-white" />
                      </div>
                    )}
                  </motion.div>
                ) : (
                  /* WePoll Android Style Volume HUD: Right Side Near Volume Keys */
                  <motion.div
                    key="android-hud"
                    initial={{ opacity: 0, x: 20, scale: 0.92 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 15, scale: 0.95 }}
                    transition={{ type: "spring", damping: 22, stiffness: 300 }}
                    onPointerDown={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const updateVolume = (moveEvent: PointerEvent) => {
                        const relativeY = Math.max(
                          0,
                          Math.min(
                            rect.height - 35,
                            moveEvent.clientY - rect.top,
                          ),
                        );
                        const percentage = Math.round(
                          100 - (relativeY / (rect.height - 35)) * 105,
                        );
                        setVolume(Math.max(0, Math.min(100, percentage)));
                        triggerVolumeHUD();
                      };
                      const upHandler = () => {
                        window.removeEventListener("pointermove", updateVolume);
                        window.removeEventListener("pointerup", upHandler);
                      };
                      window.addEventListener("pointermove", updateVolume);
                      window.addEventListener("pointerup", upHandler);
                      updateVolume(e.nativeEvent);
                    }}
                    className="absolute right-3 top-32 z-[9999] w-10 h-44 bg-zinc-950/90 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-between py-3.5 px-2 shadow-[0_12px_36px_rgba(0,0,0,0.65)] select-none cursor-ns-resize"
                  >
                    <div className="flex-1 w-3 bg-zinc-850 rounded-full flex flex-col justify-end overflow-hidden mb-2 relative">
                      <motion.div
                        layout
                        className="w-full bg-orange-500 rounded-full transition-all duration-75"
                        style={{ height: `${volume}%` }}
                      />
                    </div>
                    <div className="text-zinc-200 mt-1">
                      <Volume2 size={13} />
                    </div>
                    <span className="text-[8px] font-black text-white/90 bg-zinc-800 border border-white/10 px-1 py-0.5 rounded-[4px] mt-2 font-mono">
                      {volume}%
                    </span>
                  </motion.div>
                ))}
            </AnimatePresence>
            {/* Dynamic Island / Notch */}
            {isDynamicIslandEnabled ||
            islandMode === "startup" ||
            islandMode === "shutdown" ? (
              <motion.button
                initial={false}
                animate={{
                  width: (() => {
                    if (islandMode === "startup") {
                      if (islandStartupStep === 1) return 180;
                      if (islandStartupStep === 2) return 240;
                      if (islandStartupStep === 3) return 112;
                      return 112;
                    }
                    if (islandMode === "shutdown") {
                      if (islandShutdownStep === 1) return 230;
                      if (islandShutdownStep === 2) return 150;
                      if (islandShutdownStep === 3) return 4;
                      return 112;
                    }
                    return (
                      (islandMode === "idle"
                        ? 112
                        : islandMode === "music"
                          ? 200
                          : islandMode === "timer"
                            ? 140
                            : 250) * dynamicIslandWidth
                    );
                  })(),
                  height: (() => {
                    if (islandMode === "startup") {
                      if (islandStartupStep === 1) return 36;
                      if (islandStartupStep === 2) return 48;
                      if (islandStartupStep === 3) return 28;
                      return 28;
                    }
                    if (islandMode === "shutdown") {
                      if (islandShutdownStep === 1) return 48;
                      if (islandShutdownStep === 2) return 36;
                      if (islandShutdownStep === 3) return 4;
                      return 28;
                    }
                    return (
                      (islandMode === "call" ? 60 : 28) * dynamicIslandHeight
                    );
                  })(),
                  borderRadius: (() => {
                    if (islandMode === "shutdown" && islandShutdownStep === 3)
                      return 2;
                    return islandMode === "call" ? 24 : 999;
                  })(),
                  top: 12,
                }}
                whileTap={
                  islandMode === "startup" || islandMode === "shutdown"
                    ? undefined
                    : { scale: 0.95 }
                }
                onClick={() => {
                  if (islandMode !== "startup" && islandMode !== "shutdown") {
                    triggerHaptic("light");
                  }
                }}
                className="absolute left-1/2 z-[3000] -translate-x-1/2 bg-black shadow-inner flex items-center justify-between px-3 cursor-pointer overflow-hidden group"
              >
                {islandMode === "idle" && (
                  <>
                    <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-zinc-900 transition-colors" />
                    <div className="absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors" />
                  </>
                )}

                {islandMode === "music" && (
                  <div className="flex items-center justify-between w-full gap-2 px-1">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-4 h-4 rounded-xs bg-gradient-to-br from-pink-500 to-purple-600 flex-shrink-0" />
                      <span className="text-[10px] font-bold text-white truncate">
                        Moonlight Sonata
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: isMusicPlaying ? [4, 10, 6, 12, 4] : 4,
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            delay: i * 0.1,
                          }}
                          className="w-0.5 bg-pink-500 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {islandMode === "timer" && (
                  <div className="flex items-center justify-between w-full gap-2 px-1">
                    <Clock size={12} className="text-orange-500" />
                    <span className="text-[10px] font-bold text-white tabular-nums">
                      {Math.floor(timerRemaining! / 60)}:
                      {(timerRemaining! % 60).toString().padStart(2, "0")}
                    </span>
                  </div>
                )}

                {islandMode === "call" && (
                  <div className="flex flex-col w-full py-2">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-white">
                          {activeCall?.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white">
                            {activeCall?.name}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-medium">
                            {activeCall?.status === "incoming"
                              ? "Incoming Call..."
                              : "0:12"}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {activeCall?.status === "incoming" ? (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerHaptic("heavy");
                                setActiveCall(null);
                              }}
                              className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white"
                            >
                              <Phone size={18} className="rotate-[135deg]" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerHaptic("medium");
                                setActiveCall((prev) =>
                                  prev ? { ...prev, status: "active" } : null,
                                );
                              }}
                              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"
                            >
                              <Phone size={18} />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerHaptic("heavy");
                              setActiveCall(null);
                            }}
                            className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white"
                          >
                            <Phone size={18} className="rotate-[135deg]" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {islandMode === "startup" && (
                  <div className="flex items-center justify-center w-full gap-2 px-1">
                    {islandStartupStep === 1 && (
                      <>
                        <RefreshCw
                          size={14}
                          className="text-sky-400 animate-spin"
                        />
                        <span className="text-[10px] font-bold text-white tracking-wide">
                          {language === "Turkish"
                            ? "Sistem Başlatılıyor..."
                            : "Starting System..."}
                        </span>
                      </>
                    )}
                    {islandStartupStep === 2 && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-500 animate-pulse"
                        />
                        <span className="text-[10px] font-black text-white tracking-widest uppercase">
                          {language === "Turkish"
                            ? "Wepol OS Aktif"
                            : "Wepol OS Online"}
                        </span>
                      </motion.div>
                    )}
                    {islandStartupStep === 3 && (
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    )}
                  </div>
                )}

                {islandMode === "shutdown" && (
                  <div className="flex items-center justify-center w-full gap-2 px-1">
                    {islandShutdownStep === 1 && (
                      <>
                        <RefreshCw
                          size={14}
                          className="text-orange-400 animate-spin"
                        />
                        <span className="text-[10px] font-bold text-white tracking-wide">
                          {language === "Turkish"
                            ? "Veriler Kaydediliyor..."
                            : "Saving Storage..."}
                        </span>
                      </>
                    )}
                    {islandShutdownStep === 2 && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <Power
                          size={14}
                          className="text-red-500 animate-pulse"
                        />
                        <span className="text-[10px] font-black text-rose-500 tracking-wider uppercase">
                          {language === "Turkish"
                            ? "Görüşmek Üzere!"
                            : "Goodbye"}
                        </span>
                      </motion.div>
                    )}
                    {islandShutdownStep === 3 && (
                      <div className="w-1 h-1 rounded-full bg-red-600/50" />
                    )}
                  </div>
                )}
              </motion.button>
            ) : (
              <>
                {cameraMode === "dot" && (
                  <div
                    className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                    style={{
                      left: `${(cameraPointPosition / 200) * 100}%`,
                      top: 12,
                    }}
                  >
                    <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                    <motion.div
                      animate={{ scale: cameraPointScale }}
                      className="w-2.5 h-2.5 rounded-full bg-black"
                    />
                  </div>
                )}

                {cameraMode === "two-point" && (
                  <>
                    <div
                      className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                      style={{
                        left: `calc(${(cameraPointPosition / 200) * 100}% - 16px)`,
                        top: 12,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                      <motion.div
                        animate={{ scale: cameraPointScale }}
                        className="w-2.5 h-2.5 rounded-full bg-black"
                      />
                    </div>
                    <div
                      className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                      style={{
                        left: `calc(${(cameraPointPosition / 200) * 100}% + 16px)`,
                        top: 12,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                      <motion.div
                        animate={{ scale: cameraPointScale }}
                        className="w-2.5 h-2.5 rounded-full bg-black"
                      />
                    </div>
                  </>
                )}

                {cameraMode === "three-point" && (
                  <>
                    <div
                      className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                      style={{
                        left: `calc(${(cameraPointPosition / 200) * 100}% - 24px)`,
                        top: 12,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                      <motion.div
                        animate={{ scale: cameraPointScale }}
                        className="w-2.5 h-2.5 rounded-full bg-black"
                      />
                    </div>
                    <div
                      className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                      style={{
                        left: `${(cameraPointPosition / 200) * 100}%`,
                        top: 12,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                      <motion.div
                        animate={{ scale: cameraPointScale }}
                        className="w-2.5 h-2.5 rounded-full bg-black"
                      />
                    </div>
                    <div
                      className="absolute z-[3000] h-5 w-5 rounded-full bg-[#0a0a0a] flex items-center justify-center pointer-events-none -translate-x-1/2 shadow-inner"
                      style={{
                        left: `calc(${(cameraPointPosition / 200) * 100}% + 24px)`,
                        top: 12,
                      }}
                    >
                      <div className="absolute inset-0 rounded-full shadow-lg pointer-events-none" />
                      <motion.div
                        animate={{ scale: cameraPointScale }}
                        className="w-2.5 h-2.5 rounded-full bg-black"
                      />
                    </div>
                  </>
                )}

                {(cameraMode === "v-notch" || cameraMode === "notch") && (
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 z-[3000] pointer-events-none transition-all duration-500
                    ${
                      cameraMode === "v-notch"
                        ? "w-16 h-8 bg-black rounded-b-[24px]"
                        : cameraMode === "notch"
                          ? "w-48 h-8 bg-black rounded-b-[24px]"
                          : ""
                    }`}
                  >
                    <div className="flex items-center justify-center h-full gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      {cameraMode === "notch" && (
                        <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            <div
              className={`relative h-full w-full overflow-hidden transition-colors duration-500 ${theme === "light" ? "bg-zinc-100 text-zinc-900 shadow-[inset_0_0_100px_rgba(255,255,255,0.2)]" : "bg-black text-white"}`}
              style={{
                padding: `${(displayDistance - 50) / 5}px`,
                borderRadius: isFullscreen2
                  ? "0px"
                  : `${Math.max(0, phoneRoundness - phoneThickness)}px`,
                transition:
                  "padding 0.3s ease, background-color 0.5s ease, border-radius 0.5s ease",
              }}
            >
              {isANRShowing && (
                <div
                  className="absolute inset-0 z-[10005] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300"
                  style={{
                    borderRadius: isFullscreen2
                      ? "0px"
                      : `${Math.max(0, phoneRoundness - phoneThickness)}px`,
                  }}
                >
                  <div
                    className={`w-full max-w-[280px] p-5 rounded-2xl flex flex-col gap-4 shadow-2xl border text-center ${theme === "dark" ? "bg-zinc-900 text-white border-zinc-800" : "bg-white text-zinc-900 border-zinc-100"}`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400 animate-pulse">
                        <AlertTriangle size={24} />
                      </div>
                      <h4 className="font-bold text-base mt-2">
                        {language === "Turkish"
                          ? "Sistem yanıt vermiyor"
                          : "System not responding"}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                        {language === "Turkish"
                          ? "WePol OS şu anda yanıt vermiyor. Beklemek istiyorsanız Tamam butonuna tıklayın."
                          : "WePol OS isn't responding. Click OK to wait."}
                      </p>
                    </div>
                    <button
                      onClick={handleANRConfirm}
                      className="w-full py-3 px-4 bg-zinc-900 text-white dark:bg-zinc-200 dark:text-zinc-900 rounded-xl font-bold text-xs select-none hover:opacity-95 active:scale-[0.98] transition-all animate-none"
                    >
                      {language === "Turkish" ? "Tamam" : "OK"}
                    </button>
                  </div>
                </div>
              )}

              {isSystemDeleting && (
                <div
                  className="absolute inset-0 z-[10000] pointer-events-none flex overflow-hidden"
                  style={{
                    borderRadius: isFullscreen2
                      ? "0px"
                      : `${Math.max(0, phoneRoundness - phoneThickness)}px`,
                  }}
                >
                  {/* Left Half: Green at 144Hz */}
                  <div className="w-1/2 h-full relative">
                    <motion.div
                      animate={{
                        backgroundColor: ["#00ff00", "transparent"],
                        opacity: [0.2, 0.5],
                      }}
                      transition={{
                        duration: 0.0069, // ~144Hz
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                      className="absolute inset-0 z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent" />
                  </div>

                  {/* Right Half: White at 166Hz */}
                  <div className="w-1/2 h-full relative">
                    <motion.div
                      animate={{
                        backgroundColor: ["#ffffff", "transparent"],
                        opacity: [0.2, 0.5],
                      }}
                      transition={{
                        duration: 0.006, // ~166Hz
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                      className="absolute inset-0 z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
                  </div>
                </div>
              )}

              {isTWRPMode && (
                <div
                  className="absolute inset-0 z-[10000] bg-zinc-900 flex flex-col font-sans select-none overflow-hidden"
                  style={{
                    borderRadius: isFullscreen2
                      ? "0px"
                      : `${Math.max(0, phoneRoundness - phoneThickness)}px`,
                  }}
                >
                  {/* TWRP Header */}
                  <div className="bg-sky-600 p-4 pt-10 pb-4 flex items-center justify-between text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20" />
                    <div className="flex items-center gap-3 z-10">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-lg ring-2 ring-white/20">
                        <Zap size={24} className="text-sky-600 fill-current" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black tracking-tight leading-none mb-0.5">
                          Team Win Recovery Project
                        </span>
                        <span className="text-[10px] font-mono font-bold opacity-70">
                          3.2.2-0
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-[10px] font-mono leading-tight z-10 font-bold opacity-90">
                      <div className="flex items-center gap-1.5 ring-1 ring-white/20 px-1.5 py-0.5 rounded bg-white/5">
                        <span className="opacity-60 uppercase text-[8px]">
                          CPU:
                        </span>
                        <span>40 °C</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span>3:33 PM</span>
                        <div className="w-px h-2 bg-white/20 mx-0.5" />
                        <span>Battery: {batteryLevel}%</span>
                      </div>
                    </div>
                  </div>

                  {/* TWRP Content Area */}
                  <div className="flex-1 overflow-hidden bg-zinc-900 flex flex-col relative">
                    {twrpView === "main" && (
                      <div className="flex-1 grid grid-cols-2 gap-3 p-4 bg-zinc-800/50">
                        {[
                          { id: "install", label: "Install" },
                          { id: "wipe", label: "Wipe" },
                          { id: "backup", label: "Backup" },
                          { id: "restore", label: "Restore" },
                          { id: "mount", label: "Mount" },
                          { id: "settings", label: "Settings" },
                          { id: "advanced", label: "Advanced" },
                          { id: "reboot", label: "Reboot" },
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            onClick={() => {
                              triggerHaptic("medium");
                              if (btn.id === "reboot") {
                                setIsTWRPMode(false);
                                handleRestart();
                              } else if (btn.id === "install") {
                                setTwrpView("install");
                              }
                            }}
                            className="bg-zinc-700/60 hover:bg-zinc-600 active:scale-95 transition-all text-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 border-r-4 border-b-4 border-black/40 shadow-xl group relative overflow-hidden h-full"
                          >
                            <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-white/10" />
                            <span className="text-lg font-bold tracking-wide drop-shadow-md">
                              {btn.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    {twrpView === "install" && (
                      <div className="flex-1 flex flex-col bg-[#121212]">
                        <div className="bg-sky-600 p-3 flex flex-col text-white">
                          <div className="flex items-center gap-3">
                            <Zap size={20} className="fill-current" />
                            <span className="text-lg font-bold">
                              Install Zip
                            </span>
                          </div>
                          <span className="text-xs opacity-80 mt-1">
                            Select File from Internal Storage (67594 MB)
                          </span>
                        </div>

                        <div className="flex gap-1 p-2 bg-zinc-800 border-b border-zinc-700">
                          <button className="flex-1 bg-zinc-700 border-b-2 border-zinc-500 text-[10px] py-1 font-bold text-zinc-300 flex items-center justify-center gap-1">
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-zinc-300" />
                            NAME
                          </button>
                          <button className="flex-1 bg-zinc-700 border-b-2 border-zinc-500 text-[10px] py-1 font-bold text-zinc-300">
                            DATE
                          </button>
                          <button className="flex-1 bg-zinc-700 border-b-2 border-zinc-500 text-[10px] py-1 font-bold text-zinc-300">
                            SIZE
                          </button>
                        </div>

                        <div className="px-4 py-2 text-sky-400 text-xs font-mono font-bold bg-zinc-900/50">
                          /sdcard
                        </div>

                        <div className="flex-1 overflow-y-auto font-sans">
                          {[
                            { name: "TitaniumBackup", type: "folder" },
                            { name: "Tumblr", type: "folder" },
                            { name: "TWRP", type: "folder" },
                            { name: "UCDownloads", type: "folder" },
                            { name: "Videoder", type: "folder" },
                            { name: "WATweaker", type: "folder" },
                            { name: "WhatsApp", type: "folder" },
                            { name: "X Video Player", type: "folder" },
                            { name: "YoWhatsApp", type: "folder" },
                            { name: "zedge", type: "folder" },
                            { name: "Wepol_OS_v24.zip", type: "file" },
                          ].map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => {
                                triggerHaptic("light");
                                if (item.name === "Wepol_OS_v24.zip") {
                                  setTwrpView("flashing");
                                  setTwrpInstallProgress(0);
                                  let currentProgress = 0;
                                  const interval = setInterval(() => {
                                    currentProgress += 5;
                                    if (currentProgress >= 100) {
                                      currentProgress = 100;
                                      setTwrpInstallProgress(100);
                                      clearInterval(interval);

                                      setTimeout(() => {
                                        setOsVersion("Wepol OS 24");
                                        setIsOS24Beta(true);
                                        setNotifications((prev) => [
                                          {
                                            id: `update-success-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                                            title: "System Updated",
                                            text: "Wepol OS 24 successfully installed via recovery.",
                                            icon: "Zap",
                                            color: "bg-sky-500",
                                            time: "Just Now",
                                          },
                                          ...prev,
                                        ]);
                                        setIsTWRPMode(false);
                                        setTwrpView("main");
                                        handleRestart();
                                      }, 1000);
                                    } else {
                                      setTwrpInstallProgress(currentProgress);
                                    }
                                  }, 40);
                                }
                              }}
                              className="w-full flex items-center gap-4 px-4 py-3 border-b border-zinc-800 hover:bg-zinc-800/50 active:bg-zinc-700 transition-colors"
                            >
                              {item.type === "folder" ? (
                                <div className="w-6 h-6 bg-zinc-600 rounded flex items-center justify-center">
                                  <Menu size={14} className="text-zinc-300" />
                                </div>
                              ) : (
                                <File
                                  size={24}
                                  className="text-sky-500 fill-current opacity-80"
                                />
                              )}
                              <span
                                className={`text-sm tracking-wide ${item.type === "file" ? "text-zinc-100 font-medium" : "text-zinc-300"}`}
                              >
                                {item.name}
                              </span>
                            </button>
                          ))}
                          <div className="h-20" /> {/* Spacer */}
                        </div>

                        <div className="p-4 grid grid-cols-2 gap-3 bg-zinc-900 border-t border-zinc-800">
                          <button className="bg-zinc-700/80 p-3 rounded-lg text-xs font-bold text-zinc-300 border-r-2 border-b-2 border-black/40">
                            Select Storage
                          </button>
                          <button className="bg-zinc-700/80 p-3 rounded-lg text-xs font-bold text-zinc-300 border-r-2 border-b-2 border-black/40">
                            Install Image
                          </button>
                        </div>
                      </div>
                    )}

                    {twrpView === "flashing" && (
                      <div className="flex-1 flex flex-col bg-black font-mono p-4">
                        <div className="flex items-center gap-2 mb-4 text-sky-400">
                          <Zap size={16} />
                          <span className="text-xs font-bold uppercase tracking-widest">
                            Installing Wepol OS v24...
                          </span>
                        </div>

                        <div className="flex-1 overflow-hidden flex flex-col gap-1 text-[10px] leading-tight text-emerald-400">
                          <div className="opacity-60">
                            -- TWRP Recovery v3.2.2-0
                          </div>
                          <div>Checking for Digest file...</div>
                          <div>Skipping Digest check: no Digest file found</div>
                          <div className="text-sky-400">
                            Installing Wepol_OS_v24.zip...
                          </div>
                          <div>
                            Target: /dev/block/bootdevice/by-name/system
                          </div>
                          <div>Mounting partitions...</div>
                          <div>Unmounting system...</div>
                          <div>Formatting system partition (ext4)...</div>
                          <div>Extracting system binaries...</div>
                          <div className="text-yellow-400">
                            Warning: Patching vendor image...
                          </div>
                          <div>Flashing kernel...</div>
                          {twrpInstallProgress > 30 && (
                            <div>Updating bootimg metadata...</div>
                          )}
                          {twrpInstallProgress > 50 && (
                            <div className="text-sky-400">
                              Injecting Wepol Services...
                            </div>
                          )}
                          {twrpInstallProgress > 70 && (
                            <div>Cleaning cache...</div>
                          )}
                          {twrpInstallProgress > 90 && (
                            <div className="text-emerald-500 font-bold">
                              SUCCESS: OS Installation Complete
                            </div>
                          )}
                          {twrpInstallProgress === 100 && (
                            <div className="mt-4 text-white animate-pulse">
                              Rebooting to system in 1.5s...
                            </div>
                          )}
                        </div>

                        <div className="mt-auto pt-4 border-t border-zinc-800">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase">
                              Operation Progress
                            </span>
                            <span className="text-xs font-bold text-sky-400">
                              {twrpInstallProgress}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${twrpInstallProgress}%` }}
                              className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TWRP Navigation Bar */}
                  <div className="h-14 flex items-center justify-around border-t border-white/5 bg-black/80 backdrop-blur-2xl">
                    <button
                      onClick={() => triggerHaptic("light")}
                      className="p-4 active:scale-90 transition-transform opacity-60 hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => triggerHaptic("light")}
                      className="p-4 active:scale-90 transition-transform opacity-60 hover:opacity-100"
                    >
                      <Home size={24} />
                    </button>
                    <button
                      onClick={() => triggerHaptic("light")}
                      className="p-4 active:scale-90 transition-transform opacity-60 hover:opacity-100"
                    >
                      <Menu size={24} />
                    </button>
                  </div>
                </div>
              )}

              {/* Power Menu Modal - Android Style */}
              <AnimatePresence>
                {isPowerMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[1010] bg-black/40 backdrop-blur-2xl flex items-center justify-center p-8"
                    onClick={() => setIsPowerMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0, y: 40 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.8, opacity: 0, y: 40 }}
                      className="w-full max-w-[320px] grid grid-cols-2 gap-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {[
                        {
                          id: "emergency",
                          name: "Emergency",
                          icon: <ShieldAlert size={28} />,
                          color: "bg-red-500",
                          action: () => triggerHaptic("heavy"),
                        },
                        {
                          id: "restart",
                          name: "Restart",
                          icon: <RotateCcw size={28} />,
                          color: "bg-green-500",
                          action: handleRestart,
                        },
                        {
                          id: "poweroff",
                          name: "Power off",
                          icon: <Power size={28} />,
                          color: "bg-orange-500",
                          action: handleShutdown,
                        },
                        {
                          id: "twrp",
                          name: "TWRP",
                          icon: <Zap size={28} />,
                          color: "bg-sky-600",
                          action: handleTWRP,
                        },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="group flex flex-col items-center gap-3 transition-transform active:scale-95"
                        >
                          <div
                            className={`w-20 h-20 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg group-hover:brightness-110 transition-all`}
                          >
                            {item.icon}
                          </div>
                          <span className="text-white text-xs font-black uppercase tracking-widest opacity-80">
                            {item.name}
                          </span>
                        </button>
                      ))}

                      <button
                        onClick={() => setIsPowerMenuOpen(false)}
                        className="col-span-2 mt-8 py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
                      >
                        Dismiss
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* System Restart / Black Screen Overlay */}
              <AnimatePresence>
                {isSystemOff && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[1000] bg-black"
                  />
                )}
                {isSystemRestarting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[1010] bg-black flex flex-col items-center justify-center p-12"
                  >
                    <div className="flex-1 flex flex-col items-center justify-center relative w-full">
                      {/* Quantum Core Boot Animation (iOS/Default) */}
                      <motion.div className="relative z-10">
                        <div className="flex gap-1">
                          {"Wepol OS".split("").map((char, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0.2 }}
                              animate={{
                                opacity: [0.2, 1, 0.2],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.15,
                                ease: "easeInOut",
                              }}
                              className={`text-5xl font-black tracking-tighter ${index > 5 ? "text-sky-400" : "text-white"}`}
                            >
                              {char}
                            </motion.span>
                          ))}
                        </div>
                        <motion.div
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-1"
                    >
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">
                        powered by
                      </span>
                      <span
                        className={`text-xl font-black tracking-tighter uppercase text-white`}
                      >
                        Android
                      </span>
                    </motion.div>
                  </motion.div>
                )}

                {/* Setup Screen */}
                {!isSetupComplete && !isSystemRestarting && !isSystemOff && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-[1005] flex flex-col p-8 overflow-hidden"
                  >
                    {/* Setup Screen Background Layer with Transformation Animation */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                      {/* Calm initial gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#b2e1f4] via-[#e6daf8] to-[#ad9eec]" />

                      {/* Red and Yellow dynamic transformation overlay - Hardware Accelerated */}
                      <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={useYellowRedBg ? {
                          opacity: 1,
                          scale: [1, 1.04, 1.02],
                        } : {
                          opacity: 0,
                          scale: 1
                        }}
                        transition={{
                          opacity: { duration: 2.2, ease: "easeInOut" },
                          scale: { duration: 5.0, ease: "easeOut" }
                        }}
                        style={{ willChange: "transform, opacity" }}
                        className="absolute inset-0 bg-gradient-to-tr from-[#ff1f43] via-[#ff6b21] to-[#ffda1f]"
                      />

                      {/* Highly optimized soft accent blobs for fluid energy */}
                      <div className="absolute inset-0 opacity-40">
                        {useYellowRedBg && (
                          <>
                            {/* Gentle Floating Yellow Aura */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 0.5, scale: 1 }}
                              transition={{ duration: 3.0, ease: "easeOut" }}
                              style={{ willChange: "transform, opacity" }}
                              className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-yellow-400 blur-2xl"
                            />
                            {/* Gentle Floating Red Aura */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 0.6, scale: 1 }}
                              transition={{ duration: 2.8, ease: "easeOut", delay: 0.2 }}
                              style={{ willChange: "transform, opacity" }}
                              className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-red-500 blur-2xl"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 flex-grow flex flex-col overflow-hidden">
                      <AnimatePresence mode="wait">
                        {setupStep === "hello" && (
                        <motion.div
                          key="hello"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex-1 flex flex-col items-center justify-center text-center"
                        >
                          <motion.div
                            animate={{
                              opacity: [0, 1, 1, 0],
                              y: [10, 0, 0, -10],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              times: [0, 0.1, 0.9, 1],
                            }}
                            className={`text-6xl font-black ${
                              useYellowRedBg ? "text-white drop-shadow-md" : "text-zinc-900"
                            } tracking-tighter mb-8 transition-colors duration-[1200ms]`}
                          >
                            {t("setup_hello", "Hello")}
                          </motion.div>
                          <p className={`font-medium max-w-[200px] mb-12 ${
                            useYellowRedBg ? "text-white/90 drop-shadow-sm" : "text-zinc-500"
                          } transition-colors duration-[1200ms]`}>
                            {t(
                              "setup_welcome",
                              "Welcome to your new WePol OS device. Let's get things ready.",
                            )}
                          </p>

                          <button
                            onClick={() => {
                              triggerHaptic("medium");
                              setSetupStep("personalization");
                            }}
                            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg active:scale-[0.93] transition-all duration-[1200ms] ${
                              useYellowRedBg
                                ? "bg-white hover:bg-neutral-100 text-zinc-900 shadow-white/10"
                                : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 border border-white/20"
                            }`}
                            title={t("setup_continue", "Continue")}
                            id="setup-continue-button"
                          >
                            <ArrowRight
                              size={28}
                              strokeWidth={2.5}
                              className={`transition-colors duration-[1200ms] ${
                                useYellowRedBg ? "text-zinc-900" : "text-white"
                              }`}
                            />
                          </button>
                        </motion.div>
                      )}

                      {setupStep === "personalization" && (
                        <motion.div
                          key="personalization"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="flex-1 flex flex-col pt-12 overflow-y-auto"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">
                              {t("setup_step_1", "Step 1 of 2")}
                            </span>
                          </div>
                          <h2 className="text-4xl font-black text-zinc-900 tracking-tighter mb-4">
                            {t("setup_personalize", "Personalize")}
                          </h2>
                          <p className="text-zinc-500 text-sm font-medium mb-8">
                            {t(
                              "setup_personalize_desc",
                              "Choose how your device looks and behaves.",
                            )}
                          </p>

                          <div className="space-y-6">
                            <div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">
                                {language === "Turkish"
                                  ? "Sistem Dili"
                                  : language === "Korean"
                                    ? "시스템 언어"
                                    : language === "Chinese"
                                      ? "系统语言"
                                      : "System Language"}
                              </span>
                              <div className="grid grid-cols-2 gap-2">
                                {[
                                  { code: "English", name: "English" },
                                  { code: "Turkish", name: "Türkçe" },
                                  { code: "Korean", name: "한국어 (Korean)" },
                                  { code: "Chinese", name: "中文 (Chinese)" },
                                ].map(
                                  ({ code, name }) => (
                                    <button
                                      key={code}
                                      onClick={() => {
                                        triggerHaptic("light");
                                        setLanguage(code as LanguageType);
                                      }}
                                      className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                                        language === code
                                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/15"
                                          : "bg-white hover:bg-zinc-50 text-zinc-700 border-zinc-200/50"
                                      }`}
                                    >
                                      {name}
                                    </button>
                                  ),
                                )}
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">
                                {t("setup_icon_style", "Icon Style")}
                              </span>
                              <div className="grid grid-cols-4 gap-2">
                                {(
                                  [
                                    { id: "WePol", name: "Classic" },
                                    { id: "Hyper", name: "Hyper" },
                                    { id: "Color", name: "Color" },
                                    { id: "v4", name: "v4" },
                                  ] as const
                                ).map((opt) => (
                                  <button
                                    key={opt.id}
                                    onClick={() => {
                                      triggerHaptic("light");
                                      setThemeStyle(opt.id);
                                    }}
                                    className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 border-2 transition-all ${themeStyle === opt.id ? "border-blue-500 bg-blue-50" : "border-zinc-100 bg-white"}`}
                                  >
                                    <Palette
                                      size={18}
                                      className={
                                        themeStyle === opt.id
                                          ? "text-blue-500"
                                          : "text-zinc-400"
                                      }
                                    />
                                    <span className="text-[8px] font-bold uppercase">
                                      {opt.id === "WePol"
                                        ? t("setup_classic", "Classic")
                                        : opt.id === "Color"
                                          ? t("setup_color", "Color")
                                          : opt.name}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">
                                {t("setup_wallpaper", "Wallpaper")}
                              </span>
                              <div className="grid grid-cols-3 gap-2">
                                {photos.slice(0, 6).map((photo) => (
                                  <button
                                    key={photo}
                                    onClick={() => {
                                      triggerHaptic("light");
                                      setWallpaper(photo);
                                    }}
                                    className={`aspect-[9/16] rounded-lg bg-cover bg-center border-2 transition-all ${wallpaper === photo ? "border-blue-500 scale-95 shadow-lg" : "border-transparent"}`}
                                    style={{ backgroundImage: `url(${photo})` }}
                                  />
                                ))}
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 block">
                                {t("setup_sys_nav", "System Navigation")}
                              </span>
                              <div className="grid grid-cols-2 gap-3">
                                <button
                                  onClick={() => {
                                    setNavStyle("bar");
                                    triggerHaptic("medium");
                                  }}
                                  className={`relative p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${navStyle === "bar" ? "border-blue-500 bg-blue-50/50" : "border-zinc-100 bg-white hover:bg-zinc-50"}`}
                                >
                                  <div className="w-12 h-1.5 bg-zinc-400 rounded-full mb-1" />
                                  <span
                                    className={`text-[10px] font-black ${navStyle === "bar" ? "text-blue-600" : "text-zinc-500"}`}
                                  >
                                    {t("setup_slider_bar", "SLIDER BAR")}
                                  </span>
                                  {navStyle === "bar" && (
                                    <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                      <Check
                                        size={10}
                                        className="text-white font-bold"
                                      />
                                    </div>
                                  )}
                                </button>
                                <button
                                  onClick={() => {
                                    setNavStyle("buttons");
                                    triggerHaptic("medium");
                                  }}
                                  className={`relative p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${navStyle === "buttons" ? "border-blue-500 bg-blue-50/50" : "border-zinc-100 bg-white hover:bg-zinc-50"}`}
                                >
                                  <div className="flex gap-2 items-center">
                                    <div className="w-2.5 h-0.5 bg-zinc-400 rounded-full" />
                                    <div className="w-2.5 h-2.5 rounded-[2px] border-[1.5px] border-zinc-400" />
                                    <ChevronLeft
                                      size={10}
                                      className="text-zinc-400"
                                    />
                                  </div>
                                  <span
                                    className={`text-[10px] font-black ${navStyle === "buttons" ? "text-blue-600" : "text-zinc-500"}`}
                                  >
                                    {t("setup_3_button", "3-BUTTON")}
                                  </span>
                                  {navStyle === "buttons" && (
                                    <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                      <Check
                                        size={10}
                                        className="text-white font-bold"
                                      />
                                    </div>
                                  )}
                                </button>
                              </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="font-bold text-zinc-800 text-sm">
                                    {language === "Turkish"
                                      ? "Dinamik Ada"
                                      : "Dynamic Island"}
                                  </span>
                                  <span className="text-[10px] text-zinc-500 font-medium">
                                    {language === "Turkish"
                                      ? "Akıllı durum çubuğu katmanı"
                                      : "Smart status pill overlay"}
                                  </span>
                                </div>
                                <button
                                  onClick={() => {
                                    if (isDynamicIslandEnabled) {
                                      startIslandShutdownAnimation();
                                    } else {
                                      startIslandStartupAnimation();
                                    }
                                  }}
                                  className={`h-6 w-11 rounded-full p-1 transition-colors ${isDynamicIslandEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                >
                                  <motion.div
                                    animate={{
                                      x: isDynamicIslandEnabled ? 20 : 0,
                                    }}
                                    className="h-4 w-4 rounded-full bg-white shadow-sm"
                                  />
                                </button>
                              </div>

                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-zinc-800 text-sm">
                                      {language === "Turkish"
                                        ? "Kamera Deliği"
                                        : "Camera Punch Hole"}
                                    </span>
                                    <button
                                      onClick={() => {
                                        triggerHaptic("medium");
                                      }}
                                      className={`h-4 w-8 rounded-full p-0.5 transition-colors ${cameraMode === "dot" ? "bg-blue-400" : "bg-zinc-300"}`}
                                    >
                                      <motion.div
                                        animate={{
                                          x: cameraMode === "dot" ? 16 : 0,
                                        }}
                                        className="h-3 w-3 rounded-full bg-white"
                                      />
                                    </button>
                                  </div>
                                  <span className="text-[10px] font-black text-blue-500">
                                    {Math.round(cameraPointScale * 100)}%
                                  </span>
                                </div>
                                <div className="relative h-6 bg-zinc-200 rounded-full flex items-center px-1">
                                  <input
                                    type="range"
                                    min="0.5"
                                    max="2"
                                    step="0.1"
                                    value={cameraPointScale}
                                    onChange={(e) =>
                                      setCameraPointScale(
                                        parseFloat(e.target.value),
                                      )
                                    }
                                    className="w-full h-full opacity-0 cursor-pointer absolute inset-0 z-10"
                                  />
                                  <motion.div
                                    initial={false}
                                    animate={{
                                      width: `${((cameraPointScale - 0.5) / 1.5) * 100}%`,
                                    }}
                                    className="h-4 bg-blue-500 rounded-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 mb-8">
                            <button
                              onClick={() => {
                                triggerHaptic("medium");
                                setSetupStep("wifi");
                              }}
                              className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold active:scale-95 transition-transform"
                            >
                              {t("setup_next_step", "Next Step")}
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {setupStep === "wifi" && (
                        <motion.div
                          key="wifi"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          className="flex-1 flex flex-col pt-12"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">
                              {t("setup_step_2", "Step 2 of 2")}
                            </span>
                          </div>
                          <h2 className="text-4xl font-black text-zinc-900 tracking-tighter mb-4">
                            {t("setup_choose_wifi", "Choose Network")}
                          </h2>
                          <p className="text-zinc-500 text-sm font-medium mb-8">
                            {t(
                              "setup_select_wifi_desc",
                              "Select a Wi-Fi network to activate your device features.",
                            )}
                          </p>

                          <div className="space-y-3">
                            {[
                              "WePol_Guest_5G",
                              "Home_Fiber_High",
                              "Coffee_Shop_Free",
                              "iPhone Hotspot",
                            ].map((wifi, i) => (
                              <button
                                key={wifi}
                                onClick={() => {
                                  triggerHaptic("light");
                                  setIsSetupComplete(true);
                                }}
                                className="w-full p-4 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-between group active:bg-zinc-100 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-blue-500">
                                    <Zap
                                      size={16}
                                      fill="currentColor"
                                      className="opacity-20"
                                    />
                                  </div>
                                  <span className="font-bold text-zinc-800">
                                    {wifi}
                                  </span>
                                </div>
                                <span className="text-[10px] font-bold text-zinc-400">
                                  {t("setup_connect", "CONNECT")}
                                </span>
                              </button>
                            ))}
                          </div>

                          <div className="mt-auto pt-8">
                            <button
                              onClick={() => {
                                triggerHaptic("medium");
                                setIsSetupComplete(true);
                              }}
                              className="text-zinc-400 font-bold text-xs uppercase tracking-widest hover:text-zinc-600 transition-colors"
                            >
                              {t("setup_later", "Set up later in Settings")}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Wallpaper Background */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all ${isSafeMode || isSystemDeleting ? "opacity-0" : ""}`}
                style={{
                  backgroundImage: `url(${wallpaper})`,
                  filter: isLocked ? "brightness(0.8)" : "brightness(1)",
                  transitionDuration: `${700 / animationSpeed}ms`,
                }}
              />
              {/* Black background for when wallpaper is deleted */}
              {isSystemDeleting && (
                <div className="absolute inset-0 bg-black" />
              )}

              {/* Virus/Glitch Effects */}
              {isGlitching && (
                <div className="absolute inset-0 z-[1000] pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-green-500/80 mix-blend-color animate-pulse" />
                  <div className="absolute inset-0 bg-white/20 glitch-lines" />
                  <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-1 bg-green-400 opacity-20"
                        style={{
                          transform: `translateX(${Math.random() * 20 - 10}px)`,
                          animation: `glitch ${Math.random() * 0.5}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {isFrozen && (
                <div className="absolute inset-0 z-[1001] bg-black/10 backdrop-blur-[1px] pointer-events-none" />
              )}

              {isSafeMode && (
                <>
                  <div className="absolute inset-0 z-[2000] strobe-166" />
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[30] px-3 py-1 bg-zinc-900/80 text-[8px] font-black text-white rounded-full uppercase tracking-widest border border-white/20">
                    {t("safe_mode", "Safe Mode")}
                  </div>
                </>
              )}

              {/* Status Bar */}
              {(() => {
                const isStatusBarDarkText = activeApp && !isLocked && (
                  activeApp.color.includes("text-zinc-900") ||
                  activeApp.color.includes("text-black") ||
                  activeApp.color.includes("bg-white") ||
                  activeApp.color.includes("bg-blue-100") ||
                  activeApp.color.includes("bg-zinc-100") ||
                  activeApp.color.includes("from-[#ffcc33]") ||
                  activeApp.color.includes("from-[#f8d84b]") ||
                  !activeApp.color.includes("text-white")
                );
                return (
                  <div
                    onClick={() => {
                      if (isNavBarDisabled) {
                        triggerHaptic("heavy");
                        return;
                      }
                      if (!isLocked && !isControlPanelOpen) {
                        setIsControlPanelOpen(true);
                      }
                    }}
                    className={`absolute top-0 z-[70] flex h-11 w-full items-center justify-between px-6 text-[13px] font-semibold transition-colors ${isStatusBarDarkText ? "text-zinc-900" : "text-white"} cursor-pointer`}
                  >
                    <div className="flex-1 flex items-center justify-start pl-2 gap-2">
                       {!isSystemDeleting && (
                         <span className="leading-none">{timeString}</span>
                       )}
                       <div className="flex gap-1.5 opacity-60">
                         {notifications.slice(0, 3).map((notif) => {
                           const Icon = ICON_MAP[notif.icon] || Zap;
                           return <Icon key={notif.id} size={12} />;
                         })}
                         {notifications.length > 3 && (
                           <span className="text-[8px] font-bold">
                             + {notifications.length - 3}
                           </span>
                         )}
                       </div>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-1.5 pr-2 opacity-90">
                       {isAirplaneMode ? (
                         <Plane size={14} className="rotate-90" />
                       ) : (
                         <>
                           <Signal size={15} />
                           {isWifiEnabled && <Wifi size={15} />}
                         </>
                       )}
                       {showBatteryPercentage && (
                         <span className="text-[10px] font-bold mr-0.5">
                           {batteryLevel}%
                         </span>
                       )}
                       <div className="relative flex items-center">
                         <div
                           className={`h-3 w-6 rounded-[3px] border ${isStatusBarDarkText ? "border-zinc-900/40" : "border-white/40"} p-[1.5px] flex items-center relative overflow-hidden`}
                         >
                           <motion.div
                             initial={false}
                             animate={{ width: `${batteryLevel}%` }}
                             className={`h-full rounded-[1px] ${batteryLevel <= 20 ? "bg-red-500" : isStatusBarDarkText ? "bg-zinc-900" : "bg-white"} transition-colors`}
                           />
                         </div>
                         <div
                           className={`w-[2px] h-[4px] rounded-r-sm ${isStatusBarDarkText ? "bg-zinc-900/40" : "bg-white/40"} ml-[1px]`}
                         />
                       </div>
                    </div>
                  </div>
                );
              })()}

              {/* iPhone/Xiaomi-style Control Center Overlay */}
              <AnimatePresence>
                {isControlPanelOpen && !isLocked && (
                  <motion.div
                    initial={{ y: 844, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 844, opacity: 0 }}
                    transition={{
                      type: "spring",
                      damping: 32,
                      stiffness: 400 * animationSpeed,
                    }}
                    className="absolute inset-0 z-[600] bg-white/95 backdrop-blur-3xl p-5 pt-14 flex flex-col gap-4 text-zinc-900 overflow-hidden border-b border-zinc-200/50"
                  >
                    {/* Header Status Bar */}
                    <div className="flex items-center justify-between px-2 text-xs font-semibold text-zinc-500 select-none">
                      <div>
                        {currentTime.toLocaleDateString(
                          language === "Turkish" ? "tr-TR" : "en-US",
                          { day: "numeric", month: "short", weekday: "short" },
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 opacity-95">
                        <Clock size={12} className="text-zinc-600" />
                        <Signal size={12} className="text-zinc-600" />
                        {isWifiEnabled && (
                          <Wifi size={12} className="text-zinc-600" />
                        )}
                        {showBatteryPercentage && (
                          <span className="text-zinc-600 font-bold">
                            {batteryLevel}%
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-4 pb-20 select-none">
                      {/* Top Row: Wifi and Mobile Data pills */}
                      <div className="grid grid-cols-2 gap-3.5">
                        {/* Wi-Fi Cap */}
                        <div
                          onClick={() => {
                            triggerHaptic("medium");
                            setIsWifiEnabled(!isWifiEnabled);
                          }}
                          className={`rounded-[24px] p-4 flex items-center gap-3.5 cursor-pointer transition-all duration-300 active:scale-95 border ${
                            isWifiEnabled
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-blue-500"
                              : "bg-zinc-100 border-zinc-200/80 text-zinc-700 hover:bg-zinc-200/60 shadow-sm"
                          }`}
                        >
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center ${isWifiEnabled ? "bg-white/20" : "bg-zinc-200"}`}
                          >
                            <Wifi
                              size={22}
                              className={
                                isWifiEnabled
                                  ? "text-white font-bold"
                                  : "text-zinc-500"
                              }
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span
                              className={`text-[10px] font-black uppercase tracking-wider leading-none ${isWifiEnabled ? "text-white/65" : "text-zinc-400"}`}
                            >
                              Wi-Fi
                            </span>
                            <span
                              className={`text-[13px] font-black truncate mt-1 ${isWifiEnabled ? "text-white" : "text-zinc-800"}`}
                            >
                              WePoL 5G
                            </span>
                            <span
                              className={`text-[9px] font-bold mt-0.5 ${isWifiEnabled ? "text-white/80" : "text-zinc-500"}`}
                            >
                              {isWifiEnabled
                                ? language === "Turkish"
                                  ? "Bağlanıldı"
                                  : "Connected"
                                : language === "Turkish"
                                  ? "Kapalı"
                                  : "Off"}
                            </span>
                          </div>
                        </div>

                        {/* Mobile Data Cap */}
                        <div
                          onClick={() => {
                            triggerHaptic("medium");
                            setIsMobileDataEnabled(!isMobileDataEnabled);
                          }}
                          className={`rounded-[24px] p-4 flex items-center gap-3.5 cursor-pointer transition-all duration-300 active:scale-95 border ${
                            isMobileDataEnabled
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border-blue-500"
                              : "bg-zinc-100 border-zinc-200/80 text-zinc-700 hover:bg-zinc-200/60 shadow-sm"
                          }`}
                        >
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center ${isMobileDataEnabled ? "bg-white/20" : "bg-zinc-200"}`}
                          >
                            {/* Vertical arrows up/down */}
                            <div className="flex flex-col items-center leading-none justify-center -space-y-1">
                              <span
                                className={`text-[14px] font-black rotate-180 ${isMobileDataEnabled ? "text-white" : "text-zinc-500"}`}
                              >
                                ↑
                              </span>
                              <span
                                className={`text-[14px] font-black ${isMobileDataEnabled ? "text-white" : "text-zinc-500"}`}
                              >
                                ↑
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span
                              className={`text-[10px] font-black uppercase tracking-wider leading-none ${isMobileDataEnabled ? "text-white/65" : "text-zinc-400"}`}
                            >
                              {language === "Turkish"
                                ? "Mobil Veri"
                                : "Mobile Data"}
                            </span>
                            <span
                              className={`text-[13px] font-black truncate mt-1 ${isMobileDataEnabled ? "text-white" : "text-zinc-800"}`}
                            >
                              {isMobileDataEnabled ? "WePoL" : "Off"}
                            </span>
                            <span
                              className={`text-[9px] font-bold mt-0.5 ${isMobileDataEnabled ? "text-white/80" : "text-zinc-500"}`}
                            >
                              {isMobileDataEnabled
                                ? language === "Turkish"
                                  ? "Açık"
                                  : "Active"
                                : language === "Turkish"
                                  ? "Kapalı"
                                  : "Off"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Second Row: Music player & Sliders side-by-side */}
                      <div className="flex gap-3.5">
                        {/* Music Player */}
                        <div className="w-[53%] bg-white rounded-[28px] p-4 flex flex-col justify-between border border-zinc-200/85 shadow-md shadow-zinc-100 relative overflow-hidden text-zinc-800">
                          <div className="flex flex-col gap-1 min-w-0">
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">
                              {language === "Turkish"
                                ? "OYNATMA GEÇMİŞİ"
                                : "PLAYBACK HISTORY"}
                            </span>
                            <span className="text-sm font-black text-zinc-850 truncate mt-2.5 leading-tight">
                              {isMusicPlaying
                                ? "Stellar Voyage"
                                : "Not Playing"}
                            </span>
                            <span className="text-[11px] font-bold text-zinc-400 truncate mt-0.5 animate-pulse">
                              {isMusicPlaying ? "Galaxy Symphony" : "Silence"}
                            </span>
                          </div>

                          {/* Animated Music wave lines if playing */}
                          <div className="h-6 flex items-center gap-1 my-2">
                            {isMusicPlaying ? (
                              <div className="flex gap-0.5 items-end justify-start h-5">
                                {[1, 2, 3, 4, 5, 4, 3, 2, 1].map(
                                  (delay, idx) => (
                                    <motion.div
                                      key={idx}
                                      animate={{ height: [4, 16, 4] }}
                                      transition={{
                                        repeat: Infinity,
                                        duration: 0.6,
                                        delay: delay * 0.08,
                                      }}
                                      className="w-[2px] bg-blue-500 rounded-full"
                                    />
                                  ),
                                )}
                              </div>
                            ) : (
                              <div className="w-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 select-none opacity-80">
                                <Music size={12} />{" "}
                                {language === "Turkish" ? "Boşta" : "Idle"}
                              </div>
                            )}
                          </div>

                          {/* Music controls at the bottom */}
                          <div className="flex items-center justify-between border-t border-zinc-100 pt-3 mt-1 px-1">
                            <button
                              onClick={() => triggerHaptic("light")}
                              className="text-zinc-400 hover:text-zinc-800 transition-colors active:scale-75"
                            >
                              <ChevronLeft size={24} />
                            </button>
                            <button
                              onClick={() => {
                                triggerHaptic("heavy");
                                setIsMusicPlaying(!isMusicPlaying);
                              }}
                              className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-md active:scale-95 hover:bg-zinc-800 transition-all"
                            >
                              {isMusicPlaying ? (
                                <div className="flex gap-1">
                                  <div className="w-[3px] h-3.5 bg-white rounded-sm" />
                                  <div className="w-[3px] h-3.5 bg-white rounded-sm" />
                                </div>
                              ) : (
                                <Play
                                  size={16}
                                  fill="currentColor"
                                  className="ml-0.5"
                                />
                              )}
                            </button>
                            <button
                              onClick={() => triggerHaptic("light")}
                              className="text-zinc-400 hover:text-zinc-800 transition-colors active:scale-75 rotate-180"
                            >
                              <ChevronLeft size={24} />
                            </button>
                          </div>
                        </div>

                        {/* Sliders Area */}
                        <div className="w-[47%] flex gap-3.5 justify-end">
                          {/* Brightness Slider */}
                          <div className="flex flex-col items-center gap-1.5">
                            <div
                              onMouseDown={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                const val = Math.round(
                                  ((rect.bottom - e.clientY) / rect.height) *
                                    100,
                                );
                                setBrightness(Math.max(0, Math.min(100, val)));

                                const onMouseMove = (moveEvent: MouseEvent) => {
                                  const val2 = Math.round(
                                    ((rect.bottom - moveEvent.clientY) /
                                      rect.height) *
                                      100,
                                  );
                                  setBrightness(
                                    Math.max(0, Math.min(100, val2)),
                                  );
                                };
                                const onMouseUp = () => {
                                  window.removeEventListener(
                                    "mousemove",
                                    onMouseMove,
                                  );
                                  window.removeEventListener(
                                    "mouseup",
                                    onMouseUp,
                                  );
                                };
                                window.addEventListener(
                                  "mousemove",
                                  onMouseMove,
                                );
                                window.addEventListener("mouseup", onMouseUp);
                              }}
                              onTouchStart={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                const val = Math.round(
                                  ((rect.bottom - e.touches[0].clientY) /
                                    rect.height) *
                                    100,
                                );
                                setBrightness(Math.max(0, Math.min(100, val)));

                                const onTouchMove = (moveEvent: TouchEvent) => {
                                  const val2 = Math.round(
                                    ((rect.bottom -
                                      moveEvent.touches[0].clientY) /
                                      rect.height) *
                                      100,
                                  );
                                  setBrightness(
                                    Math.max(0, Math.min(100, val2)),
                                  );
                                };
                                const onTouchEnd = () => {
                                  window.removeEventListener(
                                    "touchmove",
                                    onTouchMove,
                                  );
                                  window.removeEventListener(
                                    "touchend",
                                    onTouchEnd,
                                  );
                                };
                                window.addEventListener(
                                  "touchmove",
                                  onTouchMove,
                                );
                                window.addEventListener("touchend", onTouchEnd);
                              }}
                              className="relative w-14 h-[142px] bg-zinc-100 hover:bg-zinc-200/50 rounded-[22px] overflow-hidden flex flex-col justify-end border border-zinc-200 shadow-inner cursor-row-resize touch-none select-none"
                            >
                              {/* Fill backdrop */}
                              <div
                                className="absolute bottom-0 left-0 right-0 bg-amber-500 transition-all duration-75"
                                style={{ height: `${brightness}%` }}
                              />
                              <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none z-10">
                                <Sun
                                  size={20}
                                  className={
                                    brightness > 18
                                      ? "text-white"
                                      : "text-zinc-400"
                                  }
                                />
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider">
                              {brightness}%
                            </span>
                          </div>

                          {/* Volume Slider */}
                          <div className="flex flex-col items-center gap-1.5">
                            <div
                              onMouseDown={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                const val = Math.round(
                                  ((rect.bottom - e.clientY) / rect.height) *
                                    100,
                                );
                                setVolume(Math.max(0, Math.min(100, val)));

                                const onMouseMove = (moveEvent: MouseEvent) => {
                                  const val2 = Math.round(
                                    ((rect.bottom - moveEvent.clientY) /
                                      rect.height) *
                                      100,
                                  );
                                  setVolume(Math.max(0, Math.min(100, val2)));
                                };
                                const onMouseUp = () => {
                                  window.removeEventListener(
                                    "mousemove",
                                    onMouseMove,
                                  );
                                  window.removeEventListener(
                                    "mouseup",
                                    onMouseUp,
                                  );
                                };
                                window.addEventListener(
                                  "mousemove",
                                  onMouseMove,
                                );
                                window.addEventListener("mouseup", onMouseUp);
                              }}
                              onTouchStart={(e) => {
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                const val = Math.round(
                                  ((rect.bottom - e.touches[0].clientY) /
                                    rect.height) *
                                    100,
                                );
                                setVolume(Math.max(0, Math.min(100, val)));

                                const onTouchMove = (moveEvent: TouchEvent) => {
                                  const val2 = Math.round(
                                    ((rect.bottom -
                                      moveEvent.touches[0].clientY) /
                                      rect.height) *
                                      100,
                                  );
                                  setVolume(Math.max(0, Math.min(100, val2)));
                                };
                                const onTouchEnd = () => {
                                  window.removeEventListener(
                                    "touchmove",
                                    onTouchMove,
                                  );
                                  window.removeEventListener(
                                    "touchend",
                                    onTouchEnd,
                                  );
                                };
                                window.addEventListener(
                                  "touchmove",
                                  onTouchMove,
                                );
                                window.addEventListener("touchend", onTouchEnd);
                              }}
                              className="relative w-14 h-[142px] bg-zinc-100 hover:bg-zinc-200/50 rounded-[22px] overflow-hidden flex flex-col justify-end border border-zinc-200 shadow-inner cursor-row-resize touch-none select-none"
                            >
                              {/* Fill backdrop */}
                              <div
                                className="absolute bottom-0 left-0 right-0 bg-blue-600 transition-all duration-75"
                                style={{ height: `${volume}%` }}
                              />
                              <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none z-10">
                                <Volume2
                                  size={20}
                                  className={
                                    volume > 18 ? "text-white" : "text-zinc-400"
                                  }
                                />
                              </div>
                            </div>
                            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-wider">
                              {volume}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Wepol Smart Hub Bar */}
                      <div
                        onClick={() => triggerHaptic("medium")}
                        className="w-full h-14 bg-white border border-zinc-200 rounded-[22px] flex items-center justify-between px-5 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-zinc-100"
                      >
                        <div className="flex items-center gap-3">
                          {/* Overlapping colored dots to mimic Xiaomi Smart Hub logo */}
                          <div className="relative w-5 h-5 flex items-center justify-center">
                            <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-violet-500" />
                            <div className="absolute -left-1 w-2.5 h-2.5 rounded-full bg-green-500" />
                            <div className="absolute -right-1 w-2.5 h-2.5 rounded-full bg-amber-500" />
                            <div className="absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-blue-500" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white z-10 animate-pulse" />
                          </div>
                          <span className="text-xs font-black uppercase tracking-[0.1em] text-zinc-800">
                            Wepol Smart Hub
                          </span>
                        </div>
                        <ChevronRight size={16} className="text-zinc-400" />
                      </div>

                      {/* Grid of Circular settings toggles */}
                      <div className="grid grid-cols-4 gap-y-5 gap-x-2 px-1 mt-2">
                        {[
                          {
                            icon: Bluetooth,
                            label: "Bluetooth",
                            active: isBluetoothEnabled,
                            action: () =>
                              setIsBluetoothEnabled(!isBluetoothEnabled),
                          },
                          {
                            icon: Flashlight,
                            label:
                              language === "Turkish" ? "El Feneri" : "Torch",
                            active: isFlashlightOn,
                            action: () => setIsFlashlightOn(!isFlashlightOn),
                          },
                          {
                            icon: isSilentMode ? BellOff : Bell,
                            label: isSilentMode
                              ? language === "Turkish"
                                ? "Sessiz"
                                : "Silent"
                              : language === "Turkish"
                                ? "Zil Sesi"
                                : "Ringer",
                            active: isSilentMode,
                            action: () => setIsSilentMode(!isSilentMode),
                          },
                          {
                            icon: Plane,
                            label: language === "Turkish" ? "Uçak" : "Airplane",
                            active: isAirplaneMode,
                            action: () => setIsAirplaneMode(!isAirplaneMode),
                          },
                          {
                            icon: Moon,
                            label: "DND",
                            active: isSilentMode,
                            action: () => setIsSilentMode(!isSilentMode),
                          },
                          {
                            icon: Camera,
                            label: language === "Turkish" ? "Kamera" : "Camera",
                            active: false,
                            action: () => {
                              if (handleSetApp)
                                handleSetApp(
                                  apps.find((a) => a.id === "camera") || null,
                                );
                              setIsControlPanelOpen(false);
                            },
                          },
                          {
                            icon: Scissors,
                            label:
                              language === "Turkish"
                                ? "Ekran Alıntısı"
                                : "Screenshot",
                            active: false,
                            action: () => {
                              setIsControlPanelOpen(false);
                              setTimeout(() => {
                                triggerHaptic("heavy");
                                alert(
                                  language === "Turkish"
                                    ? "Ekran görüntüsü Galeriye kaydedildi!"
                                    : "Screenshot saved to Photos!",
                                );
                              }, 400);
                            },
                          },
                          {
                            icon: MapPin,
                            label:
                              language === "Turkish" ? "Konum" : "Location",
                            active: isLocationEnabled,
                            action: () =>
                              setIsLocationEnabled(!isLocationEnabled),
                          },
                          {
                            icon: RefreshCw,
                            label:
                              language === "Turkish" ? "Döndürme" : "Rotation",
                            active: !isRotationLocked,
                            action: () =>
                              setIsRotationLocked(!isRotationLocked),
                          },
                          {
                            icon: Shield,
                            label:
                              language === "Turkish" ? "Göz Koruma" : "Reading",
                            active: isEyeShieldEnabled,
                            action: () =>
                              setIsEyeShieldEnabled(!isEyeShieldEnabled),
                          },
                          {
                            icon: Lock,
                            label:
                              language === "Turkish" ? "Kilit" : "Lock Screen",
                            active: false,
                            action: () => {
                              setIsLocked(true);
                              playSound("lock");
                              setIsControlPanelOpen(false);
                            },
                          },
                          {
                            icon: Compass,
                            label: "NFC",
                            active: isNfcEnabled,
                            action: () => setIsNfcEnabled(!isNfcEnabled),
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center gap-2"
                          >
                            <button
                              onClick={() => {
                                triggerHaptic("medium");
                                item.action();
                              }}
                              className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 transform active:scale-90 ${
                                item.active
                                  ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/35 font-bold"
                                  : "bg-white border-zinc-200 text-zinc-650 hover:bg-zinc-50 text-zinc-600 shadow-sm"
                              }`}
                            >
                              <item.icon size={22} strokeWidth={2.3} />
                            </button>
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wide text-center truncate max-w-[70px] leading-tight select-none">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Close Handlebar */}
                    <div
                      onClick={() => setIsControlPanelOpen(false)}
                      className="flex justify-center pb-6 pt-2 cursor-pointer"
                    >
                      <div className="w-16 h-1.5 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-colors" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Content Area */}
              <div className="relative h-full w-full">
                <AnimatePresence>
                  {isLocked ? (
                    <motion.div
                      key="lockscreen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      onClick={() => {
                        triggerHaptic("light");
                        setShowLockScreenWidgets(true);
                      }}
                      className="absolute inset-0 z-30 flex flex-col items-center justify-between py-16 px-6 overflow-hidden touch-none"
                    >
                      {!isAuthenticating ? (
                        <>
                          {!isSystemDeleting && (
                            <div className="text-center mt-12 w-full flex flex-col items-center">
                              {/* Clock Styles Wrapper with Scale & Translate Position offset */}
                              <div
                                style={{
                                  transform: `scale(${lockScreenClockZoom / 100}) translate(${lockScreenClockXOffset}px, ${lockScreenClockYOffset}px)`,
                                  transformOrigin: "center top",
                                }}
                                className="w-full flex flex-col items-center select-none"
                              >
                                <motion.div
                                  initial={{ y: -20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className={`text-[21px] font-semibold tracking-wide mb-1 ${lockScreenFont}`}
                                  style={{ color: lockScreenColor, opacity: 0.95 }}
                                >
                                  {dateString}
                                </motion.div>

                                {/* 10 Clock Styles */}
                                <div className="w-full flex justify-center items-center mt-1">
                                  {lockScreenClockStyle === 1 && (
                                    /* Style 1: Classic Wepol OS Watch (Old Style) */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className={`mt-1 ${lockScreenFont === "font-display" ? "flex items-center justify-center font-display leading-none mt-2" : `text-[88px] font-bold tracking-tighter leading-none ${lockScreenFont}`}`}
                                      style={{ color: lockScreenColor }}
                                    >
                                      {lockScreenFont === "font-display" ? (
                                        <>
                                          <span className="text-[140px] font-black uppercase leading-none">
                                            {timeString.split(":")[0]}
                                          </span>
                                          <span className="text-[140px] font-black uppercase text-outline ml-1 leading-none">
                                            {timeString.split(":")[1]}
                                          </span>
                                        </>
                                      ) : (
                                        timeString
                                      )}
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 2 && (
                                    /* Style 2: Android Stacked Bold */
                                    <motion.div
                                      initial={{ y: 10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      className={`flex flex-col items-center justify-center font-black leading-[0.8] tracking-tighter uppercase ${lockScreenFont}`}
                                      style={{ color: lockScreenColor }}
                                    >
                                      <span className="text-[100px]">{timeString.split(":")[0]}</span>
                                      <span className="text-[100px]">{timeString.split(":")[1]}</span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 3 && (
                                    /* Style 3: Accent Hours */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className={`text-[82px] font-bold tracking-tighter leading-none flex items-center justify-center ${lockScreenFont}`}
                                    >
                                      <span style={{ color: lockScreenColor }}>
                                        {timeString.split(":")[0]}
                                      </span>
                                      <span className="opacity-45 mx-0.5" style={{ color: lockScreenColor }}>:</span>
                                      <span className="text-white">
                                        {timeString.split(":")[1]}
                                      </span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 4 && (
                                    /* Style 4: Wepol Double Display (Original Outline Minute) */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className={`flex items-center justify-center leading-none ${lockScreenFont}`}
                                      style={{ color: lockScreenColor }}
                                    >
                                      <span className="text-[110px] font-black uppercase">
                                        {timeString.split(":")[0]}
                                      </span>
                                      <span className="text-[110px] font-black uppercase text-outline ml-1">
                                        {timeString.split(":")[1]}
                                      </span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 5 && (
                                    /* Style 5: Compact Modern Minimalist */
                                    <motion.div
                                      initial={{ scale: 0.95, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className={`text-[62px] font-light tracking-widest leading-none py-1 border-y border-white/20 px-4 flex items-center justify-center ${lockScreenFont}`}
                                      style={{ color: lockScreenColor }}
                                    >
                                      <span>{timeString.split(":")[0]}</span>
                                      <span className="mx-2 opacity-50 font-thin text-4xl">|</span>
                                      <span>{timeString.split(":")[1]}</span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 6 && (
                                    /* Style 6: Tech Monospace Terminal */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className="font-mono text-center bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 shadow-inner flex items-center gap-1.5"
                                      style={{ color: lockScreenColor }}
                                    >
                                      <span className="text-zinc-500 font-bold">[</span>
                                      <span className="text-3xl font-extrabold tracking-wide">{timeString.split(":")[0]}</span>
                                      <span className="text-3xl font-extrabold animate-pulse">:</span>
                                      <span className="text-3xl font-extrabold tracking-wide">{timeString.split(":")[1]}</span>
                                      <span className="text-sm opacity-60 ml-1">
                                        {currentTime.getSeconds().toString().padStart(2, '0')}
                                      </span>
                                      <span className="text-zinc-500 font-bold">]</span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 7 && (
                                    /* Style 7: Analog Glass Dial (Digital watch nested in an elegant interface) */
                                    <motion.div
                                      initial={{ scale: 0.85, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className="relative w-44 h-44 rounded-full border border-white/20 bg-white/5 backdrop-blur-lg flex flex-col items-center justify-center p-3 shadow-2xl overflow-hidden"
                                      style={{ borderColor: lockScreenColor + "30" }}
                                    >
                                      {/* Watch Ticks */}
                                      <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_50s_linear_infinite]" />
                                      
                                      {/* Glowing Breathe Ring */}
                                      <div
                                        className="absolute inset-4 rounded-full opacity-10 animate-pulse border-4"
                                        style={{ borderColor: lockScreenColor, boxShadow: `0 0 20px ${lockScreenColor}` }}
                                      />

                                      {/* Digital Time Inside */}
                                      <div className={`z-10 text-2xl font-black tracking-tight ${lockScreenFont}`} style={{ color: lockScreenColor }}>
                                        {timeString}
                                      </div>
                                      
                                      {/* Glowing Seconds Node */}
                                      <div
                                        className="absolute w-2 h-2 rounded-full"
                                        style={{
                                          backgroundColor: lockScreenColor,
                                          transform: `rotate(${currentTime.getSeconds() * 6}deg) translateY(-54px)`,
                                          boxShadow: `0 0 10px ${lockScreenColor}`
                                        }}
                                      />
                                      <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 text-white mt-1">
                                        {currentTime.toLocaleDateString("en", { month: "short", day: "numeric" })}
                                      </span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 8 && (
                                    /* Style 8: Ethereal Neon Glow */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className={`text-[82px] font-black tracking-normal leading-none ${lockScreenFont}`}
                                      style={{
                                        color: lockScreenColor,
                                        textShadow: `0 0 15px ${lockScreenColor}90, 0 0 30px ${lockScreenColor}30`,
                                      }}
                                    >
                                      {timeString}
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 9 && (
                                    /* Style 9: DualLine Accent Split */
                                    <motion.div
                                      initial={{ y: -10, opacity: 0 }}
                                      animate={{ y: 0, opacity: 1 }}
                                      className={`flex flex-col items-center justify-center py-2 px-5 rounded-2xl bg-black/15 backdrop-blur-sm border border-white/5 ${lockScreenFont}`}
                                    >
                                      <span className="text-[54px] font-bold leading-none tracking-tight text-white mb-1">
                                        {timeString.split(":")[0]}
                                      </span>
                                      <div className="w-12 h-1 rounded-full my-1" style={{ backgroundColor: lockScreenColor }} />
                                      <span className="text-[54px] font-bold leading-none tracking-tight text-white/70 mt-1">
                                        {timeString.split(":")[1]}
                                      </span>
                                    </motion.div>
                                  )}

                                  {lockScreenClockStyle === 10 && (
                                    /* Style 10: Futuristic Cyber Tech */
                                    <motion.div
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      className="flex flex-col items-center justify-center font-mono tracking-tight bg-zinc-950/85 border border-zinc-800 text-green-400 p-3 rounded-xl shadow-xl w-56 relative overflow-hidden"
                                      style={{ color: lockScreenColor, borderColor: lockScreenColor + "30" }}
                                    >
                                      <div className="absolute top-1 left-2 text-[7px] font-bold opacity-30 tracking-widest">SYSTEM: ACTIVE</div>
                                      <div className="absolute top-1 right-2 text-[7px] font-bold opacity-30">UTC+03</div>
                                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 absolute top-5" />
                                      
                                      <div className="text-[42px] font-black tracking-normal leading-none mt-3 mb-1 flex items-baseline">
                                        <span>{timeString}</span>
                                        <span className="text-[10px] font-bold opacity-75 ml-1">
                                          {currentTime.getSeconds().toString().padStart(2, '0')}s
                                        </span>
                                      </div>
                                      
                                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 my-1" />
                                      <div className="text-[8px] font-bold uppercase tracking-widest opacity-65 flex items-center gap-1 mt-0.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" style={{ backgroundColor: lockScreenColor }} />
                                        SECURE PROTOCOL RUNNING
                                      </div>
                                    </motion.div>
                                  )}
                                </div>
                              </div>

                            </div>
                          )}

                          <div className="w-full px-6 flex flex-col items-center pb-8 border-none">
                            {isFingerprintEnabled && (
                              <motion.button
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                onClick={() => {
                                  unlockSystem();
                                }}
                                className="mb-8 flex items-center justify-center text-white opacity-80 cursor-pointer active:scale-95 transition-transform"
                              >
                                <Fingerprint size={64} strokeWidth={1} />
                              </motion.button>
                            )}
                            <motion.div
                              onClick={handleUnlock}
                              className="flex flex-col items-center gap-2 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ArrowUp size={24} className="text-white/50" />
                            </motion.div>
                          </div>
                        </>
                      ) : (
                        <motion.div
                          initial={{ y: 844 }}
                          animate={{ y: 0 }}
                          className="flex flex-col items-center w-full h-full justify-center gap-12"
                        >
                          {isPatternEnabled && pattern.length > 0 ? (
                            <div className="flex flex-col items-center gap-12">
                              <div className="text-center space-y-2">
                                <h2 className="text-xl font-black text-white uppercase tracking-widest leading-none">
                                  Draw Pattern
                                </h2>
                                <p className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                                  Enter pattern to unlock system
                                </p>
                              </div>
                              <div className="p-8 rounded-[3rem]">
                                <PatternLock
                                  error={securityError}
                                  onComplete={(p) => {
                                    if (
                                      JSON.stringify(p) ===
                                      JSON.stringify(pattern)
                                    ) {
                                      triggerHaptic("heavy");
                                      setIsLocked(false);
                                      setIsAuthenticating(false);
                                      setNotifications((prev) => [
                                        {
                                          id: Date.now(),
                                          app: "System",
                                          title: "Unlocked",
                                          text: "Welcome back to WePol OS!",
                                          time: "Now",
                                          icon: "Shield",
                                          color: "bg-blue-600",
                                        },
                                        ...prev,
                                      ]);
                                    } else {
                                      setSecurityError(true);
                                      triggerHaptic("heavy");
                                      setTimeout(
                                        () => setSecurityError(false),
                                        1000,
                                      );
                                    }
                                  }}
                                />
                              </div>
                              <div className="flex flex-col items-center gap-4">
                                {isPasscodeEnabled && (
                                  <button
                                    onClick={() => {
                                      triggerHaptic("medium");
                                      // Logic to toggle to PIN if needed, but for now simple cancel
                                      setIsAuthenticating(false);
                                    }}
                                    className="text-white/40 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                  >
                                    Use PIN Code
                                  </button>
                                )}
                                <button
                                  onClick={() => setIsAuthenticating(false)}
                                  className="text-white/20 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="text-center space-y-4">
                                <h2 className="text-xl font-semibold text-white/90">
                                  Enter Passcode
                                </h2>
                                <div className="flex gap-4 justify-center">
                                  {[0, 1, 2, 3].map((i) => (
                                    <div
                                      key={i}
                                      className={`h-3 w-3 rounded-full border border-white/50 transition-all ${passcodeEntry.length > i ? "bg-white" : "bg-transparent"}`}
                                    />
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                  <motion.button
                                    key={num}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                      triggerHaptic("light");
                                      if (passcodeEntry.length < 4) {
                                        const newEntry = passcodeEntry + num;
                                        setPasscodeEntry(newEntry);
                                        if (newEntry.length === 4) {
                                          if (newEntry === passcode) {
                                            unlockSystem();
                                          } else {
                                            triggerHaptic("medium");
                                            setTimeout(
                                              () => setPasscodeEntry(""),
                                              400,
                                            );
                                          }
                                        }
                                      }
                                    }}
                                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-semibold border border-white/5 active:bg-white/20"
                                  >
                                    {num}
                                  </motion.button>
                                ))}
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => {
                                    triggerHaptic("light");
                                    if (passcodeEntry.length < 4) {
                                      const newEntry = passcodeEntry + "0";
                                      setPasscodeEntry(newEntry);
                                      if (newEntry.length === 4) {
                                        if (newEntry === passcode) {
                                          unlockSystem();
                                        } else {
                                          triggerHaptic("medium");
                                          setTimeout(
                                            () => setPasscodeEntry(""),
                                            400,
                                          );
                                        }
                                      }
                                    }
                                  }}
                                  className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-semibold border border-white/5 active:bg-white/20"
                                >
                                  0
                                </motion.button>
                                {isFingerprintEnabled ? (
                                  <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                      unlockSystem();
                                    }}
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-white active:bg-white/10 transition-colors"
                                  >
                                    <Fingerprint size={36} strokeWidth={1.5} />
                                  </motion.button>
                                ) : (
                                  <button
                                    onClick={() => setIsAuthenticating(false)}
                                    className="text-white/60 font-semibold text-xs py-4"
                                  >
                                    Cancel
                                  </button>
                                )}
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="homescreen"
                      initial={{ scale: 1, opacity: activeApp ? 0.45 : 1 }}
                      animate={{
                        scale: 1,
                        opacity: activeApp ? 0.45 : 1,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      onClick={() => {
                        if (isEditMode) setIsEditMode(false);
                      }}
                      onPointerDown={handleHomePointerDown}
                      onPointerUp={handleHomePointerUp}
                      onTouchStart={handleHomeTouchStart}
                      onTouchEnd={handleHomeTouchEnd}
                      className="absolute inset-0 z-20 flex flex-col justify-between pt-24 pb-12 px-6"
                    >
                      {(() => {
                        const displayedApps =
                          currentHomePage === 0 ? apps :
                          currentHomePage === 1 ? appsPage2 :
                          currentHomePage === 2 ? appsPage3 :
                          appsPage4;

                        const setDisplayedApps = (newApps: AppInfo[]) => {
                          if (currentHomePage === 0) setApps(newApps);
                          else if (currentHomePage === 1) setAppsPage2(newApps);
                          else if (currentHomePage === 2) setAppsPage3(newApps);
                          else if (currentHomePage === 3) setAppsPage4(newApps);
                        };

                        return (
                          <>
                            {/* Apps Grid */}
                            <div className="relative flex-1 overflow-visible">
                              {isSafeMode && (
                                <div className="absolute -top-12 left-1/2 -track-x-1/2 whitespace-nowrap bg-red-600/90 text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter animate-bounce z-50">
                                  Restricted Mode - Reset via Accessibility
                                </div>
                              )}
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={currentHomePage}
                                  initial={{ opacity: 0, x: pointerStartX.current !== null ? (pointerStartX.current > window.innerWidth / 2 ? 20 : -20) : 15 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: pointerStartX.current !== null ? (pointerStartX.current > window.innerWidth / 2 ? -20 : 20) : -15 }}
                                  transition={{ duration: 0.22, ease: "easeOut" }}
                                  className="w-full h-full"
                                >
                                  <Reorder.Group
                                    axis="y"
                                    values={displayedApps}
                                    onReorder={setDisplayedApps}
                                    className="grid gap-x-4 gap-y-8"
                                    style={{
                                      gridTemplateColumns: isSimpleMode
                                        ? "repeat(3, minmax(0, 1fr))"
                                        : `repeat(${gridSize.cols}, minmax(0, 1fr))`,
                                    }}
                                  >
                                    {(isSimpleMode ? displayedApps.slice(0, 15) : displayedApps).map((app) => {
                                      const isDisabled =
                                        isSafeMode && app.id !== "settings";
                                      return (
                                        <Reorder.Item
                                          key={app.id}
                                          value={app}
                                          whileDrag={{ scale: 1.1, zIndex: 50 }}
                                          className={`relative ${isDisabled ? "pointer-events-none" : ""}`}
                                        >
                                          <motion.button
                                            id={`app-icon-${app.id}`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            onContextMenu={(e) => {
                                              e.preventDefault();
                                              triggerHaptic("heavy");
                                              setContextMenuAppId(app.id);
                                            }}
                                            onPointerDown={() => {
                                              const timer = setTimeout(() => {
                                                if (!isEditMode && !isDisabled) {
                                                  triggerHaptic("heavy");
                                                  setContextMenuAppId(app.id);
                                                }
                                              }, 600);
                                              const cleanup = () => clearTimeout(timer);
                                              window.addEventListener(
                                                "pointerup",
                                                cleanup,
                                                { once: true },
                                              );
                                              window.addEventListener(
                                                "pointermove",
                                                cleanup,
                                                { once: true },
                                              );
                                            }}
                                            onClick={() => {
                                              if (isEditMode) {
                                                setCustomizingAppId(app.id);
                                                triggerHaptic("medium");
                                              } else if (app.isFolder) {
                                                setActiveFolder(app);
                                                triggerHaptic("light");
                                              } else {
                                                handleSetApp(app);
                                              }
                                            }}
                                            className={`flex flex-col items-center gap-1.5 w-full transition-all ${isDisabled ? "opacity-20 grayscale" : "opacity-100"}`}
                                          >
                                            <motion.div
                                              animate={
                                                isEditMode
                                                  ? {
                                                      rotate: [0, -1, 1, 0],
                                                      y: [0, -1.5, 0],
                                                      scale: [1, 1.01, 1],
                                                      transition: {
                                                        repeat: Infinity,
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                      },
                                                    }
                                                  : { rotate: 0, y: 0, scale: 1 }
                                              }
                                              className={`flex items-center justify-center transition-all duration-300 ${isSafeMode ? "bg-zinc-900 border border-zinc-800 grayscale" : getIconStyle(app.color)} relative overflow-hidden group-hover:scale-105`}
                                              style={{
                                                width: `${(isSimpleMode ? 72 : 60) * appIconSize}px`,
                                                height: `${(isSimpleMode ? 72 : 60) * appIconSize}px`,
                                                borderRadius: getIconBorderRadius(isSimpleMode ? 22 : 18, appIconSize),
                                              }}
                                            >
                                              <AppIcon
                                                app={app}
                                                size={
                                                  ([
                                                    "themes",
                                                    "safari",
                                                    "playstore",
                                                    "terminal",
                                                  ].includes(app.id)
                                                    ? (isSimpleMode ? 72 : 60)
                                                    : (isSimpleMode ? 38 : 32)) * appIconSize
                                                }
                                                isSafeMode={isSafeMode && !isDisabled}
                                              />
                                              {isDisabled && !isSafeMode && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                  <Zap
                                                    size={16}
                                                    className="text-zinc-500 fill-zinc-500"
                                                  />
                                                </div>
                                              )}
                                              {isSafeMode && (
                                                <div className="text-[8px] font-mono text-zinc-600">
                                                  NULL
                                                </div>
                                              )}
                                              {isEditMode && (
                                                <>
                                                  <div className="absolute inset-0 bg-black/5 rounded-[14px] pointer-events-none" />
                                                  <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="absolute -top-2 -left-2 w-5 h-5 bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-md border border-white/20"
                                                  >
                                                    <span className="text-[12px] font-bold">
                                                      −
                                                    </span>
                                                  </motion.div>
                                                </>
                                              )}
                                            </motion.div>
                                            {!isSafeMode && showAppNames && (
                                              <span className={`${isSimpleMode ? "text-[14px] font-bold" : "text-[11px] font-semibold"} text-white/95 drop-shadow-md truncate w-full text-center transition-all`}>
                                                {t(app.id, app.name)}
                                              </span>
                                            )}
                                          </motion.button>

                                          <AnimatePresence>
                                            {contextMenuAppId === app.id && (
                                              <>
                                                <motion.div
                                                  initial={{ opacity: 0 }}
                                                  animate={{ opacity: 1 }}
                                                  exit={{ opacity: 0 }}
                                                  className="fixed inset-0 z-[1000] bg-black/20 backdrop-blur-sm"
                                                  onClick={() =>
                                                    setContextMenuAppId(null)
                                                  }
                                                />
                                                <motion.div
                                                  initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                    y: -10,
                                                  }}
                                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                                  exit={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                    y: -10,
                                                  }}
                                                  className="absolute left-1/2 -translate-x-1/2 -top-32 z-[1001] w-44 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-[28px] shadow-2xl overflow-hidden py-2"
                                                >
                                                  {[
                                                    {
                                                      label:
                                                        language === "Turkish"
                                                          ? "Düzenle"
                                                          : "Edit Home Screen",
                                                      icon: Edit2,
                                                      action: () => setIsEditMode(true),
                                                    },
                                                    {
                                                      label:
                                                        language === "Turkish"
                                                          ? "Uygulama Bilgisi"
                                                          : "App Info",
                                                      icon: Info,
                                                      action: () =>
                                                        setAboutDeviceOpen(true),
                                                    },
                                                    {
                                                      label:
                                                        language === "Turkish"
                                                          ? "Uygulamayı Paylaş"
                                                          : "Share App",
                                                      icon: Share2,
                                                      action: () =>
                                                        triggerHaptic("medium"),
                                                    },
                                                    {
                                                      label:
                                                        language === "Turkish"
                                                          ? "Kaldır"
                                                          : "Remove App",
                                                      icon: Trash2,
                                                      action: () =>
                                                        triggerHaptic("heavy"),
                                                      color: "text-red-500",
                                                    },
                                                  ].map((menuItem, idx) => (
                                                    <button
                                                      key={idx}
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        menuItem.action();
                                                        setContextMenuAppId(null);
                                                      }}
                                                      className={`w-full px-4 py-3 text-left flex items-center justify-between text-[12px] font-bold border-b border-zinc-100 last:border-0 active:bg-zinc-100 transition-colors ${menuItem.color || "text-zinc-800"}`}
                                                    >
                                                      <span>{menuItem.label}</span>
                                                      {menuItem.icon && (
                                                        <menuItem.icon
                                                          size={14}
                                                          className="opacity-50"
                                                        />
                                                      )}
                                                    </button>
                                                  ))}
                                                </motion.div>
                                              </>
                                            )}
                                          </AnimatePresence>
                                        </Reorder.Item>
                                      );
                                    })}
                                  </Reorder.Group>
                                </motion.div>
                              </AnimatePresence>
                            </div>

                            {/* Pagination Dots */}
                            <div className="flex justify-center items-center gap-1.5 my-2.5 z-30">
                              {[0, 1, 2, 3].map((idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    triggerHaptic("light");
                                    setCurrentHomePage(idx);
                                  }}
                                  className={`rounded-full transition-all duration-300 ${
                                    currentHomePage === idx
                                      ? "bg-white w-1.5 h-1.5 shadow-md shadow-black/10"
                                      : "bg-white/40 hover:bg-white/60 w-1 h-1"
                                  }`}
                                  aria-label={`Page ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        );
                      })()}

                      {/* Swipe up indicator for App Drawer */}
                      {appDrawerMode === "enabled" && (
                        <div className="flex flex-col items-center justify-center -mb-1 mt-1">
                          <button
                            onClick={() => {
                              setIsAppDrawerOpen(true);
                              triggerHaptic("medium");
                            }}
                            className="flex flex-col items-center gap-0.5 group cursor-pointer py-1 px-4 z-30 outline-none"
                          >
                            <motion.div
                              animate={{ y: [0, -3, 0] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                              <ChevronDown size={14} className="text-white/60 rotate-180 group-hover:text-white transition-colors" />
                            </motion.div>
                            <span className="text-[9px] font-bold text-white/50 tracking-wider uppercase group-hover:text-white/80 transition-colors">
                              {language === "Turkish" ? "Uygulamalar" : "Apps"}
                            </span>
                          </button>
                        </div>
                      )}

                      {/* Bottom Dock */}
                      {isDockBarEnabled && (
                        <div className="mx-auto mb-4 w-[92%] max-w-[340px] z-20">
                        <div
                          className={`flex items-center justify-between bg-white/20 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/25 dark:border-zinc-800/50 p-3 px-4 transition-all shadow-xl rounded-[28px] ${isSafeMode ? "grayscale opacity-50" : ""}`}
                        >
                          {dockApps.map((app) => (
                            <motion.button
                              id={`app-icon-${app.id}`}
                              key={app.id}
                              disabled={isSafeMode}
                              className="snap-center relative flex flex-col items-center gap-1.5 flex-shrink-0"
                              whileHover={!isSafeMode ? { scale: 1.12 } : {}}
                              whileTap={!isSafeMode ? { scale: 0.9 } : {}}
                              onClick={() => {
                                if (isEditMode) {
                                  setCustomizingAppId(app.id);
                                  triggerHaptic("medium");
                                } else {
                                  handleSetApp(app);
                                }
                              }}
                              onContextMenu={(e) => {
                                e.preventDefault();
                                if (!isSafeMode) setIsEditMode(true);
                              }}
                            >
                              <motion.div
                                animate={
                                  isEditMode
                                    ? {
                                        rotate: [0, 1.2, -0.8, 0],
                                        y: [0, -1.5, 0],
                                        scale: [1, 1.01, 1],
                                        transition: {
                                          repeat: Infinity,
                                          duration: 0.35,
                                          ease: "easeInOut",
                                          delay: 0.1,
                                        },
                                      }
                                    : { rotate: 0, y: 0, scale: 1 }
                                }
                                className={`flex items-center justify-center transition-all duration-300 ${isSafeMode ? "bg-zinc-900 border border-zinc-800 grayscale" : getIconStyle(app.color)} relative overflow-hidden flex-shrink-0 group-hover:scale-105 shadow-xl`}
                                style={{
                                  width: `${60 * appIconSize}px`,
                                  height: `${60 * appIconSize}px`,
                                  borderRadius: getIconBorderRadius(18, appIconSize),
                                }}
                              >
                                <AppIcon
                                  app={app}
                                  size={
                                    ([
                                      "themes",
                                      "safari",
                                      "playstore",
                                      "terminal",
                                    ].includes(app.id)
                                      ? 60
                                      : 32) * appIconSize
                                  }
                                  isSafeMode={isSafeMode}
                                />
                                {isSafeMode && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Zap size={16} className="text-zinc-700" />
                                  </div>
                                )}
                                {isEditMode && (
                                  <>
                                    <div className="absolute inset-0 bg-black/5 rounded-[14px] pointer-events-none" />
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="absolute -top-2 -left-2 w-5 h-5 bg-zinc-800 text-white rounded-full flex items-center justify-center shadow-md border border-white/20"
                                    >
                                      <span className="text-[12px] font-bold">
                                        −
                                      </span>
                                    </motion.div>
                                  </>
                                )}
                              </motion.div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      )}

                      {/* Searchable Alphabetical App Drawer Panel */}
                      <AnimatePresence>
                        {isAppDrawerOpen && appDrawerMode === "enabled" && (
                          <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 32, stiffness: 240 }}
                            drag="y"
                            dragDirectionLock
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0.1, bottom: 0.8 }}
                            onDragEnd={(e, info) => {
                              if (info.offset.y > 100) {
                                setIsAppDrawerOpen(false);
                                setDrawerSearchQuery("");
                                triggerHaptic("medium");
                              }
                            }}
                            className="absolute inset-x-0 bottom-0 top-[8%] z-50 rounded-t-[36px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-2xl border-t border-zinc-200/60 dark:border-zinc-805 text-zinc-800 dark:text-zinc-100 flex flex-col overflow-hidden"
                          >
                            {/* Top drag handle indicator */}
                            <div className="flex justify-center py-3 cursor-grab active:cursor-grabbing">
                              <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>

                            {/* Header containing Title and Close button */}
                            <div className="px-6 pb-2 flex items-center justify-between">
                              <h3 className="font-extrabold text-lg tracking-tight text-zinc-900 dark:text-white">
                                {language === "Turkish" ? "Tüm Uygulamalar" : "All Applications"}
                              </h3>
                              <button
                                onClick={() => {
                                  setIsAppDrawerOpen(false);
                                  setDrawerSearchQuery("");
                                  triggerHaptic("light");
                                }}
                                className="px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-xs font-bold text-zinc-500 dark:text-zinc-400"
                              >
                                {language === "Turkish" ? "Kapat" : "Close"}
                              </button>
                            </div>

                            {/* Search Input Box */}
                            <div className="px-6 py-2">
                              <div className="relative flex items-center bg-zinc-100 dark:bg-zinc-800/80 rounded-2xl px-3.5 py-3 border border-zinc-200/10 shadow-inner">
                                <Search size={16} className="text-zinc-400 mr-2.5 flex-shrink-0" />
                                <input
                                  type="text"
                                  value={drawerSearchQuery}
                                  onChange={(e) => setDrawerSearchQuery(e.target.value)}
                                  placeholder={
                                    language === "Turkish"
                                      ? "Uygulamalarda ara..."
                                      : "Search apps..."
                                  }
                                  className="bg-transparent text-sm w-full focus:outline-none text-zinc-800 dark:text-white placeholder-zinc-400"
                                />
                                {drawerSearchQuery && (
                                  <button
                                    onClick={() => {
                                      setDrawerSearchQuery("");
                                      triggerHaptic("light");
                                    }}
                                    className="p-1 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:opacity-85"
                                  >
                                    <X size={12} className="text-zinc-600 dark:text-zinc-300" />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Content Section (List + Scroll Indexer) */}
                            <div className="flex-1 flex overflow-hidden relative">
                              {/* Alphabetical list content */}
                              <div className="flex-1 overflow-y-auto px-6 py-3 no-scrollbar space-y-6 pb-24">
                                {(() => {
                                  // Deduplicate unique apps
                                  const allInstalledApps = [
                                    ...apps,
                                    ...appsPage2,
                                    ...appsPage3,
                                    ...appsPage4,
                                    ...dockApps,
                                  ].reduce<AppInfo[]>((acc, app) => {
                                    if (app.isFolder && app.apps) {
                                      return [...acc, ...app.apps];
                                    }
                                    return [...acc, app];
                                  }, []).filter(
                                    (app, index, self) =>
                                      self.findIndex((a) => a.id === app.id) === index
                                  );

                                  // Sort alphabetically using the safe translation helper t
                                  const sorted = [...allInstalledApps].sort((a, b) =>
                                    t(a.id, a.name).localeCompare(t(b.id, b.name))
                                  );

                                  // Filter by search query
                                  const filtered = sorted.filter((app) =>
                                    t(app.id, app.name)
                                      .toLowerCase()
                                      .includes(drawerSearchQuery.toLowerCase())
                                  );

                                  if (filtered.length === 0) {
                                    return (
                                      <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                                        <AlertTriangle size={32} className="stroke-zinc-300 mb-2 animate-bounce" />
                                        <span className="text-xs font-semibold">
                                          {language === "Turkish"
                                            ? "Sonuç bulunamadı"
                                            : "No applications found"}
                                        </span>
                                      </div>
                                    );
                                  }

                                  // If searching, just show a plain flat list
                                  if (drawerSearchQuery !== "") {
                                    return (
                                      <div className="space-y-1">
                                        {filtered.map((app) => (
                                          <button
                                            key={app.id}
                                            onClick={() => {
                                              handleSetApp(app);
                                              setIsAppDrawerOpen(false);
                                              setDrawerSearchQuery("");
                                              triggerHaptic("medium");
                                            }}
                                            className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors text-left group"
                                          >
                                            <div className="flex items-center gap-4">
                                              <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center text-white ${getIconStyle(app.color)} shadow-sm group-hover:scale-105 transition-transform`}>
                                                <AppIcon app={app} size={22} isSafeMode={isSafeMode} />
                                              </div>
                                              <div className="flex flex-col">
                                                <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                  {t(app.id, app.name)}
                                                </span>
                                                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                                                  {app.id === "settings" ? "System" : "Application"}
                                                </span>
                                              </div>
                                            </div>
                                            <ChevronRight size={16} className="text-zinc-300 dark:text-zinc-600 group-hover:translate-x-0.5 transition-transform" />
                                          </button>
                                        ))}
                                      </div>
                                    );
                                  }

                                  // Group them by letter
                                  const grouped: Record<string, AppInfo[]> = {};
                                  sorted.forEach((app) => {
                                    const name = t(app.id, app.name);
                                    const letter = name.charAt(0).toUpperCase();
                                    const groupKey = /[A-Z]/.test(letter) ? letter : "#";
                                    if (!grouped[groupKey]) {
                                      grouped[groupKey] = [];
                                    }
                                    grouped[groupKey].push(app);
                                  });

                                  const keys = Object.keys(grouped).sort();

                                  return (
                                    <div className="space-y-6">
                                      {keys.map((letter) => (
                                        <div
                                          key={letter}
                                          id={`drawer-sec-${letter}`}
                                          className="space-y-2 scroll-mt-4"
                                        >
                                          <div className="text-sm font-black text-blue-600 dark:text-blue-400 border-b border-zinc-100 dark:border-zinc-800/50 pb-1 px-1">
                                            {letter}
                                          </div>
                                          <div className="grid grid-cols-1 gap-1">
                                            {grouped[letter].map((app) => (
                                              <button
                                                key={app.id}
                                                onClick={() => {
                                                  handleSetApp(app);
                                                  setIsAppDrawerOpen(false);
                                                  setDrawerSearchQuery("");
                                                  triggerHaptic("medium");
                                                }}
                                                className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors text-left group"
                                              >
                                                <div className="flex items-center gap-4">
                                                  <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center text-white ${getIconStyle(app.color)} shadow-sm group-hover:scale-105 transition-transform`}>
                                                    <AppIcon app={app} size={22} isSafeMode={isSafeMode} />
                                                  </div>
                                                  <div className="flex flex-col">
                                                    <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                      {t(app.id, app.name)}
                                                    </span>
                                                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                                                      {app.id === "settings" ? "System" : "Application"}
                                                    </span>
                                                  </div>
                                                </div>
                                                <ChevronRight size={16} className="text-zinc-300 dark:text-zinc-600 group-hover:translate-x-0.5 transition-transform" />
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  );
                                })()}
                              </div>

                              {/* Quick scroll index sidebar on the right */}
                              {drawerSearchQuery === "" && (
                                <div className="w-8 flex flex-col items-center justify-center py-4 text-[9px] font-black text-zinc-400 dark:text-zinc-500 border-l border-zinc-100 dark:border-zinc-800/40 bg-zinc-50/50 dark:bg-zinc-800/10">
                                  {(() => {
                                    const allInstalledApps = [
                                      ...apps,
                                      ...appsPage2,
                                      ...appsPage3,
                                      ...appsPage4,
                                      ...dockApps,
                                    ].reduce<AppInfo[]>((acc, app) => {
                                      if (app.isFolder && app.apps) {
                                        return [...acc, ...app.apps];
                                      }
                                      return [...acc, app];
                                    }, []).filter(
                                      (app, index, self) =>
                                        self.findIndex((a) => a.id === app.id) === index
                                    );

                                    const sorted = [...allInstalledApps].sort((a, b) =>
                                      t(a.id, a.name).localeCompare(t(b.id, b.name))
                                    );

                                    const grouped: Record<string, boolean> = {};
                                    sorted.forEach((app) => {
                                      const name = t(app.id, app.name);
                                      const letter = name.charAt(0).toUpperCase();
                                      const groupKey = /[A-Z]/.test(letter) ? letter : "#";
                                      grouped[groupKey] = true;
                                    });

                                    const keys = Object.keys(grouped).sort();

                                    return keys.map((letter) => (
                                      <button
                                        key={letter}
                                        onClick={() => {
                                          const element = document.getElementById(`drawer-sec-${letter}`);
                                          if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                            triggerHaptic("light");
                                          }
                                        }}
                                        className="py-1 px-2 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-125 transition-all outline-none"
                                      >
                                        {letter}
                                      </button>
                                    ));
                                  })()}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* App Customization Overlay */}
                <AnimatePresence>
                  {customizingAppId && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
                      onClick={() => setCustomizingAppId(null)}
                    >
                      <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="w-full max-w-sm bg-white rounded-[40px] p-8 shadow-2xl space-y-8"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="flex flex-col items-center gap-2">
                            <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                              Customize Icon
                            </h3>
                            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                              {apps.find((a) => a.id === customizingAppId)
                                ?.name ||
                                dockApps.find((a) => a.id === customizingAppId)
                                  ?.name}
                            </p>
                          </div>
                          {(() => {
                            const app =
                              apps.find((a) => a.id === customizingAppId) ||
                              dockApps.find((a) => a.id === customizingAppId);
                            if (!app) return null;
                            return (
                              <div
                                className={`h-24 w-24 rounded-[22px] ${app.color} shadow-xl ring-4 ring-black/5 flex items-center justify-center transition-all duration-300 relative`}
                              >
                                <AppIcon app={app} size={48} />
                                {/* Subtle overlay effect during customization */}
                                <div className="absolute inset-0 rounded-[22px] bg-black/10 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <Palette
                                    size={24}
                                    className="text-white/80"
                                  />
                                </div>
                              </div>
                            );
                          })()}
                        </div>

                        <div className="space-y-4">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pl-1">
                            Background Color
                          </span>
                          <div className="grid grid-cols-5 gap-3">
                            {ICON_COLORS.map((colorClass) => {
                              const app =
                                apps.find((a) => a.id === customizingAppId) ||
                                dockApps.find((a) => a.id === customizingAppId);
                              const isSelected = app?.color === colorClass;
                              return (
                                <button
                                  key={`color-opt-${colorClass}`}
                                  onClick={() => {
                                    triggerHaptic("light");
                                    updateAppColor(
                                      customizingAppId,
                                      colorClass,
                                    );
                                  }}
                                  className={`h-9 w-9 rounded-full ${colorClass.split(" ")[0]} border-2 transition-all flex items-center justify-center ${isSelected ? "border-zinc-900 scale-110 shadow-md" : "border-black/5 hover:scale-105"}`}
                                >
                                  {isSelected && (
                                    <Check
                                      size={16}
                                      className={
                                        colorClass.includes("text-black") ||
                                        colorClass.includes("bg-white")
                                          ? "text-zinc-900"
                                          : "text-white"
                                      }
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <button
                          onClick={() => setCustomizingAppId(null)}
                          className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all text-sm uppercase tracking-widest"
                        >
                          Done
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active App Window Overlay */}
                <AnimatePresence>
                  {activeApp && (
                    <motion.div
                      initial={{
                        scale: 0.08,
                        opacity: 0,
                        borderRadius: 32,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        borderRadius: 0,
                      }}
                      exit={{
                        scale: 0.08,
                        opacity: 0,
                        borderRadius: 32,
                      }}
                      transition={{
                        type: "tween",
                        ease: [0.16, 1, 0.3, 1],
                        duration: 0.36 / animationSpeed,
                      }}
                      style={{
                        transformOrigin: launchOrigin ? `${launchOrigin.x}px ${launchOrigin.y}px` : "195px 720px",
                      }}
                      className={`absolute inset-0 z-50 flex flex-col bg-slate-50 text-black shadow-2xl overflow-hidden ${navStyle === "buttons" ? "pb-14" : "pb-8"}`}
                    >
                      {/* Floating Universal Return/Back Button */}
                      <button
                        onClick={() => {
                          if (activeApp.id === "settings") {
                            if (isAndroid17EasterEggOpen) { setIsAndroid17EasterEggOpen(false); triggerHaptic("light"); return; }
                            if (isWepolAiOpen) { setIsWepolAiOpen(false); triggerHaptic("light"); return; }
                            if (isSettingPasscode) { setIsSettingPasscode(false); triggerHaptic("light"); return; }
                            if (soundSettingsOpen) { setSoundSettingsOpen(false); triggerHaptic("light"); return; }
                            if (dynamicIslandSettingsOpen) { setDynamicIslandSettingsOpen(false); triggerHaptic("light"); return; }
                            if (appearanceSettingsOpen) { setAppearanceSettingsOpen(false); triggerHaptic("light"); return; }
                            if (wallpaperSettingsOpen) { setWallpaperSettingsOpen(false); setHomeScreenSettingsOpen(true); triggerHaptic("light"); return; }
                            if (selectedAppInfo) { setSelectedAppInfo(null); triggerHaptic("light"); return; }
                            if (appsSettingsOpen) { setAppsSettingsOpen(false); triggerHaptic("light"); return; }
                            if (aboutDeviceOpen) { setAboutDeviceOpen(false); triggerHaptic("light"); return; }
                            if (homeScreenSettingsOpen) { setHomeScreenSettingsOpen(false); triggerHaptic("light"); return; }
                            if (internetSettingsOpen) { setInternetSettingsOpen(false); triggerHaptic("light"); return; }
                            if (mobileDataSettingsOpen) { setMobileDataSettingsOpen(false); triggerHaptic("light"); return; }
                            if (bluetoothSettingsOpen) { setBluetoothSettingsOpen(false); triggerHaptic("light"); return; }
                            if (screenSettingsOpen) { setScreenSettingsOpen(false); triggerHaptic("light"); return; }
                            if (animationSettingsOpen) { setAnimationSettingsOpen(false); triggerHaptic("light"); return; }
                            if (batterySettingsOpen) { setBatterySettingsOpen(false); triggerHaptic("light"); return; }
                            if (securitySettingsOpen) { setSecuritySettingsOpen(false); triggerHaptic("light"); return; }
                            if (accessibilitySettingsOpen) { setAccessibilitySettingsOpen(false); triggerHaptic("light"); return; }
                            if (lockScreenSettingsOpen) { setLockScreenSettingsOpen(false); triggerHaptic("light"); return; }
                            if (moreSettingsOpen) { setMoreSettingsOpen(false); triggerHaptic("light"); return; }
                          }
                          setActiveApp(null);
                          setAboutDeviceOpen(false);
                          setIsAndroid17EasterEggOpen(false);
                          setHomeScreenSettingsOpen(false);
                          setInternetSettingsOpen(false);
                          setMobileDataSettingsOpen(false);
                          setBluetoothSettingsOpen(false);
                          setScreenSettingsOpen(false);
                          setAnimationSettingsOpen(false);
                          setBatterySettingsOpen(false);
                          setSecuritySettingsOpen(false);
                          setSoundSettingsOpen(false);
                          setAppearanceSettingsOpen(false);
                          setLockScreenSettingsOpen(false);
                          setIsSettingPasscode(false);
                          setAppsSettingsOpen(false);
                          setSelectedAppInfo(null);
                          triggerHaptic("medium");
                        }}
                        className="absolute top-8 left-6 z-[9999] h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition-all shadow-[0_4px_10px_rgba(59,130,246,0.45)] border border-blue-400"
                        title="Return"
                      >
                        <ArrowLeft size={14} strokeWidth={3} />
                      </button>

                      {/* Premium Full-Screen Splash Overlay */}
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{
                          duration: 0.28 * (1 / animationSpeed),
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`absolute inset-0 z-[60] pointer-events-none flex flex-col items-center justify-center transition-colors duration-300 ${activeApp.color}`}
                      >
                        <motion.div
                          initial={{ scale: 0.7, opacity: 0.1 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0.1 }}
                          transition={{
                            type: "tween",
                            ease: [0.16, 1, 0.3, 1],
                            duration: 0.32 / animationSpeed,
                          }}
                          className="flex flex-col items-center gap-2.5 text-center"
                        >
                          <div className="p-2.5 bg-white/20 rounded-[16px] shadow-sm border border-white/10 flex items-center justify-center">
                            <AppIcon app={activeApp} size={28} />
                          </div>
                          <span className={`text-sm font-black tracking-wider uppercase drop-shadow-sm ${activeApp.color.includes("text-zinc-900") || activeApp.color.includes("bg-white") ? "text-zinc-800" : "text-white"}`}>
                            {t(activeApp.id, activeApp.name)}
                          </span>
                        </motion.div>
                      </motion.div>
                      <div className="flex h-full w-full flex-col pt-12">
                        <div className="px-6 py-4 flex items-center justify-between border-b bg-white hidden">
                          <div className="flex items-center gap-3">
                            {activeApp.id === "settings" &&
                              (aboutDeviceOpen ||
                                isAndroid17EasterEggOpen ||
                                homeScreenSettingsOpen ||
                                wallpaperSettingsOpen ||
                                internetSettingsOpen ||
                                mobileDataSettingsOpen ||
                                bluetoothSettingsOpen ||
                                screenSettingsOpen ||
                                animationSettingsOpen ||
                                securitySettingsOpen ||
                                accessibilitySettingsOpen ||
                                dynamicIslandSettingsOpen ||
                                moreSettingsOpen ||
                                appsSettingsOpen ||
                                selectedAppInfo) && (
                                <button
                                  onClick={() => {
                                    if (isAndroid17EasterEggOpen) {
                                      setIsAndroid17EasterEggOpen(false);
                                      return;
                                    }
                                    if (isSettingPasscode) {
                                      setIsSettingPasscode(false);
                                      return;
                                    }
                                    if (soundSettingsOpen) {
                                      setSoundSettingsOpen(false);
                                      return;
                                    }
                                    if (dynamicIslandSettingsOpen) {
                                      setDynamicIslandSettingsOpen(false);
                                      return;
                                    }
                                    if (appearanceSettingsOpen) {
                                      setAppearanceSettingsOpen(false);
                                      return;
                                    }
                                    if (wallpaperSettingsOpen) {
                                      setWallpaperSettingsOpen(false);
                                      setHomeScreenSettingsOpen(true);
                                      return;
                                    }
                                    if (selectedAppInfo) {
                                      setSelectedAppInfo(null);
                                      return;
                                    }
                                    if (appsSettingsOpen) {
                                      setAppsSettingsOpen(false);
                                      return;
                                    }
                                    setMoreSettingsOpen(false);
                                    setAboutDeviceOpen(false);
                                    setHomeScreenSettingsOpen(false);
                                    setInternetSettingsOpen(false);
                                    setMobileDataSettingsOpen(false);
                                    setBluetoothSettingsOpen(false);
                                    setScreenSettingsOpen(false);
                                    setAnimationSettingsOpen(false);
                                    setBatterySettingsOpen(false);
                                    setSecuritySettingsOpen(false);
                                    setAccessibilitySettingsOpen(false);
                                    setLockScreenSettingsOpen(false);
                                  }}
                                  className="p-1 -ml-1 rounded-full hover:bg-zinc-100 transition-colors"
                                >
                                  <ChevronLeft
                                    size={20}
                                    className="text-blue-600"
                                  />
                                </button>
                              )}
                            <h2 className="text-2xl font-bold tracking-tight">
                              {activeApp.id === "settings"
                                ? isAndroid17EasterEggOpen
                                  ? "Android 17"
                                  : aboutDeviceOpen
                                    ? "About Device"
                                    : homeScreenSettingsOpen
                                      ? "Home Screen"
                                      : wallpaperSettingsOpen
                                        ? "Wallpaper"
                                        : internetSettingsOpen
                                          ? "Internet"
                                        : mobileDataSettingsOpen
                                          ? language === "Turkish"
                                            ? "Mobil Veri"
                                            : "Mobile Data"
                                        : bluetoothSettingsOpen
                                          ? "Bluetooth"
                                          : screenSettingsOpen
                                            ? "Display & Brightness"
                                            : animationSettingsOpen
                                              ? "Animations"
                                              : batterySettingsOpen
                                                ? language === "Turkish"
                                                  ? "Pil"
                                                  : "Battery"
                                              : securitySettingsOpen
                                                ? "Security"
                                                : accessibilitySettingsOpen
                                                  ? "Accessibility"
                                                  : appearanceSettingsOpen
                                                    ? "Appearance"
                                                    : lockScreenSettingsOpen
                                                      ? "Lock Screen"
                                                      : dynamicIslandSettingsOpen
                                                        ? "Dynamic Island"
                                                        : moreSettingsOpen
                                                          ? "More Settings"
                                                          : selectedAppInfo
                                                            ? selectedAppInfo.name
                                                            : appsSettingsOpen
                                                              ? language ===
                                                                "Turkish"
                                                                ? "Uygulamalar"
                                                                : "Apps"
                                                              : "Settings"
                                : t(activeApp.id, activeApp.name)}
                            </h2>
                          </div>
                          {!(
                            activeApp.id === "settings" && aboutDeviceOpen
                          ) && (
                            <button
                              onClick={() => {
                                setActiveApp(null);
                                setAboutDeviceOpen(false);
                                setIsAndroid17EasterEggOpen(false);
                                setHomeScreenSettingsOpen(false);
                                setInternetSettingsOpen(false);
                                setMobileDataSettingsOpen(false);
                                setBluetoothSettingsOpen(false);
                                setScreenSettingsOpen(false);
                                setAnimationSettingsOpen(false);
                                setBatterySettingsOpen(false);
                                setSecuritySettingsOpen(false);
                                setSoundSettingsOpen(false);
                                setAppearanceSettingsOpen(false);
                                setLockScreenSettingsOpen(false);
                                setIsSettingPasscode(false);
                                setAppsSettingsOpen(false);
                                setSelectedAppInfo(null);
                              }}
                              className="h-8 w-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all shadow-sm"
                            >
                              <ArrowLeft size={16} strokeWidth={2.5} />
                            </button>
                          )}
                        </div>
                        <div
                          className={`flex-1 overflow-y-auto p-6 transition-all duration-300 relative ${
                            activeApp.id === "settings"
                              ? "bg-transparent text-zinc-900 shadow-inner"
                              : isCustomBgSetting
                                ? "bg-transparent text-zinc-900 shadow-inner"
                                : "bg-slate-50/50"
                          }`}
                          style={
                            activeApp.id === "settings"
                              ? {
                                  background: `
                              radial-gradient(circle at 1.5px 1.5px, rgba(0, 0, 0, 0.05) 1.2px, transparent 1.2px) 0 0 / 16px 16px,
                              radial-gradient(at 0% 0%, rgba(239, 165, 196, 0.95) 0%, transparent 65%),
                              radial-gradient(at 100% 0%, rgba(130, 214, 246, 0.95) 0%, transparent 65%),
                              radial-gradient(at 0% 100%, rgba(41, 101, 171, 0.95) 0%, transparent 70%),
                              radial-gradient(at 100% 100%, rgba(158, 126, 187, 0.95) 0%, transparent 70%),
                              linear-gradient(135deg, #efa5c4 0%, #82d6f6 35%, #2965ab 70%, #9e7ebb 100%)
                            `,
                                }
                              : isCustomBgSetting
                                ? {
                                    background:
                                      "linear-gradient(180deg, #b9e6f5 0%, #dfdcf6 45%, #caacf3 100%)",
                                  }
                                : undefined
                          }
                        >
                          {isCustomBgSetting && (
                            <div className="absolute bottom-6 right-6 w-12 h-12 text-white/45 pointer-events-none z-0">
                              <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-full h-full"
                              >
                                <path d="M12 0c0 5.523-4.477 10-10 10 5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z" />
                              </svg>
                            </div>
                          )}
                          <div className="space-y-4 max-w-sm mx-auto h-full relative z-10">
                            {activeApp.id === "settings" &&
                              securitySettingsOpen && (
                                <div
                                  className="space-y-6 animate-in slide-in-from-right-4 h-full flex flex-col"
                                  style={{
                                    animationDuration: `${300 / animationSpeed}ms`,
                                  }}
                                >
                                  {isSettingPattern ? (
                                    <div className="flex flex-col items-center justify-center h-full gap-8 py-8 animate-in fade-in zoom-in duration-300">
                                      <PatternLock
                                        title={
                                          patternStep === "new"
                                            ? "New Pattern"
                                            : "Confirm Pattern"
                                        }
                                        subtitle={
                                          patternStep === "new"
                                            ? "Connect points to create lock"
                                            : "Draw points again to verify"
                                        }
                                        error={securityError}
                                        onComplete={(p) => {
                                          if (p.length < 4) {
                                            setSecurityError(true);
                                            triggerHaptic("heavy");
                                            setTimeout(
                                              () => setSecurityError(false),
                                              1000,
                                            );
                                            return;
                                          }

                                          if (patternStep === "new") {
                                            setTempPattern(p);
                                            setPatternStep("confirm");
                                            triggerHaptic("medium");
                                          } else {
                                            if (
                                              JSON.stringify(p) ===
                                              JSON.stringify(tempPattern)
                                            ) {
                                              setPattern(p);
                                              setIsPatternEnabled(true);
                                              setIsSettingPattern(false);
                                              setPatternStep("new");
                                              triggerHaptic("heavy");
                                              setNotifications((prev) => [
                                                {
                                                  id: Date.now(),
                                                  app: "Security",
                                                  title: "Pattern Set",
                                                  text: "Device is now secured with a pattern.",
                                                  time: "Now",
                                                  icon: "Shield",
                                                  color: "bg-blue-600",
                                                },
                                                ...prev,
                                              ]);
                                            } else {
                                              setSecurityError(true);
                                              triggerHaptic("heavy");
                                              setTimeout(
                                                () => setSecurityError(false),
                                                1000,
                                              );
                                            }
                                          }
                                        }}
                                      />
                                      <button
                                        onClick={() =>
                                          setIsSettingPattern(false)
                                        }
                                        className="px-8 py-3 rounded-full bg-zinc-200 text-zinc-900 font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all"
                                      >
                                        Cancel Setup
                                      </button>
                                    </div>
                                  ) : !isSettingPasscode ? (
                                    <>
                                      <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                        <div className="flex justify-between items-center px-4 py-3.5">
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              Passcode Lock
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {isPasscodeEnabled
                                                ? "System Protected"
                                                : "No Passcode Set"}
                                            </span>
                                          </div>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("heavy");
                                              if (isPasscodeEnabled) {
                                                setIsPasscodeEnabled(false);
                                                setPasscode("");
                                              } else {
                                                setIsSettingPasscode(true);
                                                setSettingStep("new");
                                                setPasscodeEntry("");
                                              }
                                            }}
                                            className={`h-6 w-11 rounded-full p-1 transition-colors ${isPasscodeEnabled ? "bg-green-500" : "bg-zinc-200"}`}
                                          >
                                            <div
                                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isPasscodeEnabled ? "ml-auto" : "ml-0"}`}
                                            />
                                          </button>
                                        </div>

                                        <div className="flex justify-between items-center px-4 py-3.5">
                                          <span className="text-sm font-semibold">
                                            Lock Type
                                          </span>
                                          <div className="flex bg-zinc-100 p-1 rounded-lg text-[10px] font-bold">
                                            <button className="px-3 py-1 bg-white shadow-sm rounded-md">
                                              PASSCODE
                                            </button>
                                            <button
                                              onClick={() => {
                                                triggerHaptic("medium");
                                                setIsSettingPattern(true);
                                                setPatternStep("new");
                                              }}
                                              className="px-3 py-1 text-zinc-400"
                                            >
                                              PATTERN
                                            </button>
                                          </div>
                                        </div>

                                        {isPasscodeEnabled && (
                                          <>
                                            <button
                                              onClick={() => {
                                                triggerHaptic("medium");
                                                setIsSettingPasscode(true);
                                                setSettingStep("current");
                                                setPasscodeEntry("");
                                              }}
                                              className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50 transition-colors text-left"
                                            >
                                              <span className="text-sm font-semibold">
                                                Change Passcode
                                              </span>
                                              <ChevronLeft
                                                size={16}
                                                className="text-zinc-300 rotate-180"
                                              />
                                            </button>
                                            <div className="flex justify-between items-center px-4 py-3.5">
                                              <div className="flex flex-col">
                                                <span className="text-sm font-semibold">
                                                  {isFingerprintEnabled
                                                    ? "Fingerprint Unlock"
                                                    : "Add Fingerprint"}
                                                </span>
                                                <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                                  {isFingerprintEnabled
                                                    ? "Active"
                                                    : "Not Configured"}
                                                </span>
                                              </div>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("medium");
                                                  setIsFingerprintEnabled(
                                                    !isFingerprintEnabled,
                                                  );
                                                }}
                                                className={`h-6 w-11 rounded-full p-1 transition-colors ${isFingerprintEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                              >
                                                <div
                                                  className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isFingerprintEnabled ? "ml-auto" : "ml-0"}`}
                                                />
                                              </button>
                                            </div>
                                          </>
                                        )}
                                      </div>

                                      {/* Lock & Unlock Sound Effects Toggle */}
                                      <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Ses Efektleri"
                                            : "Sound Effects"}
                                        </span>
                                        <div className="space-y-3.5 divide-y divide-zinc-100">
                                          <div className="flex justify-between items-center px-1">
                                            <div className="flex flex-col">
                                              <span className="text-sm font-semibold">
                                                {language === "Turkish"
                                                  ? "Ekran Kilitleme Sesi"
                                                  : "Lock Sound"}
                                              </span>
                                              <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                                {language === "Turkish"
                                                  ? "Kilitlendiğinde ses çal"
                                                  : "Play sound when locking"}
                                              </span>
                                            </div>
                                            <button
                                              onClick={() => {
                                                triggerHaptic("medium");
                                                setIsLockSoundEnabled(
                                                  !isLockSoundEnabled,
                                                );
                                              }}
                                              className={`h-6 w-11 rounded-full p-1 transition-colors ${isLockSoundEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                            >
                                              <div
                                                className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isLockSoundEnabled ? "ml-auto" : "ml-0"}`}
                                              />
                                            </button>
                                          </div>
                                          <div className="flex justify-between items-center px-1 pt-3.5">
                                            <div className="flex flex-col">
                                              <span className="text-sm font-semibold">
                                                {language === "Turkish"
                                                  ? "Ekran Kilit Açma Sesi"
                                                  : "Unlock Sound"}
                                              </span>
                                              <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                                {language === "Turkish"
                                                  ? "Kilit açıldığında ses çal"
                                                  : "Play sound when unlocking"}
                                              </span>
                                            </div>
                                            <button
                                              onClick={() => {
                                                triggerHaptic("medium");
                                                setIsUnlockSoundEnabled(
                                                  !isUnlockSoundEnabled,
                                                );
                                              }}
                                              className={`h-6 w-11 rounded-full p-1 transition-colors ${isUnlockSoundEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                            >
                                              <div
                                                className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isUnlockSoundEnabled ? "ml-auto" : "ml-0"}`}
                                              />
                                            </button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded-2xl border shadow-sm p-4">
                                        <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                                          A passcode protects your data and
                                          privacy. When enabled, you'll be
                                          required to enter it whenever you
                                          unlock your device.
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <div className="flex flex-col items-center gap-8 py-4">
                                      <div className="text-center space-y-2">
                                        <h3 className="text-lg font-bold">
                                          {settingStep === "current"
                                            ? "Enter Current Passcode"
                                            : settingStep === "new"
                                              ? "Set New Passcode"
                                              : "Confirm New Passcode"}
                                        </h3>
                                        <div
                                          className={`flex gap-3 justify-center transition-transform ${securityError ? "translate-x-1" : ""}`}
                                        >
                                          {[0, 1, 2, 3].map((i) => (
                                            <div
                                              key={i}
                                              className={`h-2.5 w-2.5 rounded-full border border-zinc-300 transition-all ${passcodeEntry.length > i ? "bg-zinc-800 scale-110" : "bg-transparent"}`}
                                            />
                                          ))}
                                        </div>
                                        {securityError && (
                                          <span className="text-[10px] text-red-500 font-bold uppercase animate-pulse">
                                            Incorrect Passcode
                                          </span>
                                        )}
                                      </div>

                                      <div className="grid grid-cols-3 gap-3">
                                        {[
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          6,
                                          7,
                                          8,
                                          9,
                                          "",
                                          0,
                                          "back",
                                        ].map((key, i) => {
                                          if (key === "")
                                            return <div key={i} />;
                                          return (
                                            <motion.button
                                              key={i}
                                              whileTap={{ scale: 0.9 }}
                                              onClick={() => {
                                                triggerHaptic("light");
                                                if (key === "back") {
                                                  setPasscodeEntry((prev) =>
                                                    prev.slice(0, -1),
                                                  );
                                                  return;
                                                }
                                                if (passcodeEntry.length < 4) {
                                                  const next =
                                                    passcodeEntry + key;
                                                  setPasscodeEntry(next);
                                                  if (next.length === 4) {
                                                    if (
                                                      settingStep === "current"
                                                    ) {
                                                      if (next === passcode) {
                                                        setSettingStep("new");
                                                        setPasscodeEntry("");
                                                      } else {
                                                        setSecurityError(true);
                                                        triggerHaptic("heavy");
                                                        setTimeout(() => {
                                                          setSecurityError(
                                                            false,
                                                          );
                                                          setPasscodeEntry("");
                                                        }, 600);
                                                      }
                                                    } else if (
                                                      settingStep === "new"
                                                    ) {
                                                      setTempPasscode(next);
                                                      setSettingStep("confirm");
                                                      setPasscodeEntry("");
                                                    } else if (
                                                      settingStep === "confirm"
                                                    ) {
                                                      if (
                                                        next === tempPasscode
                                                      ) {
                                                        setPasscode(next);
                                                        setIsPasscodeEnabled(
                                                          true,
                                                        );
                                                        setIsSettingPasscode(
                                                          false,
                                                        );
                                                        triggerHaptic("heavy");
                                                      } else {
                                                        setSecurityError(true);
                                                        triggerHaptic("heavy");
                                                        setTimeout(() => {
                                                          setSecurityError(
                                                            false,
                                                          );
                                                          setPasscodeEntry("");
                                                          setSettingStep("new");
                                                        }, 600);
                                                      }
                                                    }
                                                  }
                                                }
                                              }}
                                              className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-xl font-bold border border-zinc-200 active:bg-zinc-200"
                                            >
                                              {key === "back" ? "←" : key}
                                            </motion.button>
                                          );
                                        })}
                                      </div>
                                      <button
                                        onClick={() => {
                                          setIsSettingPasscode(false);
                                          setPasscodeEntry("");
                                        }}
                                        className="text-blue-600 font-bold text-sm uppercase"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  )}
                                </div>
                              )}
                            {activeApp.id === "calendar" && (
                              <div
                                className="space-y-8 animate-in fade-in slide-in-from-bottom-4"
                                style={{
                                  animationDuration: `${500 / animationSpeed}ms`,
                                }}
                              >
                                <div className="flex justify-between items-center text-red-500 font-bold px-2">
                                  <span className="text-xl">
                                    {t("cal_may", "May 2026")}
                                  </span>
                                  <div className="flex gap-4 text-xs tracking-widest opacity-60">
                                    {t("cal_days", "SMTWTFS")
                                      .split("")
                                      .map((d, idx) => (
                                        <span key={idx}>{d}</span>
                                      ))}
                                  </div>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-[15px] font-medium">
                                  {Array.from({ length: 31 }).map((_, i) => (
                                    <div
                                      key={i}
                                      className={`h-10 w-10 flex items-center justify-center rounded-full transition-all ${i === 9 ? "bg-red-500 text-white shadow-lg" : "hover:bg-zinc-200"}`}
                                    >
                                      {i + 1}
                                    </div>
                                  ))}
                                </div>
                                <div className="space-y-4 pt-6 border-t font-sans">
                                  <h4 className="font-bold text-lg">
                                    {t("cal_upcoming", "Upcoming Events")}
                                  </h4>
                                  <div className="p-4 rounded-2xl bg-white border shadow-sm border-l-4 border-l-red-500">
                                    <p className="font-bold">
                                      {language === "Turkish"
                                        ? "Proje Başlatma"
                                        : "Project Launch"}
                                    </p>
                                    <p className="text-sm text-zinc-500">
                                      {language === "Turkish"
                                        ? "10:00 - 11:30"
                                        : "10:00 AM - 11:30 AM"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "weather" && (
                              <div
                                className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95"
                                style={{
                                  animationDuration: `${500 / animationSpeed}ms`,
                                }}
                              >
                                <div className="space-y-1">
                                  <h3 className="text-3xl font-semibold">
                                    San Francisco
                                  </h3>
                                  <div className="text-8xl font-thin tracking-tighter ml-4">
                                    19°
                                  </div>
                                  <p className="text-zinc-500 font-semibold tracking-wide">
                                    Mostly Sunny
                                  </p>
                                </div>
                                <div className="flex justify-between max-w-[200px] mx-auto text-sm font-bold">
                                  <span>H: 22°</span>
                                  <span>L: 14°</span>
                                </div>
                                <div className="grid grid-cols-5 gap-3 pt-12">
                                  {["MON", "TUE", "WED", "THU", "FRI"].map(
                                    (day, i) => (
                                      <div
                                        key={day}
                                        className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white border shadow-sm"
                                      >
                                        <span className="text-[10px] font-bold text-zinc-400">
                                          {day}
                                        </span>
                                        <CloudSun
                                          size={20}
                                          className="text-orange-400"
                                        />
                                        <span className="text-sm font-bold">
                                          {18 + i}°
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "themes" && (
                              <ThemesApp
                                themeStyle={themeStyle}
                                setThemeStyle={setThemeStyle}
                                wallpaper={wallpaper}
                                setWallpaper={setWallpaper}
                                showAppNames={showAppNames}
                                setShowAppNames={setShowAppNames}
                                triggerHaptic={triggerHaptic}
                                photos={photos}
                                theme={theme}
                              />
                            )}

                            {activeApp.id === "settings" && (
                              <div
                                className="space-y-6 animate-in slide-in-from-right-4"
                                style={{
                                  animationDuration: `${500 / animationSpeed}ms`,
                                }}
                              >
                                {aboutDeviceOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="relative h-40 w-full rounded-3xl overflow-hidden shadow-xl group border border-white/10">
                                      <div
                                        className="absolute inset-0 opacity-90 transition-transform duration-[10s] group-hover:scale-110"
                                        style={{
                                          background:
                                            "conic-gradient(from 0deg at 50% 50%, #ef4444, #fbbf24, #3b82f6, #f97316, #ef4444)",
                                          filter: "blur(20px) saturate(1.5)",
                                        }}
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                        <motion.h2
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: 0.4 }}
                                          className="text-white text-4xl font-black uppercase tracking-tighter italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                                        >
                                          {isOS24Beta
                                            ? "Wepol OS 24"
                                            : "Wepol OS 23"}
                                        </motion.h2>
                                      </div>
                                    </div>

                                    {hasUpdateAvailable && (
                                      <div className="rounded-2xl overflow-hidden border shadow-sm">
                                        <button
                                          onClick={handleSystemUpdate}
                                          disabled={isSystemUpdating}
                                          className="w-full bg-blue-600 p-5 flex flex-col items-center justify-center transition-all active:scale-[0.98] hover:bg-blue-700 text-center"
                                        >
                                          <span className="text-white font-black text-sm uppercase tracking-[0.2em]">
                                            update
                                          </span>
                                          {isSystemUpdating && (
                                            <div className="mt-4 w-full max-w-[120px] space-y-2">
                                              <div className="flex justify-between items-center text-[9px] font-black text-white uppercase tracking-widest opacity-80">
                                                <span>
                                                  {systemUpdateProgress}%
                                                </span>
                                              </div>
                                              <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                                                <div
                                                  className="h-full bg-white transition-all duration-300"
                                                  style={{
                                                    width: `${systemUpdateProgress}%`,
                                                  }}
                                                />
                                              </div>
                                            </div>
                                          )}
                                        </button>
                                      </div>
                                    )}
                                    <div className="bg-white/90 border-white/40 rounded-2xl border shadow-sm divide-y divide-zinc-100">
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "Cihaz Adı"
                                            : "Device Name"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          WePol 19 Pro
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "Yazılım Sürümü"
                                            : "Software Version"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          {osVersion}
                                        </span>
                                      </div>
                                      <div
                                        onClick={() => {
                                          triggerHaptic("heavy");
                                          setIsAndroid17EasterEggOpen(true);
                                        }}
                                        className="flex justify-between items-center px-4 py-3.5 cursor-pointer hover:bg-zinc-100/50 active:scale-[0.99] transition-all"
                                      >
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-medium text-zinc-500">
                                            {language === "Turkish"
                                              ? "Android Sürümü"
                                              : "Android Version"}
                                          </span>
                                        </div>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          17
                                        </span>
                                      </div>
                                      <div
                                        onClick={() => {
                                          triggerHaptic("heavy");
                                          setIsWepolAiOpen(true);
                                        }}
                                        className="flex justify-between items-center px-4 py-3.5 cursor-pointer hover:bg-zinc-100/50 active:scale-[0.99] transition-all"
                                        id="about-wepol-ai-button"
                                      >
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "WEPOL AI Sürümü"
                                            : "WEPOL AI Version"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900 flex items-center gap-1">
                                          <span>19</span>
                                          <ChevronLeft size={14} className="text-zinc-400 rotate-180" />
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "Üretici"
                                            : "Manufacturer"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          theeditz67
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "Depolama"
                                            : "Storage"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          73 GB / 1 TB
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "Batarya"
                                            : "Battery"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          7500 mAh
                                        </span>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span className="text-sm font-medium text-zinc-500">
                                          {language === "Turkish"
                                            ? "İşlemci"
                                            : "Processor"}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                          Snapdragon Gen 7 Elite
                                        </span>
                                      </div>
                                    </div>

                                    <div className="bg-white/90 border-white/40 rounded-2xl border shadow-sm p-4">
                                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                                        {language === "Turkish"
                                          ? "Bu cihaz en son WePol OS sürümünü çalıştırmaktadır. Tüm sistemler normal değerlerde çalışıyor. California'da WePol tarafından tasarlandı."
                                          : "This device is running the latest version of WePol OS. All systems are operating normally. Designed by WePol in California."}
                                      </p>
                                    </div>
                                  </div>
                                ) : homeScreenSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm divide-y overflow-hidden">
                                      <button
                                        onClick={() => {
                                          triggerHaptic("medium");
                                          setWallpaperSettingsOpen(true);
                                          setHomeScreenSettingsOpen(false);
                                        }}
                                        className="w-full flex justify-between items-center py-4 px-4 hover:bg-zinc-50 transition-colors text-left"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                                            <Image size={18} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Duvar Kağıdı"
                                                : "Wallpaper"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Arka planı özelleştir"
                                                : "Customize background"}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 rotate-180"
                                        />
                                      </button>
                                      <button
                                        onClick={() => {
                                          triggerHaptic("medium");
                                          setIconsSettingsOpen(true);
                                          setHomeScreenSettingsOpen(false);
                                        }}
                                        className="w-full flex justify-between items-center py-4 px-4 hover:bg-zinc-50 transition-colors text-left"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                            <Palette size={18} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Simgeler"
                                                : "Icons"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Tema & Stil"
                                                : "Theme & Style"}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 rotate-180"
                                        />
                                      </button>
                                      <button
                                        onClick={() => {
                                          triggerHaptic("medium");
                                          setNavigationSettingsOpen(true);
                                          setHomeScreenSettingsOpen(false);
                                        }}
                                        className="w-full flex justify-between items-center py-4 px-4 hover:bg-zinc-50 transition-colors text-left"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-600">
                                            <Layout size={18} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Gezinme Çubuğu"
                                                : "Navigation Bar"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Çubuk & Düğmeler"
                                                : "Bar & Buttons"}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 rotate-180"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                ) : iconsSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                                        <Palette size={14} />
                                        {language === "Turkish"
                                          ? "Simge Temaları"
                                          : "Icon Themes"}
                                      </h4>
                                      <div className="grid grid-cols-1 gap-3">
                                        {[
                                          {
                                            id: "WePol",
                                            name: "WePol OS v4",
                                            desc:
                                              language === "Turkish"
                                                ? "Resmi"
                                                : "Official",
                                            style: "bg-zinc-900 text-white",
                                            icon: Smartphone,
                                          },
                                          {
                                            id: "Hyper",
                                            name: "Wepol OS v2",
                                            desc:
                                              language === "Turkish"
                                                ? "Fütüristik Cam"
                                                : "Futuristic Glass",
                                            style: "bg-indigo-100/50",
                                            icon: Zap,
                                          },
                                          {
                                            id: "Color",
                                            name: "Wepol OS v3",
                                            desc:
                                              language === "Turkish"
                                                ? "Canlı & Yuvarlak"
                                                : "Vibrant & Round",
                                            style: "bg-blue-100/50",
                                            icon: Palette,
                                          },
                                          {
                                            id: "v4",
                                            name: "Wepol OS v4",
                                            desc:
                                              language === "Turkish"
                                                ? "Seçkin Neo-Brutal"
                                                : "Elite Neo-Brutal",
                                            style: "bg-zinc-900/50",
                                            icon: Layers,
                                          },
                                        ].map((themeOpt) => (
                                          <button
                                            key={themeOpt.id}
                                            onClick={() => {
                                              triggerHaptic("heavy");
                                              setThemeStyle(themeOpt.id as any);
                                              if (themeOpt.id === "Hyper")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "Color")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "WePol")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "v4")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
                                                );
                                            }}
                                            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${themeStyle === themeOpt.id ? "border-blue-500 bg-blue-50/20" : "border-zinc-100 hover:bg-zinc-50"}`}
                                          >
                                            <div
                                              className={`w-12 h-12 rounded-xl ${themeOpt.style} flex items-center justify-center`}
                                            >
                                              <themeOpt.icon
                                                size={24}
                                                className={
                                                  themeStyle === themeOpt.id
                                                    ? "text-blue-500"
                                                    : "text-zinc-400"
                                                }
                                              />
                                            </div>
                                            <div className="flex flex-col text-left flex-1">
                                              <span className="font-bold text-sm">
                                                {themeOpt.name}
                                              </span>
                                              <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                                {themeOpt.desc}
                                              </span>
                                            </div>
                                            {themeStyle === themeOpt.id && (
                                              <Check
                                                size={16}
                                                className="text-blue-600"
                                              />
                                            )}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : navigationSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                                        <Layout size={14} />
                                        {language === "Turkish"
                                          ? "Gezinme"
                                          : "Navigation"}
                                      </h4>
                                      <div className="space-y-3">
                                        <span className="font-semibold text-sm block">
                                          {language === "Turkish"
                                            ? "Sistem Stili"
                                            : "System Style"}
                                        </span>
                                        <div className="grid grid-cols-2 gap-3">
                                          <button
                                            onClick={() => {
                                              setNavStyle("bar");
                                              triggerHaptic("medium");
                                            }}
                                            className={`relative h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${navStyle === "bar" ? "border-blue-500 bg-blue-50" : "border-zinc-100 hover:bg-zinc-50"}`}
                                          >
                                            <div className="w-12 h-1.5 bg-zinc-400 rounded-full mb-1" />
                                            <span
                                              className={`text-[10px] font-bold ${navStyle === "bar" ? "text-blue-600" : "text-zinc-400"}`}
                                            >
                                              {language === "Turkish"
                                                ? "HAREKET GEZİNMESİ"
                                                : "IPHONE SLIDER"}
                                            </span>
                                            {navStyle === "bar" && (
                                              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Check
                                                  size={10}
                                                  className="text-white"
                                                />
                                              </div>
                                            )}
                                          </button>
                                          <button
                                            onClick={() => {
                                              setNavStyle("buttons");
                                              triggerHaptic("medium");
                                            }}
                                            className={`relative h-24 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${navStyle === "buttons" ? "border-blue-500 bg-blue-50" : "border-zinc-100 hover:bg-zinc-50"}`}
                                          >
                                            <div className="flex gap-2.5 items-center">
                                              <div className="w-3 h-0.5 bg-zinc-400 rounded-full" />
                                              <div className="w-3 h-3 rounded-[3px] border-[1.5px] border-zinc-400" />
                                              <ChevronLeft
                                                size={16}
                                                className="text-zinc-400"
                                              />
                                            </div>
                                            <span
                                              className={`text-[10px] font-bold ${navStyle === "buttons" ? "text-blue-600" : "text-zinc-400"}`}
                                            >
                                              {language === "Turkish"
                                                ? "3 DÜĞMELİ GEZİNME"
                                                : "3-BUTTON"}
                                            </span>
                                            {navStyle === "buttons" && (
                                              <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Check
                                                  size={10}
                                                  className="text-white"
                                                />
                                              </div>
                                            )}
                                          </button>
                                        </div>
                                      </div>
                                      <div className="mt-6 p-4 bg-zinc-100/50 rounded-2xl space-y-3 border border-zinc-200/50 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                        <div className="flex items-center gap-2 text-blue-600">
                                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Info size={12} />
                                          </div>
                                          <span className="text-[10px] font-black uppercase tracking-widest italic">
                                            {language === "Turkish"
                                              ? "Gezinme Kılavuzu"
                                              : "Navigation Guide"}
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2.5">
                                          {[
                                            {
                                              label:
                                                language === "Turkish"
                                                  ? "Ana Sayfaya Git"
                                                  : "Go Home",
                                              action:
                                                language === "Turkish"
                                                  ? "Yukarı doğru hızlıca kaydırın"
                                                  : "Swipe up quickly",
                                            },
                                            {
                                              label:
                                                language === "Turkish"
                                                  ? "Uygulama Değiştirici"
                                                  : "App Switcher",
                                              action:
                                                language === "Turkish"
                                                  ? "Yukarı kaydırıp basılı tutun"
                                                  : "Swipe up & hold",
                                            },
                                            {
                                              label:
                                                language === "Turkish"
                                                  ? "Uygulamalar Arası Geçiş"
                                                  : "Switch Apps",
                                              action:
                                                language === "Turkish"
                                                  ? "Alt kenar boyunca kaydırın"
                                                  : "Swipe along bottom",
                                            },
                                          ].map((item, i) => (
                                            <div
                                              key={i}
                                              className="flex justify-between items-center text-[10.5px] font-bold"
                                            >
                                              <span className="text-zinc-500 uppercase tracking-tighter">
                                                {item.label}
                                              </span>
                                              <span className="text-zinc-900 bg-white px-2 py-0.5 rounded-full border border-zinc-200 shadow-sm">
                                                {item.action}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : internetSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                                            <Wifi size={16} />
                                          </div>
                                          <span className="text-sm font-semibold">
                                            Wi-Fi
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            setIsWifiEnabled(!isWifiEnabled);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isWifiEnabled ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isWifiEnabled ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                                            <Plane size={16} />
                                          </div>
                                          <span className="text-sm font-semibold">
                                            Airplane Mode
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            setIsAirplaneMode(!isAirplaneMode);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isAirplaneMode ? "bg-orange-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isAirplaneMode ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
                                            <Compass size={16} />
                                          </div>
                                          <span className="text-sm font-semibold">
                                            Personal Hotspot
                                          </span>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 rotate-180"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : mobileDataSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className={`rounded-2xl border shadow-sm divide-y ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-100"}`}>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                                            <Signal size={16} />
                                          </div>
                                          <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                                            {language === "Turkish" ? "Mobil Veri" : "Mobile Data"}
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            setIsMobileDataEnabled(!isMobileDataEnabled);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isMobileDataEnabled ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isMobileDataEnabled ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>

                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                                            <Globe size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className={`text-sm font-semibold leading-none ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                                              {language === "Turkish" ? "Veri Dolaşımı" : "Data Roaming"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 mt-1 uppercase font-black">
                                              {language === "Turkish" ? "YURTDIŞI BAĞLANTI" : "INTERNATIONAL CONNECTIVITY"}
                                            </span>
                                          </div>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("medium");
                                          }}
                                          className="h-6 w-11 rounded-full p-1 bg-zinc-200"
                                        >
                                          <div className="h-4 w-4 rounded-full bg-white shadow-sm ml-0" />
                                        </button>
                                      </div>

                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                                            <Network size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className={`text-sm font-semibold leading-none ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                                              {language === "Turkish" ? "Tercih Edilen Ağ Türü" : "Preferred Network Type"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 mt-1 uppercase font-black">5G / LTE / 3G</span>
                                          </div>
                                        </div>
                                        <span className="text-xs font-bold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-lg">
                                          5G (Auto)
                                        </span>
                                      </div>
                                    </div>

                                    <div className={`p-4 rounded-2xl border ${theme === "dark" ? "bg-zinc-900 border-zinc-800 text-zinc-400" : "bg-zinc-50 border-zinc-100 text-zinc-500"} text-xs space-y-2`}>
                                      <span className="font-bold text-[10px] uppercase tracking-wider block">
                                        {language === "Turkish" ? "VERİ KULLANIMI" : "DATA USAGE"}
                                      </span>
                                      <div className="flex justify-between items-center py-1">
                                        <span>{language === "Turkish" ? "Bu Ay" : "This Month"}</span>
                                        <span className={`font-bold ${theme === "dark" ? "text-white" : "text-zinc-800"}`}>12.4 GB</span>
                                      </div>
                                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-emerald-500 h-full w-[45%]" />
                                      </div>
                                      <span className="text-[10px] text-zinc-400 block pt-1">
                                        {language === "Turkish" 
                                          ? "Mobil veri kapatıldığında, internet erişimi yalnızca Wi-Fi ağları üzerinden sağlanacaktır."
                                          : "When mobile data is turned off, internet access will only be available via Wi-Fi networks."}
                                      </span>
                                    </div>
                                  </div>
                                ) : bluetoothSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className={`rounded-2xl border shadow-sm divide-y ${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-100"}`}>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                                            <Bluetooth size={16} />
                                          </div>
                                          <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                                            Bluetooth
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            setIsBluetoothEnabled(!isBluetoothEnabled);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isBluetoothEnabled ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isBluetoothEnabled ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                    </div>

                                    {isBluetoothEnabled && (
                                      <div className="space-y-3 animate-in fade-in duration-300">
                                        <span className={`text-[10px] font-black uppercase tracking-wider px-1 ${theme === "dark" ? "text-zinc-500" : "text-zinc-400"}`}>
                                          {language === "Turkish" ? "CİHAZLARIM" : "MY DEVICES"}
                                        </span>
                                        <div className={`rounded-2xl border shadow-sm divide-y ${theme === "dark" ? "bg-zinc-900 border-zinc-800 divide-zinc-800/50" : "bg-white border-zinc-100 divide-zinc-100"}`}>
                                          {[
                                            { name: "WePod Pro", type: "Headphones", connected: true },
                                            { name: "Smart Watch v4", type: "Watch", connected: false },
                                            { name: "Car Audio System", type: "Car", connected: false }
                                          ].map((device, i) => (
                                            <div key={i} className="flex justify-between items-center px-4 py-3.5">
                                              <div className="flex flex-col">
                                                <span className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                                                  {device.name}
                                                </span>
                                                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                                                  {device.type}
                                                </span>
                                              </div>
                                              <span className={`text-xs font-bold leading-none px-2 py-1 rounded-full ${device.connected ? "bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400" : "text-zinc-400"}`}>
                                                {device.connected ? (language === "Turkish" ? "Bağlandı" : "Connected") : (language === "Turkish" ? "Bağlı Değil" : "Not Connected")}
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ) : screenSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div
                                      className={`${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-white"} rounded-2xl border shadow-sm divide-y`}
                                    >
                                      <div className="p-4 flex flex-col gap-4">
                                        <span
                                          className={`text-[10px] font-black uppercase ${theme === "dark" ? "text-zinc-500" : "text-zinc-400"} tracking-wider`}
                                        >
                                          {language === "Turkish"
                                            ? "Görünüm"
                                            : "Appearance"}
                                        </span>
                                        <div className="flex gap-4">
                                          <button
                                            onClick={() => {
                                              setTheme("light");
                                              triggerHaptic("light");
                                            }}
                                            className={`flex-1 flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${theme === "light" ? "bg-blue-50 ring-2 ring-blue-500" : theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-50"}`}
                                          >
                                            <div className="w-16 h-24 bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
                                              <div className="h-2 w-full bg-zinc-100" />
                                              <div className="flex-1 p-2 space-y-1">
                                                <div className="w-full h-1 bg-zinc-100 rounded" />
                                                <div className="w-2/3 h-1 bg-zinc-100 rounded" />
                                              </div>
                                            </div>
                                            <span
                                              className={`text-xs font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                                            >
                                              {language === "Turkish"
                                                ? "Açık"
                                                : "Light"}
                                            </span>
                                          </button>
                                          <button
                                            onClick={() => {
                                              setTheme("dark");
                                              triggerHaptic("light");
                                            }}
                                            className={`flex-1 flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${theme === "dark" ? "bg-zinc-800 ring-2 ring-blue-500" : "hover:bg-zinc-50"}`}
                                          >
                                            <div className="w-16 h-24 bg-zinc-900 border border-zinc-800 rounded-lg shadow-sm overflow-hidden flex flex-col">
                                              <div className="h-2 w-full bg-zinc-800" />
                                              <div className="flex-1 p-2 space-y-1">
                                                <div className="w-full h-1 bg-zinc-800 rounded" />
                                                <div className="w-2/3 h-1 bg-zinc-800 rounded" />
                                              </div>
                                            </div>
                                            <span
                                              className={`text-xs font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                                            >
                                              {language === "Turkish"
                                                ? "Koyu"
                                                : "Dark"}
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <span
                                          className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                                        >
                                          {language === "Turkish"
                                            ? "Tam Ekran"
                                            : "Full Screen"}
                                        </span>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            toggleFullscreen();
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isFullscreen ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isFullscreen ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex flex-col">
                                          <span
                                            className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                                          >
                                            {language === "Turkish"
                                              ? "Tam Ekran 2"
                                              : "Full Screen 2"}
                                          </span>
                                          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">
                                            {language === "Turkish"
                                              ? "Tüm ekranı kapla"
                                              : "Cover entire screen"}
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            setIsFullscreen2(!isFullscreen2);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isFullscreen2 ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isFullscreen2 ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                      <div className="flex justify-between items-center px-4 py-3.5">
                                        <div className="flex flex-col">
                                          <span
                                            className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
                                          >
                                            {language === "Turkish"
                                              ? "Tam Ekran 3"
                                              : "Full Screen 3"}
                                          </span>
                                          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">
                                            {language === "Turkish"
                                              ? "Ultra Geniş Görünüm"
                                              : "Ultra Wide View"}
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("heavy");
                                            const next = !isFullscreen3;
                                            setIsFullscreen3(next);
                                            if (next) {
                                              setIsFullscreen2(true);
                                              if (!document.fullscreenElement) {
                                                document.documentElement
                                                  .requestFullscreen()
                                                  .catch((e) =>
                                                    console.error(e),
                                                  );
                                              }
                                            }
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isFullscreen3 ? "bg-green-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isFullscreen3 ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                    </div>

                                    <div
                                      className={`${theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-white"} rounded-2xl border shadow-sm p-4 space-y-5`}
                                    >
                                      <div>
                                        <div className="flex justify-between mb-3">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Telefon Çerçeve Rengi"
                                              : "Phone Frame Color"}
                                          </span>
                                          <div
                                            className="w-12 h-4 rounded border border-zinc-100 shadow-sm"
                                            style={{
                                              backgroundColor: phoneColor,
                                            }}
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          {[
                                            "#27272a",
                                            "#3f3f46",
                                            "#52525b",
                                            "#ef4444",
                                            "#3b82f6",
                                            "#10b981",
                                            "#f59e0b",
                                            "#ffffff",
                                          ].map((color) => (
                                            <button
                                              key={color}
                                              onClick={() => {
                                                triggerHaptic("light");
                                                setPhoneColor(color);
                                              }}
                                              className={`w-7 h-7 rounded-full border-2 transition-all ${phoneColor === color ? "border-blue-500 scale-110 shadow-lg" : "border-white shadow-sm hover:scale-105"}`}
                                              style={{ backgroundColor: color }}
                                            />
                                          ))}
                                        </div>
                                      </div>

                                      <div>
                                        <div className="flex justify-between mb-2">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Telefon Yuvarlaklığı"
                                              : "Phone Roundness"}
                                          </span>
                                          <span className="text-xs font-bold text-blue-600">
                                            {phoneRoundness}px
                                          </span>
                                        </div>
                                        <input
                                          type="range"
                                          min="0"
                                          max="100"
                                          step="1"
                                          value={phoneRoundness}
                                          onChange={(e) => {
                                            const val = parseInt(
                                              e.target.value,
                                            );
                                            if (
                                              Math.abs(val - phoneRoundness) > 4
                                            )
                                              triggerHaptic("light");
                                            setPhoneRoundness(val);
                                          }}
                                          className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                      </div>
                                      <div>
                                        <div className="flex justify-between mb-2">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Telefon Kalınlığı"
                                              : "Phone Thickness"}
                                          </span>
                                          <span className="text-xs font-bold text-blue-600">
                                            {phoneThickness}px
                                          </span>
                                        </div>
                                        <input
                                          type="range"
                                          min="1"
                                          max="20"
                                          step="1"
                                          value={phoneThickness}
                                          onChange={(e) => {
                                            const val = parseInt(
                                              e.target.value,
                                            );
                                            if (
                                              Math.abs(val - phoneThickness) > 2
                                            )
                                              triggerHaptic("light");
                                            setPhoneThickness(val);
                                          }}
                                          className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                      </div>
                                      <div>
                                        <div className="flex justify-between mb-2">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Metin Mesafesi"
                                              : "Text Distance"}
                                          </span>
                                          <span className="text-xs font-bold text-blue-600">
                                            {displayDistance}px
                                          </span>
                                        </div>
                                        <input
                                          type="range"
                                          min="10"
                                          max="100"
                                          value={displayDistance}
                                          onChange={(e) => {
                                            const val = parseInt(
                                              e.target.value,
                                            );
                                            if (
                                              Math.abs(val - displayDistance) >
                                              5
                                            )
                                              triggerHaptic("light");
                                            setDisplayDistance(val);
                                          }}
                                          className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                      </div>
                                      <div className="pt-2 border-t mt-2">
                                        <div className="flex justify-between mb-3">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Ekran Yenileme Hızı"
                                              : "Screen Refresh Rate"}
                                          </span>
                                          <span className="text-xs font-bold text-blue-600">
                                            {screenHz}Hz
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                          {[30, 366].map((hz) => (
                                            <button
                                              key={hz}
                                              onClick={() => {
                                                triggerHaptic("medium");
                                                setScreenHz(hz);
                                                // Adjust animation speed based on Hz to simulate the "feel"
                                                if (hz === 366)
                                                  setAnimationSpeed(3);
                                                else if (hz === 30)
                                                  setAnimationSpeed(0.5);
                                                else setAnimationSpeed(1);
                                              }}
                                              className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${screenHz === hz ? "bg-blue-50 border-blue-500" : "bg-zinc-50 border-transparent hover:bg-zinc-100"}`}
                                            >
                                              <span
                                                className={`font-bold text-sm ${screenHz === hz ? "text-blue-600" : "text-zinc-600"}`}
                                              >
                                                {hz}Hz
                                              </span>
                                              <span className="text-[9px] font-black uppercase text-zinc-400 tracking-tighter">
                                                {hz === 30
                                                  ? language === "Turkish"
                                                    ? "Düşük Güç"
                                                    : "Low Power"
                                                  : language === "Turkish"
                                                    ? "Ultra Akıcı"
                                                    : "Ultra Smooth"}
                                              </span>
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : animationSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <div>
                                        <div className="flex justify-between mb-2">
                                          <span className="text-xs font-bold text-zinc-400 uppercase">
                                            {language === "Turkish"
                                              ? "Hareket Hızı"
                                              : "Movement Speed"}
                                          </span>
                                          <span className="text-xs font-bold text-blue-600">
                                            x{animationSpeed.toFixed(1)}
                                          </span>
                                        </div>
                                        <input
                                          type="range"
                                          min="0.1"
                                          max="10"
                                          step="0.1"
                                          value={animationSpeed}
                                          onChange={(e) => {
                                            const val = parseFloat(
                                              e.target.value,
                                            );
                                            if (
                                              Math.abs(val - animationSpeed) >
                                              0.5
                                            )
                                              triggerHaptic("light");
                                            setAnimationSpeed(val);
                                          }}
                                          className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                        />
                                        <div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-bold uppercase">
                                          <span>
                                            {language === "Turkish"
                                              ? "Kaplumbağa (0.1)"
                                              : "Turtle (0.1)"}
                                          </span>
                                          <span>
                                            {language === "Turkish"
                                              ? "Hızlı (10.0)"
                                              : "Fast (10.0)"}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="space-y-3 pt-4 border-t">
                                        <div className="flex justify-between items-center">
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Paralel Animasyon"
                                                : "Parallel Animation"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Çok kanallı hareket"
                                                : "Multi-threaded motion"}
                                            </span>
                                          </div>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              setIsParallelAnimation(
                                                !isParallelAnimation,
                                              );
                                            }}
                                            className={`h-6 w-11 rounded-full p-1 transition-colors ${isParallelAnimation ? "bg-blue-600" : "bg-zinc-200"}`}
                                          >
                                            <div
                                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isParallelAnimation ? "ml-auto" : "ml-0"}`}
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-white rounded-2xl border shadow-sm p-4">
                                      <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                                        {language === "Turkish"
                                          ? "Sistem animasyonlarının ne kadar hızlı oynatılacağını ayarlayın. Yüksek değerler arayüzün daha duyarlı hissettirmesini sağlarken, düşük değerler daha akıcı ve rahat bir hareket sağlar."
                                          : "Adjust how fast the system animations play. Higher values make the UI feel snappier, while lower values provide a more relaxed motion."}
                                      </p>
                                    </div>
                                  </div>
                                ) : batterySettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <div>
                                        <div className="flex justify-between items-center mb-1">
                                          <span className="text-sm font-semibold text-zinc-800">
                                            {language === "Turkish"
                                              ? "Pil Sağlığı"
                                              : "Battery Health"}
                                          </span>
                                          <span className="text-sm font-bold text-green-600">
                                            {batteryHealth}%
                                          </span>
                                        </div>
                                        <p className="text-xs text-zinc-400">
                                          {language === "Turkish"
                                            ? "Bu, telefonun orijinaline kıyasla pil kapasitesinin ölçümüdür."
                                            : "This is a measurement of battery capacity relative to when it was new."}
                                        </p>
                                      </div>

                                      <div className="pt-4 border-t space-y-4">
                                        <div className="flex justify-between items-center">
                                          <span className="text-sm font-semibold text-zinc-800">
                                            {language === "Turkish"
                                              ? "Pil Seviyesi"
                                              : "Battery Level"}
                                          </span>
                                          <span className="text-sm font-bold text-zinc-700">
                                            {batteryLevel}%
                                          </span>
                                        </div>
                                        <div className="relative h-2 bg-zinc-100 rounded-full overflow-hidden border">
                                          <div
                                            className="absolute h-full bg-green-500 rounded-full transition-all"
                                            style={{ width: `${batteryLevel}%` }}
                                          />
                                        </div>
                                      </div>

                                      <div className="pt-4 border-t flex justify-between items-center">
                                        <div className="flex flex-col">
                                          <span className="text-sm font-semibold text-zinc-800">
                                            {language === "Turkish"
                                              ? "Pil Yüzdesini Göster"
                                              : "Show Battery Percentage"}
                                          </span>
                                          <span className="text-[10px] text-zinc-400 font-bold uppercase leading-none mt-0.5">
                                            {language === "Turkish"
                                              ? "Durum çubuğunda pil yüzdesini göster"
                                              : "Show percentage in status bar"}
                                          </span>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("medium");
                                            setShowBatteryPercentage(!showBatteryPercentage);
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${showBatteryPercentage ? "bg-blue-600" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${showBatteryPercentage ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ) : lockScreenSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    {/* 1. Live Lock Screen Preview (Mini Mockup Frame) & Add Lock Screen Profiles Panel */}
                                    <div className="bg-zinc-950 dark:bg-zinc-900 rounded-3xl p-4 flex flex-col items-center gap-3 border border-zinc-800 dark:border-zinc-700 shadow-xl overflow-hidden relative">
                                      <div className="absolute top-2.5 left-4 text-[7px] font-black text-zinc-500 font-mono tracking-widest uppercase">
                                        {language === "Turkish" ? "KİLİT EKRANI ÖNİZLEME" : "LOCK SCREEN LIVE PREVIEW"}
                                      </div>
                                      
                                      {/* Scaled Lock Screen Mockup Container */}
                                      <div 
                                        className="relative w-[170px] h-[300px] rounded-2xl overflow-hidden border border-zinc-800/80 dark:border-zinc-700/80 shadow-2xl flex flex-col justify-between py-5 px-3 select-none bg-cover bg-center transition-all duration-500 mt-3"
                                        style={{ backgroundImage: `url(${wallpaper})` }}
                                      >
                                        {/* Dynamic Island mini mockup */}
                                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-10 flex items-center justify-center border border-zinc-800">
                                          <div className="w-1.5 h-1.5 bg-[#0f1115] rounded-full absolute left-2" />
                                          <div className="w-1 h-1 bg-[#1a1c24] rounded-full absolute right-2" />
                                        </div>

                                        {/* Centered Clock Area */}
                                        <div className="text-center w-full flex flex-col items-center mt-2.5 scale-75 origin-top">
                                          <div
                                            className={`text-[12px] font-semibold tracking-wide mb-0.5 ${lockScreenFont}`}
                                            style={{ color: lockScreenColor, opacity: 0.95 }}
                                          >
                                            {dateString}
                                          </div>
                                          
                                          <div 
                                            style={{
                                              transform: `scale(${lockScreenClockZoom / 100}) translate(${lockScreenClockXOffset / 2}px, ${lockScreenClockYOffset / 2}px)`,
                                              transformOrigin: "center top",
                                            }}
                                            className="w-full flex justify-center items-center"
                                          >
                                            {lockScreenClockStyle === 1 && (
                                              <div className={`text-[36px] font-bold tracking-tighter leading-none ${lockScreenFont}`} style={{ color: lockScreenColor }}>
                                                {lockScreenFont === "font-display" ? (
                                                  <span className="flex items-center gap-0.5">
                                                    <span className="font-black uppercase">{timeString.split(":")[0]}</span>
                                                    <span className="font-black uppercase text-outline">{timeString.split(":")[1]}</span>
                                                  </span>
                                                ) : timeString}
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 2 && (
                                              <div className={`flex flex-col items-center justify-center font-black leading-[0.8] tracking-tighter uppercase text-[36px] ${lockScreenFont}`} style={{ color: lockScreenColor }}>
                                                <span>{timeString.split(":")[0]}</span>
                                                <span>{timeString.split(":")[1]}</span>
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 3 && (
                                              <div className={`text-[38px] font-bold tracking-tighter leading-none flex items-center justify-center ${lockScreenFont}`} style={{ color: lockScreenColor }}>
                                                <span className="text-white">{timeString.split(":")[0]}</span>
                                                <span className="opacity-45 mx-0.5">:</span>
                                                <span style={{ color: lockScreenColor }}>{timeString.split(":")[1]}</span>
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 4 && (
                                              <div className={`text-[40px] font-bold tracking-tighter leading-none text-outline-white text-transparent ${lockScreenFont}`} style={{ color: lockScreenColor, WebkitTextStroke: "1px white" }}>
                                                {timeString}
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 5 && (
                                              <div className={`text-[28px] font-light tracking-widest leading-none py-1 border-y border-white/20 px-2 flex items-center justify-center ${lockScreenFont}`} style={{ color: lockScreenColor }}>
                                                {timeString}
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 6 && (
                                              <div className="font-mono text-center text-xs tracking-widest flex flex-col gap-0.5 border border-white/10 p-1.5 rounded bg-black/40">
                                                <span className={`text-base font-bold leading-none ${lockScreenFont}`} style={{ color: lockScreenColor }}>{timeString}</span>
                                                <span className="text-[6px] text-white/50">{dateString}</span>
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 7 && (
                                              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center relative bg-black/25">
                                                <div className="absolute top-[6px] text-[6px] font-bold text-white/50">12</div>
                                                <div className="z-10 text-xs font-black" style={{ color: lockScreenColor }}>{timeString}</div>
                                                <div className="absolute w-[1.5px] h-6 origin-bottom transform rotate-[90deg] bg-white bottom-8 left-8" />
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 8 && (
                                              <div className={`text-[38px] font-black tracking-normal leading-none ${lockScreenFont}`} style={{ color: lockScreenColor, textShadow: `0 0 10px ${lockScreenColor}90` }}>
                                                {timeString}
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 9 && (
                                              <div className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl bg-black/20 border border-white/5 ${lockScreenFont}`}>
                                                <span className="text-[26px] font-bold leading-none" style={{ color: lockScreenColor }}>{timeString.split(":")[0]}</span>
                                                <div className="w-6 h-[1px] bg-white/30 my-0.5" />
                                                <span className="text-[26px] font-bold leading-none text-white/60">{timeString.split(":")[1]}</span>
                                              </div>
                                            )}
                                            {lockScreenClockStyle === 10 && (
                                              <div className="flex flex-col items-center justify-center font-mono text-[14px] bg-zinc-950/90 border border-zinc-800 p-1 rounded shadow-lg text-center" style={{ color: lockScreenColor }}>
                                                <span className="text-[5px] opacity-35 tracking-widest leading-none">SYSTEM ACTIVE</span>
                                                <span className="font-bold leading-none mt-0.5">{timeString}</span>
                                              </div>
                                            )}
                                          </div>
                                        </div>

                                        {/* Mock widgets row inside mockup */}
                                        {enabledWidgets.length > 0 && (
                                          <div className="flex gap-1 items-center justify-center scale-95 w-content mt-3 select-none">
                                            {enabledWidgets.slice(0, 3).map((wid) => {
                                              if (wid === "weather") {
                                                return (
                                                  <div key={wid} className="p-1 rounded-md bg-black/25 border border-white/5 text-white flex items-center gap-0.5">
                                                    <CloudSun size={7} className="text-orange-300" />
                                                    <span className="text-[5px] font-bold leading-none">19°</span>
                                                  </div>
                                                );
                                              }
                                              if (wid === "calendar") {
                                                return (
                                                  <div key={wid} className="p-1 rounded-md bg-black/25 border border-white/5 text-white flex items-center gap-0.5">
                                                    <Calendar size={7} className="text-red-300" />
                                                    <span className="text-[4px] font-bold leading-none truncate max-w-[24px]">Meet</span>
                                                  </div>
                                                );
                                              }
                                              if (wid === "battery") {
                                                return (
                                                  <div key={wid} className="p-1 rounded-md bg-black/25 border border-white/5 text-white flex items-center gap-0.5">
                                                    <Battery size={7} className="text-green-300" />
                                                    <span className="text-[5px] font-bold leading-none">{batteryLevel}%</span>
                                                  </div>
                                                );
                                              }
                                              if (wid === "activity") {
                                                return (
                                                  <div key={wid} className="p-1 rounded-md bg-black/25 border border-white/5 text-white flex items-center gap-0.5">
                                                    <Zap size={7} className="text-orange-400" />
                                                    <span className="text-[5px] font-bold leading-none">Fit</span>
                                                  </div>
                                                );
                                              }
                                              return null;
                                            })}
                                          </div>
                                        )}

                                        {/* Slide handle at bottom */}
                                        <div className="w-full flex flex-col items-center gap-1 mt-auto">
                                          <span className="text-[6px] text-white/50 font-black tracking-widest uppercase leading-none">SWIPE TO UNLOCK</span>
                                          <div className="w-8 h-1 bg-white/30 rounded-full" />
                                        </div>
                                      </div>

                                      {/* 2. Lock Screen Profiles Carousel ("Add Lock Screen" settings) */}
                                      <div className="w-full space-y-2 pt-2 border-t border-zinc-800 dark:border-zinc-700">
                                        <div className="flex justify-between items-center px-1">
                                          <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider">
                                            {language === "Turkish" ? "KAYITLI PROFİLLER" : "SAVED PROFILES"}
                                          </span>
                                          <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
                                            {lockScreenProfiles.length} {language === "Turkish" ? "PROFIL" : "PROFILES"}
                                          </span>
                                        </div>
                                        
                                        {/* Horizontal Scrolling Carousel of profiles */}
                                        <div className="flex gap-2 w-full overflow-x-auto pb-1 scrollbar-none">
                                          {lockScreenProfiles.map((p) => {
                                            const isActive = p.id === activeLockScreenProfileId;
                                            return (
                                              <div 
                                                key={p.id}
                                                className="shrink-0 flex flex-col gap-1 items-center"
                                              >
                                                <button
                                                  onClick={() => {
                                                    triggerHaptic("medium");
                                                    handleSelectProfile(p.id);
                                                  }}
                                                  className={`relative w-[54px] h-[80px] rounded-xl overflow-hidden border-2 transition-all bg-cover bg-center duration-300 ${isActive ? "border-blue-500 scale-95 shadow-md ring-2 ring-blue-500/20" : "border-zinc-800 dark:border-zinc-700 hover:border-zinc-500"}`}
                                                  style={{ backgroundImage: `url(${p.wallpaper || wallpaper})` }}
                                                >
                                                  {/* Miniature Clock preview */}
                                                  <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center opacity-85 leading-none">
                                                    <span 
                                                      className={`text-[9px] font-bold tracking-tighter leading-none ${p.font}`} 
                                                      style={{ color: p.color }}
                                                    >
                                                      {timeString}
                                                    </span>
                                                    <span className="text-[3px] text-white/50 uppercase font-bold mt-0.5 scale-90">Style {p.clockStyle}</span>
                                                  </div>

                                                  {/* Delete button (if it's not the only profile) */}
                                                  {lockScreenProfiles.length > 1 && (
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        triggerHaptic("heavy");
                                                        setLockScreenProfiles((prev) => prev.filter((item) => item.id !== p.id));
                                                        if (isActive) {
                                                          const remain = lockScreenProfiles.filter((item) => item.id !== p.id);
                                                          handleSelectProfile(remain[0].id);
                                                        }
                                                      }}
                                                      className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-[8px] hover:bg-red-500 shadow-md cursor-pointer active:scale-90"
                                                      title="Delete profile"
                                                    >
                                                      ×
                                                    </button>
                                                  )}

                                                  {/* Active check indicator */}
                                                  {isActive && (
                                                    <div className="absolute bottom-0.5 right-0.5 bg-blue-500 text-white rounded-full p-0.5 shadow">
                                                      <Check size={6} strokeWidth={3} />
                                                    </div>
                                                  )}
                                                </button>
                                                <span className={`text-[7px] font-black text-center truncate max-w-[54px] uppercase ${isActive ? "text-blue-400" : "text-zinc-500"}`}>
                                                  {p.name.replace("Lock Screen ", "L-")}
                                                </span>
                                              </div>
                                            );
                                          })}

                                          {/* Add New Lock Screen button */}
                                          <button
                                            onClick={() => {
                                              handleAddLockScreenProfile();
                                            }}
                                            className="shrink-0 w-[54px] h-[80px] rounded-xl border-2 border-dashed border-zinc-700 hover:border-blue-500 dark:border-zinc-650 flex flex-col items-center justify-center gap-1 transition-all text-zinc-500 hover:text-blue-400 cursor-pointer group active:scale-95"
                                          >
                                            <Plus size={14} className="group-hover:scale-110 transition-transform" />
                                            <span className="text-[6px] font-black uppercase tracking-wider text-center leading-tight">
                                              {language === "Turkish" ? "YENİ EKLE" : "ADD NEW"}
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Güvenlik & Kilit"
                                            : "Security & Lock"}
                                        </span>
                                        <div className="flex flex-col gap-4">
                                          <div className="space-y-3">
                                            <div className="flex justify-between items-center px-1">
                                              <span className="text-xs font-bold uppercase text-zinc-500">
                                                {language === "Turkish"
                                                  ? "PIN Koruması"
                                                  : "PIN Protection"}
                                              </span>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("heavy");
                                                  setIsPasscodeEnabled(
                                                    !isPasscodeEnabled,
                                                  );
                                                }}
                                                className={`h-6 w-11 rounded-full p-1 transition-colors ${isPasscodeEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                              >
                                                <div
                                                  className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isPasscodeEnabled ? "ml-auto" : "ml-0"}`}
                                                />
                                              </button>
                                            </div>
                                            {isPasscodeEnabled && (
                                              <input
                                                type="text"
                                                value={passcode}
                                                onChange={(e) => {
                                                  const val = e.target.value;
                                                  if (val.length <= 8)
                                                    setPasscode(val);
                                                }}
                                                placeholder={
                                                  language === "Turkish"
                                                    ? "PIN Belirle"
                                                    : "Set PIN"
                                                }
                                                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-3 px-5 text-sm font-mono tracking-widest placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-center"
                                              />
                                            )}
                                          </div>

                                          <div className="pt-4 border-t space-y-4">
                                            <div className="flex justify-between items-center px-1">
                                              <span className="text-xs font-bold uppercase text-zinc-500">
                                                {language === "Turkish"
                                                  ? "Desen Koruması"
                                                  : "Pattern Protection"}
                                              </span>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("heavy");
                                                  setIsPatternEnabled(
                                                    !isPatternEnabled,
                                                  );
                                                }}
                                                className={`h-6 w-11 rounded-full p-1 transition-colors ${isPatternEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                              >
                                                <div
                                                  className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isPatternEnabled ? "ml-auto" : "ml-0"}`}
                                                />
                                              </button>
                                            </div>

                                            {isPatternEnabled && (
                                              <div className="space-y-4">
                                                {isSettingPattern ? (
                                                  <div className="animate-in fade-in zoom-in duration-300">
                                                    <PatternLock
                                                      title={
                                                        patternStep === "new"
                                                          ? language ===
                                                            "Turkish"
                                                            ? "Yeni Desen Çiz"
                                                            : "Draw New Pattern"
                                                          : language ===
                                                              "Turkish"
                                                            ? "Deseni Onayla"
                                                            : "Confirm Pattern"
                                                      }
                                                      subtitle={
                                                        patternStep === "new"
                                                          ? language ===
                                                            "Turkish"
                                                            ? "En az 4 noktayı birleştirin"
                                                            : "Connect at least 4 dots"
                                                          : language ===
                                                              "Turkish"
                                                            ? "Onaylamak için tekrar çiz"
                                                            : "Draw again to confirm"
                                                      }
                                                      error={securityError}
                                                      onComplete={(p) => {
                                                        if (p.length < 4) {
                                                          setSecurityError(
                                                            true,
                                                          );
                                                          triggerHaptic(
                                                            "heavy",
                                                          );
                                                          setTimeout(
                                                            () =>
                                                              setSecurityError(
                                                                false,
                                                              ),
                                                            1000,
                                                          );
                                                          return;
                                                        }

                                                        if (
                                                          patternStep === "new"
                                                        ) {
                                                          setTempPattern(p);
                                                          setPatternStep(
                                                            "confirm",
                                                          );
                                                          triggerHaptic(
                                                            "medium",
                                                          );
                                                        } else {
                                                          if (
                                                            JSON.stringify(
                                                              p,
                                                            ) ===
                                                            JSON.stringify(
                                                              tempPattern,
                                                            )
                                                          ) {
                                                            setPattern(p);
                                                            setIsSettingPattern(
                                                              false,
                                                            );
                                                            setPatternStep(
                                                              "new",
                                                            );
                                                            triggerHaptic(
                                                              "heavy",
                                                            );
                                                          } else {
                                                            setSecurityError(
                                                              true,
                                                            );
                                                            triggerHaptic(
                                                              "heavy",
                                                            );
                                                            setTimeout(
                                                              () =>
                                                                setSecurityError(
                                                                  false,
                                                                ),
                                                              1000,
                                                            );
                                                          }
                                                        }
                                                      }}
                                                    />
                                                    <button
                                                      onClick={() =>
                                                        setIsSettingPattern(
                                                          false,
                                                        )
                                                      }
                                                      className="w-full mt-4 py-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-600"
                                                    >
                                                      {language === "Turkish"
                                                        ? "İptal"
                                                        : "Cancel"}
                                                    </button>
                                                  </div>
                                                ) : (
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("medium");
                                                      setIsSettingPattern(true);
                                                      setPatternStep("new");
                                                    }}
                                                    className="w-full bg-zinc-900 text-white rounded-xl py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-md active:scale-95"
                                                  >
                                                    {pattern.length > 0
                                                      ? language === "Turkish"
                                                        ? "Deseni Değiştir"
                                                        : "Change Pattern"
                                                      : language === "Turkish"
                                                        ? "Deseni Ayarla"
                                                        : "Setup Pattern"}
                                                  </button>
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>

                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Kilit Ekranı Stili"
                                            : "Lock Screen Style"}
                                        </span>
                                        <div className="space-y-4">
                                          {/* Style selection */}
                                          <div className="space-y-2">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase ml-1">
                                              {language === "Turkish" ? "Saat Stili" : "Clock Style"}
                                            </span>
                                            <div className="grid grid-cols-5 gap-1.5 p-1 bg-zinc-50 dark:bg-zinc-800/25 rounded-xl border border-zinc-100/80 dark:border-zinc-800/30">
                                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((styleNum) => (
                                                <button
                                                  key={styleNum}
                                                  onClick={() => {
                                                    triggerHaptic("light");
                                                    setLockScreenClockStyle(styleNum);
                                                  }}
                                                  className={`py-2 rounded-lg text-[11px] font-black transition-all flex items-center justify-center ${
                                                    lockScreenClockStyle === styleNum
                                                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm"
                                                      : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/40"
                                                  }`}
                                                >
                                                  <span>{styleNum}</span>
                                                </button>
                                              ))}
                                            </div>
                                            <div className="text-[10px] text-zinc-400 font-medium px-1 leading-normal italic mt-1 bg-zinc-50/50 p-2 rounded-lg border border-zinc-100/40">
                                              {lockScreenClockStyle === 1 && (language === "Turkish" ? "Klasik Dijital" : "Style 1: Classic Digital")}
                                              {lockScreenClockStyle === 2 && (language === "Turkish" ? "Yığılmış Kalın Saat" : "Style 2: Android Stacked Bold")}
                                              {lockScreenClockStyle === 3 && (language === "Turkish" ? "Vurgulanmış Saat" : "Style 3: Accent Hour")}
                                              {lockScreenClockStyle === 4 && (language === "Turkish" ? "Çift Anahat Ekranı" : "Style 4: Double Outline")}
                                              {lockScreenClockStyle === 5 && (language === "Turkish" ? "Modern İnce Çizgi" : "Style 5: Modern Thin-Line")}
                                              {lockScreenClockStyle === 6 && (language === "Turkish" ? "Siber Monospace Terminali" : "Style 6: Cyber Terminal")}
                                              {lockScreenClockStyle === 7 && (language === "Turkish" ? "Cam Analog Kadran" : "Style 7: Analog Glass Dial")}
                                              {lockScreenClockStyle === 8 && (language === "Turkish" ? "Rüya Parlayan Neon" : "Style 8: Ethereal Glow")}
                                              {lockScreenClockStyle === 9 && (language === "Turkish" ? "Çift Satırlı Vurgulu Split" : "Style 9: DualLine Separator")}
                                              {lockScreenClockStyle === 10 && (language === "Turkish" ? "Askeri Siber Izgara" : "Style 10: Sci-Fi Tech Grid")}
                                            </div>
                                          </div>

                                          {/* Clock Font selection */}
                                          <div className="space-y-2">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase ml-1">
                                              {language === "Turkish"
                                                ? "Saat Yazı Tipi"
                                                : "Clock Font"}
                                            </span>
                                            <div className="grid grid-cols-4 gap-2">
                                              {[
                                                {
                                                  id: "font-sans",
                                                  name: "Sans",
                                                },
                                                {
                                                  id: "font-serif",
                                                  name: "Serif",
                                                },
                                                {
                                                  id: "font-mono",
                                                  name: "Mono",
                                                },
                                                {
                                                  id: "font-display",
                                                  name: "Wepol",
                                                },
                                              ].map((f) => (
                                                <button
                                                  key={f.id}
                                                  onClick={() => {
                                                    triggerHaptic("light");
                                                    setLockScreenFont(f.id);
                                                  }}
                                                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${lockScreenFont === f.id ? "bg-zinc-900 text-white border-zinc-900 shadow-md" : "bg-zinc-50 text-zinc-400 border-zinc-100 hover:bg-zinc-100"}`}
                                                >
                                                  {f.name}
                                                </button>
                                              ))}
                                            </div>
                                          </div>

                                          {/* Clock Color picker */}
                                          <div className="space-y-2">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase ml-1">
                                              {language === "Turkish"
                                                ? "Saat Rengi"
                                                : "Clock Color"}
                                            </span>
                                            <div className="flex flex-wrap items-center gap-2 p-2 bg-zinc-50 dark:bg-zinc-800/10 rounded-xl border border-zinc-100/50">
                                              {[
                                                "#ffffff",
                                                "#cbd5e1",
                                                "#fca5a5",
                                                "#fcd34d",
                                                "#86efac",
                                                "#93c5fd",
                                                "#c084fc",
                                                "#fda4af",
                                                "#22d3ee",
                                                "#a7f3d0",
                                              ].map((c) => (
                                                <button
                                                  key={c}
                                                  onClick={() => {
                                                    triggerHaptic("light");
                                                    setLockScreenColor(c);
                                                  }}
                                                  className={`w-7 h-7 rounded-full border-2 transition-all ${lockScreenColor === c ? "border-zinc-900 scale-110 shadow-md ring-2 ring-zinc-200" : "border-black/5 hover:scale-105"}`}
                                                  style={{ backgroundColor: c }}
                                                />
                                              ))}
                                              {/* Dynamic standard color input picker */}
                                              <div className="flex items-center gap-1 ml-auto pl-1.5 border-l border-zinc-200 dark:border-zinc-700">
                                                <input
                                                  type="color"
                                                  value={lockScreenColor.startsWith("#") && lockScreenColor.length === 7 ? lockScreenColor : "#ffffff"}
                                                  onChange={(e) => {
                                                    setLockScreenColor(e.target.value);
                                                  }}
                                                  className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0"
                                                />
                                                <input
                                                  type="text"
                                                  value={lockScreenColor}
                                                  onChange={(e) => {
                                                    setLockScreenColor(e.target.value);
                                                  }}
                                                  placeholder="#ffffff"
                                                  className="w-16 text-[9px] font-mono font-bold bg-white dark:bg-zinc-900 dark:text-zinc-100 py-1 px-1 rounded border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:border-zinc-400 text-center uppercase"
                                                />
                                              </div>
                                            </div>
                                          </div>

                                          {/* Tactical Size & Directional Controller Pad */}
                                          <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase ml-1">
                                              {language === "Turkish" ? "Hızlı Boyut & Yön Tuşları" : "Size & Position Control Pad (D-pad)"}
                                            </span>
                                            
                                            <div className="grid grid-cols-12 gap-3 items-center p-3 bg-zinc-50 dark:bg-zinc-800/25 rounded-2xl border border-zinc-100/80 dark:border-zinc-800/30">
                                              {/* 1. Size Controller Area (Left side - Col span 5) */}
                                              <div className="col-span-12 xs:col-span-5 flex flex-col items-center justify-center gap-2 border-b xs:border-b-0 xs:border-r border-zinc-200/50 dark:border-zinc-800/50 pb-2 xs:pb-0 xs:pr-2">
                                                <span className="text-[10px] font-semibold text-zinc-500 uppercase">
                                                  {language === "Turkish" ? "Boyut" : "Size"}
                                                </span>
                                                <div className="flex gap-1.5">
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockZoom(Math.max(50, lockScreenClockZoom - 5));
                                                    }}
                                                    className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-center shadow-sm text-zinc-700 dark:text-zinc-300 font-bold active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Küçült" : "Make Smaller"}
                                                  >
                                                    <Minus size={16} />
                                                  </button>
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockZoom(Math.min(150, lockScreenClockZoom + 5));
                                                    }}
                                                    className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-center shadow-sm text-zinc-700 dark:text-zinc-300 font-bold active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Büyüt" : "Make Bigger"}
                                                  >
                                                    <Plus size={16} />
                                                  </button>
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-zinc-800 dark:text-zinc-300 bg-white dark:bg-zinc-900 py-0.5 px-2 rounded border border-zinc-200/40">
                                                  {lockScreenClockZoom}%
                                                </span>
                                              </div>

                                              {/* 2. Position Controller Area (Right side - Col span 7) */}
                                              <div className="col-span-12 xs:col-span-7 flex flex-col items-center justify-center gap-1.5">
                                                <span className="text-[10px] font-semibold text-zinc-500 uppercase mb-0.5">
                                                  {language === "Turkish" ? "Yön Tuşları" : "Directions"}
                                                </span>
                                                
                                                {/* Directional Pad Grid */}
                                                <div className="grid grid-cols-3 gap-1 w-28">
                                                  {/* Row 1: empty, Up, empty */}
                                                  <div />
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockYOffset(Math.max(-50, lockScreenClockYOffset - 5));
                                                    }}
                                                    className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Yukarı" : "Up"}
                                                  >
                                                    <ChevronUp size={16} strokeWidth={2.5} />
                                                  </button>
                                                  <div />

                                                  {/* Row 2: Left, Reset, Right */}
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockXOffset(Math.max(-100, lockScreenClockXOffset - 5));
                                                    }}
                                                    className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Sol" : "Left"}
                                                  >
                                                    <ChevronLeft size={16} strokeWidth={2.5} />
                                                  </button>
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockXOffset(0);
                                                      setLockScreenClockYOffset(0);
                                                    }}
                                                    className="w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-805 border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-600 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Orijinal Konuma Sıfırla" : "Reset Position"}
                                                  >
                                                    <RefreshCw size={10} />
                                                  </button>
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockXOffset(Math.min(100, lockScreenClockXOffset + 5));
                                                    }}
                                                    className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Sağ" : "Right"}
                                                  >
                                                    <ChevronRight size={16} strokeWidth={2.5} />
                                                  </button>

                                                  {/* Row 3: empty, Down, empty */}
                                                  <div />
                                                  <button
                                                    onClick={() => {
                                                      triggerHaptic("light");
                                                      setLockScreenClockYOffset(Math.min(150, lockScreenClockYOffset + 5));
                                                    }}
                                                    className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                                                    title={language === "Turkish" ? "Aşağı" : "Down"}
                                                  >
                                                    <ChevronDown size={16} strokeWidth={2.5} />
                                                  </button>
                                                  <div />
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Clock Position Slider */}
                                          <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <div className="flex justify-between items-center px-1">
                                              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                                                {language === "Turkish" ? "Pozisyon Ayarı (Dikey)" : "Position Adjustment (Y)"}
                                              </span>
                                              <span className="text-[10px] font-bold font-mono text-zinc-800 dark:text-zinc-300">
                                                {lockScreenClockYOffset > 0 ? `+` : ""}{lockScreenClockYOffset}px
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                              <span className="text-[10px] text-zinc-400 font-bold">-50</span>
                                              <input
                                                type="range"
                                                min="-50"
                                                max="150"
                                                value={lockScreenClockYOffset}
                                                onChange={(e) => {
                                                  setLockScreenClockYOffset(parseInt(e.target.value));
                                                }}
                                                className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                                              />
                                              <span className="text-[10px] text-zinc-400 font-bold">+150</span>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("light");
                                                  setLockScreenClockYOffset(0);
                                                }}
                                                className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 transition-colors"
                                              >
                                                {language === "Turkish" ? "Sıfırla" : "Reset"}
                                              </button>
                                            </div>
                                          </div>

                                          {/* Clock Position Slider (X) */}
                                          <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <div className="flex justify-between items-center px-1">
                                              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                                                {language === "Turkish" ? "Pozisyon Ayarı (Yatay)" : "Position Adjustment (X - Left/Right)"}
                                              </span>
                                              <span className="text-[10px] font-bold font-mono text-zinc-800 dark:text-zinc-300">
                                                {lockScreenClockXOffset > 0 ? `+` : ""}{lockScreenClockXOffset}px
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                              <span className="text-[10px] text-zinc-400 font-bold">-100</span>
                                              <input
                                                type="range"
                                                min="-100"
                                                max="100"
                                                value={lockScreenClockXOffset}
                                                onChange={(e) => {
                                                  setLockScreenClockXOffset(parseInt(e.target.value));
                                                }}
                                                className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                                              />
                                              <span className="text-[10px] text-zinc-400 font-bold">+100</span>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("light");
                                                  setLockScreenClockXOffset(0);
                                                }}
                                                className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 transition-colors"
                                              >
                                                {language === "Turkish" ? "Sıfırla" : "Reset"}
                                              </button>
                                            </div>
                                          </div>

                                          {/* Clock Zoom Option Slider */}
                                          <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/50">
                                            <div className="flex justify-between items-center px-1">
                                              <span className="text-[10px] font-bold text-zinc-400 uppercase">
                                                {language === "Turkish" ? "Boyut Yakınlaştırma" : "Clock Zoom Level"}
                                              </span>
                                              <span className="text-[10px] font-bold font-mono text-zinc-800 dark:text-zinc-300">
                                                {lockScreenClockZoom}%
                                              </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                              <span className="text-[10px] text-zinc-400 font-bold">50%</span>
                                              <input
                                                type="range"
                                                min="50"
                                                max="150"
                                                value={lockScreenClockZoom}
                                                onChange={(e) => {
                                                  setLockScreenClockZoom(parseInt(e.target.value));
                                                }}
                                                className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                                              />
                                              <span className="text-[10px] text-zinc-400 font-bold">150%</span>
                                              <button
                                                onClick={() => {
                                                  triggerHaptic("light");
                                                  setLockScreenClockZoom(100);
                                                }}
                                                className="px-2 py-0.5 rounded-md text-[9px] font-black uppercase text-zinc-400 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 transition-colors"
                                              >
                                                {language === "Turkish" ? "Sıfırla" : "Reset"}
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>

                                    {/* Lock & Unlock Sound Effects Toggle */}
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                        {language === "Turkish"
                                          ? "Ses Efektleri"
                                          : "Sound Effects"}
                                      </span>
                                      <div className="space-y-3.5 divide-y divide-zinc-100">
                                        <div className="flex justify-between items-center px-1">
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Ekran Kilitleme Sesi"
                                                : "Lock Sound"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Kilitlendiğinde ses çal"
                                                : "Play sound when locking"}
                                            </span>
                                          </div>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              setIsLockSoundEnabled(
                                                !isLockSoundEnabled,
                                              );
                                            }}
                                            className={`h-6 w-11 rounded-full p-1 transition-colors ${isLockSoundEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                          >
                                            <div
                                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isLockSoundEnabled ? "ml-auto" : "ml-0"}`}
                                            />
                                          </button>
                                        </div>
                                        <div className="flex justify-between items-center px-1 pt-3.5">
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              {language === "Turkish"
                                                ? "Ekran Kilit Açma Sesi"
                                                : "Unlock Sound"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Kilit açıldığında ses çal"
                                                : "Play sound when unlocking"}
                                            </span>
                                          </div>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              setIsUnlockSoundEnabled(
                                                !isUnlockSoundEnabled,
                                              );
                                            }}
                                            className={`h-6 w-11 rounded-full p-1 transition-colors ${isUnlockSoundEnabled ? "bg-blue-600" : "bg-zinc-200"}`}
                                          >
                                            <div
                                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isUnlockSoundEnabled ? "ml-auto" : "ml-0"}`}
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="p-4 bg-zinc-100 rounded-2xl text-[10px] text-zinc-400 font-bold uppercase leading-relaxed">
                                      {language === "Turkish"
                                        ? "Seçili widgetlar kilit ekranında saat ve tarihin altında görünecektir."
                                        : "Selected widgets will appear on your lock screen below the clock and date."}
                                    </div>
                                  </div>
                                ) : dynamicIslandSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                      <div className="flex flex-col gap-4 p-4 text-center">
                                        <div className="flex flex-col gap-1">
                                          <span className="text-sm font-semibold">
                                            Dynamic Island Status
                                          </span>
                                          <span
                                            className={`text-[10px] font-bold uppercase tracking-wider ${isDynamicIslandEnabled ? "text-green-500" : "text-zinc-400"}`}
                                          >
                                            {isDynamicIslandEnabled
                                              ? "Currently Operational"
                                              : "Deactivated"}
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              startIslandStartupAnimation();
                                              setCameraMode("dot");
                                            }}
                                            className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${isDynamicIslandEnabled ? "bg-zinc-900 text-white shadow-md" : "bg-zinc-100 text-zinc-400"}`}
                                          >
                                            Open
                                          </button>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              startIslandShutdownAnimation();
                                              setCameraMode("dot");
                                            }}
                                            className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${!isDynamicIslandEnabled ? "bg-zinc-900 text-white shadow-md" : "bg-zinc-100 text-zinc-400"}`}
                                          >
                                            Close
                                          </button>
                                        </div>
                                      </div>
                                      <div className="pt-3 px-4 pb-4 border-t flex flex-col gap-2">
                                        <span className="text-[10px] font-black text-left text-zinc-400 uppercase tracking-widest">
                                          Animations Demo
                                        </span>
                                        <div className="grid grid-cols-2 gap-2 text-center">
                                          <button
                                            onClick={() =>
                                              startIslandStartupAnimation()
                                            }
                                            className="py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-600 border border-sky-100 hover:bg-sky-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                                          >
                                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                                            {language === "Turkish"
                                              ? "Başlatma Efekti"
                                              : "Play Startup"}
                                          </button>
                                          <button
                                            onClick={() =>
                                              startIslandShutdownAnimation()
                                            }
                                            className="py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-105 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                                          >
                                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                            {language === "Turkish"
                                              ? "Kapatma Efekti"
                                              : "Play Shutdown"}
                                          </button>
                                        </div>
                                      </div>
                                      {isDynamicIslandEnabled && (
                                        <div className="p-4 space-y-4">
                                          <div>
                                            <div className="flex justify-between mb-2">
                                              <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight">
                                                Island Width
                                              </span>
                                              <span className="text-xs font-bold text-blue-600">
                                                x{dynamicIslandWidth.toFixed(1)}
                                              </span>
                                            </div>
                                            <input
                                              type="range"
                                              min="0.5"
                                              max="2"
                                              step="0.1"
                                              value={dynamicIslandWidth}
                                              onChange={(e) => {
                                                const val = parseFloat(
                                                  e.target.value,
                                                );
                                                if (
                                                  Math.abs(
                                                    val - dynamicIslandWidth,
                                                  ) > 0.1
                                                )
                                                  triggerHaptic("light");
                                                setDynamicIslandWidth(val);
                                              }}
                                              className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            />
                                          </div>
                                          <div>
                                            <div className="flex justify-between mb-2">
                                              <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight">
                                                Island Height
                                              </span>
                                              <span className="text-xs font-bold text-blue-600">
                                                x
                                                {dynamicIslandHeight.toFixed(1)}
                                              </span>
                                            </div>
                                            <input
                                              type="range"
                                              min="0.5"
                                              max="2"
                                              step="0.1"
                                              value={dynamicIslandHeight}
                                              onChange={(e) => {
                                                const val = parseFloat(
                                                  e.target.value,
                                                );
                                                if (
                                                  Math.abs(
                                                    val - dynamicIslandHeight,
                                                  ) > 0.1
                                                )
                                                  triggerHaptic("light");
                                                setDynamicIslandHeight(val);
                                              }}
                                              className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            />
                                          </div>
                                        </div>
                                      )}
                                      <div className="p-4 space-y-4">
                                        <div>
                                          <div className="flex justify-between mb-2">
                                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-tight">
                                              Camera Punch Hole Size
                                            </span>
                                            <span className="text-xs font-bold text-blue-600">
                                              x{cameraPointScale.toFixed(1)}
                                            </span>
                                          </div>
                                          <input
                                            type="range"
                                            min="0.5"
                                            max="3"
                                            step="0.1"
                                            value={cameraPointScale}
                                            onChange={(e) => {
                                              const val = parseFloat(
                                                e.target.value,
                                              );
                                              if (
                                                Math.abs(
                                                  val - cameraPointScale,
                                                ) > 0.2
                                              )
                                                triggerHaptic("light");
                                              setCameraPointScale(val);
                                            }}
                                            className="w-full h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                          />
                                        </div>
                                      </div>
                                      {!isDynamicIslandEnabled && (
                                        <div className="flex justify-between items-center px-4 py-3.5">
                                          <div className="flex flex-col">
                                            <span className="text-sm font-semibold">
                                              Camera Pointer
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              Hardware Dot Notch
                                            </span>
                                          </div>
                                          <button
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              setCameraMode(
                                                cameraMode === "none"
                                                  ? "dot"
                                                  : "none",
                                              );
                                            }}
                                            className={`h-6 w-11 rounded-full p-1 transition-colors ${cameraMode !== "none" ? "bg-blue-500" : "bg-zinc-200"}`}
                                          >
                                            <div
                                              className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${cameraMode !== "none" ? "ml-auto" : "ml-0"}`}
                                            />
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    <div className="p-4 bg-zinc-100 rounded-2xl">
                                      <p className="text-[10px] text-zinc-400 font-bold uppercase leading-relaxed">
                                        Closing Dynamic Island replaces the
                                        interactive notch with a minimal camera
                                        pointer.
                                      </p>
                                    </div>
                                  </div>
                                ) : wallpaperSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <div className="flex justify-between items-center mb-2">
                                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                                          Default Library
                                        </h4>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("medium");
                                            handleSetApp(
                                              apps.find(
                                                (a) => a.id === "photos",
                                              ) || null,
                                            );
                                          }}
                                          className="text-blue-500 font-bold text-[10px] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                                        >
                                          Photos
                                        </button>
                                      </div>
                                      <div className="grid grid-cols-2 gap-4">
                                        {photos.slice(0, 10).map((url, i) => (
                                          <button
                                            key={i}
                                            onClick={() => {
                                              triggerHaptic("medium");
                                              setWallpaper(url);
                                            }}
                                            className={`relative aspect-[9/16] rounded-2xl bg-zinc-100 overflow-hidden border-2 transition-all duration-300 ${wallpaper === url ? "border-blue-500 scale-95 shadow-xl ring-4 ring-blue-500/10" : "border-zinc-100 hover:scale-[1.02] shadow-sm"}`}
                                          >
                                            <img
                                              src={url}
                                              className="w-full h-full object-cover"
                                              alt="Wallpaper option"
                                            />
                                            {wallpaper === url && (
                                              <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                                                <div className="bg-blue-600 p-2 rounded-full text-white shadow-lg animate-in zoom-in-50 duration-300">
                                                  <div className="w-3 h-3 border-2 border-white rounded-full bg-white animate-pulse" />
                                                </div>
                                              </div>
                                            )}
                                          </button>
                                        ))}
                                      </div>
                                      <div className="pt-4 px-2">
                                        <p className="text-[10px] text-zinc-400 font-bold uppercase text-center tracking-widest leading-relaxed">
                                          Wallpapers are applied instantly to
                                          both home and lock screens. Choose
                                          high-resolution images for the best
                                          visual clarity.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ) : appearanceSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                                        Icon Themes
                                      </h4>
                                      <div className="grid grid-cols-1 gap-3">
                                        {[
                                          {
                                            id: "WePol",
                                            name: "WePol OS v4",
                                            desc: "Official",
                                            style: "bg-zinc-900 text-white",
                                          },
                                          {
                                            id: "Hyper",
                                            name: "Wepol OS v2",
                                            desc: "Futuristic Glass",
                                            style: "bg-indigo-100/50",
                                          },
                                          {
                                            id: "Color",
                                            name: "Wepol OS v3",
                                            desc: "Vibrant & Round",
                                            style: "bg-blue-100/50",
                                          },
                                          {
                                            id: "v4",
                                            name: "Wepol OS v4",
                                            desc: "Elite Neo-Brutal",
                                            style: "bg-zinc-900/50",
                                          },
                                        ].map((themeOpt) => (
                                          <button
                                            key={themeOpt.id}
                                            onClick={() => {
                                              triggerHaptic("heavy");
                                              setThemeStyle(themeOpt.id as any);
                                              // Update wallpaper based on theme for a better "enhanced" experience
                                              if (themeOpt.id === "Hyper")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "Color")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2670&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "WePol")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
                                                );
                                              if (themeOpt.id === "v4")
                                                setWallpaper(
                                                  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
                                                );
                                            }}
                                            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${themeStyle === themeOpt.id ? "border-blue-500 bg-blue-50/20" : "border-zinc-100 hover:bg-zinc-50"}`}
                                          >
                                            <div
                                              className={`w-12 h-12 rounded-xl ${themeOpt.style} flex items-center justify-center`}
                                            >
                                              <Palette
                                                size={24}
                                                className={
                                                  themeStyle === themeOpt.id
                                                    ? "text-blue-500"
                                                    : "text-zinc-400"
                                                }
                                              />
                                            </div>
                                            <div className="flex flex-col text-left flex-1">
                                              <span className="font-bold text-sm">
                                                {themeOpt.name}
                                              </span>
                                              <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                                {themeOpt.desc}
                                              </span>
                                            </div>
                                            {themeStyle === themeOpt.id && (
                                              <Check
                                                size={16}
                                                className="text-blue-600"
                                              />
                                            )}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="p-4 bg-zinc-100 rounded-2xl">
                                      <p className="text-[10px] text-zinc-400 font-bold uppercase leading-relaxed">
                                        Changing the icon theme will restructure
                                        your app grid appearance and apply a
                                        matching wallpaper.
                                      </p>
                                    </div>
                                  </div>
                                ) : accessibilitySettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                      <button
                                        onClick={() => {
                                          triggerHaptic("light");
                                          setDynamicIslandSettingsOpen(true);
                                        }}
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50 transition-colors text-left"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                                            <div className="w-4 h-2 rounded-full border border-white/50" />
                                          </div>
                                          <span className="text-sm font-semibold">
                                            Dynamic Island
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs text-zinc-400 font-bold uppercase">
                                            {cameraMode !== "dot"
                                              ? language === "Turkish"
                                                ? "Çentik"
                                                : "Notch"
                                              : isDynamicIslandEnabled
                                                ? language === "Turkish"
                                                  ? "Ada"
                                                  : "Island"
                                                : language === "Turkish"
                                                  ? "Nokta"
                                                  : "Dot"}
                                          </span>
                                          <ChevronLeft
                                            size={16}
                                            className="text-zinc-300 rotate-180"
                                          />
                                        </div>
                                      </button>
                                      <div className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-white block">
                                            <Layout size={16} />
                                          </div>
                                          <div className="flex flex-col text-left">
                                            <span className="text-sm font-semibold text-zinc-800">
                                              {language === "Turkish" ? "Dock Barı Göster" : "Show Dock Bar"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase leading-none mt-0.5">
                                              {language === "Turkish" ? "Alt panel rıhtımını aç / kapat" : "Enable or disable bottom dock bar"}
                                            </span>
                                          </div>
                                        </div>
                                        <button
                                          onClick={() => {
                                            triggerHaptic("medium");
                                            const targetState = !isDockBarEnabled;
                                            setIsDockBarEnabled(targetState);
                                            if (!targetState) {
                                              // Prevent dock apps from disappearing: copy them to home screen
                                              setApps((prevApps) => {
                                                const existingIds = new Set(prevApps.map((a) => a.id));
                                                const uniqueDockApps = dockApps.filter((a) => !existingIds.has(a.id));
                                                return [...prevApps, ...uniqueDockApps];
                                              });
                                            } else {
                                              // Remove merged dock apps from home screen to avoid duplication
                                              setApps((prevApps) => {
                                                const dockIds = new Set(dockApps.map((a) => a.id));
                                                return prevApps.filter((a) => !dockIds.has(a.id));
                                              });
                                            }
                                          }}
                                          className={`h-6 w-11 rounded-full p-1 transition-colors ${isDockBarEnabled ? "bg-blue-500" : "bg-zinc-200"}`}
                                        >
                                          <div
                                            className={`h-4 w-4 rounded-full bg-white shadow-sm transition-all ${isDockBarEnabled ? "ml-auto" : "ml-0"}`}
                                          />
                                        </button>
                                      </div>
                                      <button
                                        onClick={() => {
                                          if (isRestarting) return;
                                          triggerHaptic("heavy");
                                          setIsRestarting(true);
                                          setRestartCountdown(15);

                                          const timer = setInterval(() => {
                                            setRestartCountdown((prev) => {
                                              if (prev <= 1) {
                                                clearInterval(timer);
                                                setIsRestarting(false);

                                                // Trigger screen off visual state
                                                setIsSystemOff(true);

                                                setTimeout(() => {
                                                  // Wipe and Reset ALL system/user setting states to absolute defaults
                                                  setIsSetupComplete(false);
                                                  setSetupStep("hello");
                                                  setIsLocked(true);
                                                  setIsPasscodeEnabled(false);
                                                  setPasscode("");
                                                  setPasscodeEntry("");
                                                  setIsFingerprintEnabled(false);
                                                  setIsPatternEnabled(false);
                                                  setPattern([]);
                                                  setIsSimpleMode(false);
                                                  setIsDockBarEnabled(true);
                                                  setApps(APPS);
                                                  setDockApps(DOCK_APPS);
                                                  setWallpaper("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop");
                                                  setBrightness(65);
                                                  setVolume(50);
                                                  setIsWifiEnabled(true);
                                                  setIsBluetoothEnabled(true);
                                                  setIsAirplaneMode(false);
                                                  setIsMobileDataEnabled(false);
                                                  setIsFlashlightOn(false);
                                                  setIsSilentMode(false);
                                                  setIsLocationEnabled(true);
                                                  setIsRotationLocked(false);
                                                  setIsEyeShieldEnabled(false);
                                                  setIsNfcEnabled(false);

                                                  // Close active configurations and general windows
                                                  setMoreSettingsOpen(false);
                                                  setAboutDeviceOpen(false);
                                                  setHomeScreenSettingsOpen(false);
                                                  setWallpaperSettingsOpen(false);
                                                  setIconsSettingsOpen(false);
                                                  setNavigationSettingsOpen(false);
                                                  setInternetSettingsOpen(false);
                                     setBluetoothSettingsOpen(false);
                                                  setScreenSettingsOpen(false);
                                                  setSecuritySettingsOpen(false);
                                                  setAppearanceSettingsOpen(false);

                                                  // Clear active running application if any
                                                  setActiveApp(null);

                                                  // Turn screen back on and init Bootloader animation
                                                  setIsSystemOff(false);
                                                  setIsSystemRestarting(true);

                                                  // Complete boot sequence inside 5 seconds, booting into the Fresh Welcome Setup
                                                  setTimeout(() => {
                                                    setIsSystemRestarting(false);
                                                    triggerHaptic("heavy");
                                                  }, 5000);
                                                }, 1500);

                                                return 0;
                                              }
                                              return prev - 1;
                                            });
                                          }, 1000);
                                        }}
                                        disabled={isRestarting}
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50 transition-colors text-left"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white">
                                            <RotateCcw size={16} />
                                          </div>
                                          <span className="text-sm font-semibold">
                                            Phone Reset
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-xs text-red-500 font-bold uppercase">
                                            {isRestarting
                                              ? `${restartCountdown}s`
                                              : "Reset"}
                                          </span>
                                          <ChevronLeft
                                            size={16}
                                            className="text-zinc-300 rotate-180"
                                          />
                                        </div>
                                      </button>
                                    </div>

                                    <div className="p-4 bg-zinc-100 rounded-2xl">
                                      <p className="text-[10px] text-zinc-400 font-bold uppercase leading-relaxed">
                                        Accessibility features help you
                                        customize your WePol OS experience to
                                        your needs.
                                      </p>
                                    </div>

                                    <div className="bg-white rounded-2xl border shadow-sm p-5 space-y-6 mb-6">
                                      <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                          <Camera size={18} strokeWidth={2.5} />
                                        </div>
                                        <div className="flex flex-col">
                                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">
                                            Focus Hardware
                                          </span>
                                          <span className="text-sm font-black text-zinc-800">
                                            Camera Precision
                                          </span>
                                        </div>
                                      </div>

                                      <div className="space-y-4">
                                        <div>
                                          <div className="flex justify-between items-center mb-2">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                                              Hardware Position
                                            </span>
                                            <span className="text-xs font-black text-blue-600 italic">
                                              {cameraPointPosition}
                                            </span>
                                          </div>
                                          <div className="relative h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                                            <div
                                              className="absolute h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                                              style={{
                                                width: `${(cameraPointPosition / 200) * 100}%`,
                                              }}
                                            />
                                            <input
                                              type="range"
                                              min="1"
                                              max="200"
                                              step="1"
                                              value={cameraPointPosition}
                                              onChange={(e) => {
                                                triggerHaptic("light");
                                                setCameraPointPosition(
                                                  parseInt(e.target.value),
                                                );
                                              }}
                                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                          </div>
                                        </div>

                                        <div className="space-y-3 pt-2">
                                          <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                              Optical Zoom Scale
                                            </span>
                                            <span className="text-xs font-black text-blue-600 italic">
                                              {Math.round(
                                                cameraPointScale * 100,
                                              )}
                                              %
                                            </span>
                                          </div>
                                          <div className="relative h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                                            <div
                                              className="absolute h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                                              style={{
                                                width: `${((cameraPointScale - 0.5) / 2.5) * 100}%`,
                                              }}
                                            />
                                            <input
                                              type="range"
                                              min="0.5"
                                              max="3"
                                              step="0.1"
                                              value={cameraPointScale}
                                              onChange={(e) =>
                                                setCameraPointScale(
                                                  parseFloat(e.target.value),
                                                )
                                              }
                                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : false ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4 text-zinc-800"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    {/* HUD Style Configuration Cards */}
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">
                                        {language === "Turkish"
                                          ? "Volume HUD Stili"
                                          : "Volume HUD Style"}
                                      </span>
                                      <div className="grid grid-cols-2 gap-3">
                                        <button
                                          onClick={() => {
                                            setVolumeHUDStyle("ios");
                                            triggerHaptic("medium");
                                            triggerVolumeHUD();
                                          }}
                                          className={`p-4 rounded-xl border-2 transition-all flex flex-col items-start gap-1.5 ${volumeHUDStyle === "ios" ? "border-orange-500 bg-orange-50/20" : "border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50"}`}
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow-sm">
                                            <Volume2 size={16} />
                                          </div>
                                          <div className="text-left mt-1">
                                            <span
                                              className={`text-xs font-bold block ${volumeHUDStyle === "ios" ? "text-orange-600" : "text-zinc-800"}`}
                                            >
                                              {language === "Turkish"
                                                ? "WePol iOS Stili"
                                                : "WePol iOS Style"}
                                            </span>
                                            <span className="text-[8px] text-zinc-400 font-bold uppercase leading-tight mt-0.5 block">
                                              {language === "Turkish"
                                                ? "Sol kenarda daralan akıllı çubuk"
                                                : "Fluid expanding side pill"}
                                            </span>
                                          </div>
                                        </button>

                                        <button
                                          onClick={() => {
                                            setVolumeHUDStyle("android");
                                            triggerHaptic("medium");
                                            triggerVolumeHUD();
                                          }}
                                          className={`p-4 rounded-xl border-2 transition-all flex flex-col items-start gap-1.5 ${volumeHUDStyle === "android" ? "border-orange-500 bg-orange-50/20" : "border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50"}`}
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-zinc-800 text-white flex items-center justify-center shadow-sm">
                                            <Smartphone size={16} />
                                          </div>
                                          <div className="text-left mt-1">
                                            <span
                                              className={`text-xs font-bold block ${volumeHUDStyle === "android" ? "text-orange-600" : "text-zinc-800"}`}
                                            >
                                              {language === "Turkish"
                                                ? "Android Stili"
                                                : "Android Style"}
                                            </span>
                                            <span className="text-[8px] text-zinc-400 font-bold uppercase leading-tight mt-0.5 block">
                                              {language === "Turkish"
                                                ? "Sağ kenarda dikey kayan kutu"
                                                : "Right-side vertical card HUD"}
                                            </span>
                                          </div>
                                        </button>
                                      </div>
                                    </div>

                                    {/* Volume Steps / Increments Settings */}
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">
                                        {language === "Turkish"
                                          ? "Fiziksel Tuş Hassasiyeti"
                                          : "Physical Keys Step Size"}
                                      </span>
                                      <div className="space-y-3">
                                        {[
                                          {
                                            id: "ios",
                                            title:
                                              language === "Turkish"
                                                ? "iOS Hassas Adımı (6.25%)"
                                                : "iOS Fine step (6.25%)",
                                            desc:
                                              language === "Turkish"
                                                ? "Tam ölçek için 16 basamaklı geçişler"
                                                : "16 precise step levels for total scale",
                                          },
                                          {
                                            id: "standard",
                                            title:
                                              language === "Turkish"
                                                ? "Android Standart (5.0%)"
                                                : "Android Standard (5.0%)",
                                            desc:
                                              language === "Turkish"
                                                ? "Geleneksel bölümlenmiş adımlama"
                                                : "Traditional segmented increment steps",
                                          },
                                        ].map((opt) => (
                                          <button
                                            key={opt.id}
                                            onClick={() => {
                                              setVolumeIncrementStyle(
                                                opt.id as any,
                                              );
                                              triggerHaptic("medium");
                                            }}
                                            className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between ${volumeIncrementStyle === opt.id ? "border-blue-500 bg-blue-50/30" : "border-zinc-100 bg-zinc-50/30 hover:bg-zinc-50"}`}
                                          >
                                            <div className="flex flex-col gap-0.5">
                                              <span
                                                className={`text-xs font-black ${volumeIncrementStyle === opt.id ? "text-blue-600" : "text-zinc-800"}`}
                                              >
                                                {opt.title}
                                              </span>
                                              <span className="text-[9px] text-zinc-400 font-semibold">
                                                {opt.desc}
                                              </span>
                                            </div>
                                            <div
                                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${volumeIncrementStyle === opt.id ? "border-blue-500 bg-blue-500" : "border-zinc-300"}`}
                                            >
                                              {volumeIncrementStyle ===
                                                opt.id && (
                                                <Check
                                                  size={10}
                                                  className="text-white"
                                                />
                                              )}
                                            </div>
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Dynamic Volume Control Panel Slider */}
                                    <div className="bg-white rounded-2xl border shadow-sm p-4 space-y-4">
                                      <div className="flex justify-between items-center bg-zinc-50 p-2.5 rounded-xl">
                                        <div className="flex items-center gap-2">
                                          <Volume2
                                            size={18}
                                            className="text-orange-500"
                                          />
                                          <span className="text-xs font-black uppercase tracking-wider text-zinc-500">
                                            {language === "Turkish"
                                              ? "Ana Ses Düzeyi"
                                              : "OS Main Volume"}
                                          </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold bg-white px-2 py-1 border rounded-lg shadow-2xs">
                                          {volume}%
                                        </span>
                                      </div>

                                      <div className="relative pt-4 pb-2">
                                        <div className="relative h-3 bg-zinc-100 rounded-full overflow-hidden border">
                                          <div
                                            className="absolute h-full bg-orange-500 transition-all duration-75"
                                            style={{ width: `${volume}%` }}
                                          />
                                          <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="1"
                                            value={volume}
                                            onChange={(e) => {
                                              const val = parseInt(
                                                e.target.value,
                                              );
                                              setVolume(val);
                                              triggerVolumeHUD();
                                              if (Math.abs(val - volume) > 4) {
                                                triggerHaptic("light");
                                              }
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    {/* Information Card */}
                                    <div className="p-4 bg-zinc-50 border rounded-2xl">
                                      <p className="text-[10px] text-zinc-400 font-bold uppercase leading-relaxed text-center">
                                        {language === "Turkish"
                                          ? "WePoll Ses ayarları, Android çerçevesindeki fiziksel tuşların iOS benzeri tepki vermesini yapılandırır."
                                          : "WePoll Sound configuration manages the interaction curves and smooth animations for on-screen sliders."}
                                      </p>
                                    </div>
                                  </div>
                                ) : appsSettingsOpen ? (
                                  <div
                                    className="space-y-4 animate-in slide-in-from-right-4 text-zinc-800"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    {(() => {
                                      // Gather all unique apps
                                      const systemAppIds = [
                                        "calendar",
                                        "weather",
                                        "photos",
                                        "appstore",
                                        "settings",
                                        "clock",
                                        "calculator",
                                        "maps",
                                        "notes",
                                        "themes",
                                        "phone",
                                        "safari",
                                        "messages",
                                        "files_dock",
                                        "files",
                                        "terminal",
                                        "playstore",
                                        "youtube",
                                        "tiktok",
                                      ];

                                      const allAppsList = [
                                        ...apps,
                                        ...appsPage2,
                                        ...appsPage3,
                                        ...appsPage4,
                                        ...dockApps,
                                        ...(typeof STORE_APPS !== "undefined"
                                          ? STORE_APPS
                                          : []),
                                      ].reduce((acc, current) => {
                                        if (current.isFolder && current.apps) {
                                          let nextAcc = acc;
                                          current.apps.forEach((nested) => {
                                            if (!nextAcc.find((item) => item.id === nested.id)) {
                                              nextAcc = nextAcc.concat([nested]);
                                            }
                                          });
                                          return nextAcc;
                                        }
                                        const exists = acc.find(
                                          (item) => item.id === current.id,
                                        );
                                        if (!exists) {
                                          return acc.concat([current]);
                                        }
                                        return acc;
                                      }, [] as AppInfo[]);

                                      // Enrich with package and version info
                                      const getAppDetails = (appId: string) => {
                                        const defaultMeta: Record<
                                          string,
                                          {
                                            pack: string;
                                            ver: string;
                                            size: string;
                                            cacheVal: number;
                                            dataVal: number;
                                          }
                                        > = {
                                          calendar: {
                                            pack: "com.wepol.calendar",
                                            ver: "12.19.45",
                                            size: "34.1 MB",
                                            cacheVal: 840,
                                            dataVal: 12,
                                          },
                                          weather: {
                                            pack: "com.wepol.weather",
                                            ver: "8.4.2",
                                            size: "18.5 MB",
                                            cacheVal: 340,
                                            dataVal: 4,
                                          },
                                          photos: {
                                            pack: "com.wepol.gallery",
                                            ver: "5.2.11",
                                            size: "64.0 MB",
                                            cacheVal: 4200,
                                            dataVal: 156,
                                          },
                                          appstore: {
                                            pack: "com.wepol.appstore",
                                            ver: "23.01",
                                            size: "42.1 MB",
                                            cacheVal: 1200,
                                            dataVal: 8,
                                          },
                                          settings: {
                                            pack: "com.wepol.settings",
                                            ver: "24.0.0-Beta-4",
                                            size: "122.9 MB",
                                            cacheVal: 8500,
                                            dataVal: 45,
                                          },
                                          clock: {
                                            pack: "com.wepol.clock",
                                            ver: "9.1.5",
                                            size: "12.4 MB",
                                            cacheVal: 120,
                                            dataVal: 1,
                                          },
                                          calculator: {
                                            pack: "com.wepol.calculator",
                                            ver: "4.0.2",
                                            size: "6.2 MB",
                                            cacheVal: 64,
                                            dataVal: 0.5,
                                          },
                                          maps: {
                                            pack: "com.wepol.maps",
                                            ver: "15.3.1",
                                            size: "110.5 MB",
                                            cacheVal: 15400,
                                            dataVal: 32,
                                          },
                                          notes: {
                                            pack: "com.wepol.notes",
                                            ver: "6.4.1",
                                            size: "22.8 MB",
                                            cacheVal: 1540,
                                            dataVal: 14,
                                          },
                                          themes: {
                                            pack: "com.wepol.themes",
                                            ver: "3.2.0",
                                            size: "155.0 MB",
                                            cacheVal: 24500,
                                            dataVal: 88,
                                          },
                                          mail: {
                                            pack: "com.wepol.mail",
                                            ver: "4.1.9",
                                            size: "38.2 MB",
                                            cacheVal: 2600,
                                            dataVal: 45,
                                          },
                                          youtube: {
                                            pack: "com.google.android.youtube",
                                            ver: "19.18.35",
                                            size: "145.2 MB",
                                            cacheVal: 48000,
                                            dataVal: 210,
                                          },
                                          tiktok: {
                                            pack: "com.zhiliaoapp.musically",
                                            ver: "34.2.4",
                                            size: "280.4 MB",
                                            cacheVal: 112000,
                                            dataVal: 412,
                                          },
                                          playstore: {
                                            pack: "com.android.vending",
                                            ver: "41.1.20",
                                            size: "58.2 MB",
                                            cacheVal: 3200,
                                            dataVal: 19,
                                          },
                                          phone: {
                                            pack: "com.wepol.phone",
                                            ver: "1.1.0",
                                            size: "15.3 MB",
                                            cacheVal: 180,
                                            dataVal: 2,
                                          },
                                          safari: {
                                            pack: "com.wepol.browser",
                                            ver: "17.4.1",
                                            size: "112.9 MB",
                                            cacheVal: 34000,
                                            dataVal: 95,
                                          },
                                          messages: {
                                            pack: "com.wepol.talk",
                                            ver: "10.2.5",
                                            size: "48.7 MB",
                                            cacheVal: 4800,
                                            dataVal: 128,
                                          },
                                          files_dock: {
                                            pack: "com.wepol.files",
                                            ver: "3.0.1",
                                            size: "25.6 MB",
                                            cacheVal: 450,
                                            dataVal: 12,
                                          },
                                          instagram: {
                                            pack: "com.instagram.android",
                                            ver: "331.0.0",
                                            size: "192.0 MB",
                                            cacheVal: 64000,
                                            dataVal: 180,
                                          },
                                          snapchat: {
                                            pack: "com.snapchat.android",
                                            ver: "12.85.0",
                                            size: "180.5 MB",
                                            cacheVal: 48000,
                                            dataVal: 112,
                                          },
                                          whatsapp: {
                                            pack: "com.whatsapp",
                                            ver: "2.24.10",
                                            size: "140.1 MB",
                                            cacheVal: 32000,
                                            dataVal: 295,
                                          },
                                          webpol: {
                                            pack: "com.wepol.community",
                                            ver: "1.0.0",
                                            size: "14.5 MB",
                                            cacheVal: 840,
                                            dataVal: 15,
                                          },
                                          minecraft: {
                                            pack: "com.mojang.minecraftpe",
                                            ver: "1.20.81",
                                            size: "450.0 MB",
                                            cacheVal: 54000,
                                            dataVal: 320,
                                          },
                                          roblox: {
                                            pack: "com.roblox.client",
                                            ver: "2.624.536",
                                            size: "160.2 MB",
                                            cacheVal: 38000,
                                            dataVal: 240,
                                          },
                                          spotify: {
                                            pack: "com.spotify.music",
                                            ver: "8.9.36",
                                            size: "88.4 MB",
                                            cacheVal: 84000,
                                            dataVal: 190,
                                          },
                                          netflix: {
                                            pack: "com.netflix.mediaclient",
                                            ver: "10.6.4",
                                            size: "78.2 MB",
                                            cacheVal: 16000,
                                            dataVal: 98,
                                          },
                                          twitter: {
                                            pack: "com.twitter.android",
                                            ver: "10.42.0",
                                            size: "95.1 MB",
                                            cacheVal: 24000,
                                            dataVal: 115,
                                          },
                                          discord: {
                                            pack: "com.discord",
                                            ver: "228.15",
                                            size: "134.6 MB",
                                            cacheVal: 18000,
                                            dataVal: 76,
                                          },
                                          linkedin: {
                                            pack: "com.linkedin.android",
                                            ver: "4.1.921",
                                            size: "85.2 MB",
                                            cacheVal: 8200,
                                            dataVal: 42,
                                          },
                                          zoom: {
                                            pack: "us.zoom.videomeetings",
                                            ver: "6.0.2",
                                            size: "115.0 MB",
                                            cacheVal: 14000,
                                            dataVal: 22,
                                          },
                                          twitch: {
                                            pack: "tv.twitch.android.app",
                                            ver: "18.2.0",
                                            size: "92.4 MB",
                                            cacheVal: 21000,
                                            dataVal: 56,
                                          },
                                        };

                                        const info = defaultMeta[appId] || {
                                          pack: `com.wepol.${appId}`,
                                          ver: "1.0.0",
                                          size: "25.0 MB",
                                          cacheVal: 250,
                                          dataVal: 5,
                                        };
                                        const state = appStates[appId] || {
                                          cache: info.cacheVal,
                                          data: info.dataVal,
                                          notifications: true,
                                          camera: true,
                                          microphone: true,
                                          isForceStopped: false,
                                        };

                                        return {
                                          package: info.pack,
                                          version: info.ver,
                                          size: info.size,
                                          state,
                                        };
                                      };

                                      const enrichedApps = allAppsList.map(
                                        (app) => {
                                          const isSystem =
                                            systemAppIds.includes(app.id);
                                          const meta = getAppDetails(app.id);
                                          return {
                                            ...app,
                                            isSystem,
                                            package: meta.package,
                                            version: meta.version,
                                            size: meta.size,
                                            state: meta.state,
                                          };
                                        },
                                      );

                                      // Helper to check if a specific app details matches search & tab
                                      const filteredApps = enrichedApps.filter(
                                        (app) => {
                                          const matchesSearch =
                                            app.name
                                              .toLowerCase()
                                              .includes(
                                                appsSearchQuery.toLowerCase(),
                                              ) ||
                                            app.package
                                              .toLowerCase()
                                              .includes(
                                                appsSearchQuery.toLowerCase(),
                                              );
                                          const matchesTab =
                                            appsFilterTab === "all"
                                              ? true
                                              : appsFilterTab === "system"
                                                ? app.isSystem
                                                : !app.isSystem;
                                          return matchesSearch && matchesTab;
                                        },
                                      );

                                      // Inline rendering of App Details view if selectedAppInfo matches
                                      if (selectedAppInfo) {
                                        const appMeta = enrichedApps.find(
                                          (a) => a.id === selectedAppInfo.id,
                                        ) || {
                                          ...selectedAppInfo,
                                          isSystem: systemAppIds.includes(
                                            selectedAppInfo.id,
                                          ),
                                          package: `com.wepol.${selectedAppInfo.id}`,
                                          version: "1.0.0",
                                          size: "25.0 MB",
                                          state: {
                                            cache: 250,
                                            data: 5,
                                            notifications: true,
                                            camera: true,
                                            microphone: true,
                                            isForceStopped: false,
                                          },
                                        };

                                        const formattedCache =
                                          appMeta.state.cache >= 1024
                                            ? `${(appMeta.state.cache / 1024).toFixed(1)} MB`
                                            : `${appMeta.state.cache} KB`;

                                        const formattedData =
                                          appMeta.state.data >= 1024
                                            ? `${(appMeta.state.data / 1024).toFixed(1)} GB`
                                            : `${appMeta.state.data} MB`;

                                        return (
                                          <div className="space-y-6">
                                            {/* App Header Card */}
                                            <div className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col items-center text-center gap-3 relative overflow-hidden">
                                              <div className="absolute top-3 right-3">
                                                {appMeta.isSystem ? (
                                                  <span className="text-[9px] font-black uppercase bg-zinc-100 text-zinc-500 py-1 px-2.5 rounded-full border">
                                                    {language === "Turkish"
                                                      ? "SİSTEM"
                                                      : "SYSTEM"}
                                                  </span>
                                                ) : (
                                                  <span className="text-[9px] font-black uppercase bg-blue-50 text-blue-600 py-1 px-2.5 rounded-full border border-blue-100">
                                                    {language === "Turkish"
                                                      ? "YÜKLENEN"
                                                      : "INSTALLED"}
                                                  </span>
                                                )}
                                              </div>
                                              <div className="w-16 h-16 flex items-center justify-center bg-zinc-50 rounded-2xl shadow-sm border p-1">
                                                <AppIcon
                                                  app={appMeta}
                                                  size={48}
                                                />
                                              </div>
                                              <div className="flex flex-col gap-0.5">
                                                <h3 className="font-extrabold text-lg text-zinc-900 leading-tight">
                                                  {appMeta.name}
                                                </h3>
                                                <p className="text-zinc-400 font-mono text-[10px] select-all">
                                                  {appMeta.package}
                                                </p>
                                                <p className="text-zinc-500 font-semibold text-xs mt-1">
                                                  {language === "Turkish"
                                                    ? "Sürüm"
                                                    : "Version"}{" "}
                                                  <span className="font-bold text-zinc-900">
                                                    {appMeta.version}
                                                  </span>
                                                </p>
                                              </div>

                                              {/* Force Stop / Uninstall buttons */}
                                              <div className="w-full grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-zinc-100">
                                                <button
                                                  disabled={
                                                    appMeta.state.isForceStopped
                                                  }
                                                  onClick={() => {
                                                    setAppStates((prev) => ({
                                                      ...prev,
                                                      [appMeta.id]: {
                                                        ...(prev[
                                                          appMeta.id
                                                        ] || {
                                                          cache: 350,
                                                          data: 5,
                                                          notifications: true,
                                                          camera: true,
                                                          microphone: true,
                                                          isForceStopped: false,
                                                        }),
                                                        isForceStopped: true,
                                                      },
                                                    }));
                                                    triggerHaptic("heavy");
                                                    alert(
                                                      `${appMeta.name} ${language === "Turkish" ? "durdurulmaya zorlandı." : "has been force stopped."}`,
                                                    );
                                                  }}
                                                  className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border ${
                                                    appMeta.state.isForceStopped
                                                      ? "bg-zinc-50 text-zinc-400 border-zinc-100 cursor-not-allowed"
                                                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200"
                                                  }`}
                                                >
                                                  <AlertTriangle size={14} />
                                                  {language === "Turkish"
                                                    ? "Zorla Durdur"
                                                    : "Force Stop"}
                                                </button>

                                                <button
                                                  onClick={() => {
                                                    triggerHaptic("medium");
                                                    if (appMeta.isSystem) {
                                                      alert(
                                                        language === "Turkish"
                                                          ? "Sistem uygulamaları kaldırılamaz!"
                                                          : "System apps cannot be uninstalled!",
                                                      );
                                                    } else {
                                                      if (
                                                        confirm(
                                                          language === "Turkish"
                                                            ? `${appMeta.name} uygulamasını kaldırmak istiyor musunuz?`
                                                            : `Do you want to uninstall ${appMeta.name}?`,
                                                        )
                                                      ) {
                                                        setApps((prev) =>
                                                          prev.filter(
                                                            (a) =>
                                                              a.id !==
                                                              appMeta.id,
                                                          ),
                                                        );
                                                        setDockApps((prev) =>
                                                          prev.filter(
                                                            (a) =>
                                                              a.id !==
                                                              appMeta.id,
                                                          ),
                                                        );
                                                        setSelectedAppInfo(
                                                          null,
                                                        );
                                                        triggerHaptic("heavy");
                                                        alert(
                                                          language === "Turkish"
                                                            ? "Uygulama başarıyla kaldırıldı!"
                                                            : "Application successfully uninstalled!",
                                                        );
                                                      }
                                                    }
                                                  }}
                                                  className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border ${
                                                    appMeta.isSystem
                                                      ? "bg-zinc-50 text-zinc-400 border-zinc-100 cursor-not-allowed"
                                                      : "bg-red-50 hover:bg-red-100 text-red-600 border-red-200"
                                                  }`}
                                                >
                                                  <Trash2 size={14} />
                                                  {language === "Turkish"
                                                    ? "Uygulamayı Kaldır"
                                                    : "Uninstall"}
                                                </button>
                                              </div>
                                            </div>

                                            {/* Storage Section */}
                                            <div className="bg-white rounded-2xl border shadow-sm p-5 space-y-4">
                                              <div className="flex items-center gap-2">
                                                <Folder
                                                  size={16}
                                                  className="text-zinc-400"
                                                />
                                                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                                  {language === "Turkish"
                                                    ? "DEPOLAMA VE HAFIZA"
                                                    : "STORAGE & MEMORY"}
                                                </span>
                                              </div>

                                              <div className="divide-y divide-zinc-100 text-xs text-zinc-700">
                                                <div className="py-2.5 flex justify-between items-center">
                                                  <span className="text-zinc-500 font-medium">
                                                    {language === "Turkish"
                                                      ? "Uygulama Boyutu"
                                                      : "App Size"}
                                                  </span>
                                                  <span className="font-extrabold text-zinc-800">
                                                    {appMeta.size}
                                                  </span>
                                                </div>
                                                <div className="py-2.5 flex justify-between items-center">
                                                  <span className="text-zinc-500 font-medium">
                                                    {language === "Turkish"
                                                      ? "Kullanıcı Verileri"
                                                      : "User Data"}
                                                  </span>
                                                  <span className="font-extrabold text-zinc-800">
                                                    {formattedData}
                                                  </span>
                                                </div>
                                                <div className="py-2.5 flex justify-between items-center">
                                                  <span className="text-zinc-500 font-medium">
                                                    {language === "Turkish"
                                                      ? "Önbellek (Cache)"
                                                      : "Cache Size"}
                                                  </span>
                                                  <span className="font-extrabold text-zinc-800">
                                                    {formattedCache}
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="grid grid-cols-2 gap-3 pt-2">
                                                <button
                                                  disabled={
                                                    appMeta.state.data === 0
                                                  }
                                                  onClick={() => {
                                                    setAppStates((prev) => ({
                                                      ...prev,
                                                      [appMeta.id]: {
                                                        ...(prev[
                                                          appMeta.id
                                                        ] || {
                                                          cache: 350,
                                                          data: 5,
                                                          notifications: true,
                                                          camera: true,
                                                          microphone: true,
                                                          isForceStopped: false,
                                                        }),
                                                        data: 0,
                                                      },
                                                    }));
                                                    triggerHaptic("medium");
                                                  }}
                                                  className={`py-2 px-3 rounded-xl font-bold text-xs border flex items-center justify-center gap-1.5 transition-all ${
                                                    appMeta.state.data === 0
                                                      ? "bg-zinc-50 text-zinc-400 border-zinc-100 cursor-not-allowed"
                                                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200"
                                                  }`}
                                                >
                                                  {language === "Turkish"
                                                    ? "Verileri Temizle"
                                                    : "Clear Data"}
                                                </button>

                                                <button
                                                  disabled={
                                                    appMeta.state.cache === 0
                                                  }
                                                  onClick={() => {
                                                    setAppStates((prev) => ({
                                                      ...prev,
                                                      [appMeta.id]: {
                                                        ...(prev[
                                                          appMeta.id
                                                        ] || {
                                                          cache: 350,
                                                          data: 5,
                                                          notifications: true,
                                                          camera: true,
                                                          microphone: true,
                                                          isForceStopped: false,
                                                        }),
                                                        cache: 0,
                                                      },
                                                    }));
                                                    triggerHaptic("light");
                                                  }}
                                                  className={`py-2 px-3 rounded-xl font-bold text-xs border flex items-center justify-center gap-1.5 transition-all ${
                                                    appMeta.state.cache === 0
                                                      ? "bg-zinc-50 text-zinc-400 border-zinc-100 cursor-not-allowed"
                                                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200"
                                                  }`}
                                                >
                                                  {language === "Turkish"
                                                    ? "Önbelleği Temizle"
                                                    : "Clear Cache"}
                                                </button>
                                              </div>
                                            </div>

                                            {/* Permissions Section */}
                                            <div className="bg-white rounded-2xl border shadow-sm p-5 space-y-4">
                                              <div className="flex items-center gap-2">
                                                <Shield
                                                  size={16}
                                                  className="text-zinc-400"
                                                />
                                                <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                                  {language === "Turkish"
                                                    ? "UYGULAMA İZİNLERİ"
                                                    : "APP PERMISSIONS"}
                                                </span>
                                              </div>

                                              <div className="space-y-3.5 text-xs">
                                                {[
                                                  {
                                                    key: "notifications",
                                                    label:
                                                      language === "Turkish"
                                                        ? "Bildirimler"
                                                        : "Notifications",
                                                  },
                                                  {
                                                    key: "camera",
                                                    label:
                                                      language === "Turkish"
                                                        ? "Kamera İzni"
                                                        : "Camera Access",
                                                  },
                                                  {
                                                    key: "microphone",
                                                    label:
                                                      language === "Turkish"
                                                        ? "Mikrofon İzni"
                                                        : "Microphone Access",
                                                  },
                                                ].map((perm) => (
                                                  <div
                                                    key={perm.key}
                                                    className="flex justify-between items-center py-1"
                                                  >
                                                    <span className="text-zinc-600 font-semibold">
                                                      {perm.label}
                                                    </span>
                                                    <button
                                                      onClick={() => {
                                                        const key = perm.key as
                                                          | "notifications"
                                                          | "camera"
                                                          | "microphone";
                                                        setAppStates(
                                                          (prev) => ({
                                                            ...prev,
                                                            [appMeta.id]: {
                                                              ...(prev[
                                                                appMeta.id
                                                              ] || {
                                                                cache: 350,
                                                                data: 5,
                                                                notifications: true,
                                                                camera: true,
                                                                microphone: true,
                                                                isForceStopped: false,
                                                              }),
                                                              [key]: !(
                                                                prev[
                                                                  appMeta.id
                                                                ]?.[key] ?? true
                                                              ),
                                                            },
                                                          }),
                                                        );
                                                        triggerHaptic("light");
                                                      }}
                                                      className={`w-10 h-5 rounded-full transition-colors relative ${
                                                        (appMeta.state?.[
                                                          perm.key as any
                                                        ] ?? true)
                                                          ? "bg-green-500"
                                                          : "bg-zinc-300"
                                                      }`}
                                                    >
                                                      <motion.div
                                                        animate={{
                                                          x:
                                                            (appMeta.state?.[
                                                              perm.key as any
                                                            ] ?? true)
                                                              ? 22
                                                              : 2,
                                                        }}
                                                        className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                                                      />
                                                    </button>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>

                                            {/* Launch Option */}
                                            <button
                                              disabled={
                                                appMeta.state.isForceStopped
                                              }
                                              onClick={() => {
                                                setActiveApp(selectedAppInfo);
                                                setAppsSettingsOpen(false);
                                                setSelectedAppInfo(null);
                                                triggerHaptic("medium");
                                              }}
                                              className={`w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 ${
                                                appMeta.state.isForceStopped
                                                  ? "bg-zinc-100 text-zinc-400 border border-zinc-200/50 cursor-not-allowed"
                                                  : "bg-zinc-900 text-white hover:bg-zinc-800"
                                              }`}
                                            >
                                              <Play
                                                size={14}
                                                fill="currentColor"
                                              />
                                              {language === "Turkish"
                                                ? "Uygulamayı Başlat"
                                                : "Launch Application"}
                                            </button>
                                          </div>
                                        );
                                      }

                                      // Standard App list view
                                      return (
                                        <div className="space-y-4 font-sans font-medium">
                                          {/* Search Box */}
                                          <div className="bg-white rounded-2xl border shadow-sm p-3 flex items-center gap-2.5 transition-all focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500">
                                            <Search
                                              size={16}
                                              className="text-zinc-400 ml-1"
                                            />
                                            <input
                                              type="text"
                                              placeholder={
                                                language === "Turkish"
                                                  ? "Uygulamalarda ara..."
                                                  : "Search applications..."
                                              }
                                              value={appsSearchQuery}
                                              onChange={(e) =>
                                                setAppsSearchQuery(
                                                  e.target.value,
                                                )
                                              }
                                              className="flex-1 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400 placeholder:font-medium font-semibold"
                                            />
                                            {appsSearchQuery && (
                                              <button
                                                onClick={() => {
                                                  setAppsSearchQuery("");
                                                  triggerHaptic("light");
                                                }}
                                                className="p-1 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors"
                                              >
                                                <X size={14} />
                                              </button>
                                            )}
                                          </div>

                                          {/* Tabs / Filters */}
                                          <div className="grid grid-cols-3 gap-1 bg-zinc-100/80 p-1 rounded-xl">
                                            {[
                                              {
                                                id: "all",
                                                label:
                                                  language === "Turkish"
                                                    ? "Hepsi"
                                                    : "All",
                                              },
                                              {
                                                id: "system",
                                                label:
                                                  language === "Turkish"
                                                    ? "Sistem"
                                                    : "System",
                                              },
                                              {
                                                id: "downloaded",
                                                label:
                                                  language === "Turkish"
                                                    ? "Yüklenen"
                                                    : "Installed",
                                              },
                                            ].map((tab) => (
                                              <button
                                                key={tab.id}
                                                onClick={() => {
                                                  setAppsFilterTab(
                                                    tab.id as any,
                                                  );
                                                  triggerHaptic("light");
                                                }}
                                                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                                                  appsFilterTab === tab.id
                                                    ? "bg-white text-zinc-900 shadow-sm"
                                                    : "text-zinc-500 hover:text-zinc-800"
                                                }`}
                                              >
                                                {tab.label}
                                              </button>
                                            ))}
                                          </div>

                                          {/* App Item Cards Container */}
                                          <div className="bg-white rounded-2xl border shadow-sm divide-y overflow-hidden">
                                            {filteredApps.length > 0 ? (
                                              filteredApps.map((app) => (
                                                <button
                                                  key={app.id}
                                                  onClick={() => {
                                                    setSelectedAppInfo(app);
                                                    triggerHaptic("light");
                                                  }}
                                                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-50/50 transition-colors text-left group"
                                                >
                                                  <div className="flex items-center gap-3.5">
                                                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-xl shadow-inner border p-0.5 group-hover:scale-105 transition-transform">
                                                      <AppIcon
                                                        app={app}
                                                        size={28}
                                                      />
                                                    </div>
                                                    <div className="flex flex-col">
                                                      <span className="font-semibold text-sm text-zinc-800 leading-snug flex items-center gap-1.5 font-sans">
                                                        {app.name}
                                                        {app.isSystem && (
                                                          <span className="text-[8px] font-black uppercase text-zinc-400 bg-zinc-100 py-0.5 px-1.5 rounded-full tracking-wider animate-pulse">
                                                            SYS
                                                          </span>
                                                        )}
                                                      </span>
                                                      <span className="text-[10px] text-zinc-400 font-mono mt-0.5 leading-none select-all">
                                                        {app.package}
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="flex items-center gap-2.5">
                                                    <div className="flex flex-col items-end gap-0.5 text-right font-semibold">
                                                      <span className="text-xs text-zinc-700 font-bold font-sans">
                                                        {app.version}
                                                      </span>
                                                      <span className="text-[9px] text-zinc-400 uppercase tracking-widest leading-none font-bold mt-0.5">
                                                        {app.size}
                                                      </span>
                                                    </div>
                                                    <ChevronLeft
                                                      size={16}
                                                      className="text-zinc-300 group-hover:translate-x-0.5 rotate-180 transition-transform"
                                                    />
                                                  </div>
                                                </button>
                                              ))
                                            ) : (
                                              <div className="p-8 flex flex-col items-center text-center text-zinc-400 gap-2">
                                                <Info
                                                  size={24}
                                                  className="text-zinc-300"
                                                />
                                                <span className="text-xs font-bold font-sans">
                                                  {language === "Turkish"
                                                    ? "Uygulama bulunamadı."
                                                    : "No applications found."}
                                                </span>
                                              </div>
                                            )}
                                          </div>

                                          {/* App Count Footer */}
                                          <div className="px-4 text-center text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                            {filteredApps.length}{" "}
                                            {language === "Turkish"
                                              ? "Uygulama Listeleniyor"
                                              : "Applications Listed"}
                                          </div>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                ) : moreSettingsOpen ? (
                                  <div
                                    className="space-y-6 animate-in slide-in-from-right-4"
                                    style={{
                                      animationDuration: `${300 / animationSpeed}ms`,
                                    }}
                                  >
                                    <div className="bg-white rounded-2xl border shadow-sm divide-y">
                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Grid Boyutu"
                                            : "Grid Size"}
                                        </span>
                                        <div className="grid grid-cols-3 gap-2">
                                          {[
                                            { cols: 4, rows: 6, label: "4x6" },
                                            { cols: 6, rows: 6, label: "6x6" },
                                            { cols: 8, rows: 8, label: "8x8" },
                                          ].map((opt) => (
                                            <button
                                              key={opt.label}
                                              onClick={() => {
                                                setGridSize({
                                                  cols: opt.cols,
                                                  rows: opt.rows,
                                                });
                                                triggerHaptic("medium");
                                              }}
                                              className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${gridSize.cols === opt.cols ? "border-blue-500 bg-blue-50" : "border-zinc-100 hover:bg-zinc-50"}`}
                                            >
                                              <div className="grid grid-cols-3 gap-0.5 opacity-40">
                                                {[...Array(9)].map((_, i) => (
                                                  <div
                                                    key={i}
                                                    className="w-1.5 h-1.5 bg-zinc-400 rounded-px"
                                                  />
                                                ))}
                                              </div>
                                              <span
                                                className={`text-[10px] font-bold ${gridSize.cols === opt.cols ? "text-blue-600" : "text-zinc-600"}`}
                                              >
                                                {opt.label}
                                              </span>
                                            </button>
                                          ))}
                                        </div>
                                      </div>
                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Dil Seçimi"
                                            : language === "Korean"
                                              ? "언어 선택"
                                              : language === "Chinese"
                                                ? "选择语言"
                                                : "Language Selection"}
                                        </span>
                                        <div className="space-y-2">
                                          {[
                                            { code: "English", name: "English" },
                                            { code: "Turkish", name: "Türkçe" },
                                            { code: "Korean", name: "한국어 (Korean)" },
                                            { code: "Chinese", name: "中文 (Chinese)" },
                                          ].map(
                                            ({ code, name }) => (
                                              <button
                                                key={code}
                                                onClick={() => {
                                                  setLanguage(code as LanguageType);
                                                  triggerHaptic("light");
                                                }}
                                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${language === code ? "bg-blue-50 border-blue-500 border-2" : "bg-zinc-50 border-transparent border-2"}`}
                                              >
                                                <span
                                                  className={`font-semibold ${language === code ? "text-blue-600" : "text-zinc-900"}`}
                                                >
                                                  {name}
                                                </span>
                                                {language === code && (
                                                  <Check
                                                    size={16}
                                                    className="text-blue-600"
                                                  />
                                                )}
                                              </button>
                                            ),
                                          )}
                                        </div>
                                      </div>

                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Görünüm"
                                            : "Appearance"}
                                        </span>
                                        <button
                                          onClick={() => {
                                            setShowAppNames(!showAppNames);
                                            triggerHaptic("medium");
                                          }}
                                          className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${!showAppNames ? "bg-blue-50 border-blue-500 border-2" : "bg-zinc-50 border-transparent border-2"}`}
                                        >
                                          <div className="flex flex-col items-start gap-0.5">
                                            <span
                                              className={`font-semibold ${!showAppNames ? "text-blue-600" : "text-zinc-900"}`}
                                            >
                                              {language === "Turkish"
                                                ? "Uygulama İsimlerini Kaldır"
                                                : "Remove App Names"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 font-bold uppercase">
                                              {language === "Turkish"
                                                ? "Ana ekranda isimleri gizle"
                                                : "Hide names on home screen"}
                                            </span>
                                          </div>
                                          <div
                                            className={`w-10 h-5 rounded-full transition-colors relative ${!showAppNames ? "bg-blue-500" : "bg-zinc-300"}`}
                                          >
                                            <motion.div
                                              animate={{
                                                x: !showAppNames ? 22 : 2,
                                              }}
                                              className="absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm"
                                            />
                                          </div>
                                        </button>

                                        {/* App Icon Size Adjuster & Dynamic Live Preview */}
                                        <div className="pt-3 border-t border-zinc-100 flex flex-col gap-3">
                                          <div className="flex justify-between items-center">
                                            <div className="flex flex-col gap-0.5">
                                              <span className="font-semibold text-xs text-zinc-900">
                                                {language === "Turkish"
                                                  ? "Uygulama Simgesi Boyutu"
                                                  : "App Icon Size"}
                                              </span>
                                              <span className="text-[9px] text-zinc-400 font-black uppercase">
                                                {language === "Turkish"
                                                  ? "Simgelerin büyüklüğünü ayarlayın"
                                                  : "Adjust dynamic icon scale"}
                                              </span>
                                            </div>
                                            <span className="text-[10px] font-black text-blue-600 bg-blue-50/85 px-1.5 py-0.5 rounded-md">
                                              {Math.round(appIconSize * 100)}%
                                            </span>
                                          </div>

                                          <div className="flex items-center gap-3 px-1">
                                            <span className="text-[10px] text-zinc-400 font-black">A-</span>
                                            <input
                                              type="range"
                                              min="0.75"
                                              max="1.10"
                                              step="0.05"
                                              value={appIconSize}
                                              onChange={(e) => {
                                                const val = parseFloat(e.target.value);
                                                if (Math.abs(val - appIconSize) > 0.04) {
                                                  triggerHaptic("light");
                                                }
                                                setAppIconSize(val);
                                              }}
                                              className="flex-1 h-1.5 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            />
                                            <span className="text-[10px] text-zinc-400 font-black">A+</span>
                                          </div>

                                          {/* App Icon Edge/Shape selector */}
                                          <div className="flex flex-col gap-1 mt-1 mb-2">
                                            <div className="flex flex-col gap-0.5">
                                              <span className="font-semibold text-xs text-zinc-900">
                                                {language === "Turkish"
                                                  ? "Uygulama Simgesi Kenarlık Tarzı"
                                                  : "App Icon Edge Style"}
                                              </span>
                                              <span className="text-[9px] text-zinc-400 font-black uppercase mb-1.5">
                                                {language === "Turkish"
                                                  ? "İkon köşe keskinliğini belirleyin"
                                                  : "Determine icon corner rounding"}
                                              </span>
                                            </div>
                                            <div className="grid grid-cols-5 gap-1.5">
                                              {[
                                                { id: "square", name: language === "Turkish" ? "Kare" : "Square" },
                                                { id: "soft-square", name: language === "Turkish" ? "Yumuşak" : "Soft" },
                                                { id: "squircle", name: language === "Turkish" ? "Özgün" : "Squircle" },
                                                { id: "rounded", name: language === "Turkish" ? "Oval" : "Rounded" },
                                                { id: "circle", name: language === "Turkish" ? "Daire" : "Circle" },
                                              ].map((opt) => (
                                                <button
                                                  key={opt.id}
                                                  onClick={() => {
                                                    triggerHaptic("medium");
                                                    setAppIconEdgeStyle(opt.id as any);
                                                  }}
                                                  className={`py-1.5 px-0.5 text-[9px] font-bold rounded-lg border transition-all flex flex-col items-center justify-center gap-1.5 ${
                                                    appIconEdgeStyle === opt.id
                                                      ? "border-blue-500 bg-blue-50/80 text-blue-600 shadow-sm font-black"
                                                      : "border-zinc-200/60 bg-white text-zinc-500 hover:bg-zinc-50/50"
                                                  }`}
                                                >
                                                  <div
                                                    className="w-3 h-3 border border-current transition-all"
                                                    style={{
                                                      borderRadius:
                                                        opt.id === "square"
                                                          ? "0px"
                                                          : opt.id === "soft-square"
                                                          ? "2.5px"
                                                          : opt.id === "squircle"
                                                          ? "4px"
                                                          : opt.id === "rounded"
                                                          ? "6px"
                                                          : "50%",
                                                    }}
                                                  />
                                                  <span className="scale-90 whitespace-nowrap">{opt.name}</span>
                                                </button>
                                              ))}
                                            </div>
                                          </div>

                                          {/* Live Preview Card */}
                                          <div className="mt-1 bg-zinc-50/50 rounded-xl p-3 border border-zinc-100/70 flex flex-col items-center justify-center gap-2">
                                            <span className="text-[9px] font-black uppercase text-zinc-400 tracking-wider self-start">
                                              {language === "Turkish"
                                                ? "CANLI ÖNİZLEME"
                                                : "LIVE PREVIEW"}
                                            </span>
                                            
                                            <div className="flex flex-col items-center gap-1.5 py-1">
                                              <div
                                                className={`flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 relative overflow-hidden shadow-inner transition-all duration-300`}
                                                style={{
                                                  width: `${60 * appIconSize}px`,
                                                  height: `${60 * appIconSize}px`,
                                                  borderRadius: getIconBorderRadius(18, appIconSize),
                                                }}
                                              >
                                                <AppIcon
                                                  app={{
                                                    id: "themes",
                                                    name: "Themes",
                                                    color: "bg-gradient-to-br from-pink-500 to-purple-600",
                                                    icon: "Palette",
                                                    component: "ThemesApp"
                                                  }}
                                                  size={32 * appIconSize}
                                                />
                                              </div>
                                              {showAppNames && (
                                                <span className="text-[10px] font-semibold text-zinc-700">
                                                  {language === "Turkish" ? "Temalar" : "Themes"}
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Uygulama Çekmecesi"
                                            : "App Drawer Mode"}
                                        </span>
                                        <div className="grid grid-cols-2 gap-2">
                                          {[
                                            {
                                              id: "enabled",
                                              label:
                                                language === "Turkish"
                                                  ? "Aktif (Yukarı Kaydır)"
                                                  : "Enabled (Swipe Up)",
                                            },
                                            {
                                              id: "disabled",
                                              label:
                                                language === "Turkish"
                                                  ? "Devre Dışı"
                                                  : "Disabled",
                                            },
                                          ].map((mode) => (
                                            <button
                                              key={mode.id}
                                              onClick={() => {
                                                setAppDrawerMode(mode.id as any);
                                                if (mode.id === "disabled") {
                                                  setIsAppDrawerOpen(false);
                                                }
                                                triggerHaptic("medium");
                                              }}
                                              className={`py-3 px-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border-2 text-center ${
                                                appDrawerMode === mode.id
                                                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                                  : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                              }`}
                                            >
                                              {mode.label}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div className="p-4 flex flex-col gap-4">
                                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                          {language === "Turkish"
                                            ? "Basit Mod (3x5 Izgara & Büyük Yazı)"
                                            : "Simple Mode (3x5 Grid & Large Font)"}
                                        </span>
                                        <div className="grid grid-cols-2 gap-2">
                                          {[
                                            {
                                              id: "enabled",
                                              label:
                                                language === "Turkish"
                                                  ? "Etkin"
                                                  : "Enabled",
                                            },
                                            {
                                              id: "disabled",
                                              label:
                                                language === "Turkish"
                                                  ? "Devre Dışı"
                                                  : "Disabled",
                                            },
                                          ].map((mode) => (
                                            <button
                                              key={mode.id}
                                              onClick={() => {
                                                const isEnabled = mode.id === "enabled";
                                                setIsSimpleMode(isEnabled);
                                                triggerHaptic("medium");
                                              }}
                                              className={`py-3 px-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border-2 text-center ${
                                                (isSimpleMode && mode.id === "enabled") || (!isSimpleMode && mode.id === "disabled")
                                                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                                  : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                              }`}
                                            >
                                              {mode.label}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div className="p-4 flex flex-col gap-4">
                                        <div className="space-y-3 mt-4">
                                          <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                                            {language === "Turkish"
                                              ? "Kamera Modu"
                                              : "Camera Mode"}
                                          </span>
                                          <div className="grid grid-cols-2 gap-2">
                                            {[
                                              {
                                                id: "dot",
                                                label:
                                                  language === "Turkish"
                                                    ? "Nokta"
                                                    : "Dot",
                                              },
                                              {
                                                id: "two-point",
                                                label:
                                                  language === "Turkish"
                                                    ? "İki Noktalı"
                                                    : "Two-point",
                                              },
                                              {
                                                id: "three-point",
                                                label:
                                                  language === "Turkish"
                                                    ? "Üç Noktalı"
                                                    : "Three-point",
                                              },
                                              {
                                                id: "v-notch",
                                                label:
                                                  language === "Turkish"
                                                    ? "V-Çentik"
                                                    : "V-Notch",
                                              },
                                              {
                                                id: "notch",
                                                label:
                                                  language === "Turkish"
                                                    ? "Geniş Çentik"
                                                    : "Wide Notch",
                                              },
                                              {
                                                id: "none",
                                                label:
                                                  language === "Turkish"
                                                    ? "Kapalı"
                                                    : "Off",
                                              },
                                            ].map((mode) => (
                                              <button
                                                key={mode.id}
                                                onClick={() => {
                                                  setCameraMode(mode.id as any);
                                                  triggerHaptic("light");
                                                }}
                                                className={`py-3 px-1 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${cameraMode === mode.id ? "bg-zinc-900 text-white border-zinc-900 shadow-md scale-[1.02]" : "bg-zinc-50 text-zinc-400 border-transparent hover:bg-zinc-100"}`}
                                              >
                                                {mode.label}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900 divide-y divide-zinc-50 dark:divide-zinc-800/40">
                                      <button
                                        onClick={() => setAboutDeviceOpen(true)}
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                                            <div className="w-3.5 h-3.5 border-2 border-white rounded-full flex items-center justify-center">
                                              <div className="w-1 h-1 bg-white rounded-full" />
                                            </div>
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_about",
                                                "English",
                                                "About Device",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_about_desc",
                                                "English",
                                                "WEPOL OS 23",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setInternetSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-blue-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Wifi size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_internet",
                                                "English",
                                                "Internet",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_internet_desc",
                                                "English",
                                                "WI-FI & CELLULAR",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setMobileDataSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-emerald-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Signal size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {language === "Turkish" ? "Mobil Veri" : "Mobile Data"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {isMobileDataEnabled 
                                                ? (language === "Turkish" ? "Açık - 5G" : "ON - 5G")
                                                : (language === "Turkish" ? "Kapalı" : "OFF")}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setBluetoothSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                                            <Bluetooth size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_bluetooth",
                                                "English",
                                                "Bluetooth",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_bluetooth_desc",
                                                "English",
                                                isBluetoothEnabled ? "ON" : "OFF",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setScreenSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-blue-400 shadow-sm group-hover:scale-105 transition-transform">
                                            <CloudSun size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_display",
                                                "English",
                                                "Display & Brightness",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_display_desc",
                                                "English",
                                                "ZOOM & DISTANCE",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() => {
                                          setLockScreenSettingsOpen(true);
                                          triggerHaptic("light");
                                        }}
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-slate-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Lock size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_lock_screen",
                                                "English",
                                                "Lock Screen",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_lock_screen_desc",
                                                "English",
                                                "Clock, Colors & Size",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setHomeScreenSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-green-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Image size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_home",
                                                "English",
                                                "Home Screen",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_home_desc",
                                                "English",
                                                "WALLPAPER & NAVIGATION",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setAnimationSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-purple-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Zap size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_animations",
                                                "English",
                                                "Animations",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_animations_desc",
                                                "English",
                                                "SPEED & MOTION",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setBatterySettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-emerald-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Battery size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_battery",
                                                "English",
                                                "Battery",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_battery_desc",
                                                "English",
                                                "HEALTH & SAVER",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setSecuritySettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-zinc-800 shadow-sm group-hover:scale-105 transition-transform">
                                            <Shield size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_security",
                                                "English",
                                                "Security",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_security_desc",
                                                "English",
                                                "PASSCODE & LOCK",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setAccessibilitySettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                                            <Accessibility size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_accessibility",
                                                "English",
                                                "Accessibility",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_accessibility_desc",
                                                "English",
                                                "DYNAMIC ISLAND & VISUALS",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>


                                      <button
                                        onClick={() => {
                                          setAppsSettingsOpen(true);
                                          triggerHaptic("light");
                                        }}
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-teal-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Grid size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {language === "Turkish"
                                                ? "Uygulamalar"
                                                : "Apps"}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {language === "Turkish"
                                                ? "YÖNET VE SÜRÜMLER"
                                                : "MANAGE & VERSIONS"}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>

                                      <button
                                        onClick={() =>
                                          setMoreSettingsOpen(true)
                                        }
                                        className="w-full flex justify-between items-center py-3.5 px-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors text-left group"
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-zinc-500 shadow-sm group-hover:scale-105 transition-transform">
                                            <Globe size={16} />
                                          </div>
                                          <div className="flex flex-col">
                                            <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-100">
                                              {gt(
                                                "settings_more",
                                                "English",
                                                "More Settings",
                                              )}
                                            </span>
                                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                                              {gt(
                                                "settings_more_desc",
                                                "English",
                                                "GRID SIZE & MODS",
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronLeft
                                          size={16}
                                          className="text-zinc-300 dark:text-zinc-600 rotate-180 group-hover:translate-x-0.5 transition-transform"
                                        />
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            )}

                            {activeApp.id === "terminal" && (
                              <TerminalApp
                                isFrozen={isFrozen}
                                isGlitching={isGlitching}
                                isSafeMode={isSafeMode}
                                batteryLevel={batteryLevel}
                                triggerVirus={triggerVirus}
                                triggerHaptic={triggerHaptic}
                                onSystemDelete={() => {
                                  setTimeout(() => {
                                    setIsANRShowing(true);
                                    triggerHaptic("heavy");
                                  }, 5000);
                                }}
                                onOSUpdate={() => {
                                  setIsOS24Beta(true);
                                  setWallpaper(
                                    "https://images.unsplash.com/photo-1635776062127-d365bbbb278d?q=80&w=2600&auto=format&fit=crop",
                                  );
                                  setApps((prev) => {
                                    if (prev.find((a) => a.id === "magisk"))
                                      return prev;
                                    return [
                                      ...prev,
                                      {
                                        id: "magisk",
                                        name: "Magisk",
                                        icon: "Terminal",
                                        color:
                                          "bg-gradient-to-br from-white via-zinc-50 to-zinc-200",
                                        component: "MagiskApp",
                                      },
                                    ];
                                  });
                                  setNotifications((prev) => [
                                    {
                                      id: `update-success-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                                      title: "System Updated",
                                      text: "WePol OS 24 Beta applied. System is up to date.",
                                      icon: "Zap",
                                      color: "bg-red-600",
                                      time: "Just now",
                                    },
                                    ...prev,
                                  ]);
                                  triggerHaptic("heavy");
                                }}
                              />
                            )}
                            {activeApp.id === "magisk" && (
                              <MagiskApp theme={theme} language={language} />
                            )}
                            {activeApp.id === "device_security" && (
                              <SecurityApp
                                theme={theme}
                                language={language}
                                isPasscodeEnabled={isPasscodeEnabled}
                                isPatternEnabled={isPatternEnabled}
                                isFingerprintEnabled={isFingerprintEnabled}
                                isSafeMode={isSafeMode}
                                triggerHaptic={triggerHaptic}
                              />
                            )}
                            {(activeApp.id === "files_home" ||
                              activeApp.id === "files_dock") && (
                              <FilesApp
                                theme={theme}
                                triggerHaptic={triggerHaptic}
                                language={language}
                              />
                            )}
                            {activeApp.id === "calculator" && (
                              <div className="flex flex-col h-full bg-black -m-6 p-4">
                                <div className="flex-1 flex flex-col justify-end items-end p-6 pb-8">
                                  <span className="text-white text-7xl font-light tracking-tighter">
                                    {calculatorInput}
                                  </span>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                  {["AC", "+/-", "%", "/"].map((char) => (
                                    <button
                                      key={char}
                                      onClick={() => {
                                        if (char === "AC")
                                          setCalculatorInput("0");
                                        else if (char === "+/-")
                                          setCalculatorInput((prev) =>
                                            prev.startsWith("-")
                                              ? prev.slice(1)
                                              : "-" + prev,
                                          );
                                      }}
                                      className={`h-20 w-20 rounded-full flex items-center justify-center text-2xl font-semibold ${["/", "*", "-", "+", "="].includes(char) ? "bg-orange-500 text-white" : char === "AC" || char === "+/-" || char === "%" ? "bg-zinc-300 text-black" : "bg-zinc-800 text-white"}`}
                                    >
                                      {char}
                                    </button>
                                  ))}
                                  {["7", "8", "9", "x"].map((char) => (
                                    <button
                                      key={char}
                                      onClick={() =>
                                        setCalculatorInput((prev) =>
                                          prev === "0" ? char : prev + char,
                                        )
                                      }
                                      className={`h-20 w-20 rounded-full flex items-center justify-center text-2xl font-semibold ${char === "x" ? "bg-orange-500 text-white" : "bg-zinc-800 text-white"}`}
                                    >
                                      {char}
                                    </button>
                                  ))}
                                  {["4", "5", "6", "-"].map((char) => (
                                    <button
                                      key={char}
                                      onClick={() =>
                                        setCalculatorInput((prev) =>
                                          prev === "0" ? char : prev + char,
                                        )
                                      }
                                      className={`h-20 w-20 rounded-full flex items-center justify-center text-2xl font-semibold ${char === "-" ? "bg-orange-500 text-white" : "bg-zinc-800 text-white"}`}
                                    >
                                      {char}
                                    </button>
                                  ))}
                                  {["1", "2", "3", "+"].map((char) => (
                                    <button
                                      key={char}
                                      onClick={() =>
                                        setCalculatorInput((prev) =>
                                          prev === "0" ? char : prev + char,
                                        )
                                      }
                                      className={`h-20 w-20 rounded-full flex items-center justify-center text-2xl font-semibold ${char === "+" ? "bg-orange-500 text-white" : "bg-zinc-800 text-white"}`}
                                    >
                                      {char}
                                    </button>
                                  ))}
                                  <button
                                    onClick={() =>
                                      setCalculatorInput((prev) =>
                                        prev === "0" ? "0" : prev + "0",
                                      )
                                    }
                                    className="col-span-2 h-20 rounded-full bg-zinc-800 text-white flex items-center pl-8 text-2xl font-semibold"
                                  >
                                    0
                                  </button>
                                  <button className="h-20 w-20 rounded-full bg-zinc-800 text-white flex items-center justify-center text-2xl font-semibold">
                                    .
                                  </button>
                                  <button className="h-20 w-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-semibold">
                                    =
                                  </button>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "notes" && (
                              <div className="space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                  <h3 className="text-3xl font-bold">Notes</h3>
                                  <button className="text-orange-500 font-bold">
                                    Edit
                                  </button>
                                </div>
                                <div className="bg-white rounded-2xl overflow-hidden border divide-y">
                                  {notes.map((note) => (
                                    <div
                                      key={`note-${note.id}`}
                                      className="p-4 hover:bg-zinc-50 cursor-pointer group"
                                    >
                                      <h4 className="font-bold text-zinc-900">
                                        {note.title}
                                      </h4>
                                      <p className="text-sm text-zinc-500 truncate">
                                        {note.content}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex justify-center pt-8">
                                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg">
                                    <span className="text-2xl">+</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "messages" && (
                              <div className="h-full flex flex-col -m-6 bg-white">
                                <div className="p-6 pb-2">
                                  <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-3xl font-bold">
                                      Messages
                                    </h3>
                                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                      <FileText
                                        size={16}
                                        className="text-blue-600"
                                      />
                                    </div>
                                  </div>
                                  <div className="relative mb-4">
                                    <div className="absolute inset-y-0 left-3 flex items-center text-zinc-400">
                                      <Search
                                        size={16}
                                        fill="currentColor"
                                        strokeWidth={1.5}
                                      />
                                    </div>
                                    <input
                                      className="w-full bg-zinc-100 rounded-xl py-2 pl-10 pr-4 text-sm outline-none"
                                      placeholder="Search"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1 overflow-y-auto divide-y">
                                  {messages.map((msg) => (
                                    <div
                                      key={`msg-${msg.id}`}
                                      className="p-4 flex gap-4 hover:bg-zinc-50 cursor-pointer"
                                    >
                                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center text-lg font-bold text-white uppercase">
                                        {msg.from[0]}
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                          <span className="font-bold">
                                            {msg.from}
                                          </span>
                                          <span className="text-xs text-zinc-400">
                                            {msg.time}
                                          </span>
                                        </div>
                                        <p className="text-sm text-zinc-500 line-clamp-1">
                                          {msg.text}
                                        </p>
                                      </div>
                                      <ChevronLeft
                                        size={16}
                                        className="text-zinc-300 rotate-180 self-center"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "music" && (
                              <div className="h-full flex flex-col -m-6 bg-zinc-900 text-white p-8">
                                <div className="flex-1 flex flex-col items-center justify-center space-y-12">
                                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-2xl overflow-hidden ring-4 ring-white/10">
                                    <div className="w-full h-full flex items-center justify-center">
                                      <Music
                                        size={120}
                                        className={`text-white/20 ${isMusicPlaying ? "animate-pulse" : ""}`}
                                      />
                                    </div>
                                  </div>
                                  <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-bold">
                                      Midnight Dreams
                                    </h3>
                                    <p className="text-pink-400 font-semibold">
                                      Neon Horizon
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-8 pb-12">
                                  <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={false}
                                        animate={{ width: `${musicProgress}%` }}
                                        className="h-full bg-white"
                                      />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-white/40">
                                      <span>
                                        {Math.floor(
                                          ((musicProgress / 100) * 180) / 60,
                                        )}
                                        :
                                        {Math.floor(
                                          ((musicProgress / 100) * 180) % 60,
                                        )
                                          .toString()
                                          .padStart(2, "0")}
                                      </span>
                                      <span>3:00</span>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center px-4">
                                    <button className="text-white/60">
                                      <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                                        ⏪
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => {
                                        triggerHaptic("heavy");
                                        setIsMusicPlaying(!isMusicPlaying);
                                      }}
                                      className="w-20 h-20 rounded-full bg-white text-zinc-950 flex items-center justify-center text-3xl active:scale-95 transition-transform"
                                    >
                                      {isMusicPlaying ? "⏸" : "▶️"}
                                    </button>
                                    <button className="text-white/60">
                                      <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                                        ⏩
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "photos" && (
                              <div className="h-full flex items-center justify-center bg-white text-zinc-900 font-bold">
                                none
                              </div>
                            )}

                            {activeApp.id === "youtube" && (
                              <div className="h-full flex flex-col -m-6 bg-white overflow-hidden">
                                {/* Video Player Overlay */}
                                <AnimatePresence>
                                  {selectedYoutubeVideo && (
                                    <motion.div
                                      initial={{ y: "100%" }}
                                      animate={{ y: 0 }}
                                      exit={{ y: "100%" }}
                                      transition={{
                                        type: "spring",
                                        damping: 25,
                                        stiffness: 200,
                                      }}
                                      className="absolute inset-0 z-[100] bg-white flex flex-col"
                                    >
                                      <div className="aspect-video bg-black relative group">
                                        <img
                                          src={selectedYoutubeVideo.thumbnail}
                                          className="w-full h-full object-cover opacity-60"
                                          alt="Video"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                                            <Play
                                              size={32}
                                              fill="currentColor"
                                            />
                                          </div>
                                        </div>
                                        <button
                                          onClick={() =>
                                            setSelectedYoutubeVideo(null)
                                          }
                                          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white"
                                        >
                                          <ChevronLeft
                                            size={24}
                                            className="rotate-[-90deg]"
                                          />
                                        </button>
                                      </div>
                                      <div className="p-4 space-y-4 overflow-y-auto flex-1">
                                        <h3 className="text-lg font-black leading-tight">
                                          {selectedYoutubeVideo.title}
                                        </h3>
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs text-zinc-500 font-bold uppercase">
                                            {selectedYoutubeVideo.views} •{" "}
                                            {selectedYoutubeVideo.time}
                                          </span>
                                          <div className="flex gap-4">
                                            <div className="flex flex-col items-center gap-1">
                                              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                                                <Download size={16} />
                                              </div>
                                              <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                                                Download
                                              </span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-red-600">
                                                <Youtube
                                                  size={16}
                                                  fill="currentColor"
                                                />
                                              </div>
                                              <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">
                                                Share
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="h-[1px] bg-zinc-100 my-4" />
                                        <div className="flex items-center gap-3">
                                          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100">
                                            <img
                                              src={selectedYoutubeVideo.avatar}
                                              alt="Avatar"
                                            />
                                          </div>
                                          <div className="flex-1">
                                            <p className="text-sm font-black text-zinc-900 leading-none mb-1">
                                              {selectedYoutubeVideo.channel}
                                            </p>
                                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                                              1.2M Subscribers
                                            </p>
                                          </div>
                                          <button className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                                            Subscribe
                                          </button>
                                        </div>
                                        <div className="pt-6">
                                          <h4 className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-4">
                                            Up Next
                                          </h4>
                                          <div className="space-y-4">
                                            {[...Array(3)].map((_, i) => (
                                              <div
                                                key={i}
                                                className="flex gap-3"
                                              >
                                                <div className="w-32 aspect-video bg-zinc-100 rounded-lg overflow-hidden flex-shrink-0">
                                                  <img
                                                    src={`https://images.unsplash.com/photo-${1635776062127 + i}-d365bbbb278d?q=80&w=400&auto=format&fit=crop`}
                                                    className="w-full h-full object-cover"
                                                    alt="Thumb"
                                                  />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                  <h5 className="text-xs font-bold leading-tight line-clamp-2">
                                                    The Secret Features of WePol
                                                    OS 25 Revealed
                                                  </h5>
                                                  <p className="text-[10px] text-zinc-400 mt-1 uppercase font-bold">
                                                    Tech World • 200k views
                                                  </p>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                {/* Header */}
                                <div className="pt-2 pb-3 px-4 flex items-center justify-between border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
                                  <div className="flex items-center gap-1">
                                    <div className="bg-red-600 rounded-lg p-1">
                                      <Youtube
                                        size={14}
                                        fill="white"
                                        className="text-white"
                                      />
                                    </div>
                                    <span className="font-bold text-lg tracking-tighter">
                                      YouTube
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <Search
                                      size={20}
                                      className="text-zinc-600"
                                    />
                                    <div className="w-7 h-7 rounded-full bg-zinc-200 overflow-hidden border border-zinc-100 flex items-center justify-center">
                                      <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Builder"
                                        alt="Profile"
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto pb-16 bg-zinc-50">
                                  {/* Categories */}
                                  <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar bg-white">
                                    {[
                                      "All",
                                      "Music",
                                      "Gaming",
                                      "Live",
                                      "Tech",
                                      "Cooking",
                                      "Travel",
                                    ].map((cat, i) => (
                                      <button
                                        key={cat}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${i === 0 ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
                                      >
                                        {cat}
                                      </button>
                                    ))}
                                  </div>

                                  {/* Video Feed */}
                                  <div className="space-y-6 pt-2">
                                    {[
                                      {
                                        title:
                                          "WePol OS 24: The Future of Mobile Operating Systems",
                                        channel: "WePol Tech",
                                        views: "1.2M views",
                                        time: "2 hours ago",
                                        thumbnail:
                                          "https://images.unsplash.com/photo-1635776062127-d365bbbb278d?q=80&w=2600&auto=format&fit=crop",
                                        avatar:
                                          "https://api.dicebear.com/7.x/avataaars/svg?seed=WePol",
                                      },
                                      {
                                        title:
                                          "Customizing your Android Setup: 2026 Edition",
                                        channel: "TechMaster",
                                        views: "850K views",
                                        time: "1 day ago",
                                        thumbnail:
                                          "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
                                        avatar:
                                          "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
                                      },
                                      {
                                        title:
                                          "Why Minimalist Phone UI is Taking Over",
                                        channel: "Design Insider",
                                        views: "340K views",
                                        time: "3 days ago",
                                        thumbnail:
                                          "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2529&auto=format&fit=crop",
                                        avatar:
                                          "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
                                      },
                                    ].map((video, idx) => (
                                      <div
                                        key={idx}
                                        onClick={() => {
                                          triggerHaptic("medium");
                                          setSelectedYoutubeVideo(video);
                                        }}
                                        className="space-y-3 cursor-pointer group active:opacity-80 transition-opacity"
                                      >
                                        <div className="relative aspect-video bg-zinc-200 overflow-hidden">
                                          <img
                                            src={video.thumbnail}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            alt={video.title}
                                          />
                                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-black px-1.5 py-0.5 rounded leading-none">
                                            {10 + idx}:{idx * 3 + 15}
                                          </div>
                                        </div>
                                        <div className="flex gap-3 px-4 pb-2">
                                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-zinc-100">
                                            <img
                                              src={video.avatar}
                                              alt={video.channel}
                                            />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-zinc-900 leading-tight line-clamp-2">
                                              {video.title}
                                            </h4>
                                            <div className="flex items-center gap-1.5 mt-1">
                                              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-tighter">
                                                {video.channel}
                                              </span>
                                              <span className="text-[10px] text-zinc-300">
                                                •
                                              </span>
                                              <span className="text-[11px] text-zinc-400 capitalize">
                                                {video.views}
                                              </span>
                                              <span className="text-[10px] text-zinc-300">
                                                •
                                              </span>
                                              <span className="text-[11px] text-zinc-400 capitalize">
                                                {video.time}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Bottom Navigation */}
                                <div className="h-16 border-t bg-white flex items-center justify-around px-2 pb-safe sticky bottom-0">
                                  {[
                                    {
                                      label: "Home",
                                      icon: Youtube,
                                      active: true,
                                    },
                                    {
                                      label: "Shorts",
                                      icon: Play,
                                      active: false,
                                    },
                                    {
                                      label: "Subscriptions",
                                      icon: ShoppingBag,
                                      active: false,
                                    },
                                    {
                                      label: "Library",
                                      icon: Folder,
                                      active: false,
                                    },
                                  ].map((item, i) => (
                                    <button
                                      key={item.label}
                                      className="flex flex-col items-center gap-1 group"
                                    >
                                      <div
                                        className={`relative ${item.active ? "text-zinc-900" : "text-zinc-400"} group-active:scale-90 transition-transform`}
                                      >
                                        <item.icon
                                          size={22}
                                          fill={
                                            item.active
                                              ? "currentColor"
                                              : "none"
                                          }
                                        />
                                      </div>
                                      <span
                                        className={`text-[9px] font-bold uppercase tracking-widest ${item.active ? "text-zinc-900" : "text-zinc-400"}`}
                                      >
                                        {item.label}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "tiktok" && (
                              <div className="h-full flex items-center justify-center bg-white text-zinc-900 font-bold">
                                none
                              </div>
                            )}

                            {activeApp.id === "playstore" && (
                              <div className="space-y-8 pb-12 -m-6 p-6 min-h-full bg-slate-50">
                                <div className="flex justify-between items-center mb-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white shadow-sm">
                                      <Play size={20} fill="currentColor" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                                      Play Store
                                    </h3>
                                  </div>
                                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-white overflow-hidden">
                                    <img
                                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Builder"
                                      alt="Profile"
                                    />
                                  </div>
                                </div>

                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                                  {[
                                    "For you",
                                    "Top charts",
                                    "Children",
                                    "Categories",
                                  ].map((tab, i) => (
                                    <button
                                      key={`ps-tab-${tab}`}
                                      className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i === 0 ? "bg-green-100 text-green-800" : "bg-white text-slate-500 border border-slate-200"}`}
                                    >
                                      {tab}
                                    </button>
                                  ))}
                                </div>

                                <section className="space-y-4">
                                  <div className="flex justify-between items-end">
                                    <h4 className="font-bold text-slate-800 uppercase tracking-widest text-[10px]">
                                      Recommended Modern Apps
                                    </h4>
                                    <button className="text-green-600 font-bold text-xs">
                                      View all
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-1 gap-4">
                                    {STORE_APPS.map((app) => {
                                      const isInstalled = apps.find(
                                        (a) => a.id === app.id,
                                      );
                                      const isInstalling =
                                        installingAppId === app.id;

                                      return (
                                        <div
                                          key={`playstore-app-${app.id}`}
                                          className="bg-white rounded-[24px] p-4 flex gap-4 items-center shadow-sm border border-slate-100 active:scale-98 transition-all"
                                        >
                                          <div
                                            className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center shadow-md flex-shrink-0`}
                                          >
                                            <AppIcon app={app} size={28} />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-slate-800 truncate">
                                              {app.name}
                                            </h4>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase">
                                              {app.category}
                                            </span>
                                            {isInstalling && (
                                              <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                  initial={{ width: 0 }}
                                                  animate={{
                                                    width: `${installProgress}%`,
                                                  }}
                                                  className="h-full bg-green-500"
                                                />
                                              </div>
                                            )}
                                          </div>
                                          <button
                                            disabled={isInstalling}
                                            onClick={() => installApp(app)}
                                            className={`px-6 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${isInstalled ? "bg-slate-100 text-slate-400" : "bg-green-600 text-white shadow-lg shadow-green-600/20"}`}
                                          >
                                            {isInstalling
                                              ? `${installProgress}%`
                                              : isInstalled
                                                ? t(
                                                    "store_installed",
                                                    "Installed",
                                                  )
                                                : t("store_install", "Install")}
                                          </button>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </section>
                              </div>
                            )}

                            {/* App Switcher Overlay */}
                            <AnimatePresence>
                              {isAppSwitcherOpen && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 z-50 bg-zinc-950/20 backdrop-blur-md flex flex-col items-center justify-center pb-20"
                                >
                                  <div className="flex gap-4 overflow-x-auto w-full px-12 snap-x snap-mandatory pt-12 no-scrollbar">
                                    {recentApps.map((app) => (
                                      <motion.div
                                        key={`switcher-${app.id}`}
                                        onClick={() => {
                                          handleSetApp(app);
                                          setIsAppSwitcherOpen(false);
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-shrink-0 w-64 h-[440px] bg-white rounded-[32px] border shadow-2xl overflow-hidden snap-center flex flex-col"
                                      >
                                        <div className="p-4 flex items-center gap-3 border-b border-zinc-100 bg-white">
                                          <div
                                            className={`w-8 h-8 rounded-lg ${app.color} flex items-center justify-center`}
                                          >
                                            <AppIcon app={app} size={18} />
                                          </div>
                                          <span className="text-zinc-900 font-bold text-sm tracking-tight">
                                            {t(app.id, app.name)}
                                          </span>
                                        </div>
                                        <div className="flex-1 bg-zinc-50 flex items-center justify-center p-8">
                                          <div className="w-full h-full border-2 border-dashed border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-300">
                                            {language === "Turkish"
                                              ? "Önizleme"
                                              : "Preview"}
                                          </div>
                                        </div>
                                      </motion.div>
                                    ))}
                                    {recentApps.length === 0 && (
                                      <span className="text-white/60 font-bold uppercase tracking-widest text-xs">
                                        {language === "Turkish"
                                          ? "Son Etkinlik Yok"
                                          : "No Recent Activity"}
                                      </span>
                                    )}
                                  </div>
                                  <div className="mt-8 flex flex-col items-center gap-4">
                                    <button
                                      onClick={() =>
                                        setIsAppSwitcherOpen(false)
                                      }
                                      className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest"
                                    >
                                      {language === "Turkish"
                                        ? "Ana Ekrana Dön"
                                        : "Back to Home"}
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {activeApp.id === "appstore" && (
                              <div className="space-y-8 pb-12">
                                <div className="flex justify-between items-center">
                                  <h3 className="text-3xl font-bold">
                                    {language === "Turkish" ? "Bugün" : "Today"}
                                  </h3>
                                  <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border">
                                    <img
                                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aygul"
                                      alt="Profile"
                                    />
                                  </div>
                                </div>
                                <div className="space-y-6">
                                  <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-square">
                                    <img
                                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
                                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                                      alt="Feature"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                                        Editors Choice
                                      </span>
                                      <h4 className="text-white text-2xl font-bold">
                                        New Creative Tools
                                      </h4>
                                      <p className="text-white/80 text-sm mt-1">
                                        Unlock your imagination today.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="bg-white rounded-3xl p-6 border shadow-sm border-zinc-100 flex gap-4 items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-blue-600">
                                      <Camera size={32} />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-zinc-900">
                                        CamPro 2
                                      </h4>
                                      <p className="text-sm text-zinc-500">
                                        Professional photography
                                      </p>
                                    </div>
                                    <button className="px-6 py-1.5 bg-zinc-100 text-blue-600 rounded-full font-bold text-sm">
                                      GET
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "clock" && (
                              <div className="h-full flex flex-col -m-6 bg-black text-white p-8">
                                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                                  <div className="relative w-64 h-64 border-4 border-zinc-800 rounded-full flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      {Array.from({ length: 12 }).map(
                                        (_, i) => (
                                          <div
                                            key={i}
                                            className="absolute inset-4"
                                            style={{
                                              transform: `rotate(${i * 30}deg)`,
                                            }}
                                          >
                                            <div className="w-1 h-3 bg-zinc-700 mx-auto rounded-full" />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                    <div className="w-1.5 h-24 bg-white rounded-full translate-y-[-12px]" />
                                    <div
                                      className="absolute w-1.5 h-32 bg-orange-500/80 rounded-full translate-y-[-16px] origin-bottom"
                                      style={{ transform: "rotate(120deg)" }}
                                    />
                                    <div className="w-4 h-4 bg-white rounded-full z-10 shadow-lg" />
                                  </div>
                                  <h3 className="text-5xl font-light tabular-nums leading-none pt-8">
                                    {currentTime.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: false,
                                      second: "2-digit",
                                    })}
                                  </h3>
                                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">
                                    Cupertino, USA
                                  </p>

                                  <div className="pt-8">
                                    <button
                                      onClick={() => {
                                        triggerHaptic("heavy");
                                        setTimerRemaining((prev) =>
                                          prev === null ? 300 : null,
                                        );
                                      }}
                                      className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${timerRemaining ? "bg-red-500 text-white" : "bg-orange-500 text-white"}`}
                                    >
                                      {timerRemaining
                                        ? "Stop Timer"
                                        : "Start 5m Timer"}
                                    </button>
                                  </div>
                                </div>
                                <div className="grid grid-cols-4 gap-4 pb-12">
                                  {["World", "Alarm", "Stopwatch", "Timer"].map(
                                    (label, i) => (
                                      <div
                                        key={label}
                                        className={`flex flex-col items-center gap-1.5 py-4 rounded-2xl ${i === 2 ? "text-orange-500" : "text-zinc-500"}`}
                                      >
                                        <Clock size={20} />
                                        <span className="text-[10px] font-bold uppercase">
                                          {label}
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "maps" && (
                              <div className="h-full -mx-6 -my-6 relative overflow-hidden bg-zinc-100">
                                <img
                                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2666&auto=format&fit=crop"
                                  className="w-full h-full object-cover opacity-60 grayscale-[0.2]"
                                  alt="Map background"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                                <div className="absolute top-12 left-6 right-6">
                                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                                      <Search
                                        size={18}
                                        fill="currentColor"
                                        strokeWidth={1.5}
                                      />
                                    </div>
                                    <input
                                      className="bg-transparent flex-1 outline-none text-sm font-semibold"
                                      placeholder="Search for a place"
                                    />
                                  </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                  <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 2,
                                    }}
                                    className="relative"
                                  >
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white ring-8 ring-blue-500/20">
                                      <MapPin size={24} fill="currentColor" />
                                    </div>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 rounded-full blur-[2px]" />
                                  </motion.div>
                                </div>
                                <div className="absolute bottom-12 right-6 space-y-4">
                                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-blue-600">
                                    <Compass size={24} />
                                  </div>
                                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center">
                                    <ArrowUp size={24} />
                                  </div>
                                </div>
                              </div>
                            )}

                            {activeApp.id === "mail" && (
                              <div className="h-full flex flex-col -m-6 bg-white">
                                <div className="p-6 pb-2">
                                  <h3 className="text-3xl font-bold mb-6">
                                    Inbox
                                  </h3>
                                </div>
                                <div className="flex-1 overflow-y-auto divide-y">
                                  {[
                                    {
                                      from: "Apple",
                                      subject: "Your receipt from Apple",
                                      preview:
                                        "Thank you for your purchase. Your subscription has been renewed...",
                                      time: "Yesterday",
                                    },
                                    {
                                      from: "GitHub",
                                      subject:
                                        "[GitHub] A personal access token was created",
                                      preview:
                                        "A new personal access token was created on your account...",
                                      time: "10:45 AM",
                                    },
                                    {
                                      from: "LinkedIn",
                                      subject:
                                        "Aygul, see who is hiring in your area",
                                      preview:
                                        "Check out these news jobs at Microsoft, Google and more...",
                                      time: "08:22 AM",
                                    },
                                  ].map((email, i) => (
                                    <div
                                      key={i}
                                      className="p-6 flex gap-4 hover:bg-zinc-50 cursor-pointer"
                                    >
                                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                                      <div className="flex-1 space-y-1">
                                        <div className="flex justify-between items-start">
                                          <span className="font-bold text-zinc-900">
                                            {email.from}
                                          </span>
                                          <span className="text-xs text-zinc-400">
                                            {email.time}
                                          </span>
                                        </div>
                                        <h4 className="font-semibold text-sm line-clamp-1">
                                          {email.subject}
                                        </h4>
                                        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                                          {email.preview}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "phone" && (
                              <div className="h-full flex flex-col -m-6 bg-white">
                                <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-12">
                                  <div className="w-32 h-32 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                                    <Phone size={64} />
                                  </div>
                                  <div className="flex flex-col items-center gap-4">
                                    <button
                                      onClick={() => {
                                        triggerHaptic("heavy");
                                        setActiveCall({
                                          name: "Aygul",
                                          status: "incoming",
                                        });
                                      }}
                                      className="px-6 py-2 bg-blue-500 text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-blue-600 transition-colors"
                                    >
                                      Simulate Incoming Call
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-3 gap-8 w-full max-w-[280px]">
                                    {[
                                      1,
                                      2,
                                      3,
                                      4,
                                      5,
                                      6,
                                      7,
                                      8,
                                      9,
                                      "*",
                                      0,
                                      "#",
                                    ].map((num) => (
                                      <div
                                        key={num}
                                        className="flex flex-col items-center"
                                      >
                                        <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-2xl font-semibold hover:bg-zinc-200 transition-colors cursor-pointer">
                                          {num}
                                        </div>
                                        <span className="text-[10px] font-bold text-zinc-400 mt-1 uppercase tracking-widest">
                                          {num === 2
                                            ? "ABC"
                                            : num === 3
                                              ? "DEF"
                                              : num === 4
                                                ? "GHI"
                                                : num === 5
                                                  ? "JKL"
                                                  : num === 6
                                                    ? "MNO"
                                                    : num === 7
                                                      ? "PQRS"
                                                      : num === 8
                                                        ? "TUV"
                                                        : num === 9
                                                          ? "WXYZ"
                                                          : ""}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-200 cursor-pointer">
                                    <Phone size={32} fill="currentColor" />
                                  </div>
                                </div>
                                <div className="grid grid-cols-5 border-t py-2">
                                  {[
                                    "Favorites",
                                    "Recents",
                                    "Contacts",
                                    "Keypad",
                                    "Voicemail",
                                  ].map((label, i) => (
                                    <div
                                      key={label}
                                      className={`flex flex-col items-center gap-1 ${i === 3 ? "text-blue-600" : "text-zinc-400"}`}
                                    >
                                      <div className="w-6 h-6 flex items-center justify-center">
                                        {i === 2 ? (
                                          <Phone size={18} />
                                        ) : i === 3 ? (
                                          <div className="grid grid-cols-3 gap-0.5">
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                            <div className="w-1 h-1 bg-current" />
                                          </div>
                                        ) : (
                                          <Calendar size={18} />
                                        )}
                                      </div>
                                      <span className="text-[9px] font-bold uppercase">
                                        {label}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {activeApp.id === "safari" && (
                              <div className="h-full flex flex-col -m-6 bg-white">
                                <div className="p-4 pt-12 bg-zinc-50 border-b">
                                  <div className="bg-zinc-200/50 rounded-xl px-4 py-2 flex items-center gap-2">
                                    <div className="text-zinc-400">🔒</div>
                                    <span className="text-sm font-medium text-zinc-600">
                                      google.com
                                    </span>
                                    <div className="ml-auto text-zinc-400 rotate-90">
                                      ↻
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-8 bg-white">
                                  <div className="text-4xl font-bold tracking-tighter">
                                    <span className="text-blue-500">G</span>
                                    <span className="text-red-500">o</span>
                                    <span className="text-yellow-500">o</span>
                                    <span className="text-blue-500">g</span>
                                    <span className="text-green-500">l</span>
                                    <span className="text-red-500">e</span>
                                  </div>
                                  <div className="w-full relative px-4">
                                    <input
                                      className="w-full border-2 border-zinc-100 rounded-[2rem] py-5 px-8 shadow-lg text-lg outline-none bg-white focus:border-blue-500 transition-all"
                                      placeholder="Search or enter website name"
                                    />
                                    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-blue-500">
                                      <Search
                                        size={24}
                                        fill="currentColor"
                                        strokeWidth={1.5}
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-4 gap-6 w-full pt-8">
                                    {[
                                      { icon: "🎬", name: "YouTube" },
                                      { icon: "📸", name: "Instagram" },
                                      { icon: "💬", name: "Chat" },
                                      { icon: "📧", name: "Gmail" },
                                    ].map((site) => (
                                      <div
                                        key={site.name}
                                        className="flex flex-col items-center gap-2"
                                      >
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border flex items-center justify-center text-2xl shadow-sm">
                                          {site.icon}
                                        </div>
                                        <span className="text-[10px] font-medium text-zinc-500">
                                          {site.name}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="p-4 flex justify-between items-center border-t text-blue-600">
                                  <ChevronLeft size={24} />
                                  <ChevronLeft
                                    size={24}
                                    className="rotate-180"
                                  />
                                  <ShoppingBag size={20} />
                                  <Calendar size={20} />
                                  <FileText size={20} />
                                </div>
                              </div>
                            )}

                            {activeApp.id === "camera" && (
                              <div className="h-full flex flex-col -m-6 bg-black relative overflow-hidden">
                                {/* Camera Viewport */}
                                <div className="flex-1 rounded-3xl overflow-hidden bg-zinc-900 relative">
                                  <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=2670&auto=format&fit=crop"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                    style={{
                                      transform: `scale(${cameraPointScale})`,
                                    }}
                                    alt="Camera view"
                                  />

                                  {/* Focus Point Overlay */}
                                  <div
                                    className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-200 flex items-center justify-center -translate-x-1/2"
                                    style={{
                                      left: `${(cameraPointPosition / 200) * 100}%`,
                                    }}
                                  >
                                    <div className="w-16 h-16 border-yellow-400 border-2 rounded-lg flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                                      <div className="w-1 h-1 bg-yellow-400 rounded-full" />
                                    </div>
                                  </div>

                                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    {["0.5x", "1x", "2x", "3x"].map((zoom) => (
                                      <button
                                        key={zoom}
                                        className={`text-[10px] font-black uppercase ${zoom === "1x" ? "text-yellow-400" : "text-zinc-400"}`}
                                      >
                                        {zoom}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Controls */}
                                <div className="h-44 flex flex-col justify-center items-center py-4 bg-black">
                                  <div className="flex justify-between items-center w-full px-12 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <button
                                      onClick={() => {
                                        triggerHaptic("heavy");
                                        setPhoneRoundness(0);
                                        setIsFullscreen2(true);
                                      }}
                                      className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-transparent group active:scale-95 transition-all"
                                    >
                                      <div className="w-12 h-12 rounded-full bg-white group-active:scale-90 transition-transform" />
                                    </button>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                      <RotateCcw size={20} />
                                    </div>
                                  </div>
                                  <div className="flex gap-8 text-[10px] font-bold text-white uppercase tracking-widest overflow-x-hidden opacity-60">
                                    <span>Video</span>
                                    <span className="text-yellow-400">
                                      Photo
                                    </span>
                                    <span>Portrait</span>
                                    <span>Pano</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {![
                              "calendar",
                              "weather",
                              "settings",
                              "calculator",
                              "notes",
                              "messages",
                              "music",
                              "photos",
                              "appstore",
                              "playstore",
                              "clock",
                              "maps",
                              "mail",
                              "phone",
                              "safari",
                              "terminal",
                              "files_home",
                              "files_dock",
                              "camera",
                            ].includes(activeApp.id) && (
                              <div className="flex flex-col items-center justify-center h-[500px] animate-pulse">
                                <div
                                  className={`p-8 rounded-[30px] ${activeApp.color} shadow-2xl mb-8`}
                                >
                                  <AppIcon app={activeApp} size={80} />
                                </div>
                                <h3 className="text-xl font-bold italic text-zinc-300 uppercase tracking-[0.3em]">
                                  {activeApp.name}
                                </h3>
                                <p className="mt-4 text-zinc-400 text-sm font-medium">
                                  Coming soon to NovaOS
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Wepol AI Screen Overlay */}
                        {activeApp.id === "settings" &&
                          isWepolAiOpen && (
                            <div className="absolute inset-0 z-[100] bg-slate-50 dark:bg-zinc-950 flex flex-col p-6 text-zinc-900 dark:text-zinc-100 overflow-y-auto no-scrollbar" id="wepol-ai-about-screen">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
                                <div className="absolute w-[300px] h-[300px] rounded-full bg-orange-400/25 blur-[100px] -top-10 -left-10 animate-pulse duration-[8s]" />
                                <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-400/25 blur-[100px] -bottom-10 -right-10 animate-pulse duration-[6s]" />
                                <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/25 blur-[100px] top-1/3 right-1/4 animate-pulse duration-[7s]" />
                              </div>

                              {/* Universal Back Button */}
                              <button
                                onClick={() => {
                                  triggerHaptic("light");
                                  setIsWepolAiOpen(false);
                                }}
                                className="absolute top-16 left-6 z-[110] bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 active:scale-95 transition-all p-2.5 rounded-full text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800 shadow-sm flex items-center justify-center"
                                title="Close Wepol AI"
                                id="wepol-ai-back-button"
                              >
                                <ChevronLeft size={18} />
                              </button>

                              {/* Main Container */}
                              <div className="relative flex flex-col items-center max-w-sm w-full mx-auto space-y-6 z-10 text-center mt-12 pb-12">
                                {/* SVG Swirl Logo Container */}
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
                                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                                  className="relative w-56 h-56 flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(59,130,246,0.18)] group mt-4"
                                >
                                  {/* Ambient glowing radial light aura */}
                                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-orange-500/20 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_15s_linear_infinite]" />
                                  <div className="absolute inset-8 rounded-full bg-slate-50 dark:bg-zinc-950 shadow-inner z-[2]" />
                                  
                                  <svg
                                    viewBox="0 0 240 240"
                                    className="w-full h-full relative z-[5] animate-[spin_40s_linear_infinite]"
                                  >
                                    <defs>
                                      <linearGradient id="wepol-arm-orange" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ff5e36" />
                                        <stop offset="100%" stopColor="#ffa036" />
                                      </linearGradient>
                                      <linearGradient id="wepol-arm-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#a180ff" />
                                        <stop offset="100%" stopColor="#cfbcff" />
                                      </linearGradient>
                                      <linearGradient id="wepol-arm-lightblue" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4ca1ff" />
                                        <stop offset="100%" stopColor="#add6ff" />
                                      </linearGradient>
                                      <linearGradient id="wepol-arm-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#1a62ff" />
                                        <stop offset="100%" stopColor="#1ad6ff" />
                                      </linearGradient>

                                      <g id="wepol-arm-ccw">
                                        <path
                                          d="M 120,20
                                             C 88,20 62,35 48,58
                                             C 43,66 50,73 59,70
                                             C 92,58 129,68 148,94
                                             C 166,120 162,150 146,171
                                             C 140,179 149,186 157,180
                                             C 186,158 200,122 195,86
                                             C 190,50 160,20 120,20 Z"
                                        />
                                      </g>
                                    </defs>

                                    <g>
                                      {/* Orange (Top-Left quadrant / -40deg pivot) */}
                                      <use href="#wepol-arm-ccw" fill="url(#wepol-arm-orange)" transform="rotate(-40, 120, 120)" />
                                      
                                      {/* Purple (Top-Right quadrant / 50deg pivot) */}
                                      <use href="#wepol-arm-ccw" fill="url(#wepol-arm-purple)" transform="rotate(50, 120, 120)" />
                                      
                                      {/* Light Blue (Bottom-Right quadrant / 140deg pivot) */}
                                      <use href="#wepol-arm-ccw" fill="url(#wepol-arm-lightblue)" transform="rotate(140, 120, 120)" />
                                      
                                      {/* Royal Blue (Bottom-Left quadrant / 230deg pivot) */}
                                      <use href="#wepol-arm-ccw" fill="url(#wepol-arm-blue)" transform="rotate(230, 120, 120)" />
                                    </g>
                                  </svg>
                                </motion.div>

                                {/* Typography & Header Information */}
                                <motion.div
                                  initial={{ opacity: 0, y: 15 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 }}
                                  className="space-y-1.5"
                                >
                                  <h3 className="text-3xl font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-950 dark:from-white dark:to-zinc-300">
                                    Wepol AI
                                  </h3>
                                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-[0.25em] leading-relaxed">
                                    {language === "Turkish"
                                      ? "EGEMEN ON-DEVICE ZEKA SİSTEMİ"
                                      : "SOVEREIGN ON-DEVICE COGNITIVE SUITE"}
                                  </p>
                                  <div className="h-[2px] w-12 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-full mx-auto mt-2" />
                                </motion.div>

                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.4 }}
                                  className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold max-w-xs"
                                >
                                  {language === "Turkish"
                                    ? "WePol OS on-device zekasını temsil eden bu dinamik çark, tamamen yerel ve egemen dil modellerini koorine eder. Snapdragon Gen 7 Elite çipindeki Secure Enclave yardımıyla tüm verileriniz güvende kalır."
                                    : "Representing WePol OS on-device intelligence, this dynamic logo coordinates fully local and sovereign cognitive models. Your private data remains secure inside the Secure Enclave of your Snapdragon Gen 7 Elite core."}
                                </motion.p>

                                {/* Features Panel in Grid */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 }}
                                  className="grid grid-cols-1 gap-3 w-full text-left"
                                >
                                  {[
                                    {
                                      title: language === "Turkish" ? "Güvenli Enclave" : "Secure Enclave",
                                      desc: language === "Turkish" ? "Sıfır bulut bağımlılığı. Verileriniz tamamen cihazınızda kalır." : "Zero cloud footprints. Fully isolated locally for total privacy.",
                                      icon: "🔐",
                                    },
                                    {
                                      title: language === "Turkish" ? "Snapdragon Nöral" : "Snapdragon Neural",
                                      desc: language === "Turkish" ? "Donanımsal hızlandırma ile gerçek zamanlı ve sıfır gecikmeli yanıtlar." : "Hardware acceleration for real-time, low-latency tasks.",
                                      icon: "🧠",
                                    },
                                    {
                                      title: language === "Turkish" ? "Çoklu Karar Motoru" : "Multi-Modal Engine",
                                      desc: language === "Turkish" ? "Kamera, ses ve yazıyı tek adımda birleştirir." : "Combines camera streams, speech and text inputs natively.",
                                      icon: "🌟",
                                    },
                                  ].map((feature, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3.5 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/80 shadow-sm flex gap-3 hover:scale-[1.01] transition-transform duration-300"
                                    >
                                      <span className="text-xl flex-shrink-0 select-none">{feature.icon}</span>
                                      <div className="flex flex-col">
                                        <h4 className="text-xs font-black uppercase text-zinc-800 dark:text-zinc-200 tracking-wider">
                                          {feature.title}
                                        </h4>
                                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed mt-0.5">
                                          {feature.desc}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </motion.div>

                                {/* Action / Interactive Optimization Button */}
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.6 }}
                                  className="w-full pt-1"
                                >
                                  <button
                                    disabled={isWepolAiOptimizing}
                                    onClick={() => {
                                      triggerHaptic("heavy");
                                      setIsWepolAiOptimizing(true);
                                      setTimeout(() => {
                                        setIsWepolAiOptimizing(false);
                                        setIsWepolAiOptimized(true);
                                        triggerHaptic("medium");
                                      }, 2000);
                                    }}
                                    className="w-full py-4.5 px-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 hover:opacity-95 shadow-md active:scale-[0.98] transition-all disabled:opacity-80 flex items-center justify-center gap-2"
                                  >
                                    {isWepolAiOptimizing ? (
                                      <>
                                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>
                                          {language === "Turkish" ? "Optimizasyon Yapılıyor..." : "Optimizing Systems..."}
                                        </span>
                                      </>
                                    ) : isWepolAiOptimized ? (
                                      <span>
                                        ✓ {language === "Turkish" ? "SİSTEMLER OPTİMİZE EDİLDİ" : "SISTEMS OPTIMIZED"}
                                      </span>
                                    ) : (
                                      <span>
                                        {language === "Turkish" ? "Sistemleri Optimize Et" : "Optimize Systems"}
                                      </span>
                                    )}
                                  </button>
                                  {isWepolAiOptimized && (
                                    <motion.p
                                      initial={{ opacity: 0, y: -5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="text-[9px] font-bold uppercase tracking-wider text-emerald-500 mt-2 text-center"
                                    >
                                      {language === "Turkish"
                                        ? "Tüm dil ve algı modelleri %100 kapasiteye ayarlandı."
                                        : "All language and neural components tuned to 100% capacity."}
                                    </motion.p>
                                  )}
                                </motion.div>
                              </div>
                            </div>
                          )}

                        {/* Android 17 Easter Egg Overlay */}
                        {activeApp.id === "settings" &&
                          isAndroid17EasterEggOpen && (
                            <div className="absolute inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
                              {/* Cosmic animated starfield background */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] top-1/4 left-1/4 animate-pulse duration-[8s]" />
                                <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-[100px] bottom-1/4 right-1/4 animate-pulse duration-[6s]" />

                                {/* Star points decoration */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_black_80%)]" />
                              </div>

                              {/* Close button */}
                              <button
                                onClick={() => {
                                  triggerHaptic("light");
                                  setIsAndroid17EasterEggOpen(false);
                                }}
                                className="absolute top-16 right-6 z-[110] bg-white/10 hover:bg-white/20 active:scale-95 transition-all p-3 rounded-full text-white backdrop-blur-md shadow-lg border border-white/10"
                                title="Close Easter Egg"
                              >
                                <X size={20} />
                              </button>

                              {/* Badge Container */}
                              <div className="relative flex flex-col items-center max-w-sm w-full space-y-8 z-10 text-center">
                                <motion.div
                                  initial={{
                                    scale: 0.3,
                                    rotate: -45,
                                    y: 100,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    scale: 1,
                                    rotate: 0,
                                    y: 0,
                                    opacity: 1,
                                  }}
                                  transition={{
                                    type: "spring",
                                    damping: 15,
                                    stiffness: 120,
                                    delay: 0.1,
                                  }}
                                  className="relative w-72 h-72 aspect-square rounded-[3.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(219,39,119,0.35)] border border-pink-500/30"
                                >
                                  <img
                                    src="/src/assets/images/android_17_badge_1779616172720.png"
                                    alt="Android 17 Easter Egg"
                                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                  />
                                </motion.div>

                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 }}
                                  className="space-y-3 px-4"
                                >
                                  <h3 className="text-3xl font-black uppercase tracking-[0.25em] bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                                    Android 17
                                  </h3>
                                  <p className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest leading-relaxed">
                                    OFFICIAL EASTER EGG UNLOCKED • SPACE BADGE
                                    EDITION
                                  </p>
                                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mt-2" />
                                </motion.div>
                              </div>
                            </div>
                          )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Custom Folder Overlay */}
                <AnimatePresence>
                  {activeFolder && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-[610] bg-zinc-950/40 backdrop-blur-md flex items-center justify-center p-6"
                      onClick={() => {
                        setActiveFolder(null);
                        triggerHaptic("light");
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.9, y: 15 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 15 }}
                        transition={{ type: "spring", damping: 25, stiffness: 350 }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className={`backdrop-blur-2xl rounded-[32px] p-6 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 dark:border-zinc-800/80 flex flex-col gap-5 ${activeFolder.sections ? 'w-[330px] bg-white/80 dark:bg-zinc-900/90' : 'w-[290px] bg-white/70 dark:bg-zinc-900/80'}`}
                      >
                        {/* Folder Header */}
                        <div className="flex justify-between items-center px-1">
                          <input
                            type="text"
                            value={activeFolder.name}
                            onChange={(e) => {
                              const newName = e.target.value;
                              setActiveFolder(prev => prev ? { ...prev, name: newName } : null);
                              setAppsPage2(prev => prev.map(f => f.id === activeFolder.id ? { ...f, name: newName } : f));
                            }}
                            className="bg-transparent font-black text-xl text-zinc-900 dark:text-white outline-none w-full border-b border-transparent focus:border-zinc-500/20 py-0.5 tracking-tight"
                          />
                          <button
                            onClick={() => {
                              setActiveFolder(null);
                              triggerHaptic("light");
                            }}
                            className="p-1.5 rounded-full bg-zinc-200/50 dark:bg-zinc-800/60 hover:opacity-85"
                          >
                            <X size={14} className="text-zinc-600 dark:text-zinc-300" />
                          </button>
                        </div>

                        {/* Folder Sections / Grid of Apps */}
                        <div className="flex flex-col gap-5 overflow-y-auto no-scrollbar max-h-[460px]">
                          {activeFolder.sections ? (
                            activeFolder.sections.map((section, idx) => {
                              const sTitle = section.title[language] || section.title.English;
                              return (
                                <div key={idx} className="flex flex-col gap-2.5 bg-zinc-50/50 dark:bg-zinc-800/20 p-3 rounded-2xl border border-zinc-100/10 shadow-sm">
                                  <div className="px-1 text-[9px] font-black uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                    {sTitle}
                                  </div>
                                  <div className="grid grid-cols-4 gap-x-2 gap-y-4">
                                    {section.apps.map((nestedApp) => (
                                      <button
                                        key={nestedApp.id}
                                        onClick={() => {
                                          handleSetApp(nestedApp);
                                          setActiveFolder(null);
                                          triggerHaptic("medium");
                                        }}
                                        className="flex flex-col items-center gap-1 focus:outline-none hover:scale-105 active:scale-95 transition-transform"
                                      >
                                        <div
                                          className={`w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden shadow-sm ${getIconStyle(nestedApp.color)}`}
                                        >
                                          <AppIcon app={nestedApp} size={24} />
                                        </div>
                                        <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 truncate max-w-[56px] text-center leading-tight">
                                          {nestedApp.name}
                                        </span>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="grid grid-cols-3 gap-y-6 gap-x-4 p-1">
                              {activeFolder.apps?.map((nestedApp) => {
                                return (
                                  <button
                                    key={nestedApp.id}
                                    onClick={() => {
                                      handleSetApp(nestedApp);
                                      setActiveFolder(null);
                                      triggerHaptic("medium");
                                    }}
                                    className="flex flex-col items-center gap-1.5 focus:outline-none hover:scale-105 active:scale-95 transition-transform"
                                  >
                                    <div
                                      className={`w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-md ${getIconStyle(nestedApp.color)}`}
                                    >
                                      <AppIcon app={nestedApp} size={28} />
                                    </div>
                                    <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-300 truncate max-w-[64px] text-center leading-tight">
                                      {nestedApp.name}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Home Indicator Bar / Buttons */}
              <div
                className={`absolute bottom-0 left-0 z-[610] w-full pointer-events-none flex justify-center transition-all duration-300 ${isSystemDeleting ? "opacity-0 scale-y-0" : ""} ${navStyle === "buttons" ? "h-14 items-center" : "h-8 items-end"}`}
              >
                {navStyle === "bar" ? (
                  <motion.div
                    onPointerDown={() => {
                      if (isNavBarDisabled) {
                        triggerHaptic("heavy");
                        return;
                      }
                      triggerHaptic("medium");
                      if (activeApp) handleSetApp(null);
                      else {
                        setIsControlPanelOpen(false);
                        setIsAppSwitcherOpen(false);
                      }
                    }}
                    whileTap={{ scale: 0.95, opacity: 0.6 }}
                    className={`h-[6px] w-[140px] mb-2 cursor-pointer rounded-full transition-all duration-300 pointer-events-auto ${
                      isNavBarDisabled
                        ? "bg-red-500/50"
                        : themeStyle === "Hyper"
                          ? "bg-indigo-500/50"
                          : themeStyle === "Color"
                            ? "bg-blue-500/50"
                            : activeApp
                              ? theme === "dark"
                                ? "bg-white/30"
                                : "bg-zinc-800"
                              : "bg-white"
                    }`}
                  />
                ) : (
                  <div className="flex w-full max-w-[320px] justify-around items-center pointer-events-auto">
                    {/* Menu / Recents Button */}
                    <button
                      onClick={() => {
                        if (isNavBarDisabled) {
                          triggerHaptic("heavy");
                          return;
                        }
                        triggerHaptic("light");
                        if (activeApp) setIsAppSwitcherOpen(true);
                      }}
                      className={`p-3 transition-all active:scale-95 flex items-center justify-center ${isNavBarDisabled ? "text-red-500/40 hover:text-red-500" : activeApp && !isLocked ? "text-zinc-400 hover:text-white" : "text-white/40 hover:text-white"}`}
                      title="Recents"
                    >
                      <Menu size={22} strokeWidth={2.5} />
                    </button>

                    {/* Home Button */}
                    <button
                      onClick={() => {
                        if (isNavBarDisabled) {
                          triggerHaptic("heavy");
                          return;
                        }
                        triggerHaptic("medium");
                        setActiveApp(null);
                        setIsControlPanelOpen(false);
                        setAboutDeviceOpen(false);
                        setIsAndroid17EasterEggOpen(false);
                        setHomeScreenSettingsOpen(false);
                        setWallpaperSettingsOpen(false);
                        setIconsSettingsOpen(false);
                        setNavigationSettingsOpen(false);
                        setInternetSettingsOpen(false);
                        setScreenSettingsOpen(false);
                        setAnimationSettingsOpen(false);
                        setBatterySettingsOpen(false);
                        setSecuritySettingsOpen(false);
                        setAccessibilitySettingsOpen(false);
                        setSoundSettingsOpen(false);
                        setAppearanceSettingsOpen(false);
                        setMoreSettingsOpen(false);
                        setAppsSettingsOpen(false);
                        setSelectedAppInfo(null);
                      }}
                      className={`p-3 transition-all active:scale-90 flex items-center justify-center ${isNavBarDisabled ? "text-red-500/40 hover:text-red-500" : activeApp && !isLocked ? "text-zinc-400 hover:text-white" : "text-white/40 hover:text-white"}`}
                      title="Home"
                    >
                      <div className="w-5 h-5 border-[2.5px] border-current rounded-[6px]" />
                    </button>

                    {/* Back Button */}
                    <button
                      onClick={() => {
                        if (isNavBarDisabled) {
                          triggerHaptic("heavy");
                          return;
                        }
                        triggerHaptic("light");
                        if (activeApp) {
                          if (selectedAppInfo) {
                            setSelectedAppInfo(null);
                          } else if (appsSettingsOpen) {
                            setAppsSettingsOpen(false);
                          } else if (aboutDeviceOpen) {
                            setAboutDeviceOpen(false);
                          } else if (homeScreenSettingsOpen) {
                            setHomeScreenSettingsOpen(false);
                          } else if (internetSettingsOpen) {
                            setInternetSettingsOpen(false);
                          } else if (mobileDataSettingsOpen) {
                            setMobileDataSettingsOpen(false);
                          } else if (screenSettingsOpen) {
                            setScreenSettingsOpen(false);
                          } else if (animationSettingsOpen) {
                            setAnimationSettingsOpen(false);
                          } else if (batterySettingsOpen) {
                            setBatterySettingsOpen(false);
                          } else if (appearanceSettingsOpen) {
                            setAppearanceSettingsOpen(false);
                          } else if (moreSettingsOpen) {
                            setMoreSettingsOpen(false);
                          } else if (securitySettingsOpen) {
                            setSecuritySettingsOpen(false);
                          } else if (soundSettingsOpen) {
                            setSoundSettingsOpen(false);
                          } else if (accessibilitySettingsOpen) {
                            setAccessibilitySettingsOpen(false);
                          } else if (wallpaperSettingsOpen) {
                            setWallpaperSettingsOpen(false);
                            setHomeScreenSettingsOpen(true);
                          } else if (iconsSettingsOpen) {
                            setIconsSettingsOpen(false);
                            setHomeScreenSettingsOpen(true);
                          } else if (navigationSettingsOpen) {
                            setNavigationSettingsOpen(false);
                            setHomeScreenSettingsOpen(true);
                          } else {
                            setActiveApp(null);
                          }
                        } else if (isControlPanelOpen) {
                          setIsControlPanelOpen(false);
                        }
                      }}
                      className={`p-3 transition-all active:scale-90 flex items-center justify-center ${isNavBarDisabled ? "text-red-500/40 hover:text-red-500" : activeApp && !isLocked ? "text-zinc-400 hover:text-white" : "text-white/40 hover:text-white"}`}
                      title="Back"
                    >
                      <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
