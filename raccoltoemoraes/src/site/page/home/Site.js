import React, { Component } from 'react';
import { Header } from '../../component/header/Header.js';
import ImgHome from './../../img/imgHome.jpg';
import ImgSectionHome from './../../img/baby-2025691_1280_Easy-Resize.jpg';
import ImagSectionQuemSomos from './../../img/imgSectionQuemSomos.jpg';
import { Footer } from '../../component/footer/Footer.js';
import './Site.css';

export class Site extends Component{
    render(){
        return(
        <div className="home">
            <Header/>
            <div>
                <img className="imgHome" src={ImgHome} alt="imagem de uma mãe e sua filha pequena." />
            </div>
            
            <section className="sectionHome">
                <div>
                    <h1>Salário Maternidade:</h1>
                    <p>O que é, <br/> como funciona <br/>  e quem tem direito?</p>
                    <button>Saiba mais</button>
                </div>
                <img className="imgSectionHome" src={ImgSectionHome} alt="sombra de uma mãe e seu filho nos braços." />
            </section>

            <section className="sectionQuemSomos">
                <div className="titleQuemSomos">
                    <div className="textQuemSomos">
                        <h1>
                            Quem Somos
                        </h1>
                    </div>
                    <img className="imgQuemSomos" src={ImagSectionQuemSomos} alt="imagem de um bebê em preto e branco"/>
                </div>
                <div className="composicaoQuemSomos">
                    <div>
                        <h1>HISTÓRIA</h1>
                        <p>Fundada em 2013, estamos a mais de 6 anos atuando a favor das mamães
                            que buscam oque é seu de direito. Nesses anos de caminhada nos desenvolvemos
                            e nos especializamos em salário maternidade. 
                        </p>
                    </div>
                        <h1>DIFERENCIAIS</h1>
                        <p>Hoje atuamos em todo o território do Brasil, ajudando até aquelas mamães
                            que estão em lugares afastado de grandes centros.
                        </p>
                    <div>

                    </div>
                    <div>

                    </div>

                </div>
 
            </section>
            <Footer/>
        </div>)
    }
}