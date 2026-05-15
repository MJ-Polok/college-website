import type { AdmissionMeta, AdmissionStep, EligibilityItem, FeeItem, FooterLinks, FooterResources, GalleryImages, NavItem, NoticeCompact, NoticeItem, QuickLink, StatsItem, Teacher } from "../types";

export const NAV: NavItem[] = [
    { label: "প্রচ্ছদ", href: "/#" },
    {
        label: "আমাদের কলেজ",
        href: "/#about",
        children: [
            { label: "ইতিহাস ও পরিচিতি", href: "/history-introduction" },
            { label: "অধ্যক্ষের বাণী", href: "/#principal" },
            { label: "লক্ষ্য ও উদ্দেশ্য", href: "/aims-objectives" },
            { label: "প্রশাসনিক কাঠামো", href: "/administrative-structure" },
            { label: "ক্যাম্পাস জীবন", href: "#gallery" },
        ],
    },
    { label: "নোটিশ", href: "/#notice" },
    {
        label: "ভর্তি",
        href: "/#admission-notice",
        children: [
            { label: "ভর্তি বিজ্ঞপ্তি", href: "/admission/#admission-notice" },
            { label: "আবেদন প্রক্রিয়া", href: "/admission/#application-process" },
            { label: "যোগ্যতা", href: "/admission/#qualifications" },
            { label: "ফি সংক্রান্ত তথ্য", href: "/admission/#fee-information" },
            { label: "ভর্তি ফলাফল", href: "/admission/#admission-results" },
        ],
    },
    {
        label: "বিভাগসমূহ",
        href: "/departments",
        children: [
            { label: "বিজ্ঞান বিভাগ", href: "/departments/#science-department" },
            { label: "মানবিক বিভাগ", href: "/departments/#humanities-department" },
            { label: "ব্যবসায় শিক্ষা বিভাগ", href: "/departments/#business-department" },
        ],
    },
    {
        label: "একাডেমিক",
        href: "/academic",
        children: [
            { label: "একাডেমিক ক্যালেন্ডার", href: "/academic/#academic-calendar" },
            { label: "ক্লাস রুটিন", href: "/academic/#class-routine" },
            { label: "পরীক্ষার রুটিন", href: "/academic/#exam-routine" },
            { label: "ফলাফল", href: "/academic/#results" },
            { label: "পাঠক্রম", href: "/academic/#curriculum" },
        ],
    },
    { label: "শিক্ষকবৃন্দ", href: "/teachers" },
    { label: "যোগাযোগ", href: "/#contact" },
];

