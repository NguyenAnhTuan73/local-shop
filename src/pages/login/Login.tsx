import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import loginImg from "../../acssets/images/img2.png";
import leftIcon from "../../acssets/left-icon-black.svg";
import "../../pages/style/index.scss";
// import "./login.scss";

const Login = () => {
  return (
    <div className="relative section-container ">
      <div className="absotule  navigate-icon">
        <Link to="/">
          <img src={leftIcon} alt="" />
        </Link>
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
                ]}
                label="Email hoặc số điện thoại*"
              >
                <Input
                  className="py-[14px] pl-5 mb-5"
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
                ]}
                label="Nhập mật khẩu"
              >
                <Input.Password
                  className="py-[14px] pl-5"
                  placeholder="placeholder"
                />
              </Form.Item>
              <Form.Item>
                <span className="text-[12px] leading-[18px]">
                  Bằng việc đăng nhập, bạn đồng ý với Điều khoản sử dụng và
                  Chính sách quyền riêng tư của myLocal.vn
                </span>
              </Form.Item>
              <Link to="/reset-password">
                <p className="remember-pw">Quên mật khẩu?</p>
              </Link>
              <Form.Item>
                <Button
                  className="mt-8 mb-5 rounded-md text-[18px] leading-[28.08px] h-[48px]"
                  danger
                  block
                  type="primary"
                >
                  <Link to="/nice-number">Đăng nhập</Link>
                </Button>
              </Form.Item>
              <p className="w-full text-center text-[14px]">
                Bạn chưa có tài khoản?{" "}
                <Link to="/resgister">
                  <span className="font-bold">Đăng ký</span>
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
