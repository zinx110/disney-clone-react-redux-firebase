import Link from "next/link";
import styles from "./Recommends.module.css";
import { useSelector } from "react-redux";
import { selectRecommend } from "../reduxFeatures/movie/movieSlice";

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  return (
    <div className={styles.container}>
      <h4>Recommended For You</h4>
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

export default Recommends;
