import React from "react";
import "./style.css";
import NavList from "../nav/nav-list";
import Logo from "../logo/logo";
const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <NavList />
      </header>
    </>
  );
};

export default Header;
