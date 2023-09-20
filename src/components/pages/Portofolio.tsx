import { motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";
import { fadeRight, zoomIn } from "../../motion";
import SwiperList from "../SwiperList";
import ProgressiveImage from "../ProgressiveImage";
import { TSwiperList } from "../../types/swiper";

const Portofolio = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const lists: TSwiperList[] = [
    {
      name: "Invie.id",
      type: "website",
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>',
      text: "<p>Invie.id merupakan website untuk membuat undangan digital yang dapat dibuat dan dipesan melalui handphone.Terdapat beberapa pilihan template dan design sesuai dengan konsep pernikahan serta bisa dibuat custom sendiri.<br>Disini saya berpartisipasi sebaga frontend web dengan menggunakan NextJS sebagai bahasa pemrogramman dan juga NextAuth sebagai authentikasi dan session login.<br>Jobdesk saya disini antara lain:<br>- Slicing UI dari figma kedalam bentuk file tsx<br>- Membuat dan mengintegrasikan service dengan backend<br>- Membuat fungsi untuk kompres image ketika ukurannya diatas 2MB<br>- Consume data dari API dengan menggunakan axios dan juga react-query</p>",
      images: [
        "https://i.ibb.co/sqLS2BW/image.png",
        "https://i.ibb.co/BG146pw/image.png",
        "https://i.ibb.co/YRTXnFk/image.png",
        "https://i.ibb.co/nrWsRnz/image.png",
        "https://i.ibb.co/MG4TqGM/image.png",
      ],
      link: "https://www.invie.id",
    },
    {
      name: "Portofolio",
      type: "website",
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>',
      text: "<p>Portofolio website saya dibuat dengan menggunakan ReactJS typescript.<br>Beberapa tambahan library seperti framer-motion untuk animasi, tailwind sebaga CSS, react-icons, swiperJS, dll.<br></p>",
      images: [
        "https://i.postimg.cc/D0tQz2KV/image.png",
        "https://i.postimg.cc/90TbZ4bX/image.png",
        "https://i.postimg.cc/Cx68MhCc/image.png",
      ],
      link: "https://www.figma.com/file/GWZl2HW61wUctrCw5sGoIL/My-Portfolio?type=design&node-id=0%3A1&mode=design&t=PDR2NPggkNYOvu0Q-1",
    },
    {
      name: "OjekBro",
      type: "website",
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>',
      text: "<p>OjekBro adalah solusi baru untuk transportasi dengan multipoint, yang bisa diandalkan untuk mengantarkan ke berbagai tujuan. Dan yang lebih menarik lagi, Bisa dapat keuntungan dengan bergabung menjadi mitra pengemudi, ataupun pengguna biasa.<br>Fokus saya sebagai web developer, slicing dari UI kedalam bentuk ReactJS Javascript serta didukung dengan berbagai library seperti leaflet sebagai map, react-query, react-hook-form, dll.<br>Jobdesk:<br>- Refactor & slicing web admin dari desain Figma kedalam bentuk kodingan dengan menggunakan ReactJS dan juga ChakraUI.<br>- Membuat fitur untuk menampilkan transaksi harian, mingguan, bulanan, tahunan dan juga membuat fitur buat voucher untuk berbagai jenis pengguna.<br>- Slicing & integrate web reset password/PIN secara web.</p>",
      images: [
        "https://i.postimg.cc/HszPThS6/image.png",
        "https://i.postimg.cc/WzQCgFkX/Screenshot-2023-04-03-at-09-22-51.png",
        "https://i.postimg.cc/y8ht3NYy/Screenshot-2023-04-03-at-09-24-03.png",
        "https://i.postimg.cc/nhfNLmZL/Screenshot-2023-04-03-at-09-24-20.png",
        "https://i.postimg.cc/tTcMGZ2p/Screenshot-2023-04-03-at-09-24-43.png",
        "https://i.postimg.cc/tgXf3HsQ/Screenshot-2023-04-03-at-09-24-55.png",
        "https://i.postimg.cc/8crnpp0W/Screenshot-2023-04-03-at-09-30-34.png",
      ],
      link: "https://ojekbro.co.id/",
    },
    {
      name: "Landing Page Builder",
      type: "website",
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>',
      text: "<p>OrderFaz adalah platform dengan banyak fasilitas untuk Jualan Online yang memberikan solusi terbaik dalam pembuatan website toko online GRATIS berbasis web.<br>Fokus saya di bagian Frontend Web Developer dengan membuat satu fitur yaitu Landing Page Builder. Stack yang digunakan yaitu NuxtJS typescript sebagai repository utama dan juga menggunakan NextJS javascript sebagai management landing page.<br>Jobdesk:<br>- Membuat 16 block code utama dengan dan menyusun json sebagai template.<br>- Terhubung dengan akun utama untuk mendapatkan product list.<br>- Slicing component dari figma ke NuxtJS.</p>",
      images: [
        "https://i.postimg.cc/SxNjJFRP/image.png",
        "https://i.postimg.cc/B6xfpCJR/image.png",
        "https://i.postimg.cc/cLHZWYc8/image-2.png",
        "https://i.postimg.cc/bJXj15fQ/image-3.png",
      ],
      link: "https://orderfaz.com/",
    },
  ];

  return (
    <div
      id="portofolio"
      className="h-screen lg:max-w-7xl px-4 mx-auto snap-start flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 mx-auto md:grid-cols-2 justify-center gap-16"
      >
        <motion.div
          variants={zoomIn}
          initial="initial"
          whileInView={"animate"}
          className="w-full max-w-md max-h-[600px] hidden md:block h-full shadow-lg rounded-xl overflow-hidden self-center justify-self-center"
        >
          <motion.div
            key={lists[currentSlideIndex].images[0]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full"
          >
            <ProgressiveImage
              src={lists[currentSlideIndex].images[0]}
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
          <motion.div className="max-h-[500px] box-border">
            <SwiperList
              lists={lists}
              sliderIndex={currentSlideIndex}
              sliderCallback={setCurrentSlideIndex}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portofolio;
