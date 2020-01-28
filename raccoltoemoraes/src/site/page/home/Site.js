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
                    <h1>Auxilio Maternidade:</h1>
                    <p>O que é, <br/> como funciona <br/>  e quem tem direito?</p>
                    <button>Saiba mais</button>
                </div>
                <img className="imgSectionHome" src={ImgSectionHome} alt="sombra de uma mãe e seu filho nos braços." />
            </section>

            <section className="sectionQuemSomos">
                <img className="imgQuemSomos" src={ImagSectionQuemSomos} alt="imagem de um bebê em preto e branco"/>
                <div className="textQuemSomos">
                    <h1>
                        Quem Somos
                    </h1>
                    <p>
                        Uma empresa especializada em ajudar mamães<br></br>
                        com o seu auxilio maternidade. 
                    </p>
                    <p>
                        Com mais de 10 anos atuando junto as mamães. 
                    </p>
                </div>
            </section>
            <Footer/>
        </div>)
    }
}