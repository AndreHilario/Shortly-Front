import styled from "styled-components"

export default function UrlPageForm() {
    return (
        <UrlFormContent>
            <input
                placeholder="Links que cabem no bolso"
                type="text"
            />
            <button>Encurtar Link</button>
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