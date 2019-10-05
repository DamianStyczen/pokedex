import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pokemon from '../types/pokemon';

interface ListProps {
    data: Array<Pokemon>
}

const StyledList = styled.ol`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
`;

const StyledListItem = styled.li`
    width: 140px;
    height: 140px;
    text-align: center;
    border: 1px solid black;
    margin: 5px;
    text-transform: capitalize;
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
            <StyledListItem key={i}>
                <StyledLink to={`/details/${i}`} >
                    {item.sprites && <img src={item.sprites.front_default} alt={item.name} />}
                    {item.id}. {item.name}
                </StyledLink>
            </StyledListItem>
        );
    })

    return (
        <div>
            <StyledList>
                {output}
            </StyledList>

        </div>
    );
}

export default List;
