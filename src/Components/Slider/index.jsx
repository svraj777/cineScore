import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 300,
    height: 200,
  },
});
export default function MainSlider() {
  const classes = useStyles();
  const [SliderData, setSliderData] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=923919edbccd880ec5f2e43756ffa1dc&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => setSliderData(data.results));
  }, []);
  var settings = {
    centerPadding: "50px",
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div style={{ position: "relative", zIndex: "2" }}>
      <Slider {...settings}>
        {SliderData ? (
          SliderData.map((Slide) => (
            <div key={Slide.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${Slide.backdrop_path}`} />
            </div>
          ))
        ) : (
          <div className={classes.root}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation='wave' />
          </div>
        )}
      </Slider>
    </div>
  );
}
