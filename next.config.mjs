/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 정적 파일로 출력
  assetPrefix: "./", // 상대 경로 설정 (GitHub Pages에서 사용)
  images: {
    unoptimized: true // 이미지 최적화 비활성화 (정적 모드에서 필요)aa
  },
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
