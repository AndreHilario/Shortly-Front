import { useContext } from "react";
import styled from "styled-components"
import { UserContext } from "../contexts/UserContext";

export default function Welcome() {

    const { user } = useContext(UserContext);

    return (
        <WelcomeContent>
            <h3>Seja bem-vindo(a), {user.name}!</h3>
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