import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Pokemon from '../types/pokemon';
import { get } from 'lodash';

interface ListTileProps {
    pokemon: Pokemon;
}

const Tile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 140px;
    height: 140px;
    margin: 5px;
`;

const Background = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

interface BackgroundTileProps {
    theme: any;
    type: string;
}

const BackgroundTile = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme, type }: BackgroundTileProps) => theme.colors[type]};
`;

const ListTile = (props: ListTileProps) => {
    const { name, types, sprites } = props.pokemon;

    const parsedTypes = types.map(item => item.type.name);
    const sprite = sprites.front_default;
    console.log(sprite);

    const background = (
        <Background>
            {parsedTypes.map((type: string) => <BackgroundTile type={type} />)}
        </Background>
    )

    return (
        <Tile>
            {background}
            {sprite && <img src={sprite} alt={name} />}
        </Tile>
    );
}

export default ListTile;
