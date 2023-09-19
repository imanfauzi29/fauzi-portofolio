import { useEffect } from "react";
import { About, Contact, Home, Portofolio } from "./components/pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log(event);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="w-full h-screen snap-y snap-mandatory overflow-y-scroll">
        <Home />
        <About />
        <Portofolio />
        {/* <Blog /> */}
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
