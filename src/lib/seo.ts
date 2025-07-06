import type { Metadata } from 'next';

export const siteConfig: Metadata = {
    metadataBase: new URL('https://begalung.vercel.app'),
    title: {
        default: 'Lubuk Begalung – Padang, Sumatera Barat',
        template: '%s | Lubuk Begalung',
    },
    description:
        'Website resmi Kecamatan Lubuk Begalung, Kota Padang – pusat informasi pemerintahan, budaya Minangkabau, pariwisata lokal, UMKM, dan perkembangan wilayah di jantung Sumatera Barat.',
    applicationName: 'Lubuk Begalung',
    authors: [
        {
            name: 'Pemerintah Kecamatan Lubuk Begalung',
            url: 'https://begalung.vercel.app',
        },
    ],
    creator: 'Pemerintah Kecamatan Lubuk Begalung',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        siteName: 'Lubuk Begalung',
        title: 'Lubuk Begalung – Padang, Sumatera Barat',
        description:
            'Jelajahi informasi, budaya, wisata, dan UMKM Kecamatan Lubuk Begalung di Kota Padang.',
        url: 'https://begalung.vercel.app',
        images: [
            {
                // Point to your dynamic OG image API instead of static og.png
                url: 'https://begalung.vercel.app/api/og',
                width: 1200,
                height: 630,
                alt: 'Panorama Lubuk Begalung, Padang',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@lubukbegalungpdg',
        creator: '@lubukbegalungpdg',
        title: 'Lubuk Begalung – Padang, Sumatera Barat',
        description:
            'Website resmi Kecamatan Lubuk Begalung, Kota Padang – budaya Minangkabau, wisata alam, UMKM, dan informasi terkini.',
        // Use the same dynamic endpoint for Twitter cards
        images: ['https://begalung.vercel.app/api/og'],
    },
    keywords: [
        'Lubuk Begalung',
        'Kecamatan Lubuk Begalung',
        'Padang',
        'Sumatera Barat',
        'Budaya Minangkabau',
        'Pariwisata Padang',
        'Wisata Alam Lubuk Begalung',
        'UMKM Padang',
        'Pemerintah Kecamatan Lubuk Begalung',
        'Sejarah Lubuk Begalung',
        'Kuliner Padang',
        'Event Lubuk Begalung',
        'Informasi Wilayah Padang',
    ],
    other: {
        'geo.region': 'ID-SB',
        'geo.placename': 'Lubuk Begalung, Padang',
        'geo.position': '-0.973462;100.366174',
        ICBM: '-0.973462, 100.366174',
        robots: 'index, follow',
        'theme-color': '#005f73',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-32x32.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};
