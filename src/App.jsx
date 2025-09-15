import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Logo from "./components/Logo/Logo"
import Maps from "./components/Maps/Maps"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"
import ImageSlider from "./components/Slider/ImageSlider"
import Supplier from "./components/Supplier/Supplier"
function App() {


  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <ImageSlider />
      <Service />
      <About />
      <Logo />
      <Blog />
      <Maps />
      <Contact />
      <Footer />
    </>
  )
}
export default App
