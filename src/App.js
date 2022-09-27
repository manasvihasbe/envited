import "./App.css";
import {useState} from 'react'
import Create from "./Components/Create";
import Events from "./Components/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

function App() {
  const[field,setField]=useState({
    eventName:'',
    hostName:'',
    date:'',
    location:'',
    img:'',

  })

  return (
    <Router>
     
      <Routes>
        <Route path="/" exact element={<LandingPage/>}/>
        <Route path="/Create" exact element={<Create field={field} setField={setField}/>} />
        <Route path="/Events" exact element={<Events field={field}/>} />
      </Routes>
    </Router>
  );
}

export default App;
