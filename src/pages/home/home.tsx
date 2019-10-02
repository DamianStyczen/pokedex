import React from 'react';
import styled from 'styled-components';
import List from '../../containers/list';

const StyledMain = styled.main`
    width: 100%;
    display: flex;
`;
const HomePage: React.FC = () => {
    return (
        <div>
            <StyledMain>
                <List />
            </StyledMain>
        </div>
    );
}

export default HomePage;
