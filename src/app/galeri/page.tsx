import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Galeri',
    description:
        'Menyaksikan keindahan alam, budaya, dan momen-momen berharga di Desa Bautkan melalui lensa kamera.',
};

const galleryData = [
    {
        image: '/galeri/alam-1.jpg',
        alt: 'Veledrome Rimbo Data',
        category: 'Sport',
        gridSpan: 'col-span-1 md:col-span-2 md:row-span-2',
    },
    {
        image: '/galeri/alam-2.jpg',
        alt: 'Masjid Al Khair Padang',
        category: 'Spiritual',
        gridSpan: 'col-span-1',
    },
    {
        image: '/galeri/budaya-1.jpg',
        alt: 'Masjid Rahmatan lil Alamin Kampus UPI YPTK',
        category: 'Spiritual',
        gridSpan: 'col-span-1',
    },
    {
        image: '/galeri/masyarakat-1.jpg',
        alt: 'UPI Convention Center',
        category: 'Gedung Serbaguna ',
        gridSpan: 'col-span-1 md:col-span-2 md:row-span-2',
    },
    {
        image: '/galeri/budaya-2.jpg',
        alt: 'Bendungan PAMSIMAS TARATAK',
        category: 'Wisata',
        gridSpan: 'col-span-1',
    },
    {
        image: '/galeri/masyarakat-2.jpg',
        alt: 'Lapangan Bola Cengkeh',
        category: 'Sport',
        gridSpan: 'col-span-1',
    },
    {
        image: '/galeri/alam-3.jpg',
        alt: 'SPBU Pitameh',
        category: 'Pengisian BBM',
        gridSpan: 'col-span-1 md:col-span-2',
    },
    {
        image: '/galeri/budaya-3.jpg',
        alt: 'Sungai Batang Arau',
        category: 'Wisata',
        gridSpan: 'col-span-1',
    },
    {
        image: '/galeri/masyarakat-3.jpg',
        alt: 'Lapangan Bola Cengkeh',
        category: 'Sport',
        gridSpan: 'col-span-1',
    },
];

export default function GaleriPage() {
    return (
        <>
            <section className="relative w-full py-12 md:py-20 lg:py-24 bg-primary/10 overflow-hidden bg-particle-animation">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary font-headline opacity-0 animate-fade-in-up">
                            Temukan pesona daerah Lubuk Begalung
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl opacity-0 animate-fade-in-up-staggered">
                            Saksikan keindahan Lubuk Begalung di Kota Padang,
                            tempat berpadu harmonis antara panorama alam yang
                            asri dan budaya Minangkabau yang kaya nilai tradisi.
                            Galeri ini merekam momen-momen autentik dari
                            kehidupan masyarakat yang menyatu dengan alam dan
                            kearifan lokal.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="gallery-content"
                className="w-full py-12 md:py-20 lg:py-24"
            >
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[15rem] gap-4">
                        {galleryData.map((item, index) => (
                            <Card
                                key={index}
                                className={cn(
                                    'overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group opacity-0 animate-fade-in-up',
                                    item.gridSpan,
                                )}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'forwards',
                                }}
                            >
                                <CardContent className="p-0 relative h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                                        <p className="text-white font-semibold">
                                            {item.alt}
                                        </p>
                                        <p className="text-xs text-stone-200">
                                            {item.category}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
