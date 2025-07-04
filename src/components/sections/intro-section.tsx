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
                            Jelajahi Pesona Lubuk Begalung
                        </h2>
                        <div className="relative max-w-[900px] mx-auto">
                            <div
                                className={cn(
                                    'overflow-hidden transition-[max-height] duration-700 ease-in-out',
                                    !isExpanded ? 'max-h-24' : 'max-h-96',
                                )}
                            >
                                <p className="text-muted-foreground md:text-xl lg:text-2xl">
                                    Lubuk Begalung adalah kecamatan yang berada
                                    di Kota Padang, Sumatera Barat, Indonesia.
                                    Dalam wilayah adat Minangkabau, Lubuk
                                    Begalung merupakan sebuah kenagarian bernama
                                    Nagari Nan XX atau Nagari Nan
                                    Duopuluah,Sebelumnya wilayah kecamatan ini
                                    masuk ke dalam wilayah kabupaten Padang
                                    Pariaman, tetapi berdasarkan PP nomor 17
                                    tahun 1980, sejak 21 Maret 1980 menjadi
                                    wilayah administrasi kota Padang.
                                </p>
                            </div>
                            {!isExpanded && (
                                <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-background to-transparent"></div>
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
