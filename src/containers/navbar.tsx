import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { searchForPokemon } from '../actions/pokemonActions';

export default connect(null, { searchForPokemon })(Navbar); 