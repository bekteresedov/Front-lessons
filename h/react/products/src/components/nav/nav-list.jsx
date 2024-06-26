import React from "react";
import navData from "../../constants/nav-data";
import NavItem from "./nav-item";

const NavList = () => {
  return (
    <>
      <nav>
        <ul>
          {navData.map((nav) => (
            <li>
              <NavItem title={nav.title} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavList;
