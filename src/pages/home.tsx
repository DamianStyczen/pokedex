import React from 'react';
import styled from 'styled-components';
import List from '../components/list';
import Pokemon from '../types/pokemon';
import LoadMoreButton from '../containers/load-more-button';
import Navbar from '../components/navbar';

interface HomePageProps {
    data: Array<Pokemon>;
    status: string;
    fetchPokemon: any;
}

const Loader = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    color: white;
    z-index: 99;
`;

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
        const { status, data } = this.props;
        const isProgress = status === 'PROGRESS';
        const isError = status === 'ERROR';

        const showLoader = isProgress || isError;

        return (
            <div>
                {showLoader && (
                    <Loader>
                        <h2>
                            {isError ? 'Something went wrong...' : 'Loading...'}
                        </h2>
                    </Loader>
                )}
                <StyledHero>
                    <StyledHeader>Pokedex</StyledHeader>
                </StyledHero>
                <Navbar />
                <StyledMain>
                    <List data={data} />
                    <LoadMoreButton />
                </StyledMain>
            </div>
        );
    }
}

export default HomePage;
