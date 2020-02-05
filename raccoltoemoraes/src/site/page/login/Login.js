import React, { Component } from 'react';
import IconeLogin from './../../icon/iconeLogin.svg';
import LogoHeader from './../../img/logoHeader.jpeg';
import IconFace from './../../icon/face.svg';
import IconInsta from './../../icon/insta.svg';
import IconWhats from './../../icon/whats.svg';
import { Link } from 'react-router-dom';
import './Login.css';

export class Login extends Component{
    mostrar = "Mostrar Senha?";
    mostrarSenha(){
        var inputPassword = window.document.getElementById("inputPassword");
        var checkPassword = window.document.getElementById("passwordShow");
        
        
        if(checkPassword.checked){
            window.document.getElementById("mostrarPassword").innerHTML = "Ocultar Senha?";
            inputPassword.type = 'text'
        }else{
            window.document.getElementById("mostrarPassword").innerHTML = "Mostrar Senha?";
            inputPassword.type = 'password'
        }
        
    }

    

    render(){
        
        return(
        <div className="login">
            <div className="headerLogin"> 
                <img src={LogoHeader} alt="Imagem da logo da empresa"/>
                
                <div className="redesSociaisLogin">
                    <div>
                        <a href="https://www.facebook.com/assesoriarmraccoltoemoraes/" target="_blank">
                            <img  src={IconFace} alt="iconFace"/></a>
                        </div>
                        <div>
                        <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5531992027747" target="_blank">
                            <img  src={IconWhats} alt="iconWhats"/></a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com/raccoltoemoraes?r=nametag" target="_blank">
                            <img  src={IconInsta} alt="iconInsta "/></a>
                    </div>
                    
                </div>
                <Link to="/" className="buttonHeaderVolta">VOLTAR</Link>
            </div>
            <div className="nomeEmpresaLogin">
                    <h1>RACCOLTO E MORAES </h1>
                </div>
            <div className="formLogin">
                <form>
                    <img src={IconeLogin} alt="Imagem de login"/>
                    <label>Olá tudo bem?</label>
                    <input type="text" placeholder="Your Name" autoComplete="disable"/>
                    <input type="password" placeholder="Password" autoComplete="disable" id="inputPassword"/>
                    <label htmlFor="passwordShow" onClick={this.mostrarSenha} id="mostrarPassword">{this.mostrar}</label>
                    <input className="checkPassword" type="checkBox" id="passwordShow"></input>
                    <button>
                        ENTRAR
                    </button>
                    <Link to="/" className="buttonVoltar">
                        VOLTAR
                    </Link>
                </form>
            </div>
        </div>
        )
    }
}