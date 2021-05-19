import "./App.css";

import SecondForm from "./SecondForm";
import FirstForm from "./FirstForm";
import FinalForm from "./FinalForm";
import {FormContext} from "./FormContext";
import { Container } from "@material-ui/core";
import {useContext} from "react";


function App() {
const [data,setData] =useContext(FormContext)
  return (
    <div className="App">
      <Container>
          <h1 style={{display : data.titleDisplay }}>This is a simple form service built with react</h1>
          <FirstForm />
          <SecondForm />
          <FinalForm />
      </Container>
    </div>
  );
}

export default App;
