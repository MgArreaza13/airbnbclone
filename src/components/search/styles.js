import styled from "styled-components";

export const SearchContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 35%;
  width: 100vw;
  > h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 349px;
  }
  > input {
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 397px;
    border: none;
    &:focus {
      outline-width: 0;
    }
  }

  > button {
    position: absolute;
    left: 0;
    top: 464px;
    text-transform: inherit !important;
    background-color: #ff7779;
    color: white;
    width: 579px;
    :hover {
      background-color: white;
      color: #ff7779;
    }
  }
`;
