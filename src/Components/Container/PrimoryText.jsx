import React from "react";
import styled from "styled-components";
const Title = styled.h3`
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 34px;
  padding: 10px 0;
  height: calc(100vh - 115px);
  vertical-align: middle;
  margin-top: 0px; /* need this to clear the default margin */
  margin-bottom: 0px;

  :hover & {
    color: white;
  }
`;
const WrapUp = styled.div`
  line-height: 100px; /* calculated from .news_item */
`;
function PrimoryText(props) {
  return (
    <WrapUp>
      <Title>{props.title}</Title>
    </WrapUp>
  );
}

export default PrimoryText;
