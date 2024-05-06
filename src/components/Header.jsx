import React, { useRef } from "react";
import "../styles/header.css";
import logo from "../images/scoot.svg";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";

function Header() {
  let modal = useRef();
  let close = useRef();
  let x_btn = useRef();
  function openSidebar() {
    modal.current.classList.toggle("modal_open");
    close.current.classList.add("close");
    x_btn.current.classList.add("exchange");
  }
  function closeSidebar() {
    modal.current.classList.remove("modal_open");
    x_btn.current.classList.remove("exchange");
    close.current.classList.remove("close");
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapepr">
          <div className="header__left">
            {/* Yon paneli | */}
            <div ref={modal} className="modal_bg">
              <div className="modal">
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/location">Location</NavLink>
                  </li>
                  <li>
                    <NavLink to="/careers">Careers</NavLink>
                  </li>
                  <div className="sidebar__btn">
                    <NavLink>Get Scootin</NavLink>
                  </div>
                </ul>
              </div>
            </div>
            <button ref={close} className="menu_btn" onClick={openSidebar}>
              <IoMenu className="menu" />
            </button>
            <button ref={x_btn} className="x_btn" onClick={closeSidebar}>
              <RiCloseLine className="menu" />
            </button>
            {/* Shu yergacha pasi header */}
            <NavLink to="/"><img src={logo} alt="Our site logo" /></NavLink>
            <nav className="nav__list">
              <ul>
                <li>
                  <NavLink className="header__title" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__title" to="/location">
                    Location
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__title" to="/careers">
                    Careers
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <NavLink>Get Scootin</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
