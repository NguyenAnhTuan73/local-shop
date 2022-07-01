import React from "react";
import { Routes, Route } from "react-router-dom";

import Start from "../pages/start/Start";
import Login from "../pages/login/Login";
import Resgister from "../pages/resgister/Resgister";
import Confirm from "../pages/confirm/Confirm";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ConfirmPassword from "../pages/confirmPassword/ConfirmPassword";
import NiceNumber from "../pages/niceNumber/NiceNumber";
import Position from "../pages/niceNumber/position/Position";
import Love from "../pages/niceNumber/love/Love";
import LongLived from "../pages/niceNumber/longlived/LongLived";
import FortuneNumber from "../pages/niceNumber/fortuneNumber/FortuneNumber";
import AgeAppropriate from "../pages/niceNumber/ageAppropriate/AgeAppropriate";
import Numerals from "../pages/numerals/Numerals";
import AddInfor from "../pages/addInfor/AddInfor";
import NotFound from "../pages/404/NotFound";
import NumberIdol from "../pages/numberIdol/NumberIdol";
import OurClassNumber from "../pages/ourClass/OurClassNumber";
import FamilyNumber from "../pages/familyNumber/FamilyNumber";
import PositionViewDetial from "../pages/niceNumber/position/positionChild/PositionViewDetail";
import PositionDefaulf from "../pages/niceNumber/position/positionChild/PositionDefaulf";
import ListNumber from "../pages/listNumber/ListNumber";
import CustomerInfor from "../pages/inforCustomer/CustomerInfor";
import PackagePayment from "../pages/inforCustomer/package-payment/PackagePayment";
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

      <Route
        path="/nice-number/add-information/position"
        element={<Position />}
      >
        <Route index element={<PositionDefaulf />} />
        <Route path="view-detail" element={<PositionViewDetial />} />
      </Route>

      <Route path="/nice-number/add-information/love" element={<Love />} />
      <Route
        path="/nice-number/add-information/long-lived"
        element={<LongLived />}
      />
      <Route
        path="/nice-number/add-information/furtune-number"
        element={<FortuneNumber />}
      />
      <Route
        path="/nice-number/add-information/age-appropriate"
        element={<AgeAppropriate />}
      />

      <Route path="/numerals" element={<Numerals />} />
      <Route path="/number-idol-and-fan" element={<NumberIdol />} />
      <Route path="/number-our-class" element={<OurClassNumber />} />
      <Route path="/number-family" element={<FamilyNumber />} />
      <Route path="/:nameUrl/list-number" element={<ListNumber />} />

      <Route path="*" element={<NotFound />} />
      {/* customer information buy sim */}
      <Route path="/customer-information" element={<CustomerInfor />} />

      <Route
        path="/customer-information/package-payment"
        element={<PackagePayment />}
      />
    </Routes>
  );
};

export default RoutesNavigate;
