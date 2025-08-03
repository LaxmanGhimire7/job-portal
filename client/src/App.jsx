import { Route, Routes } from "react-router-dom";
import Navigation from "./NavBar/Navigation"
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";


function App() {
  return (
    <div>
     <Navigation />

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
