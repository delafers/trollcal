import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/main/main";
import SwiperDays from "./components/SwiperDays";
import Info from "./components/Info";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  color: black;
  @media ${props => props.theme.media.phone} {
    text-decoration-line: overline;
    text-decoration: white;
  }
  @media ${props => props.theme.media.tablet} {
    text-decoration-line: none;
    text-decoration: white;
  }
`

const App = (props) => {
    return (
        <AppWrapper {...props}>
            <Header/>
            <SwiperDays />
            <Main/>
            <Info />
        </AppWrapper>
    );
}

export default App;
