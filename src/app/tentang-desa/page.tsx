import { TimelineSection } from '@/components/sections/timeline-section';
import { WisataSection } from '@/components/sections/wisata-section';
import { UmkmSection } from '@/components/sections/umkm-section';
import { KegiatanSection } from '@/components/sections/kegiatan-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tentang Desa',
    description:
        'Mengenal lebih dalam sejarah, potensi, dan kehidupan masyarakat Lubuk Begalung.',
};

export default function TentangDesaPage() {
    return (
        <>
            <section className="relative w-full py-12 md:py-20 lg:py-24 bg-primary/10 overflow-hidden bg-particle-animation">
                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary font-headline opacity-0 animate-fade-in-up">
                            Tentang Lubuk Begalung
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl opacity-0 animate-fade-in-up-staggered">
                            Secara historis, nama "Lubuk Begalung" berasal dari
                            kondisi geografisnya. "Lubuk" berarti bagian sungai
                            yang dalam, dan kawasan ini memang dialiri oleh
                            sungai besar bernama Batang Arau yang memiliki
                            banyak lubuk. Wilayah ini dulunya merupakan hamparan
                            persawahan yang subur dan menjadi salah satu lumbung
                            pangan bagi Kota Padang.
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
