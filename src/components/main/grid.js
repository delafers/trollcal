import React, {useState} from 'react';
import styled from "styled-components";

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(15, 1fr);
  max-width: 740px;
`
const n = 105; // Or something else
const StyledDay = styled.div`
  border: black 1px solid;
  border-left: none;
  border-top: none;
  &:hover{
    background-color: aqua;
  }
  
`


const Grid = () => {
    const [ active, setActiveDay] = useState( "black")
    const arr = []
    let div = [true, true, true, true, true, true, true, true, true,
        true, false, true, true, true,true, true, true, false, true,
        true, true,true, true, true, true, true, true, true,true,
        true, true, false, true, true, true,true, false, true, true,
        true, true, true,true, true, true, true, true, true, true,true,
        false, true, false, true, true, true,true, true, true, false, true,
        true, true,true, true, true, false, true, true, true,true, true, true,
        true, true, true, true,true, false, true, true, false, true, true,true,
        true, true, true, true, true, true,true, true, true, true, true, true,
        true, true, true, true, false, true, true, true,
    ]
    return (<>
        <GridStyled>
            {div.map((e, i) => <StyledDay key={i} act={arr} ><div style={{backgroundColor:`${e ? "lightgrey" : "darkgray"}`,
            width: "100%", height:"100%", cursor:"pointer" }} onClick={() => {
                div[i] = false;
                setActiveDay(n => !n)
            }}>{`${div[i]}`}</div></StyledDay>)}
        </GridStyled>

    </>
    );
};

export default Grid;
