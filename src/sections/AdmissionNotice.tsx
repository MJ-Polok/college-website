import { ArrowUpRight } from "lucide-react";
import { NOTICE_META } from "../constants";


const AdmissionNotice = () => {
    return (
        <section id="admission-notice" className="w-full pb-16 md:pb-24 lg:pb-28 pt-16 md:pt-20 lg:pt-24">
            <div className="container-college">
                <div className="rounded-lg border border-[#DED2C2] bg-[#FFF9EF] p-6 md:p-8 lg:p-10">
                    <div className="max-w-4xl">
                        <h2 className="font-serif-bn text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-semibold tracking-tight text-[#1F1A17]">
                            একাদশ শ্রেণিতে ভর্তি বিজ্ঞপ্তি — ২০২৬-২০২৭ শিক্ষাবর্ষ
                        </h2>
                        <p className="font-body-bn mt-5 max-w-3xl text-[15px] md:text-base leading-8 text-[#6E625A]">
                            ২০২৬-২০২৭ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তি কার্যক্রম শুরু
                            হচ্ছে। আগ্রহী শিক্ষার্থীদের অনলাইনে আবেদন, বিভাগ নির্বাচন,
                            মেধাতালিকা এবং নিশ্চয়ন সংক্রান্ত সময়সূচি অনুসরণ করতে
                            অনুরোধ করা হচ্ছে।
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {NOTICE_META.map((item) => (
                            <div
                                key={item.label}
                                className="border border-[#DED2C2] rounded-lg px-4 py-4"
                            >
                                <div className="font-body-bn text-[11px] tracking-[0.18em] uppercase text-[#6E625A]">
                                    {item.label}
                                </div>
                                <div className="font-serif-bn mt-2 text-xl md:text-2xl font-semibold text-[#1F1A17]">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="font-body-bn inline-flex items-center gap-2 text-[#7A1E4D] hover:text-[#5C173A] transition-colors text-[15px] font-medium border-b border-[#7A1E4D]/40 hover:border-[#5C173A] pb-1"
                        >
                            বিজ্ঞপ্তি দেখুন
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionNotice;