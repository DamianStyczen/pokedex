import typeColors from './types-colors';

const defaultTheme = {
    colors: {
        white: 'whitesmoke',
        black: '#000000',
        primary: ' #6890F0',
        secondary: '#9DB7F5',
        button: 'buttonface',
        danger: 'tomato',
        loading: 'lightblue',
        ...typeColors

    }
}

// export const getTheme = (type: string) => {
//     const theme = typeColors[type];
// } 

export default defaultTheme;