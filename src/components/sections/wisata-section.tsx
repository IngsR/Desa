import Image from 'next/image';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';

const wisataData = [
    {
        title: 'Sungai Batang Arau',
        description:
            'Sungai Batang Arau di Padang menawarkan pesona air yang jernih dan aliran tenang, dikelilingi perbukitan hijau yang menyejukkan. Destinasi alam ini cocok untuk relaksasi, dan menikmati keindahan alam Sumatera Barat.',
        image: '/wisata/air-terjun.jpg',
        hint: 'waterfall nature',
        mapUrl: 'https://maps.app.goo.gl/X5hAVsC165Ryq2h1A',
    },
    {
        title: 'Bukit Nobita',
        description:
            'Nikmati pemandangan 360 derajat Kota Padang dari Bukit Nobita, destinasi wisata hits di Lubuk Begalung. Tempat ini menjadi spot favorit untuk menyaksikan sunrise memukau hingga gemerlap lampu kota di malam hari. Ideal untuk spot foto instagramable dan bersantai di Padang, Sumbar.',
        image: '/wisata/bukit-nobita.jpg',
        hint: 'hill sunrise',
        mapUrl: 'https://maps.app.goo.gl/rmxqNKfs6oY3j6BdA',
    },
    {
        title: 'Sawah Terasering',
        description:
            'Hamparan sawah terasering yang hijau dan menenangkan di Lubuk Begalung, Padang. Kawasan ini menawarkan panorama pedesaan yang asri, cocok sebagai destinasi agrowisata dan wisata keluarga di Sumatera Barat.',
        image: '/wisata/sawah-terasering.jpg',
        hint: 'rice paddies',
        mapUrl: 'https://maps.app.goo.gl/fqo6PR9qn4VFP19m7',
    },
];

export function WisataSection() {
    return (
        <section id="wisata" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                            Pesona Wisata Lubuk Begalung
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                            Temukan keindahan wisata yang memukau, indah dan
                            asri
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {wisataData.map((item, index) => (
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
                                    📍 Lihat Lokasi
                                </a>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
