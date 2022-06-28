import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { Link, useNavigate, Outlet } from "react-router-dom";
import bg from "../../../acssets/nice-number-img/nn-bg-list.svg";
import leftIcon from "../../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../../acssets/socical-icon/right-icon.svg";
import logo from "../../../acssets/socical-icon/logo.svg";
import search from "../../../acssets/socical-icon/search.svg";

import dataPosition from "../../../components/data-posititon/dataPosition";
import "./position.scss";
// import dataNiceNumber from "../../components/data-nine-number/dataNiceNumber";
// import SurfaceIdolNumber from "./surfaceIdolNumber/SurfaceIdolNumber";
const Position = () => {
  const navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);
  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };
  return (
    <div
      className="section-container relative nice-number h-[386px] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-nice-number w-full h-full relative ">
        <div className="flex pt-3 mb-[52px] items-center">
          <Link to="/login">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="w-[774px] translate-x-[-50%]  left-1/2 absolute bottom-[80px] ">
          <div className="flex items-center   w-full h-12 bg-bg mx-auto rounded-md px-4 py-[7px] ">
            <img src={search} alt="" />
            <input
              type="text"
              className=" ml-[10px] text-[16px] outline-0  bg-bg"
              placeholder="Tìm kiếm tên Idol..."
            />
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Position;
