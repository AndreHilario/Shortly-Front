import styled from "styled-components"
import Logo from "../../components/Logo";
import Ranking from "../../components/Ranking";
import MenuRankingPage from "./MenuRankingPage";
import Welcome from "../../components/Welcome";
import HeaderUser from "../../constants/HeaderUser";

export default function RankingPage() {
    return (
        <RankingPageContainer>
            <Welcome />
            <HeaderUser />
            <Logo />
            <Ranking />
            <MenuRankingPage />
        </RankingPageContainer>
    )
}

const RankingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;