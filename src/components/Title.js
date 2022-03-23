import React from "react";
import styled from "styled-components";

export default function Title({ title,span }) {
  return (
    <Content data-aos="slide-up">
      {title}
      &nbsp; <span>{span}</span>
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  border-bottom:2px solid var(--border-color);
  padding: 3rem 0;
  font-weight: 300;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color:var(--main-secondary-color);
  span{
    color:var(--main-light);
  }
  @media screen and (max-width:768px){
    font-size:30px;
    padding: 1.5rem 0
  }
  @media screen and (max-width:500px){
    font-size:25px;
    padding: 1rem 0
  }
`;
