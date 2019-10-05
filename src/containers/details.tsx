import { connect } from 'react-redux';
import Details from '../pages/details';
import { get } from 'lodash';

const mapStateToProps = (state: any, props: any) => {
    const id = get(props, 'match.params.id');
    const query = get(props, 'match.params.query');

    const data = query
        ? get(state, `pokemon.search[${query}]`, {})
        : get(state, `pokemon.list[${id}]`, {});

    return ({ data });
}

export default connect(mapStateToProps, null)(Details); 