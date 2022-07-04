import React, { useState, useEffect } from "react";
import { Button, message, Steps } from "antd";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

import logo from "../../acssets/socical-icon/logo - type - head.png";
import leftIcon from "../../acssets/socical-icon/left-icon-black.svg";
import Step1img from "../../acssets/customer-infor/Group 1.png";
import Step2img from "../../acssets/customer-infor/Group 2.png";
import Step3img from "../../acssets/customer-infor/Group 3.png";
import Step4img from "../../acssets/customer-infor/Group 4.png";
import Step5img from "../../acssets/customer-infor/Group 5.png";
import Timer from "../../components/timer/Timer";
import Cart from "../../components/cart/Cart";
import "./customerInfor.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Thông tin giữ số",

    icon: <Step1img />,
  },
  {
    title: "Chọn gói cước",

    icon: <Step2img />,
  },
  {
    title: "Thông tin giao hàng",

    icon: Step3img,
  },
  {
    title: "Thanh toán",

    icon: Step4img,
  },
  {
    title: "Hoàn tất đặt hàng",
    // content: <Step5 />,
    icon: Step5img,
  },
];

const CustomerInfor = () => {
  const [current, setCurrent] = useState(0);

  const [step, setStep] = useState(1);

  const [resultsParams, setResultsParams] = useState("");

  const navigate = useNavigate();

  const next = () => {
    setCurrent(current + 1);
    setStep(step + 1);

    navigate(`steps-${step + 1}`);
    let dataUrl = location.href.slice(-7);
    setResultsParams(dataUrl);
  };

  const prev = () => {
    setCurrent(current - 1);
    setStep(step - 1);
    navigate(step === 1 ? "/login" : `steps-${step - 1}`);
    setResultsParams("");
  };

  return (
    <>
      <div
        className="mx-auto"
        style={{
          display: resultsParams === "steps-3" ? "flex" : "",
          justifyContent: "center",
        }}
      >
        <div className="">
          <div className="section-container h-full pb-[56px]">
            <div className="w-full flex items-center relative  ">
              <div className="absolute  top-5 left-[60px]">
                <img
                  onClick={() => prev()}
                  className="cursor-pointer hover:text-[#FF364E]"
                  src={leftIcon}
                  alt=""
                />
              </div>
              <div className="absolute left-1/2 top-3 ">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="w-[575px] mx-auto mt-[90px]">
              <Steps current={current} labelPlacement="vertical">
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>

              <div className="w-full text-center">
                <Outlet />
                {current < steps.length - 1 && (
                  <div className="">
                    <Timer />
                    <button
                      className="bg-[#FF4B5A] text-[#fff] text-[18px] 
              font-semibold loading-[156%] px-[196px] py-[10px] rounded-md cursor-pointer"
                      onClick={() => next()}
                    >
                      Tiếp tục
                    </button>
                  </div>
                )}
                {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                  >
                    Done
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        {resultsParams === "steps-3" ? <Cart /> : ""}
      </div>
    </>
  );
};

export default CustomerInfor;
