import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  @media screen and (min-width: 1200px) {

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  }


`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  @media screen and (min-width: 1200px) {

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }


  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;

  color: white;
  @media screen and (min-width: 1200px) {
  &:hover {
    background-color: #357ae8;
    border: none;
  }
}
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }

  return props.inverted ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 800px) and (max-width: 1199px) {
    min-width: unset;
    padding: 0 10px;
  }
  @media screen and (max-width: 799px) and (min-width: 500px) {
    min-width: unset;
    padding: 0 10px;
  }

  @media screen and (max-width: 499px) {
    min-width: unset;
    padding: 0 10px;
  }

  ${getButtonStyles}
`;
