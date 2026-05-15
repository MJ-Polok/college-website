import { Quote } from "lucide-react";

const Principal = () => {
    return (
        <section id="principal" className="w-full bg-[#FFF9EF] py-16 md:py-24 lg:py-28">
            <div className="container-college">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Left — text */}
                    <div className="lg:col-span-7">
                        <h2 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold tracking-tight">
                            অধ্যক্ষের বাণী
                        </h2>

                        {/* Quote mark */}
                        <div className="mt-10 mb-3">
                            <Quote
                                className="h-14 w-14 lg:h-16 lg:w-16 text-[#7A1E4D] -scale-x-100"
                                strokeWidth={1}
                                fill="currentColor"
                            />
                        </div>

                        <blockquote className="font-serif-bn text-[#1F1A17] text-2xl md:text-3xl lg:text-[34px] leading-[1.4] font-medium tracking-tight max-w-[680px]">
                            শিক্ষা শুধু পরীক্ষায় উত্তীর্ণ হওয়ার মাধ্যম নয় এটি মানুষ হয়ে ওঠার দীর্ঘ যাত্রা। আমাদের
                            শিক্ষার্থীরা যেন জ্ঞান, মূল্যবোধ ও দায়িত্ববোধ নিয়ে দেশের কল্যাণে কাজ করতে পারে সেটাই
                            আমাদের অঙ্গীকার।
                        </blockquote>

                        {/* Divider */}
                        <div className="mt-8 h-px w-24 bg-[#7A1E4D]" />

                        {/* Name block */}
                        <div className="mt-4">
                            <div className="font-serif-bn text-[#1F1A17] text-xl md:text-2xl font-semibold">
                                প্রফেসর মো. আব্দুল মান্নান
                            </div>
                            <div className="font-body-bn text-[#6E625A] text-[15px] mt-1">
                                অধ্যক্ষ, সরকারি গৌরনদী কলেজ
                            </div>
                        </div>
                    </div>

                    {/* Right — portrait */}
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img
                                src="/images/principal.jpg"
                                alt="অধ্যক্ষের প্রতিকৃতি"
                                className="w-full h-[480px] md:h-[560px] lg:h-[640px] object-cover rounded-lg max-h-80 md:max-h-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Principal;