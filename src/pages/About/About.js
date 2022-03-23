import React from 'react'
import { Title } from '../../components'
import{ AboutLeft,AboutRight }from '../../components'
import Aboutitems from '../../components/about_content/Aboutitems'
import { AboutElement } from './About.element'
export default function About() {
  return (
    <AboutElement id='about'>
     <div className='container'>
        <Title title="about" span='company'/> 
        <div className="items">
        <Aboutitems direction={'row'}/>
        <Aboutitems direction={'row-reverse'}/>
        <Aboutitems direction={'row'}/>
        </div>
     </div>
    </AboutElement>
  )
}
