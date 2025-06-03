import CustomerTestimonials from "../components/CustomerTestimonials/CustomerTestimonials";
import Dashboard from "../components/Dashboard/Dashboard";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HostingPlans from "../components/HostingPlans/HostingPlans";
import HostingPlatform from "../components/HostingPlatform/HostingPlatform";
import HostingPromo from "../components/HostingPromo/HostingPromo";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <HostingPromo />
      <HostingPlatform />
      <HostingPlans />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
}

export default Home;
