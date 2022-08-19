import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Searching from '../components/Searching';
import Avatar from '../components/Avatar';

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
                    <Avatar vote={vote} i={i} key={i}/>
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