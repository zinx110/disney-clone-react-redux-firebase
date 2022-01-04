import { Carousel, Wrap } from "./ImageSlider.module";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,

    speed: 500,
    sllidesToShow: 1,
    sllidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <div>
          <img src="/assets/images/slider-badging.jpg" alt="slider1" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/assets/images/slider-scale.jpg" alt="slider2" />
        </div>
      </Wrap>

      <Wrap>
        <div>
          <img src="/assets/images/slider-badag.jpg" alt="slider3" />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img src="/assets/images/slider-scales.jpg" alt="slider4" />
        </div>
      </Wrap>
    </Carousel>
  );
};

export default ImageSlider;
