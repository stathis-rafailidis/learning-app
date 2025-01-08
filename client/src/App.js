import React, {useState, useEffect} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}
console.log(text)
function App() {
  
  



  const [data,setData] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])


  return (
    <Router>

            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                
            </Routes>
        </Router>
  )
}

export default App
