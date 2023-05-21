import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca';
        font-style: normal;
        background-color: #fff;
    }
    button {
        width: 182px;
        height: 60px;
        background-color: #5D9040;
        border: 1px solid #5D9040;
        border-radius: 12px;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        cursor: pointer;
    }
    input {
        font-size: 14px;
        color: #9C9C9C;
        box-sizing: border-box;
        width: 769px;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        outline: none;
        padding: 15px;
        margin: 1px;
        cursor: pointer;
        :focus {
            border: 2px solid #5D9040;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
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
