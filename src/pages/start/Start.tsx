import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../acssets/socical-icon/logo.svg";
import leftIcon from "../../acssets//socical-icon/left-icon.svg";
import search from "../../acssets//socical-icon/search.svg";
import logoFooter from "../../acssets/socical-icon/logoFooter.svg";
import rightIcon from "../../acssets/socical-icon/right-icon.svg";
import upIcon from "../../acssets/socical-icon/up-icon.svg";
import phoneIcon from "../../acssets/socical-icon/phone-icon.svg";
import locationIcon from "../../acssets/socical-icon/location-icon.svg";
import Slider from "../../components/Slider/Slider";
import SurfaceStart from "./surfaceStart/SurfaceStart";
import data from "../../components/data/data";
import "./start.scss";

const Start = () => {
  const navigate = useNavigate();
  return (
    <div id="start" className=" w-[1440px] h-[1205px] mx-auto bg-main start ">
      <div className="h-[88px] flex items-center justify-between px-16 pt-6">
        <div className=" flex items-center justify-between w-[714px]">
          <div className="w-6 h-6 flex items-center justify-center">
            <img src={leftIcon} alt="" />
          </div>
          <div className="">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className=" text-black text-lg font-semibold rounded-full bg-bg">
          {/* <Link to="/login"> */}
          <button
            onClick={() => navigate("/login")}
            className=" px-9 py-3 leading-7 w-[250px] cursor-pointer hover:text-[#FF4D4F] transition duration-300 ease-in-out "
          >
            Đăng nhập/ Đăng kí
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="flex items-center mt-7  max-w-[774px] h-12 bg-bg mx-auto rounded-md px-4 py-[7px] ">
        <img src={search} alt="" />
        <input
          type="text"
          className=" ml-[10px] outline-0  bg-bg w-full"
          placeholder="Tìm số"
        />
      </div>
      <div className="body mt-[60px] w-[1110px] h-[560px]  mx-auto mb-24">
        <Slider data={data} />
      </div>
      <div className="footer relative w-full h-[330px] bg-footer ">
        <div className=" h-full flex">
          <div className=" h-full ml-[150px] mt-[140px] mr-[88px]">
            <img src={logoFooter} alt="" />
          </div>
          <div className=" flex mt-[97px] justify-between">
            <div className=" flex items-center  text-white flex-col h-full mr-[100px]">
              <h6 className="footer-title">Thông tin liên lạc</h6>
              <div className="footer-item">
                <img className="footer-item-img" src={locationIcon} alt="" />
                <p className="footer-item-p">
                  09 Sông Nhuệ, Phường 2, Quận Tân Bình, TP HCM, Việt Nam
                </p>
              </div>
              <div className="footer-item">
                <img className="footer-item-img" src={phoneIcon} alt="" />
                <p className="footer-item-p">1900 1900 (Nhánh 1)</p>
              </div>
            </div>

            <div className=" mr-[85px]">
              <h6 className="footer-title">Truy cập nhanh</h6>
              <ul className="w-[235px]">
                <li className="footer-contact-item">
                  <a href="#">Về chúng tôi</a>
                </li>
                <li className="footer-contact-item">
                  <a href="#">Cơ hội kinh doanh/ Tuyển dụng</a>
                </li>
                <li className="footer-contact-item">
                  <a href="#">SIM Siêu Data 4G</a>
                </li>
                <li className="footer-contact-item">
                  <a href="#">Chương trình khuyến mãi</a>
                </li>
                <li className="footer-contact-item">
                  <a href="#">UAT Only</a>
                </li>
              </ul>
            </div>

            <div className="">
              <h6 className="footer-title">Đăng kí nhận thông tin</h6>
              <div className=" flex justify-between items-center">
                <div className="footer-input flex items-center justify-between">
                  <input type="text" placeholder="Enter your email" />
                  <div className="w-[30px] h-[30px] mr-2 bg-btnLeft rounded-full relative">
                    <img src={rightIcon} alt="" />
                  </div>
                </div>
                <div className="to-top-page">
                  <p className="to-top-page-p text-white">
                    <a href="#start">Về đầu trang</a>{" "}
                  </p>
                  <img
                    className="w-[14px] h-[14px] cursor-pointer"
                    src={upIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="surface-section">
        <SurfaceStart />
      </div>
    </div>
  );
};

export default Start;
