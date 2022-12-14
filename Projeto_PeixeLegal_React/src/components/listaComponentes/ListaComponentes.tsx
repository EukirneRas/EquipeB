import React, { useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import Estoque from '../../models/Estoque';
import { busca } from '../../services/Services';
import { toast } from "react-toastify";
import './ListaComponentes.css'

function ListaProdutos(props: any) {
    const [produtos, setProdutos] = useState<Estoque[]>([]);
    const [token, setToken] = useLocalStorage('token');
    const Addcarrinho = () => toast.success('Produto adicionado ao carrinho');

    async function getProdutos() {
        await busca('/api/Produtos', setProdutos, {
            Headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    if (props.categoria == 'TODOS') {
        return (
            <>
                {produtos.map(produto => (

                    <article className='card'>
                        <img src={produto.url_Imagem} alt={produto.produto} id='img-card' />
                        <h2>{produto.produto}</h2>
                        <h5 className='mg-top'>{produto.categoria}</h5>
                        <h4 className='mg-top'>Quantidade: {produto.quantidade} </h4>
                        <h2 className='mg-toph2'>R$: {produto.valor}</h2>
                        <button onClick={Addcarrinho} id='btn-comprar'>Comprar</button>
                    </article>

                ))}
            </>
        );
    } else {
        return (
            <>
                {produtos.map(produto => (

                    produto.categoria == props.categoria
                        ?
                        <article className='card'>
                            <img src={produto.url_Imagem} alt={produto.produto} id='img-card' />
                            <h2>{produto.produto}</h2>
                            <h5 className='mg-top'>{produto.categoria}</h5>
                            <h4 className='mg-top'>Quantidade: {produto.quantidade} </h4>
                            <h2 className='mg-toph2'>R$: {produto.valor}</h2>
                            <button onClick={Addcarrinho} id='btn-comprar'>Comprar</button>
                        </article>
                        :
                        ''
                ))}
            </>
        );
    }
}

export default ListaProdutos;