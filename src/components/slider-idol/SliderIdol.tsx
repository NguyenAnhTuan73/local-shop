import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import dataIdol from "../data-idol-and-fan/dataIdol";
import "./sliderIdol.scss";

const SliderIdol = () => {
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
        className="mySwiper "
      >
        {dataIdol.map((item: any, i: number) => (
          <SwiperSlide>
            <div
              key={i}
              //   onClick={() => navigate(item.path)}
              className="slider-item-idol cursor-pointer"
            >
              <img src={item.img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderIdol;
