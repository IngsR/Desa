import { TimelineSection } from '@/components/sections/timeline-section';
import { WisataSection } from '@/components/sections/wisata-section';
import { UmkmSection } from '@/components/sections/umkm-section';
import { KegiatanSection } from '@/components/sections/kegiatan-section';

export default function TentangDesaPage() {
    return (
        <>
            <section className="relative w-full py-12 md:py-20 lg:py-24 bg-primary/10 overflow-hidden bg-particle-animation">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary font-headline opacity-0 animate-fade-in-up">
                            Tentang Desa Bautkan
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl opacity-0 animate-fade-in-up-staggered">
                            Mengenal lebih dalam sejarah, potensi, dan kehidupan
                            masyarakat Desa Bautkan.
                        </p>
                    </div>
                </div>
            </section>

            <TimelineSection />
            <WisataSection />
            <UmkmSection />
            <KegiatanSection />
        </>
    );
}
