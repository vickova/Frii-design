import React from 'react';
import Success from '../img/success.svg';
import Close from '../img/close.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const PopUp = ({pop, setPop}) => {
  return (
    <PopStyle pop={pop}>
        <div className='pop'>
            <div className='exit'><img src={Close} alt="exit" onClick={()=> setPop(!pop)}/></div>
            <div>
                <img src={Success} alt="success-pic" />
                <h2>Awesome</h2>
                <p>You have successfully increased your voting power. Go and make your favourite candidate win!</p>
                <Link to='/votingcategories/voting'><button>Go to voting page</button></Link>
            </div>
        </div>
    </PopStyle>
  )
}

const PopStyle = styled.div`
    visibility:${({pop})=> pop? 'visible': 'hidden'};
    display:flex;
    justify-content: center;
    align-items:center;
    position:absolute;
    box-shadow: 0 0 3px gray;
    padding: 3rem;
    background-color: #FFF;
    width:60%;
    z-index: 2;
    p{
        color: #000;
    }
    img{
        width: 60px;
        height:60px;
    }
    .pop{
        height:100%;
        width:100%;
    }
    button{
        padding:1rem 3rem;
        margin: 2rem 0;
        background-color:#1F0332;
        border:none;
        border-radius: 3px;
        color: #FFF;
        cursor:pointer;
    }
    .exit{
        display:flex;
        justify-content: right;
        margin-bottom: 1rem;
        img{
        width:30px;
        height:30px;
        cursor:pointer;
        }
    }
    @media screen and (max-width: 685px){
        height: 30%;
        padding: 1rem 3rem;
        p{
            color: #000;
        }
    }
`
export default PopUp