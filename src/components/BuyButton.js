import React from 'react';
import styled from 'styled-components';

const BuyButton = ({pop, setPop}) => {
  return (
    <BuyStyle onClick={()=>setPop(!pop)}>
        Buy
    </BuyStyle>
  )
}

const BuyStyle = styled.button`
    padding: .8rem 2rem;
    border: none;
    border-radius: 3px;
    margin: 1rem 0;
    cursor:pointer;
    @media screen and (max-width: 685px){
        padding: .8rem 5rem;
    }
`
export default BuyButton