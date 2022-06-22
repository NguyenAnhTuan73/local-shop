import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/start/Start";
import Login from "./pages/login/Login";
import Resgister from "./pages/resgister/Resgister";
import Confirm from "./pages/confirm/Confirm";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ConfirmPassword from "./pages/confirmPassword/ConfirmPassword";
import NiceNumber from "./pages/niceNumber/NiceNumber";
import Numerals from "./pages/numerals/Numerals";
import AddInfor from "./pages/addInfor/AddInfor";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resgister" element={<Resgister />} />
        <Route path="/resgister/confirm" element={<Confirm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/confirm" element={<ConfirmPassword />} />
        <Route path="/nice-number" element={<NiceNumber />} />
        <Route path="/nice-number/add-information" element={<AddInfor />} />
        <Route path="/numerals" element={<Numerals />} />
      </Routes>
    </div>
  );
}

export default App;
