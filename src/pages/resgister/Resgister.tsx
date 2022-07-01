import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import resImg from "../../acssets/images/img4.png";
import leftIcon from "../../acssets/socical-icon/left-icon.svg";
import "../../pages/style/index.scss";

const Resgister = () => {
  const navigate = useNavigate();
  return (
    <div className="relative section-container ">
      <div className="absotule  navigate-icon">
        <img onClick={() => navigate("/login")} src={leftIcon} alt="" />
      </div>
      <div className=" flex items-center relative ">
        <div className="w-1/2 ">
          <img src={resImg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="form ml-40 my-auto">
            <Form layout="vertical">
              <Form.Item>
                <h1 className="text-[32px] font-semibold leading-[41.6px] ">
                  Đăng Ký tài khoản
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
                  { min: 6 },
                ]}
                hasFeedback
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
                  { min: 8 },
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Password does not match criteria."),
                  },
                ]}
                hasFeedback
                label="Nhập mật khẩu"
              >
                <Input.Password
                  className="py-[14px] pl-5"
                  placeholder="placeholder"
                />
              </Form.Item>

              <Form.Item
                className="form-item-title"
                name="Xác nhận mật khẩu"
                rules={[
                  {
                    required: true,
                    message: "Xác nhận lại mật khẩu",
                  },
                ]}
                label="Xác nhận mật khẩu"
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

              <p
                onClick={() => navigate("/reset-password")}
                className="remember-pw cursor-pointer hover:text-[#FF4D4F] transition duration-300 ease-in-out"
              >
                Quên mật khẩu?
              </p>

              <Form.Item>
                <Button
                  className="mt-8 mb-5 rounded-md text-[18px] leading-[28.08px] h-[48px]"
                  danger
                  block
                  type="primary"
                  onClick={() => navigate("confirm")}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resgister;
