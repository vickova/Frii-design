import React from 'react';
import Connected from '../img/connected.png';
import Kacy from '../img/Kacy.png';
import PriceMan from '../img/priceMan.png';
import PriceWoman from '../img/priceWoman.png';
import ViewLady from '../img/viewLady.png';
import styled from 'styled-components';

const PastEditions = () => {
  return (
    <EditionStyle>
        <h2>Photo Gallery</h2>
        <h3>Our collage of photos and memories from notable events</h3>
        <div className='edited'>
            <div>
                <img src={Connected} alt="connected-pic" />
            </div>
            <div>
                <img src={Kacy} alt="kacy" />
            </div>
            <div>
                <img src={PriceMan} alt="priceman" />
            </div>
            <div>
                <img src={PriceWoman} alt="pricewoman" />
            </div>
            <div>
                <img src={ViewLady} alt="viewlady" />
            </div>
        </div>
    </EditionStyle>
  )
}

const EditionStyle = styled.div`
    h2{
        font-size: 2.5rem;
    }
    h3{
        font-size: 1.5rem;
        color: #808080;
    }
    .edited{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 3rem 1rem;
        div{
            width: 250px;
            height: 250px;
            background-color: #FFF;
            box-shadow: 0 0 2px 2px #F1F1F1;
            margin: 1rem;
            padding: 4rem 2rem;
            border-radius: 8px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    @media screen and (max-width: 785px){
        h2{
            font-size: 1.8rem;
        }
        h3{
            font-size: 1.2rem;
        }
        .edited{
        display:grid;
        grid-template-columns: 1fr 1fr;
        div{
            width: 180px;
            height: 180px;
        }
        }
    }
    @media screen and (max-width: 360px){
        .edited{
            div{
                width: 100px;
                height: 100px;
                padding: 2rem .5rem;
                margin:.5rem;
            }
        }
    }
`
export default PastEditions