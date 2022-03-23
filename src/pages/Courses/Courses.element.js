import styled from "styled-components";
import { d_flex } from "../../mixins";

export const CoursesElement = styled.div`
  position:relative;
  .btns-group{
    padding:1rem 0px;
    width:100%;
    ${d_flex('row','center', 'center')};
    button{
    ${d_flex('row','center', 'center')};
      width:40px;
      height:40px;
      border-radius:50%;
      background:var(--main-secondary-color);
      color:white;
      padding:.5rem;
      font-size:1.6rem;
      box-shadow:var(--shadow);
      cursor:pointer;
      &:first-child{
        margin-right:1rem;
      }
      &:last-child{
        margin-left:1rem;
      }
    }
  }
`