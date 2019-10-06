import { connect } from 'react-redux';
import Home from '../pages/home';
import { fetchPokemon } from '../actions/pokemonActions';
import { get } from 'lodash';

const mapStateToProps = (state: any) => ({
    data: get(state, 'pokemon.list', []),
    status: get(state, 'pokemon.status')
})

export default connect(mapStateToProps, { fetchPokemon })(Home); 