import React from 'react'
import styled from 'styled-components';


const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
li {
padding: 18px 10px;

}
@media (max-width: 500rem) {
flex-flow: column nowrap;
background-color: #131313;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 100%;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
li {
  color: #fff;
  text-align: center; 
  padding-top: 9rem; 
  font-size: 50px; 
}
}
`

const RightNavBar = ({ open }) => {

    return (
        <ul>
            <Ul open={open}>

                <li className="navbar-item"><a href="/work">Work</a></li>
                <li className="navbar-item"><a href="/about">About</a></li>
                <li className="navbar-item"><a href="/contact">Contact</a></li>

            </Ul>
        </ul >
    )
}

export default RightNavBar