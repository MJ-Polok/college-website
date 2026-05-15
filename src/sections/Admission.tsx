import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Admission = () => {
    return (
        <section id="admission-notice" className="w-full bg-[#7A1E4D] py-14 md:py-20 lg:py-[88px]">
            <div className="container-college">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                        <h2 className="font-serif-bn text-[#FFF9EF] text-4xl md:text-5xl lg:text-[60px] leading-[1.05] font-semibold tracking-tight text-balance">
                            নতুন শিক্ষাবর্ষে আপনার যাত্রা শুরু হোক
                            <br className="hidden md:block" />
                            <span className="text-[#C9A86A]"> সরকারি গৌরনদী কলেজে</span>
                        </h2>
                        <p className="font-body-bn mt-6 max-w-2xl text-[#FFF9EF]/80 text-[16px] md:text-[17px] leading-relaxed">
                            একাদশ শ্রেণিতে ভর্তির জন্য অনলাইন আবেদন এখন চলছে। আবেদনের যোগ্যতা, প্রক্রিয়া ও
                            সময়সূচি সম্পর্কে বিস্তারিত জানতে নিচের লিংকে যান।
                        </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                        <Link
                            to="/admission"
                            className="font-body-bn inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-[#FFF9EF] text-[#5C173A] hover:bg-[#EEE3D2] active:bg-[#EEE3D2] transition-colors text-[15px] font-semibold w-full lg:w-auto"
                        >
                            ভর্তি বিস্তারিত দেখুন
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                        <a
                            href="/admission/#application-process"
                            className="font-body-bn inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-transparent border border-[#FFF9EF]/40 text-[#FFF9EF] hover:border-[#FFF9EF] active:border-[#FFF9EF] transition-colors text-[15px] font-medium w-full lg:w-auto"
                        >
                            অনলাইন আবেদন
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;