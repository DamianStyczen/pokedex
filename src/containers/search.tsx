import { connect } from 'react-redux';
import Search from '../components/search';
import { searchStart } from '../actions/searchActions';
import { get } from 'lodash';

const mapStateToProps = (state: any) => ({
    status: get(state, 'search.status', null),
    data: get(state, 'search.data', null)
})

export default connect(mapStateToProps, { searchStart })(Search); 