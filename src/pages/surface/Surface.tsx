import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const Surface = ({ data }: any) => {
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
              {data.map((item: any, i: number) => (
                <>
                  <div key={i} className="w-2/5 pr-[25px] h-full">
                    <img
                      className=" surface-img rounded-[20px]  w-full"
                      src={item.img}
                      alt="photo"
                    />
                  </div>
                  <div className="w-3/5 pl-[25px]">
                    <div className="">
                      <img className="mb-9" src={item.title} alt="" />
                      <img className="" src={item.des} />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Surface;
