import React, { useEffect, useState } from "react";
import { Bars, Nav, NavLink, NavMenu } from "./NavStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      {" "}
      {isMobile && <Bars onClick={toggleSidebar} />}{" "}
      <NavMenu isOpen={isOpen || !isMobile}>
        <NavLink to="/homePage/home" activeStyle onClick={closeSidebar}>
          Home{" "}
        </NavLink>{" "}
        <NavLink to="/treatments" activeStyle onClick={closeSidebar}>
          Treatments{" "}
        </NavLink>{" "}
        <NavLink to="/hospitals" activeStyle onClick={closeSidebar}>
          Hospitals{" "}
        </NavLink>{" "}
        <NavLink to="/doctors" activeStyle onClick={closeSidebar}>
          Doctors{" "}
        </NavLink>{" "}
        <NavLink to="/blogs" activeStyle onClick={closeSidebar}>
          Blogs{" "}
        </NavLink>{" "}
        <NavLink to="/sign-up" activeStyle onClick={closeSidebar}>
          Sign Up{" "}
        </NavLink>{" "}
      </NavMenu>{" "}
    </Nav>
  );
};

export default Navbar;
