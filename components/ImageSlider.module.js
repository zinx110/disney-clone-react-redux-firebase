import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;

    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);

      &:hover {
        color: rgb(249, 249, 249);
        transition: opacity 0.2s ease 0s;
      }
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;

    button {
      z-index: 1;
    }
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  div {
    cursor: pointer;
    display: block;
    position: relative;
    img {
      width: 100%;
      height: 100%;

      &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
      }
    }
  }
`;
