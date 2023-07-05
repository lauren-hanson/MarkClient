import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Burger from './Burger';
import "./NavBar.css"


const Nav = styled.nav`
z-index: +1;
position: fixed;
width: 100%;
height: 55px;
padding: 0 20px;
display: flex;
justify-content: space-between;
background-color: #fafafa;
color: #2e252c;
border-bottom: 1px solid #2e252c; 


`;

export const NavBar = () => {
  return (
    <div className="styledNav">
      <Nav>
        <div className="logo">
          <Link to="/contact">contact</Link>
        </div>
        <a className="navbar-item" href="/">
          <h1 className="navBarHeadings">Mark Thomas</h1>
        </a>
        <Burger />
      </Nav>
    </div>
  )
}