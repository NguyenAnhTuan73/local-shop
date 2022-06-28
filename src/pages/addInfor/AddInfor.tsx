import React from "react";

import { Form, Input, Select, TimePicker, Checkbox, Button } from "antd";
import type { Moment } from "moment";
import moment from "moment";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import bg from "../../acssets/nice-number-img/nn-bg.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import logo from "../../acssets/socical-icon/logo.svg";

import "./addInfor.scss";
const { Option } = Select;
const children: React.ReactNode[] = [];
for (let i = 1; i <= 12; i++) {
  children.push(
    <Option key={i} className="text-[16px]">
      {i}
    </Option>
  );
}
const AddInfor = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const ClickForm = () => {
    switch (pathname) {
      case "":
    }
  };
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-nice-number w-full h-full ">
        <div className="flex mt-4 items-center">
          <Link to="/nice-number">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[500px] h-[644px] bg-[#00000099]   main-concept rounded-[30px] ">
          <div className="mx-12 my-10 ">
            <Form layout="vertical">
              <Form.Item className="text-white mb-[52px]">
                <h1 className="text-[32px] text-white font-semibold mb-2">
                  Nhập thông tin
                </h1>
                <p className="text-[16px]">
                  Vui lòng nhập thông tin dưới đây để tiếp tục
                </p>
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
                  <Input className=" rounded-md text-[16px]" placeholder="DD" />
                  <div className="mx-4 w-[124px] rounded-md">
                    <Select
                      defaultValue="MM"
                      style={{
                        width: "124px",
                        height: "52px",
                      }}
                      className="slect-month rounded-md leading-[52px] flex items-center "
                    >
                      {children}
                    </Select>
                  </div>
                  <Input
                    className=" rounded-md text-[16px]"
                    placeholder="YYYY"
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="Giờ sinh*"
                label={
                  <label style={{ color: "white", fontSize: "16px" }}>
                    Giờ sinh
                  </label>
                }
                rules={[{ required: true }]}
                className="text-white mb-2"
              >
                <div className=" w-full h-[52px]">
                  <TimePicker
                    className="w-full h-full rounded-md mb-5"
                    defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="Giới tính*"
                label={
                  <label style={{ color: "white", fontSize: "16px" }}>
                    Giới tính
                  </label>
                }
                rules={[{ required: true }]}
                className="mb-5"
              >
                <Checkbox className="text-white mr-10">Nam</Checkbox>
                <Checkbox className="text-white">Nữ</Checkbox>
              </Form.Item>
              <Form.Item className="mt-[120px]">
                <p className="text-[16px] text-white ">
                  <span className="font-semibold underline underline-offset-1 cursor-pointer hover:text-[#FF4D4F] ease duration-300">
                    Nhấn vào đây
                  </span>{" "}
                  để xem lại thông tin giới thiệu
                </p>
                <Button
                  danger
                  block
                  type="primary"
                  className="flex
                items-center justify-center rounded-lg h-[52px] w-full mt-6 text-[16px] font-semibold"
                  onClick={() => {
                    console.log("data:", location.pathname, "param", params);
                    navigate("position");
                  }}
                >
                  Tiếp tục <img className="ml-3" src={rightIcon} alt="" />
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfor;
