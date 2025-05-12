/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'work-rjkashyap.github.io'; // 🔁 Replace this with your actual GitHub repo name

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	basePath: isGithubPages ? `/${repoName}` : '',
	assetPrefix: isGithubPages ? `/${repoName}/` : '',
	experimental: {
		images: {
			unoptimized: true,
		},
	},
};

module.exports = nextConfig;
