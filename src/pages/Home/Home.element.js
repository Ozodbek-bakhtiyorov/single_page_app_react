import styled from "styled-components";
import img from '../../assets/images/home_bg.jpg'
import { d_grid } from "../../mixins";
export const HomeElement = styled.header`
  background: linear-gradient(0deg, rgba(51, 51, 51, 0.85), rgba(51, 51, 51, 0.85)), url(${img});
  background-size:cover;
  width:100%;
  min-height:100vh;
  position:relative;
  .content{
    ${d_grid('30px','400px')};
  }
  @media screen and (max-width:700px){
    .content{
    ${d_grid('20px','300px')};
  }
  }
`