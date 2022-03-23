import styled from "styled-components";
import { d_flex, transition } from "../../mixins";

export const AboutRightEl = styled.div`
  flex: 0.3;
  overflow:hidden; 
  margin-right: ${(props) =>
    props.x === "row" ? "0  " : "1rem"};
  &:hover {
    img {
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  img {
  ${transition('.4s')};
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width:1000px){
    flex:1!important;
    margin-top:2rem;
    margin-right: ${(props) =>
    props.x === "row-reverse" ? "0  " : "1rem"};
    img{
      max-width:50%;
    }
  }
  @media screen and (max-width:700px){
    img{
      max-width:70%;
    }
  }
  @media screen and (max-width:400px){
    img{
      max-width:100%;
    }
  }
`;

export const AboutLeftEl = styled.div`
  flex: 0.7;
  display: flex;
  .left,
  .right {
    ${d_flex("column", "flex-start", "flex-start")};
    padding-right: 1rem;
  }
  .left {
    flex: 0.6;
    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      color: #ffffff;
    }
  }
  .right {
    flex: 0.4;
    &__content {
      ${d_flex("column", "felex-start", "flex-start")};
      &_item {
        ${d_flex("column", "flex-start", "flex-start")};
        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          ${transition('.2s')};
          &:hover{
            transform:scale(1.3);
          }
        }
      }
    }
  }
  @media screen and (max-width:1000px){
    flex:1;
  }
  @media screen and (max-width:700px){
    .left{
      flex:1;
    }
    .right{
      display:none;
    }
  }
`;
