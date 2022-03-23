import styled from "styled-components";
import { d_flex, transition } from "../../mixins";
export const HeaderElement = styled.div`
  nav.nav2 {
    display: none;
  }
  .bars {
    display: none;
  }
  nav.nav1 {
    padding: 50px 0;
    ul {
      ${d_flex("row", "center", "flex-start")};
      li {
        a {
          cursor: pointer;
          color: inherit;
          display: block;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          &.active {
            transform: scale(1.3);
          }
        }
        &:not(:last-child) {
          margin-right: 50px;
          padding: 0.5rem 1rem;
          opacity: 0.6;
          ${transition(".2s")};
          &:hover {
            transform: scale(1.2);
            opacity: 1;
          }
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 4px;
            transform: scale(0);
            background: var(--main-secondary-color);
            transform-origin: bottom;
            ${transition(".4s")};
          }
          &:hover {
            &::after {
              transform: scale(1);
            }
          }
        }
        &:last-child {
          margin-left: auto;
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
          text-align: right;
          letter-spacing: 0.05em;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    nav.nav1 {
      padding: 30px 0;
      ul {
        li {
          a {
            font-size: 16px;
            line-height: 22px;
          }
          &:not(:last-child) {
            margin-right: 30px;
            padding: 0.25rem 0.5rem;
          }
          &:last-child {
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    nav.nav1 {
      justify-content: space-between;
      ul {
        li {
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    left: 0px;
    .bars {
      cursor: pointer;
      ${d_flex("row", "center", "center")};
      position: fixed;
      z-index: 1010;
      background: var(--main-bg);
      top: 1.5rem;
      left: 20px;
      font-size: 20px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      color: inherit;
      box-shadow: var(--shadow);
      ${transition(".7s")};
      border: 1px solid var(--border-color);
      &:hover {
        color: var(--main-secondary-color);
      }
    }
    nav.nav1 {
      display: none;
    }
    nav.nav2 {
      ${transition(".5s")};
      cursor: pointer;
      &.active {
        left: 0 !important;
      }
      border-right: 1px solid var(--border-color);
      z-index: 1000;
      position: fixed;
      box-shadow: var(--shadow);
      left: -205px;
      ${d_flex("column", "center", "flex-start")};
      width: 200px;
      min-height: 100vh;
      background: var(--main-bg);
      padding: 30px 0;
      .logo {
        ${d_flex("column", "center", "center")};
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-color);
        width: 100%;
        img {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      }
      ul {
        width: 100%;
        ${d_flex("column", "flex-start", "flex-start")};
        li {
          &:last-child {
            width: 100%;
            border-top: 1px solid var(--border-color);
          }
          a {
            border-radius: 20px;
            width: 100%;
            padding: 0.5rem 1rem;
            display: block;
            color: inherit;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            ${transition("4s")};
            &.active{
              background-color:var(--main-secondary-color);
            }
            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 100%;
              bottom: -100%;
              border-radius: 20px;
              left: -100%;
              background: var(--main-secondary-rgba);
              transform-origin: bottom left;
              z-index: 999;
              ${transition("4s")};
            }
            &:hover,
            &:active {
              &::after {
                transform: scale(5);
              }
            }
          }
          &:not(:last-child) {
            width: 100%;
            margin-top: 10px;
          }
          &:last-child {
            ${d_flex("row", "center", "space-around")};
            width: 100%;
            margin-top: 50px;
            padding-top: 2rem;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            span {
              ${transition("1s")};
              &:hover {
                transform: scale(1.2);
                color: var(--main-secondary-color);
              }
            }
          }
        }
      }
    }
  }
`;
