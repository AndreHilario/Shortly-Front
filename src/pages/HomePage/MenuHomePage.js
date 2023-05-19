import styled from "styled-components"

export default function MenuHomePage() {
    return (
        <MenuHomePageContainer>
            <MainContent>
                <p>2. Ciclano - 20 links - 1.113.347 visualizações</p>
            </MainContent>
            <FooterContent>
                <p>Crie sua conta para usar nosso serviço!</p>
            </FooterContent>
        </MenuHomePageContainer>
    )
}

const MenuHomePageContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 57px;

`;

const MainContent = styled.div`
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