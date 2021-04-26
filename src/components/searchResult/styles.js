import { FavoriteBorderOutlined, StarRounded } from "@material-ui/icons"
import styled from "styled-components"


export const SearchResultContainer = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  >img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }
`


export const FavIcon = styled(FavoriteBorderOutlined)`
  position: absolute;
  top: 20px;
  right: 40px;
`
export const SearchResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`

export const InfoTop = styled.div`
  width: 40vh;
  > h3 {
    font-weight: 300;
    margin-top: 10px;
  }
  > p {
    margin-top: 10px;
    font-size:13px;
    color: gray;
  }
`

export const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchResultStartsContainer = styled.div`
  display: flex;
  align-items: center;

`

export const SearchResultStartIcon = styled(StarRounded)`
  color: red;
`


export const SearchResultPrice = styled.div`
position: absolute;
bottom: 20px;
right: 30px;
  > p {
    text-align: right;
  }
`
