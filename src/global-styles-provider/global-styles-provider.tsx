import { createGlobalStyle } from 'styled-components';

const GlobalStylesProvider = createGlobalStyle`
* {
    padding: 0;
    margin: 0;  
    box-sizing: border-box;
}
`;

export default GlobalStylesProvider;
