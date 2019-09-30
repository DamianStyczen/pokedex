import React from 'react';
import styled from 'styled-components';
import List from '../../containers/list';

const HomePage: React.FC = () => {
    return (
        <div>
            <h2>Home</h2>
            <div>Home content</div>
            <List />
        </div>
    );
}

export default HomePage;
