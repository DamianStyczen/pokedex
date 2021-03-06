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

const StyledWrapper = styled.div`
    padding-bottom: 30px;
`;

const StyledHero = styled.header`
  font-family: 'Mansalva', cursive;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  background: ${({ theme }: any) => theme.colors.secondary};
`;

const StyledHeader = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 6em;
`;

const StyledSignature = styled.p`
    margin-left: 30%;
`;

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background: ${({ theme }: any) => theme.colors.white};
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
            <StyledWrapper>
                {showLoader && (
                    <Loader>
                        <h2>
                            {isError ? 'Something went wrong...' : 'Loading...'}
                        </h2>
                    </Loader>
                )}
                <StyledHero>
                    <StyledHeader>Pokedex</StyledHeader>
                    <StyledSignature>by Damian Styczen</StyledSignature>
                </StyledHero>
                <Navbar filters search />
                <StyledMain>
                    <List data={data} />
                    <LoadMoreButton />
                </StyledMain>
            </StyledWrapper>
        );
    }
}

export default HomePage;
