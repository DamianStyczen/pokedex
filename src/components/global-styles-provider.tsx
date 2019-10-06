import { createGlobalStyle } from 'styled-components';

const GlobalStylesProvider = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;  
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');


        font-family: 'Lato', sans-serif;
        max-width: 100vw;
        overflow-x: hidden;
    }

    input {
        font-family: 'Lato', sans-serif;
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
