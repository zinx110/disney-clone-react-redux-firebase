import styles from "./Brands.module.css";

const Brands = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img src="./assets/images/viewers-disney.png" alt="brands" />

        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="./assets/videos/1564674844-disney.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.wrap}>
        <img src="./assets/images/viewers-pixar.png" alt="brands" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="./assets/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.wrap}>
        <img src="./assets/images/viewers-marvel.png" alt="brands" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="./assets/videos/1564676115-marvel.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.wrap}>
        <img src="./assets/images/viewers-starwars.png" alt="brands" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="./assets/videos/1608229455-star-wars.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.wrap}>
        <img src="./assets/images/viewers-national.png" alt="brands" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="./assets/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Brands;
