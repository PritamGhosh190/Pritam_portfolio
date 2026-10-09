import { Home, User, Smartphone, Send } from "lucide-react";
import freellyImg from "./assets/freelly.png";
import Feliz from "./assets/feliz.png";
import BhooterRaja from "./assets/BhuterRaja.jpeg";
import MBAcupid from "./assets/mbaCupid.png";
import Akunah from "./assets/akunahMe.jpeg";
import Arya from "./assets/arya.jpeg";

/* =========================================================================
   CUSTOMIZE ME
   Replace the values below with your own details, links, projects and
   resume file. Everything on the page is driven from this one object.
========================================================================= */
export const CONFIG = {
  name: "Pritam Ghosh",
  initials: "PG",
  title: "Web & Mobile App Developer",
  roles: [
    "React Native Developer",
    "React JS Developer",
    "Next JS Developer",
    "Cross-Platform App Builder",
  ],
  bio: "I'm a developer with 3.5+ years of experience building mobile apps with React Native and web apps with React & Next.js — from first commit to app-store release and production deploy.",
  location: "Kolkata, India",
  email: "hello@yourname.dev",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume/Pritam-Ghosh-Resume.pdf",
  resumeFileName: "Pritam-Ghosh-Resume.pdf",
  stats: [
    { value: "3.5+", label: "Years experience" },
    { value: "8+", label: "Apps shipped" },
    { value: "iOS / Android / Web", label: "Platforms" },
  ],
};

export const SKILLS = [
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Redux Toolkit", "Firebase", "Push Notifications"],
  },
  {
    group: "Web",
    items: ["React JS", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Foundations & Tools",
    items: ["HTML5", "CSS3", "REST APIs", "Git & GitHub", "Figma"],
  },
];

