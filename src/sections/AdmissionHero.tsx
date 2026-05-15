import { useEffect, useState } from 'react';
import { QUICK_LINKS } from '../constants';
import MockDataNote from '../components/MockDataNote';

const AdmissionHero = () => {

    const [activeSection, setActiveSection] = useState("admission-notice");

    useEffect(() => {
        const updateActiveSection = () => {
            const sectionOffsets = QUICK_LINKS.map((link) => {
                const element = document.getElementById(link.id);

                if (!element) {
                    return null;
                }

                const top = element.getBoundingClientRect().top + window.scrollY;

                return {
                    id: link.id,
                    top,
                };
            }).filter((item): item is { id: string; top: number; } => item !== null);

            const currentPosition = window.scrollY + 180;
            const currentSection = [...sectionOffsets]
                .reverse()
                .find((section) => currentPosition >= section.top);

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, []);

    return (
        <section className="w-full md:pt-40 pt-30">
            <div className="container-college">
                <div className="max-w-3xl">
                    <h1 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-semibold tracking-tight">
                        ভর্তি
                    </h1>
                    <p className="font-body-bn mt-4 max-w-2xl text-base md:text-lg leading-8 text-[#6E625A]">
                        নতুন শিক্ষাবর্ষে সরকারি গৌরনদী কলেজে ভর্তির আবেদন, যোগ্যতা,
                        ফি এবং ফলাফল সংক্রান্ত প্রয়োজনীয় নির্দেশনা এই পেজে একসাথে
                        সাজানো আছে।
                    </p>
                    <MockDataNote/>
                </div>

                <div className="mt-8 overflow-x-auto rounded-lg border border-[#DED2C2] bg-[#FFF9EF] scrollbar-hide">
                    <div className="flex min-w-max items-center gap-6 px-5 py-4 md:w-full md:justify-between md:px-6">
                        {QUICK_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setActiveSection(link.id)}
                                className={`font-body-bn relative whitespace-nowrap pb-1 text-[15px] transition-colors ${activeSection === link.id
                                    ? "text-[#7A1E4D]"
                                    : "text-[#6E625A] hover:text-[#5C173A]"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionHero;