import styled from "styled-components";
import { Button } from "@material-ui/core";

export const BannerContainer = styled.div`
  height: 50vh;
  position: relative;
  background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg")
    center center;
`;

export const BannerInfo = styled.div`
  background-color: black;
  color: white;
  padding: 25vh 50px 40px 50px;
  width: 300px;

  > h5 {
    margin-top: 10px;
  }

  > button {
    background-color: #ff7779;
    color: white;
    text-transform: inherit;
    margin-top: 20px;
    font-weight: 600;

    &:hover {
      background-color: white;
      color: #ff7779;
    }
  }
`;

export const BannerSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerSearchButton = styled(Button)`
  background-color: white !important;
  font-weight: 900 !important;
  text-transform: inherit !important;
  color: #ff7779 !important;
`;
