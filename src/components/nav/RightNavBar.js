
import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
li {
padding: 18px 10px;
}
@media (max-width: 768px) {
flex-flow: column nowrap;
background-color: #131313;
position: fixed;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 300px;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
li {
  color: #fff;
}
}
`

const TestRightNavBar = ({ open }) => {

    return (
        <ul>
            <Ul open={open}>
                <li>Work</li>
                <li>About</li>
                <li>Contact </li>
            </Ul>
        </ul>
    )
}

export default TestRightNavBar