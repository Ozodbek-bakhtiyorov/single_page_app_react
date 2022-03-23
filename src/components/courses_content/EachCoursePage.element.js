import styled from "styled-components";
import { d_flex, d_grid } from "../../mixins";

export const ContentElement = styled.div`
position: relative;
.to_home{
  top:1.5rem;
  left:20px;
  z-index:600;
  position:fixed;
  a{
  ${d_flex('row','center', 'center')};
  width: 40px;
 box-shadow:var(--shadow);
  height: 40px;
  border-radius: 50%;
  border:1px solid var(--border-color);
  background: var(--main-bg);
    color:white;
    &:hover{
      color:var(--main-secondary-color);
    }
  }
}
  .about-course{
    ${d_grid("30px","400px")};
    &__list{
      ul{
        li{
          font-size:18px;
          color:var(--main-secondary-color);
          span{
            margin-left:10px;
            color:white;
          }
          &:not(:last-child){
              margin-bottom: 1rem;;
            }
        }
      }
    }
    &__carousel{
      
    }
  }
  .extra_info{
      p{
        font-size:18px;
        color:white;
        padding-bottom:20px;
      }
    }
  @media screen and (max-width:420px){
    .about-course{
    ${d_grid("30px","300px")};}
  }  
`