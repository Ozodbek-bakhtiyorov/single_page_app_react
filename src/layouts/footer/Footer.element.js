import styled from "styled-components";
import { d_flex } from "./../../mixins";
export const FooterElement = styled.footer`
  background: var(--footer-color);
  border-top: 1px solid var(--border-color);
  min-height:10vh;
  width: 100%;
  ${d_flex("row", "center", "space-between")};
  .content {
    ${d_flex("row", "center", "space-between")};
    span{
      img{
        width:50px;
        
      }
    }
  }
  @media screen and (max-width:700px){
    .content{
      padding:10px;
      font-size:14px;
      ${d_flex("column", "center", "center")};
      span{
        padding:5px;
      }
    }
  }
`;
