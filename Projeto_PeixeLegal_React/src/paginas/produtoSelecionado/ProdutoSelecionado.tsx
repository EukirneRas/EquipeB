import './ProdutoSelecionado.css';
import { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import card from '../../components/listaComponentes/ListaComponentes';
import { preProcessFile } from 'typescript';

function ProdutoSelecionado() {

    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    function subQuantity() {
        const newQuantity = quantity - 1;
        (newQuantity > 0) ? setQuantity(newQuantity) : alert("Quantidade não pode ser zero!");
    }
    function price(){}

    return (
        <>
            <Navbar/>
                <div id='container'>
                    <div id='Fotos do Peixe'>
                        <main className='corpo estilo'>
                    <div className="slides" >
                        <img className="slide" id="img" src="https://media.discordapp.net/attachments/1018929311392202752/1019394769274798160/unknown.png" />
                    </div>
            </main>
                    </div>
                        <article className='card'>
                        <div id='Dados-do-Peixe' className='detalhe'>
                            <h1 className="title">Peixe</h1>
                            <h2 className="preco"></h2>
                            <div className="quantidade">
                                <p className="label"></p>
                                <span className="selecionarQuantidade">
                                    <button onClick={subQuantity} className="minus">-</button>
                                    {quantity}
                                    <button onClick={addQuantity} className="plus">+</button>
                                </span>
                                <div className = 'preco'>
                                    {quantity}xpreco
                                    </div>
                                
                            </div>

                            <div className="actions">
                                <button className="buy">Comprar</button>
                                <button className="cart"><MdAddShoppingCart /></button>
                            </div>
                            <h3 className="Descrição-do-peixe">Descrição do peixe:</h3>
                            <h4>Design comum aos animais vertebrados, aquáticos, que possuem os membros transformados em nadadeiras sustentadas por raios ósseos, esqueleto ósseo ou cartilaginoso, coração dividido em duas cavidades e respiração branquial.</h4>
                        </div>
                        </article>
                </div>
            <Footer/>
        </>
    )
}

export default ProdutoSelecionado;