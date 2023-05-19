import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        
    }
    button {
        
    }
    input {
        
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {

    }
    a {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
    }
    :disabled {

    }
`

export default GlobalStyle;