import cross from "../../acssets/socical-icon/cross.png";
import iImage from "../../acssets/socical-icon/igray.png";
import a68 from "../../acssets/customer-infor/POPUP 6A68.png";
import a99s from "../../acssets/customer-infor/POPUP 12A99S.png";
import a89s from "../../acssets/customer-infor/POPUP 12A89S.png";

export interface DataCustomer {
  number: string;
  sub: string;
  img: any;
  des: string;
  imgItem?: any;
}
const dataCustomer: DataCustomer[] = [
  {
    number: "089 1234 567",
    sub: "Chưa có gói",
    img: cross,
    des: "Đăng ký gói cước",
  },
  {
    number: "089 1234 567",
    sub: "Chưa có gói",
    img: cross,
    des: "Đăng ký gói cước",
  },
  {
    number: "089 1234 567",
    sub: "12A99S",
    img: iImage,
    imgItem: a99s,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "12A89S",
    img: iImage,
    imgItem: a89s,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "6A68",
    img: iImage,
    imgItem: a68,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "6A68",
    img: iImage,
    imgItem: a68,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "12A89S",
    img: iImage,
    imgItem: a89s,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "6A68",
    img: iImage,
    imgItem: a68,
    des: "Xem chi tiết",
  },
  {
    number: "089 1234 567",
    sub: "12A99S",
    img: iImage,
    imgItem: a99s,
    des: "Xem chi tiết",
  },
];

export default dataCustomer;
