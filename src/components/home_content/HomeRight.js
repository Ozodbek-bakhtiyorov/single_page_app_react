import React from 'react'
import styled from 'styled-components'
import Header_slider from './Header_slider/Header_slider'
import { SliderImg } from './Header_slider/SliderItem';
import img from '../../assets/images/home_bg.jpg'
const handleDragStart = (e) => e.preventDefault();

const items = [
  <SliderImg    src={img} onDragStart={handleDragStart} />,
  <SliderImg  src={img} onDragStart={handleDragStart} />,
  <SliderImg  src={img} onDragStart={handleDragStart} />,
];
const options ={
  animationDuration:500,
  autoPlay:true,
  disableButtonsControls:true,
  autoPlayInterval:1000,
  disableSlideInfo:false,
  infinite:true,
  keyboardNavigation:true,
  disableDotsControls:true,
  responsive:{
    0: {
      items: 1,
  },
  1040: {
      items:1
  },
  768:{
    items:2
  }
  }
}

export default function HomeRight() {
  return (
    <Right>
      <Header_slider items = {items} options={options}/>
    </Right>
  )
}
const Right = styled.div`
`
