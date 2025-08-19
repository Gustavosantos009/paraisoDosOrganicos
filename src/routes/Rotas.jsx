import { BrowserRouter,Route, Routes } from "react-router-dom";
import App from '../page/App'
export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
            </Routes>
        </BrowserRouter>
    )
}