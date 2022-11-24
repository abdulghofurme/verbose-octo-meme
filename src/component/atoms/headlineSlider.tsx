import { FC, PropsWithChildren } from "react";
import Slider from "react-slick";
import styles from "../../../styles/atoms/headlineSlider.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLIDERSETTING = {
  dots: true,
  lazyload: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeadlineSlider: FC<PropsWithChildren> = ({ children }) => (
  <Slider {...SLIDERSETTING} className={styles.headline_slider}>
    {children}
  </Slider>
);

export default HeadlineSlider;
