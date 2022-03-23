import {useEffect} from 'react'
import Contact from '../../pages/Contact/Contact'
import { MainElement } from './Main.element'
import {Footer, Header} from '..';
import { EachCoursePage, Language } from '../../components'
import Contact_btn from '../../components/contact_btn/Contact_btn'
import AllContent from '../../pages/AllContent'
import { Switch,Route,useHistory } from 'react-router-dom'
import HomeSocial from '../../components/home_content/HomeSocial'
document.addEventListener('scroll',()=>{
  const currentScroll = window.scrollY;
  const total_scroll = document.body.scrollHeight;
  const contact_height = parseInt(window.getComputedStyle(document.body.querySelector('#contact')).height)
  const footer_height = parseInt(window.getComputedStyle(document.body.querySelector('#footer')).height)
  const height = contact_height+ footer_height+600;
   currentScroll>=(total_scroll-height) ? document.querySelector('.contact_btn').style.display='none':document.querySelector('.contact_btn').style.display='flex';
})

export default function Main() {
  return (  
    <MainElement>
      <Language/>
      <HomeSocial/>
      <Switch>
        <Route exact path="/" component={AllContent}/>
        <Route path="/courses/:id" component={EachCoursePage}/>
      </Switch>
      <Contact_btn/>
      <Contact/>
      <Footer/>
    </MainElement>
  )
}
