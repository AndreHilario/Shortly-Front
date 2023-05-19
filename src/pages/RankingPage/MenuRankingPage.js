import styled from "styled-components"

export default function MenuRankingPage() {
    return (
        <MenuRankingPageContainer>
            <RankingPageContent>
                <p>2. Ciclano - 20 links - 1.113.347 visualizações</p>
            </RankingPageContent>

        </MenuRankingPageContainer>

    )
}

const MenuRankingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 57px;
`;

const RankingPageContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
    width: 1017px;
    height: auto;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    padding: 19px 40px;
    p {
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
    }
`;