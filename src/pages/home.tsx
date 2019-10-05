import React from 'react';
import styled from 'styled-components';
import List from '../components/list';
import { fetchPokemon } from '../actions/pokemonActions';

interface HomePageProps {
    data: Array<any>;
    fetchPokemon: any;
}

const StyledMain = styled.main`
    width: 100%;
    display: flex;
`;

class HomePage extends React.Component<HomePageProps> {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    render() {
        return (
            <div>
                <StyledMain>
                    <List data={this.props.data} />
                </StyledMain>
            </div>
        );
    }
}

export default HomePage;
