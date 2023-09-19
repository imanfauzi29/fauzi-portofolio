import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import classNames from "classnames";
import { truncateText } from "../helper/text";

import type { Swiper as SwiperType } from "swiper";
import type { TSwiperList } from "../types/swiper";

import "swiper/css";

interface Props {
  lists: TSwiperList[];
  sliderIndex: number;
  sliderCallback: (value: number) => void;
}
const SwiperList = ({ lists, sliderIndex, sliderCallback }: Props) => {
  const handleChangeSwiper = (swiper: SwiperType) => {
    if (swiper === null) return;
    const currentSlide = swiper.realIndex;
    sliderCallback(currentSlide);
  };
  return (
    <Swiper
      direction={"vertical"}
      className="max-h-full"
      slidesPerView={3}
      initialSlide={sliderIndex}
      onSlideChange={handleChangeSwiper}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      modules={[Autoplay]}
      centeredSlides
      loop
    >
      {lists.map(({ icon: Icon, name, text }, i) => (
        <SwiperSlide key={i}>
          <div
            className={classNames(" transition-all", {
              "scale-75": i !== sliderIndex,
            })}
          >
            <div
              className={classNames(
                "flex gap-3 px-4 py-4 items-center rounded-lg",
                { "bg-gray-50": i === sliderIndex },
              )}
            >
              <div
                className={classNames("text-gray-500", {
                  "text-primary-500": i === sliderIndex,
                })}
              >
                <Icon size="42" />
              </div>
              <div className="flex flex-col gap-4">
                <h5
                  className={classNames("uppercase text-gray-500 font-bold", {
                    "text-primary-500": i === sliderIndex,
                  })}
                >
                  {name}
                </h5>
                <p className="text-gray-500">{truncateText(text, 80)}</p>
                <a href="#" className="text-gray-500">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperList;
