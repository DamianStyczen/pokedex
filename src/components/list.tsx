import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pokemon from '../types/pokemon';
import ListTile from './list-tile';

interface ListProps {
    data: Array<Pokemon>
}

const StyledList = styled.ol`
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
    margin-top: 5px;
`;

const StyledLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`;

const List = (props: ListProps) => {
    const { data } = props;
    const output = data && data.map((item, i) => {
        return (
            <li key={i}>
                <StyledLink to={`/details/${i}`} >
                    <ListTile pokemon={item} />
                </StyledLink>
            </li>
        )
    })

    return (
        <StyledList>
            {output}
        </StyledList>
    );
}

export default List;
