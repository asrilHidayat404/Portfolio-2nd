import '../App.css'
import About from '../components/homeComponents/About'
import Contact from '../components/homeComponents/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/homeComponents/Gallery'
import Header from '../components/Header'
import Hero from '../components/homeComponents/Hero'
import Skill from '../components/homeComponents/Skill'

const Home = () => {

  return (
      <div className='w-full'>
        <Header />
        <Hero />
        <Skill />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
  )
}

export default Home
