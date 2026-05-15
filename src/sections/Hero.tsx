import { ArrowRight } from "lucide-react";
import "./css/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[100svh] overflow-hidden">
            {/* Background image */}
            <img
                src="/images/hero-image.jpg"
                alt="সরকারি গৌরনদী কলেজের ক্যাম্পাস"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Center -> bottom #5C173A fade for cinematic transition */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(#0000000f 0%, rgba(92, 23, 58, 0.25) 40%, rgba(92, 23, 58, 0.85) 75%, rgb(92, 23, 58) 100%)",
                }}
            />

            {/* Content */}
            <div className="hero-section relative z-10 container-college flex min-h-[100svh] flex-col justify-end pt-32 pb-45">
                <div className="max-w-3xl">

                    <h1 className="font-serif-bn text-[#FFF9EF] text-balance text-5xl md:text-6xl lg:text-[78px] leading-[1.05] font-semibold tracking-tight">
                        জ্ঞান, মূল্যবোধ ও ঐতিহ্যের
                        <br />
                        <span className="text-[#C9A86A]">পঞ্চাশ বছরের</span> অগ্রযাত্রা
                    </h1>

                    <p className="font-body-bn mt-6 max-w-2xl text-[17px] md:text-lg leading-relaxed text-[#FFF9EF]/85">
                        সরকারি গৌরনদী কলেজ — বরিশাল অঞ্চলের একটি ঐতিহ্যবাহী উচ্চশিক্ষা প্রতিষ্ঠান। উচ্চমাধ্যমিক ও স্নাতক
                        পর্যায়ে বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগে গুণগত শিক্ষা ও সুশৃঙ্খল ক্যাম্পাস জীবনের প্রতিশ্রুতি।
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            to="/admission"
                            className="font-body-bn inline-flex items-center gap-2 px-5 py-[14px] rounded-md bg-[#7A1E4D] text-[#FFF9EF] border border-[#7A1E4D] hover:bg-[#5C173A] hover:border-[#5C173A] active:bg-[#5C173A] active:border-[#5C173A] transition-colors font-medium text-[15px]"
                        >
                            ভর্তি বিস্তারিত দেখুন
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                        <a
                            href="#about"
                            className="font-body-bn inline-flex items-center gap-2 px-5 py-[14px] rounded-md bg-transparent text-[#FFF9EF] border border-[#FFF9EF]/40 hover:border-[#FFF9EF] active:border-[#FFF9EF] transition-colors font-medium text-[15px]"
                        >
                            কলেজ পরিচিতি
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;