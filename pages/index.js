import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Timeline from "../components/TimeLine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Innovators' Premier League 2022</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Footer />
    </div>
  );
}
