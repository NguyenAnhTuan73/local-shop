import React, { useState } from "react";
import imgItem from "../../acssets/images/img4.png";
import Cart from "../../components/cart/Cart";
import payment1 from "../../acssets/images/payment1.png";
import payment2 from "../../acssets/images/payment2.png";
const Step4 = () => {
  const [detail, setDetail] = useState(false);
  const handleClickDetail = () => {
    setDetail(!detail);
  };
  return (
    <div className="w-[575px] mt-9">
      <div className="w-full">
        <h1 className="text-left mb-6 text-[#898989] font-semibold ">
          ĐỊA CHỈ GIAO HÀNG
        </h1>
        <div className="h-[150px] bg-[#ccc] mb-5 ">THÔNG TIN KHÁCH HÀNG</div>
      </div>
      <div className="">
        <h1 className="text-left mb-7 text-[#898989] font-semibold ">
          THÔNG TIN KHÁCH HÀNG
        </h1>
        <div className="">
          <div className="flex p-4 mb-5">
            <div className="flex w-3/4">
              <img
                className="w-[100px] h-[100px] object-cover rounded-xl "
                src={imgItem}
                alt=""
              />
              <div className="ml-4">
                <h5 className="font-semibold text-[16px] text-[#212529] leading-[150%] mb-1">
                  SIM Gia Đình
                </h5>
                <p className="text-[16px] leading-[150%] text-[#898989] ">
                  089 123 4567
                </p>
                <p className="text-[16px] leading-[150%] text-[#898989] ">
                  089 123 4567
                </p>
                <p className="text-[16px] leading-[150%] text-[#898989] ">
                  Số lượng: 09
                </p>
              </div>
            </div>
            <div className="w-1/4">
              <h6
                onClick={handleClickDetail}
                className="mb-6 text-[#1D4ED8] underline cursor-pointer leading-[150%] font-medium "
              >
                Chi tiết
              </h6>
              <p className="text-[12px] line-through text-[#898989] ">
                9.725.000đ
              </p>
              <p className="text-[16px] font-semibold leading-[150%] text-[#2f2f2f]">
                5.725.000đ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[575px] h-[300px]">
        <h1 className=" text-left w-full text-[16px] font-semibold text-[#898989] pb-3 border-solid border-current border-b-2 ">
          CHI TIẾT
        </h1>
        <div className="h-[264px] bg-[#898989] mt-3 "></div>
      </div>
      <div className="h-[136px] mt-6 mb-10">
        <h1 className=" text-left w-full text-[16px] font-semibold text-[#898989] mb-3  ">
          CHỌN PHƯƠNG THỨC THANH TOÁN
        </h1>
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center ">
              <img className="mr-3" src={payment1} alt="" />
              <p className=" font-semibold text-[#2F2F2F]">
                Thẻ ngân hàng nội địa
              </p>
            </div>
            <input type="radio" name="Thẻ ngân hàng nội địa" id="" />
          </div>
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center">
              <img className="mr-3" src={payment2} alt="" />
              <p className="font-semibold text-[#2F2F2F]">
                Thanh toán qua VNPAY
              </p>
            </div>
            <input type="radio" name="Thẻ ngân hàng nội địa" id="" />
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="mb-9 text-[#898989]">
          Tôi đã đọc và đồng ý với việc chia sẻ những thông tin trên theo{" "}
          <b>Chính sách bảo mật</b> của myLocal.vn
        </p>
      </div>
    </div>
  );
};

export default Step4;
