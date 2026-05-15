import { ELIGIBILITY_ITEMS } from "../constants";


const Qualifications = () => {
    return (
        <section id="eligibility" className="w-full bg-[#FFF9EF] py-16 md:py-28">
            <div className="container-college">
                <div className="mx-auto max-w-4xl">
                    <h2 className="font-serif-bn text-[#1F1A17] text-3xl md:text-4xl lg:text-[44px] leading-[1.12] font-semibold tracking-tight">
                        যোগ্যতা
                    </h2>
                    <p className="font-body-bn mt-6 max-w-3xl text-[15px] md:text-base leading-8 text-[#6E625A]">
                        ভর্তি কার্যক্রমে অংশগ্রহণের জন্য নিম্নোক্ত যোগ্যতাসমূহ পূরণ
                        করতে হবে। বিভাগভেদে আসনসংখ্যা ও মেধা অনুযায়ী নির্বাচনের
                        প্রক্রিয়া সম্পন্ন হবে।
                    </p>

                    <div className="mt-8 space-y-6">
                        {ELIGIBILITY_ITEMS.map((item, index) => (
                            <div
                                key={item.label}
                                className={`pb-6 ${index !== ELIGIBILITY_ITEMS.length - 1
                                        ? "border-b border-[#DED2C2]"
                                        : ""
                                    }`}
                            >
                                <h3 className="font-serif-bn text-[#1F1A17] text-2xl md:text-[28px] font-semibold">
                                    {item.label}
                                </h3>
                                <p className="font-body-bn mt-3 text-[15px] md:text-base leading-8 text-[#6E625A]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border-l-2 border-[#7A1E4D] bg-[#F7F1E3] px-5 py-5 md:px-6">
                        <p className="font-body-bn text-[15px] md:text-base leading-8 text-[#6E625A]">
                            বিভাগভিত্তিক ন্যূনতম জিপিএ এবং আসনসংখ্যা প্রতি বছর বোর্ড ও
                            কলেজ কর্তৃপক্ষের নির্দেশনা অনুযায়ী সামান্য পরিবর্তিত হতে
                            পারে।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;