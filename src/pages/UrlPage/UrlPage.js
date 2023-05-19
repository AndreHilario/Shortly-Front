import styled from "styled-components";
import Welcome from "../../components/Welcome";
import HeaderUser from "../../constants/HeaderUser";
import MenuUrlPage from "./MenuUrlPage";
import UrlPageForm from "./UrlPageForm";
import Logo from "../../components/Logo";

export default function UrlPage() {
    return (
        <UrlPageContainer>
            <Welcome />
            <HeaderUser />
            <Logo />
            <UrlPageForm />
            <MenuUrlPage />
        </UrlPageContainer>
    )
}

const UrlPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;