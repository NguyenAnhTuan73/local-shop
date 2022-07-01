import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import loginImg from "../../acssets/images/img2.png";
import leftIcon from "../../acssets/socical-icon/left-icon-black.svg";
import "../../pages/style/index.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="relative section-container ">
      <div className="absotule  navigate-icon">
        <img onClick={() => navigate("/")} src={leftIcon} alt="" />
      </div>
      <div className=" flex items-center relative ">
        <div className="w-1/2 ">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="form ml-40 my-auto">
            <Form layout="vertical">
              <Form.Item>
                <h1 className="text-[32px] font-semibold leading-[41.6px] ">
                  Đăng Nhập
                </h1>
              </Form.Item>

              <Form.Item
                className="form-item-title"
                name="Email hoặc số điện thoại*"
                rules={[
                  {
                    required: true,
                    message: "Nhập email hoặc số điện thoại",
                  },
                  { whitespace: true },
                  { min: 6 },
                ]}
                hasFeedback
                label={
                  <label style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Email hoặc số điện thoại*
                  </label>
                }
              >
                <Input
                  className="py-[14px] pl-5 mb-5 text-[16px]"
                  placeholder="placeholder"
                />
              </Form.Item>

              <Form.Item
                className="form-item-title"
                name="Nhập mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu",
                  },
                  { min: 6 },
                ]}
                hasFeedback
                label={
                  <label style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Nhập mật khẩu*
                  </label>
                }
              >
                <Input.Password
                  className="py-[14px] pl-5 text-[16px]"
                  placeholder="placeholder"
                />
              </Form.Item>
              <Form.Item>
                <span className="text-[12px] leading-[18px]">
                  Bằng việc đăng nhập, bạn đồng ý với Điều khoản sử dụng và
                  Chính sách quyền riêng tư của myLocal.vn
                </span>
              </Form.Item>

              <p
                onClick={() => navigate("/reset-password")}
                className=" text-[16px] remember-pw cursor-pointer hover:text-[#FF4D4F] transition duration-300 ease-in-out"
              >
                Quên mật khẩu?
              </p>

              <Form.Item>
                <Button
                  className="mt-8 mb-5 rounded-md text-[18px] leading-[28.08px] h-[48px] "
                  danger
                  block
                  type="primary"
                  onClick={() => navigate("/customer-information")}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <p className="w-full text-center text-[14px]">
                Bạn chưa có tài khoản? {/* <Link to="/resgister"> */}
                <span
                  onClick={() => navigate("/resgister")}
                  className="font-bold cursor-pointer hover:text-[#FF4D4F] transition duration-300 ease-in-out"
                >
                  Đăng ký
                </span>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
