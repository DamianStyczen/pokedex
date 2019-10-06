import React from 'react';
import styled from 'styled-components';
import Button from './button';

interface LoadMoreButtonProps {
    nextUrl: string;
    fetchPokemon: any;
}

const StyledButton = styled(Button)`
    margin: 20px;
`;

const LoadMoreButton = (props: LoadMoreButtonProps) => {
    const { nextUrl, fetchPokemon } = props;

    return (
        <StyledButton onClick={() => fetchPokemon(nextUrl)}>Load more</StyledButton>
    )
}

export default LoadMoreButton;
