import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from "../../styles/Carousel.module.scss";

const AutoPlaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => (
    <AutoPlaySlider
      cssModule={AwsSliderStyles}
      className="awssld mb-5"
      play={true}
      cancelOnInteraction={true}
      interval={6000}
    >
      <div data-src="/images/2.jpg" />
      <div data-src="/images/tulump.png" />
      <div data-src="/images/beach2.jpg" />
      
    </AutoPlaySlider>
);


export default Carousel;
