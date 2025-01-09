import Link from "next/link";
import styles from "./Introduction.module.scss";

export default function Introduction() {
  const recruitmenutData = [
    {
      field: "BM<br/>Development<br/>Team",
      jobTasks: [
        "마케팅 신규 서비스 및 플랫폼 개발",
        "현 운영 마케팅 서비스 효율화를 위한 개발",
        "서비스 유지관리"
      ],
      qualifications: [
        "공학 계열 전공 및 관련 직무 경험 보유(1년 이상)",
        "API 및 대내/대외 서비스 연계 인터페이스 개발 경험자",
        "DB관리 및 Query 개발",
        "Front-End 연계 인터페이스 개발"
      ]
    },
    {
      field: "UI/UX<br/>DESIGNER",
      jobTasks: [
        "UI/UX 디자인 및 편집",
        "크리에이티브 아이디어 도출",
        "마케팅 전략이 필요한 세부 운영계획 및 수립"
      ],
      qualifications: [
        "디자인 관련 공 및 관련 직무 경험 보유(1년 이상)",
        "개발/기획/디자인 협력사와의 원활한 커뮤니케이션 스킬 보유자",
        "디자인 관련 프로그램 작업 가능자 (Photoshop, illustrator, indesign 등)"
      ]
    },
    {
      field: "Performance<br/>Marketing Team",
      jobTasks: [
        "SA / DA / VA 온라인 광고 전략 수립",
        "캠페인 운영 및 클라이언트 관리",
        "데이터 분석 및 인사이트 도출 / 리포트 작성"
      ],
      qualifications: [
        "광고 관련 전공 및 관련 직무 경험 보유(1년 이상)",
        "광고주, 파트너사와 커뮤니케이션 가능자",
        "데이터 분석 및 통계에 적합한 자",
        "OA(엑셀, 워드 PPT) 중급 이상"
      ]
    },
    {
      field: "Content<br/>Production",
      jobTasks: [
        "기획안, 제안서 작성 및 경쟁 PT 참여",
        "광고소재, 프로모션 등 콘텐츠 기획",
        "캠페인 운영 및 클라이언트 관리"
      ],
      qualifications: [
        "광고 관련 전공 및 관련 직무 경험 보유(1년 이상)",
        "크리에이티브한 아이디어 소유자",
        "기획안, 제안서 유경험자",
        "경쟁 PT 문서 작업 경험자",
        "OA(엑셀, 워드 PPT) 중급 이상"
      ]
    }
  ];

  return (
    <section className={styles.introductionSection}>
      <div className={`${styles.flexWrap} container`}>
        <div className="col-span-15 motion scaleUp">
          <p className={styles.pageTit} lang="en">
            JOB
            <br />
            INTRODUCTION
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.tableWrap}>
          <div className={`${styles.tableHead} motion scaleUp`}>
            <div className="col-lg-3 col-lg-span-1 col-md-2 col-xs-1">
              <div className="col-span-15">
                <span>담당업무</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-xs-1">
              <div className="col-span-15">
                <span>자격오건 및 우대사항</span>
              </div>
            </div>
          </div>
          <div className={styles.tableBody}>
            {recruitmenutData.map((rowList, index) => (
              <div className={`${styles.rowItem} motion scaleUp`} key={index}>
                <div className="col-lg-1 col-md-4 col-xs-2 col-span-15">
                  <p
                    className={styles.fieldName}
                    dangerouslySetInnerHTML={{ __html: rowList.field }}
                  />
                </div>

                <div className="col-lg-2 col-md-2 col-xs-1 col-span-15">
                  <ul className={styles.list}>
                    {rowList.jobTasks.map((list, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: list }}
                      ></li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-2 col-md-2 col-xs-1 col-span-15">
                  <ul className={styles.list}>
                    {rowList.qualifications.map((list, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: list }}
                      ></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
