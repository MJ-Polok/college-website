/* eslint-disable react-hooks/set-state-in-effect */
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { NOTICES } from "../constants";
import { Link } from "react-router-dom";
import MockDataNote from "../components/MockDataNote";


const NOTICE_CATEGORIES = ["সব বিভাগ", ...new Set(NOTICES.map((item) => item.category))];
const NOTICE_YEARS = ["সব বছর", ...new Set(NOTICES.map((item) => item.yearValue))];
const PAGE_SIZE = 4;

const buildPagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "...", currentPage, "...", totalPages];
};

const NoticeArchivePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("সব বিভাগ");
    const [selectedYear, setSelectedYear] = useState("সব বছর");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const filteredNotices = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        return NOTICES.filter((item) => {
            const matchesSearch =
                !query ||
                item.title.toLowerCase().includes(query) ||
                item.summary.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query);
            const matchesCategory =
                selectedCategory === "সব বিভাগ" || item.category === selectedCategory;
            const matchesYear = selectedYear === "সব বছর" || item.yearValue === selectedYear;

            return matchesSearch && matchesCategory && matchesYear;
        });
    }, [searchTerm, selectedCategory, selectedYear]);

    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(filteredNotices.length / PAGE_SIZE)),
        [filteredNotices.length]
    );
    
    
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, selectedYear]);
    
    
    useEffect(() => {
        setCurrentPage((previousPage) => Math.min(previousPage, totalPages));
    }, [totalPages]);
    
    
    useEffect(() => {
        setIsLoading(true);

        const timeoutId = window.setTimeout(() => {
            setIsLoading(false);
        }, 320);

        return () => window.clearTimeout(timeoutId);
    }, [searchTerm, selectedCategory, selectedYear, currentPage]);

    const visibleNotices = filteredNotices.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

    const paginationItems = buildPagination(currentPage, totalPages);
    const hasResults = filteredNotices.length > 0;

    return (
        <main className="min-h-screen bg-[#F7F1E3]">
            <section className="w-full py-30 md:py-30 lg:py-40">
                <div className="container-college">
                    <div className="max-w-3xl">
                        <h1 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-semibold tracking-tight">
                            নোটিশ
                        </h1>
                        <p className="font-body-bn mt-4 max-w-2xl text-base md:text-lg leading-8 text-[#6E625A]">
                            কলেজের প্রকাশিত সকল নোটিশ, সময়সূচি ও প্রশাসনিক বিজ্ঞপ্তি এখান থেকে
                            খুঁজে দেখুন।
                        </p>
                        <MockDataNote/>
                    </div>

                    <div className="mt-8 md:mt-10 border border-[#DED2C2] rounded-md bg-[#FFF9EF] px-[18px] py-[18px] md:px-4 md:py-4">
                        <div className="flex flex-col gap-[14px] md:relative md:min-h-[48px] md:justify-center">
                            <label className="relative block md:flex-1">
                                <span className="sr-only">নোটিশ খুঁজুন</span>
                                <Search
                                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6E625A]"
                                    strokeWidth={1.8}
                                />
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="নোটিশ খুঁজুন"
                                    className="font-body-bn h-[48px] w-full border-0 bg-transparent pl-11 pr-3 text-[16px] text-[#1F1A17] outline-none transition-colors placeholder:text-[#6E625A] focus:ring-0 md:pr-[296px]"
                                />
                            </label>

                            <div className="grid grid-cols-2 gap-4 md:absolute md:top-1/2 md:right-0 md:w-auto md:-translate-y-1/2 md:grid-cols-[160px_124px] md:gap-4">
                                <label className="relative block min-w-0">
                                    <span className="sr-only">বিভাগ</span>
                                    <ChevronDown
                                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E625A]"
                                        strokeWidth={1.8}
                                    />
                                    <select
                                        value={selectedCategory}
                                        onChange={(event) => setSelectedCategory(event.target.value)}
                                        className="font-body-bn h-[46px] w-full appearance-none border border-[#DED2C2] rounded-md bg-[#FFF9EF] px-6 pr-11 text-[16px] text-[#1F1A17] outline-none transition-colors focus:border-[#7A1E4D] focus:ring-2 focus:ring-[#7A1E4D]/10"
                                    >
                                        {NOTICE_CATEGORIES.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="relative block min-w-0">
                                    <span className="sr-only">বছর</span>
                                    <ChevronDown
                                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6E625A]"
                                        strokeWidth={1.8}
                                    />
                                    <select
                                        value={selectedYear}
                                        onChange={(event) => setSelectedYear(event.target.value)}
                                        className="font-body-bn h-[46px] w-full appearance-none border border-[#DED2C2] rounded-md bg-[#FFF9EF] px-6 pr-11 text-[16px] text-[#1F1A17] outline-none transition-colors focus:border-[#7A1E4D] focus:ring-2 focus:ring-[#7A1E4D]/10"
                                    >
                                        {NOTICE_YEARS.map((year) => (
                                            <option key={year} value={year}>
                                                {year === "সব বছর" ? year : year.replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)])}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-10">
                        {isLoading ? (
                            <ul className="divide-y divide-[#DED2C2]">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <li
                                        key={index}
                                        className="grid grid-cols-12 gap-4 py-6 md:gap-6 md:py-7"
                                    >
                                        <div className="col-span-12 md:col-span-[2]">
                                            <div className="h-10 w-16 animate-pulse rounded-md bg-[#DED2C2]/70" />
                                            <div className="mt-3 h-4 w-20 animate-pulse rounded-md bg-[#DED2C2]/50" />
                                        </div>
                                        <div className="col-span-12 md:col-span-[8]">
                                            <div className="h-6 w-full max-w-3xl animate-pulse rounded-md bg-[#DED2C2]/70" />
                                            <div className="mt-3 h-4 w-full max-w-2xl animate-pulse rounded-md bg-[#DED2C2]/50" />
                                        </div>
                                        <div className="col-span-12 md:col-span-[2]">
                                            <div className="h-4 w-20 animate-pulse rounded-md bg-[#DED2C2]/50 md:ml-auto" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : hasResults ? (
                            <ul className="divide-y divide-[#DED2C2]">
                                {visibleNotices.map((item) => (
                                    <li key={item.slug}>
                                        <div className="group grid grid-cols-12 gap-4 py-6 md:gap-6 md:py-7 -mx-3 px-3">
                                            <div className="col-span-12 md:col-span-[2] flex items-center gap-2">
                                                <div className="font-serif-bn text-[#7A1E4D] text-3xl md:text-4xl leading-none font-semibold">
                                                    {item.day}
                                                </div>
                                                <div className="font-body-bn leading-tight flex md:block items-center gap-1 ">
                                                    <div className="text-[#1F1A17] text-lg md:text-sm font-medium">
                                                        {item.month}
                                                    </div>
                                                    <div className="text-[#6E625A] text-sm md:text-xs">
                                                        {item.year}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-12 md:col-span-[8] min-w-0">
                                                <Link
                                                    to={`/notice-archive/${item.slug}`}
                                                    className="font-body-bn inline-block text-[25px] md:text-[28px] leading-snug text-[#1F1A17] transition-colors hover:text-[#5C173A] hover:underline hover:underline-offset-4 hover:[text-decoration-thickness:2px] active:text-[#5C173A] active:underline active:underline-offset-4 active:[text-decoration-thickness:2px] focus-visible:text-[#5C173A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E4D]/20"
                                                >
                                                    {item.title}
                                                </Link>
                                                <p className="font-body-bn mt-3 max-w-3xl text-[16px] md:text-[18px] leading-7 text-[#6E625A] line-clamp-2">
                                                    {item.summary}
                                                </p>
                                            </div>

                                            <div className="col-span-12 md:col-span-[2] flex items-start md:justify-end">
                                                <span className="font-body-bn text-sm text-[#6E625A]">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="flex min-h-[280px] items-center justify-center border-y border-[#DED2C2] px-6 py-14 text-center">
                                <div className="max-w-xl">
                                    <h2 className="font-serif-bn text-2xl md:text-3xl text-[#1F1A17] font-semibold">
                                        কোনো নোটিশ পাওয়া যায়নি
                                    </h2>
                                    <p className="font-body-bn mt-4 text-[15px] md:text-base leading-7 text-[#6E625A]">
                                        অনুগ্রহ করে অন্য keyword বা filter ব্যবহার করে আবার খুঁজুন।
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedCategory("সব বিভাগ");
                                            setSelectedYear("সব বছর");
                                        }}
                                        className="font-body-bn mt-6 inline-flex items-center text-sm font-medium text-[#7A1E4D] transition-colors hover:text-[#5C173A] active:text-[#5C173A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E4D]/20"
                                    >
                                        ফিল্টার পরিষ্কার করুন
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isLoading && hasResults && totalPages > 1 && (
                        <>
                            <div className="mt-10 hidden items-center justify-center gap-3 md:flex">
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                    disabled={currentPage === 1}
                                    className="font-body-bn text-sm text-[#6E625A] transition-colors hover:text-[#7A1E4D] active:text-[#7A1E4D] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    পূর্ববর্তী
                                </button>

                                {paginationItems.map((item, index) =>
                                    item === "..." ? (
                                        <span
                                            key={`${item}-${index}`}
                                            className="font-body-bn px-1 text-sm text-[#6E625A]"
                                        >
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => setCurrentPage(Number(item))}
                                            className={`font-body-bn min-w-8 text-sm transition-colors ${currentPage === item
                                                ? "text-[#7A1E4D] font-semibold"
                                                : "text-[#1F1A17] hover:text-[#7A1E4D] active:text-[#7A1E4D]"
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ),
                                )}

                                <button
                                    type="button"
                                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                                    disabled={currentPage === totalPages}
                                    className="font-body-bn text-sm text-[#6E625A] transition-colors hover:text-[#7A1E4D] active:text-[#7A1E4D] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    পরবর্তী
                                </button>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-6 md:hidden">
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                    disabled={currentPage === 1}
                                    className="font-body-bn text-sm text-[#6E625A] transition-colors hover:text-[#7A1E4D] active:text-[#7A1E4D] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    পূর্ববর্তী
                                </button>
                                <span className="font-body-bn text-sm text-[#1F1A17]">
                                    {currentPage}/{totalPages}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                                    disabled={currentPage === totalPages}
                                    className="font-body-bn text-sm text-[#6E625A] transition-colors hover:text-[#7A1E4D] active:text-[#7A1E4D] disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    পরবর্তী
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default NoticeArchivePage;
