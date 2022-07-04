import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import dataListNumber from "../../components/data-list-number/dataListNumber";
import PopUp from "../popup/PopUp";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";
import search from "../../acssets/socical-icon/search.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import ui from "../../acssets/socical-icon/UI.png";

import Surface from "../surface/Surface";
import { dataFamily } from "../../components/data-surface/dataSurface";
import "./familyNumber.scss";

const FamilyNumber = () => {
  const navigate = useNavigate();
  const [arrayData, setArrayData] = useState<any>([]);
  const [lengthData, setLengthData] = useState(0);
  // toggle modal
  const [statusModal, setStatusModal] = useState<any>(false);
  const { pathname } = useParams();
  console.log("params", pathname);

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    let status = e.target.checked;
    if (status === true) {
      arrayData.push(status);
      setLengthData(arrayData.length + 1);
      console.log("length", lengthData);
    } else {
      arrayData.shift();
      setLengthData(arrayData.length - 1);
      console.log("length", lengthData);
    }
  };
  const hadleBuySim = () => {
    if (lengthData > 2) {
      navigate("/login");
    }
    return;
  };
  // reload page
  const handleReload = () => {
    setStatusModal(!statusModal);
    console.log("data", statusModal);
    // window.location.reload(false);
  };
  return (
    <div className="w-[1440px] h-[1120px] mx-auto bg-white">
      <div className="">
        {dataListNumber.map((item, i) => {
          if (item.url === pathname) {
            return (
              <>
                <div
                  key={i}
                  className=" h-[386px] w-full relative "
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  <div
                    className="absotute top-0 left-0 w-full h-full  "
                    // style={{ background: "#000000", opacity: "0.3" }}
                  >
                    <div className=" absotute  flex items-center pt-3 z-10">
                      <div className="navigate">
                        <img
                          onClick={() => navigate("/")}
                          src={leftIcon}
                          alt=""
                        />
                      </div>
                      <div className="logo pt-6 ">
                        <img className=" cursor-pointer " src={logo} alt="" />
                      </div>
                    </div>
                    <div className="w-[774px] translate-x-[-50%]  left-1/2 absolute bottom-[80px] ">
                      <div className="flex items-center   w-full h-12 bg-bg mx-auto rounded-md px-4 py-[7px] ">
                        <img src={search} alt="" />
                        <input
                          type="text"
                          className=" ml-[10px] text-[16px] outline-0  bg-bg"
                          placeholder="Tìm số..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-[135px] mt-9 flex ">
                  <div className=" w-1/4 ">
                    <h1 className="text-[24px] loading-[33.6px] font-semibold mb-7">
                      {item.title}
                    </h1>
                    <div className="text-[16px] text-[#4D4D4D] loading-[174%]">
                      <p>
                        {item.p} <b>{item.span}</b>
                        {item.p1} <br />
                        <br />
                        {item.p2}
                      </p>
                    </div>
                  </div>
                  <div className="w-3/4 mt-1">
                    <div className=" flex justify-between">
                      <h1 className="flex items-center text-[24px] loading-[33.6px] font-semibold mb-[18px] ">
                        <div className="icon mr-3 nav ">
                          <div onClick={handleReload} className="nav-child">
                            <p>Nhấn vào đây để xem lại cách tìm số</p>
                          </div>
                          <span className="">i</span>
                        </div>
                        {item.titleList}
                      </h1>

                      <p
                        style={{
                          visibility: lengthData > 2 ? "hidden" : "visible",
                        }}
                        className="flex items-center text-white bg-[#FF4B5A] p-3 rounded-xl mb-7"
                      >
                        <img className="mr-3" src={ui} alt="" />
                        {item.note}
                      </p>
                    </div>
                    <div className="flex w-full">
                      <div className="w-1/2  mx-6">
                        <ul className=" flex w-full justify-between items-center mb-2 border-b-[1px] border-[#eff1f9] font-semibold">
                          <li className="flex-1 text-left">Số thuê bao</li>
                          <li className="flex-1 text-left">Giá tiền</li>
                          <li className="flex-1 text-left">Giá KM</li>
                        </ul>
                        <div className="mt-[34px]">
                          {item.dataListNumber?.map((item, i) => (
                            <div className=" flex justify-between text-[#070D14] mb-5 ">
                              <p className=" flex flex-1 text-[16px] loading-[150%] ">
                                <div className="mr-2">
                                  <Checkbox
                                    onChange={(e) => onChange(e)}
                                  ></Checkbox>
                                </div>
                                {item.num}
                              </p>
                              <p className="flex-1 text-[#565656] line-through text-[16px] loading-[150%]">
                                {item.price1}
                              </p>
                              <p className="flex-1 text-[#242424] font-semibold text-[16px] loading-[150%]">
                                {item.price2}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/2  mx-6 ">
                        <ul className=" flex w-full justify-between items-center mb-2 border-b-[1px] border-[#eff1f9] font-semibold">
                          <li className="flex-1 text-left">Số thuê bao</li>
                          <li className="flex-1 text-left">Giá tiền</li>
                          <li className="flex-1 text-left">Giá KM</li>
                        </ul>
                        <div className="mt-[34px]">
                          {item.dataListNumber?.map((item, i) => (
                            <div className=" flex justify-between text-[#070D14] mb-5 ">
                              <p className=" flex flex-1 text-[16px] loading-[150%] ">
                                <div className="mr-2">
                                  <Checkbox
                                    onChange={(e) => onChange(e)}
                                  ></Checkbox>
                                </div>
                                {item.num}
                              </p>
                              <p className="flex-1 text-[#565656] line-through text-[16px] loading-[150%]">
                                {item.price1}
                              </p>
                              <p className="flex-1 text-[#242424] font-semibold text-[16px] loading-[150%]">
                                {item.price2}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full text-center">
                  <button
                    style={{
                      cursor: lengthData > 2 ? "pointer" : "no-dop",
                      backgroundColor: lengthData > 2 ? "#FF4B5A" : "#FEF2F2",
                      color: lengthData > 2 ? "#fff" : "#FF4B5A",
                    }}
                    className="boder-0 text-[#FCA5A5] text-[18px] loading-[156%] font-semibold px-[48px] py-[10px] min-w-[202px] rounded-xl mt-[30px]  "
                  >
                    <div onClick={hadleBuySim} className="flex items-center">
                      Đặt mua
                      <img
                        className="ml-3"
                        style={{ color: lengthData > 1 ? "#fff" : "#FF4B5A" }}
                        src={rightIcon}
                        alt=""
                      />
                    </div>
                  </button>
                </div>
              </>
            );
          }
          return;
        })}
      </div>
      <div className="">
        {statusModal ? <PopUp status={handleReload} /> : ""}
      </div>
      <div className="">
        <Surface data={dataFamily} />
      </div>
    </div>
  );
};

export default FamilyNumber;
