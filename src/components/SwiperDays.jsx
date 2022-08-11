import React, {useState} from 'react';
import styled from "styled-components";
import arrow from "./main/arrow-128.ico"
const SwiperStyled = styled.div`
  min-height: 10vh;
  background-color: #CED3BC;
  color: black;
  display: grid;
  grid-template-columns: 15vw 1fr 15vw;
  padding-top: 10px;
  img{
    width: 40px;
    margin-left: 50px;
    box-shadow: 12px 8px 8px rgba(0, 0,0, 0.3);
  }
`
const SwiperDay = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  max-width: 740px;
`
const SwiperDays = () => {
const [week, setWeek] = useState(0)
    return (
        <SwiperStyled>
            <div >
                <img  src={"https://i.pinimg.com/originals/82/6c/c5/826cc529a5dcff9c9d8aecd4be09cfb4.png"}
                      onClick={() => {setWeek(week - 1)}} />
            </div>
            <SwiperDay>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        M
                    </div>
                    <div>
                    {(7*week)%31 + 1}
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        T
                    </div>
                    { 2 +( 7*week)%31}
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        W
                    </div>
                    {3 +( 7*week)%31}
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        T
                    </div>
                    {4 +(7*week)%31}
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        F
                    </div>
                    {5 +(7*week)%31}
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        S
                    </div>
                    {6 +(7*week)%31}
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent:"space-evenly", flexDirection: "column", fontWeight:"bold"}}>
                    <div>
                        S
                    </div>
                    {7 +(7*week)%31}
                </div>
            </SwiperDay>
            <div>
                <img src={arrow} onClick={() => {setWeek(week + 1)}}/>
            </div>
        </SwiperStyled>
    );
};

export default SwiperDays;
