import React from 'react';
import styled from "styled-components";
import Grid from "./grid";
import Timelist from "./timelist";

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 15vw 1fr 15vw;
  padding-left: 20px;
  background-color: #FDFFFC;
  height: 70vh;
  overflow: scroll;
  border-top: black 4px solid;
`

const Main = (props) => {
    return (
        <MainStyled>
            <Timelist/>
            <Grid/>
        </MainStyled>
    );
};

export default Main;
