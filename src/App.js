import React, { Component } from "react";
// import styled from 'styled-components'

// const myBotton = styled.button
// `
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `


//Importando Assets
import myBackground from "./Assets/the witcher hell.png"
import myLogo from "./Assets/witcher simbol.png"
import myWitcher from "./Assets/the witcher kavil2.png"
import myShowName from "./Assets/the witcher.jpeg.png"


export default class App extends Component{

  render(){
    return(
      <div>
        <header>
          <div>
            <figure>
              <img src={myLogo} alt="Logo da série 'The Witcher' feito da ponta de um tridente vermelho formando um 'W'" />
            </figure>
            <h2>Projeto Vermelho</h2>
          </div>
          <nav>
            <ul>
              <li>Universo</li>
              <li>Atores</li>
              <li>Temporadas</li>
              <li>Comunidades</li>
            </ul>
          </nav>
        </header>
        <main>
          <figure>
            <img src={myWitcher} alt="Personagem 'The Witcher' em armadura completa com duas espadas nas costas e o que parece ser um machado em uma de suas mãos. O bruxo tem olhos verde-amarelados e uma grande cicatriz que vai do lado esquerdo da testa, passa pelo olho esquerdo, e para no meio do rosto do lado esquerdo."/>
            <img src={myShowName} alt="Nome da série 'The Witcher', mais o subtítulo 'Wild Hunt' acompanhada do logo 'W'."/>
          </figure>
          <myBotton>Assista Agora</myBotton>
        </main>
        <footer>
          <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://cutt.ly/gjP0Ba6
          </p>
        </footer>
      </div>
    )
  }
}