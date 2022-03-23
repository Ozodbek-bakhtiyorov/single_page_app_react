import React from "react";
import { Title, Title2 } from "..";
import img from '../../assets/images/home_bg.jpg'
import { ContentElement } from "./EachCoursePage.element";
import Aboutitems from "../about_content/Aboutitems";
import { faCheckCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header_slider from "../home_content/Header_slider/Header_slider";
import { SliderImg } from './../home_content/Header_slider/SliderItem';
import { Link } from "react-router-dom";
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
export default function EachCoursePage() {
  return (
    <ContentElement className="container">
      <span className="to_home">
        <Link to='/'>
          <FontAwesomeIcon icon={faHome}/>
        </Link>
      </span>
      <Title title="Frontend" span="web" />
      <div className="content">
        <Aboutitems direction="row" />
        <div className="about-course">
         <div className="about-course__list">
           <Title2 title="Front Endda nimalarni o'ranasiz?"/>
         <ul>
            <li data-aos='fade-down'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li data-aos='fade-down'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li data-aos='fade-down'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
            <li data-aos='fade-down'>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
         </div>
          <div className="about-course__carousel">
            <Title2 title="Zamonaviy o'quv xonalar"/>
            <div className="carousel">
                <Header_slider options={options} items={items}/>
            </div>
          </div>
        </div>
        <div className="extra_info">
          <Title2 title={'olor sits'}/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis, similique? Eveniet odio ipsam quis rem quia? Quia sint
            corporis temporibus.
          </p>
        </div>
      </div>
    </ContentElement>
  );
}
