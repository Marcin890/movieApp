import React from "react";
import { MovieList, Search, Header } from "./components";
// import Header from "./components/Header";
import theme from "utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./index.css";
import { AppWrapper, Container } from "./App.css";

// Załozenia: propTypes, struktura, redux, normalize, CSSGrid, styledComponent
// Dodać routing
// Pobieranie danych przenieść do MovieList
// Wyszukiwanie przenieśc do Search
function App(props) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Container>
            <Header />
            <Search />
            <MovieList />
          </Container>
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
