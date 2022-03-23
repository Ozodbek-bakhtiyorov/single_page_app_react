import {
  faEnvelopeOpenText,
  faPhoneAlt,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { d_grid } from "../../mixins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ContactItems() {
  return (
    <Content>
      <ul data-aos="slide-down">
        <li>
          <FontAwesomeIcon icon={faPhoneAlt} /> <span>+998919219696</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhoneAlt} /> <span>+998919219696</span>
        </li>
      </ul>
      <ul data-aos="slide-up">
        <li>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />{" "}
          <span>ozodbekdeveloper@gmail.com</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSearchLocation} />{" "}
          <span>Tashkent,Buhkara 140</span>
        </li>
      </ul>
    </Content>
  );
}
const Content = styled.ul`
  ${d_grid("30px", "40%")};
  ul {
    width: 100%;
    padding-bottom: 25px;
    li {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.05em;
      color: white;
      span {
        margin-left: 10px;
      }
      &:not(:last-child) {
        padding-bottom: 25px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    ${d_grid("30px", "300px")};
  }
  @media screen and (max-width: 768px) {
    ${d_grid("30px", "250px")};
  }
  @media screen and (max-width: 690px) {
    display: block;
    ul {
      width: 100%;
      padding-bottom: 10px;
      li {
        &:not(:last-child) {
          padding-bottom: 20px;
        }
      }
    }
  }
`;
