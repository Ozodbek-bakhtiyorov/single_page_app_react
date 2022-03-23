import React from "react";
import styled from "styled-components";

export default function Title3({ title }) {
  return (
    <Content data-aos="slide-up">
      {title}
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
  font-weight: 300;
  font-size: 30px;
  line-height: 45px;
  text-align: left;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:var(--main-secondary-color);
  @media screen and (max-width:500px){
    font-size:22px;
    padding: 1rem 0
  }
`;

