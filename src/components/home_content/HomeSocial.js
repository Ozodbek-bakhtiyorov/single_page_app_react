import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { d_flex, transition } from "../../mixins";
import { socialicons } from "../../assets/JsonData/social_icons";
export default function HomeSocial() {
  return (
    <Content>
      <span className="info">контакт</span>
      <div className="dash"></div>
      <ul className="icons">
        {
          socialicons.map(el=>(
            <li key={el.id}>
            <a href={el.link}>
              <FontAwesomeIcon icon={el.icon} />
            </a>
          </li>
          ))
        }
      </ul>
    </Content>
  );
}
const Content = styled.div`
  position:fixed;
  z-index:500;
  top:0;
  left:0;
  height: 100vh;
  width: 150px;
  background: rgba(51, 51, 51, 0.75);
  ${d_flex("column", "center", "flex-end")};
  left: 0;
  top: 0;
  .info {
    display:inline-block;
    transform:rotate(-90deg);
    display:block;
    margin-bottom: 60px;
    opacity: 0.6;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.1em;
  }
  .dash {
    height: 80px;
    width: 3px;
    background: var(--main-light);
    opacity: 0.6;
    margin-top: 30px;
  }
  ul {
    li {
      margin: 30px 0px;
      a {
        display:inline-block;
        color: inherit;
        font-size: 26px;
        opacity: 0.6;
        ${transition('.3s')};
        &:hover{
          transform:scale(1.3);
          color:var(--main-secondary-color);
          opacity:1;
        }
      }
    }
  }
  @media screen and (max-width:1200px){
    width:80px;
  }
  @media screen and (max-width:900px){
    display:none;
  }
`;
