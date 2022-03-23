import React from 'react'
import styled from 'styled-components'
import { AboutLeft, AboutRight } from '..'
import { d_flex } from '../../mixins'

export default function Aboutitems({direction}) {
  return (
    <Content direction={direction}>
          <AboutLeft row={direction}/>
          <AboutRight row={direction}/>
    </Content>
  )
}

const Content = styled.div`
  margin-bottom:1.5rem;
  display:flex;
  flex-direction:${props=>(props.direction)};
  align-items:center;
  @media screen and (max-width:1000px){
    flex-direction:column;
  }
`