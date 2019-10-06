import { connect } from 'react-redux';
import Filters from '../components/filters';
import { fetchPokemon, filterPokemon } from '../actions/pokemonActions';

export default connect(
    null,
    {
        fetchPokemon,
        filterPokemon: (filter: string) => filterPokemon(filter)
    }
)(Filters); 