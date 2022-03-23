import React from 'react'
import { HomeLeft, HomeRight } from '../../components'
import { Header } from '../../layouts'
import { HomeElement } from './Home.element'

export default function Home() {
  return (
    <HomeElement id="home">
       <Header/> 
      <div className='container' >
     
      <div className='content'>
        <div className='content__left' data-aos='fade-up'>
          <HomeLeft/>
        </div>
        <div className='content__right' data-aos='fade-down'>
            <HomeRight/>
        </div>
      </div>
      </div>
    </HomeElement>
  )
}
