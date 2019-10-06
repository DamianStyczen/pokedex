import { createGlobalStyle } from 'styled-components';

const GlobalStylesProvider = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;  
        box-sizing: border-box;
    }

    body {
        /* width: 100%; */
        max-width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: black;
        text-decoration: none;
    }

    button {
        border: none;
        box-shadow: none;
    }
`;

export default GlobalStylesProvider;
