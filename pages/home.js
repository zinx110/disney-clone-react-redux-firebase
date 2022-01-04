import Head from "next/head";
import Brands from "../components/Brands";
import ImageSlider from "../components/ImageSlider";
import Recommends from "../components/Recommends";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Trending from "../components/Trending";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../utils/firebase";
import { setMovies } from "../reduxFeatures/movie/movieSlice";
import { selectUserName } from "../reduxFeatures/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Disney+ Clone</title>
      </Head>
      <ImageSlider />
      <Brands />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </div>
  );
};

export default Home;
