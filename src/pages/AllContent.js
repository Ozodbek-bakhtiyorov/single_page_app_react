import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Courses from './Courses/Courses';
import Contact_btn from './../components/contact_btn/Contact_btn';
import Contact from './Contact/Contact';

export default function AllContent() {
  return (
    <div>
      <Home/>
      <About/>
      <Courses/>
    </div>
  )
}
