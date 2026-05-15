import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-[#F7F1E3] py-16 md:py-24 lg:py-28">
            <div className="container-college">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left */}
                    <div className="lg:col-span-5">
                        <h2 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold tracking-tight">
                            যোগাযোগ
                        </h2>

                        <div className="mt-4 font-serif-bn text-[#1F1A17] text-2xl md:text-[28px] font-semibold">
                            সরকারি গৌরনদী কলেজ
                        </div>

                        <ul className="mt-6 space-y-5">
                            <li className="flex gap-4">
                                <MapPin className="h-5 w-5 text-[#7A1E4D] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#1F1A17] text-[15px] leading-relaxed">
                                    গৌরনদী, বরিশাল — ৮২৩০
                                    <br />
                                    <span className="text-[#6E625A]">বরিশাল বিভাগ, বাংলাদেশ</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="h-5 w-5 text-[#7A1E4D] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#1F1A17] text-[15px] leading-relaxed">
                                    ফোন: +৮৮০ xxxx-xxxxxx
                                    <br />
                                    <span className="text-[#6E625A]">অফিস: ০xxxx-xxxxxx</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="h-5 w-5 text-[#7A1E4D] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <div className="font-body-bn text-[#1F1A17] text-[15px] leading-relaxed">
                                    ইমেইল: info@gournadicollege.edu.bd
                                </div>
                            </li>
                        </ul>

                        {/* meta */}
                        <div className="mt-8 pt-6 border-t border-[#DED2C2] flex gap-10 max-w-md">
                            <div>
                                <div className="font-body-bn text-[11px] uppercase text-[#6E625A]">
                                    EIIN
                                </div>
                                <div className="font-serif-bn text-[#1F1A17] text-2xl mt-1 font-semibold">
                                    ১০০৭০৩
                                </div>
                            </div>
                            <div>
                                <div className="font-body-bn text-[11px] uppercase text-[#6E625A]">
                                    কলেজ কোড
                                </div>
                                <div className="font-serif-bn text-[#1F1A17] text-2xl mt-1 font-semibold">
                                    ১১১৩ 
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="mt-8 font-body-bn inline-flex items-center gap-2 text-[#7A1E4D] hover:text-[#5C173A] active:text-[#5C173A] transition-colors text-[15px] font-medium border-b border-[#7A1E4D]/40 hover:border-[#5C173A] active:border-[#5C173A] pb-1"
                        >
                            যোগাযোগের বিস্তারিত
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                    </div>

                    {/* Right — map */}
                    <div className="lg:col-span-7">
                        <a
                            href="https://www.google.com/maps/place/Government+Gournadi+University+College/@22.9738465,90.2199978,17z/data=!3m1!4b1!4m6!3m5!1s0x375542217c0babf3:0x97c15d73395feadb!8m2!3d22.9738465!4d90.2199978!16s%2Fg%2F11c43n7qf0!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative w-full h-[420px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-[#DED2C2] group"
                        >
                            <img
                                src="/images/map.jpg"
                                alt="কলেজ ক্যাম্পাসের ম্যাপ"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute bottom-4 right-4 font-body-bn text-xs text-[#1F1A17] bg-[#FFF9EF]/95 px-3 py-2 rounded-md border border-[#DED2C2] inline-flex items-center gap-1.5">
                                Google Maps-এ দেখুন
                                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;