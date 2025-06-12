import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";




const Menu = styled.div`
width: 100%;
height: 100px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
gap: 150px;

`;


const MenuText = styled.div`
width: 40%;
height: 70%;
display: flex;
align-items: center;
justify-content: flex-start;
font-family: 'Glacial Indifference', sans-serif;
font-weight: 600;

font-size: 50px;


`;


const MenuText2 = styled.div`
width: 40%;
height: 70%;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 20px;
font-size: 30px;
font-weight: 600;
font-family: 'Glacial Indifference', sans-serif;


`;




export default function Menu2() {
    const navigate = useNavigate();
    return (

        <Menu>
        <MenuText>
            Calendar
        </MenuText>
        <MenuText2>
            <div style={{cursor: "pointer"}} onClick={() => navigate("/")} >Home</div>
            <div style={{cursor: "pointer"}} onClick={() => navigate("/months")}>Months</div>
            <div style={{cursor: "pointer"}}  onClick={() => navigate("/tasks")}>Tasks</div>
            <div style={{cursor: "pointer"}}>About Us</div>
            </MenuText2>

    </Menu>




    )
}