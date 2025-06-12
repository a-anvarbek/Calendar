import React from "react";
import styled from "styled-components";
import onecalendar from './onecalendar.jpg';
import Months from "../Months/Months";
import { useNavigate } from "react-router";

import MonthCard from "../../components/MonthCard";

import Menu from "../../components/Menu";

const HomeCtn = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: black;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${onecalendar});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -1;
  }
`;



const Wrapper2 = styled.div`
width: 100%;
height: 200px;
gap: 20px;
margin-top: 20%;
font-size: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
font-weight: 600;

`;

const Input = styled.input`
width: 500px;
height: 50px;
border-radius: 30px;
border: 0;
background-color: #4f4e4e;
font-size: 20px;
color: white;
padding-left: 20px;


`;



const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px;
    background-color: #ebe9e9;
    margin: 0;
    padding: 0;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 70px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Home = () => {
    const months = [
        { name: "January", days: 31, startFrom: 2, bgColor: "#dbeafe" },
        { name: "February", days: 28, startFrom: 5, bgColor: "#fde2e2" },
        { name: "March", days: 31, startFrom: 5, bgColor: "#fbcfe8" },
        { name: "April", days: 30, startFrom: 1, bgColor: "#d1fae5" },
        { name: "May", days: 31, startFrom: 3, bgColor: "#fef9c3" },
        { name: "June", days: 30, startFrom: 6, bgColor: "#d1fae5" },
        { name: "July", days: 31, startFrom: 5, bgColor: "#ddebe0" },
        { name: "August", days: 31, startFrom: 4, bgColor: "#fcf0d0" },
        { name: "September", days: 30, startFrom: 0, bgColor: "#ddebe0" },
        { name: "October", days: 31, startFrom: 2, bgColor: "#e0ecf1" },
        { name: "November", days: 30, startFrom: 5, bgColor: "#f7d1d1" },
        { name: "December", days: 31, startFrom: 0, bgColor: "#fae1d1" },
      ];
    


    return(
        <>
        <HomeCtn>
            <Menu />

            <Wrapper2>
                <Input></Input>
                You can search you your <br />
                 month in this input.

            </Wrapper2>
          
            

        </HomeCtn>

        
        </>
    )   
}

export default Home;