import styled from "styled-components";
import logo from "../assets/Logo.png";

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="Logo" />
        </LogoContainer>
    )
}

const LogoContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 95px;
`;