import { createContext } from "react";
import "./App.css";
import CompA from "./components/CompA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"bhoomi"}>
        <LastName.Provider value={"raval"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
