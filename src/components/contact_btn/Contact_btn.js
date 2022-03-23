import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { d_flex } from "../../mixins";
export default function Contact_btn() {
  return (
    <Content className="contact_btn">
      <div className="waves">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <FontAwesomeIcon icon={faPhone} />
      </Link>
    </Content>
  );
}
const Content = styled.div`
  position: sticky;
  ${d_flex("row", "center", "center")};
  float: right;
  bottom: 2rem;
  width:100px;
  height: 100;
  right: 20px;
  border-radius: 4px;
  border-radius: 50%;
  a {
    position: absolute;
    cursor:pointer;
    box-shadow: var(--shadow);
    ${d_flex("row", "center", "center")};
    border: 1px solid var(--border-color);
    color: white;
    width: 35px;
    border-radius: 50%;
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    animation: contact 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    z-index: 1000!important;
  background: var(--main-secondary-color);

  }
  @keyframes contact {
    0% {
      transform: rotate(0) scale(0.8);
    }
    25% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(60) scale(1.6);
    }
  }
  .waves {
    position: absolute;
    z-index: 20 !important;
    transform:translateX(5px) translateY(5px);
  }
  .lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`;
