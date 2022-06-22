import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import resImg from "../../acssets/images/img5.png";
import leftIcon from "../../acssets/left-icon.svg";
import "../../pages/style/index.scss";

const ResetPassword = () => {
  return (
    <div className="relative section-container ">
      <div className="absotule  navigate-icon">
        <Link to="/login">
          <img src={leftIcon} alt="" />
        </Link>
      </div>
      <div className=" flex items-center relative ">
        <div className="w-1/2 ">
          <img className="w-full object-cover" src={resImg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="form ml-40 my-auto">
            <Form layout="vertical">
              <Form.Item>
                <h1 className="text-[32px] font-semibold leading-[41.6px] ">
                  Đặt lại mật khẩu
                </h1>
              </Form.Item>
              <Form.Item>
                <span className="text-[12px] leading-[18px]">
                  Mã xác nhận được gửi đến email hoặc số điện thoại của bạn để
                  đặt lại mật khẩu.
                </span>
              </Form.Item>
              <Form.Item
                className="form-item-title"
                name="Email hoặc số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Nhập email hoặc số điện thoại",
                  },
                ]}
                label="Email hoặc số điện thoại"
              >
                <Input
                  className="py-[14px] pl-5 mb-5"
                  placeholder="placeholder"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className="mt-8 mb-5 rounded-md text-[18px] leading-[28.08px] h-[48px]"
                  danger
                  block
                  type="primary"
                >
                  <Link to="/reset-password/confirm">Gửi mã xác nhận</Link>
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

export default ResetPassword;
