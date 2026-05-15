import { Link } from "react-router-dom";

const UnderConstructionPage = () => {
    return (
        <main className="min-h-screen bg-[#F7F1E3] flex items-center justify-center">
            <div className="text-center">
                <p className="font-serif-bn text-8xl text-[#DED2C2] font-semibold">
                    🚧
                </p>
                <h1 className="font-serif-bn text-3xl md:text-4xl text-[#1F1A17] font-semibold mt-6">
                    পেইজটি তৈরি হচ্ছে
                </h1>
                <p className="font-body-bn mt-4 text-[#6E625A] text-base md:text-lg">
                    এই পেইজটি শীঘ্রই পাওয়া যাবে।
                </p>
                <Link
                    to="/"
                    className="font-body-bn mt-8 inline-block text-[#7A1E4D] hover:text-[#5C173A] transition-colors"
                >
                    প্রচ্ছদে ফিরুন
                </Link>
            </div>
        </main>
    );
};

export default UnderConstructionPage;