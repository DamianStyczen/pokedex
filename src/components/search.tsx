import React, { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router';

interface MessageBoxProps {
    isError: boolean;
    isProgress: boolean
}
const MessageBox = styled.div`
    position: absolute;
    width: 100%;
    background: ${(props: MessageBoxProps) => props.isError ? 'tomato' : 'lightblue'};
`;

interface SearchProps {
    searchStart: any;
    status: string;
}

interface SearchState {
    query: string;
    previousStatus: string;
    showMessage: boolean;
}

class Search extends React.Component<SearchProps, SearchState> {
    state = {
        previousStatus: this.props.status,
        query: '',
        showMessage: false
    }

    timeout: number = null;


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
                previousStatus: status,
                showMessage: true
            });

            if (status === 'ERROR') {
                this.timeout = setTimeout(() => this.setState({
                    showMessage: false
                }), 5000)
            }
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { query, previousStatus, showMessage } = this.state;
        const { status } = this.props;

        const statusChanged = previousStatus !== status;
        const isSuccess = status === 'SUCCESS';
        const isProgress = status === 'PROGRESS';
        const isError = status === 'ERROR';

        if (statusChanged && isSuccess) {
            return (<Redirect to={`/search/${query}`} />);
        }

        const messageBox = (
            <MessageBox isError={isError} isProgress={isProgress} >
                {isError ? 'Not found' : 'Searching...'}
            </MessageBox>
        )

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    placeholder="Search"
                    onChange={this.handleChange}
                    value={query}
                />
                {showMessage && messageBox}
                <button type="submit">Search</button>
            </form>

        )
    }
}

export default Search;
