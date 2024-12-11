import logo from '../../../assets/logo.png'
import search from '../../../assets/search.png'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import DonateList from '../../Pages/DonateList/DonateList'
import DonateForm from '../../Pages/DonateForm/DonateForm'
import S from "./header.module.scss"

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/donate-list">Livros Doados</Link></li>
                    <li><Link to="/donate-form">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder='O que você procura?' />
                <img src={search} alt="Ícone de lupa" />
            </div>
        </header>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/donate-form' element={<DonateForm/>}/>
            <Route path='/donate-list' element={<DonateList/>}/>
        </Routes>
        </BrowserRouter>
    )
}