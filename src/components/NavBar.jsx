import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'

const Navbar=()=> {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to='/'>
        <a href="#" className="nav__brand">
          <img src='assets/pizzalogot.png' alt="Veritas Pizzeria" style={{height:'30px'}}/>Veritas Pizzeria
        </a>
      </Link>
      <ul className={active}>
      <NavLink to='/delacasa' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pizzas de la casa</NavLink>
      <NavLink to='/especialidades' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>especialidades</NavLink>
      <NavLink to='/delicatezens'  className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Delicatezens</NavLink>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;