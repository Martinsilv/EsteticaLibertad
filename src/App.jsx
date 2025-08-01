import Header from "./components/headers";
import Hero from "./components/hero";
import Services from "./components/services";
/* import Gallery from "./components/Gallery"; */
import Schedule from "./components/schedule";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      <main>
        <Hero />
        <Services />

        {/*  <Gallery /> */}
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
