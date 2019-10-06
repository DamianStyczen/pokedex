import React from 'react';
import styled from 'styled-components';
import Button from './button';
import { Link } from 'react-router-dom';

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
`;
const GoBackButton = () => {
    // @ts-ignore
    return <StyledButton as={Link} to={'/'}>Go back</StyledButton>;
}

export default GoBackButton;
