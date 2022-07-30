import React from 'react';
import Search from '../img/Vector (8).png';
import styled from 'styled-components';

const Voting = () => {
    const votings= [
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
        {
            name: 'Adewale Akinola',
            votes: 750,
        },
    ]
  return (
    <VoteStyle>
        <h2>Exceptional Data Analyst</h2>
        <SearchCover>
            <div className='search-cover'>
                <div className='search-cover-inner'>
                    <input type="text" placeholder="Nominee's Name, Nominee's Category"/>
                    <img src={Search} alt="search-icon" />
                </div>
                <button>Search</button>
            </div>
        </SearchCover>
        <div className='after-search'>
            <p>You have <span>70</span> votes left</p>
            <h4>Increase your voting power <span>Here</span></h4>
        </div>
        <div className='vote-cover'>
            {votings.map((vote, i)=>{
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
                            <button>Vote</button>
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
        }
        p{
            font-size: 1rem;
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
export default Voting;