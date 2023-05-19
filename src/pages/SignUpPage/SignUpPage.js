import styled from "styled-components";
import Logo from "../../components/Logo";
import Header from "../../constants/Header";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
    return (
        <SignUpContainer>
            <Header />
            <Logo />
            <SignUpForm />
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
`;