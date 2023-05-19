import styled from "styled-components";
import Logo from "../../components/Logo";
import Header from "../../constants/Header";
import LoginForm from "./LoginForm";

export default function LoginPage() {

    return (
        <LoginPageContainer>
            <Header />
            <Logo />
            <LoginForm />
        </LoginPageContainer>
    )
}

const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column; 
`;
