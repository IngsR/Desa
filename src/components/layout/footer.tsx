'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            <footer className="bg-muted/50 w-full border-t">
                <div className="container px-4 md:px-6 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="flex flex-col items-start gap-4">
                            <Link
                                href="/"
                                className="flex items-center gap-2 font-bold"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Lubuk Begalung Logo"
                                    width={24}
                                    height={24}
                                />
                                <span className="font-headline text-lg">
                                    Lubuk Begalung
                                </span>
                            </Link>
                            <p className="text-muted-foreground text-base max-w-xs">
                                Portal digital untuk informasi, pariwisata, dan
                                layanan masyarakat Kec. Lubuk begalung.
                            </p>
                            <div className="mt-4">
                                <h3 className="font-semibold text-base mb-4">
                                    Media Sosial
                                </h3>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="#"
                                        aria-label="X"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <svg
                                            viewBox="0 0 1200 1227"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6902H308.864L607.411 515.117L655.018 583.178L1055.03 1154.51H890.176L569.165 687.854V687.828Z" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="Facebook"
                                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </Link>
                                    <Link
                                        href="#"
                                        aria-label="Instagram"
                                        className="text-muted-foreground hover:text-pink-500 transition-colors"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-base mb-4">
                                Hubungi Kami
                            </h3>
                            <div className="flex flex-col gap-3 text-muted-foreground text-base">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                    <span>
                                        Kecamatan Lubuk Begalung, Kota Padang,
                                        Sumatra Barat, Indonesia.
                                    </span>
                                </div>
                                <a
                                    href="mailto:info@bautkan.desa.id"
                                    className="flex items-center gap-3 group"
                                >
                                    <Mail className="h-4 w-4 shrink-0" />
                                    <span className="group-hover:text-primary transition-colors">
                                        info@lubeg.ac.id
                                    </span>
                                </a>
                                <a
                                    href="tel:+621234567890"
                                    className="flex items-center gap-3 group"
                                >
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span className="group-hover:text-primary transition-colors">
                                        +62 123 456 7890
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-muted/80 py-4">
                    <div className="container flex items-center justify-center px-4 md:px-6">
                        <p className="text-base text-muted-foreground text-center">
                            © 2025{' '}
                            <a
                                href="https://github.com/IngsR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                IngsR
                            </a>
                            . Hak Cipta Dilindungi.
                        </p>
                    </div>
                </div>
            </footer>

            <div className="fixed bottom-5 right-5 z-50">
                <Button
                    size="icon"
                    onClick={scrollToTop}
                    className={cn(
                        'bg-primary/80 hover:bg-primary text-primary-foreground rounded-full shadow-lg transition-opacity duration-300',
                        isVisible ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-label="Kembali ke atas"
                >
                    <ChevronUp className="h-6 w-6" />
                </Button>
            </div>
        </>
    );
}
