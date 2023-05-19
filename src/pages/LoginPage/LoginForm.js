import styled from "styled-components"

export default function LoginForm() {
    return (
        
        <LoginPageContent>
            <form>
                <input
                    placeholder="E-mail"
                    type="email"
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                />
                <button>Criar conta</button>
            </form>
        </LoginPageContent>
    )
}

const LoginPageContent = styled.main`
    margin-top: 140px;
    button {
        margin-top: 61px;
    }
`;