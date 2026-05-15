export type NavItem = {
    label: string;
    href: string;
    children?: { label: string; href: string; }[];
};

export type NoticeBodyBlock =
    | { type: "paragraph"; content: string; }
    | { type: "highlight"; content: string; }
    | { type: "ordered-list"; items: string[]; }
    | { type: "unordered-list"; items: string[]; };

export type NoticeAttachment = {
    label: string;
    fileType: string;
    fileSize: string;
    href: string;
};

export type NoticeItem = {
    slug: string;
    day: string;
    month: string;
    year: string;
    yearValue: string;
    category: string;
    title: string;
    summary: string;
    body?: NoticeBodyBlock[];
    attachments?: NoticeAttachment[];
};

export type NoticeCompact = Pick<NoticeItem, 'slug' | 'day' | 'month' | 'year' | 'title'>;

export type StatsItem = {
    value: string;
    label: string;
    sub: string;
    link?: string;
};

export type GalleryImages = {
    src: string;
    caption: string;
    variant: "featured" | "top" | "bottom";
};

export type FooterLinks = {
    label: string;
    link: string;
};

export type FooterResources = {
    label: string;
    link: string;
};

export type QuickLink = {
    id: string;
    label: string;
};

export type AdmissionMeta = {
    label: string;
    value: string;
};

export type AdmissionStep = {
    step: string;
    title: string;
    description: string;
};

export type EligibilityItem = {
    label: string;
    description: string;
};

export type FeeItem = {
    label: string;
    amount: string;
    note?: string;
};

export type Teacher = {
    id: string;
    name: string;
    designation: string;
    department: string;
    contact?: string;
};