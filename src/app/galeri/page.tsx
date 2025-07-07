import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Galeri',
    description:
        'Menyaksikan keindahan alam, budaya, dan momen-momen berharga di Lubuk Begalung melalui lensa kamera.',
};

const galleryData = [
    {
        src: '/galeri/alam-1.jpg',
        alt: 'Pemandangan sawah di pagi hari',
        hint: 'rice field morning',
        category: 'Alam',
    },
    {
        src: '/galeri/budaya-1.jpg',
        alt: 'Upacara adat desa',
        hint: 'village ceremony',
        category: 'Budaya',
    },
    {
        src: '/galeri/masyarakat-1.jpg',
        alt: 'Anak-anak bermain di sungai',
        hint: 'children playing river',
        category: 'Masyarakat',
    },
    {
        src: '/galeri/alam-2.jpg',
        alt: 'Air terjun yang tersembunyi',
        hint: 'hidden waterfall',
        category: 'Alam',
    },
    {
        src: '/galeri/budaya-2.jpg',
        alt: 'Pengrajin batik sedang bekerja',
        hint: 'batik maker',
        category: 'Budaya',
    },
    {
        src: '/galeri/masyarakat-2.jpg',
        alt: 'Warga bergotong royong',
        hint: 'community work',
        category: 'Masyarakat',
    },
    {
        src: '/galeri/alam-3.jpg',
        alt: 'Matahari terbit di atas bukit',
        hint: 'sunrise hill',
        category: 'Alam',
    },
    {
        src: '/galeri/budaya-3.jpg',
        alt: 'Pertunjukan tari tradisional',
        hint: 'traditional dance',
        category: 'Budaya',
    },
    {
        src: '/galeri/masyarakat-3.jpg',
        alt: 'Suasana pasar desa',
        hint: 'village market',
        category: 'Masyarakat',
    },
];

export default function GaleriPage() {
    return (
        <>
            <section className="relative w-full py-12 md:py-20 lg:py-24 bg-primary/10 overflow-hidden bg-particle-animation">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary font-headline opacity-0 animate-fade-in-up">
                            Galeri Populer
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl opacity-0 animate-fade-in-up-staggered">
                            Menyaksikan keindahan alam, budaya, dan momen-momen
                            berharga melalui lensa kamera.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="gallery-content"
                className="w-full py-12 md:py-20 lg:py-24"
            >
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {galleryData.map((item, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <CardContent className="p-0 relative">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        data-ai-hint={item.hint}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
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
