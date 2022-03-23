import React from "react";
import styled from "styled-components";
import { Button } from "..";
import { d_flex_ai, d_flex_jc } from "../../mixins";

export default function HomeLeft() {
  return (
    <Left>
      <h1>Lorem, ipsum.</h1>
      <p>
        Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с
        1886 года — Петербургская консерватория. Первое постоянное в
        Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных
        зданий в Европе XVIII.
      </p>
      <div className="button">
        <Button title="Contact" link="contact" />
      </div>
    </Left>
  );
}
const Left = styled.div`
 height:100%;
${d_flex_jc("column",'center')};
  h1 {
    font-weight: bold;
    font-size: 50px;
    line-height: 87px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color:inherit;
  }
  p{
    font-size: 14px;
    line-height: 150%;
  }
  .button {
    margin-top: 30px;
  }
  @media screen and (max-width:1350px){
   h1{
    font-size: 40px;
    line-height: 67px;
   } 
  }
  @media screen and (max-width:1070px){
   h1{
    font-size: 30px;
    line-height: 67px;
   } 
  }
  @media screen and (max-width:1040px){
   text-align:center;
   h1{
    font-size: 40px;
    line-height: 87px;
   } 
  }
  @media screen and (max-width:768px){
   text-align:center;
   h1{
    font-size: 30px;
    line-height: 87px;
   } 
  }
  @media screen and (max-width:400px){
   text-align:center;
   h1{
    font-size: 25px;
    line-height: 87px;
   } 
  }
`;
