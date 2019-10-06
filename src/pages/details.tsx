import React from 'react';
import styled from 'styled-components';
import Pokemon from '../types/pokemon';
import { Link } from 'react-router-dom';

interface DetailsPageProps {
    data: Pokemon;
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const StyledLink = styled(Link)`
`;

const DetailsPage = (props: DetailsPageProps) => {
    const { data } = props;
    console.log(data);

    if (!data) {
        return (
            <h1>No data</h1>
        )
    }

    return (
        <StyledWrapper>
            <StyledLink to='/' >Go back</StyledLink>
            {data.sprites && <StyledImage src={data.sprites.front_default} alt={data.name} />}
            <StyledHeader>
                {data.name}
            </StyledHeader>
        </StyledWrapper>
    )
}

export default DetailsPage;
