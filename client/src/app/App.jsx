import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import User from "../pages/User";
import UserLogin from "../pages/User-Login";
import "./App.css";
import AdminLogin from "../pages/Admin-Login";
import Admin from "../pages/Admin";

export const ContextElem = createContext(null);
const ProviderElem = ContextElem.Provider;

function App() {
  const [name, setName] = useState("");
  const [empId, setEmpId] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState([]);

  const [label, setLabel] = useState("");

  const logoutUser = () => {
    window.localStorage.removeItem("name");
    setUser([]);
    setName("");
    setEmpId("");
    setEmail("");
    setPass("");
    setLabel("");
  };

  return (
    <BrowserRouter>
      <ProviderElem
        value={{
          name,
          setName,
          empId,
          setEmpId,
          email,
          setEmail,
          pass,
          setPass,
          user,
          setUser,
          logoutUser,
          label,
          setLabel,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </ProviderElem>
    </BrowserRouter>
  );
}

export default App;
