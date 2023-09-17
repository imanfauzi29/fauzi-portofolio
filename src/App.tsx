import { About, Blog, Contact, Home, Portofolio } from "./components/pages";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="lg:max-w-7xl mx-auto">
        <Home />
        <About />
        <Portofolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
