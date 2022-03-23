import React from "react";
import styled from "styled-components";
import { Button_sm } from "..";
import img from "../../assets//images/home_bg.jpg";
import { d_flex } from "../../mixins";
import { transition } from './../../mixins';
export default function CourseCard({img,title,info, id}) {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <Content onDragStart={handleDragStart} data-aos="slide-right">
      <div className="card">
        <div className="card__img">
          <img src={img} alt="" />
        </div>
        <div className="card__content">
        <h1 className="card__content_title">{title}</h1>
        <p className="card__content_info">
        {info.slice(0,60)}...
        </p>
        <Button_sm title={"Read More"} link={`/courses/${id}`}/>
        </div>
      </div>
    </Content>
  );
}
const Content = styled.div`
  margin-right:1rem;
  ${transition('.2s')};
  &:hover{
    box-shadow:var(--shadow);
    transform:scale(1.1);
  }
  ${d_flex("column","flex-start","flex-start")};
  .card {
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius:5px;
    &__img {
      overflow:hidden;
      img {
        width: 100%;
      } 
    }
  &__content{

    &_title{
      flex-grow:1;
      padding:1rem 0;
      font-size:25px;
      font-weight:bold;
      color:white;
    }
    &_info{
      font-size:16px;
      color:white;
      padding-bottom:1rem;
      opacity:.7;
    }
  }
  }
  @media screen and (max-width:600px){
  .card {
  &__content{

    &_title{
      flex-grow:1;
      padding:1rem 0;
      font-size:20px;
      font-weight:bold;
      color:white;
    }
    &_info{
      font-size:16px;
      color:white;
      padding-bottom:1rem;
      opacity:.7;
    }
  }
  }
  }
`;
