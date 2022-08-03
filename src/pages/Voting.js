import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Searching from '../components/Searching';

const Voting = ({votings, search, setSearch}) => {
  return (
    <VoteStyle>
        <h2>Exceptional Data Analyst</h2>
        <Searching votings={votings} search={search} setSearch={setSearch}/> 
        <div className='after-search'>
            <p>You have <span>70</span> votes left</p>
            <h4>Increase your voting power <span><Link to='/power'>Here</Link></span></h4>
        </div>
        <div className='vote-cover'>
            {search.map((vote, i)=>{
                return(
                    <div key={i} className='voting-card'>
                        <div className='avatar-cover'>
                        <div className='avatar'>

                        </div>
                        </div>
                        <h3>{vote.name}</h3>
                        <p>{vote.votes} votes</p>
                        <div className='vote-box'>
                            <p><span>-</span> 1 <span>+</span></p>
                            <Link to='/power'><button>Vote</button></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </VoteStyle>
  )
}

const VoteStyle = styled.div`
    h2{
        font-size: 2.5rem;
    }
    .after-search{
        span{
            color:#3E0563;
            font-weight: 700;
            a{
                text-decoration:none;
            }
        }
        h4{
            font-size: 1rem;
        }
        p{
            font-size: 1.5rem;
            span{
                font-size: 3rem;
            }
        }
    }
    .vote-cover{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        padding: 0 3rem;
        margin: 3rem 2rem;
        .voting-card{
            box-shadow:0 0 3px 2px #F5F5F5;
            border-radius: 8px;
            padding: 4rem 2rem;
            .avatar-cover{
                display: flex;
                justify-content: center;
                .avatar{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-color:#1F0231;
                }
            }
            .vote-box{
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    border: 1px solid #3E0563;
                    padding: 1rem 2rem;
                    margin:0;
                    display: flex;
                    span{
                        margin:0 1rem;
                    }
                }
                button{
                    padding: 1.3rem 2rem;
                    background-color: #3E0563;
                    color: #FFFF;
                    border:none;
                    cursor:pointer;
                }
            }
        }
    }
    @media screen and (max-width: 1040px){
        .vote-cover{
            grid-template-columns: 1fr 1fr 1fr;
            padding:0 2rem;
        }
    }
    @media screen and (max-width: 685px){
        .vote-cover{
            grid-template-columns: 1fr 1fr;
            padding:0;
        }
    }
    @media screen and (max-width: 360px){
        .vote-cover{
            display:block;
            padding:0;
            margin: 2rem;
            .voting-card{
                margin: .5rem;
            }
        }
    }
`


export default Voting;