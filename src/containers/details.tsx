import { connect } from 'react-redux';
import Details from '../pages/details';
import { get } from 'lodash';
import { changeTheme } from '../actions/themeActions';

const mapStateToProps = (state: any, props: any) => {
    const id = get(props, 'match.params.id');
    const query = get(props, 'match.params.query');

    const pokemon = query
        ? get(state, `search.data`, {})
        : get(state, `pokemon.list[${id}]`, {});

    return ({ pokemon });
}

export default connect(mapStateToProps, { changeTheme })(Details); 