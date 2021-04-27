import React from "react";

import Header from "./../Menu/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #181b21;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;
const Range = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background: white;
  overflow: hidden;
  z-index: 1;
`;
export default function Index(props) {
  return (
    <Wrapper>
      <Range style={{ clip: `rect(0px, ${props.clip}px, ${props.height ? props.height : 10}px, 0px)` }} />
      <Header />
      {props.children}
    </Wrapper>
  );
}
