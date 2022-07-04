import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import family from "../../acssets/images/img4.png";
import dataCustomer, {
  DataCustomer,
} from "../../components/data-customer/dataCustomer";
import PopupCustomer from "../popup-customer/PopupCustomer";

const Step2 = () => {
  const [status, setStatus] = useState(false);
  const [curentImage, setCurentImage] = useState<DataCustomer | null>(null);
  const navigate = useNavigate();

  const handleShowPackage = (item?: DataCustomer): void => {
    setStatus(false);
    if (item?.des === "Xem chi tiết") {
      setCurentImage(item);
      setStatus(true);
    } else if (item?.des === "Đăng ký gói cước") {
      navigate("package-payment");
    }
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
          {dataCustomer.map((item: any, i: number) => (
            <div key={i}>
              <div className=" flex justify-between items-center p-4 ">
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
                    className="text-[16px] font-medium cursor-pointer"
                    onClick={() => handleShowPackage(item)}
                  >
                    {item.des}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="">
            {status === true ? (
              <PopupCustomer
                handleShowPackage={handleShowPackage}
                item={curentImage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
