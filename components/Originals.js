import Link from "next/link";
import { selectOriginal } from "../reduxFeatures/movie/movieSlice";
import { useSelector } from "react-redux";

import styles from "./Recommends.module.css";

const Originals = () => {
  const movies = useSelector(selectOriginal);
  return (
    <div className={styles.container}>
      <h4>Originals</h4>
      <div className={styles.contents}>
        {movies &&
          movies.map((movie, key) => (
            <div className={styles.wrap} key={key}>
              {movie.id}
              <Link href={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Originals;
