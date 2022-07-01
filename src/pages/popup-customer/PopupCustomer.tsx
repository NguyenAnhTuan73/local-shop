import React, { useState, useEffect } from "react";
import searchHeader from "../../acssets/position-img/header.png";
import a68 from "../../acssets/customer-infor/POPUP 6A68.png";
import a99s from "../../acssets/customer-infor/POPUP 12A99S.png";
import a89s from "../../acssets/customer-infor/POPUP 12A89S.png";
import { Button, Modal } from "antd";

import { DataCustomer } from "../../components/data-customer/dataCustomer";
const PopUpCustomer = ({
  item,
  handleShowPackage,
}: {
  item: DataCustomer | null;
  handleShowPackage: (item?: DataCustomer) => void;
}) => {
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
    handleShowPackage();
  };

  return (
    <div className="">
      <>
        <div className="rounder-lg">
          <Modal
            visible={isModalVisible}
            footer={null}
            // onOk={handleOk}
            onCancel={handleCancel}
            bodyStyle={{
              height: "500px",
              width: "500px",
            }}
            width="500px"
          >
            <div className="">
              <div className="mb-4">
                <img src={item?.imgItem} alt="" />
              </div>
            </div>
          </Modal>
        </div>
      </>
    </div>
  );
};

export default PopUpCustomer;
