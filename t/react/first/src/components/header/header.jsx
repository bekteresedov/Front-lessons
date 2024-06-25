import React from "react";
import "./style.css";
import Logo from "../logo/logo";
import NavList from "../nav/nav-list";
const Header = () => {
  return (
    <>
      <header className="header">
        <Logo />
        <NavList />
      </header>
    </>
  );
};

export default Header;
