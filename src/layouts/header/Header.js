import { useState, useRef } from "react";
import { HeaderElement } from "./Header.element";
import logo from "../../assets/images/home_bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useClickOutsideRef } from "../../hooks/useClickOutsideRef";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { socialicons } from "../../assets/JsonData/social_icons";

const AfterClickedLink = (selector) => {
  document.querySelector(`${selector}`).classList.remove("active");
};

export default function Header() {
  const [toggleNav, settoggleNav] = useState(false);
  const toggle_ref = useRef(null);
  const content_ref = useRef(null);
  const sidebarToggle = () => {
    settoggleNav(!toggleNav);
  };
  useClickOutsideRef(content_ref, toggle_ref);
  return (
    <HeaderElement className="container">
      <button ref={toggle_ref} className="bars">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className="nav1">
        <ul>
          <li>
            <Link to="home" activeClass="active" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" activeClass="active" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="courses"
              activeClass="active"
              smooth={true}
              duration={500}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>+998919219695</li>
        </ul>
      </nav>
      <nav ref={content_ref} className="nav2">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link
              to="home"
              activeClass="activenav"
              smooth={true}
              duration={500}
              onClick={() => AfterClickedLink(".nav2")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="activenav"
              smooth={true}
              duration={500}
              onClick={() => AfterClickedLink(".nav2")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="courses"
              activeClass="activenav"
              smooth={true}
              duration={500}
              onClick={() => AfterClickedLink(".nav2")}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="activenav"
              smooth={true}
              duration={500}
              onClick={() => AfterClickedLink(".nav2")}
            >
              Contact
            </Link>
          </li>
          <li>
            {
            socialicons.map(el=>(
              <span key={el.id}>
              <a href={el.link}>
                <FontAwesomeIcon icon={el.icon} />
              </a>
            </span>
            ))
            }
          </li>
        </ul>
      </nav>
    </HeaderElement>
  );
}
