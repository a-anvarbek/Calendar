import styled from "styled-components";

import MonthCard from "../../components/MonthCard";
import Menu from "../../components/Menu";

import Image2 from "./Tasks2.png";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${Image2});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed; /* 🎯 Qo‘shildi */
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 70px;
  text-align: center;
  margin-top: 50px;
  color: white;
  margin-bottom: 50px;
`;

const Months = () => {
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

  return (
    <Wrapper>
      <Menu />
      <Title>2025 Calendar</Title>
      <Container>
        {months.map((month) => (
          <MonthCard
            key={month.name}
            name={month.name}
            days={month.days}
            startFrom={month.startFrom}
            bgColor={month.bgColor}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Months;
