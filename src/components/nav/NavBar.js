import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import "./NavBar.css"


const Nav = styled.nav`
z-index: +1;
position: fixed;
width: 100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;
background-color: #fafafa;

`;

export const NavBar = () => {
  return (
    <div className="styledNav">
      <Nav>
        <div className="logo">
          contact
        </div>
        <a className="navbar-item" href="/">
          <h1 className="navBarHeadings">Mark Thomas</h1>
        </a>
        <Burger />
      </Nav>
    </div>
  )
}