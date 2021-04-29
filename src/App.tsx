import "./index.css"
import GlobalStyles from "./styles/globals";
import Routes from "./Routes";
import React from "react";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <div>
          <Routes/>
        </div>
      </Container>
    </>
  )
}