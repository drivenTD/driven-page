/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // SVG 파일을 React 컴포넌트로 변환
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // 개발 환경에서 불필요한 경고를 억제
    if (!isServer) {
      config.infrastructureLogging = {
        level: "error" // 경고를 숨기고 오류만 표시
      };
    }

    // 캐시 전략 수정 (메모리 캐시 사용)
    config.cache = {
      type: "memory" // 성능을 개선하면서 파일 캐시 대신 메모리 캐시 사용
    };

    return config;
  }
};

export default nextConfig;
