import Link from "next/link";
import styles from "./Aboutpage.module.scss";

import IcoOutlink from "@/image/global/outlink-ico.svg";

export default function Aboutpage({
  imgUrl,
  imgClass,
  profileLink,
  pageTitle,
  pageDescription,
  button
}) {
  return (
    <section className={styles.marketingAboutSection}>
      <div className="container">
        <div className="col-span-15">
          <div className={`${styles.imgBox} txtC motion scaleUp`}>
            <img src={imgUrl} className={`${imgClass}`} />
          </div>
          <div className="pageTxtWrap txtC">
            <p
              className="pageTit motion scaleUp"
              lang="en"
              dangerouslySetInnerHTML={{ __html: pageTitle }}
            />
            <p
              className="pageDesc motion scaleUp"
              dangerouslySetInnerHTML={{ __html: pageDescription }}
            />
          </div>
          {button && (
            <div className={`${styles.buttonWrap} motion scaleUp`}>
              <Link href={profileLink} target="_blank">
                프로필 바로가기 <IcoOutlink />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
