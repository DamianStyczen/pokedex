import { connect } from 'react-redux';
import List from '../components/list/list';
import { fetchPokemon } from '../actions/pokemonActions';

const mapStateToProps = (state: any) => ({
    data: state.pokemon.list
})

// const mapDispatchToProps = (state: any) => ({})

export default connect(mapStateToProps, { fetchPokemon })(List); 