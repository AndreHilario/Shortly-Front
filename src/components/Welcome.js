import styled from "styled-components"

export default function Welcome() {
    return (
        <WelcomeContent>
            <h3>Seja bem-vindo(a), Pessoa!</h3>
        </WelcomeContent>
    )
}

const WelcomeContent = styled.header`
    position: absolute;
    top: 69px;
    left: 375px;
    h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
    }
`;