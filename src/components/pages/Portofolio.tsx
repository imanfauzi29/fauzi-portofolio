import { motion } from "framer-motion";
import classNames from "classnames";
import { MdWeb } from "react-icons/md";

import { useState } from "react";
import { fadeRight, zoomIn } from "../../motion";
import SwiperList from "../SwiperList";
import ProgressiveImage from "../ProgressiveImage";

const Portofolio = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const lists = [
    {
      name: "Invie.id",
      type: "website",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image: "https://i.ibb.co/sqLS2BW/image.png",
      lowImage: "",
    },
    {
      name: "Invie.id",
      type: "website",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image: "https://i.ibb.co/sqLS2BW/image.png",
      lowImage: "https://i.ibb.co/XDYfhWy/image-1.png",
    },
    {
      name: "Invie.id",
      type: "website",
      icon: MdWeb,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias quo repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quo repellat",
      link: "#",
      image: "https://i.ibb.co/sqLS2BW/image.png",
      lowImage: "https://i.ibb.co/XDYfhWy/image-1.png",
    },
  ];

  return (
    <div
      id="portofolio"
      className="h-screen lg:max-w-7xl mx-auto snap-start flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 mx-auto md:grid-cols-2 justify-center gap-16 h-fit "
      >
        <motion.div
          variants={zoomIn}
          initial="initial"
          whileInView={"animate"}
          className="w-full max-w-md max-h-[600px] h-full shadow-lg rounded-xl overflow-hidden self-center justify-self-center"
        >
          <motion.div
            key={lists[currentSlideIndex].image}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full"
          >
            <ProgressiveImage
              placeholderSrc={lists[currentSlideIndex].lowImage}
              src={lists[currentSlideIndex].image}
              className={classNames("object-cover h-full w-full")}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView={"animate"}
          className="flex flex-col gap-6"
        >
          <div className="font-bold">
            <div className="text-primary-700 uppercase tracking-[.4rem] mb-4">
              {lists[currentSlideIndex].type}
            </div>
            <div className="text-5xl">
              <motion.span
                key={lists[currentSlideIndex].name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                {lists[currentSlideIndex].name}
              </motion.span>
            </div>
          </div>
          <div className="max-h-[500px] box-border">
            <SwiperList
              lists={lists}
              sliderIndex={currentSlideIndex}
              sliderCallback={setCurrentSlideIndex}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portofolio;
