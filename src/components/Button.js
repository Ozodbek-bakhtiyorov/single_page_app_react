import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { transition } from "../mixins";

export default function Button({ link, title }) {
  return (
    <Content>
      <Link to={link} duration={500} smooth={true}>{title}</Link>
    </Content>
  );
}
const Content = styled.span`
  a {
    display:inline-block;
    overflow:hidden;
    padding:1rem 2rem;
    color:inherit;
    background:var(--main-secondary-color);  
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius:4px;
    position:relative;
    ${transition('.3s')};
    &::before{
      content:'';
      position:absolute;
      width:0;
      height:5px;
      bottom:0;
      left:0;
      background:var(--main-light);
      transform-origin:bottom left;
      z-index:4;
    ${transition('.3s')};
    }
    &:hover{
      &::before{
        width:100%;
      }
    transform:scale(1.1);
    box-shadow:1px 1px 4px var(--main-bg);
    }
  }
`;
