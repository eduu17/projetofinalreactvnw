import React, { Component } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaImdb } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { TbMovie } from "react-icons/tb";
import Logo from "../images/Logo.svg";
import Star from "../images/Star.svg";

export default class Header extends Component {
  render() {
    return (
      <header>
        <navbar>
          <logo>
            <img src={Logo} alt="Dell Movies" />
          </logo>
          <gender>
            <h2>Séries</h2>
            <h2>Filmes</h2>
          </gender>
          <options>
            <RxMagnifyingGlass />
            <h2>Filtro</h2>
            <h2>Login</h2>
          </options>
        </navbar>
        <banner>
          <h1>Avatar: o Caminho da Água</h1>
          <bannercontent>
            <img src={Star} alt="Star" />
            <h2>9,9</h2>
            <FaImdb />
          </bannercontent>
          <p>
            Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
            ficarem juntos. No entanto, eles devem sair de casa e explorar as
            regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
            travar uma guerra difícil contra os humanos.
          </p>
          <bannerbutton>
            <a href="#">
              <FiPlay />
              Assistir Agora
            </a>
            <a href="#">
              <TbMovie />
              Trailer
            </a>
          </bannerbutton>
        </banner>
      </header>
    );
  }
}
