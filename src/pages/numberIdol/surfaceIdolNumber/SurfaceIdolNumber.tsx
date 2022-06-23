import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/images/img1.png";

import titleIdolNumber from "../../../acssets/idol-and-fan-img/idol-and-fan-title.svg";
import "./surfaceIdolNumber.scss";

const SurfaceIdolNumber = () => {
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
                  <img className="mb-9" src={titleIdolNumber} alt="" />
                  <p className="text-[#4D4D4D] text-[16px] font-normal">
                    Với Local, bạn có thễ dễ dàng tìm một số điện thoại đặc biệt
                    gắn liền với thần tượng. Local có hàng triệu số đẹp giúp
                    cộng đồng Fandom tạo một mã nhận diện riêng. Các thành viên
                    Fandom kết nối dễ dàng - mọi lúc, mọi nơi. Khi sở hữu số
                    điện thoại có mã nhận diện là thành viên của cộng đồng
                    Fandom, bạn sẽ sở hữu ngay các đặc quyền của Fan chỉ có ở
                    Local.
                    <br /> <br /> Hãy để Local đồng hành cùng bạn trên hành
                    trình kết nối Idol.
                    <br /> <br /> Mã cộng đồng Fandom của bạn là gì? Khám phá và
                    đăng ký ngay tại Local nhé.
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

export default SurfaceIdolNumber;
