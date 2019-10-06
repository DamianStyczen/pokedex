import React from 'react';
import styled from 'styled-components';

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

`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 350px;
    list-style: none;
`;

const StyledListButton = styled.button`
    width: 125px;
    height: 40px;
    margin: 5px 15px;
    border-radius: 20px;
`;

const NoFiltersButton = styled(StyledListButton)`
    width: 280px;
    background-color: tomato;
`;

interface FiltersProps {
    filterPokemon: any;
    fetchPokemon: any;
}

interface FiltersState {
    showList: boolean;
}

enum Types { // 18
    normal = 1,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy
}

const types: Array<string> = [
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
        showList: false
    }

    toggleList = () => this.setState({ showList: !this.state.showList });

    handleFilterClick = (type?: string) => {
        const { fetchPokemon, filterPokemon } = this.props;
        if (type) {
            return filterPokemon(type);
        }

        fetchPokemon();
    }

    render() {
        const { showList } = this.state;

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
                            <StyledListButton data-type={type} onClick={() => this.handleFilterClick(type)}>
                                {type}
                            </StyledListButton>
                        </li>
                    ))}
                </StyledList>
            </StyledListWrapper>
        )

        return (
            <div>
                <button
                    onClick={this.toggleList}
                >
                    Filters
                </button>
                {showList && list}
            </div>
        );
    }
}

export default Filters;
