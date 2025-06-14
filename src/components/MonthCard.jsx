import styled from "styled-components";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 356px;
  border-radius: 20px;
  cursor: pointer;
`;

const Header = styled.div`
  background-color: ${({ bg }) => bg || "#f5f5f5"};
  padding: 16px 0;
  border-radius: 20px 20px 0 0;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Div = styled.div`
  width: 100%;
  height: 235px;
  background-color: #fff;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 10px 5px;
  background-color: #fff;
`;

const Day = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const DateCell = styled.div`
  font-size: 14px;
  padding: 6px 0;
`;

const MonthCard = ({ name, bgColor, startFrom, days }) => {
  const navigate = useNavigate();

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dateArray = Array(startFrom).fill("");
  for (let i = 1; i <= days; i++) {
    dateArray.push(i);
  }

  const handleClick = () => {
    navigate(`/months/${name.toLowerCase()}`, {
      state: {
        name,
        days,
        startFrom,
        bgColor,
      },
    });
  };

  return (
    <Wrapper bg={bgColor} onClick={handleClick}>
      <Header bg={bgColor}>
        <Title>{name}</Title>
      </Header>

      <Div>
        <Week>
          {daysOfWeek.map((day) => (
            <Day key={day}>{day}</Day>
          ))}
        </Week>

        <Week>
          {dateArray.map((date, idx) => (
            <DateCell key={idx}>{date}</DateCell>
          ))}
        </Week>
      </Div>
    </Wrapper>
  );
};

export default MonthCard;
