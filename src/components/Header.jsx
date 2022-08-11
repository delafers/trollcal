import React, {useState} from 'react';
import styled from "styled-components";
import ModalCreate from "./popup/popup";

const StyledHeader = styled.header`
  background: #FDFFFC;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  font-weight: bold;
  font-size: 26px;
`
const Header = (props) => {
    const [active, setActive] = useState(false)
    return (
        <StyledHeader>
           <div>
               Interview calendar
           </div>
            <button onClick={() => { setActive(true)}} style={{color: "brown", backgroundColor: "#FFF", border: "none", fontSize: 32, cursor: "pointer"}}>+</button>
            <ModalCreate active={active} setActive={setActive}/>
        </StyledHeader>
    );
};

export default Header;
