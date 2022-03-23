import React from "react";
import Title2 from "../Title2";
import { AboutLeftEl } from "./AboutContent.elements";
import img from '../../assets/images/home_bg.jpg';
import TitleMd from "./TitleMd";
import { useAos } from './../../hooks/UseAos';

export default function AboutLeft(props) {
 
  return (
    <AboutLeftEl x={props.row} data-aos="flip-left" >
      <div className="left">
        <Title2 title={"Самый лучший театр СПБ"} />
        <p className="info">
            Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.
        </p>
      </div>
      <div className="right">
      <Title2 title={'немного о цифрах'}/>
      <div className="right__content">
        <div className="right__content_item">
          <img src={img} alt="icon" />
          <TitleMd span="1600" title={'посадочный мест'}/>
        </div>
        <div className="right__content_item">
          <img src={img} alt="icon" />
          <TitleMd span="350" title={'лет истории'}/>
        </div>
      </div>
      </div>
    </AboutLeftEl>
  );
}
