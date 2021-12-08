import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 200px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 75%;
    height: 75%;
  }

  @media screen and (max-width: 799px) and (min-width: 500px) {
    padding-right: 10px;
  }

  @media screen and (max-width: 499px) {
    padding-right: 5px;
  }
`;

export const CheckoutItemName = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;
  padding-left: 35px;
  
  .arrow {
    cursor: pointer;
    padding: 0 5px;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
    @media screen and (max-width: 499px) {

  padding-left: 30px;
  .arrow {
      padding: unset;
      
      cursor: unset;
      &:hover {
        transform:unset;
        transition:unset;
      }
  }
  .value {
    margin: 0 0px;
  }
}
`;
export const CheckoutItemPrice = styled.span`
  width: 23%;
  padding-left: 30px;
  
  @media screen and (min-width: 1500px) {
    padding-left: 30px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1499px) {
    padding-left: 30px;
  }

  @media screen and (min-width: 800px) and (max-width: 1199px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 799px) and (min-width: 500px) {
    padding-left: 25px;
  
  }
  @media screen and (max-width: 499px) {
    padding-left: 30px;
  }
`;
export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
