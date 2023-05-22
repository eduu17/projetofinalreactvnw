import React, { Component } from "react";
import * as S from "./header.styled";
import Logo from "../images/Logo.svg";
import Star from "../images/Star.svg";

export default class Header extends Component {
  render() {
    return (
      <S.Header>
        <S.Navbar>
          <S.Options>
            <img src={Logo} alt="Dell Movies" />
          </S.Options>
          <S.Options>
            <S.Listitem>
              <a
                href="https://github.com/eduu17"
                target="_blank"
                rel="noreferrer"
              >
                Séries
              </a>
            </S.Listitem>
            <S.Listitem>
              <a
                href="https://github.com/eduu17"
                target="_blank"
                rel="noreferrer"
              >
                Filmes
              </a>
            </S.Listitem>
          </S.Options>
          <S.Options>
            <S.StyledIcon />
            <S.Listitem>
              <a
                href="https://github.com/eduu17"
                target="_blank"
                rel="noreferrer"
              >
                Filtro
              </a>
            </S.Listitem>
            <S.Listitem>
              <a
                href="https://github.com/eduu17"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
            </S.Listitem>
          </S.Options>
        </S.Navbar>
        <S.Banner>
          <h1>Avatar: o Caminho da Água</h1>
          <h2>3hr 23min | Fantasia, Família | 2023</h2>
          <S.Bannercontent>
            <img src={Star} alt="Star" />
            <h2>
              9,9<span>/10</span>
            </h2>
            <S.StyledIMDB />
          </S.Bannercontent>
          <p>
            Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
            ficarem juntos. No entanto, eles devem sair de casa e explorar as
            regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
            travar uma guerra difícil contra os humanos.
          </p>
          <S.BannerButton>
            <a
              href="https://github.com/eduu17"
              target="_blank"
              rel="noreferrer"
            >
              <S.StylePlay />
              Assistir Agora
            </a>
            <a
              href="https://github.com/eduu17"
              target="_blank"
              rel="noreferrer"
            >
              <S.StyleFilm />
              Trailer
            </a>
          </S.BannerButton>
        </S.Banner>
      </S.Header>
    );
  }
}
