import styled from "styled-components";
import logo from "../assets/Logo.png";
import title from "../assets/Shortly.png";

export default function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="Logo image" />
            <img src={title} alt="Logo title" />
        </LogoContainer>
    )
}

const LogoContainer = styled.header`
    display: flex;
`;