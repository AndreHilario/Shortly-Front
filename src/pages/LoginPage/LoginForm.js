import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiAuth from "../../services/apiAuth";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function LoginForm() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);

    const { email, password } = form;

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();

        setDisabled(true);

        apiAuth.login(form)
            .then((res) => {
                const { token } = res.data;              
                setUser({ token });
                localStorage.setItem("user", JSON.stringify({ token }));
                setDisabled(false);
                navigate("/urls");

            })
            .catch((err) => {
                setDisabled(false);
                alert(err.response.data);
            });
    }

    return (

        <LoginPageContent>
            <form onSubmit={login}>
                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleForm}
                    disabled={disabled}
                    required
                />
                <input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={password}
                    onChange={handleForm}
                    disabled={disabled}
                    required
                />
                <button type="submit" disabled={disabled}>Entrar</button>
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