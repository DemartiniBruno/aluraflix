import React from "react";
import styled from 'styled-components';

import Menu from "../../components/Menu";
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'

const AppWrapper = styled.div`
  background: var(--grayDark);
`

function Home() {
  return (
    <AppWrapper>
      <Menu></Menu>
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end? Trabalhando na área...."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      
      <Footer></Footer>

    </AppWrapper>
  );
}

export default Home;
