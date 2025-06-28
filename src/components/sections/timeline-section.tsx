import { Briefcase } from 'lucide-react';

const timelineData = [
    {
        year: 'Abad ke-14',
        title: 'Pendirian Awal',
        description:
            'Desa Bautkan diperkirakan didirikan oleh para pendatang dari Majapahit, mencari lahan baru untuk pertanian.',
    },
    {
        year: '1828',
        title: 'Masa Kolonial',
        description:
            'Belanda mulai memasuki wilayah Sumenep, membawa perubahan administrasi dan sistem tanam paksa di desa.',
    },
    {
        year: '1945',
        title: 'Kemerdekaan Indonesia',
        description:
            'Semangat kemerdekaan disambut gembira oleh masyarakat. Desa Bautkan resmi menjadi bagian dari Republik Indonesia.',
    },
    {
        year: '1980',
        title: 'Pembangunan Infrastruktur',
        description:
            'Pemerintah memulai pembangunan jalan aspal dan sekolah dasar, membuka akses dan meningkatkan pendidikan di desa.',
    },
    {
        year: '2010',
        title: 'Era Digital',
        description:
            'Internet dan teknologi mulai masuk ke desa, membuka peluang baru dalam komunikasi dan ekonomi bagi masyarakat Bautkan.',
    },
];

export function TimelineSection() {
    return (
        <section
            id="sejarah"
            className="w-full py-12 md:py-20 lg:py-24 bg-muted/50"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Sejarah Desa
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Melacak jejak langkah dan peristiwa penting yang
                            membentuk Desa Bautkan dari masa ke masa.
                        </p>
                    </div>
                </div>
                <div className="relative mt-12 max-w-5xl mx-auto before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex justify-between items-center w-full mb-8 last:mb-0 md:[&:nth-child(odd)]:flex-row-reverse"
                        >
                            <div className="hidden md:block w-5/12"></div>
                            <div className="z-10 flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="w-full md:w-5/12 p-4 rounded-lg shadow-md bg-card">
                                <h3 className="font-bold text-lg text-primary">
                                    {item.year}
                                </h3>
                                <p className="font-semibold mt-1">
                                    {item.title}
                                </p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
