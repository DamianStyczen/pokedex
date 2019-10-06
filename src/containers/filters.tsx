import { connect } from 'react-redux';
import Filters from '../components/filters';
import { fetchPokemon } from '../actions/pokemonActions';
import { get } from 'lodash';

export default connect(null, { fetchPokemon: (filter: string) => fetchPokemon(filter) })(Filters); 