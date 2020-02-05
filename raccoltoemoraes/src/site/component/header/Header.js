import React, { Component } from 'react';
import Logo from './../../img/logoHeader.jpeg';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component{
    
    resetarCheckMenu() {
        var elemento = window.document.getElementById("btMenu");
        elemento.checked=false
    }
    
    render(){
        
        return(
        <div>
            <input type="checkbox" id="btMenu"></input>
            <nav className="header">
                
                <label htmlFor="btMenu" className="btMenu">
                    <div></div>
                    <div></div>
                    <div></div>
                </label>
                
                <div className="logo">
                    <img src={Logo} alt="imagem de icon"/>
                </div>
                
                <ul>
                    <li>
                       <a href="#home" onClick={this.resetarCheckMenu}>HOME</a> 
                    </li>
                    <li>
                    <a href="#quemSomos" onClick={this.resetarCheckMenu}>QUEM SOMOS</a>
                    </li>
                    <li>
                        <a href="#servico" onClick={this.resetarCheckMenu}>SERVIÇOS</a>
                    </li>
                    <li>
                        <a href="#contato" onClick={this.resetarCheckMenu}>CONTATOS</a>
                        </li>
                </ul>

                <span className="spanLogin">
                    <Link to="/login">LOGIN</Link>
                </span>
            </nav>
        </div>)
    }
}