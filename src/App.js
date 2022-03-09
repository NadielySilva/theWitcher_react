import React, { Component } from "react";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

//Importando Assets
import myBackground from "./Assets/the witcher hell.png"
import myLogo from "./Assets/witcher simbol.png"
import myWitcher from "./Assets/the witcher kavil2.png"
import myShowName from "./Assets/the witcher.jpeg.png"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');  
*{
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  margin:0;
  padding:0;
  list-style-type: none;
  box-sizing:border-box;
}

header{
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

ul{
  width: 50vw;
  height: 10vh;
  display: flex;
  flexdirections: row;
  align-items: center;
  justify-content: space-around;
}
`
const Logo = styled.div`
width: 30vw;
height: 10vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const MyLogoImage = styled.img`
width: 3vw;
height: auto;
`

export default class App extends Component{

  render(){
    return(
      <div>
        <GlobalStyle/>
        <header>
          <Logo>
            <figure>
              <MyLogoImage src={myLogo} alt="Logo da série 'The Witcher' feito da ponta de um tridente vermelho formando um 'W'" />
            </figure>
            <h2>Projeto Vermelho</h2>
          </Logo>
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
          <button>Assista Agora</button>
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