import { useParams, useLocation } from "react-router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BG from "../../images/MonthDetail.jpg";
import { useNavigate } from "react-router";


// === STYLED COMPONENTS ===

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  padding: 50px;

`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 130px;
  width: 100%;
  justify-content: space-around;
`;

const MonthBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 450px;
  height: 450px;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: ${({ bg }) => bg || "#f5f5f5"};
  padding: 16px 0;
  border-radius: 12px 12px 0 0;
`;

const Title2 = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const Day = styled.div`
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  background-color: #f1f1f1;
`;

const DateCell = styled.div`
  font-size: 14px;
  padding: 12px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f0f8ff;
  }

  &:active,
  &:focus {
    background-color: #0055ff;
    color: white;
  }
`;

const Event = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
`;

const PlanBox = styled.div`
  width: 450px;
  height: 514px;
  background-color: #fff7dc;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const PlanTitle = styled.h3`
  margin: 0;
  font-size: 28px;
  text-align: center;
`;

const PlanList = styled.div`
  margin-top: 16px;
  max-height: 360px;
  overflow-y: auto;
`;

const PlanItem = styled.div`
  background-color: #e4efff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: red;
  cursor: pointer;
`;

const EditBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #0077ff;
  cursor: pointer;
  margin-left: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  background-color: #ffdede;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #0055ff;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const PlanBox2 = styled.div`
  margin-bottom: 20px;
`;

const ButtonCtn = styled.div`
width: 100%;
height: 130px;
display: flex;
align-items: center;
justify-content: center;

`;

const GoButton = styled.button`
width: 200px;
height: 40px;
background-color: #0055ff;
color: white;
border: 0;
border-radius: 10px;
margin-top: 50px;
cursor: pointer;
`;

// === COMPONENT ===

const MonthDetails = () => {
  const { monthName } = useParams();
  const { state } = useLocation();

  const [selectedDate, setSelectedDate] = useState(() => {
    return localStorage.getItem("selectedDate") || null;
  });

  const [plans, setPlans] = useState(() => {
    const savedPlans = localStorage.getItem("plans");
    return savedPlans ? JSON.parse(savedPlans) : {};
  });

  const [newPlan, setNewPlan] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);

  if (!state) {
    return (
      <Wrapper>
        <Container>
          <Title>{monthName} - No data available</Title>
        </Container>
      </Wrapper>
    );
  }

  const { name, bgColor, days, startFrom } = state;
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const dateArray = Array(startFrom).fill("");
  for (let i = 1; i <= days; i++) {
    dateArray.push(i);
  }
  while (dateArray.length % 7 !== 0) {
    dateArray.push("");
  }

  const handleDateClick = (date) => {
    if (date) {
      setSelectedDate(`${name.slice(0, 3)}${date}`);
    }
  };

  const handleSavePlan = () => {
    if (newPlan.trim() !== "" && selectedDate) {
      setPlans((prev) => ({
        ...prev,
        [selectedDate]: [...(prev[selectedDate] || []), newPlan.trim()],
      }));
      setNewPlan("");
    }
  };

  

  const handleDeletePlan = (index) => {
    setPlans((prev) => {
      const updated = [...prev[selectedDate]];
      updated.splice(index, 1);
      return {
        ...prev,
        [selectedDate]: updated,
      };
    });
  };

  const handleEditPlan = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleUpdatePlan = (date) => {
    if (editText.trim() === "") return;

    setPlans((prev) => {
      const updated = [...prev[date]];
      updated[editIndex] = editText;
      return {
        ...prev,
        [date]: updated,
      };
    });

    setEditIndex(null);
    setEditText("");
  };

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>{name} - Details Page</Title>

      <Container>
        <MonthBox>
          <Header bg={bgColor}>
            <Title2>{name}</Title2>
          </Header>

          <Box>
            <Week>
              {daysOfWeek.map((day) => (
                <Day key={day}>{day}</Day>
              ))}
            </Week>
            <Week>
              {dateArray.map((date, idx) => (
                <DateCell
                  tabIndex="0"
                  key={idx}
                  onClick={() => handleDateClick(date)}
                >
                  {date}
                </DateCell>
              ))}
            </Week>

            <Event style={{ marginTop: "20px" }}>
              <Input
                placeholder="Add new plan:"
                value={newPlan}
                onChange={(e) => setNewPlan(e.target.value)}
              />
              <Button onClick={handleSavePlan}>Save</Button>
            </Event>
          </Box>
        </MonthBox>

        {selectedDate && (
          <PlanBox>
            <PlanTitle>All Plans</PlanTitle>
            <PlanList>
              {Object.keys(plans).length === 0 ? (
                <p>No plans added yet</p>
              ) : (
                Object.entries(plans).map(([date, planList]) => (
                  <div key={date}>
                    <strong>{date}:</strong>
                    {planList.map((p, i) => (
                      <PlanItem key={i}>
                        {editIndex === i && selectedDate === date ? (
                          <>
                            <input
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleUpdatePlan(date);
                                }
                              }}
                              style={{
                                flex: 1,
                                fontSize: "16px",
                                padding: "6px",
                              }}
                            />
                            <Button
                              style={{ width: "80px", marginLeft: "8px" }}
                              onClick={() => handleUpdatePlan(date)}
                            >
                              Save
                            </Button>
                          </>
                        ) : (
                          <>
                            {p}
                            <div>
                              <EditBtn
                                onClick={() => {
                                  setSelectedDate(date);
                                  handleEditPlan(i, p);
                                }}
                              >
                                ✏️
                              </EditBtn>
                              <DeleteBtn
                                onClick={() => {
                                  setSelectedDate(date);
                                  handleDeletePlan(i);
                                }}
                              >
                                ❌
                              </DeleteBtn>
                            </div>
                          </>
                        )}
                      </PlanItem>
                    ))}
                  </div>
                ))
              )}
            </PlanList>
          </PlanBox>
        )}
      </Container>
      <ButtonCtn>
      <GoButton onClick={() => navigate("/months")}>Go Back</GoButton>
      </ButtonCtn>
    </Wrapper>
  );
};

export default MonthDetails;
