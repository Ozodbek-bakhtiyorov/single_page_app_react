import { createReducer , createAction } from "@reduxjs/toolkit";
import { useReducer } from "react";
import alldata from '../assets/JsonData/db.json';
const initialstate = {
  lang:'ru', 
  db:alldata,
  curr_db:alldata.ru
};

export const uz = createAction('lang/uz', (lang)=>({payload:lang}));
export const ru = createAction('lang/ru', (lang)=>({payload:lang}));

const reducer = createReducer(initialstate,builder=>{
  builder
    .addCase(uz,(state, action)=>{
      state.curr_db = state.db.uz;
      state.lang=action.payload;
    })
    .addCase(ru,(state, action)=>{
      state.curr_db = state.db.ru;
      state.lang=action.payload;
    })
})

export default reducer