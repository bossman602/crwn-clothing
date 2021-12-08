import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: auto 10px;
  max-width: 300px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }


  @media screen and (min-width: 1200px) {

  }
  @media screen and (min-width: 800px) and (max-width: 1199px) {

  }
  
  @media screen and (max-width: 799px) and (min-width: 500px) {
      width: 42vw;
      min-width: 70px;
      margin: auto 1px;
      &:hover {
        .image {
          opacity: unset;
        }
        button {
          border: 1px solid black;
          opacity: unset;
          line-height: 20px;
          text-align: center;
          margin: auto 1px;
        }
      }
    }

    @media screen and (max-width: 499px) {
      width: 42vw;
      min-width: 70px;
      margin: auto 1px;
      &:hover {
        .image {
          opacity: unset;
        }
        button {
          border: 1px solid black;
          opacity: unset;
          line-height: 50px;
          text-align: center;
          margin: auto 1px;
        }
      }


`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  min-width: 145px;
  position: absolute;
  top: 255px;
@media screen and (min-width: 1200px) {
  display: block;
   opacity: .9;
   min-width: unset;
   padding: 0 10px;
}

@media screen and (min-width: 800px) and (max-width: 1199px) {
  display: block;
   opacity: .9;
   min-width: unset;
   padding: 0 10px;

  }

`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  @media screen and (max-width: 800px) {
    width: 30%;
  }
`;
