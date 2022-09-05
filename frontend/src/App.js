import './App.css';
import { Routes, Route } from "react-router-dom";
// import { MainRoute } from "./Routes/MainRoute";
import Home from './pages/Home'
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="user-profile" element={<UserProfile/>} />
    </Routes>
    
  );
}

export default App;
