import React from 'react';
import styled from 'styled-components';
import Search from '../containers/search';
import Filters from '../containers/filters';

interface NavbarProps {
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background: tomato;
    padding: 0 20px;
`;

const Navbar = (props: NavbarProps) => {
    return (
        <Nav>
            <Filters />
            <Search />
        </Nav>
    )
}

export default Navbar;
