import { Menu, Mountain } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg">
                        Bautkan Digital
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                    <Link
                        href="/"
                        className="transition-colors hover:text-primary"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="/tentang-desa"
                        className="transition-colors hover:text-primary text-foreground/60"
                    >
                        Tentang Desa
                    </Link>
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
                            <SheetHeader className="sr-only">
                                <SheetTitle>Menu Navigasi</SheetTitle>
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
                                <Link
                                    href="/"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Beranda
                                </Link>
                                <Link
                                    href="/tentang-desa"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Tentang Desa
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
