import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import apiAuth from "../../services/apiAuth";
import { UserContext } from "../../contexts/UserContext";

export default function MenuRankingPage() {

    const [ranking, setRanking] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {

        apiAuth
            .getRankingUser(user.token)
            .then((res) => {
                setRanking(res.data)
            })
            .catch(err => alert(err.response.data))
    }, [user.token])
    return (
        <MenuRankingPageContainer>

            {ranking.map((row, index) => {
                return (
                    <span key={row.id}>
                        <p>{index + 1}. {row.name} - {row.linksCount} links - {row.visitCount} visualizações</p>
                    </span>
                )
            })}

        </MenuRankingPageContainer >

    )
}

const MenuRankingPageContainer = styled.div`
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
    gap: 15px;
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
    }
`;