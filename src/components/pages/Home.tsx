import { motion } from "framer-motion";
import ImageHome from "../../assets/image.png";
import { fade, fadeBottom, fadeLeft, yOffset, zoomIn } from "../../motion";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen relative flex justify-center items-center lg:max-w-7xl mx-auto snap-start"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 grid-flow-dense justify-center md:flex-row items-center px-4 md:px-16 h-fit">
        <div className="md:hidden">
          <img src={ImageHome} alt="image" />
        </div>
        <div>
          <div className="flex relative">
            <motion.div
              variants={fade}
              initial="initial"
              whileInView={"animate"}
              className="absolute h-full w-2 bg-gray-500"
            />
            <motion.div
              variants={fadeLeft}
              initial="initial"
              whileInView="animate"
              className="flex flex-col gap-4 pl-4"
            >
              <div className="whitespace-nowrap text-5xl md:text-7xl font-rowdies font-bold">
                <span className="text-gray-600">
                  <span className="text-primary-700">Iman</span> Fauzi
                </span>
              </div>
              <div className="whitespace-nowrap font-bold">
                <span className="uppercase tracking-[.3rem] md:tracking-[.7rem] text-gray-500">
                  frontend developer
                </span>
              </div>
              <div className="font-normal">
                <span className="text-gray-500">
                  Selamat datang di website portofolio saya dimana saya akan
                  selalu upload hasil dari project saya disini.
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex gap-4 mt-8 md:mt-16 ml-4">
            <motion.button
              initial="initial"
              whileInView="animate"
              variants={fade}
              className="bg-primary-600 rounded-full px-6 py-2.5 text-white hover:bg-primary-700 transition-all"
            >
              Download CV
            </motion.button>
            <motion.a
              href="#about"
              variants={zoomIn}
              initial="initial"
              whileInView={"animate"}
              className="text-gray-500 px-6 py-2.5 hover:text-gray-800"
            >
              More about me
            </motion.a>
          </div>
        </div>
        <motion.div
          initial="initial"
          whileInView={"animate"}
          variants={fadeBottom}
        >
          <img src={ImageHome} alt="image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
