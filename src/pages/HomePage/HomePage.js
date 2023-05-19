import styled from "styled-components";
import Logo from "../../components/Logo";
import Ranking from "../../components/Ranking";
import MenuHomePage from "./MenuHomePage";
import Header from "../../constants/Header";

export default function HomePage() {

    return (
        <HomePageContainer>
            <Header />
            <Logo />
            <Ranking />
            <MenuHomePage />
        </HomePageContainer>
    )
}

const HomePageContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;