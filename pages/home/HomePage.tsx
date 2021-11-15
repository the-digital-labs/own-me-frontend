import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import SendNudeForm from "../../components/SendNudeForm";

const HomePageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HomePageContainer>
                <h1>Own Me!</h1>
                <SendNudeForm />
            </HomePageContainer>
        </>
    );
}