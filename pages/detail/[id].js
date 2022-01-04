import styles from "./detail.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import db from "../../utils/firebase";

const Detail = () => {
  const { id } = useRouter().query;

  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })

      .catch((error) => {
        console.log(`Error getting document. error: ${error}`);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          className={styles.backgroundImg}
          src={detailData.backgroundImg}
          alt={detailData.title}
        />
      </div>
      <div className={styles.imageTitle}>
        <img
          className={styles.imageTitleImg}
          src={detailData.titleImg}
          alt={detailData.title}
        />
      </div>
      <div className={styles.contentMeta}>
        <div className={styles.controls}>
          <button className={styles.player}>
            <img
              className={styles.playerImage}
              src="/assets/images/play-icon-black.png"
              alt="play"
            />
            <span className={styles.playerSpan}>Play</span>
          </button>
          <button className={styles.trailer}>
            <img
              className={styles.playerImage}
              src="/assets/images/play-icon-white.png"
              alt="trailer"
            />
            <span>Trailer</span>
          </button>
          <div className={styles.AddList}>
            <span />
            <span />
          </div>
          <div className={styles.groupWatch}>
            <div>
              <img src="/assets/images/group-icon.png" alt="group" />
            </div>
          </div>
        </div>
        <div className={styles.subTitle}>{detailData.subTitle}</div>
        <div className={styles.description}>{detailData.description}</div>
      </div>
    </div>
  );
};

export default Detail;
