import React, { Component } from 'react';
import './Header.css';

export class Header extends Component{
    render(){
        return(
        <div>
            <input type="checkbox" id="btMenu"></input>
            <nav className="header">
                
                <label for="btMenu" className="btMenu">&#9776;</label>
                
                <div className="logo">
                    <img src="https://img.icons8.com/wired/64/000000/adobe-muse.png" alt="imagem de icon"/>
                </div>
                
                <ul>
                    <li>
                       <a href="#">HOME</a> 
                    </li>
                    <li>
                    <a href="#">QUEM SOMOS</a>
                    </li>
                    <li>
                        <a href="#">SERVIÇOS</a>
                    </li>
                    <li>
                        <a href="#">CONTATOS</a>
                    </li>
                </ul>
                
                <span className="spanLogin">
                    <a href="#">LOGIN</a>
                </span>
            </nav>
        </div>)
    }
}