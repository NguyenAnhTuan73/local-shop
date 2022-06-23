import React from "react";
import { Routes, Route } from "react-router-dom";

import Start from "../pages/start/Start";
import Login from "../pages/login/Login";
import Resgister from "../pages/resgister/Resgister";
import Confirm from "../pages/confirm/Confirm";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ConfirmPassword from "../pages/confirmPassword/ConfirmPassword";
import NiceNumber from "../pages/niceNumber/NiceNumber";
import Numerals from "../pages/numerals/Numerals";
import AddInfor from "../pages/addInfor/AddInfor";
import NotFound from "../pages/404/NotFound";
import NumberIdol from "../pages/numberIdol/NumberIdol";
import OurClassNumber from "../pages/ourClass/OurClassNumber";
import FamilyNumber from "../pages/familyNumber/FamilyNumber";

const RoutesNavigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />

      <Route path="/resgister" element={<Resgister />}></Route>
      <Route path="/resgister/confirm" element={<Confirm />} />

      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="/reset-password/confirm" element={<ConfirmPassword />} />

      <Route path="/nice-number" element={<NiceNumber />}></Route>
      <Route path="/nice-number/add-information" element={<AddInfor />} />

      <Route path="/numerals" element={<Numerals />} />
      <Route path="/number-idol-and-fan" element={<NumberIdol />} />
      <Route path="/number-our-class" element={<OurClassNumber />} />
      <Route path="/number-family" element={<FamilyNumber />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesNavigate;
