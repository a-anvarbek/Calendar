// menu.jsx
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MenuWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  color: white;
  background: transparent;

  position: ${(props) => (props.absolute ? "absolute" : "static")};
  top: ${(props) => (props.absolute ? "0" : "auto")};
  left: ${(props) => (props.absolute ? "0" : "auto")};
  z-index: ${(props) => (props.absolute ? "10" : "1")};
`;

const MenuText = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Glacial Indifference", sans-serif;
  font-weight: 500;
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
  font-weight: 500;
  font-family: "Glacial Indifference", sans-serif;
`;

export default function Menu({ absolute = false }) {
  const navigate = useNavigate();
  return (
    <MenuWrapper absolute={absolute}>
      <MenuText style={{ cursor: "pointer" }} onClick={() => navigate("/")}>Calendar</MenuText>
      <MenuText2>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/months")}>
          Months
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/tasks")}>
          Tasks
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/about-us")}>
          About Us
        </div>
      </MenuText2>
    </MenuWrapper>
  );
}
