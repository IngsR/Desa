import { Building } from 'lucide-react';

const kelurahanList = [
    'Kampung Baru Nan XX',
    'Pampangan Nan XX',
    'Koto Baru Nan XX',
    'Tanjung Aur Nan XX',
    'Gurun Lawas Nan XX',
    'Banuaran Nan XX',
    'Lubuk Begalung Nan XX',
    'Cengkeh Nan XX',
    'Gates Nan XX',
    'Pangambiran Ampalu Nan XX',
    'Parak Laweh Pulau Air Nan XX',
    'Pitameh Tanjung Saba Nan XX',
    'Tanah Sirah Piai Nan XX',
    'Kampung Jua Nan XX',
    'Batung Taba Nan XX',
];

export function KelurahanSection() {
    return (
        <section
            id="kelurahan"
            className="w-full py-12 md:py-20 lg:py-24 bg-background"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary">
                        Wilayah Administratif
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-2xl">
                        Kecamatan Lubuk Begalung terdiri dari 15 kelurahan yang
                        menjadi pusat komunitas dan pemerintahan lokal.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {kelurahanList.map((kelurahan, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors duration-200 shadow-sm hover:shadow-md"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Building className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                {kelurahan}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
