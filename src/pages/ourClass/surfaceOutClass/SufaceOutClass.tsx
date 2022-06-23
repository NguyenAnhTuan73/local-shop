import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/images/img3.png";

import titleOutClassNumber from "../../../acssets/outClass/out-class-title.svg";
import "./sufaceOutClass.scss";

const SufaceOutClass = () => {
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
                  <img className="mb-9" src={titleOutClassNumber} alt="" />
                  <p className="text-[#4D4D4D] text-[16px] font-normal">
                    Việc học online ngốn quá nhiều data mỗi ngày, mới học xong
                    một tiết mà đã hết veo, mua thêm bao nhiêu dung lượng thì
                    cũng đi ngay trong chớp mắt.
                    <br /> <br /> Đừng lo lắng! Chỉ cần một chiếc SIM Lớp học
                    của Local, bạn có thể thoải mái học online mà không lo rớt
                    mạng. Không những có data siêu khủng, bạn còn có thể đăng ký
                    SIM theo lớp. Mỗi thành viên của lớp sẽ sở hữu một số điện
                    thoại gắn liền với mã số lớp riêng. Chẳng lo quên số của
                    crush, mà thầy cô, bạn bè cũng có thể liên lạc với bạn dễ
                    dàng.
                    <br /> <br /> Tìm hiểu ngay SIM Lớp học tại Local nhé!
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

export default SufaceOutClass;
