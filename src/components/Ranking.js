import styled from "styled-components";
import trophy from "../assets/Trophy.png";

export default function Ranking() {
    return (

        <RankingContainer>
            <img src={trophy} alt="Trophy ranking" />
            <h1>Ranking</h1>
        </RankingContainer>
    )
}

const RankingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 87px;
    gap: 10px;
    h1 {
        width: 153px;
        height: 45px;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
    }
`