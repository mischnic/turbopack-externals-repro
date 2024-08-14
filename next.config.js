const nextConfig = {
  webpack: (webpackConfig, webpackOptions) => {
    const incomingWebpackConfig = webpackConfig
    return {
      ...incomingWebpackConfig,
      externals: [
        ...(incomingWebpackConfig?.externals || []),

        'libsql',
      ],
    }
  },
};

export default nextConfig;
