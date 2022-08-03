import React from 'react';
import Square from '../img/squares.png';
import Arrow from '../img/arrow.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Searching from '../components/Searching';


const VotingCategories = ({votings, search, setSearch}) => {
    const celebs= [
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        },
        {
            description: 'Exceptional Data Analyst'
        },
        {
            description: 'Promising Data Analyst'
        }
    ]
  return (
    <VotingStyle>
        <h2>Voting Categories</h2>
        <Searching votings={votings} search={search} setSearch={setSearch}/>
        <div className='voting-categ'>
            {celebs.map((celeb, i)=>{
                return(
                    <div className='voting-card' key={i}>
                        <img src={Square} alt="square-pic" />
                        <h3>{celeb.description}</h3>
                        <div className='arrowed'>
                        <Link to='/votingcategories/voting'><img src={Arrow} alt="arrow" /></Link>
                        </div>
                    </div>
                )
            })}
        </div>
        <Footer/>
    </VotingStyle>
  )
}

const VotingStyle = styled.div`
    h2{
        font-size: 2.5rem;
    }
    .voting-categ{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        padding: 0 3rem;
        margin: 3rem 2rem;
        .voting-card{
            box-shadow:0 0 3px 2px #F5F5F5;
            border-radius: 8px;
            padding: 4rem 2rem;
            .arrowed{
                display: flex;
                justify-content: right;
            }
        }
    }
    @media screen and (max-width: 1040px){
        .voting-categ{
            grid-template-columns: 1fr 1fr 1fr;
            padding:0 2rem;
        }
    }
    @media screen and (max-width: 685px){
        .voting-categ{
            grid-template-columns: 1fr 1fr;
            padding:0;
        }
    }
    @media screen and (max-width: 360px){
        .voting-categ{
            display:block;
            padding:0;
            .voting-card{
                margin: .5rem;
            }
        }
    }
`
export default VotingCategories