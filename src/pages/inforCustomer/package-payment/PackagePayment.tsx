import React from "react";
import { useNavigate } from "react-router-dom";
import leftIcon from "../../../acssets/socical-icon/left-icon-black.svg";
import logo from "../../../acssets/socical-icon/logo - type - head.png";
import dataPackage, {
  DataPackage,
} from "../../../components/data-package/dataPackage";

const PackagePayment = () => {
  const navigate = useNavigate();
  const handleItemInfor = (itemChild: DataPackage) => {
    console.log("data", itemChild);
  };
  return (
    <div className="section-container bg-[#f6f6f6] h-full pb-[56px]">
      <div className="w-full flex items-center relative pb-[56px] border-[1px] border-[#EBEAEA] mb-[38px] ">
        <div className="absolute  top-5 left-[60px]">
          <img
            onClick={() => navigate("/customer-information")}
            className="cursor-pointer hover:text-[#FF364E]"
            src={leftIcon}
            alt=""
          />
        </div>
        <div className="absolute left-1/2 top-3 ">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="w-[974px] h-[1094px] mx-auto">
        {dataPackage.map((item, index) => {
          if (item.choose === "GÓI 1 THÁNG") {
            return (
              <div key={index} className="">
                <h1 className="mb-4 text-[18px] leading-[156%] text-[#898989] font-semibold">
                  {item.choose}
                </h1>
                <div className="flex">
                  {item.data.map((itemChild, i) => (
                    <img
                      className="mr-9 mb-9 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ease duration-500 rounded-[24px]"
                      key={i}
                      src={itemChild.imgPackage}
                      alt=""
                      onClick={() => handleItemInfor(itemChild)}
                    />
                  ))}
                </div>
              </div>
            );
          } else if (item.choose === "Gói 6 tháng") {
            return (
              <div key={index} className="">
                <h1 className="mb-4 text-[18px] leading-[156%] text-[#898989] font-semibold">
                  {item.choose}
                </h1>
                <div className="flex">
                  {item.data.map((itemChild, i) => (
                    <img
                      className="mr-9 mb-9 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ease duration-500 rounded-[24px]"
                      key={i}
                      src={itemChild.imgPackage}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="">
                <h1 className="mb-4 text-[18px] leading-[156%] text-[#898989] font-semibold">
                  {item.choose}
                </h1>
                <div className="flex">
                  {item.data.map((itemChild, i) => (
                    <img
                      className="mr-9 mb-9 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ease duration-500 rounded-[24px]"
                      key={i}
                      src={itemChild.imgPackage}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PackagePayment;
