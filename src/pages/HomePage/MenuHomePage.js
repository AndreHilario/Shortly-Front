import { useEffect, useState } from "react";
import styled from "styled-components";
import apiAuth from "../../services/apiAuth";

export default function MenuHomePage() {

    const [rankingInitial, setRankingInitial] = useState([]);

    useEffect(() => {
        apiAuth
            .getRanking()
            .then(res => setRankingInitial(res.data))
            .catch(err => alert(err.response.data));
    }, []);
    return (
        <main>
            <MenuHomePageContainer>

                {rankingInitial.map((row, index) => {
                    return (
                        <span key={row.id}>
                            <p>{index + 1}. {row.name} - {row.linksCount} links - {row.visitCount} visualizações</p>
                        </span>
                    );
                })}
            </MenuHomePageContainer><FooterContent>
                <p>Crie sua conta para usar nosso serviço!</p>
            </FooterContent>
        </main>
    )
}

const MenuHomePageContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 57px;
    justify-content: space-between;
    background-color: #FFFFFF;
    width: 1017px;
    height: auto;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 19px 40px;
    gap: 20px;
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
    }

`;

const FooterContent = styled.footer`
    display: flex;
    justify-content: center;
    height: 45px;
    margin-top: 87px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;

    color: #000000;
`;