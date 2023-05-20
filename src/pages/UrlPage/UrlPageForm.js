import { useContext, useState } from "react";
import styled from "styled-components";
import apiAuth from "../../services/apiAuth";
import { UserContext } from "../../contexts/UserContext";

export default function UrlPageForm() {

    const [form, setForm] = useState({ url: "" });
    const [disabled, setDisabled] = useState(false);

    const { url } = form;

    const { user } = useContext(UserContext);

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function shortenUrl(e) {
        e.preventDefault();

        setDisabled(true);

        apiAuth
            .postShortenUrl(user.token, form)
            .then(() => {
                setDisabled(false)
                window.location.reload();
            })
            .catch((err) => {
                setDisabled(false);
                alert(err.response.data);
            })


    }
    return (
        <UrlFormContent>
            <input
                placeholder="Links que cabem no bolso"
                type="text"
                name="url"
                value={url}
                onChange={handleForm}
                disabled={disabled}
                required
            />
            <button onClick={shortenUrl}>Encurtar Link</button>
        </UrlFormContent>
    )
}

const UrlFormContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    margin-top: 147px;
`;