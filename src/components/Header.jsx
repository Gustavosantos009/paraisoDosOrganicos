
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/globais.css'
export default function Header({ scrollToSection, refs}) {

    return(
        <>
            <header className=" header px-8 bg-[var(--bege)] fixed left-0 right-0 top-0 z-40 w-full h-24 flex justify-between items-center">
                <img onClick={() => scrollToSection(refs.heroRef)} className='w-35 cursor-pointer mx-auto md:mx-0' src={logo} alt="logo paraiso dos organicos" />
                <nav>
                    <ul className='hidden md:flex font-bold gap-8 capitalize'>
                        <li onClick={() => scrollToSection(refs.heroRef)} >inicio</li>
                        <li onClick={() => scrollToSection(refs.sobreRef)} >sobre</li>
                        <li onClick={() => scrollToSection(refs.produtosRef)} >produtos</li>
                        <li onClick={() => scrollToSection(refs.feiraRef)} >feira</li>
                        <li  onClick={() => scrollToSection(refs.contatoRef)}>contato</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}