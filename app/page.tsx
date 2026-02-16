import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyCdpExists from "@/components/WhyCdpExists";
import PilotDetails from "@/components/PilotDetails";
import SignupForm from "@/components/SignupForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Benefits />
        <WhyCdpExists />
        <PilotDetails />
        <SignupForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
