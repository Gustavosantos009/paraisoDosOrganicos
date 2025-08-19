import { Link } from "react-router-dom";
import icone from "../assets/iconeWhats.png"
export default function BtnWhats() {
    return(
        <>
        
           <a href={`https://wa.me/5561999924626?text=${encodeURIComponent('Olá! Quero mais info sobre o produto')}`} target="_blank" rel="noopener noreferrer"><img className="fixed bottom-10 right-4 z-50 w-13 cursor-pointer " src={icone} alt="" /></a> 
            
        </>
    )
}