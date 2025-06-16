import React from "react";
import styled from "styled-components";
import onecalendar from "../../images/onecalendar.jpg";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router";
import { FaCheckCircle, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";


const HomeCtn = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;
  font-family: sans-serif;
  overflow: hidden;

  &::before {
    content: "";
    background-image: url(${onecalendar});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  &::after {
    content: "";
    background: rgba(0, 45, 85, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
`;

const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 30px;
  font-size: 18px;
`;

const LoginButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  line-height: 1.2;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const MainButton = styled.button`
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  background-color: #ffa500;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const BottomCards = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 25, 50, 0.6);
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.div`
  font-size: 30px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeCtn>
    <Menu />
      <HeroSection>
        <HeroTitle>
          Welcome to Smart <br /> Calendar
        </HeroTitle>
        <ButtonGroup>
          <MainButton onClick={() => navigate("/months")}>View My Calendar</MainButton>
          <MainButton onClick={() => navigate("/tasks")}>Create Task</MainButton>
        </ButtonGroup>
      </HeroSection>

      <BottomCards>
  <Card>
    <Icon>
      <FaCheckCircle size={40} />
    </Icon>
    <Label>Stay Organized</Label>
  </Card>
  <Card>
    <Icon>
      <FaMapMarkerAlt size={40} />
    </Icon>
    <Label>Track Tasks</Label>
  </Card>
  <Card>
    <Icon>
      <FaRegCalendarAlt size={40} />
    </Icon>
    <Label>Plan Your Months</Label>
  </Card>
</BottomCards>

    </HomeCtn>
  );
};

export default Home;
