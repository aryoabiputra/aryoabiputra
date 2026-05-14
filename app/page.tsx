import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import TechStack from "./_components/TechStack";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
