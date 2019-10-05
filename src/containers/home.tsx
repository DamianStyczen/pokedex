import { connect } from 'react-redux';
import Home from '../pages/home';
import { fetchPokemon } from '../actions/pokemonActions';

const mapStateToProps = (state: any) => ({
    data: state.pokemon.list
})

export default connect(mapStateToProps, { fetchPokemon })(Home); 