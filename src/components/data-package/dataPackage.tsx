import a89s from "../../acssets/customer-infor/FrameA89S.png";
import a99s from "../../acssets/customer-infor/FrameA99S.png";
import a68 from "../../acssets/customer-infor/Frame6A68.png";
import a689s from "../../acssets/customer-infor/Frame6A89S.png";
import a699s from "../../acssets/customer-infor/FrameA99S.png";
import a1268 from "../../acssets/customer-infor/Frame12A68.png";
import a1289s from "../../acssets/customer-infor/Frame 12A89S.png";
import a1299s from "../../acssets/customer-infor/Frame12A99S.png";

export interface DataPackage {
  choose: string;
  data: { title: string; imgPackage: any; description?: string }[];
}

const dataPackage: DataPackage[] = [
  {
    choose: "GÓI 1 THÁNG",
    data: [
      { title: "A89S", imgPackage: a89s, description: "Gói 1 tháng" },
      { title: "A99S", imgPackage: a99s, description: "Gói 1 tháng" },
    ],
  },
  {
    choose: "GÓI 6 THÁNG",
    data: [
      { title: "6A68", imgPackage: a68, description: "Gói 6 tháng" },
      { title: "6A89S", imgPackage: a689s, description: "Gói 6 tháng" },
      { title: "6A99S", imgPackage: a699s, description: "Gói 6 tháng" },
    ],
  },
  {
    choose: "GÓI 12 THÁNG",
    data: [
      { title: "12A68", imgPackage: a1268, description: "Gói 12 tháng" },
      { title: "12A89S", imgPackage: a1289s, description: "Gói 12 tháng" },
      { title: "12A99S", imgPackage: a1299s, description: "Gói 12 tháng" },
    ],
  },
];
export default dataPackage;
