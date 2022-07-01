import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/images/img4.png";
import title from "../../../acssets/family/title.svg";

import titleFamilyNumber from "../../../acssets/family/Sim Gia đình-title.png";
import "./surfaceFamilyNumber.scss";

const SurfaceFamilyNumber = () => {
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
        <Modal
          visible={isModalVisible}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
          bodyStyle={{ height: "740px" }}
          width="972px"
        >
          <div className=" px-[76px] py-[56px] h-full">
            <div className="w-full flex  h-full">
              <div className="w-2/5 pr-[25px] h-full">
                <img
                  className=" surface-img rounded-[20px]  w-full"
                  src={surFaceImg}
                  alt=""
                />
              </div>
              <div className="w-3/5 pl-[25px]">
                <div className="">
                  <img className="mb-9" src={titleFamilyNumber} alt="" />
                  <img src={title} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default SurfaceFamilyNumber;
