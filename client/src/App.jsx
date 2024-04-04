import Bot from "./components/Bot";
import styled from "styled-components";

const App = () => {
  return (
    <BotWrapper>
      <Bot/>
    </BotWrapper>
  );
};
export default App;

const BotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-color: black;
  background-color: darkslategrey;
`;
