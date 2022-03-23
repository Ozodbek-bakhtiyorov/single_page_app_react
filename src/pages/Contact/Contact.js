import React from 'react'
import { ContactItems, Title,ContactForm, Loacation } from '../../components'
import { ContactElement } from './Contact.element'

export default function Contact() {
  return (
    <ContactElement id='contact' className="container">
      <Title title="Contact" span="Us"/>
      <div className='cotact__content'>
        <ContactForm/>
        <ContactItems/>
        <Loacation/>
      </div>
    </ContactElement>
  )
}
