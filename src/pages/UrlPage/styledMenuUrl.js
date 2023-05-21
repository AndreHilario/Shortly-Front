import styled from "styled-components";

export const MenuUrlContainer = styled.main`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 42px; 
    margin-top: 60px;
  `;

export const UrlWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 41px;
    margin-bottom: 50px;
    span {
      display: flex;
    }
  `;

export const ShowUrls = styled.div`
    width: 887px;
    height: 60px;
    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
      background-color: #80CC74;
      padding: 10px 15px;
      margin-right: 10px;
    }
  `;

export const DeleteUrls = styled.div`
    width: 130px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;