import ImageAbout from "../../assets/man-pooling.png";
import nodejs from "../../assets/nodejs.svg";

const About = () => {
  return (
    <div id="about" className="h-screen">
      <div className="flex flex-col w-full items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-600">
          About <span className="text-primary-700">Me</span>
        </h2>
        <div>Ngoding 🧑🏼‍💻 | I Love What I Do 💖 | Listening Music 🎧 </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 grid-flow-dense justify-center md:flex-row items-center px-4 md:px-16 h-fit">
          <div className="hidden md:block">
            <img src={ImageAbout} alt="image" />
          </div>
          <div>
            <div className="flex flex-col gap-7">
              <h4 className="uppercase font-bold tracking-widest text-2xl text-gray-600">
                profile
              </h4>
              <p>
                Halo 👋🏼, nama saya Iman Fauzi seorang web developer dengan
                pengalaman kerja 2 tahun di bidang programmer. Kebanyakan bahasa
                pemrogramman yang saya kuasai di bidang javascript. Kenapa
                javascript ? Karena javascript merupakan salah satu bahasa
                pemrogramman populer saat ini dan juga bisa digunakan di
                beberapa platform.
              </p>{" "}
              <p>
                Saya suka bekerja sebagai Frontend Developer karena bisa
                menuangkan imajinasi saya kedalam bentuk user interface.
              </p>
              <p>
                {" "}
                Fokus saya saat ini sedang memperdalam ilmu di backend developer
                dan juga sedang belajar figma untuk design sebuah aplikasi.
              </p>
              <div className="flex gap-4">
                <div className="rounded-full border border-gray-200 px-4 py-2">
                  <img src={nodejs} className="w-full" />
                </div>
                <div className="rounded-full border border-gray-200 px-4 py-2 text-gray-500">
                  <span>+5 more</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-primary-600 rounded-full px-6 py-2.5 text-white hover:bg-primary-700 transition-all">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
