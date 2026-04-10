'use client'
import Navbar from '@/components/nav/Navbar'
import HeroSection from '@/components/hero/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import StatusChecker from '@/components/sections/StatusChecker'
import HowItWorks from '@/components/sections/HowItWorks'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BookingForm from '@/components/sections/BookingForm'
import MapSection from '@/components/sections/MapSection'
import Footer from '@/components/footer/Footer'
import VapiWidget from '@/components/ui/VapiWidget'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>
        <ServicesSection />
        <StatsSection />
        <StatusChecker />
        <HowItWorks />
        <GallerySection />
        <TestimonialsSection />
        <BookingForm />
        <MapSection />
      </main>
      <Footer />
      <VapiWidget />
    </>
  )
}
