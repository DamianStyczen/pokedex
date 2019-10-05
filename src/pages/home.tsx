import React from 'react';
import styled from 'styled-components';
import List from '../components/list';

interface HomePageProps {
    data: Array<any>;
    dataCached: boolean;
    fetchPokemon: any;
}

const StyledMain = styled.main`
    width: 100%;
    display: flex;
`;

class HomePage extends React.Component<HomePageProps> {
    componentDidMount() {
        const { fetchPokemon, dataCached } = this.props;
        fetchPokemon(dataCached);
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
