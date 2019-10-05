import React from 'react';
import styled from 'styled-components';
import List from '../components/list';
import Pokemon from '../types/pokemon';

interface HomePageProps {
    data: Array<Pokemon>;
    fetchPokemon: any;
}

const StyledHero = styled.header`
  display: flex;
  align-items: center;
  height: 200px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  width: 100%;
`;

const StyledMain = styled.main`
    width: 100%;
    display: flex;
`;

class HomePage extends React.Component<HomePageProps> {
    componentDidMount() {
        const { fetchPokemon } = this.props;
        fetchPokemon();
    }

    render() {
        return (
            <div>
                <StyledHero>
                    <StyledHeader>Pokedex</StyledHeader>
                </StyledHero>
                <StyledMain>
                    <List data={this.props.data} />
                </StyledMain>
            </div>
        );
    }
}

export default HomePage;
