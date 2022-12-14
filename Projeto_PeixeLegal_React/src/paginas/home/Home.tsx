import React from 'react';
import CarouselManipulateState from "../../components/estaticos/carousel/Carouselmani";
import Footer from '../../components/estaticos/footer/Footer';
import Navbar from '../../components/estaticos/navbar/Navbar';
import CarouselCard from '../../components/carouselcard/CarouselCard';
import { toast } from "react-toastify";
import "./Home.css"
import { Grid } from '@mui/material';
import TComponentes from '../../tabComponentes/TCompoentes';

function Home() {
    const aaaa = () => toast.success('Notícia deletada com sucesso');

    return (
        <main id='meiohome' >
            <Navbar />
            <CarouselManipulateState />
            {/* <button onClick={aaaa} /> */}
            <article id='homefoto' >
                <a href='/catalogo'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165584342978740/caranguejo.png" />
                    <h3>Caraguejos</h3>
                </a>
                <a href='/catalogo'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165596472905728/camarao.png" />
                    <h3>Camarões</h3>
                </a>
                <a href='/catalogo'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165611475935273/doce.png" />
                    <h3>Água doce</h3>
                </a>
                <a href='/catalogo'>
                    <img src="https://cdn.discordapp.com/attachments/1001812118422695987/1017165634200682568/salgado.png" />
                    <h3>Água salgada</h3>
                </a>
            </article>

            <Footer />

        </main>
    );
}

export default Home;