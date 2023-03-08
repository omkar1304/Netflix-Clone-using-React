import React, { useEffect, useState } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true);
    }
    else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
        onClick={() => navigate('/')}
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
        />
        <img
          onClick={() => navigate('/profile')}
          className="nav__avatar"
          src="https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
