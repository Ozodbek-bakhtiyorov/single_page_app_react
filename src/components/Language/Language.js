import { useRef, useEffect } from "react";
import { LanguageElement } from "./Language.element";
import { useClickOutsideRef } from "../../hooks/useClickOutsideRef";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {uz,ru} from '../../redux/reducer'
export default function Language() {
  const contentRef=useRef(null);
  const toggleRef = useRef(null);
  useClickOutsideRef(contentRef,toggleRef);


  const lang = useSelector(state => state.lang)
  const db = useSelector(state => state.db)

  const dispatch = useDispatch();


  useEffect(() => {
    const langitems = document.querySelectorAll(".lang");
    langitems.forEach((el) => {
      if (lang.toLowerCase() === el.innerText.toLowerCase()) {
        el.classList.add("active");
      } else el.classList.remove("active");
    });
    console.log(db);
  }, [lang])

  return (
    <LanguageElement>
      <button  ref={toggleRef} className="lang_toggle">
        <span className="">{lang}</span>
      </button>
      <div ref={contentRef} className="content">
        <span className='lang' onClick={(e)=>dispatch(uz(e.target.innerText.toLowerCase()))}>Uz</span>
        <span className="lang"  onClick={(e)=>dispatch(ru(e.target.innerText.toLowerCase()))}>Ru</span>
      </div>
    </LanguageElement>
  );
}
