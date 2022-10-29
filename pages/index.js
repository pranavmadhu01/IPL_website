import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Refereneces from "../components/Refereneces";
import Stats from "../components/Stats";
import Timeline from "../components/TimeLine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IPL 2.0</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Programs />
      <Timeline />
      <Refereneces />
      <Footer />
    </div>
  );
}
