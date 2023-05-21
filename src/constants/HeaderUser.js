import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderUser() {

    const navigate = useNavigate();

    function handleLogout() {
        console.log("1")
        localStorage.removeItem("user");
        console.log("23")

        navigate("/");
    }

    const handleUrls = () => { navigate("/urls") };
    const hanldeRanking = () => { navigate("/ranking") };

    return (
        <HeaderUserContent>
            <p onClick={handleUrls}>Home</p>
            <p onClick={hanldeRanking}>Ranking</p>
            <span onClick={handleLogout}>Sair</span>
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
        cursor: pointer;
    }
    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
        text-decoration: underline;
        cursor: pointer;
    }
`;