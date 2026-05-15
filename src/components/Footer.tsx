import { Mail, MapPin, Phone, } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FOOTER_LINKS, FOOTER_RESOURCES } from "../constants";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="w-full bg-[#5C173A] text-[#FFF9EF]">
            <div className="container-college py-16 md:py-[72px]">
                <div className="flex justify-between md:flex-row flex-col gap-10 lg:gap-12">
                    {/* Column 1 — Logo + intro */}
                    <div className="">
                        <div className="flex items-center gap-3">
                            <img className="college-logo h-25 w-auto" src="/logo/college-logo.png" alt="লোগো"></img>
                            <div className="leading-tight">
                                <div className="font-serif-bn text-lg font-semibold">সরকারি গৌরনদী কলেজ</div>
                                <div className="font-body-bn text-[11px] tracking-wide text-[#FFF9EF]/70">
                                    প্রতিষ্ঠিত ১৯৭১
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 font-body-bn text-[#FFF9EF]/75 text-[15px] leading-relaxed max-w-md">
                            বরিশাল বিভাগের গৌরনদী উপজেলায় অবস্থিত একটি ঐতিহ্যবাহী সরকারি কলেজ। উচ্চমাধ্যমিক ও স্নাতক
                            পর্যায়ে গুণগত শিক্ষা প্রদানে দীর্ঘ পঞ্চাশ বছরের বেশি অভিজ্ঞতা।
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 max-w-xs">
                            <div className="border border-[#FFF9EF]/15 px-3 py-2.5 rounded-md">
                                <div className="font-body-bn text-[10px] uppercase text-[#FFF9EF]/60">
                                    EIIN
                                </div>
                                <div className="font-serif-bn text-base mt-0.5 font-semibold">১০০৭০৩</div>
                            </div>
                            <div className="border border-[#FFF9EF]/15 px-3 py-2.5 rounded-md">
                                <div className="font-body-bn text-[10px] uppercase text-[#FFF9EF]/60">
                                    কলেজ কোড
                                </div>
                                <div className="font-serif-bn text-base mt-0.5 font-semibold">১১১৩</div>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="mt-6 flex gap-3">
                            {[FaFacebook, FaYoutube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href={`${Icon === FaFacebook ? "https://www.facebook.com/gvt.gournadicollege" : "https://www.youtube.com/@govtgournadicollege3523"}`}
                                    className="h-10 w-10 flex items-center justify-center border border-[#FFF9EF]/25 rounded-md hover:bg-[#FFF9EF] hover:text-[#5C173A] active:bg-[#FFF9EF] active:text-[#5C173A] transition-colors"
                                    aria-label="Social link"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — Quick links */}
                    <div className="flex md:gap-35 gap-20">
                        <div className="">
                            <h3 className="whitespace-nowrap font-serif-bn text-[#FFF9EF] text-lg font-semibold mb-5">
                                গুরুত্বপূর্ণ লিংক
                            </h3>
                            <ul className="space-y-3">
                                {FOOTER_LINKS.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.link}
                                            className="font-body-bn text-[#FFF9EF]/75 hover:text-[#C9A86A] active:text-[#C9A86A] text-[15px] transition-colors"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-serif-bn text-[#FFF9EF] text-lg font-semibold mb-5">
                                একাডেমিক
                            </h3>
                            <ul className="space-y-3">
                                {FOOTER_RESOURCES.map((l) => (
                                    <li key={l.label}>
                                        <a
                                            href={l.link}
                                            className="font-body-bn text-[#FFF9EF]/75 hover:text-[#C9A86A] active:text-[#C9A86A] text-[15px] transition-colors"
                                        >
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 — Contact */}
                    <div className="">
                        <h3 className="font-serif-bn text-[#FFF9EF] text-lg font-semibold mb-5">যোগাযোগ</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="h-5 w-5 text-[#C9A86A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#FFF9EF]/75 text-[15px] leading-relaxed">
                                    গৌরনদী, বরিশাল — ৮২৩০
                                    <br />
                                    <span className="text-[#FFF9EF]/55">বরিশাল বিভাগ, বাংলাদেশ</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="h-5 w-5 text-[#C9A86A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#FFF9EF]/75 text-[15px] leading-relaxed">
                                    +৮৮০ xxxx-xxxxxx
                                    <br />
                                    <span className="text-[#FFF9EF]/55">০xxxx-xxxxxx</span>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="h-5 w-5 text-[#C9A86A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#FFF9EF]/75 text-[15px] leading-relaxed">
                                    info@gournadicollege.edu.bd
                                </div>
                            </li>
                        </ul>

                        <Link
                            to="/contact"
                            className="mt-6 font-body-bn inline-flex items-center gap-2 text-[#C9A86A] hover:text-[#FFF9EF] active:text-[#FFF9EF] text-sm font-medium border-b border-[#C9A86A]/40 hover:border-[#FFF9EF] active:border-[#FFF9EF] pb-0.5 transition-colors"
                        >
                            বিস্তারিত যোগাযোগ
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom row */}
            <div className="border-t border-[#FFF9EF]/15">
                <div className="container-college py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center md:text-left">
                        <div className="font-body-bn text-[#FFF9EF]/65 text-xs">
                            © ২০২৬ সরকারি গৌরনদী কলেজ
                        </div>
                        <div className="font-body-bn text-[#FFF9EF]/65 text-xs md:text-center">
                            ডিজাইন ও ডেভেলপমেন্ট:{" "}
                            <a
                                href="https://mjpolok-portfolio.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#C9A86A] hover:text-[#FFF9EF] active:text-[#FFF9EF] border-b border-[#C9A86A]/40 hover:border-[#FFF9EF] active:border-[#FFF9EF] transition-colors"
                            >
                                MJ Polok
                            </a>
                        </div>
                        <div className="font-body-bn text-[#FFF9EF]/65 text-xs md:text-right">
                            সর্বস্বত্ব সংরক্ষিত
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;