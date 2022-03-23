import React from 'react'
import { AboutRightEl } from './AboutContent.elements'
import img  from '../../assets/images/home_bg.jpg'
export default function AboutRight(props) {
  return (
    <AboutRightEl x={props.row} data-aos='flip-right'>
      <img src={img} alt="img"/>
    </AboutRightEl>
  )
}
