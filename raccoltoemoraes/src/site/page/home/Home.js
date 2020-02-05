import React, { Component } from 'react';
import './Home.css';
import ImgHome from './../../img/imgBannerHome.jpg';
import ImgSectionHome from './../../img/imgHome.jpg';

export class Home extends Component{
    render(){
        return(
            <div>
                <div id="home">
                    <div className="nomeEmpresa">
                        <h1>RACCOLTO E MORAES </h1>
                    </div>
                    <img className="imgHome" src={ImgHome} alt="imagem de uma mãe e sua filha pequena." /> 
                   
                </div> 
                <section className="sectionHome" >
                    <div>
                        <h1>Salário Maternidade:</h1>
                        <p>O que é, <br/> como funciona <br/>  e quem tem direito?</p>   
                        <a href="https://api.whatsapp.com/send?l=pt&amp;phone=553193320702" target="_blank">
                            <button>SAIBA MAIS</button>
                        </a>                 
                    </div>
                    <img className="imgSectionHome" src={ImgSectionHome} alt="sombra de uma mãe e seu filho nos braços."/>                   
                </section>
            </div>
        )
    }
}