import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import logo from "./assets/logo.svg";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import "./App.css";
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="mikegoforth" />} />
          <Route path='/projects' element={<Projects userName="mikegoforth" />} />
          <Route path='/projects/:name' element={<ProjectDetail userName="mikegoforth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
