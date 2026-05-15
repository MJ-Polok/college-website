import { ArrowRight } from "lucide-react";
import { APPLICATION_STEPS } from "../constants";

const ApplicationProcess = () => {
    return (
        <section id="application-process" className="w-full bg-[#F7F1E3] py-16 md:py-24 lg:py-28">
            <div className="container-college">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif-bn text-[#1F1A17] text-3xl md:text-4xl lg:text-[44px] leading-[1.12] font-semibold tracking-tight">
                        আবেদন প্রক্রিয়া
                    </h2>
                    <p className="font-body-bn mt-5 max-w-3xl text-[15px] md:text-base leading-8 text-[#6E625A]">
                        আবেদন সম্পন্ন করার জন্য নিচের ধাপগুলো ক্রমানুসারে অনুসরণ করুন।
                        প্রতিটি ধাপে তথ্য সঠিকভাবে পূরণ করা অত্যন্ত গুরুত্বপূর্ণ।
                    </p>

                    <div className="mt-8 space-y-4">
                        {APPLICATION_STEPS.map((item) => (
                            <div
                                key={item.step}
                                className="rounded- lg border border-[#DED2C2] bg-[#FFF9EF] px-5 py-5 md:px-6 md:py-6"
                            >
                                <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                                    <div className="font-serif-bn text-[#7A1E4D] text-3xl md:text-4xl leading-none font-semibold md:min-w-[64px]">
                                        {item.step}
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-serif-bn text-[#1F1A17] text-2xl md:text-[28px] leading-[1.2] font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="font-body-bn mt-3 text-[15px] md:text-base leading-8 text-[#6E625A]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border-l-2 border-[#7A1E4D] bg-[#FFF9EF] px-5 py-5 md:px-6">
                        <p className="font-body-bn text-[15px] md:text-base leading-8 text-[#6E625A]">
                            আবেদন জমা দেওয়ার আগে মোবাইল নম্বর, বিভাগ পছন্দ এবং ফলাফলের
                            তথ্য পুনরায় মিলিয়ে নিন। ভুল তথ্যের কারণে আবেদন বাতিল হতে
                            পারে।
                        </p>
                    </div>

                    <div className="mt-8">
                        <a
                            href="#"
                            className="font-body-bn inline-flex items-center gap-2 px-6 py-4 rounded-md bg-[#7A1E4D] text-[#FFF9EF] border border-[#7A1E4D] hover:bg-[#5C173A] hover:border-[#5C173A] transition-colors text-[15px] font-semibold"
                        >
                            অনলাইন আবেদন
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationProcess;