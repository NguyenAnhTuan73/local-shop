import React, { useState, useEffect } from "react";
import { Modal, BackTop } from "antd";
import surFaceImg from "../../../acssets/images/img5.png";

import titleNumeralsNumber from "../../../acssets/numarals/numarals-title.svg";
import "./surfaceNumerals.scss";

const surfaceNumerals = () => {
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
                  <img className="mb-9" src={titleNumeralsNumber} alt="" />
                  <p className="text-[#4D4D4D] text-[16px] font-normal">
                    Chuyện tâm linh không đùa được đâu. Mỗi con số trong ngày
                    sinh của bạn đều ẩn chứa nguồn năng lượng, ảnh hưởng trực
                    tiếp đến vận mệnh cuộc đời bạn đấy! <br /> <br /> Khi sở hữu
                    một chiếc SIM Thần số học, bạn sẽ được bổ trợ các nguồn năng
                    lượng tích cực từ các con số khuyết thiếu trong bản đồ ngày
                    sinh. Để giúp bạn tìm ra dãy số phù hợp nhất, Local cho ra
                    mắt bộ công cụ tìm kiếm số đẹp dựa theo phương pháp Thần số
                    học thật tiện lợi và nhanh chóng! <br /> <br /> SIM Thần số
                    học dành cho bạn sẽ thế nào? Thử và đăng ký ngay tại Local
                    nhé!
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

export default surfaceNumerals;
