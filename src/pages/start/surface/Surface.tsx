import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/images/surface1.png";
import { Scrollbars } from "react-custom-scrollbars";
import "./surface.scss";

const Surface = () => {
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
          <Scrollbars
            autoHeightMax={200}
            style={{ width: "100%", height: "100%" }}
          >
            <div className=" px-[40px] pt-[29px]">
              <div className="w-full ">
                <img
                  className="w-full mb-9 rounded-[20px]"
                  src={surFaceImg}
                  alt=""
                />
                <div className=" flex items-center mb-4">
                  <div className="w-[72px] h-[2px] mr-8 bg-footer"></div>
                  <p className="text-xl font-semibold ">
                    SIM SỐ ĐẸP THẾ HỆ MỚI
                  </p>
                </div>
                <p className="text-surface_title font-medium text-[70px] mb-10">
                  Số đẹp như ý
                </p>
                <p className="text-[16px] leading-[27.84px] text-[#4D4D4D]">
                  Không chỉ dùng để nghe gọi, chiếc SIM điện thoại còn hàm chứa
                  nhiều ý nghĩa, có thể mang lại niềm vui và những điều tốt đẹp
                  như ý dành riêng cho bạn. Đừng bỏ lỡ cơ hội khám phá ngay kho
                  SIM hàng triệu số đẹp của Local! Với Local, bạn có thể dễ dàng
                  đăng ký một chiếc SIM số đẹp hợp phong thủy hay thần số học.
                  Không những thế, Local còn có những bộ SIM số độc đáo giúp bạn
                  có cơ hội “gắn kết” gia đình, bạn bè, “sánh đôi” cùng người
                  thương và “tỏa sáng” cùng Idol. Hãy định nghĩa số “đẹp” theo
                  cách riêng của bạn. Khám phá ngay tại Local nhé. Không chỉ
                  dùng để nghe gọi, chiếc SIM điện thoại còn hàm chứa nhiều ý
                  nghĩa, có thể mang lại niềm vui và những điều tốt đẹp như ý
                  dành riêng cho bạn. Đừng bỏ lỡ cơ hội khám phá ngay kho SIM
                  hàng triệu số đẹp của Local! Với Local, bạn có thể dễ dàng
                  đăng ký một chiếc SIM số đẹp hợp phong thủy hay thần số học.
                  Không những thế, Local còn có những bộ SIM số độc đáo giúp bạn
                  có cơ hội “gắn kết” gia đình, bạn bè, “sánh đôi” cùng người
                  thương và “tỏa sáng” cùng Idol. Hãy định nghĩa số “đẹp” theo
                  cách riêng của bạn. Khám phá ngay tại Local nhé.
                </p>
              </div>
            </div>
          </Scrollbars>
        </Modal>
      </>
    </div>
  );
};

export default Surface;

/*import { Button, Modal } from 'antd';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default App;*/
