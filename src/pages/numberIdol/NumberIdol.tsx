import React from "react";
import { Form, Input, Select, Button } from "antd";
import { Link } from "react-router-dom";
import bg from "../../acssets/bg/bg-idol-and-fan.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";
import search from "../../acssets/socical-icon/search.svg";
import img1 from "../../acssets/nice-number-img/nn1.svg";
import dataNiceNumber from "../../components/data-nine-number/dataNiceNumber";
import SurfaceIdolNumber from "./surfaceIdolNumber/SurfaceIdolNumber";
import "./numberIdol.scss";

const NumberIdol = () => {
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-nice-number w-full h-full">
        <div className="flex mt-4 mb-[52px] items-center">
          <Link to="/login">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[576px] h-[766px] mx-auto ">
          <div className="flex items-center mt-7 mb-[50px] w-full h-12 bg-bg mx-auto rounded-md px-4 py-[7px] ">
            <img src={search} alt="" />
            <input
              type="text"
              className=" ml-[10px] text-[16px] outline-0  bg-bg"
              placeholder="Tìm kiếm tên Idol..."
            />
          </div>
          <p className="font-semibold text-[24px] text-white leading-[28px]">
            Thông tin nghệ sĩ
          </p>
          <div className="w-[575px] h-[378px] bg-[#00000099]   main-concept rounded-[30px] ">
            <div className="mx-12 my-10 ">
              <Form layout="vertical">
                <Form.Item className="text-white mb-[52px]">
                  <p className="text-[16px]">Hoặc tìm kiếm dựa vào:</p>
                </Form.Item>
                <Form.Item
                  name="Ngày tháng năm sinh*"
                  label={
                    <label style={{ color: "white", fontSize: "16px" }}>
                      Ngày tháng năm sinh
                    </label>
                  }
                  rules={[{ required: true }]}
                  className="mb-2 text-white text-[16px] "
                >
                  <div className=" flex w-full h-[52px] ">
                    <Input
                      className=" rounded-md text-[16px]"
                      placeholder="DD"
                    />
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

                <Form.Item className="mt-[67px]">
                  <p className="text-[16px] text-white ">
                    <span className="font-semibold underline underline-offset-1 mr-1 cursor-pointer hover:text-[#FF4D4F] ease duration-300">
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
                  >
                    Tiếp tục <img className="ml-3" src={rightIcon} alt="" />
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="surface-idol-number">
        <SurfaceIdolNumber />
      </div>
    </div>
  );
};

export default NumberIdol;
