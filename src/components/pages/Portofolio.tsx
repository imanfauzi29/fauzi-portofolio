import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import classNames from "classnames";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { MdWeb } from "react-icons/md";

import { truncateText } from "../../helper/text";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

const Portofolio = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleChangeSwiper = (swiper: SwiperType) => {
    if (swiper === null) return;
    const currentSlide = swiper.realIndex;
    setCurrentSlideIndex(currentSlide);
  };
  const lists = [
    {
      name: "ojekbro tech",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwc1802079.jpg&f=1&nofb=1&ipt=c51967e7945d7d56ad0676bf61f25cdca8c72ac3167fb96b40a7adfcf3f26343&ipo=images",
    },
    {
      name: "ojekbro tech",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F39900000%2FLink-link-39963209-4058-3734.png&f=1&nofb=1&ipt=1e01c9267f4ba475d613246f06f58a74bf4edf31a8bef77017b32562e23c5654&ipo=images",
    },
    {
      name: "ojekbro tech",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FBackgrounds-Link-Download.jpg&f=1&nofb=1&ipt=933deeb7caf0a5f042eb0bbe8a716f0730e1abc7fc46fa9f64f9a43725374939&ipo=images",
    },
    {
      name: "ojekbro tech",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwc1716575.jpg&f=1&nofb=1&ipt=1201f41f050e40125286b93bfbc1b3f64b77a4bb78364278d3a1b8d98f9b86a2&ipo=images",
    },
  ];

  return (
    <div id="portofolio" className="h-screen">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 justify-center gap-16 h-fit md:h-full ">
        <div className="max-w-md w-full max-h-[600px] h-full shadow-lg rounded-xl overflow-hidden">
          {lists.map(
            ({ image }, i) =>
              i === currentSlideIndex && (
                <motion.img
                  key={i}
                  src={image}
                  layoutId="imageMotion"
                  className={classNames("object-cover w-full h-full")}
                />
              ),
          )}
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-bold">
            <div className="text-primary-700 uppercase tracking-[.4rem] mb-4">
              WEBSITE
            </div>
            <div className="text-5xl">OjekBro Website</div>
          </div>
          <div className="max-h-[500px] box-border">
            <Swiper
              direction={"vertical"}
              className="max-h-full"
              slidesPerView={3}
              initialSlide={currentSlideIndex}
              onSlideChange={handleChangeSwiper}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
              modules={[Autoplay]}
              centeredSlides
              loop
            >
              {lists.map(({ icon: Icon, link, name, text }, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={classNames(" transition-all", {
                      "scale-75": i !== currentSlideIndex,
                    })}
                  >
                    <div
                      className={classNames(
                        "flex gap-3 px-4 py-4 items-center rounded-lg",
                        { "bg-gray-50": i === currentSlideIndex },
                      )}
                    >
                      <div
                        className={classNames("text-gray-500", {
                          "text-primary-500": i === currentSlideIndex,
                        })}
                      >
                        <Icon size="42" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h5
                          className={classNames(
                            "uppercase text-gray-500 font-bold",
                            { "text-primary-500": i === currentSlideIndex },
                          )}
                        >
                          {name}
                        </h5>
                        <p className="text-gray-500">
                          {truncateText(text, 80)}
                        </p>
                        <a href="#" className="text-gray-500">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
