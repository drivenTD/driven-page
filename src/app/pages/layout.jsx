import "@/styles/global.scss";
import "@/styles/font.scss";

export const metadata = {
  title: "Driven-드리븐 | 빅데이터 퍼포먼스마케팅 전문기업",
  description:
    "웹&앱에서 정확한 고객행동 데이터 수집과 창의적이고 최적화된 캠페인을 서비스하여 구글,유튜브,메타,틱톡 공식 대행사로서 퍼포먼스 인증을 받은 애드테크 전문IT기업",
  openGraph: {
    title: "Driven-드리븐 | 빅데이터 퍼포먼스마케팅 전문기업",
    description:
      "웹&앱에서 정확한 고객행동 데이터 수집과 창의적이고 최적화된 캠페인을 서비스하여 구글,유튜브,메타,틱톡 공식 대행사로서 퍼포먼스 인증을 받은 애드테크 전문IT기업",
    url: "https://www.driven.co.kr",
    images: [
      {
        url: "https://www.driven.co.kr/thum_img/driven/og_img/kakao_og_img_12001650954600.png",
        width: 800,
        height: 600,
        alt: "이미지 설명"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: "Driven-드리븐 | 빅데이터 퍼포먼스마케팅 전문기업",
    description:
      "웹&앱에서 정확한 고객행동 데이터 수집과 창의적이고 최적화된 캠페인을 서비스하여 구글,유튜브,메타,틱톡 공식 대행사로서 퍼포먼스 인증을 받은 애드테크 전문IT기업",
    images: [
      "https://www.driven.co.kr/thum_img/driven/og_img/kakao_og_img_12001650954600.png"
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <div className="radialGradBg default">
        <img src="/image/radialGrad.png" alt="" />
      </div>
      <div className="radialGradBg portfolio">
        <img src="/image/radialGradBlack.png" alt="" />
      </div>
    </>
  );
}
