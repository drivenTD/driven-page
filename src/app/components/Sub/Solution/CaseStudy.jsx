"use client";

import { useState, useEffect } from "react";
import { tabs } from "./tabsData";
import styles from "./CaseStudy.module.scss";

export default function Casestudy() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 0);

  useEffect(() => {
    console.log("Active Tab Changed:", activeTab);
  }, [activeTab]);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className={styles.caseStudySection}>
      <div className={`${styles.titWrap} pageTxtWrap txtC motion scaleUp`}>
        <p className="pageTitMiuem white" lang="en">
          <span>DATAMON</span>
          CASE STUDY
        </p>
      </div>

      <div className={`${styles.tabWrap} tabWrap`}>
        <nav className={`${styles.localNavi} tabsNavi motion scaleUp`}>
          <ul className="tabsLlist">
            {tabs.map((tab) => (
              <li key={tab.id} className="tabsItem">
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={activeTab === tab.id ? "current" : ""}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${styles.tabCont} tabsContent`}>
          {currentTab && (
            <div className="container">
              <div className="col-span-15">
                <div className="tabArea current">
                  <p
                    className={`${styles.subTit} motion scaleUp`}
                    dangerouslySetInnerHTML={{
                      __html: currentTab.conSubTitle || ""
                    }}
                  />
                  <h2
                    className={`${styles.tit} motion scaleUp`}
                    dangerouslySetInnerHTML={{
                      __html: currentTab.conTitle || ""
                    }}
                  />
                  <ul className={styles.listCont}>
                    {currentTab.contItem.map((item, index) => (
                      <li key={index} className="motion scaleUp">
                        <h4 lang="en">{item.title}</h4>
                        {Array.isArray(item.list) ? (
                          <ul className={styles.keywordList}>
                            {item.list.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.list}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
