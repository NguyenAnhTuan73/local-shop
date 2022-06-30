import React, { useState, useEffect } from "react";
import searchHeader from "../../acssets/position-img/header.png";
import { Button, Modal } from "antd";

const PopUpCustomer = (props: any) => {
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
    props.handleShowPackage();
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
            </div>
          </Modal>
        </div>
      </>
    </div>
  );
};

export default PopUpCustomer;
