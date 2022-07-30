import React from 'react';
import Face from '../img/face.png';
import styled from 'styled-components';

const CelebratedTechies = () => {
    const celebs= [
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        },
        {
            name: 'Sarah Olalore',
            description: 'Exceptional Visual Designer'
        }
    ]
  return (
    <CelebratedStyle>
        <div>
            <h2>Celebrated Techies</h2>
            <p>A look into some of our past winners</p>
            <div className='techie'>
                {celebs.map((celeb, i)=>{
                    return(
                        <div key={i}>
                            <img src={Face} alt="avatar" />
                            <h3>{celeb.name}</h3>
                            <p>{celeb.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </CelebratedStyle>
  )
}

const CelebratedStyle = styled.div`
    .techie{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        p{
            color: #3E0563;
        }
    }
    @media screen and (max-width: 1040px){
        .techie{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media screen and (max-width: 685px){
        .techie{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (max-width: 360px){
        .techie{
            display:block;
        }
    }
`
export default CelebratedTechies;