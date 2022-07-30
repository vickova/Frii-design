import React from 'react';
import Square from '../img/squares.png';
import Arrow from '../img/arrow.svg';
import Search from '../img/Vector (8).png';
import styled from 'styled-components';

const VotingCategories = () => {
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
        <SearchCover>
            <div className='search-cover'>
                <div className='search-cover-inner'>
                    <input type="text" placeholder="Nominee's Name, Nominee's Category"/>
                    <img src={Search} alt="search-icon" />
                </div>
                <button>Search</button>
            </div>
        </SearchCover>
        <div className='voting-categ'>
            {celebs.map((celeb, i)=>{
                return(
                    <div className='voting-card' key={i}>
                        <img src={Square} alt="square-pic" />
                        <h3>{celeb.description}</h3>
                        <div className='arrowed'>
                        <img src={Arrow} alt="arrow" />
                        </div>
                    </div>
                )
            })}
        </div>
    </VotingStyle>
  )
}

const VotingStyle = styled.div`
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
const SearchCover = styled.div`
    text-align:center;
    margin: 2rem 0;
    .hero-text{
        display: flex;
        justify-content: center;
        h2{
            font-size: 6rem;
            max-width: 80%;
        }
    }
    .search-cover{
        display: flex;
        justify-content:center;
        gap: 2rem;
        .search-cover-inner{
            position:relative;
            width: 50%;
            input{
                height: 30px;
                width: 100%;
                padding: 1rem 2rem;
                border: 1px solid gray;
                border-radius: 4px;
            }
            input::placeholder{
                margin: 0 7rem;
                font-size: 1rem;
            }
            img{
                position: absolute;
                left:10px;
                bottom: 20px;
            }
        }
        button{
            padding: 1rem 2rem;
            margin: 0 .5rem;
            background-color: #3E0563;
            border-radius: 4px;
            color:#FFF;
            font-size:1.2rem;
        }
    }
    h3{
        font-size: 1.5rem;
    }
    @media screen and (max-width: 685px){
        .hero-text{
            h2{
                font-size: 2rem;
            }
        }
        .search-cover{
            margin: 0 1rem;
            .search-cover-inner{
                input{
                    width: 80%;
                }
            }
        }
    }
`
export default VotingCategories