import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Aplications from "./components/Applications";
// import Blogposts from "./components/Blogposts";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Header />
      <div className="container py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/school" element={<Aplications />} />
          <Route path="/school/:id" element={<Aplications />} />
          <Route path="/school/create" element={<Aplications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
