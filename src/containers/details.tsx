import { connect } from 'react-redux';
import Details from '../pages/details';
import { get } from 'lodash';

const mapStateToProps = (state: any, props: any) => {
    const id = get(props, 'match.params.id');

    return ({
        data: get(state, `pokemon.list[${id}]`, {})
    })
}

export default connect(mapStateToProps, null)(Details); 