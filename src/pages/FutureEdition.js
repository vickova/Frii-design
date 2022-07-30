import React from 'react';
import styled from 'styled-components';
import Map from '../img/map.png'

const FutureEdition = () => {
    const editions = [
        {
            name: 'East Africa Edition'
        },
        {
            name: 'South Africa Edition'
        },
        {
            name: 'North Africa Edition'
        },
        {
            name: 'West Africa Edition'
        },
    ]
  return (
    <EditionStyle>
        <h2>Future Edition</h2>
        <h3>Nominate candidates for furure edition</h3>
        <div className='edition-cover'>
            {editions.map((edition, i)=>{
                return (
                    <div key={i} className='nomination'>
                        <img src={Map} alt="map" />
                        <h3>{edition.name}</h3>
                        <button>Nominate</button>
                    </div>
                )
            })}
        </div>
    </EditionStyle>
  )
}

const EditionStyle = styled.div`
    h2{
    font-size: 2.5rem;
    margin: .5rem 0;
    }
    h3{
        font-size: 2rem;
        color:#808080;

    }
    .edition-cover{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        .nomination{
            box-shadow:0 0 3px 2px #F5F5F5;
            border-radius: 8px;
            padding: 4rem 2rem;
            h3{
                color: #000;
                font-size: 1rem;
            }
            button{
                padding: 1rem 2rem;
                background-color: #3E0563;
                color: #FFF;
                font-size: 1rem;
                border: none;
            }
        }
    }
    @media screen and (max-width: 685px){
        .edition-cover{
            display:block;
            margin: 2rem;
            .nomination{
                margin: 1rem;
                button{
                    padding: .5rem 1rem;
                    font-size: .8rem;
                }
            }
        }
    }
`
export default FutureEdition