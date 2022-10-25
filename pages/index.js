import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Timeline/>
      <Footer />
    </div>
  );
}
