import React from 'react';
import styled from 'styled-components';
import Button from './button';

const StyledListWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 99;

`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 350px;
    list-style: none;
`;

interface StyledFilterButtonProps {
    theme: any;
    pokemonType: string;
}

const StyledFilterButton = styled(Button)`
    margin: 5px 15px;
    background-color: ${({ theme, pokemonType }: StyledFilterButtonProps) => theme.colors[pokemonType].secondary};
`;

const NoFiltersButton = styled(Button)`
    margin: 5px 15px;
    width: 280px;
    background-color: tomato;
`;

interface FiltersProps {
    filterPokemon: any;
    fetchPokemon: any;
}

interface FiltersState {
    showList: boolean;
    type: string;
}

const types: Array<string> = [ // TODO make it into enum
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
];

class Filters extends React.Component<FiltersProps, FiltersState> {
    state = {
        showList: false,
        type: ''
    }

    toggleList = () => this.setState({
        showList: !this.state.showList
    });

    handleFilterClick = (type?: string) => {
        const { fetchPokemon, filterPokemon } = this.props;
        if (type) {
            this.setState({ type });

            return filterPokemon(type);
        }

        fetchPokemon();
    }

    render() {
        const { showList, type } = this.state;

        const list = (
            <StyledListWrapper onClick={this.toggleList}>
                <StyledList>
                    <li key={'nofilters'}>
                        <NoFiltersButton onClick={() => this.handleFilterClick()}>
                            No Filters
                        </NoFiltersButton>
                    </li>
                    {types.map(type => (
                        <li key={type}>
                            <StyledFilterButton pokemonType={type} onClick={() => this.handleFilterClick(type)}>
                                {type}
                            </StyledFilterButton>
                        </li>
                    ))}
                </StyledList>
            </StyledListWrapper>
        )

        return (
            <div>
                <Button onClick={this.toggleList}>
                    {type || 'Filters'}
                </Button>
                {showList && list}
            </div>
        );
    }
}

export default Filters;
