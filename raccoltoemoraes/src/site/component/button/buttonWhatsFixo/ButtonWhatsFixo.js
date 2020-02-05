import React, { Component } from 'react';
import './ButtonWhatsFixo.css';
import IconWhats from './../../../icon/whats.svg';

export class ButtonWhatsFixo extends Component{
    render(){
        return(
            <div>
                <a href="https://api.whatsapp.com/send?l=pt&amp;phone=553193320702" target="_blank">
                    <img className="bntWhatsFixo" src={IconWhats} alt="icone whats"/>
                </a>
            </div>
        )
    }
}