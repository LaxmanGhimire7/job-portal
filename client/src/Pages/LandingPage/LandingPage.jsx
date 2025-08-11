import Features from './components/Features';
import Header from './components/Header'
import Hero from './components/Hero';

function LandingPage() {
  return (
    <div className='min-h-screen'>
     <Header />
     <Hero />
     <Features />
    </div>
  )
}

export default LandingPage;
