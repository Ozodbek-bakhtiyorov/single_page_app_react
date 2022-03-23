
import { Link } from "react-router-dom";
import styled from "styled-components";
import { transition } from "../mixins";

export default function Button_sm({ link, title }) {
  return (
    <SM>
      <Link to={link}>{title}</Link>
    </SM>
  );
}
const SM = styled.span`
position:relative;
  a {
    display:inline-block;
    overflow:hidden;
    padding:.5rem 1rem;
    color:inherit;
    cursor:pointer;
    background:var(--main-secondary-color);  
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    border-radius:4px;
    position:relative;
    ${transition('.3s')};
    &::after{
      content:'';
      position:absolute;
      width:0;
      height:5px;
      bottom:0;
      left:0;
      background:white;
      opacity:.8;
      filter:blur(1px);
      transform-origin:bottom left;
    ${transition('.3s')};
    }
    &:hover{
      &::after{
        width:100%;
      }
    transform:scale(1.05);
    box-shadow:1px 1px 4px var(--main-bg);
    }
  }
  @media screen and (max-width:600px){
    a{
      font-size:14px;
      padding:.3rem .7rem;
    }
  }
`;
