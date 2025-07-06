import { Briefcase, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export const timelineData = [
    {
        id: 1,
        year: 'Abad ke-16',
        title: 'Migrasi dari Solok',
        description:
            'Penduduk dari daerah Solok (X Koto Di Atas/Bawah, Kubung Tiga Belas, Bandar Sepuluh) bermigrasi dan menetap di Lubuk Begalung melalui jalur Gantung Ciri dan Bukit Tunggu.',
        reference: {
            label: 'Sejarah Kota Padang (Wikisource)',
            url: 'https://id.wikisource.org/wiki/Halaman%3ASEJARAH_KOTA_PADANG.pdf/16',
        },
    },
    {
        id: 2,
        year: '1916',
        title: 'Pembangunan Mercusuar Bukit Lampu',
        description:
            'Kolonial Belanda membangun mercusuar di Bukit Lampu sebagai panduan navigasi kapal ke Pelabuhan Emma Haven (Teluk Bayur).',
        reference: {
            label: 'RRI: Mercusuar Bukit Lampu',
            url: 'https://rri.co.id/index.php/wisata/712293/mercusuar-bukit-lampu-padang-jejak-sejarah-yang-terlupakan',
        },
    },
    {
        id: 3,
        year: '21 Maret 1980',
        title: 'Penggabungan ke Kota Padang',
        description:
            'Lubuk Begalung resmi menjadi bagian administratif Kota Padang melalui PP No. 17 Tahun 1980.',
        reference: {
            label: 'Wikipedia: Lubuk Begalung',
            url: 'https://id.wikipedia.org/wiki/Lubuk_Begalung%2C_Padang',
        },
    },
    {
        id: 4,
        year: '1981',
        title: 'Relokasi PT Teluk Luas',
        description:
            'PT Teluk Luas memindahkan pabrik karet ke Tanjung Saba Pitameh, Lubuk Begalung, yang mulai beroperasi dan menyerap tenaga kerja lokal.',
        reference: {
            label: 'UPGRISBA Repository',
            url: 'https://repo.upgrisba.ac.id/id/eprint/6709/',
        },
    },
    {
        id: 5,
        year: '30 September 2009',
        title: 'Gempa Besar Sumatera Barat',
        description:
            'Gempa berkekuatan 7,6 SR mengguncang Sumatera Barat, termasuk Lubuk Begalung—mengakibatkan kerusakan signifikan infrastruktur dan rumah.',
        reference: {
            label: 'Wikipedia: Kota Padang (Geografi)',
            url: 'https://id.wikipedia.org/wiki/Kota_Padang#Geografi',
        },
    },
    {
        id: 6,
        year: '2020–2025',
        title: 'Modernisasi Infrastruktur & UMKM',
        description:
            'Peningkatan jalan, jalur sepeda, fasilitas publik, serta tumbuhnya UMKM dan ekonomi kreatif di Lubuk Begalung mendukung modernisasi kecamatan.',
        reference: {
            label: 'UINIB Repository (Hayani, 2025)',
            url: 'https://repository.uinib.ac.id/25664/3/Puti%20Sabrina%20Hayani%20NIM%202113010076.%20BAB%20III.pdf',
        },
    },
];

export function TimelineSection() {
    return (
        <section
            id="sejarah"
            className="relative w-full py-12 md:py-20 lg:py-24 bg-muted/50 overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-primary opacity-0 animate-fade-in-up">
                        Sejarah Lubuk Begalung
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl opacity-0 animate-fade-in-up animate-fade-in-up-delay">
                        Melacak jejak langkah dan peristiwa penting yang
                        membentuk kecamatan ini.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-12 max-w-5xl mx-auto before:absolute before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-border">
                    {timelineData.map((item, idx) => (
                        <div
                            key={item.id}
                            className={cn(
                                'relative flex items-center w-full mb-8 last:mb-0 opacity-0 group',
                                idx % 2 === 0
                                    ? 'animate-slide-in-left'
                                    : 'md:animate-slide-in-right',
                                idx % 2 !== 0 && 'md:flex-row-reverse',
                            )}
                            style={{
                                animationDelay: `${idx * 200 + 300}ms`,
                                animationFillMode: 'forwards',
                            }}
                        >
                            {/* Spacer */}
                            <div className="hidden md:block w-5/12" />

                            {/* Icon */}
                            <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <Briefcase className="w-5 h-5" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 p-6 bg-card rounded-lg border transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                                <h3 className="font-bold text-lg text-primary">
                                    {item.year}
                                </h3>
                                <p className="font-semibold mt-1">
                                    {item.title}
                                </p>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {item.description}{' '}
                                    <sup
                                        className="text-blue-600 font-bold group-hover:text-blue-800 cursor-pointer"
                                        title={item.reference.label}
                                    >
                                        [{item.id}]
                                    </sup>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reference Section */}
                <div className="mt-20 max-w-5xl mx-auto">
                    <h4 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Referensi Historis
                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">
                        {timelineData.map((item) => (
                            <a
                                key={item.id}
                                href={item.reference.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-5 rounded-lg border bg-background hover:bg-muted transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
                                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                        [{item.id}] {item.reference.label}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
