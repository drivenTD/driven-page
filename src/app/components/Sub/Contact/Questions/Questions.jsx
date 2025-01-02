import { useState, useRef } from "react";
import { QuestionsData } from "./QuestionsData";
import styles from "./Questions.module.scss";

// Images
import ArrowIco from "@/image/global/listArrow-ico.svg";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const contentRef = useRef([]);

  const handleClick = (index, event) => {
    setOpenIndex(openIndex === index ? null : index);

    const topPosition =
      event.target.getBoundingClientRect().top + window.pageYOffset;

    const dlElement = document.querySelectorAll(".questionsItem");

    dlElement.forEach((answerList) => {
      const answer = answerList.querySelector(".answer");

      console.log(answer);
      if (answer) {
        const answerHeight = answer.offsetHeight;

        const adjustedTopPosition = topPosition - answerHeight;

        window.scrollTo({
          top: adjustedTopPosition
          // behavior: "smooth"
        });
      }
    });
  };

  return (
    <section className={styles.questionsSection}>
      <div className="container">
        <div className={`${styles.wrap} col-lg-4 col-lg-span-1`}>
          <div className="col-span-15">
            <div className="pageTxtWrap txtC">
              <p className="pageTit motion scaleUp">
                <span lang="en">Driven</span>에 대한 모든 궁금증, 여기서
                확인하세요
              </p>
              <p className="pageDesc motion scaleUp">
                Driven은 광고주들의 다양한 질문에 명확하고 친절한 답변을
                제공합니다.
                <br />
                효율적인 광고 전략과 서비스에 대해 궁금한 점이 있으시다면,
                아래에서 자주 묻는 질문과 답변을 확인해 보세요.
                <br />더 자세한 문의는 언제든지 연락 주시면 친절히 안내해
                드리겠습니다. 😊
              </p>
            </div>
          </div>

          <div className="col-span-15">
            <div className={styles.questionsList}>
              {QuestionsData.map((item, index) => (
                <dl
                  key={index}
                  className={`${styles.item} questionsItem motion scaleUp`}
                >
                  <dt
                    className={`${openIndex === index ? styles.open : ""}`}
                    onClick={(event) => handleClick(index, event)}
                  >
                    <div className={styles.group}>
                      <span lang="en">Q</span>
                      <p className={styles.tit}>{item.title}</p>
                    </div>
                    <i>
                      <ArrowIco />
                    </i>
                  </dt>
                  <dd
                    ref={(el) => (contentRef.current[index] = el)}
                    className={`${openIndex === index ? "answer" : ""}`}
                  >
                    <div className={`${styles.group} ${styles.type2}`}>
                      <span lang="en" className={styles.type2}>
                        A
                      </span>
                      <p
                        className={styles.desc}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </dd>
                </dl>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
