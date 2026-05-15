import { ArrowLeft, Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { NOTICES } from "../constants";
import MockDataNote from "../components/MockDataNote";

const NoticeDetailsPage = () => {
    const { slug } = useParams();
    console.log(slug);

    const notice = NOTICES.find((item) => item.slug === slug);

    if (!notice) {
        return (
            <main className="min-h-screen bg-[#F7F1E3] flex items-center justify-center">
                <div className="text-center">
                    <p className="font-serif-bn text-[10rem] leading-none text-[#DED2C2] font-semibold">
                        ৪০৪
                    </p>
                    <h1 className="font-serif-bn text-3xl md:text-4xl text-[#1F1A17] font-semibold mt-6">
                        নোটিশটি খুঁজে পাওয়া যাচ্ছে না
                    </h1>
                    <p className="font-body-bn mt-4 text-[#6E625A] text-base md:text-lg">
                        লিংকটি ভুল হতে পারে।
                    </p>
                    <Link
                        to="/notice-archive"
                        className="font-body-bn mt-8 inline-block text-[#7A1E4D] hover:text-[#5C173A] transition-colors"
                    >
                        প্রচ্ছদে ফিরুন
                    </Link>
                </div>
            </main>
        );
    }

    if (!notice.body) {
        return (

            <main className="min-h-screen bg-[#F7F1E3] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif-bn text-3xl md:text-4xl text-[#1F1A17] font-semibold mt-6">
                        পর্যাপ্ত তথ্য না থাকার কারনে  বিস্তারিত দেখানো যাচ্ছে না
                    </h1>
                    <p className="font-body-bn mt-4 text-[#6E625A] text-base md:text-lg">
                        অনুগ্রহ করে প্রথম দুটি নোটিশের বিস্তারিত দেখার অনুরোধ রইল।
                    </p>
                    <Link
                        to="/notice-archive"
                        className="font-body-bn mt-8 inline-block text-[#7A1E4D] hover:text-[#5C173A] transition-colors"
                    >
                        সব নোটিশে ফিরুন
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F7F1E3]">
            <section className="w-full py-30 md:py-30 lg:py-40">
                <div className="container-college">
                    <div className="mx-auto max-w-4xl">
                        <div>
                            <p className="font-body-bn text-sm md:text-base text-[#6E625A]">
                                {notice.day} {notice.month} {notice.year}
                            </p>
                            <h1 className="font-serif-bn mt-4 text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold tracking-tight text-[#1F1A17]">
                                {notice.title}
                            </h1>
                            {notice.summary && (
                                <p className="font-body-bn mt-5 max-w-3xl text-base md:text-lg leading-8 text-[#6E625A]">
                                    {notice.summary}
                                </p>
                            )}
                        </div>
                        <MockDataNote />

                        <div className="mt-10 h-px w-full bg-[#DED2C2]" />

                        <div className="font-body-bn mt-10 space-y-7 text-[16px] leading-8 text-[#1F1A17] md:text-lg md:leading-9">
                            {notice.body.map((block, index) => {
                                if (block.type === "paragraph") {
                                    return <p key={index}>{block.content}</p>;
                                }

                                if (block.type === "highlight") {
                                    return (
                                        <p
                                            key={index}
                                            className="border-l-2 border-[#DED2C2] pl-5 text-[#6E625A]"
                                        >
                                            {block.content}
                                        </p>
                                    );
                                }

                                if (block.type === "ordered-list") {
                                    return (
                                        <ol
                                            key={index}
                                            className="list-decimal space-y-3 pl-6 marker:text-[#7A1E4D]"
                                        >
                                            {block.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ol>
                                    );
                                }

                                return (
                                    <ul
                                        key={index}
                                        className="list-disc space-y-3 pl-6 marker:text-[#7A1E4D]"
                                    >
                                        {block.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            })}
                        </div>

                        {notice.attachments && notice.attachments.length > 0 && (
                            <div className="mt-14 border-t border-[#DED2C2] pt-8">
                                <h2 className="font-serif-bn text-2xl md:text-[30px] font-semibold text-[#1F1A17]">
                                    সংযুক্তি
                                </h2>
                                <div className="mt-5 divide-y divide-[#DED2C2]">
                                    {notice.attachments.map((attachment) => (
                                        <div
                                            key={attachment.label}
                                            className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between"
                                        >
                                            <div>
                                                <p className="font-body-bn text-base text-[#1F1A17]">
                                                    {attachment.label}
                                                </p>
                                                <p className="font-body-bn mt-1 text-sm text-[#6E625A]">
                                                    {attachment.fileType} · {attachment.fileSize}
                                                </p>
                                            </div>
                                            <a
                                                href={attachment.href}
                                                className="font-body-bn inline-flex items-center gap-2 text-sm font-medium text-[#7A1E4D] transition-colors hover:text-[#5C173A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E4D]/20"
                                            >
                                                ডাউনলোড
                                                <Download className="h-4 w-4" strokeWidth={1.8} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-14">
                            <Link
                                to="/notice-archive"
                                className="font-body-bn inline-flex items-center gap-2 text-sm font-medium text-[#7A1E4D] transition-colors hover:text-[#5C173A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E4D]/20"
                            >
                                <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
                                সব নোটিশে ফিরুন
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NoticeDetailsPage;
