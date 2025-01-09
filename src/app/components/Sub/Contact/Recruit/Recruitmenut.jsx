import Link from "next/link";
import styles from "./Recruitmenut.module.scss";

import ButtonIco from "@/image/global/button/button-ico-round.svg";

export default function Recruitmenut() {
  const recruitmenutData = [
    {
      label: "입사지원",
      labelEn: "Application",
      desc: "구직자가 회사에 취업을 위해 지원서를 제출하는 과정입니다.",
      classList: "col-lg-1 col-md-2 col-xs-1"
    },
    {
      label: "서류전형",
      labelEn: "Document<br/>Screening",
      desc: "지원자가 제출한 서류를 바탕으로 적합한 후보자를 선별하는 과정입니다.",
      classList: "col-lg-1 col-md-2 col-xs-1"
    },
    {
      label: "면접전형",
      labelEn: "Interview",
      desc: "서류전형을 통과한 지원자와 직접 면담을 통해 직무 적합성 등을 평가하는 과정입니다.",
      classList: "col-lg-1 col-md-2 col-xs-1"
    },
    {
      label: "최종합격",
      labelEn: "Final Acceptance",
      desc: "모든 전형을 통과한 지원자가 최종적으로 채용이 결정되는 단계입니다.",
      classList: "col-lg-1 col-md-2 col-xs-1"
    },
    {
      label: "드리븐과 함께",
      labelEn: "Together with Driven",
      desc: "드리븐은 여러분의 창의력과 열정을 발휘할 수 있는 환경을 제공합니다.",
      classList: "col-lg-1 col-md-4 col-xs-2"
    }
  ];

  return (
    <section className={styles.recruitmenutSection}>
      <div className={`${styles.flexWrap} container`}>
        <div className="col-lg-4 col-md-3 col-xs-2 col-span-15 motion scaleUp">
          <p className={styles.pageTit} lang="en">
            RECRUITMENT
            <br />
            PROCESS
          </p>
        </div>
        <div
          className={`${styles.buttonWrap} col-lg-1 col-md-1 col-xs-2 col-xs-span-1 `}
        >
          <Link
            href="https://www.saramin.co.kr/zf_user/"
            target="_blank"
            className={`${styles.btn} btn-line motion scaleUp`}
          >
            <span>Visit Saramin</span>
            <ButtonIco />
          </Link>

          <Link
            href="https://www.jobkorea.co.kr/"
            target="_blank"
            className={`${styles.btn} btn-line motion scaleUp`}
          >
            <span>Visit JobKorea</span>
            <ButtonIco />
          </Link>

          <Link
            href="https://www.jobda.im/"
            target="_blank"
            className={`${styles.btn} btn-line motion scaleUp`}
          >
            <span>Visit Jobda</span>
            <ButtonIco />
          </Link>
        </div>
      </div>

      <div className="container">
        <ul className={`${styles.dataLists}`}>
          {recruitmenutData.map((item, index) => (
            <li
              className={`${styles.item} ${item.classList} col-span-15 motion scaleUp`}
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
