import styles from "./ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,

    speed: 500,
    sllidesToShow: 1,
    sllidesToScroll: 1,
    autoplay: true,
  };

  console.log(Slider);

  return (
    <Slider className={styles.carousel} {...settings}>
      <div className={styles.wrap}>
        <a>
          <img src="/assets/images/slider-badging.jpg" alt="slider1" />
        </a>
      </div>
      <div className={styles.wrap}>
        <a>
          <img src="/assets/images/slider-scale.jpg" alt="slider2" />
        </a>
      </div>

      <div className={styles.wrap}>
        <a>
          <img src="/assets/images/slider-badag.jpg" alt="slider3" />
        </a>
      </div>
      <div className={styles.wrap}>
        <a>
          <img src="/assets/images/slider-scales.jpg" alt="slider4" />
        </a>
      </div>
    </Slider>
  );
};

export default ImageSlider;
