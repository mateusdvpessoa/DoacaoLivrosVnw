import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home.jsx"
import DonateForm from "../DonateForm/DonateForm.jsx"
import DonateList from "../DonateList/DonateList.jsx"
import LogoLivro from "../../assets/logo-header.png"

function Header()
{
    return (
        <BrowserRouter>
            <div>
                <figure>
                    <img src={LogoLivro} alt="Imagem de ilustração de um livro aberto" />
                </figure>
            </div>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link to="/livros-doados">
                        <li>Livros Doados</li>
                    </Link>
                    <Link to="/quero-doar">
                        <li>Quero Doar</li>
                    </Link>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/livros-doados" element={<DonateList/>} />
                <Route path="/quero-doar" element={<DonateForm/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Header