import React, { useState, useEffect } from "react";
import searchHeader from "../../acssets/position-img/header.png";
import { Button, Modal } from "antd";

const PopUp = (props: any) => {
  console.log("props", props);
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
    props.status();
    console.log("data-con", props.status);
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
            bodyStyle={{
              height: "594px",
              padding: "16px",
            }}
            width="378px"
          >
            <div className="">
              <div className="mb-4">
                <img src={searchHeader} alt="" />
              </div>
              <div className="w-full text-center mb-3">
                <h1 className="text-[20px] loading-[28px] mb-2 font-semibold text-[#070D14]">
                  Gợi ý tìm kiếm số yêu thích
                </h1>
                <span className="text-[12px] loading-[18px] font-medium text-surface_title w-full text-center px-3 ">
                  Sử dụng dấu (*) khi bạn cần tìm kiếm số thuê bao yêu thích. Ví
                  dụ:
                </span>
              </div>
              <ul className="leading-8 p-1 mb-6">
                <li className="text-[14px] loading-[22.4px] mb-2">
                  Để tìm số thuê bao chứa số 68 bất kỳ, <b>gõ 68</b>{" "}
                </li>
                <li className="text-[14px] loading-[22.4px] mb-2">
                  Để tìm số thuê bao bắt đầu bằng số 68, <b> gõ 68*</b>
                </li>
                <li className="text-[14px] loading-[22.4px] mb-2">
                  Để tìm số thuê bao kết thúc bằng số 68, <b>gõ *68</b>{" "}
                </li>
                <li className="text-[14px] loading-[22.4px] mb-2">
                  Để tìm số thuê bao bắt đầu bằng số 68 và kết thúc bằng 99,{" "}
                  <b>gõ 68*99</b>
                </li>
              </ul>
              <div className="">
                <Button
                  type="primary"
                  danger
                  className="rounded-lg h-[48px] w-[91.5%] text-[18px] loading-[156%] absolute bottom-[16px]"
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
