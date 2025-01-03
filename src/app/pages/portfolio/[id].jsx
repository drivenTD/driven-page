import portfolios from "@/components/Sub/Portfolio/portfolioData";

// 상세 페이지 렌더링
const PortfolioDetail = ({ portfolio }) => {
  if (!portfolio) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{portfolio.title}</h1>
      <p>{portfolio.description}</p>
    </div>
  );
};

// 경로 목록 생성 (getStaticPaths)
export async function getStaticPaths() {
  const paths = portfolios.map((portfolio) => ({
    params: { id: portfolio.id.toString() } // id를 문자열로 변환
  }));

  return {
    paths,
    fallback: false // 페이지가 없으면 404 페이지로 이동
  };
}

// 각 경로에 맞는 포트폴리오 데이터 가져오기 (getStaticProps)
export async function getStaticProps({ params }) {
  const portfolio = portfolios.find((p) => p.id === params.id);

  if (!portfolio) {
    return {
      notFound: true // 포트폴리오가 없으면 404 페이지 표시
    };
  }

  return {
    props: { portfolio }
  };
}

export default PortfolioDetail;
