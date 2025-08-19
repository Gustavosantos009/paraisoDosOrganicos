import { Link } from 'react-router-dom'
import imgVegetais from '../assets/vegetais.jpg'
export default function Hero({innerRef}) {
    return (

        <>
            <section  ref={innerRef} className="hero bg-[var(--bege)] h-screen gap-10 flex felex-row pt-30   justify-between">
                <div className="hero-text  text-[var(--verde_musgo)] flex flex-col h-full items-center gap-4 justify-center w-full">
                    <h1 className=" text-5xl md:-text-6xl  text-center font-bold capitalize ">Produtos orgânicos  frescos </h1>
                    <p className='text-center font-semibold text-xl mt-4'>Frutas e vegetais cultivados em nossa chácara direto para sua mesa</p>
                    <Link to={`https://wa.me/5561999924626?text=${encodeURIComponent('Olá! Quero mais info sobre o produto')}`} className="bg-[var(--laranja)] w-32 h-11 text-white font-semibold rounded-lg mt-7 cursor-pointer hover:bg-[var(--laranja_escuro)] ">comprar agora</Link>
                </div>
                <div className="hero-image hidden w-1/2 h-full md:flex items-center justify-center">

                    <div className='min-w-80 h-80 relative bg-[var(--verde_musgo)]'>
                        <img className='w-80 h-80 absolute transform -top-6 -right-6' src={imgVegetais} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}