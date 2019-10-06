import styled from 'styled-components';

interface ButtonProps {
    backgroundColor?: string;
    theme: any;
}

const Button = styled.button`
    width: 125px;
    height: 30px;
    border-radius: 5px;
    background-color: ${({ backgroundColor, theme }: ButtonProps) => backgroundColor || theme.secondary};
`;

export default Button;