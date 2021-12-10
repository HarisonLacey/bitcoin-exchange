import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
     body {
     margin: 0;
     font-family: 'Shippori Antique', sans-serif;
 }
 `
const Themes = {
    colors: {
        grey: 'grey',
        white: 'white',
        lightGrey: 'lightgrey',
        darkGrey: '#303030',
        black: 'black',
    },
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={Themes}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