export const NOTICES: NoticeItem[] = [
    {
        slug: "class-xi-admission-2026-2027",
        day: "২৮",
        month: "এপ্রিল",
        year: "২০২৬",
        yearValue: "2026",
        category: "ভর্তি",
        title: "একাদশ শ্রেণিতে ভর্তি বিজ্ঞপ্তি — ২০২৬-২০২৭ শিক্ষাবর্ষ",
        summary: "আবেদন, নিশ্চয়ন, মেধাতালিকা ও ক্লাস শুরুর সময়সূচি প্রকাশ করা হয়েছে।",
        body: [
            {
                type: "paragraph",
                content:
                    "সরকারি গৌরনদী কলেজের ২০২৬-২০২৭ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির জন্য আগ্রহী শিক্ষার্থীদের নির্ধারিত সময়ের মধ্যে অনলাইনে আবেদন সম্পন্ন করার জন্য নির্দেশ প্রদান করা যাচ্ছে।",
            },
            {
                type: "ordered-list",
                items: [
                    "অনলাইন আবেদন গ্রহণ চলবে ১ মে ২০২৬ থেকে ১৪ মে ২০২৬ পর্যন্ত।",
                    "প্রথম মেধাতালিকা ১৯ মে ২০২৬ তারিখে কলেজ নোটিশ বোর্ড ও ওয়েবসাইটে প্রকাশ করা হবে।",
                    "নির্বাচিত শিক্ষার্থীদের ২০ মে ২০২৬ থেকে ২৩ মে ২০২৬-এর মধ্যে নিশ্চয়ন সম্পন্ন করতে হবে।",
                ],
            },
            {
                type: "highlight",
                content: "অসম্পূর্ণ আবেদন বা ভুল তথ্য প্রদান করলে ভর্তি প্রক্রিয়া বাতিল বলে গণ্য হবে।",
            },
            {
                type: "unordered-list",
                items: [
                    "এসএসসি পরীক্ষার নম্বরপত্রের কপি",
                    "পাসপোর্ট সাইজের ২ কপি ছবি",
                    "অভিভাবকের জাতীয় পরিচয়পত্রের কপি",
                ],
            },
        ],
        attachments: [
            {
                label: "ভর্তি বিজ্ঞপ্তি (পিডিএফ)",
                fileType: "PDF",
                fileSize: "৪২০ কেবি",
                href: "#",
            },
        ],
    },
    {
        slug: "degree-form-fill-up-2026",
        day: "২২",
        month: "এপ্রিল",
        year: "২০২৬",
        yearValue: "2026",
        category: "পরীক্ষা",
        title: "স্নাতক (পাস) পরীক্ষার ফরম পূরণ সংক্রান্ত জরুরি নোটিশ",
        summary: "ফরম পূরণ, বিলম্ব ফি ও প্রয়োজনীয় কাগজপত্র জমা দেওয়ার নির্দেশনা প্রকাশিত হয়েছে।",
        body: [
            {
                type: "paragraph",
                content:
                    "জাতীয় বিশ্ববিদ্যালয়ের অধীনে অনুষ্ঠিতব্য স্নাতক (পাস) পরীক্ষায় অংশগ্রহণকারী শিক্ষার্থীদের অবগতির জন্য জানানো যাচ্ছে যে ফরম পূরণের সময়সীমা পুনর্নির্ধারণ করা হয়েছে।",
            },
            {
                type: "ordered-list",
                items: [
                    "অনলাইনে ফরম পূরণ সম্পন্ন করতে হবে ২৫ এপ্রিল ২০২৬-এর মধ্যে।",
                    "কলেজে ফি জমা দেওয়ার শেষ তারিখ ২৮ এপ্রিল ২০২৬।",
                    "ত্রুটিপূর্ণ তথ্য সংশোধনের জন্য ৩০ এপ্রিল ২০২৬ পর্যন্ত সময় পাওয়া যাবে।",
                ],
            },
            {
                type: "unordered-list",
                items: [
                    "রেজিস্ট্রেশন কার্ডের ফটোকপি",
                    "সর্বশেষ পরীক্ষার প্রবেশপত্র",
                    "দুই কপি স্ট্যাম্প সাইজের ছবি",
                ],
            },
        ],
    },
    {
        slug: "annual-sports-cultural-2026",
        day: "১৫",
        month: "এপ্রিল",
        year: "২০২৬",
        yearValue: "2026",
        category: "অনুষ্ঠান",
        title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক অনুষ্ঠানের সময়সূচি",
        summary: "বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠানের রেজিস্ট্রেশন এবং অনুষ্ঠানসূচি প্রকাশ করা হয়েছে।",
    },
    {
        slug: "student-id-renewal-2026",
        day: "০৯",
        month: "এপ্রিল",
        year: "২০২৬",
        yearValue: "2026",
        category: "প্রশাসনিক",
        title: "শিক্ষার্থীদের আইডি কার্ড নবায়ন সংক্রান্ত নির্দেশনা",
        summary: "আইডি কার্ড নবায়নের জন্য ছবি, ফি ও জমাদানের সময়সীমা জানানো হয়েছে।",
    },
    {
        slug: "march-salary-deadline-2026",
        day: "০২",
        month: "এপ্রিল",
        year: "২০২৬",
        yearValue: "2026",
        category: "অর্থ",
        title: "মার্চ মাসের বেতন পরিশোধের সর্বশেষ তারিখ ঘোষণা",
        summary: "মার্চ মাসের বেতন, বিলম্ব ফি এবং ব্যাংক কাউন্টারের সময়সূচি জানানো হয়েছে।",
    },
    {
        slug: "honours-class-routine-update-2025",
        day: "১৮",
        month: "ডিসেম্বর",
        year: "২০২৫",
        yearValue: "2025",
        category: "একাডেমিক",
        title: "অনার্স প্রথম বর্ষের সংশোধিত ক্লাস রুটিন প্রকাশ",
        summary: "অনার্স প্রথম বর্ষের সংশোধিত ক্লাস রুটিন আগামী সপ্তাহ থেকে কার্যকর হবে।",
    },
    {
        slug: "library-membership-renewal-2025",
        day: "০৭",
        month: "অক্টোবর",
        year: "২০২৫",
        yearValue: "2025",
        category: "প্রশাসনিক",
        title: "গ্রন্থাগার সদস্যপদ নবায়ন ও বই ফেরত সংক্রান্ত বিজ্ঞপ্তি",
        summary: "গ্রন্থাগার সদস্যপদ নবায়ন ও বকেয়া বই ফেরতের বিশেষ সময়সীমা ঘোষণা করা হয়েছে।",
    },
    {
        slug: "scholarship-application-2025",
        day: "১২",
        month: "আগস্ট",
        year: "২০২৫",
        yearValue: "2025",
        category: "বৃত্তি",
        title: "মেধাবৃত্তির আবেদন আহ্বান — ২০২৫",
        summary: "মেধাবী ও আর্থিকভাবে অসচ্ছল শিক্ষার্থীদের জন্য বৃত্তির আবেদন শুরু হয়েছে।",
    },
    {
        slug: "hsc-test-exam-result-2024",
        day: "২১",
        month: "নভেম্বর",
        year: "২০২৪",
        yearValue: "2024",
        category: "ফলাফল",
        title: "এইচএসসি টেস্ট পরীক্ষার ফলাফল প্রকাশ",
        summary: "ফলাফল প্রকাশিত হয়েছে এবং পুনঃনিরীক্ষণের আবেদন গ্রহণ করা হবে।",
    },
    {
        slug: "independence-day-programme-2024",
        day: "২০",
        month: "মার্চ",
        year: "২০২৪",
        yearValue: "2024",
        category: "অনুষ্ঠান",
        title: "স্বাধীনতা দিবস উদযাপন কর্মসূচি",
        summary: "পতাকা উত্তোলন, আলোচনা সভা ও সাংস্কৃতিক পরিবেশনার পূর্ণাঙ্গ সময়সূচি প্রকাশ করা হলো।",
    },
];

