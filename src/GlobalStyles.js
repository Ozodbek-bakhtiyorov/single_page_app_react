import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap');
  *{
    box-sizing:border-box;
    text-decoration:none;
    outline:none;
    border:none;
    margin:0;
    padding:0;
    list-style:none;
  }
  :root{
    --main-bg:rgba(51, 51, 51, 1);
    --main-secondary-color:rgba(209, 169, 84, 1);
    --main-secondary-rgba:rgba(209, 169, 84, .4);
    --main-light:white;
    --roboto:'Roboto',sans-serif;
    --poppins: 'Poppins', sans-serif;
    --custom-transition:  cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --shadow:1px 0 10px black;
    --border-color:rgb(149, 165, 166,.5);
    --footer-color:rgba(66, 41, 54, 0.8);
  } 
  body{
    font-family:var(--poppins);
    background:var(--main-bg);
    color:var(--main-light)
  }
  .activenav{
    background: var(--main-secondary-color)!important;
  }
  .container{
    width: 70vw;
    margin:0 auto;
    @media screen and (max-width:1000px){
      width:80vw;
    }
    @media screen and (max-width:900px){
      width:85vw;
    }
    @media screen and (max-width:768px){
      width:90vw;
    }
    @media screen and (max-width:500px){
      width:98vw;
    }

  }
`