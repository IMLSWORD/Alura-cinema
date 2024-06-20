import Cabecera from "components/Cabecera/Cabecera";
import Card from "components/Card/Card";
import Titulo from "components/Titulo";
import Banner from "components/banner/banner";
import Pie from "components/pie/Pie";
import React from "react";

function Inicio() {
  return (
    <>
      <Cabecera />
      <Banner img="home" color="#154580" />
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos.</h1>
      </Titulo>
      <Card
        id="1"
        titulo="Gato"
        capa="https://api.thecatapi.com/api/
images/get?format=src&ype=png"
      />
      <Pie />
    </>
  );
}

export default Inicio;
