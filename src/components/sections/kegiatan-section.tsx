import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';

const kegiatanData = [
    {
        title: 'Masjid Al Khair Padang',
        description:
            'Masjid Al Khair menjadi pusat kegiatan spiritual dan sosial.',
        image: '/kegiatan/masjid.jpg',
        hint: 'community work',
        mapUrl: 'https://maps.app.goo.gl/F2dcfoBRerQYQMfA8',
    },
    {
        title: 'Lapangan Bola Cengkeh',
        description:
            'Lapangan Bola Cengkeh menjadi tempat favorit warga untuk bermain sepak bola, berolahraga sore, dan berkumpul bersama komunitas lokal.',
        image: '/kegiatan/lapangan-bola.jpg',
        hint: 'people praying',
        mapUrl: 'https://maps.app.goo.gl/MrgJdTU17YKP2T439',
    },
    {
        title: 'Veledrome Rimbo Data',
        description:
            'Velodrome Rimbo Data menjadi pusat kegiatan olahraga bersepeda dan pelatihan atlet lokal.',
        image: '/kegiatan/veledrome.jpg',
        hint: 'cycling track',
        mapUrl: 'https://maps.app.goo.gl/yEjWLPgoYEZ9xFJKA',
    },
];

export function KegiatanSection() {
    return (
        <section id="kegiatan" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Aktivitas Komunitas & Ruang Publik
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Masjid sebagai pusat spiritual, lapangan sebagai
                            tempat berkumpul generasi muda, dan velodrome untuk
                            menyalurkan hobi olahraga semuanya menjadi bagian
                            dari identitas warga lokal.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {kegiatanData.map((item, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                        >
                            <CardContent className="p-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    data-ai-hint={item.hint}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                            </CardContent>

                            <CardHeader className="space-y-3">
                                <div>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription className="pt-2 text-muted-foreground">
                                        {item.description}
                                    </CardDescription>
                                </div>

                                <a
                                    href={item.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm font-medium text-blue-600 hover:underline mt-2"
                                >
                                    📍 Lihat di Peta
                                </a>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
