import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from "./components/Menu";
import Home from "./components/Home";
// import Categories from "./components/Categories";
import Add from "./components/Add";
import Update from "./components/Update";
import FooterPage from "./components/Footer";
import List from "./components/List";



function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;