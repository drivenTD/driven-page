"use client";

import React, { useEffect, useState } from "react";
import styles from "./Organization.module.scss";

export default function Organization() {
  const listDepth1 = [
    {
      tit: "경영리딩팀",
      desc: "Management Leading team"
    },
    {
      tit: "플랫폼사업부",
      desc: "Alan"
    },
    {
      tit: "마케팅그룹",
      desc: "Marketing Group"
    }
  ];

  const listDepth2 = [
    { tit: "사업기획팀", desc: "Business planning<br/>team" },
    { tit: "미디어 플래닝팀", desc: "Media planning<br/>team" },
    { tit: "BM개발팀", desc: "Business model<br/>development" },
    { tit: "서비스 개발팀", desc: "Service development<br/>team" },
    { tit: "영업지원팀", desc: "Sales Support<br/>team" },
    { tit: "고객 지원팀", desc: "C·S<br/>team" },
    { tit: "퍼포먼스마케팅팀", desc: "Performance<br/>Marketing team" },
    { tit: "그로스팀", desc: "Growth<br/>team" },
    { tit: "데이터관리팀", desc: "Data Management<br/>team" },
    { tit: "디자인·퍼블리싱팀", desc: "Design·Publishing<br/>team" },
    { tit: "영상 촬영·제작팀", desc: "Video shooting<br/>Production team" },
    { tit: "콘텐츠 기획팀", desc: "Content<br/>production" }
  ];

  const [groupedItems, setGroupedItems] = useState([]);

  const chunkArray = (array, size1, size2) => {
    const result = [];
    let i = 0;

    // 첫 번째 그룹
    result.push(array.slice(i, i + size1));
    i += size1;

    // 나머지 그룹
    while (i < array.length) {
      result.push(array.slice(i, i + size2));
      i += size2;
    }

    return result;
  };

  const updateGroups = () => {
    const isMobile = window.innerWidth <= 768;
    const newGroups = chunkArray(listDepth2, 3, isMobile ? 5 : 3);
    setGroupedItems(newGroups);
  };

  useEffect(() => {
    // 초기 그룹핑
    updateGroups();

    // 창 크기 변화에 대응
    window.addEventListener("resize", updateGroups);

    return () => {
      window.removeEventListener("resize", updateGroups);
    };
  }, []);

  return (
    <section className={styles.organizationSection}>
      <div className="container">
        <div className={styles.wrap}>
          <ul className={styles.organizationList}>
            <li className="col-lg-1">
              <div className={`${styles.ceoBox}`} lang="en">
                <p className={styles.desc}>Driven</p>
                <p className={styles.tit}>CEO</p>
              </div>
            </li>

            <li className={styles.listDepth_1}>
              {/* 첫 번째 뎁스 아이템 */}
              {listDepth1.map((item, index) => (
                <div className={styles.item} key={index}>
                  <p className={styles.tit}>{item.tit}</p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </li>

            <li className={styles.listDepth_2}>
              {/* 두 번째 뎁스 아이템 */}
              {groupedItems.map((group, index) => (
                <div className={styles.wrap} key={index}>
                  {group.map((item, idx) => (
                    <div className={styles.item} key={idx}>
                      <p className={styles.tit}>{item.tit}</p>
                      <p className={styles.desc}>
                        {item.desc &&
                          typeof item.desc === "string" &&
                          item.desc.split("<br/>").map((line, i, arr) => (
                            <React.Fragment key={i}>
                              {line}
                              {i !== arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
