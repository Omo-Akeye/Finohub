import { useState } from "react"
import Apply from "./components/Apply"
import Experience from "./components/Experience"
import Faqs from "./components/Faqs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Prepared from "./components/Prepared"
import WhyUs from "./components/WhyUs"
import Modal from "./components/Modal"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 return (
 <>
 <Hero isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
 {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
 <Experience/>
 <WhyUs/>
 <Apply/>
 <Faqs/>
 <Prepared/>
 <Footer/>
 </>
  )
}

export default App
