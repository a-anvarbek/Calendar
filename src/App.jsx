import styled from "styled-components";

import "./App.css";
import { BrowserRouter } from "react-router";
import MainRoutes from "./routes/MainRouter";

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
