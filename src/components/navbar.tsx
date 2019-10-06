import React from 'react';
import styled from 'styled-components';
import Search from '../containers/search';
import Filters from '../containers/filters';
import GoBackButton from './go-back-button';

interface NavbarProps {
    filters?: boolean;
    title?: boolean;
    search?: boolean;
    goBack?: boolean;
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
    const { title, filters, search, goBack } = props;



    return (
        <Nav>
            {goBack && <GoBackButton />}
            {filters && <Filters />}
            {title && <h1>Pokedex</h1>}
            {search && <Search />}

        </Nav>
    )
}

export default Navbar;
