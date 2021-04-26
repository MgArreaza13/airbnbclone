import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  z-index: 100;
  width: 100%;
  top: 0;
`;

export const HeaderIcon = styled.img`
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
  > input {
    border: none;
    width: 250px;
    padding: 10px;
    outline: 0;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
`;
