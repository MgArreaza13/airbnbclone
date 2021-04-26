import React from "react";
import {
  SearchResultContainer,
  FavIcon,
  SearchResultInfo,
  InfoTop,
  InfoBottom,
  SearchResultStartsContainer,
  SearchResultStartIcon,
  SearchResultPrice,
} from "./styles";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <SearchResultContainer>
      <img src={img} alt={title} />
      <FavIcon />
      <SearchResultInfo>
        <InfoTop>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </InfoTop>
        <InfoBottom>
          <SearchResultStartsContainer>
            <SearchResultStartIcon />
            <p>
              <strong>{star}</strong>
            </p>
          </SearchResultStartsContainer>
          <SearchResultPrice>
            <h2>{price}</h2>
            <p>{total}</p>
          </SearchResultPrice>
        </InfoBottom>
      </SearchResultInfo>
    </SearchResultContainer>
  );
}

export default SearchResult;
