import React from 'react'
import img from '../../../assets/images/home_bg.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import { d_flex } from '../../../mixins';



export default function Header_slider({items, options}) {
  return (
    <Content>
      <AliceCarousel mouseTracking items={items} {...options} />
    </Content>
  )
}
const Content = styled.div`
  .alice-carousel{
    &__prev-btn,&__next-btn{
      font-size:25px;
      &-item{
        span{
          ${d_flex('row',"center",'center')};
          padding:.5rem 1rem;
          width:40px;
          height:40px;
          border-radius:50%;
          box-shadow:var(--shadow);
          background:var(--main-secondary-color);
          color:white;
          font-weight:bold;
        }
      }
    }
    &__prev-btn{
      &-item{
        span{
          margin-right:20px;
        }
      }
    }
    &__next-btn{
      &-item{
        span{
          margin-right:20px;
        }
      }
    }

  }
  border-radius:20px;
`