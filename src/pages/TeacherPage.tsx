import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { MOCK_TEACHERS } from "../constants";
import MockDataNote from "../components/MockDataNote";

const DEPARTMENTS = ["সব বিভাগ", ...new Set(MOCK_TEACHERS.map((t) => t.department))];

        const getAvatarUrl = (name: string) =>
            `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=DED2C2&color=5C173A&size=400&font-size=0.25`;

const TeacherPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("সব বিভাগ");
    const [isLoading, setIsLoading] = useState(true);

    const filteredTeachers = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        return MOCK_TEACHERS.filter((teacher) => {
            const matchesSearch =
                !query ||
                teacher.name.toLowerCase().includes(query) ||
                teacher.department.toLowerCase().includes(query);
            const matchesDepartment =
                selectedDepartment === "সব বিভাগ" || teacher.department === selectedDepartment;

            return matchesSearch && matchesDepartment;
        });
    }, [searchTerm, selectedDepartment]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoading(true);
        const timeoutId = window.setTimeout(() => {
            setIsLoading(false);
        }, 320);

        return () => window.clearTimeout(timeoutId);
    }, [searchTerm, selectedDepartment]);

    const hasResults = filteredTeachers.length > 0;

    return (
        <main className="min-h-screen bg-[#F7F1E3]">
            <section className="w-full pb-16 md:pb-20 lg:pb-24 md:pt-40 pt-30">
                <div className="container-college">
                    <div className="max-w-3xl">
                        <h1 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-semibold tracking-tight">
                            সকল শিক্ষকবৃন্দ
                        </h1>
                        <p className="font-body-bn mt-4 max-w-2xl text-base md:text-lg leading-8 text-[#6E625A]">
                            গৌরনদী কলেজের সকল শিক্ষকবৃন্দের তালিকা ও যোগাযোগের তথ্য।
                        </p>
                        <MockDataNote/>
                    </div>

                    <div className="mt-8 border border-[#DED2C2] rounded-lg bg-[#FFF9EF] px-5 py-4 md:mt-10 md:px-6 md:py-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                            <label className="relative block flex-1">
                                <span className="sr-only">শিক্ষক খুঁজুন</span>
                                <Search
                                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6E625A]"
                                    strokeWidth={1.8}
                                />
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="নাম বা বিভাগ দিয়ে খুঁজুন"
                                    className="font-body-bn h-12 w-full border-0 bg-transparent pl-11 pr-4 text-[16px] text-[#1F1A17] outline-none transition-colors placeholder:text-[#6E625A] focus:ring-0"
                                />
                            </label>

                            <div className="min-w-0 md:w-[200px]">
                                <select
                                    value={selectedDepartment}
                                    onChange={(event) => setSelectedDepartment(event.target.value)}
                                    className="font-body-bn h-12 w-full appearance-none border border-[#DED2C2] rounded-md bg-[#FFF9EF] px-4 pr-10 text-[16px] text-[#1F1A17] outline-none transition-colors focus:border-[#7A1E4D] focus:ring-2 focus:ring-[#7A1E4D]/10"
                                >
                                    {DEPARTMENTS.map((dept) => (
                                        <option key={dept} value={dept}>
                                            {dept}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-10">
                        {isLoading ? (
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <li
                                        key={index}
                                        className="overflow-hidden rounded-lg border border-[#DED2C2] bg-[#FFF9EF]"
                                    >
                                        <div className="aspect-[4/5] bg-[#DED2C2]/50 animate-pulse" />
                                        <div className="px-5 py-6 md:px-6">
                                            <div className="h-7 w-3/4 animate-pulse rounded-md bg-[#DED2C2]/70" />
                                            <div className="mt-3 h-5 w-1/2 animate-pulse rounded-md bg-[#DED2C2]/50" />
                                            <div className="mt-2 h-5 w-1/3 animate-pulse rounded-md bg-[#DED2C2]/50" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : hasResults ? (
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredTeachers.map((teacher) => (
                                    <li
                                        key={teacher.id}
                                        className="overflow-hidden rounded-lg border border-[#DED2C2] bg-[#FFF9EF]"
                                    >
                                        <img
                                            src={getAvatarUrl(teacher.name)}
                                            alt={teacher.name}
                                            className="aspect-[1/1] w-full object-cover"
                                        />
                                        <div className="px-5 py-6 md:px-6">
                                            <h3 className="font-serif-bn text-2xl font-semibold text-[#1F1A17]">
                                                {teacher.name}
                                            </h3>
                                            <p className="font-body-bn mt-2 text-[16px] text-[#6E625A]">
                                                {teacher.designation}
                                            </p>
                                            <p className="font-body-bn mt-1.5 text-[16px] text-[#6E625A]">
                                                {teacher.department}
                                            </p>
                                            {teacher.contact && (
                                                <p className="font-body-bn mt-3 text-[15px] text-[#7A1E4D]">
                                                    {teacher.contact}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="flex min-h-[280px] items-center justify-center border border-[#DED2C2] px-6 py-14 text-center">
                                <div className="max-w-xl">
                                    <h2 className="font-serif-bn text-2xl md:text-3xl text-[#1F1A17] font-semibold">
                                        কোনো শিক্ষক পাওয়া যায়নি
                                    </h2>
                                    <p className="font-body-bn mt-4 text-[15px] md:text-base leading-7 text-[#6E625A]">
                                        অনুগ্রহ করে অন্য নাম বা বিভাগ নির্বাচন করে আবার খুঁজুন।
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedDepartment("সব বিভাগ");
                                        }}
                                        className="font-body-bn mt-6 inline-flex items-center text-sm font-medium text-[#7A1E4D] transition-colors hover:text-[#5C173A] active:text-[#5C173A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E4D]/20"
                                    >
                                        সব শিক্ষক দেখুন
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TeacherPage;