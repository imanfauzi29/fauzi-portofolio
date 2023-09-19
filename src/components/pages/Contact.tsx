import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import hljs from "highlight.js/lib/common";
import { fade, fadeLeft, fadeRight, fadeTop } from "../../motion";

const listContacts = [
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/imanfauzi29",
    icon: BiLogoLinkedinSquare,
  },
  {
    name: "Github",
    url: "https://github.com/imanfauzi29",
    icon: BiLogoGithub,
  },
];

const Contact = () => {
  const [json, setJson] = useState<string>("");
  const [myData] = useState({
    fullname: "Iman Fauzi M",
    address: "Ciamis, Jawa Barat",
    hobbies: ["Music", "Eat"],
    social_media: listContacts,
  });

  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const js = hljs.highlight(JSON.stringify(myData, null, 4), {
      language: "json",
    });

    setJson(js.value);
  }, []);

  const getDomain = () => {
    return window.location.hostname;
  };
  return (
    <div
      ref={ref}
      id="contact"
      className="h-screen lg:max-w-7xl mx-auto snap-start flex flex-col justify-center items-center"
    >
      <motion.div className="flex flex-col items-center w-full mb-12">
        <motion.div
          variants={fadeTop}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold text-gray-600"
        >
          Contact <span className="text-primary-700">Me</span>
        </motion.div>
        <motion.div variants={fade} initial="initial" whileInView="animate">
          Let's keep in touch with me{" "}
        </motion.div>
      </motion.div>
      <div className="grid justify-center grid-cols-1 gap-16 mx-auto md:grid-cols-2">
        <motion.div
          className={`relative max-w-md w-full h-[600px] shadow-lg rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('/src/assets/card.svg')]`}
          variants={fadeLeft}
          initial="initial"
          whileInView="animate"
        >
          <div className="block p-20 text-center">
            <span className="block mb-10 font-semibold text-white text-8xl whitespace-nowrap font-rowdies">
              IF
            </span>
            <div>
              <span className="block text-2xl font-bold leading-normal tracking-wider text-white">
                {myData.fullname}
              </span>
              <span className="block text-sm text-white">{myData.address}</span>
              <span className="block text-sm text-white">
                {myData.hobbies.join(" | ")}
              </span>
              <div className="w-full h-1 max-w-[120px] bg-white m-7 rounded-full block mx-auto" />
              <div className="flex justify-center gap-4 text-white">
                {listContacts.map(({ icon: Icon, name, url }, i) => (
                  <a href={url} title={name} key={i} className="group">
                    <div className="transition-all duration-1000 group-hover:-translate-y-1">
                      <Icon size={32} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <span className="absolute block w-full text-center text-white bottom-5">
            {getDomain()}
          </span>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="initial"
          whileInView="animate"
        >
          <pre className="rounded-md p-6 bg-[#282C34] h-full">
            <code className="json" dangerouslySetInnerHTML={{ __html: json }} />
          </pre>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
