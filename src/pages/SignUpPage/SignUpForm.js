import styled from "styled-components";

export default function SignUpForm() {

    return (
        <SignUpContent>
            <form>
                <input
                    placeholder="Nome"
                    type="text"
                />
                <input
                    placeholder="E-mail"
                    type="email"
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                />
                <input
                    placeholder="Confirmar senha"
                    type="password"
                    autoComplete="new-password"
                />
                <button>Criar conta</button>
            </form>
        </SignUpContent>
    )
}

const SignUpContent = styled.main`
    margin-top: 140px;
    button {
        margin-top: 61px;
    }
`;