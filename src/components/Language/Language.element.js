import styled from "styled-components";
import { d_flex } from "../../mixins";
import { transition } from "./../../mixins";

export const LanguageElement = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 30px;
  z-index: 130;
  ${d_flex("column", "center", "flex-start")};
  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background: var(--main-bg);
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow:var(--shadow);
    span{
      text-transform:uppercase;
    }
  }

  .content {
    position: absolute;
    box-shadow:var(--shadow);
    top: calc(100% + 5px);
    padding: 1rem 1.5rem;
    ${d_flex("column", "center", "flex-start")};
    border: 1px solid var(--border-color);
    background: var(--main-bg);
    color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transform-origin: top right;
    left:-5rem;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    ${transition('.3s')};
    &.active {
      -webkit-transform:scale(1);
      -moz-transform:scale(1);
      -ms-transform:scale(1);
      -o-transform: scale(1);
      transform:  scale(1);
      ${transition(".3s")};
    }
    span {
      font-size:14px;
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      padding:.5rem 1rem;
        border-radius: 10px;
      cursor:pointer;
      opacity: 0.7;
      ${transition(".3s")};
      &.active{
      opacity:1;
      transform:scale(1.3);
      background:var(--main-secondary-color)!important;
      font-weight: bold;;
    }
    }
  }
`;
