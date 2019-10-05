import React from 'react';
import styled from 'styled-components';

interface ListProps {
    data: Array<any>,
    fetchPokemon: any
}

const StyledList = styled.ol`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
`;

const StyledListItem = styled.li`
    width: 140px;
    height: 140px;
    text-align: center;
    border: 1px solid black;
    margin: 5px;
    text-transform: capitalize;
`;

class List extends React.Component<ListProps> {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    render() {
        const { data } = this.props;
        const output = data && data.map((item, i) => {
            return (
                <StyledListItem key={i}>
                    {item.sprites && <img src={item.sprites.front_default} alt={item.name} />}
                    {item.name}
                </StyledListItem>
            );
        })

        return (
            <div>
                <StyledList>
                    {output}
                </StyledList>

            </div>
        );
    }
}

export default List;
