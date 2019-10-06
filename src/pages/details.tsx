import React from 'react';
import styled from 'styled-components';
import Pokemon from '../types/pokemon';
import Navbar from '../components/navbar';

interface DetailsPageProps {
    data: Pokemon;
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }: any) => theme.colors.white};
`;

const StyledHeader = styled.h1`
    background-color: ${({ theme }: any) => theme.colors.primary};
    width: 100%;
    height: 50px;
    text-align: center;
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

const DetailsPage = (props: DetailsPageProps) => {
    const { data } = props;

    if (!data) {
        return (
            <h1>No data</h1>
        )
    }

    return (
        <StyledWrapper>
            <Navbar search goBack />
            <ImageWrapper>
                {data.sprites && <StyledImage src={data.sprites.front_default} alt={data.name} />}
            </ImageWrapper>
            <StyledHeader>
                {data.name}
            </StyledHeader>
        </StyledWrapper>
    )
}

export default DetailsPage;
