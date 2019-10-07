import { connect } from 'react-redux';
import { getTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

const mapStateToProps = (state: any) => {
    return ({
        theme: getTheme(state.theme.theme)
    });
}

export default connect(mapStateToProps, null)(ThemeProvider); 