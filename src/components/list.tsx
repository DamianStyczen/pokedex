import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pokemon from '../types/pokemon';
import ListTile from './list-tile';
import { get } from 'lodash';

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
`;

interface StyledListItemProps {
    type: string,
    theme: any
}

const StyledListItem = styled.li`
    width: 140px;
    height: 140px;
    text-align: center;
    margin: 5px;
    text-transform: capitalize;
    background: ${ ({ theme, type }: StyledListItemProps) => theme.colors[type]};
`;

const StyledLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`;

const List = (props: ListProps) => {
    const { data } = props;
    const output = data && data.map((item, i) => {
        const types = item.types.map(item => item.type.name);

        // return (
        //     <li key={i}>
        //         <StyledLink to={`/details/${i}`} >
        //             {item.sprites && <img src={item.sprites.front_default} alt={item.name} />}
        //             {item.id}. {item.name}
        //         </StyledLink>
        //     </li>
        // );

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
