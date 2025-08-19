import { useRef } from "react"
import BtnWhats from "../components/btnWhats"
import Feira from "../components/Feira"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Produtos from "../components/Produtos"
import Sobre from "../components/Sobre"



function App() {
  const heroRef = useRef(null);
 const sobreRef = useRef(null);
 const produtosRef = useRef(null);
 const feiraRef = useRef(null);
 const contatoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
   
    <>

      <Header refs={{sobreRef,feiraRef,produtosRef,contatoRef,heroRef}} scrollToSection={scrollToSection}/>
      <BtnWhats />
      <Hero innerRef={heroRef} />
      <Sobre innerRef={sobreRef}/>
      <Produtos innerRef={produtosRef} />
      <Feira  innerRef={feiraRef}/>
      <Footer innerRef={contatoRef} />

    </>
  )
}

export default App
