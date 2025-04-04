import S from './donateform.module.scss'
import livro from '../../../assets/Vector.png'
import axios from 'axios' 
import {useState} from 'react'


export default function DonateForm(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async() => {

            const urlApi = "https://apidoacaolivrosvainaweb.onrender.com/doar" 
    
            const dadosEnviar = {
                titulo,
                categoria,
                autor,
                imagem_url
            }
    
            await axios.post(urlApi, dadosEnviar) 
    
            alert("Livro cadastrado com sucesso!")
    
            setTitulo("")
            setCategoria("")
            setAutor("")
            setImagem_url("")

            console.log("Livro Cadastrado com sucesso!")
        }
    
        const capturaTitulo = (e) =>{
            setTitulo(e.target.value)
        }
    
        const capturaCategoria = (e) =>{
            setCategoria(e.target.value)
        }
    
        const capturaAutor = (e) =>{
            setAutor(e.target.value)
        }
    
        const capturaImagem = (e) =>{
            setImagem_url(e.target.value)
        }
    

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={livro} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} />
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} />
                    <input type="text" placeholder='Autor' onChange={capturaAutor} />
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} />
                    <input className={S.doar} type="submit" value="Doar" onClick={enviarDados}/>
                </form>
            </section>
        </section>
    )
}