import React from 'react'
import { FooterElement } from './Footer.element'
import img from '../../assets/images/home_bg.jpg'
export default function Footer() {
  return (
    <FooterElement id="footer">
      <div className='container content'>
        <span>Lorem sit amet consectetur adipisicing elit &copy;{new Date().getFullYear()}</span>
        <span><img src={img} alt="aspecto_logo" /></span>
        <span><img src={img} alt="aspecto_logo" /></span>
        <span>Example.ru</span>
      </div>
    </FooterElement>
  )
}
