import React, { Component } from 'react';
import { Header } from '../../component/header/Header.js';
import ImgHome from './../../img/imgBannerHome.jpg';
import ImgSectionHome from './../../img/imgHome.jpg';
import ImagSectionQuemSomos from './../../img/imgSectionQuemSomos.jpg';
import IconMissao from './../../icon/missao4.svg';
import IconVisao from './../../icon/visao3.png';
import IconValores from './../../icon/valores3.svg';
import IconFace from './../../icon/face.svg';
import IconInsta from './../../icon/insta.svg';
import IconWhats from './../../icon/whats.svg';
import IconQuemSomos from './../../icon/quemSomos.svg';
import IconEmail from './../../icon/email.svg';
import IconTelefone from './../../icon/telefone.svg';
import IconCelular from './../../icon/whatsFooter.svg';
import LogoFooter from './../../img/logoFooter.jpeg';
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
            <a href="https://api.whatsapp.com/send?l=pt&amp;phone=553193320702" target="_blank">
                <img className="bntWhatsFixo" src={IconWhats} alt="icone whats"/>
            </a>
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
                <div className="divisaoSection"></div>
                <div className="titleQuemSomos">
                    <div className="textQuemSomos">
                        <h1>
                            Quem Somos
                        </h1>
                        <img src={IconQuemSomos} alt="icone quem somos"/>
                    </div>
                    <img className="imgQuemSomos" src={ImagSectionQuemSomos} alt="imagem de um bebê em preto e branco"/>
                </div>
                <div className="composicaoQuemSomos">
                    <div>
                        <h1>HISTÓRIA</h1>
                        <p>Fundada em 2013, há mais de 6 anos atuando a favor das mamães
                            que buscam o que é seu de direito. Nesses anos de caminhada nos desenvolvemos
                            e nos especializamos em salário maternidade. 
                        </p>
                    </div>
                        <h1>DIFERENCIAIS</h1>
                        <p>Hoje atuamos em todo o território nacional, ajudando até aquelas mamães
                            que estão em lugares mais afastado de grandes centros.
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
                            <p>Ética<br></br>Transparência<br></br>Humanização</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionContato" id="contato">
                <div className="divisaoSection"></div>
                <div className="divisaoSection"></div>
                <div>
                    <h1>CONHEÇA NOSSAS REDES SOCIAS OU TIRE SUAS DÚVIDAS PELO WHATS</h1>
                    <p>Click nos ícones abaixo para acessar</p>
                </div>
                <hr></hr>
                <div className="redesSociais">
                    <div className="face" >
                    <a href="https://www.facebook.com/assesoriarmraccoltoemoraes/" target="_blank">
                        <img  src={IconFace} alt="iconFace"/></a>
                    </div>
                    <div className="whats">
                    <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5531992027747" target="_blank">
                        <img  src={IconWhats} alt="iconWhats"/></a>
                    </div>
                    <div className="insta">
                    <a href="https://www.instagram.com/raccoltoemoraes?r=nametag" target="_blank">
                        <img  src={IconInsta} alt="iconInsta "/></a>
                    </div>
                </div>
                <div className="contatoFooter">
                    <div className="contato">
                        <div>
                            <img src={IconTelefone} alt="icone telefoen"/>
                            <p>(31)32014476</p> 
                        </div>
                        <div>
                            <img src={IconCelular} alt="icone celular"/>
                            <p>(31)992027747 (31)993320702</p>
                            
                        </div>
                        <div>
                            <img src={IconEmail} alt="icone email"/> 
                            <p>raccoltoemoraes@hotmail.com</p>
                        </div> 
                        
                    </div>
                        
                    <div className="logoContato">
                        <img src={LogoFooter} alt="logo da empresa"/> 
                    </div>

                </div>
            </section>
            <Footer/>
        </div>)
    }
}