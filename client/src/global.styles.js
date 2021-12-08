import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    /* max-width: 1200px; */
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        padding: 10px;
        
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
    
}

`