import "./App.css";
import { BrowserRouter, Routes, Route,NavLink, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";


function App() {
  return (
    <>
      <BrowserRouter>
    <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Dashborad" element ={<Dashboard/>}/>        
          <Route path="/Students" element ={<Students/>}/>        
        </Routes>
    </>
      </BrowserRouter>
    </>
  );
}

export default App;
