import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LATEST_NOTICES } from "../constants";
import { Link } from "react-router-dom";


const Notice = () => {
    return (
        <section id="notice" className="w-full bg-[#EEE3D2] py-16 md:py-24 lg:py-28">
            <div className="container-college">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 md:pb-12 border-b-2 border-[#1F1A17]/10">
                    <div>
                        <h2 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold tracking-tight">
                            সর্বশেষ নোটিশ
                        </h2>
                    </div>
                    <Link
                        to="/notice-archive"
                        className="font-body-bn hidden md:flex items-center gap-2 px-5 py-[14px] rounded-md border border-[#1F1A17]/20 text-[#1F1A17] hover:border-[#7A1E4D] hover:text-[#7A1E4D] active:border-[#7A1E4D] active:text-[#7A1E4D] transition-colors text-[15px] font-medium self-start md:self-auto "
                    >
                        সব নোটিশ দেখুন
                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                </div>

                <ul className="divide-y divide-[#1F1A17]/10">
                    {LATEST_NOTICES.map((n, i) => (
                        <li key={i}>
                            <Link
                                to={`/notice-archive/${n.slug}`}
                                className="group grid grid-cols-12 items-center gap-4 md:gap-6 py-6 md:py-7 hover:bg-[#EEE3D2] active:bg-[#EEE3D2] -mx-3 px-3 transition-colors"
                            >
                                <div className="col-span-12 md:col-span-2 flex items-center gap-2">
                                    <div className="font-serif-bn text-[#7A1E4D] text-3xl md:text-4xl leading-none font-semibold">
                                        {n.day}
                                    </div>
                                    <div className="font-body-bn leading-tight flex md:block items-center gap-1 ">
                                        <div className="text-[#1F1A17] text-lg md:text-sm font-medium">{n.month}</div>
                                        <div className="text-[#6E625A] text-sm md:text-xs">{n.year}</div>
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-8 flex items-center gap-3">
                                    <div className="min-w-0">
                                        <div className="font-body-bn text-[#1F1A17] text-lg md:text-xl leading-snug group-hover:text-[#7A1E4D] group-active:text-[#7A1E4D] transition-colors">
                                            {n.title}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-12 md:col-span-2 flex md:justify-end ">
                                    <span className="font-body-bn inline-flex items-center gap-1.5 text-[#7A1E4D] text-sm font-medium group-hover:gap-2.5 group-active:gap-2.5 transition-all">
                                        বিস্তারিত
                                        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex md:hidden justify-end pt-7 border-t-2 border-[#1F1A17]/10">
                    <Link
                        to="/notice-archive"
                        className="font-body-bn inline-flex items-center gap-2 px-5 py-[14px] rounded-md border border-[#1F1A17]/20 text-[#1F1A17] hover:border-[#7A1E4D] hover:text-[#7A1E4D] active:border-[#7A1E4D] active:text-[#7A1E4D] transition-colors text-[15px] font-medium self-start md:self-auto"
                    >
                        সব নোটিশ দেখুন
                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Notice;