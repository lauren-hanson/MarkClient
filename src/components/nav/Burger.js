import React, { useState } from 'react';
import styled from 'styled-components'
import RightNavBar from './RightNavBar';

const Burger = () => {

  const [open, setOpen] = useState(false)

  const StyledBurger = styled.div`
  color: #2e252c;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 480rem) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.12rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>

        <div />
        <div />
        <div />
      </StyledBurger >
      <RightNavBar open={open} />
    </>
  )
};

export default Burger