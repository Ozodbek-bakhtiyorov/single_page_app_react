import React from 'react'
import styled from 'styled-components'

export default function Title2({title}) {
  return (
    <Content data-aos="slide-right">
      <span>{title}</span>
    </Content>
  )
}
const Content = styled.div`
width:100%;
padding:1.5rem 0;
span{
font-weight: bold;
font-size: 18px;
line-height: 24px;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #FFFFFF;
}
`
