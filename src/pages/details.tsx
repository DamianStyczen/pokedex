import React from 'react';
import styled from 'styled-components';
import Pokemon from '../types/pokemon';
import Navbar from '../components/navbar';
import { isEmpty } from 'lodash';

interface DetailsPageProps {
    pokemon: Pokemon;
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }: any) => theme.colors.white};
    border-radius: 5px;
`;

const StyledHeader = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }: any) => theme.colors.primary};
`;

const ImageWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 10px;

    ::before {
        content: '';
        position: absolute;
        display: block;
        width: 192px;
        height: 96px;
        background: rgba(0, 0, 0, .2);
        bottom: 0px;
        left: calc(50% - 96px);
        border-radius: 50%;
        z-index: -1;
    }
`;

const StyledImage = styled.img`
    width: 192px;
    height: 192px;
    border-radius: 50%;
`;

const NameSpan = styled.span`
    text-transform: capitalize;
    margin-left: 10px;
`;

const Table = styled.table`
    width: 100%;
    margin: 0 auto;
`;

const TableRow = styled.tr`
    padding: 0 20px;
`;

const TableCell = styled.td`
    width: 33%;
    padding: 5px 0;
`;

const TableHeader = styled.th`
    width: 33%;
    padding: 5px 0;
`;

interface TypeDivProps {
    theme: any;
    type: string;
}

const TypeDiv = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 125px;
    height: 30px;
    border-radius: 5px;
    text-transform: capitalize;
    background-color: ${({ type, theme }: TypeDivProps) => theme.colors[type]};
`;

const DetailsPage = ({ pokemon }: DetailsPageProps) => {
    if (isEmpty(pokemon)) {
        return (
            <StyledWrapper>
                <Navbar search goBack />
                <StyledHeader>
                    No data has been found. ;(
                </StyledHeader>
            </StyledWrapper>
        )
    }


    const { id, name, sprites, types, stats } = pokemon;
    const sprite = sprites.front_default;
    const parsedTypes = types.map(item => item.type.name);
    const parsedStats = stats.reduce((acc, item) => {
        acc[item.stat.name] = item.base_stat;

        return acc;
    }, {});

    const table = (
        <Table>
            <tbody>
                <TableRow>
                    <TableHeader>Types:</TableHeader>
                    <TableCell><TypeDiv type={parsedTypes[0]}>{parsedTypes[0]}</TypeDiv></TableCell>
                    <TableCell><TypeDiv type={parsedTypes[1]}>{parsedTypes[1]}</TypeDiv></TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader>Stats:</TableHeader>
                    <TableCell>HP:</TableCell>
                    <TableCell>{parsedStats.hp}</TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader />
                    <TableCell>Attack:</TableCell>
                    <TableCell>{parsedStats.attack}</TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader />
                    <TableCell>Defense:</TableCell>
                    <TableCell>{parsedStats.defense}</TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader />
                    <TableCell>Speed:</TableCell>
                    <TableCell>{parsedStats.speed}</TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader />
                    <TableCell>Special Attack:</TableCell>
                    <TableCell>{parsedStats['special-attack']}</TableCell>
                </TableRow>
                <TableRow>
                    <TableHeader />
                    <TableCell>Special Defense:</TableCell>
                    <TableCell>{parsedStats['special-defense']}</TableCell>
                </TableRow>
                <TableRow>
                    <th></th>
                    <TableCell>Defense</TableCell>
                    <TableCell>{parsedStats.defense}</TableCell>
                </TableRow>
            </tbody>
        </Table>
    )

    return (
        <StyledWrapper>
            <Navbar search goBack />
            <ImageWrapper>
                {sprite && <StyledImage src={sprite} alt={name} />}
            </ImageWrapper>
            <StyledHeader>
                #{id} <NameSpan>{name}</NameSpan>
            </StyledHeader>
            {table}
        </StyledWrapper>
    )
}

export default DetailsPage;
