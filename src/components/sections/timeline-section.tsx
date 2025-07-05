import { Briefcase } from 'lucide-react';

const timelineData = [
    {
        year: 'Awal Abad ke-19',
        title: 'Pembentukan Awal & Jalur Perdagangan',
        description:
            'Kawasan ini mulai dikenal sebagai jalur vital yang menghubungkan Padang dengan daerah penghasil lada dan kopi di selatan (Pesisir Selatan). Nama "Lubuk Begalung" diperkirakan berasal dari kondisi geografis Sungai Batang Arau yang memiliki banyak lubuk (bagian sungai yang dalam).',
    },
    {
        year: '1906',
        title: 'Pembangunan Jalur Kereta Api',
        description:
            'Pemerintah Hindia Belanda membangun jalur kereta api Pulau Air-Padang Panjang yang melintasi area ini. Kehadiran rel kereta api memperkuat posisi Lubuk Begalung sebagai koridor transportasi penting dan memicu pertumbuhan pemukiman di sekitarnya.',
    },
    {
        year: 'Era 1980-an',
        title: 'Transformasi Menjadi Kawasan Industri',
        description:
            'Pemerintah Kota Padang menetapkan Lubuk Begalung sebagai salah satu kawasan industri. Pabrik-pabrik besar seperti pengolahan karet dan CPO mulai dibangun, mengubah lanskap dari area agraris menjadi pusat industri dan pergudangan utama di Padang.',
    },
    {
        year: '30 September 2009',
        title: 'Terdampak Gempa Besar Sumatera Barat',
        description:
            'Seperti wilayah Padang lainnya, Lubuk Begalung turut mengalami dampak signifikan dari gempa bumi berkekuatan 7,6 SR. Peristiwa ini mendorong perbaikan infrastruktur dan peningkatan kesadaran mitigasi bencana di kalangan masyarakat.',
    },
    {
        year: '2015 - Sekarang',
        title: 'Pusat Ekonomi dan Pemukiman Padat',
        description:
            'Lubuk Begalung mengukuhkan posisinya sebagai salah satu kecamatan terpadat dan pusat ekonomi strategis di Kota Padang, dengan perpaduan industri, perdagangan, jasa, kuliner, dan pemukiman yang terus berkembang pesat.',
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
                            Denyut Nadi Ekonomi dan Gerbang Selatan Kota Padang.
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
