import { FEE_ITEMS } from "../constants";

const FeeInformation = () => {
    return (
        <section id="fee-information" className="w-full bg-[#F7F1E3] py-16 md:py-24 lg:py-28">
            <div className="container-college">
                <div className="mx-auto max-w-5xl">
                    <h2 className="font-serif-bn text-[#1F1A17] text-3xl md:text-4xl lg:text-[44px] leading-[1.12] font-semibold tracking-tight">
                        ফি সংক্রান্ত তথ্য
                    </h2>
                    <p className="font-body-bn mt-5 max-w-3xl text-[15px] md:text-base leading-8 text-[#6E625A]">
                        ভর্তি সম্পন্ন করতে প্রয়োজনীয় সম্ভাব্য ফি-সমূহ নিচে উল্লেখ করা
                        হলো। চূড়ান্ত অর্থপরিমাণ অফিসিয়াল বিজ্ঞপ্তি অনুযায়ী নির্ধারিত
                        হবে।
                    </p>

                    <div className="mt-8 overflow-hidden rounded-lg border border-[#DED2C2] bg-[#FFF9EF]">
                        <div className="hidden grid-cols-[1.6fr_0.8fr_1fr] gap-4 border-b border-[#DED2C2] px-6 py-4 md:grid">
                            <div className="font-body-bn text-sm text-[#6E625A]">ফি-এর ধরন</div>
                            <div className="font-body-bn text-sm text-[#6E625A]">পরিমাণ</div>
                            <div className="font-body-bn text-sm text-[#6E625A]">মন্তব্য</div>
                        </div>

                        <div className="divide-y divide-[#DED2C2]">
                            {FEE_ITEMS.map((item) => (
                                <div
                                    key={item.label}
                                    className="px-5 py-5 md:grid md:grid-cols-[1.6fr_0.8fr_1fr] md:gap-4 md:px-6"
                                >
                                    <div>
                                        <div className="font-body-bn text-[11px] tracking-[0.18em] uppercase text-[#6E625A] md:hidden">
                                            ফি-এর ধরন
                                        </div>
                                        <div className="font-serif-bn mt-1 text-[#1F1A17] text-xl md:mt-0 md:text-2xl font-semibold">
                                            {item.label}
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <div className="font-body-bn text-[11px] tracking-[0.18em] uppercase text-[#6E625A] md:hidden">
                                            পরিমাণ
                                        </div>
                                        <div className="font-serif-bn mt-1 text-[#7A1E4D] text-2xl md:mt-0 md:text-[28px] font-semibold">
                                            {item.amount}
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <div className="font-body-bn text-[11px] tracking-[0.18em] uppercase text-[#6E625A] md:hidden">
                                            মন্তব্য
                                        </div>
                                        <div className="font-body-bn mt-1 text-[15px] md:mt-0 md:text-base leading-7 text-[#6E625A]">
                                            {item.note ?? "—"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 rounded-lg border border-[#DED2C2] bg-[#FFF9EF] px-5 py-5 md:px-6">
                        <h3 className="font-serif-bn text-[#1F1A17] text-2xl md:text-[28px] font-semibold">
                            পরিশোধ নির্দেশনা
                        </h3>
                        <p className="font-body-bn mt-3 text-[15px] md:text-base leading-8 text-[#6E625A]">
                            নির্বাচন নিশ্চিত হওয়ার পর কলেজ নির্ধারিত ব্যাংক শাখা বা
                            অনুমোদিত অনলাইন পেমেন্ট মাধ্যমে ফি জমা দিতে হবে। রশিদের
                            কপি ভর্তি যাচাইয়ের সময় সঙ্গে আনতে হবে।
                        </p>
                    </div>

                    <div className="mt-6 rounded-lg border-l-2 border-[#7A1E4D] bg-[#FFF9EF] px-5 py-5 md:px-6">
                        <p className="font-body-bn text-[15px] md:text-base leading-8 text-[#6E625A]">
                            ফি কাঠামো বোর্ড ও কলেজ কর্তৃপক্ষের সর্বশেষ অফিসিয়াল
                            বিজ্ঞপ্তি অনুযায়ী পরিবর্তিত হতে পারে। ভর্তি নিশ্চিত করার
                            আগে চূড়ান্ত নোটিশ অবশ্যই দেখে নিন।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeeInformation;