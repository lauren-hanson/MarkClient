import React from 'react';
import styled from 'styled-components';
import TestBurger from './TestBurger';

const TestNav = styled.nav`
width: 100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 20px;
display: flex;
justify-content: space-between;
.logo {
  padding: 15px 0;
}
`;

export const TestNavBar = () => {
    return (
        <TestNav>
            <div className="logo">
                Nav Bar
            </div>
            <TestBurger />
        </TestNav>
    )
}