import styled from "styled-components";

export const SignUpContainer = styled.div`
  

  @media screen and (min-width: 1200px) {
    width: 380px;
    display: flex;
    flex-direction: column;
    font-family: inherit;
    
  }

  @media screen and (min-width: 800px) and (max-width: 1199px) {
    width: 380px;
    display: flex;
    margin: 0 10px;
    flex-direction: column;
    font-family: inherit;
    
  }

  @media screen and (max-width: 799px) and (min-width: 500px) {
    width: 100%;
    display: flex;
    margin: 0 20px;
    flex-direction: column;
    font-family: inherit;
    
  }
  @media screen and (max-width: 499px) {
    width: 100%;
    display: flex;
    margin: 0 20px;
    flex-direction: column;
    font-family: inherit;
    
  }
  h2 {
    margin: 10px 0;
  }
`;
