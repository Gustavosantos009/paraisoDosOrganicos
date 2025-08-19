import imgCenoura from'../assets/cenoura.png'
import imgAlface from'../assets/alface.png'
import imgProdutor from'../assets/produtor.png'
import { forwardRef } from 'react'

export default function Sobre({ innerRef }) {

    return (
        <>
            <section ref={innerRef} id='sobre' className="sobre  flex flex-col lg:flex-row h-auto justify-around items-center mt-10 ">
                <div className=" mb-6 sobre-text flex flex-col items-center h-full w-full lg:w-1/2 gap-5 text-[var(--verde_musgo)] ">
                    <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-center ">
                        paraíso dos orgânicos
                    </h1>
                    <p className="text-base  text-center font-bold mt-4 ">
                        O Paraíso dos Orgânicos nasceu da paixão pela terra e pelo cultivo natural. Somos uma família do campo, localizada na região de Sobradinho  (DF), que há mais de 10 anos cultiva alimentos orgânicos com amor, respeito à natureza e dedicação total à saúde dos nossos clientes.

                        Acreditamos que a verdadeira alimentação vem da terra, sem veneno, sem química e com muito cuidado. Nossos produtos são colhidos no dia da entrega, garantindo frescor, sabor e qualidade.

                        Nosso compromisso é simples: oferecer alimentos limpos, nutritivos e acessíveis para todas as famílias.
                    </p>

                </div>
                <div className="image-sobre flex flex-row   lg:flex-col gap-6 h-full  justify-center ">

                    <img src={imgCenoura} alt="Plantio de Cenoura" />
                    <img className=' mt-40 lg:ml-48 lg:mt-0' src={imgProdutor} alt="Plantação Organica" />
                    <img src={imgAlface} alt="Plantio de Alface" />
                </div>
            </section>
        </>
    )
}