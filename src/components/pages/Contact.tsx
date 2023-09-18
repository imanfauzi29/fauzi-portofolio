import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import hljs from "highlight.js/lib/common";

const variants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

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
  const [myData, setMyData] = useState({
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

    console.log(js.value)

    setJson(js.value);
  }, []);

  return (
    <div ref={ref} id="contact" className="h-screen">
      <motion.div
        className="flex flex-col items-center w-full mb-12"
        animate={controls}
        initial="hidden"
        exit={"hidden"}
        variants={variants}
      >
        <h2 className="text-4xl font-bold text-gray-600">
          Contact <span className="text-primary-700">Me</span>
        </h2>
        <div>Let's keep in touch with me </div>
      </motion.div>
      <div className="grid justify-center grid-cols-1 gap-16 mx-auto md:grid-cols-2 h-fit md:h-full">
        <div
          className={`relative max-w-md w-full max-h-[600px] h-full shadow-lg rounded-xl overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('/src/assets/card.svg')]`}
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
            www.ifa.com
          </span>
        </div>
        <div>
          <pre className="rounded-md p-6 bg-[#282C34]">
            <code className="json" dangerouslySetInnerHTML={{ __html: json }} />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Contact;
