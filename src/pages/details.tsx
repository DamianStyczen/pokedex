import React from 'react';
import styled from 'styled-components';
import Pokemon from '../types/Pokemon';

interface DetailsPageProps {
    data: Pokemon;
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 384px;
    height: 384px;
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
            {data.sprites && <StyledImage src={data.sprites.front_default} alt={data.name} />}
            <h1>{data.name}</h1>
        </StyledWrapper>
    )
}

export default DetailsPage;
