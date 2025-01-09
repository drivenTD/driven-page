import styles from "./Culture.module.scss";

export default function Culture() {
  const communicationDate = [
    {
      label: "익명 게시판",
      description:
        "전하고 싶지만 말하기 어려운 이야기나 건의사항을 익명으로 제출할 수 있는 익명게시판을 운영합니다."
    },
    {
      label: "월 1회 전사회의",
      description:
        "팀원들과 업무 공유를 하고 자유로운 의견을 제시하며 소통하는 문화를 형성합니다."
    },
    {
      label: "연 1회 신년세미나",
      description:
        "한 해 고생한 팀원들을 격려하며 목표를 공유하며 의지를 다집니다."
    },
    {
      label: "전사 워크샵",
      description:
        "다양한 행사를 통해 팀워크를 도모하며 건강한 사내문화를 형성합니다."
    }
  ];

  const growthDate = [
    {
      label: "사내 도서관",
      description:
        "필요한 지식을 공유할 수 있는 사내 도서관을 운영을 통해 도서 구입비를 지원합니다."
    },
    {
      label: "멘토 / 멘티",
      description:
        "신입사원 역량개발을 위한 교율을 제공하며, 멘토/멘티제도를 통해 회사 조기 적응을 유도합니다."
    },
    {
      label: "전략미팅",
      description:
        "아이디어 공유 및 네트워킹을 통해 전략적인 업무 수행을 돕습니다."
    },
    {
      label: "수습평가 / 다면평가",
      description:
        "미래형 리더 육성 및 성과지향 기업문화를 바탕으로 수습평가/ 다면평가 제도를 운영합니다."
    }
  ];

  const welfareData = [
    {
      label: "분기 성과급 지급",
      labelEn: "Quarterly<br/>Performance<br/>Bonus",
      desc: "장기 근속자에게 필요한 특별선물이에요"
    },
    {
      label: "우수사원 포상",
      labelEn: "Employee<br/>Recognition<br/>Program",
      desc: "직원의 건강은 우리가 책임져요"
    },
    {
      label: "스톡옵션 제공",
      labelEn: "Stock Option<br/>Program",
      desc: "자유로운 복장으로 업무효율을 높여요"
    },
    {
      label: "건강검진",
      labelEn: "Health<br/> Checkup",
      desc: "분기별 성과급을 통해 확실한 보상을 해요"
    },
    {
      label: "자유복장",
      labelEn: "Casual Dress<br/> Code",
      desc: "우수사원 시상을 통해 칭찬해요"
    },
    {
      label: "생일자 선물",
      labelEn: "Birthday Gifts",
      desc: "생일자 축하는 우리가 담당해요"
    },
    {
      label: "장기근속 포상",
      labelEn: "Long-Service<br/>Award",
      desc: "다양한 음료와 간식으로 배를 든든하게!"
    },
    {
      label: "간식바",
      labelEn: "Snack Bar",
      desc: "직원들의 열정에 보답하고 싶어요"
    },
    {
      label: "자기계발 지원",
      labelEn: "Self-Development Support",
      desc: "열일한 당신에게 유급휴가를 지급해요"
    },
    {
      label: "명절선물",
      labelEn: "Holiday Gifts",
      desc: "교육비 및 자격증 취득비용을 지원해요"
    }
  ];

  return (
    <section className={styles.cultureSection}>
      <div className={`${styles.flexWrap} container`}>
        <div className="col-lg-2 col-md-1 col-xs-2 col-span-15 motion scaleUp">
          <p className={styles.pageTit} lang="en">
            COMPANY
            <br />
            CULTURE
          </p>
        </div>
        <div
          className={`${styles.listBox} col-lg-3 col-md-3 col-xs-2 col-span-15`}
        >
          <p className={`${styles.tit} motion scaleUp`}>소통하는 문화</p>
          {communicationDate.map((list, index) => (
            <dl key={index} className="motion scaleUp">
              <dt dangerouslySetInnerHTML={{ __html: list.label }} />
              <dd dangerouslySetInnerHTML={{ __html: list.description }} />
            </dl>
          ))}
        </div>
      </div>

      <div className={`${styles.flexWrap} ${styles.secondBox} container`}>
        <div className={`${styles.listBox} col-lg-3 col-md-3 col-span-15`}>
          <p className={`${styles.tit} motion scaleUp`}>성장하는 문화</p>
          {growthDate.map((list, index) => (
            <dl key={index} className="motion scaleUp">
              <dt dangerouslySetInnerHTML={{ __html: list.label }} />
              <dd dangerouslySetInnerHTML={{ __html: list.description }} />
            </dl>
          ))}
        </div>
      </div>

      <div className="container">
        <ul className={`${styles.dataLists}`}>
          {welfareData.map((item, index) => (
            <li
              className={`${styles.item} col-lg-1 col-md-1 col-xs-1 col-span-15 motion scaleUp`}
              key={index}
            >
              <div className={styles.itemWrap}>
                <div className={styles.headCont}>
                  <span>{item.label}</span>
                  <p
                    lang="en"
                    dangerouslySetInnerHTML={{ __html: item.labelEn }} // 여기에서 HTML을 렌더링
                  />
                </div>
                <div className={styles.bodyCont}>{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
