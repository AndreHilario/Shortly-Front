import styled from "styled-components"

export default function HeaderUser() {
    return (
        <HeaderUserContent>
            <p>Home</p>
            <p>Ranking</p>
            <span>Sair</span>
        </HeaderUserContent>
    )
}

const HeaderUserContent = styled.header`
    display: flex;
    gap: 15px;
    position: absolute;
    top: 60px;
    right: 400px;
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
    }
    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
        text-decoration: underline;
    }
`;