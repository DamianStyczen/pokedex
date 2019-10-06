import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.button};
`;
const GoBackButton = () => {
    // @ts-ignore - has problem with 'as' property
    return <StyledButton as={Link} to={'/'}>Go back</StyledButton>;
}

export default GoBackButton;
