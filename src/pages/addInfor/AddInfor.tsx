import React from "react";
import { Link } from "react-router-dom";
import bg from "../../acssets/nice-number-img/nn-bg.png";
import leftIcon from "../../acssets/left-icon.svg";
import logo from "../../acssets/logo.svg";
import { Form, Select, Input } from "antd";
const { Option } = Select;
const AddInfor = () => {
  return (
    <div
      className="section-container relative nice-number "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" bg-nice-number w-full h-full">
        <div className="flex mt-4 items-center">
          <Link to="/nice-number">
            <img className="navigate" src={leftIcon} alt="" />
          </Link>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[500px] h-[644px] bg-[#00000099]  main-concetp ">
          <Form>
            <Form.Item>
              <h1>Nhập thông tin</h1>
              <p>Vui lòng nhập thông tin dưới đây để tiếp tục</p>
            </Form.Item>
            <Form.Item
              name="Ngày tháng năm sinh*"
              label="Ngày tháng năm sinh*"
              rules={[{ required: true }]}
            >
              <div className="">
                <div className="">
                  <Select defaultValue="day" style={{ width: 120 }}>
                    <Option value="01">Jack</Option>
                    <Option value="02">Lucy</Option>
                  </Select>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddInfor;
