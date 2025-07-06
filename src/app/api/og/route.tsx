// src/app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export function GET(req: NextRequest) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '1200px',
                    height: '630px',
                    backgroundColor: '#005f73',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: 60,
                    fontWeight: 'bold',
                }}
            >
                Lubuk Begalung, Padang
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
