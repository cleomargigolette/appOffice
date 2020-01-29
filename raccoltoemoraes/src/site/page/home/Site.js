import React, { Component } from 'react';
import { Header } from '../../component/header/Header.js';
import ImgHome from './../../img/imgHome.jpg';
import ImgSectionHome from './../../img/baby-2025691_1280_Easy-Resize.jpg';
import ImagSectionQuemSomos from './../../img/imgSectionQuemSomos.jpg';
import IconMissao from './../../icon/missao4.svg';
import IconVisao from './../../icon/visao3.png';
import IconValores from './../../icon/valores3.svg';
import { Footer } from '../../component/footer/Footer.js';
import './Site.css';

export class Site extends Component{

    
    

    animacao = window.addEventListener('scroll', function(){
        
        const target = window.document.querySelectorAll('[data-anime]');
        
        const windowTop= window.pageYOffset + ((window.innerHeight * 3) /3.5);

        target.forEach(function(elemento){
            if((windowTop) > elemento.offsetTop){
                elemento.classList.add("animate")
            }else{
                elemento.classList.remove("animate")
            }
        })
        
    })

    render(){ 
        return(
        <div className="home">
            <Header/>
            <div id="home">
                <img className="imgHome" src={ImgHome} alt="imagem de uma mãe e sua filha pequena." />
            </div>
            
            <section className="sectionHome" >
                <div>
                    <h1>Salário Maternidade:</h1>
                    <p>O que é, <br/> como funciona <br/>  e quem tem direito?</p>
                    
                </div>
                <img className="imgSectionHome" src={ImgSectionHome} alt="sombra de uma mãe e seu filho nos braços."/>
            </section>
            
            <section className="sectionQuemSomos" id="quemSomos">
                <div className="divsaoSection"></div>
                <div className="titleQuemSomos">
                    <div className="textQuemSomos">
                        <h1>
                            Quem <br/>Somos
                        </h1>
                    </div>
                    <img className="imgQuemSomos" src={ImagSectionQuemSomos} alt="imagem de um bebê em preto e branco"/>
                </div>
                <div className="composicaoQuemSomos">
                    <div>
                        <h1>HISTÓRIA</h1>
                        <p>Fundada em 2013, há mais de 6 anos atuando a favor das mamães
                            que buscam oque é seu de direito. Nesses anos de caminhada nos desenvolvemos
                            e nos especializamos em salário maternidade. 
                        </p>
                    </div>
                        <h1>DIFERENCIAIS</h1>
                        <p>Hoje atuamos em todo o território do Brasil, ajudando até aquelas mamães
                            que estão em lugares afastado de grandes centros.
                        </p>
                    <div className="missaoVisaoValores">
                        <div >
                            <h1>MISSÃO</h1>
                            <img className="missao col-wide" src={IconMissao} alt="ícone missão." data-anime="left"/>
                            <p>Garantir que todas as mamães que
                                tenham direito ao salário maternidade,
                                possam recebê-lo
                                de forma fácil e rápido.
                            </p>
                        </div>
                        <div >
                            <h1>VISÃO</h1>
                            <img className="visao col-wide" src={IconVisao} alt="ícone visao." data-anime="top" />
                            <p>Ganhar destaque no Brasil,
                               por ser uma a empresa
                               especializada
                               em ajudar mamães com o salário maternidade.
                            </p>
                        </div>
                        <div >
                            <h1>VALORES</h1>
                            <img className="valores col-wide" src={IconValores} alt="ícone valores" data-anime="right"/>
                            <p>Ética<br></br>Transparência<br></br>Resultados<br></br>Humanização</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>)
    }
}