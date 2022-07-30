import React from 'react';
import styled from 'styled-components';

const Power = () => {
  return (
    <PowerStyle>
        <div className='power'>
            <h2>Increase your voting power</h2>
            <h3>Cheer Your Favourite Nominee to Success</h3>
            <div className='card-cover'>
                <div className='card'>
                    <div id='one'>
                        <div>
                            <h3>20</h3>
                            <p>Votes</p>
                        </div>
                        <div>
                            <h3>2.50$</h3>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div id='two'>
                        <div>
                            <h3>45</h3>
                            <p>Votes</p>
                        </div>
                        <div>
                            <h3>5$</h3>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div id='three'>
                        <div>
                            <h3>70</h3>
                            <p>Votes</p>
                        </div>
                        <div>
                            <h3>7.50$</h3>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div id='four'>
                        <div>
                            <h3>100</h3>
                            <p>Votes</p>
                        </div>
                        <div>
                            <h3>10$</h3>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PowerStyle>
  )
}

const PowerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1F0332;
    height: 150vh;
    padding: 3rem;
    h2{
    font-size: 2.5rem;
    margin: .5rem 0;
    }
    h3{
        font-size: 2rem;
        color:#808080;

    }
    p{
        color: #FFF;
    }
    .power{
        padding: 2rem;
        background-color: #FFF;
        .card-cover{
            padding: 2rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
            height: 100%;
            .card{
                width: 15rem;
                display:flex;
                justify-content: center;
                align-items: flex-end;
                height: 65vh;
                h3{
                    font-size: 2.5rem;
                    margin:.5rem 0;
                    color: #FFF;
                }
                button{
                    padding: .8rem 2rem;
                    border: none;
                    border-radius: 3px;
                    margin: 1rem 0;
                }
            }
            #one, #two, #three, #four{
                width: 100%;
                background-color: #1F0332;
                display:flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 3rem;
                border-radius: 8px;
            }
            #one{
                height: 80%;
            }
            #two{
                height: 85%;
            }
            #three{
                height: 90%;
            }
            #four{
                height: 95%;
            }
        }
    }
    @media screen and (max-width: 685px){
        h2{
            font-size: 1.5rem;
        }
        h3{
            font-size: 1rem;
        }
        .power{
            padding:0;
            gap: 1rem;
            margin: 1rem 5rem;
            width: 100%;
            .card-cover{
                padding:1rem;
                gap: .5rem;
                .card{
                    h3{
                        font-size: 1rem;
                    }
                    button{
                        padding: .5rem 1rem;
                        font-size: .8rem;
                    }
                    #one, #two, #three, #four{
                        padding:.5rem;
                    }
                }
            }
        }
    }
`
export default Power