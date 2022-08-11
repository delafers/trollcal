import React from 'react';
import styled from "styled-components";

const StyledTimeBlock = styled.div`
  color: #533E2D;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const StyledTime = styled.div`
 display: flex;
  justify-content: space-between;
  padding-right: 3px;
  flex-direction: column;
  align-items: end;
`

const n = 15
const Timelist = () => {
    return (<StyledTime >

    {[...Array(n)].map((e, i) => <StyledTimeBlock key={i}>{i < 5 ? `0${i + 5}:00`: `${i+5}:00`}</StyledTimeBlock>)}
    </StyledTime>

    );
};

export default Timelist;
