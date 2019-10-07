import React from 'react';
import styled from 'styled-components';
import Search from '../containers/search';
import Filters from '../containers/filters';
import GoBackButton from './go-back-button';

interface NavbarProps {
    filters?: boolean;
    search?: boolean;
    goBack?: boolean;
    title?: boolean;
}

interface NavProps {
    theme: any;
}
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background: ${({ theme }: NavProps) => theme.colors.primary};
    padding: 0 20px;
`;

const Navbar = (props: NavbarProps) => {
    const { filters, search, goBack } = props;

    return (
        <Nav>
            {goBack && <GoBackButton />}
            {filters && <Filters />}
            {search && <Search />}

        </Nav>
    )
}

export default Navbar;
