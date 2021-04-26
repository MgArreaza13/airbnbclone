import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../search";
import {
  BannerContainer,
  BannerInfo,
  BannerSearch,
  BannerSearchButton,
} from "./styled";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <BannerContainer>
      <BannerSearch>
        {showSearch && <Search />}
        <BannerSearchButton
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </BannerSearchButton>
      </BannerSearch>
      <BannerInfo>
        <h1>Get out and strectch yout imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </BannerInfo>
    </BannerContainer>
  );
}

export default Banner;
