import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { Link, useNavigate, Outlet } from "react-router-dom";
import bg from "../../../acssets/nice-number-img/nn-bg-list.svg";
import leftIcon from "../../../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../../../acssets/socical-icon/right-icon.svg";
import logo from "../../../acssets/socical-icon/logo.svg";
import search from "../../../acssets/socical-icon/search.svg";
import dataPositionViewDetail from "../../../../components/data-posititon/dataPositionViewDetail";
import dataPosition from "../../../../components/data-posititon/dataPosition";
import "../position.scss";

const PositionViewDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[36px] ml-[110px] mr-[50px]">
      <div className="">
        <div className="flex w-full mb-5">
          <h1 className="flex items-center text-[24px] loading-[33.6px] font-semibold mb-[18px] w-2/3 mx-6">
            Số thăng quan tiến chức
          </h1>
          <h1 className="text-[24px] mb-5 font-semibold loading-[33.6px] pl-[10px] w-1/3 mx-6">
            Luận giải
          </h1>
        </div>

        <div className="flex w-full">
          <div className="w-2/3 ">
            <div className="flex">
              <div className="w-1/2  mx-6">
                <ul className=" flex w-full justify-between items-center mb-2 border-b-[1px] border-[#eff1f9] font-semibold">
                  <li>Số thuê bao</li>
                  <li>Giá tiền</li>
                  <li>Giá KM</li>
                </ul>
              </div>
              <div className="w-1/2  mx-6 ">
                <ul className=" flex w-full justify-between items-center mb-2 border-b-[1px] border-[#eff1f9] font-semibold">
                  <li>Số thuê bao</li>
                  <li>Giá tiền</li>
                  <li>Giá KM</li>
                </ul>
              </div>
            </div>
            <div
              style={{ overflow: "auto" }}
              className="flex w-[840px] h-[526px] overflow-hidden flex-wrap border-r-2 border-[#eff1f9]"
            >
              {dataPosition.map((item, i) => (
                <div className="w-1/2 " key={i}>
                  <div className=" mt-7 mx-6 flex items-center justify-between">
                    <div className="flex mb-3">
                      <div className="w-[22px] h-[22px] rounded-full items-center bg-[#eff1f9]   mr-2 cursor-pointer"></div>
                      <p className="text-[16px] loading-[24px] text-[#000]">
                        {item.num1}
                      </p>
                    </div>
                    <p className="text-[16px] loading-[24px] text-[#5b5b5b] line-through">
                      {item.num2}
                    </p>
                    <p className="text-[16px] loading-[24px] text-[#000]">
                      {item.num3}
                    </p>
                  </div>
                  <div className="bg-[#eff1f9] px-5 py-4 rounded-[20px] mx-6 ">
                    <div className=" flex items-center justify-between">
                      <div className="">
                        <h5 className="text-[#b91c1c] text-[16px] loading-[24] font-semibold mb-1">
                          {item.title}
                        </h5>
                        <p className="text-[#070D14]">{item.p}</p>
                      </div>
                      <div className="w-[50px] h-[50px] rounded-lg relative bg-[#b01a1a]">
                        <span className="text-[18px] loading-[156%] font-semibold w-full h-full flex items-center justify-center text-white ">
                          {item.point}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-[16px] font-semibold text-[#b91c1c] mb-1">
                        {item.sub}
                      </p>
                      <p>{item.span1}</p>
                      <p>{item.span2}</p>
                    </div>
                    <div className="flex text-[#2563eb] w-full text-right mt-[14px]">
                      <p className="text-right w-full">{item.detail}</p>
                      <img className="text-[#2563eb]" src={rightIcon} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" my-5 flex justify-center ">
              <Button
                className=" flex items-center rounded-2xl px-[29px] py-[24px] font-semibold text-[18px] loading-[28.08px]"
                type="primary"
                danger
                onClick={() => navigate("/login")}
              >
                Đặt mua <img className="ml-2 h-full]" src={rightIcon} alt="" />
              </Button>
            </div>
          </div>
          <div className="w-1/3">
            <div className="ml-5">
              <div className="overflow-auto  h-[682px] ">
                {dataPositionViewDetail.map((item, i) => (
                  <div className="flex flex-col mb-3 py-4 px-[15px] rounded-[20px] border-[1px] border-[#E3E3E3]">
                    <div className="flex items-center   " key={i}>
                      <img className="mr-4" src={item.img} alt="" />

                      <div className="">
                        <p className="text-[16px] loading-[24px]">
                          {item.title}
                        </p>
                        <p className="text-[16px] loading-[24px] font-semibold">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      {item.data?.map((itemChild, i) => (
                        <div
                          key={i}
                          className=" flex flex-col items-center mr-2"
                        >
                          <h5>{itemChild.span}</h5>
                          <img src={itemChild.imgspan} alt="" />
                          <p>{itemChild.num}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p>{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PositionViewDetail;
