import React from 'react'
import styled from 'styled-components'

export default function TitleMd({title,span}) {
  return (
    <Content>
      <span>{span}</span>&nbsp;
      {title}
    </Content>
  )
}
const Content = styled.div`
width:100%;
padding:1rem 0;
font-weight: bold;
font-size: 15px;
line-height: 22px;
letter-spacing: 0.05em;
color:white;
span{
  color: #D1A954!important;
}
`