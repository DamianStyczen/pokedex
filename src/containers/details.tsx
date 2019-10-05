import { connect } from 'react-redux';
import Details from '../pages/details';
import { get } from 'lodash';

const mapStateToProps = (state: any, props: any) => {
    console.log({ state, props });
    const id = get(props, 'match.params.id');
    console.log({ id });
    return ({
        data: get(state, `pokemon.list[${id}]`, {})
    })
}

export default connect(mapStateToProps, null)(Details); 