export const LATEST_NOTICES: NoticeCompact[] = NOTICES.slice(0, 4);

export const STATS: StatsItem[] = [
    { value: "প্রায় ৮০০+", label: "শিক্ষার্থী", sub: "বর্তমানে অধ্যয়নরত" },
    { value: "১৩৮", label: "শিক্ষক", sub: "অভিজ্ঞ শিক্ষকমণ্ডলী", link: "/teachers" },
    { value: "১৯৭১", label: "প্রতিষ্ঠার বছর", sub: "৫০+ বছরের ঐতিহ্য" },
];

export const IMAGES: GalleryImages[] = [
    {
        src: "/images/campus-1.jpg",
        caption: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
        variant: "featured"
    },
    {
        src: "/images/campus-2.jpg",
        caption: "বিজ্ঞান প্রদর্শনী",
        variant: "top"
    },
    {
        src: "/images/campus-3.jpg",
        caption: "ক্রীড়া প্রতিযোগিতা",
        variant: "bottom"
    },
    {
        src: "/images/campus-4.jpg",
        caption: "গ্রন্থাগার",
        variant: "bottom"
    },
    {
        src: "/images/campus-5.jpg",
        caption: "ক্যাম্পাস প্রাঙ্গণ",
        variant: "top"
    },
];

export const FOOTER_LINKS: FooterLinks[] = [
    { label: "আমাদের কলেজ", link: "/history-introductiont", },
    { label: "নোটিশ", link: "/notice-archive" },
    { label: "একাডেমিক", link: "/academic", },
    { label: "শিক্ষকবৃন্দ", link: "/teachers" },
    { label: "গ্যালারি", link: "/gallery" },
];

export const FOOTER_RESOURCES: FooterResources[] = [
    { label: "একাডেমিক ক্যালেন্ডার", link: "/academic/#academic-calendar" },
    { label: "ক্লাস রুটিন", link: "/academic/#class-routine" },
    { label: "পাঠক্রম", link: "/academic/#curriculum", },
    { label: "বিভাগসমূহ", link: "/departments", },
    { label: "ভর্তি বিজ্ঞপ্তি", link: "/admission/#admission-notice" },
];

export const QUICK_LINKS: QuickLink[] = [
    { id: "admission-notice", label: "ভর্তি বিজ্ঞপ্তি" },
    { id: "application-process", label: "আবেদন প্রক্রিয়া" },
    { id: "eligibility", label: "যোগ্যতা" },
    { id: "fee-information", label: "ফি সংক্রান্ত তথ্য" },
    { id: "admission-results", label: "ভর্তি ফলাফল" },
];

export const NOTICE_META: AdmissionMeta[] = [
    { label: "আবেদন শুরু", value: "১২ মে ২০২৬" },
    { label: "আবেদনের শেষ তারিখ", value: "২৮ মে ২০২৬" },
    { label: "শ্রেণি", value: "একাদশ" },
    { label: "শিক্ষাবর্ষ", value: "২০২৬-২০২৭" },
];

