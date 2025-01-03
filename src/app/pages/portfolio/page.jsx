import Link from "next/link";
import portfolios from "@/components/Sub/Portfolio/portfolioData";

const PortfolioList = () => {
  return (
    <div>
      <h1>포트폴리오 리스트</h1>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            {/* 링크 경로 수정: /pages/portfolio/${portfolio.id} */}
            <Link href={`/pages/portfolio/${portfolio.id}`}>
              {portfolio.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