export const MOBILE_PROJECTS = [
  {
    id: "m1",
    name: "Freelly",
    tagline: "The Smart, Safe, and Affordable Carpooling App for Effortless Everyday Commutes",
    description:
      "Freelly is a safe and affordable carpooling app that connects car owners with passengers to share rides, cut gas costs, and reduce traffic congestion. It features real-time route matching, advance ride scheduling, secure cashless payments, and local mobile encashment options like bKash, Nagad, and Upay for drivers. With built-in messaging, user profiles, and ratings, Freelly ensures a convenient and stress-free commute for everyone.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API"],
    image: freellyImg,
    year: "2024",
    downloads: "5K+",
    // rating: "4.8",
    link: "https://play.google.com/store/apps/details?id=com.freellyapp&hl=en_IN",
  },
  {
    id: "m2",
    name: "MBAcupid",
    tagline: "Connecting Elite Minds, Matching Compatible Hearts.",
    description:
      "MBA Cupid is an exclusive matchmaking platform connecting elite business school graduates from institutions like the IIMs, ISB, and XLRI for serious relationships and marriage. Tailored for high-achieving professionals, the app offers verified profiles, intelligent matchmaking, interactive forums, and instant push notifications to help ambitious leaders find compatible life partners in a safe, private space.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API","SQLite" ],
    image: MBAcupid,
    year: "2023",
    downloads: "1.5K+",
    // rating: "4.8",
    link: null,
  },
  {
    id: "m3",
    name: "Bhooter Raja Dilo Bor",
    tagline: "Real-time messaging that feels instant",
    description:
      "Bhooter Raja Dilo Bor** in Jadavpur is a beloved dining destination that brings authentic Bengali cuisine to life through the nostalgic theme of the classic film *Goopy Gyne Bagha Byne*. Blending cultural heritage with traditional recipes, the restaurant offers iconic signature dishes like Shukto, Shorshe Ilish, Chingri Malai Curry, Daab Chingri, Bhetki Paturi, and Raj Bari Kosha Mangsho, alongside classic desserts like Mishti Doi and Rosogolla. With high-quality ingredients, hygienic practices, a homely ambiance, and value-for-money meals, Bhooter Raja Dilo Bor serves more than just food—it delivers rich memories, warm hospitality, and an authentic taste of Bengal.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API","SQLite"],
    image: BhooterRaja,
    year: "2024",
    downloads: "1K+",
    // rating: "4.8",
    link: "https://play.google.com/store/apps/details?id=com.bhooter_raja&hl=en_IN",
  },
  {
    id: "m4",
    name: "Feliz",
    tagline: "24×7 Care: Doctors, Ambulances, and Health Services at Your Doorstep.",
    description:
      "This 24×7 Kolkata healthcare app brings instant doctor home visits, emergency ambulance bookings, and doorstep lab test sample collections directly to your phone. It offers patient pickup and dedicated caregiver services to safely transport and assist elderly or mobility-impaired patients during clinic visits and recovery. With a centralized dashboard to manage prescriptions and track medical records, it provides complete, hassle-free healthcare right from home.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API","SQLite"],
    image: Feliz,
    year: "2024",
     downloads: "1.5K+",
    // rating: "4.8",.2
    link: null,
  },
  {
    id: "m5",
    name: "Akunah me",
    tagline: "Empowering Your Healthcare Journey.",
    description:
      "Akunah is your all-in-one app for smarter, patient-focused healthcare management.Securely store, manage, and share your medical records and documents.Connect with your doctors through direct messages and video communication.Stay updated with scheduled appointments and important medical information.Track your treatment progress and monitor your recovery journey.Access meaningful health scores to better understand your recovery.Receive personalised insights to support informed healthcare decisions.Explore Akunah MED for valuable medical education and resources.Stay connected with your healthcare providers throughout your treatment.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API","SQLite"],
    image: Akunah,
    year: "2023",
     downloads: "100+",
    rating: "5.0",
    link: "https://play.google.com/store/apps/details?id=com.akunahme&hl=en_IN",
  },
  {
    id: "m6",
    name: "Akunah arya",
    tagline: "Capture Ideas. Create Clarity.",
    description:
      "Akunah Arya is a smart productivity app designed to simplify professional documentation. Record your voice and convert speech into text with live transcription. Create structured notes and documents from your recordings. Capture important ideas and information effortlessly. Generate valuable insights to support your daily workflow. Organise and manage your notes for easy future access. Securely share documents and information with others. Enjoy multilingual voice recording and transcription support. Improve productivity by reducing manual documentation efforts. **Akunah Arya — Capture Ideas. Create Clarity.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "Google Maps API","SQLite"],
    image: Arya,
    year: "2026",
     downloads: "10+",
    rating: "5.0",
    link: "https://play.google.com/store/apps/details?id=com.akunahtemp&hl=en_IN",
  },
];

export const WEB_PROJECTS = [
  {
    id: "w1",
    name: "TaskFlow",
    tagline: "A team dashboard that stays out of the way",
    description:
      "A Next.js productivity dashboard for small teams — kanban boards, sprint timelines and activity feeds, server-rendered for fast first loads and good SEO on the marketing pages.",
    tech: ["Next.js", "React JS", "Tailwind CSS", "PostgreSQL"],
    image: "https://placehold.co/900x560/0B1120/4FD1C5?text=TaskFlow&font=roboto",
    year: "2025",
    link: null,
  },
  {
    id: "w2",
    name: "ShopSphere",
    tagline: "An e-commerce storefront built for speed",
    description:
      "Full storefront with cart, wishlist and checkout flows, built in React with a Node/Express API. Lighthouse-tuned for performance on 3G connections.",
    tech: ["React JS", "Redux", "Node.js", "MongoDB"],
    image: "https://placehold.co/900x560/0B1120/F0B429?text=ShopSphere&font=roboto",
    year: "2024",
    link: "shopsphere.yourname.dev",
  },
  
];

export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "mobile-apps", label: "Projects", icon: Smartphone },
  { id: "contact", label: "Contacts", icon: Send },
];

export const colors = {
  ink: "#0D0F16",
  panel: "#12141C",
  panelAlt: "#15171F",
  border: "#262A35",
  text: "#F3F4F7",
  muted: "#9195A3",
  coral: "#FF5B45",
  coralSoft: "rgba(255,91,69,0.14)",
  coralGlow: "rgba(255,91,69,0.35)",
};

export const monoFont = "'JetBrains Mono', 'Fira Code', monospace";
export const sansFont = "'Inter', system-ui, sans-serif";
