import { type HTMLAttributes } from 'react';

type JsonLdProps = HTMLAttributes<HTMLScriptElement> & {
    data: object;
};

export function JsonLd({ data, ...props }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            {...props}
        />
    );
}
