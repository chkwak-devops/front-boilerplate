/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: "/proxy/api/:path*",
                destination: "http://epad-backend:8080/api/v1/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
