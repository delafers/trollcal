import React from 'react';
import styled from "styled-components";

const StyledInfo = styled.div`
display: flex;
  justify-content: space-between;
  padding-right: 20vw;
  padding-left: 15vw;
  background-color: #FDFFDF;
  color: brown;
  height: 12vh;
  padding-top: 30px;
  font-size: 30px;
  border-top: #182039 2px solid;
`
const Info = () => {
    return (
        <StyledInfo>
            <div>
                Today
            </div>
            <div>
                Delete
            </div>
        </StyledInfo>
    );
};

export default Info;
