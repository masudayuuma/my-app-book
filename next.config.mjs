/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActioosn: true,
    },
    images: {
        remotoPatterns: [
            {
                hostname: 'books.google.com'
            },
        ]
    },
};

export default nextConfig;
