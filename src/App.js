import { BrowserRouter, Routes } from "react-router-dom";
import styled from "styled-components"

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #FFFFFF;
`;

