'use client';

import { Menu, Mountain } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/tentang-desa', label: 'Tentang Desa' },
        { href: '/galeri', label: 'Galeri' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-headline text-xl">
                        Lubuk Begalung
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                'group relative transition-colors hover:text-primary',
                                pathname === link.href
                                    ? 'text-primary'
                                    : 'text-muted-foreground',
                            )}
                        >
                            {link.label}
                            <span
                                className={cn(
                                    'absolute bottom-[-6px] left-0 h-0.5 w-full origin-center scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100',
                                    pathname === link.href && 'scale-x-100',
                                )}
                            />
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Buka menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle className="sr-only">
                                    Menu Navigasi
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="grid gap-6 text-lg font-medium mt-6">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 font-bold text-lg mb-4"
                                >
                                    <Mountain className="h-6 w-6 text-primary" />
                                    <span className="font-headline">
                                        Bautkan Digital
                                    </span>
                                </Link>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            'transition-colors hover:text-primary',
                                            pathname === link.href
                                                ? 'text-foreground'
                                                : 'text-muted-foreground',
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
