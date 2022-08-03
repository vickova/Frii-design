import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = ({buttonText, to}) => {
  return (
    <ButtonStyle>
        <Link to={to}><button>{buttonText}</button></Link>
    </ButtonStyle>
  )
}

const ButtonStyle = styled.div`
  button{
          padding: 1rem 2rem;
          margin: 0 .5rem;
          background-color: #3E0563;
          border-radius: 4px;
          color:#FFF;
          font-size:1.2rem;
          border: none;
          cursor:pointer;
      }
      @media screen and (max-width: 685px){
        button{
        padding: 1rem;
        font-size: 1rem;
        }
      }
`

export default Button