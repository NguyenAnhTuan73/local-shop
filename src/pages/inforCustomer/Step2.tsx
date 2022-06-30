import React, { useState } from "react";
import family from "../../acssets/images/img4.png";
import dataCustomer from "../../components/data-customer/dataCustomer";
import PopupCustomer from "../popup-customer/PopupCustomer";
import a68 from "../../acssets/customer-infor/POPUP 6A68.png";
import a99s from "../../acssets/customer-infor/POPUP 12A99S.png";
import a89s from "../../acssets/customer-infor/POPUP 12A89S.png";
const Step2 = () => {
  const [status, setStatus] = useState(false);
  const handleShowPackage = (item: any) => {
    setStatus(!status);
    // let dataImg;
    // switch (item) {
    //   case "6A68":
    //     return (dataImg = a68);
    //   case "12A99S":
    //     return (dataImg = a99s);
    //   case "12A89S":
    //     return (dataImg = a89s);
    //   default:
    //     return console.log("conlai");
    // }
    console.log("hello", item);
  };
  return (
    <div className="mt-9">
      <div className="">
        <h1 className="text-[16px] font-semibold loading-[150%] text-[#898989] mb-4">
          THÔNG TIN SIM
        </h1>
        <div className=" flex p-4 bg-[#F6F6F6] rounded-lg items-center mb-5">
          <div className="w-[68px] h-[68px] mr-3 ">
            <img
              className="h-full w-full object-cover rounded-xl "
              src={family}
              alt=""
            />
          </div>
          <div className="">
            <p className="text-[20px] loading-[145%] font-semibold text-[#2C3137] mb-1">
              SIM Gia đình
            </p>
            <p className="text-[18px] text-[#737377] loading-[156%]">
              Số lượng: 9 SIM
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-[16px] font-semibold loading-[150%] text-[#898989] mb-4">
          DANH SÁCH SỐ
        </h1>
        <div className="">
          {dataCustomer.map((item, index) => (
            <div
              key={index}
              className=" flex justify-between items-center p-4 "
            >
              <div className="">
                <p className="font-semibold text-[18px] loading-[156%] text-[#2C3137] mb-3">
                  {item.number}
                </p>
                <p
                  className="text-[14px] leading-[160%] py-1 px-4 font-semibold text-center rounded-2xl "
                  style={{
                    backgroundColor:
                      item.sub === "12A99S"
                        ? "#3B82F6"
                        : item.sub === "12A89S"
                        ? "#16A34A"
                        : item.sub === "6A68"
                        ? "#EF4444"
                        : "#EDEDED",
                    color: item.sub === "Chưa có gói" ? "#565656" : "#fff",
                  }}
                >
                  {item.sub}
                </p>
              </div>
              <div className="flex items-center">
                <img className="mr-3" src={item.img} alt="" />
                <p
                  style={{
                    color:
                      item.des === "Đăng ký gói cước" ? "#2563EB" : "#646464",
                  }}
                  className="text-[16px] font-medium"
                  onClick={() => handleShowPackage(item.sub)}
                >
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {status === true ? (
          <PopupCustomer handleShowPackage={handleShowPackage} />
        ) : null}
      </div>
    </div>
  );
};

export default Step2;
