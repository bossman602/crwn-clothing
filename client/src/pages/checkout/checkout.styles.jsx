import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 50%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (min-width: 800px) and (max-width: 1199px) {
    width: 60%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  }
  @media screen and (max-width: 799px) and (min-width: 500px) {
    width: 70%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  }

  @media screen and (max-width: 499px) {
    width: 90%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  }
`;

export const CheckoutPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:nth-child(2) {
      width: 23%;
      padding-left: 0px;
    }
    &:nth-child(3) {
      width: 21%;
      padding-left: 10px;
    }
    
    &:nth-child(4) {
      width: 15%;
      @media screen and (min-width: 1500px) {
    width: 18%;
  }

  @media screen and (min-width: 1200px) and (max-width: 1499px) {
    width: 17%;
  }
  @media screen and (min-width: 800px) and (max-width: 1199px) {
    width: 16%;
}
}
    &:last-child {
      width: 8%;
      
    }
  }
`;

export const CheckoutPageTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
export const CheckoutPageTestWarning = styled.div`
  text-align: center;
  position: fixed;
  margin-top: 20px;
  top: 0;
  font-size: 24px;
  color: red;

  @media screen and (min-width: 800px) and (max-width: 1199px) {
    text-align: center;
    position: fixed;
    margin-top: unset;
    margin-bottom: 20px;
    top: unset;
    bottom: 0;
    font-size: 24px;
    color: red;
  }
  @media screen and (max-width: 799px) and (min-width: 500px) {
    text-align: center;
    text-decoration: none;
    position: fixed;
    margin-top: unset;
    padding-bottom: 20px;
    top: unset;
    bottom: 0;
    font-size: 20px;
    color: red;
  }

  @media screen and (max-width: 499px) {
    text-align: center;
    text-decoration: none;
    position: fixed;
    margin-top: unset;
    padding-bottom: 20px;
    top: unset;
    bottom: 0;
    font-size: 20px;
    color: red;
  }
`;
