/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			unoptimized: true,
		},
	},
	basePath: '',
	assetPrefix: '',
};

module.exports = nextConfig;