export const APPLICATION_STEPS: AdmissionStep[] = [
    {
        step: "০১",
        title: "অনলাইন আবেদন সম্পন্ন করুন",
        description:
            "নির্ধারিত সময়ের মধ্যে ভর্তির আবেদন ফরম পূরণ করে প্রয়োজনীয় তথ্য সঠিকভাবে জমা দিন।",
    },
    {
        step: "০২",
        title: "প্রাথমিক যাচাই সম্পন্ন করুন",
        description:
            "আবেদনের তথ্য, বিভাগ পছন্দ এবং যোগাযোগের নম্বর পুনরায় যাচাই করে সাবমিট নিশ্চিত করুন।",
    },
    {
        step: "০৩",
        title: "মেধাতালিকা প্রকাশ দেখুন",
        description:
            "নির্ধারিত তারিখে কলেজ নোটিশ বোর্ড ও ওয়েবসাইটে প্রকাশিত তালিকা থেকে নিজের অবস্থান জেনে নিন।",
    },
    {
        step: "০৪",
        title: "নিশ্চয়ন ও প্রাথমিক ফি জমা দিন",
        description:
            "নির্বাচিত হলে নির্ধারিত সময়ের মধ্যে নিশ্চয়ন সম্পন্ন করে প্রযোজ্য ভর্তি ফি পরিশোধ করতে হবে।",
    },
];

export const ELIGIBILITY_ITEMS: EligibilityItem[] = [
    {
        label: "ন্যূনতম যোগ্যতা",
        description:
            "স্বীকৃত শিক্ষা বোর্ড থেকে ২০২৪, ২০২৫ অথবা ২০২৬ সালে এসএসসি বা সমমান পরীক্ষায় উত্তীর্ণ হতে হবে।",
    },
    {
        label: "প্রযোজ্য বিভাগ",
        description:
            "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা — এই তিনটি বিভাগে নির্ধারিত আসনসংখ্যা অনুযায়ী আবেদন করা যাবে।",
    },
    {
        label: "পাসের সন",
        description:
            "সাম্প্রতিক তিন শিক্ষাবর্ষের পরীক্ষার্থীদের আবেদন গ্রহণ করা হবে; পুরোনো সনের আবেদন বিবেচিত হবে না।",
    },
];

export const FEE_ITEMS: FeeItem[] = [
    { label: "ভর্তি ফি", amount: "৳ ১,২০০", note: "এককালীন" },
    { label: "নিবন্ধন ফি", amount: "৳ ৪০০", note: "বোর্ড নির্ধারিত" },
    { label: "সেশন ফি", amount: "৳ ৯০০", note: "প্রথম সেশনের জন্য" },
    { label: "পরিচয়পত্র ও উন্নয়ন ফি", amount: "৳ ৩৫০", note: "প্রযোজ্য" },
    { label: "পরীক্ষার প্রাথমিক চার্জ", amount: "৳ ২৫০", note: "পরবর্তীতে সমন্বয়যোগ্য" },
];

export const MOCK_TEACHERS: Teacher[] = [
    { id: "1", name: "ড. মো. রফিকুল ইসলাম", designation: "অধ্যক্ষ", department: "প্রশাসন" },
    { id: "2", name: "মো. আবদুল কাদের", designation: "সহকারী অধ্যাপক", department: "বাংলা" },
    { id: "3", name: "সৈয়দা ফাতেমা খাতুন", designation: "সহকারী অধ্যাপক", department: "ইংরেজি" },
    { id: "4", name: "মো. জাহাঙ্গীর হোসেন", designation: "সহকারী অধ্যাপক", department: "গণিত" },
    { id: "5", name: "ড. নাজমা বেগম", designation: "সহকারী অধ্যাপক", department: "পদার্থবিজ্ঞান" },
    { id: "6", name: "মো. হারুনুর রশীদ", designation: "সহকারী অধ্যাপক", department: "রসায়ন" },
    { id: "7", name: "ফারুকা আক্তার", designation: "সহকারী অধ্যাপক", department: "জীববিজ্ঞান" },
    { id: "8", name: "মো. নূরুল ইসলাম", designation: "প্রভাষক", department: "ইতিহাস" },
    { id: "9", name: "আয়েশা সিদ্দিকা", designation: "প্রভাষক", department: "রাষ্ট্রবিজ্ঞান" },
    { id: "10", name: "মো. সাইফুল ইসলাম", designation: "প্রভাষক", department: "অর্থনীতি" },
    { id: "11", name: "সাবিনা আক্তার", designation: "প্রভাষক", department: "ব্যবসায় শিক্ষা" },
    { id: "12", name: "মো. রাসেল আহমেদ", designation: "সহকারী শিক্ষক", department: "ইসলামিয়াত" },
];
