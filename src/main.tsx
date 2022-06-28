import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import Start from "./pages/start/Start";
import Login from "./pages/login/Login";
import Resgister from "./pages/resgister/Resgister";
import ConfirmPassword from "./pages/confirmPassword/ConfirmPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Confirm from "./pages/confirm/Confirm";
import NiceNumber from "./pages/niceNumber/NiceNumber";
import AddInfor from "./pages/addInfor/AddInfor";
import Position from "./pages/niceNumber/position/Position";
import Love from "./pages/niceNumber/love/Love";
import LongLived from "./pages/niceNumber/longlived/LongLived";
import FortuneNumber from "./pages/niceNumber/fortuneNumber/FortuneNumber";
import AgeAppropriate from "./pages/niceNumber/ageAppropriate/AgeAppropriate";
import Numerals from "./pages/numerals/Numerals";
import NumberIdol from "./pages/numberIdol/NumberIdol";
import OurClassNumber from "./pages/ourClass/OurClassNumber";
import FamilyNumber from "./pages/familyNumber/FamilyNumber";
import NotFound from "./pages/404/NotFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
        <Route index element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resgister" element={<Resgister />}>
          <Route path="confirm" element={<Confirm />} />
        </Route>

        <Route path="/reset-password" element={<ResetPassword />}>
          <Route path="confirm" element={<ConfirmPassword />} />
        </Route>

        <Route path="/nice-number" element={<NiceNumber />}>
          <Route path="add-information" element={<AddInfor />}>
            <Route path="position" element={<Position />} />
            <Route path="love" element={<Love />} />
            <Route path="long-lived" element={<LongLived />} />
            <Route path="furtune-number" element={<FortuneNumber />} />
            <Route path="age-appropriate" element={<AgeAppropriate />} />
          </Route>
        </Route>

        <Route path="/numerals" element={<Numerals />} />
        <Route path="/number-idol-and-fan" element={<NumberIdol />} />
        <Route path="/number-our-class" element={<OurClassNumber />} />
        <Route path="/number-family" element={<FamilyNumber />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
