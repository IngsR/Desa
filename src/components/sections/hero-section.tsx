import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="relative w-full h-[calc(100vh-56px)] max-h-[720px] flex items-center justify-center">
            <Image
                src="/hero-banner.jpg"
                alt="Pemandangan Lubuk Begalung"
                data-ai-hint="village panorama"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 text-center px-4 md:px-6">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white font-headline drop-shadow-lg">
                    Selamat Datang Website Lubuk Begalung
                </h1>
                <p className="mt-6 max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl text-stone-100 drop-shadow-md">
                    Sambut keasrian alam dan budaya Minangkabau di kecamatan
                    Lubuk Begalung, Padang. Di sini, Anda bisa merasakan
                    agrowisata hijau, mencicipi hidangan tradisional, belajar
                    pengobatan herbal, dan melihat langsung praktik pertanian
                    subur dari petani lokal.
                </p>
            </div>
        </section>
    );
}
