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
    border-radius: 5px;
    overflow: hidden;
`;

const Background = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const NameTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .6);
    position: absolute;
    bottom: 0;
    height: 30px;
    width: 100%;
    color: white;
`;

const NameSpan = styled.span`
    text-transform: capitalize;
    margin-left: 10px;
`;

const Image = styled.img`
    margin-bottom: 10px;
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
    const { id, name, types, sprites } = props.pokemon;

    const parsedTypes = types.map(item => item.type.name);
    const sprite = sprites.front_default;

    const background = (
        <Background>
            {parsedTypes.map((type: string) => <BackgroundTile type={type} />)}
        </Background>
    )

    return (
        <Tile>
            {background}
            {sprite && <Image src={sprite} alt={name} />}
            <NameTag>
                #{id}<NameSpan>{name}</NameSpan>
            </NameTag>
        </Tile>
    );
}

export default ListTile;
