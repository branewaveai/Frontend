import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav `
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 12;

  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
    height: auto;
  }
`;

export const NavLink = styled(Link)
`
  color: #808080;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: #4d4dff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

export const Bars = styled.div `
  display: none;
  color: #808080;
  cursor: pointer;
  font-size: 1.8rem;
  position: absolute;
  top: 15px;
  left: 15px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    background: white;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    z-index: 1;
  }
`;

export const activeStyle = {
    color: "#4d4dff",
};