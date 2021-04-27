import React, { useEffect, useState } from "react";
import Container from "./Container";
import RangeSlider from "./RangeSlider";
import MainSlider from "./../Components/Slider/";
import Cards from "../Components/Cards";

export default function Home() {
  const [Height, setHeight] = useState();
  const [Width, setWidth] = useState(0);
  const [clip, setClip] = useState(0);
  const changeRange = (range) => {
    setClip((Width / 100) * range);
  };
  useEffect(() => {
    setTimeout(() => {
      setHeight(document.getElementById("main").clientHeight);
      setWidth(document.getElementById("main").clientWidth);
    }, 1000);
  }, []);

  return (
    <>
      <div id='main'>
        <Container height={Height} clip={clip}>
          <MainSlider style={{ position: "relative" }} />
          <Cards />
        </Container>
      </div>
      <RangeSlider range={changeRange} />
    </>
  );
}
