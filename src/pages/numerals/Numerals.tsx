import React from "react";
import { Form, Input, Select, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../acssets/bg/bg-numarals.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";
import SurfaceNumerals from "./surfaceNumerals/SurfaceNumerals";
import "./numerals.scss";

const Numerals = () => {
  const navigate = useNavigate();
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-nice-number w-full h-full">
        <div className="flex mt-4 items-center">
          <Link to="/login">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[500px] h-[544px] bg-[#00000099]   main-concept rounded-[30px] ">
          <div className="mx-12 my-10 ">
            <Form layout="vertical">
              <Form.Item className="text-white mb-[52px]">
                <h1 className="text-[32px] text-white font-semibold mb-2">
                  Thần số học
                </h1>
                <p className="text-[16px]">
                  Vui lòng nhập thông tin dưới đây để tiếp tục
                </p>
              </Form.Item>
              <Form.Item
                label="Họ và tên*"
                name="Họ và tên*"
                rules={[{ required: true }]}
              >
                <Input
                  className="h-[52px] rounded-md text-[16px]"
                  placeholder="Placeholder"
                />
              </Form.Item>
              <Form.Item
                name="Ngày tháng năm sinh*"
                label="Ngày tháng năm sinh*"
                rules={[{ required: true }]}
                className="mb-2 text-white text-[16px] "
              >
                <div className=" flex w-full h-[52px] ">
                  <Input className=" rounded-md text-[16px]" placeholder="DD" />
                  <div className="mx-4 w-[124px] rounded-md">
                    <Select
                      defaultValue="MM"
                      style={{
                        width: "124px",
                        height: "52px",
                      }}
                      className="slect-month rounded-md leading-[52px] flex items-center "
                    ></Select>
                  </div>
                  <Input
                    className=" rounded-md text-[16px]"
                    placeholder="YYYY"
                  />
                </div>
              </Form.Item>

              <Form.Item className="mt-[80px]">
                <p className="text-[16px] text-white ">
                  <span className="font-semibold underline underline-offset-1 cursor-pointer hover:text-[#FF4D4F] ease duration-300">
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
        <SurfaceNumerals />
      </div>
    </div>
  );
};

export default Numerals;
