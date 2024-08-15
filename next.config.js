/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig) => {
    const incomingWebpackConfig = webpackConfig;
    return {
      ...incomingWebpackConfig,
      externals: [
        ...(incomingWebpackConfig?.externals || []),
        "drizzle-orm",
        "drizzle-orm/version",
      ],
    };
  },
  serverExternalPackages: ["drizzle-orm", "drizzle-orm/version"],
};

export default nextConfig;
