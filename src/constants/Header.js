import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            <StyledLink color="#5D9040">Entrar</StyledLink>
            <StyledLink to={"/signup"} color="#9C9C9C">Cadastrar-se</StyledLink>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    display: flex;
    position: absolute;
    gap: 15px;
    right: 420px;
    top: 30px;
`;

const StyledLink = styled(Link)`
    color: ${(props) => props.color};
`;