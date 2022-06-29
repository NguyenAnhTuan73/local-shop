import image1 from "../../acssets/position-img/view-detail-1.png";
import image2 from "../../acssets/position-img/view-detail-2.png";
import image3 from "../../acssets/position-img/view-datail-3.png";
import image4 from "../../acssets/position-img/view-detail-4.png";
import image5 from "../../acssets/position-img/view-detail-5.png";

import kim from "../../acssets/position-img/kim.png";
import moc from "../../acssets/position-img/moc.png";
import thuy from "../../acssets/position-img/thuy.png";
import hoa from "../../acssets/position-img/hoa.png";
import tho from "../../acssets/position-img/tho.png";

const dataPositionViewDetail = [
  {
    title: "Ngày sinh",
    sub: "6/7/1990",
    img: image1,
  },
  {
    title: "Số thuê bao",
    sub: "089 123 4567",
    img: image2,
  },
  {
    title: "Điểm ngũ hành",
    sub: "7",
    img: image3,
  },
  {
    title: "Quẻ dịch",
    sub: "Lôi hoả phong - Quẻ cát",
    img: image4,
  },
  {
    sub: "Phân tích ngũ hành",
    img: image5,
    data: [
      { span: "Kim", imgspan: kim, num: "1" },
      { span: "Mộc", imgspan: moc, num: "3" },
      { span: "Thuỷ", imgspan: thuy, num: "2" },
      { span: "Hoả", imgspan: hoa, num: "1" },
      { span: "Thổ", imgspan: tho, num: "3" },
    ],
    des: `Sinh 14/5/2990 (Âm lịch), mạng Thổ
    Thổ (0,5)=3
    Tương sinh là Hoả (2,7) = 1
    Xét thêm điểm ngũ hành
    Kim (4,9) = 1
    Thuỷ (1,6) = 2
    Mộc (3,8) = 3
    Vậy số 090 123 4567 đối với ngày sinh 14/05/1990 (Âm lịch) mạng thổ có số điểm = 1+0,4 = 1,4/2 = 0,7 - 7 điểm -> Đạt >=50% -> hợp mạng`,
  },
];

export default dataPositionViewDetail;
