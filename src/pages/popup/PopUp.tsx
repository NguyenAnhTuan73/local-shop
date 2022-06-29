import React, { useState, useEffect } from "react";
import searchHeader from "../../acssets/position-img/header.png";
import { Button, Modal } from "antd";

const PopUp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="">
      <>
        <div className="rounder-lg">
          <Modal
            visible={isModalVisible}
            footer={null}
            onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={{ height: "594px" }}
            width="378px"
            className="pop-up"
          >
            <div className="">
              <div className="mb-4">
                <img src={searchHeader} alt="" />
              </div>
              <div className="w-full text-center mb-3">
                <h1 className="text-[20px] loading-[28px] mb-2 font-semibold text-[#070D14]">
                  Gợi ý tìm kiếm số yêu thích
                </h1>
                <span className="text-[12px] font-medium text-surface_title ">
                  Sử dụng dấu (*) khi bạn cần tìm kiếm số thuê bao yêu thích. Ví
                  dụ:
                </span>
              </div>
              <ul className="leading-8 p-1 mb-6">
                <li>
                  Để tìm số thuê bao chứa số 68 bất kỳ, <b>gõ 68</b>{" "}
                </li>
                <li>
                  Để tìm số thuê bao bắt đầu bằng số 68, <b> gõ 68*</b>
                </li>
                <li>
                  Để tìm số thuê bao kết thúc bằng số 68, <b>gõ *68</b>{" "}
                </li>
                <li>
                  Để tìm số thuê bao bắt đầu bằng số 68 và kết thúc bằng 99,{" "}
                  <b>gõ 68*99</b>
                </li>
              </ul>
              <div className="w-full">
                <Button
                  type="primary"
                  block
                  danger
                  className="rounded-lg h-[48px] text-[18px] loading-[156%]"
                >
                  Bắt đầu chọn số
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </>
    </div>
  );
};

export default PopUp;
