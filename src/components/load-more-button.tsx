import React from 'react';
import styled from 'styled-components';

interface LoadMoreButtonProps {
    nextUrl: string;
    fetchPokemon: any;
}

const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 20px;
    background: red;
`;

const LoadMoreButton = (props: LoadMoreButtonProps) => {
    const { nextUrl, fetchPokemon } = props;

    return (
        <StyledButton onClick={() => fetchPokemon(nextUrl)}>Load more</StyledButton>
    )
}

export default LoadMoreButton;
