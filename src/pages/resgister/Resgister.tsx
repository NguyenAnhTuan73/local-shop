import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import resImg from "../../acssets/images/img4.png";
import leftIcon from "../../acssets/left-icon.svg";
import "../../pages/style/index.scss";

const Resgister = () => {
  return (
    <div className="relative section-container ">
      <div className="absotule  navigate-icon">
        <Link to="/login">
          <img src={leftIcon} alt="" />
        </Link>
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
                  <Link to="/resgister/confirm">Đăng ký</Link>
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
