import React from "react";
import { Link, useNavigate } from "react-router-dom";
import nineNumberBg from "../../acssets/nice-number-img/nn-bg.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";
import img1 from "../../acssets/nice-number-img/nn1.svg";
import dataNiceNumber from "../../components/data-nine-number/dataNiceNumber";
import SurfaceNiceNumber from "./surfaceNiceNumber/SurfaceNiceNumber";
import "./niceNumber.scss";

const NiceNumber = () => {
  const navigate = useNavigate();
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${nineNumberBg})` }}
    >
      <div className=" bg-nice-number w-full h-full">
        <div className="flex mt-4 items-center">
          <Link to="/">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[376px] h-[456px]  main-concetp ">
          {dataNiceNumber.map((item, i) => (
            // <Link key={i} to={`add-information`}>
            <div
              key={i}
              onClick={() => navigate("add-information")}
              className="flex items-center item-nice-number justify-left mb-6  rounded-[20px] h-[72px] w-full bg-[#00000099]"
            >
              <img src={item.img} alt="" />
              <p className="text-left text-white font-semibold text-[18px]">
                {item.title}
              </p>
              <img className="ml-auto" src={item.right} alt="" />
            </div>
            // </Link>
          ))}
        </div>
      </div>
      <div className="surface-nice-number">
        <SurfaceNiceNumber />
      </div>
    </div>
  );
};

export default NiceNumber;
