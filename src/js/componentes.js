import "../css/componentes.css";
import logow from "../assets/images/logo-w.png";

export const saludar = (nombre) => {
  console.log("creando etiqueta h1");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola, ${nombre}`;
  document.body.append(h1);

  //img
  console.log(logow);
  const img = document.createElement("img");
  img.src = logow;
  document.body.append(img);
};
