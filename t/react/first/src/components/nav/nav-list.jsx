import React from "react";
import navList from "../../constants/nav-list";
import NavItem from "./nav-item";

const NavList = () => {
  return (
    <>
      <nav>
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavItem {...nav} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
