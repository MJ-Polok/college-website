/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { NAV } from "../constants";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    useEffect(() => {
        setScrolled(false);
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const overlayVariants = {
    closed: { x: "100%", transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
    opened: { x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } }
};

    const subMenuVariants = {
        closed: { height: 0, opacity: 0, overflow: "hidden" },
        opened: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
    };

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${isHome && !scrolled ? "bg-transparent" : "bg-[#7A1E4D]"}`}>
            <div className="container-college">
                <div className={`flex items-center justify-between transition-all duration-300 h-20 relative z-[60] 
                ${mobileOpen
                        ? "bg-[color-mix(in_srgb,#5C173A_70%,transparent)] backdrop-blur-[20px] transition-all duration-[2000ms]"
                        : "duration-[0ms]"}
                    `}>

                    <Link to="/" className="flex items-center gap-3 text-[#FFF9EF]">
                        <img className="college-logo h-14 w-auto" src="/logo/college-logo.png" alt="লোগো" />
                        <div className="leading-tight">
                            <div className="font-serif-bn text-base lg:text-[17px] font-semibold tracking-tight">সরকারি গৌরনদী কলেজ</div>
                            <div className="font-body-bn text-[11px] tracking-wide text-[#FFF9EF]/75">প্রতিষ্ঠিত ১৯৭১</div>
                        </div>
                    </Link>

                    <nav className="hidden xl:flex items-center gap-1">
                        {NAV.map((item) => (
                            <div key={item.label} className="relative" onMouseEnter={() => item.children && setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                                {item.href.includes("#") ? (
                                    <a href={item.href} className="font-body-bn flex items-center gap-1 px-3 py-2 text-[1.1rem] text-[#FFF9EF]/90 hover:text-[#FFF9EF] relative group">
                                        <span className="relative">
                                            {item.label}
                                            <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A86A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                        </span>
                                        {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-80" />}
                                    </a>
                                ) : (
                                    <Link to={item.href} className="font-body-bn flex items-center gap-1 px-3 py-2 text-[1.1rem] text-[#FFF9EF]/90 hover:text-[#FFF9EF] relative group">
                                        <span className="relative">
                                            {item.label}
                                            <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A86A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                                        </span>
                                        {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-80" />}
                                    </Link>
                                )}
                                <AnimatePresence>
                                    {item.children && openDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <div className="absolute left-0 top-full pt-2 min-w-[240px]">
                                                <div className="bg-[#FFF9EF] border border-[#DED2C2] rounded-md py-2 shadow-xl">
                                                    {item.children.map((c) => (
                                                        c.href.includes("#") ? (
                                                            <a key={c.label} href={c.href} className="font-body-bn block px-4 py-2.5 text-md text-[#1F1A17] hover:bg-[#EEE3D2] hover:text-[#7A1E4D]">
                                                                {c.label}
                                                            </a>
                                                        ) : (
                                                            <Link key={c.label} to={c.href} className="font-body-bn block px-4 py-2.5 text-md text-[#1F1A17] hover:bg-[#EEE3D2] hover:text-[#7A1E4D]">
                                                                {c.label}
                                                            </Link>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden inline-flex h-10 w-10 items-center justify-center text-[#FFF9EF]">
                            {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div initial="closed" animate="opened" exit="closed" variants={overlayVariants} className="fixed overflow-y-auto inset-0 z-50 bg-[#5C173A] flex flex-col pt-30 px-6 ">
                        <motion.nav className="container-college flex flex-col">
                            {NAV.map((item) => (
                                <motion.div key={item.label} className="border-b border-[#FFF9EF]/10 py-2">
                                    <div className="flex items-center justify-between">
                                        <a href={item.href} onClick={() => { setMobileOpen(false); setMobileDropdown(null); }} className="font-body-bn py-3 text-2xl text-[#FFF9EF] w-full">
                                            {item.label}
                                        </a>
                                        {item.children && (
                                            <button
                                                onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                                                className="p-2 text-[#FFF9EF]/70"
                                            >
                                                <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileDropdown === item.label ? "rotate-180" : ""}`} />
                                            </button>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {item.children && mobileDropdown === item.label && (
                                            <motion.div initial="closed" animate="opened" exit="closed" variants={subMenuVariants} className="pl-4 flex flex-col gap-3" >
                                                {item.children.map((child) => ( 
                                                    <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="font-body-bn text-lg text-[#FFF9EF]/80 hover:text-[#C9A86A]">
                                                        {child.label}
                                                    </a>
                                                ))}
                                            </motion.div>

                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;