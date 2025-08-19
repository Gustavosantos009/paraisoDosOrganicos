
import imgFeira from '../assets/image.png'
export default function Feira({innerRef}) {
    return (

        <>
            <section ref={innerRef} className="feira mt-20 flex flex-col ">
                <div className=" feira_text text-center items-center flex flex-col text-[var(--verde_musgo)] font-bold gap-7 ">
                    <h1 className="text-4xl">Aonde encontrar nossos produtos</h1>

                    <p className="md:text-lg text-base  text-center py-7  ">
                        Você também pode encontrar o Paraíso dos Orgânicos presencialmente, direto na feira! <br />
                        📍 empório colorado <br />
                        📅 Todos os sábados e domingos  de 7:30 à 13:30 <br />
                        Venha conhecer nossos produtos de perto, conversar com o produtor e garantir alimentos fresquinhos direto da horta. <br />
                        🥬 Produtos frescos <br />
                        👥 Atendimento direto com a gente <br />
                        📦 Aceitamos encomendas antecipadas via WhatsApp
                    </p>

                    <button className="bg-[var(--laranja)] w-32 h-11 text-white font-semibold rounded-lg mt-7 cursor-pointer hover:bg-[var(--laranja_escuro)] ">ir agora</button>

                </div>

                <div className="feira_image relative mt-20 flex items-center justify-center h-96">
                    <div className="h-96 w-44 bg-[var(--verde_musgo)]  absolute md:left-1/4 mb-"></div>
                    <img className='w-full md:w-2/3  h-72 z-30 ' src={imgFeira} alt="" />
                </div>

            </section >
        </>

    )
}