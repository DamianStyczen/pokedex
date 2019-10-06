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
    background-color: grey;
    width: 100%;
    height: 50px;
    text-align: center;
`;

const StyledImage = styled.img`
    width: 384px;
    height: 384px;
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
            {data.sprites && <StyledImage src={data.sprites.front_default} alt={data.name} />}
            <StyledHeader>
                {data.name}
            </StyledHeader>
        </StyledWrapper>
    )
}

export default DetailsPage;
