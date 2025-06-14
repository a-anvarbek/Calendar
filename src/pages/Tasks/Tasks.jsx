import React, { useState } from "react";
import styled from "styled-components";
import Image1 from "./Tasks.png";
import Menu from "../../components/Menu";

const TasksCtn = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url(${Image1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 600px;
  padding: 30px;
  background-color: #e6f4ec;
  border-radius: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #000;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const StyledSelect = styled.select`
  padding: 12px;
  border-radius: 30px;
  border: none;
  background-color: #fbd1d1;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.bg || "#fff2b2"};
  color: #000;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: none;
  border-radius: 20px;
  padding: 15px;
  font-size: 16px;
  background-color: #a0bbff;
  color: white;
  resize: none;
  margin-bottom: 25px;

  &::placeholder {
    color: white;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #2b2b2b;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const TaskList = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TaskCard = styled.div`
  width: 300px;
  background-color: #DDEBE0;
  border-radius: 30px;
  
  padding: 20px;
`;

const TaskBlock = styled.div`
  background-color: ${props => props.bg || "#fff"};
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`;

const PlanText = styled.div`
  background-color: #e3d4ff;
  border-radius: 20px;
  padding: 20px;
  font-weight: bold;
  height: 100px;
  overflow-y: auto;
  font-size: 16px;
  color: black;

  /* Scroll barni chiroyli qilish */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }
`;


const DeleteButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
`;

const Tasks = () => {
  const [season, setSeason] = useState("Spring");
  const [time, setTime] = useState("15:30");
  const [date, setDate] = useState("2025-01-21");
  const [note, setNote] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { season, time, date, note };
    setTasks(prev => [...prev, newTask]);
    setNote("");
  };

  const handleDelete = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Menu />
      <TasksCtn>
        <Card>
          <Title>Tasks</Title>
          <form onSubmit={handleSubmit}>
            <Row>
              <Field>
                <Label>Select Season</Label>
                <StyledSelect value={season} onChange={(e) => setSeason(e.target.value)}>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                </StyledSelect>
              </Field>

              <Field>
                <Label>Add Time</Label>
                <StyledInput
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  bg="#fff2b2"
                />
              </Field>

              <Field>
                <Label>Select Day</Label>
                <StyledInput
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  bg="#b6e3ff"
                />
              </Field>
            </Row>

            <Textarea
              placeholder="Write your plan..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </Card>

        <TaskList>
          {tasks.map((task, index) => (
            <TaskCard key={index}>
              <TaskBlock bg="#fbd1d1">
                Season:<br />{task.season}
              </TaskBlock>
              <TaskBlock bg="#a2fdb1">
                Time:<br />{task.time}
              </TaskBlock>
              <PlanText>
                <div>Your plan:</div>
                {task.note}
              </PlanText>
              <DeleteButton onClick={() => handleDelete(index)}>Delete</DeleteButton>
            </TaskCard>
          ))}
        </TaskList>
      </TasksCtn>
    </>
  );
};

export default Tasks;
