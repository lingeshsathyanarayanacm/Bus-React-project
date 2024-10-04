import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video from '../nn.mp4';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,   // Set autoplay speed to 5000 milliseconds (5 seconds)
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Paper>
            {/* Your content for the first slide */}
            <img
              src="https://mllj2j8xvfl0.i.optimole.com/cb:jC7e.37109/w:auto/h:auto/q:90/f:avif/https://themeisle.com/blog/wp-content/uploads/2021/12/language-learning-apps.jpg"
              alt="Slide 1"
              style={{ width: '100%', height: '350px' }}
            />
          </Paper>
        </div>
        <div>
          <Paper>
            {/* Your content for the second slide */}
            <img
              src="https://techieword.com/wp-content/uploads/2019/12/language-learning-apps.jpg"
              alt="Slide 1"
              style={{ width: '100%', height: '350px' }}
            />
          </Paper>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
