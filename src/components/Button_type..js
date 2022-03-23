import React from 'react'
import styled from 'styled-components'
import { transition } from './../mixins';

export default function Button_type({type,title}) {
  return (
    <Content type={type}>
      {title}
    </Content>
  )
}
const Content=styled.button`
  padding:1rem 2rem;
  outline:none;
  border:none;
  border-radius:4px;
  font-size:18px;
  font-weight:bold;
  overflow:hidden;
  color:white;
  ${transition('.3s')};
  position:relative;
  &::before{
    position:absolute;
    content:'';
    width:0%;
    height:4px;
    background:white;
    ${transition('.3s')};
    bottom:0;
    left:0;
  }
  background:var(--main-secondary-color);
  cursor:pointer;
  &:active, &:hover{
    box-shadow:var(--shadow);
    transform:scale(1.2);
    &::before{
      width:100%;
    }
  }
`
