import { connect } from 'react-redux';
import LoadMoreButton from '../components/load-more-button';
import { fetchPokemon } from '../actions/pokemonActions';
import { get } from 'lodash';

const mapStateToProps = (state: any) => ({
    nextUrl: get(state, 'pokemon.nextUrl', '')
})

export default connect(mapStateToProps, { fetchPokemon })(LoadMoreButton);