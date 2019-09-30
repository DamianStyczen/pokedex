import React from 'react';
import styled from 'styled-components';

interface ListProps {
    data: Array<any>,
    fetchPokemon: any
}

class List extends React.Component<ListProps> {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    render() {
        const { data } = this.props;
        const output = data && data.map((item, i) => (
            <li key={i}>{item.name}</li>
        ))

        return (
            <div>
                <h2>List</h2>
                <ul>
                    {output}
                </ul>

            </div>
        );
    }
}

export default List;
