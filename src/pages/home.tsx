import React from 'react';
import styled from 'styled-components';
import List from '../components/list';
import Pokemon from '../types/pokemon';
import LoadMoreButton from '../containers/load-more-button';
import Search from '../containers/search';

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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
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
                <Search />
                <StyledMain>
                    <List data={this.props.data} />
                    <LoadMoreButton />
                </StyledMain>
            </div>
        );
    }
}

export default HomePage;
