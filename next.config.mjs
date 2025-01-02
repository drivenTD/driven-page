/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    if (!isServer) {
      config.infrastructureLogging = {
        level: "error"
      };
    }

    config.cache = {
      type: "memory"
    };

    return config;
  }
};

export default nextConfig;
