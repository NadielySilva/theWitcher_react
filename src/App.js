import React, { Component } from "react";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

//Importando Assets
import myBackground from "./Assets/the witcher hell.png"
import myLogo from "./Assets/witcher simbol.png"
import myWitcher from "./Assets/the witcher kavil2.png"
import myShowName from "./Assets/the witcher.jpeg.png"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;700&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  text-transform: uppercase;
  color: white;
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
  margin-top: 2.5vh;
}

h2{
  font-weight: 200;
  font-size: 1em;
}

main{
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
}

button{
  font-weight: 600;
  color: white;
  width: 14vw;
  height: 6vh;
  position: relative;
  top: 25vh;
  right: 16.5vw;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  background: #bc131f;
}

footer{
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 0.65em;
  width: 35vw;
  height: 5vh;
  position: relative;
  top:5vh;
  left: 1vw;
}
`
const MyBackgroundImage = styled.img`
width: 100vw;
height: 100vh;
position: absolute;
z-index: -1;
`

const Logo = styled.div`
width: 22vw;
height: 10vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 2.5vh;
`

const MyLogoImage = styled.img`
width: 3vw;
height: auto;
`
const MyWitcherImage = styled.img`
width: 33vw;
height: auto;
position: relative;
top: 4.5vh;
left: 30vw;
`
const MyShowNameImage = styled.img`
width: 22vw;
height: auto;
position: relative;
left: 3vw;
bottom: 25vh;
`

export default class App extends Component{

  render(){
    return(
      <div>
        <MyBackgroundImage src={myBackground} alt=""></MyBackgroundImage>
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
            <MyWitcherImage src={myWitcher} alt="Personagem 'The Witcher' em armadura completa com duas espadas nas costas e o que parece ser um machado em uma de suas mãos. O bruxo tem olhos verde-amarelados e uma grande cicatriz que vai do lado esquerdo da testa, passa pelo olho esquerdo, e para no meio do rosto do lado esquerdo."/>
            <MyShowNameImage src={myShowName} alt="Nome da série 'The Witcher', mais o subtítulo 'Wild Hunt' acompanhada do logo 'W'."/>
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