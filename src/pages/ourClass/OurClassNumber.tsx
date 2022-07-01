import React from "react";
import { Form, Input, Select, Button } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg from "../../acssets/bg/bg-our-class.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";
import SurfaceOurClass from "./surfaceOutClass/SufaceOutClass";

const OurClassNumber = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${bg})` }}
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
        <div className="w-[500px] h-[540px] bg-[#00000099]   main-concept rounded-[30px] ">
          <div className="mx-12 my-9 ">
            <Form layout="vertical">
              <Form.Item className="text-white">
                <h1 className="text-[32px] leading-[40px] text-white font-semibold mb-2">
                  Lớp chúng mình
                </h1>
                <p className="text-[16px]">
                  Vui lòng nhập thông tin dưới đây để tiếp tục
                </p>
              </Form.Item>
              <Form.Item
                style={{ color: "white", fontSize: "16px" }}
                label={
                  <label style={{ color: "white", fontSize: "16px" }}>
                    Số thành viên
                  </label>
                }
                name="Số thành viên*"
                rules={[{ required: true }]}
                className="mt-[52px]"
              >
                <Input
                  className="h-[52px] rounded-md text-[16px]"
                  placeholder="Nhập số"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label style={{ color: "white", fontSize: "16px" }}>
                    Số mong muốn
                  </label>
                }
                name="Số mong muốn*"
                rules={[{ required: true }]}
              >
                <Input
                  className="h-[52px] rounded-md text-[16px]"
                  placeholder="Nhập số"
                />
              </Form.Item>

              <Form.Item className="mt-[59px]">
                <p className="text-[16px] text-white ">
                  <span className="font-semibold mr-1 underline underline-offset-1 cursor-pointer hover:text-[#FF4D4F] ease duration-300">
                    Nhấn vào đây
                  </span>
                  để xem lại thông tin giới thiệu
                </p>
                <Button
                  danger
                  block
                  type="primary"
                  className="flex
                items-center justify-center rounded-lg h-[52px] w-full mt-6 text-[16px] font-semibold"
                  onClick={() => navigate("list-number")}
                >
                  Tiếp tục <img className="ml-3" src={rightIcon} alt="" />
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="surface-idol-number">
        <SurfaceOurClass />
      </div>
    </div>
  );
};

export default OurClassNumber;
