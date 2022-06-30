import React from "react";
import { Button, Form, Input } from "antd";
import searchBar from "../../acssets/customer-infor/SearchBar.png";
import ui from "../../acssets/socical-icon/UIstep.png";
const Step1 = () => {
  return (
    <div className="mx-auto">
      <Form className="mt-10" layout="vertical">
        <Form.Item>
          <img className="mb-7" src={searchBar} alt="" />
        </Form.Item>
        <Form.Item label="Số CMND/CCCD thứ 1*">
          <Input
            className="border-0 bg-[#f6f6f6] py-4 px-5 rounded-xl mb-5"
            placeholder="Nhập số CMND/CCCD"
          />
        </Form.Item>
        <Form.Item label="Số CMND/CCCD thứ 2*">
          <Input
            className="border-0 bg-[#f6f6f6] py-4 px-5 rounded-xl mb-5"
            placeholder="Nhập số CMND/CCCD"
          />
        </Form.Item>
        <Form.Item label="Số CMND/CCCD thứ 3*">
          <Input
            className="border-0 bg-[#f6f6f6] py-4 px-5 rounded-xl mb-5"
            placeholder="Nhập số CMND/CCCD"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step1;
