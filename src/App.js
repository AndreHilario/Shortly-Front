import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import UrlPage from "./pages/UrlPage/UrlPage";
import UserProvider from "./contexts/UserContext";

export default function App() {

  return (
    <PagesContainer>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/urls" element={<UrlPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  
`;

