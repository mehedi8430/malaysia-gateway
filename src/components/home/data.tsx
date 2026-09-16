import {
  BuildingIcon,
  DocumentIcon,
  PlaneIcon,
} from "@/components/icon";

export const features = [
  { icon: "▣", title: "Reliable", subtitle: "Process" },
  { icon: "♧", title: "Trusted", subtitle: "Agency" },
  { icon: "⬟", title: "Safe &", subtitle: "Secure" },
  { icon: "✚", title: "Professional", subtitle: "Support" },
];

export const jobCategories = [
  { title: "Construction", bangla: "নির্মাণ শিল্প", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", icon: "♜" },
  { title: "Factory Worker", bangla: "কারখানা শ্রমিক", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", icon: "◈" },
  { title: "Agriculture", bangla: "কৃষি কাজ", image: "https://images.unsplash.com/photo-1523742811167-5f35c8a1e1d2?auto=format&fit=crop&w=600&q=80", icon: "♧" },
  { title: "Hospitality", bangla: "হোটেল/রেস্তোরাঁ", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80", icon: "♨" },
  { title: "Caregiver", bangla: "সেবাদান", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=600&q=80", icon: "♧" },
  { title: "Housekeeping", bangla: "হাউসকিপিং", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80", icon: "▣" },
  { title: "Other Jobs", bangla: "অন্যান্য", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80", icon: "◈" },
];

export const notices = [
  { date: "১৪ সেপ্টেম্বর ২০২৬", text: <>হাই কমিশন বেস্টিনেট (Bestinet) অন-সাইট সাপোর্ট শুরু হবে এবং অপারেশনাল প্রস্তুতি নিশ্চিত করা হবে।</> },
  { date: "১৫ সেপ্টেম্বর ২০২৬", text: <>পিআরএ (PRA) রেজিস্ট্রেশন এবং অ্যাক্টিভেশন ট্রেনিং শুরু হবে।</> },
  { date: "১৬ সেপ্টেম্বর ২০২৬", text: <>সিস্টেম গো-লাইভ (System Go-Live) অর্থাৎ ই-ভিসা, ই-রিক্রুটমেন্ট এবং বায়োমেট্রিক সিস্টেম ডিজিটাল চালু করা হবে।</> },
  { date: "১৭ সেপ্টেম্বর ২০২৬", text: <>পিআরএ ইনভাইটেশন বা আমন্ত্রণ পাঠানো শুরু হবে।</> },
  { date: "১৮ সেপ্টেম্বর ২০২৬", text: <>কর্মী নিবন্ধন ও অপারেশনাল ট্রেনিং শুরু হবে।</> },
  { date: "১৮+ সেপ্টেম্বর ২০২৬", 
    // small: "(সম্ভাব্য তারিখ)",
     text: <>কার্যক্রম পুরোদমে শুরু হবে, যেখানে মালয়েশিয়ান নিয়োগকর্তারা কর্মী বরাদ্দ ও ই-এমপ্লয়ার মাধ্যমে অ্যাপ্লিকেশন জমা দিতে পারবেন।</> },
];

export const processSteps = [
  {
    number: "1",
    title: "অনলাইন নিবন্ধন",
    alt: "অনলাইন নিবন্ধন",
    color: "green",
    icon: <DocumentIcon className="h-12 w-12" />,
    items: ["নথিপত্র জমা", "পাসপোর্ট ভেরিফিকেশন", "TTC ট্রেনিং", "মেডিকেল ফিটনেস", "BMET নিবন্ধন", "পুলিশ ক্লিয়ারেন্স"],
    image: "",
  },
  {
    number: "2",
    title: <>কোম্পানি আবেদন<span className="block text-[16px]">(Malaysia)</span></>,
    alt: "কোম্পানি আবেদন (Malaysia)",
    color: "blue",
    icon: <BuildingIcon className="h-12 w-12" />,
    items: ["ডকুমেন্টস সাবমিশন", "অফার লেটার", "এপ্রুভড ওয়ার্ক ভিসা", "ভিসা প্রসেসিং"],
    image: "",
  },
  {
    number: "3",
    title: "ভিসা এরাইভাল",
    alt: "ভিসা এরাইভাল",
    color: "purple",
    icon: <PlaneIcon className="h-12 w-12" />,
    items: ["BIOMETRIC Finger Print Registration.", "Ticketing"],
    image: "",
  },
];
