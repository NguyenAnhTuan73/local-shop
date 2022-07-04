import React from "react";
import { Form, Input, Select } from "antd";
import Cart from "../../components/cart/Cart";
import "./steps.scss";
const { TextArea } = Input;
const Step3 = () => {
  return (
    <>
      <div className="">
        <div className="mb-[66px]">
          <h1 className="text-left mb-6 font-semibold leading-[152%] text-[16px]">
            Thông tin cá nhân
          </h1>
          <Form layout="vertical">
            <Form.Item
              name="Họ và tên"
              label="Họ và tên"
              rules={[
                { message: "Hãy nhập họ và tên của bạn", required: true },
                { whitespace: true },
              ]}
              hasFeedback
            >
              <Input
                className="bg-[#F6F4F5] rounded-md outline-none border-0 h-[40px] mb-4"
                placeholder="Tên của bạn là gì ?"
              />
            </Form.Item>

            <Form.Item
              name="Số điện thoại"
              label="Số điện thoại"
              rules={[{ required: true }, { whitespace: true }]}
              hasFeedback
            >
              <Input
                className="bg-[#F6F4F5] rounded-md outline-none border-0 h-[40px] mb-4"
                placeholder="+84"
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="Địa chỉ email"
              label="Địa chỉ email"
              rules={[
                { required: true },
                { type: "email", message: "Hãy nhập email của bạn" },
              ]}
              hasFeedback
            >
              <Input
                className="bg-[#F6F4F5] rounded-md outline-none border-0 h-[40px] mb-4"
                placeholder="Địa chỉ email của bạn là..."
              />
            </Form.Item>
          </Form>
        </div>
        <div className="">
          <h1 className="text-left mb-6 font-semibold leading-[152%] text-[16px]">
            Địa chỉ giao hàng
          </h1>
          <Form layout="vertical">
            <Form.Item label="Tỉnh/Thành phố" className="mb-4">
              <Select placeholder="Chọn Tỉnh/Thành phố">
                <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                <Select.Option value="Hà Nội">Đà Nẵng</Select.Option>
                <Select.Option value="Hà Nội">TP Hồ Chí Minh</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Quận/Huyện" className="mb-4">
              <Select placeholder="Chọn Quận/Huyện">
                <Select.Option value="Hà Nội">Tỉnh 1</Select.Option>
                <Select.Option value="Hà Nội">Tỉnh 2</Select.Option>
                <Select.Option value="Hà Nội">Tỉnh 3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Phường /Xã" className="mb-4">
              <Select placeholder="Chọn Phường/Xã">
                <Select.Option value="Hà Nội">Phường/Xã 1</Select.Option>
                <Select.Option value="Hà Nội">Phường/Xã 2</Select.Option>
                <Select.Option value="Hà Nội">Phường/Xã 3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Địa chỉ"
              label={<label style={{ marginBottom: "18px" }}>Địa chỉ</label>}
              rules={[
                { required: true },
                { type: "string", message: "Hãy nhập địa chỉ của bạn" },
              ]}
              hasFeedback
            >
              <Input
                className="bg-[#F6F4F5] rounded-md outline-none border-0 h-[40px] mb-4"
                placeholder="Số nhà, tên đường..."
              />
            </Form.Item>
            <Form.Item
              name="Ghi chú"
              label={<label style={{ marginBottom: "8px" }}>Ghi chú</label>}
              rules={[
                { required: true },
                { type: "string", message: "Hãy nhập địa chỉ của bạn" },
              ]}
              hasFeedback
            >
              {/* <Input
              className="bg-[#F6F4F5] rounded-md outline-none border-0 h-[40px] mb-4"
              placeholder="Số nhà, tên đường..."
            /> */}
              <TextArea
                rows={4}
                placeholder="Ghi chú cho người giao hàng"
                maxLength={6}
                className="mb-[42px]"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Step3;
