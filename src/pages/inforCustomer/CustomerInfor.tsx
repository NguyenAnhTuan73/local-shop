import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import logo from "../../acssets/socical-icon/logo - type - head.png";
import leftIcon from "../../acssets/socical-icon/left-icon-black.svg";
import Step1img from "../../acssets/customer-infor/Group 1.png";
import Step2img from "../../acssets/customer-infor/Group 2.png";
import Step3img from "../../acssets/customer-infor/Group 3.png";
import Step4img from "../../acssets/customer-infor/Group 4.png";
import Step5img from "../../acssets/customer-infor/Group 5.png";
import ui from "../../acssets/socical-icon/UIstep.png";
import "./customerInfor.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Thông tin giữ số",
    content: <Step1 />,
    icon: <Step1img />,
  },
  {
    title: "Chọn gói cước",
    content: <Step2 />,
    icon: <Step2img />,
  },
  {
    title: "Thông tin giao hàng",
    content: <Step3 />,
    icon: Step3img,
  },
  {
    title: "Thanh toán",
    content: <Step4 />,
    icon: Step4img,
  },
  {
    title: "Hoàn tất đặt hàng",
    content: <Step5 />,
    icon: Step5img,
  },
];

const CustomerInfor = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
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
          <div className="steps-content">{steps[current].content}</div>
          <div className="w-full text-center">
            {/* {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )} */}
            {current < steps.length - 1 && (
              <div className="">
                <div className=" flex items-center justify-center mb-4">
                  <img className="mr-2" src={ui} alt="" />
                  <p>
                    Thời gian thanh toán còn lại <b>60</b> phút <b>00</b> giây
                  </p>
                </div>
                <button
                  className="bg-[#FEF2F2] text-[#FCA5A5] text-[18px] 
              font-semibold loading-[156%] px-[196px] py-[10px] rounded-md"
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
    </>
  );
};

export default CustomerInfor;
