import React from "react";
import { CardContainer, CardInfo } from "./styles";

function Card({ src, title, description, price }) {
  return (
    <CardContainer>
      <img src={src} alt={title} />
      <CardInfo>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
