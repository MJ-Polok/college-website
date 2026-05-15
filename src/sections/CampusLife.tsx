import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "pexels";
import Masonry from "react-masonry-css";
import { useKeyboard } from "../hooks/useKeyboard";

const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

type CampusImage = {
    id: number;
    src: string;
    largeSrc: string; 
    caption: string;
    photographer: string; 
    sourceUrl: string; 
};

const CampusLife = () => {
    const [images, setImages] = useState<CampusImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        768: 2,
        500: 1
    };

    useEffect(() => {
        let isMounted = true;

        const fetchCampusImages = async () => {
            setIsLoading(true);
            try {
                const response = await client.photos.search({ 
                    query: "bangladesh university college", 
                    per_page: 5
                });

                if (isMounted && 'photos' in response) {
                    const mappedImages = response.photos.map((photo) => ({
                        id: photo.id,
                        src: photo.src.large,
                        largeSrc: photo.src.large2x || photo.src.large,
                        caption: photo.alt ? photo.alt.trim() : "ক্যাম্পাস জীবনের মুহূর্ত",
                        photographer: photo.photographer,
                        sourceUrl: photo.url,
                    }));
                    setImages(mappedImages);
                }
            } catch (error) {
                console.error("Failed to fetch campus images", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchCampusImages();

        return () => {
            isMounted = false;
        };
    }, []);

    const openLightbox = (index: number) => setLightboxIndex(index);
    
    const showPreviousImage = () => {
        setLightboxIndex((prev) => 
            prev !== null && images.length > 0 
                ? (prev - 1 + images.length) % images.length 
                : null
        );
    };

    const showNextImage = () => {
        setLightboxIndex((prev) => 
            prev !== null && images.length > 0 
                ? (prev + 1) % images.length 
                : null
        );
    };

    const currentLightboxImage = lightboxIndex !== null ? images[lightboxIndex] : null;

    useKeyboard(
        {
            ArrowRight: showNextImage,
            ArrowLeft: showPreviousImage,
            Escape: () => setLightboxIndex(null),
        },
        lightboxIndex !== null
    );

    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [lightboxIndex]);

    return (
        <>
            <section className="w-full bg-[#FFF9EF] py-16 md:py-24 lg:py-28" id="gallery">
                <div className="container-college px-4 mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 md:pb-14 border-b border-[#DED2C2]">
                        <div>
                            <h2 className="font-serif-bn text-[#1F1A17] text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold tracking-tight">
                                ক্যাম্পাস জীবন
                            </h2>
                        </div>
                        <Link
                            to="/gallery"
                            className="font-body-bn hidden md:flex items-center gap-2 px-5 py-[14px] rounded-md border border-[#1F1A17]/20 text-[#1F1A17] hover:border-[#7A1E4D] hover:text-[#7A1E4D] transition-colors text-[15px] font-medium"
                        >
                            পুরো গ্যালারি দেখুন
                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                    </div>

                    <div className="mt-8 md:mt-10">
                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="h-64 bg-[#EBE0CD] rounded-lg border border-[#DED2C2]" />
                                ))}
                            </div>
                        ) : (
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                {images.map((img, index) => (
                                    <div key={img.id} className="mb-6">
                                        <button
                                            type="button"
                                            onClick={() => openLightbox(index)}
                                            className="group relative overflow-hidden rounded-lg border border-[#DED2C2] bg-[#F7F1E3] w-full text-left block"
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.caption}
                                                className="w-full h-auto block object-cover "
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                <p className="text-[#FFF9EF] text-sm font-semibold leading-tight mt-1">{img.caption}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </Masonry>
                        )}
                    </div>

                    <div className="md:hidden flex justify-end pt-6 border-t border-[#DED2C2]">
                        <Link
                            to="/gallery"
                            className="font-body-bn inline-flex items-center gap-2 px-6 py-[14px] rounded-md border border-[#1F1A17]/20 text-[#1F1A17] text-[15px] font-medium active:bg-[#1F1A17]/5"
                        >
                            পুরো গ্যালারি দেখুন
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {currentLightboxImage && lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center"
                    onClick={() => setLightboxIndex(null)}
                >
                    <div className="relative flex h-full w-full items-center justify-center px-4 py-6 md:px-10">
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

                        <div
                            className="mx-auto flex max-h-full w-full max-w-6xl flex-col items-center"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="w-full overflow-hidden rounded-lg">
                                <img
                                    src={currentLightboxImage.largeSrc}
                                    alt={currentLightboxImage.caption}
                                    className="max-h-[72vh] w-full object-contain"
                                />
                            </div>

                            <div className="mt-5 flex w-full max-w-4xl flex-col gap-3 text-center">
                                <div className="font-body-bn text-sm text-[rgba(255,249,239,0.82)]">
                                    {lightboxIndex + 1} / {images.length}
                                </div>
                                <h3 className="text-white mt-4 text-xl font-serif-bn">{currentLightboxImage.caption}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CampusLife;