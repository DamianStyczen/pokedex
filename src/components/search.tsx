import React, { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

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

    componentDidUpdate() {
        const { status } = this.props;
        const { previousStatus } = this.state;

        if (status !== previousStatus) {
            this.setState({
                previousStatus: status
            });
        }
    }

    render() {
        const { query, previousStatus } = this.state;
        const { status } = this.props;

        if (previousStatus === 'PROGRESS' && status === 'SUCCESS') {
            return (<Redirect to={`/search/${query}`} />);
        }

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
