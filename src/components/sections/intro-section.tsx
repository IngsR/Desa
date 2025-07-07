'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IntroSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Lubuk Begalung: Nagari dalam Kota, Warisan
                            Minangkabau yang Hidup
                        </h2>

                        <div className="relative max-w-[900px] mx-auto">
                            <div
                                className={cn(
                                    'overflow-hidden transition-[max-height] duration-700 ease-in-out',
                                    !isExpanded ? 'max-h-24' : 'max-h-[1200px]',
                                )}
                            >
                                <div className="text-muted-foreground md:text-xl lg:text-2xl space-y-4 text-left transition-opacity duration-500 ease-in-out">
                                    <p>
                                        Lubuk Begalung bukan sekadar sebuah
                                        kecamatan administratif di Kota Padang,
                                        Sumatera Barat. Ia merupakan jejak hidup
                                        dari sebuah nagari yang tetap bertahan
                                        di tengah arus modernitas kota. Dalam
                                        tatanan adat Minangkabau, wilayah ini
                                        dikenal sebagai Nagari Nan XX atau
                                        Nagari Nan Duopuluah sebuah identitas
                                        sosial dan budaya yang masih lestari
                                        hingga hari ini.
                                    </p>

                                    <p>
                                        Dahulu, Lubuk Begalung termasuk dalam
                                        wilayah Kabupaten Padang Pariaman.
                                        Namun, seiring perkembangan wilayah dan
                                        kebutuhan administrasi, berdasarkan
                                        Peraturan Pemerintah Nomor 17 Tahun
                                        1980, kawasan ini resmi menjadi bagian
                                        dari Kota Padang sejak 21 Maret 1980.
                                    </p>

                                    <p>
                                        Meskipun telah bertransformasi menjadi
                                        bagian dari kota, semangat nagari tetap
                                        hidup di tengah masyarakat. Nilai gotong
                                        royong, adat basandi syarak, serta
                                        sistem kekerabatan masih menjadi bagian
                                        penting dalam kehidupan sehari-hari. Di
                                        Lubuk Begalung, tradisi Minangkabau
                                        tidak hanya dikenang tetapi dijalani,
                                        dijaga, dan diwariskan lintas generasi.
                                    </p>
                                </div>
                            </div>

                            {!isExpanded && (
                                <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-background to-transparent pointer-events-none" />
                            )}
                        </div>

                        <Button
                            variant="link"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-base text-primary hover:text-primary/90 hover:no-underline"
                        >
                            {isExpanded
                                ? 'Tampilkan lebih sedikit'
                                : 'Tampilkan lebih banyak'}
                            <ChevronDown
                                className={cn(
                                    'ml-1 h-5 w-5 transition-transform duration-300',
                                    isExpanded && 'rotate-180',
                                )}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
