import AOS from 'aos';
import { useEffect } from 'react';
export const useAos = (duration) =>{
  useEffect(()=>{AOS.init({duration:700})})
}