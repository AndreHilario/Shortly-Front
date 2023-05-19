import { useState } from "react";
import styled from "styled-components";
import apiAuth from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {

    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [disabled, setDisabled] = useState(false);

    const { name, email, password, confirmPassword } = form;

    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function createRegister(e) {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("Different passwords!");
            return;
        }

        setDisabled(true);

        apiAuth.signup(form)
            .then(() => {
                setDisabled(false);
                navigate("/signin");
            })
            .catch((err) => {
                setDisabled(false);
                alert(err.response.data);
            })
    }

    return (
        <SignUpContent>
            <form onSubmit={createRegister}>
                <input
                    placeholder="Nome"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleForm}
                    disabled={disabled}
                    required
                />
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
                <input
                    placeholder="Confirmar senha"
                    type="password"
                    autoComplete="new-password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleForm}
                    disabled={disabled}
                    required
                />
                <button type="submit">Criar conta</button>
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