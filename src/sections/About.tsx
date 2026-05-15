import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section
            id="about"
            className="relative w-full bg-[#5C173A] py-16 md:py-24 lg:py-28"
        >
            <div className="container-college">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Left — image composition */}
                    <div className="order-2 lg:order-1 lg:col-span-6">
                        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-4">
    <div className="lg:col-span-8">
        <img
            src="/images/about-main.jpg"
            alt="কলেজ ভবন"
            className="w-full h-[250px] lg:h-[520px] object-cover rounded-lg"
        />
    </div>
    <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:flex lg:flex-col">
        <img
            src="/images/about-2.jpg"
            alt="ক্যাম্পাস"
            className="w-full h-[150px] lg:h-[250px] object-cover rounded-lg"
        />
        <img
            src="/images/about-3.jpg"
            alt="শিক্ষার্থীরা"
            className="w-full h-[150px] lg:h-[250px] object-cover rounded-lg"
        />
    </div>
</div>
                    </div>

                    {/* Right — text */}
                    <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-6">
                        <div className="max-w-[680px]">
                            <h2 className="font-serif-bn text-[#FFF9EF] text-balance text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-semibold tracking-tight">
                                সরকারি গৌরনদী কলেজ
                            </h2>

                            <div className="mt-8 space-y-4 font-body-bn text-[#FFF9EF]/80 text-[16px] md:text-[17px] leading-relaxed">
                                <p>
                                    বরিশাল জেলার গৌরনদী উপজেলায় অবস্থিত এই কলেজটি ১৯৭১ সালে প্রতিষ্ঠিত হয়। প্রতিষ্ঠার পর
                                    থেকেই দক্ষিণাঞ্চলের শিক্ষার্থীদের উচ্চশিক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
                                </p>
                                <p>
                                    বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা — তিনটি প্রধান বিভাগে উচ্চমাধ্যমিক ও স্নাতক পর্যায়ে
                                    শিক্ষা প্রদান করা হয়। অভিজ্ঞ শিক্ষকমণ্ডলী, সমৃদ্ধ গ্রন্থাগার ও সুশৃঙ্খল পরিবেশ আমাদের
                                    প্রধান শক্তি।
                                </p>
                            </div>

                            {/* Established large treatment */}
                            <div className="mt-5 flex items-end gap-5 border-t border-[#FFF9EF]/15 pt-4">
                                <div>
                                    
                                    <div className="font-serif-bn text-[#C9A86A] text-6xl md:text-7xl leading-none">
                                        ১৯৭১
                                    </div>
                                </div>
                                <div className="pb-2 font-body-bn text-[#FFF9EF]/70 text-sm">
                                    পঞ্চাশ বছরেরও বেশি সময়ের
                                    <br />
                                    অবিচল শিক্ষাযাত্রা
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/history-introduction"
                                    className="font-body-bn inline-flex items-center gap-2 text-[#C9A86A] hover:text-[#FFF9EF] active:text-[#FFF9EF] transition-colors text-[15px] font-medium border-b border-[#C9A86A]/40 hover:border-[#FFF9EF] active:border-[#FFF9EF] pb-1"
                                >
                                    বিস্তারিত পরিচিতি
                                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
