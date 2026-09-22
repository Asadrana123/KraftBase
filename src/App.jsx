import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import DataInsights from './components/DataInsights/DataInsights';
import Agencies from './components/Agencies/Agencies';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DataInsights />
        <Agencies />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
