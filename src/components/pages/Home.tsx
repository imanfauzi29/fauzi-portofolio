import ImageHome from "../../../public/image.png";

const Home = () => {
  return (
    <div id="home" className="h-screen relative flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 grid-flow-dense justify-center md:flex-row items-center px-4 md:px-16 h-fit">
        <div className="md:hidden">
          <img src={ImageHome} alt="image" />
        </div>
        <div>
          <div className="flex relative">
            <div className="absolute h-full w-2 bg-gray-500" />
            <div className="flex flex-col gap-4 pl-4">
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
            </div>
          </div>
          <div className="flex gap-4 mt-8 md:mt-16 ml-4">
            <button className="bg-primary-600 rounded-full px-6 py-2.5 text-white hover:bg-primary-700 transition-all">
              Download CV
            </button>
            <button className="text-gray-500 px-6 py-2.5 hover:text-gray-800">
              More about me
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={ImageHome} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
