
import imgCenoura from'../assets/cenoura.png'
import imgAlface from'../assets/alface.png'
import imgProdutor from'../assets/produtor.png'
import imgVegetais from '../assets/vegetais.jpg'
export default function Produtos({innerRef}) {
    return (
        <>
            <section ref={innerRef} id='produtos' className="produtos mt-20 ">
                <h1 className="text-4xl  text-[var(--verde_musgo)] font-bold text-center mb-10">Nossos Produtos</h1>

                <div className="fotos w-full grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2   lg:grid-cols-4  ">

                    <img src={imgAlface} alt="" />
                    <img src={imgVegetais} alt="" />
                    <img src={imgCenoura} alt="" />
                    <img src={imgAlface} alt="" />
                    <img src={imgProdutor} alt="" />
                    <img src={imgAlface} alt="" />
                    <img src={imgVegetais} alt="" />
                    <img src={imgAlface} alt="" />
                   
                </div>
            </section>
        </>
    )
}