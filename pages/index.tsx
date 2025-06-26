// pages/index.tsx
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServicesSection from '../components/Servicesection';
import About from '../components/About';
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Chatbot from '../components/Chatbot';
export default function Home() {
  return (
    <Box sx={{ margin: 0 }}>
      <Header/>
      <Hero/>
      <Box id="about">
      <About/>
      </Box>
      <Box id="products">
      <ProductSection/>
      </Box>
      <Box id="services">
      <ServicesSection/>
      </Box>
      <Chatbot/>
      <Footer/>
      </Box>
  );
}

