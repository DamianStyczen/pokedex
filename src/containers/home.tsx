import { connect } from 'react-redux';
import Home from '../pages/home';
import { fetchPokemon } from '../actions/pokemonActions';
// @ts-ignore
import { get } from 'lodash';

const mapStateToProps = (state: any) => ({
    data: get(state, 'pokemon.list', []),
    dataCached: get(state, 'pokemon.dataCached', false)
})

export default connect(mapStateToProps, { fetchPokemon })(Home); 