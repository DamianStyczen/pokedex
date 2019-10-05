import React, { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchProps {
    searchStart: any;
    status: string;
}

interface SearchState {
    query: string;
    previousStatus: string;
}

class Search extends React.Component<SearchProps, SearchState> {
    state = {
        previousStatus: this.props.status,
        query: ''
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            query: e.currentTarget.value
        })
    }

    handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { searchStart } = this.props;
        const { query } = this.state;

        searchStart(query);
    }

    render() {
        const { query } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    placeholder="Search"
                    onChange={this.handleChange}
                    value={query}
                />
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default Search;
