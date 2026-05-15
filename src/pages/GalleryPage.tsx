import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createClient } from "pexels";
import { useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import { useKeyboard } from "../hooks/useKeyboard";
import MockDataNote from "../components/MockDataNote";

type GalleryCategory = "সব" | "ক্যাম্পাস" | "অনুষ্ঠান" | "সহশিক্ষা";

type GalleryImage = {
    id: number;
    src: string;
    largeSrc: string;
    width: number;
    height: number;
    category: GalleryCategory;
    caption: string;
    photographer: string;
    sourceUrl: string;
};

type PexelsPhoto = {
    id: number;
    width: number;
    height: number;
    alt: string;
    photographer: string;
    url: string;
    src: {
        medium: string;
        large: string;
        large2x: string;
    };
};

type PexelsSearchResponse = {
    photos?: PexelsPhoto[];
};

const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

const FILTERS: GalleryCategory[] = ["সব", "ক্যাম্পাস", "অনুষ্ঠান", "সহশিক্ষা"];

const SEARCH_GROUPS: { category: Exclude<GalleryCategory, "সব">; query: string; }[] = [
    { category: "ক্যাম্পাস", query: "college campus bangladesh" },
    { category: "ক্যাম্পাস", query: "university campus building bangladesh" },
    { category: "অনুষ্ঠান", query: "cultural program students" },
    { category: "সহশিক্ষা", query: "extracurricular activities students" },
];

const buildCaption = (photo: PexelsPhoto, category: GalleryCategory) => {
    const categoryPrefix =
        category === "ক্যাম্পাস" ? "ক্যাম্পাস জীবন" : category === "অনুষ্ঠান" ? "কলেজ অনুষ্ঠান" : "সহশিক্ষা কার্যক্রম";
    const cleanedAlt = photo.alt?.trim();
    return cleanedAlt ? `${categoryPrefix} — ${cleanedAlt}` : `${categoryPrefix} — সরকারি গৌরনদী কলেজের অনুপ্রেরণামূলক মুহূর্ত`;
};

const buildGalleryImages = (responses: PexelsSearchResponse[]) => {
    const seen = new Set<number>();
    const images: GalleryImage[] = [];
    responses.forEach((response, responseIndex) => {
        const category = SEARCH_GROUPS[responseIndex]?.category ?? "ক্যাম্পাস";
        response.photos?.forEach((photo) => {
            if (seen.has(photo.id)) return;
            seen.add(photo.id);
            images.push({
                id: photo.id,
                src: photo.src.large,
                largeSrc: photo.src.large2x || photo.src.large,
                width: photo.width,
                height: photo.height,
                category,
                caption: buildCaption(photo, category),
                photographer: photo.photographer,
                sourceUrl: photo.url,
            });
        });
    });
    return images;
};

const GalleryPage = () => {
    const [activeFilter, setActiveFilter] = useState<GalleryCategory>("সব");
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        768: 2,
        500: 1
    };

    useEffect(() => {
        let isMounted = true;
        const fetchImages = async () => {
            setIsLoading(true);
            try {
                const results = await Promise.all(SEARCH_GROUPS.map(group => client.photos.search({ query: group.query, per_page: 5 })));
                if (isMounted) {
                    setImages(buildGalleryImages(results as PexelsSearchResponse[]));
                }
            } catch (error) {
                console.error("Pexels gallery fetch failed", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };
        fetchImages();
        return () => { isMounted = false; };
    }, []);

    const filteredImages = useMemo(() => activeFilter === "সব" ? images : images.filter(img => img.category === activeFilter), [activeFilter, images]);
    const currentLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

    const showPreviousImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null);
    const showNextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredImages.length : null);

    const isLightboxOpen = lightboxIndex !== null;

    useKeyboard(
        {
            ArrowRight: showNextImage,
            ArrowLeft: showPreviousImage,
            Escape: () => setLightboxIndex(null),
        },
        isLightboxOpen
    );

    return (
        <main className="min-h-screen bg-[#F7F1E3]">
            <section className="w-full md:pb-20 lg:pb-24 md:pt-40 pt-30">
                <div className="container-college px-4 mx-auto">
                    <div className="max-w-3xl">
                        <h1 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-semibold tracking-tight">গ্যালারি</h1>
                        <p className="font-body-bn mt-4 max-w-2xl text-base md:text-lg leading-8 text-[#6E625A]">কলেজের কার্যক্রম ও ক্যাম্পাস জীবনের মুহূর্তগুলো।</p>
                        <MockDataNote/>
                    </div>

                    <div className="mt-8 overflow-x-auto rounded-lg border border-[#DED2C2] bg-[#FFF9EF] scrollbar-hide">
                        <div className="flex min-w-max items-center gap-6 px-5 py-4 md:w-full md:gap-8 md:px-6">
                            {FILTERS.map((filter) => (
                                <button key={filter} onClick={() => setActiveFilter(filter)} className={`font-body-bn relative pb-1 text-[15px] transition-colors ${activeFilter === filter ? "text-[#7A1E4D]" : "text-[#6E625A] hover:text-[#5C173A]"}`}>
                                    {filter}
                                    {activeFilter === filter && <span className="absolute inset-x-0 -bottom-4 h-px bg-[#7A1E4D]" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
                                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-64 bg-[#FFF9EF] rounded-lg border border-[#DED2C2]" />)}
                            </div>
                        ) : (
                            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                                {filteredImages.map((image, index) => (
                                    <div key={image.id} className="mb-6">
                                        <button onClick={() => setLightboxIndex(index)} className="group relative overflow-hidden rounded-lg border border-[#DED2C2] bg-[#FFF9EF] w-full text-left">
                                            <img src={image.src} alt={image.caption} className="w-full h-auto block" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <p className="text-[10px] uppercase text-[#FFF9EF]/80">{image.category}</p>
                                                <p className="text-[#FFF9EF] text-sm font-semibold leading-tight mt-1">{image.caption}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </Masonry>
                        )}
                    </div>
                </div>
            </section>

            {currentLightboxImage && (
                <div className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
                    <button
                            type="button"
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-5 right-5 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF9EF]/20 text-[#FFF9EF] transition-colors hover:border-[#FFF9EF]/60"
                            aria-label="বন্ধ করুন"
                        >
                            <X className="h-5 w-5" strokeWidth={2} />
                        </button>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPreviousImage();
                            }}
                            className="absolute left-3 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF9EF]/20 text-[#FFF9EF] transition-colors hover:border-[#FFF9EF]/60 md:left-6"
                            aria-label="আগের ছবি"
                        >
                            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
                        </button>

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNextImage();
                            }}
                            className="absolute right-3 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF9EF]/20 text-[#FFF9EF] transition-colors hover:border-[#FFF9EF]/60 md:right-6"
                            aria-label="পরের ছবি"
                        >
                            <ChevronRight className="h-5 w-5" strokeWidth={2} />
                        </button>
                    <div className="max-w-5xl w-full p-4 text-center" onClick={e => e.stopPropagation()}>
                        <img src={currentLightboxImage.largeSrc} alt="" className="max-h-[75vh] mx-auto rounded-lg" />
                        <h3 className="text-white mt-4 text-xl font-serif-bn">{currentLightboxImage.caption}</h3>
                    </div>
                </div>
            )}
        </main>
    );
};

export default GalleryPage;