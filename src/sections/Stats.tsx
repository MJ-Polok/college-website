import { ArrowUpRight } from "lucide-react";
import { STATS } from "../constants";
import { Link } from "react-router-dom";

const Stats = () => {
    return (
        <section className="w-full bg-[#5C173A] py-14 md:py-20 lg:py-[88px]">
            <div className="container-college">
                {/* Heading */}
                <div className="pb-10 md:pb-12 border-b border-[#FFF9EF]/15">
                    <h2 className="font-serif-bn text-[#FFF9EF] text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold tracking-tight">
                        পরিসংখ্যান
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 md:pt-12">
                    {STATS.map((s, i) => (
                        <div
                            key={i}
                            className={`bg-[rgba(255,255,255,0.05)] rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[300px]`}
                        >
                            {/* Top — number */}
                            <div className="font-serif-bn text-[#FFF9EF] text-6xl md:text-5xl lg:text-6xl leading-none font-semibold tracking-tight">
                                {s.value}
                            </div>

                            {/* Bottom — label + sub + link */}
                            <div>
                                <div className="font-serif-bn text-[#FFF9EF] text-xl md:text-2xl font-medium">
                                    {s.label}
                                </div>
                                <div className="mt-1 font-body-bn text-[#FFF9EF]/70 text-[15px]">
                                    {s.sub}
                                </div>
                                {s.link && (
                                    <Link
                                        to={s.link}
                                        className="font-body-bn mt-4 inline-flex items-center gap-1.5 text-[#C9A86A] hover:text-[#FFF9EF] active:text-[#FFF9EF] transition-colors text-sm font-medium border-b border-[#C9A86A]/40 hover:border-[#FFF9EF] pb-0.5"
                                    >
                                        শিক্ষকবৃন্দ দেখুন
                                        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;