import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "./slider.scss";

const Slider = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {data.map((item: any, i: number) => (
          <SwiperSlide>
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="slider-item cursor-pointer"
            >
              <h2>{item.title}</h2>
              <img src={item.src} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
