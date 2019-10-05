import React, { FormEvent, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { searchForPokemon } from '../actions/pokemonActions';

interface NavbarProps {
    searchForPokemon: any;
}



const Navbar = (props: NavbarProps) => {
    const [input, setInput] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.searchForPokemon(input);
    }
    return (
        <nav>
            <div>
                <button>Filters</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Search"
                    onChange={handleChange}
                    value={input}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Navbar;
