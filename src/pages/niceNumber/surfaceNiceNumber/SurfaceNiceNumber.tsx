import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/nice-number-img/surface-nice-number.png";
import titleNiceNumber from "../../../acssets/nice-number-img/nn-title.svg";
import "./surfaceNiceNumber.scss";

const SurfaceNiceNumber = () => {
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
                  <img src={titleNiceNumber} alt="" />
                  <p className="text-[#4D4D4D] text-[16px]">
                    SIM số thế nào, tài lộc thế ấy. Một chiếc SIM số đẹp đương
                    nhiên sẽ mang đến cho bạn nhiều cát lành, thế nhưng nếu
                    chiếc SIM đó hợp tuổi, hợp mệnh của bạn nữa thì sẽ phù trợ
                    cho bạn cả đời may mắn. Thu hút tài lộc, hỗ trợ kinh doanh,
                    sức khỏe bình an, mọi sự hanh thông - Đó là những gì SIM
                    phong thủy có thể mang lại cho chủ nhân của nó.
                    <br />
                    <br />
                    Với Local, bạn có thể dễ dàng chọn và sở hữu một chiếc SIM
                    Phong thủy hợp mệnh nhất với giá mềm nhất. Hàng triệu SIM số
                    đẹp đang chờ bạn khám phá tại Local. Nhanh tay đăng ký nhé!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default SurfaceNiceNumber;
