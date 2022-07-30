import React from 'react';
import Search from '../img/Vector (8).png';
import styled from 'styled-components';
import Connected from '../img/connected.png';
import PriceMan from '../img/priceMan.png';
import PriceWoman from '../img/priceWoman.png';
import Trophy from '../img/trophy.svg';
import Speaker from '../img/speaker.svg';
import Target from '../img/target.svg';
import Dice from '../img/dice.svg';
import StraightStar from '../img/straightstar.svg';
import CurveStar from '../img/curvestar.svg';
import CurveStarS from '../img/curvestarsmall.svg';
import Kacy from '../img/Kacy.png';
import ViewLady from '../img/viewLady.png';
import Ribbon from '../img/ribbon.svg';
import RightStripe from '../img/stripes (1).svg';
import LeftStripe from '../img/stripes.svg';
import Button from '../components/Button';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
        <SearchCover>
            <div className='hero-text'><h2>First Ever Tech Personality Award For Africans in Europe</h2></div>
            <div className='search-cover'>
                <div className='search-cover-inner'>
                    <input type="text" placeholder="Nominee's Name, Nominee's Category"/>
                    <img src={Search} alt="search-icon" />
                </div>
                <button>Search</button>
            </div>
        </SearchCover>
            <h3>View all categories</h3>
            <Cards>
            <h2>Our Targets</h2>
                <div className='targets'>
                    <div className='card-cover'>
                    <div className='card'>
                        <div>
                        <img src={Speaker} alt="card-boxes" />
                        </div>
                        <h3>Awareness</h3>
                    </div>
                    <div className='card'>
                        <img src={Target} alt="card-boxes" />
                        <h3>Competition</h3>
                    </div>
                    <div className='card'>
                        <img src={Dice} alt="card-boxes" />
                        <h3>Entertainment</h3>
                    </div>
                    <div className='card'>
                        <img src={Trophy} alt="card-boxes" />
                        <h3>Recognition</h3>
                    </div>
                    </div>
                </div>
            </Cards>
            <ConnectedStyle>
                <div className='positioned-connect'>
                    <div className='image-cover'><img src={Connected} alt="connected" /></div>
                    <SideFlex>
                        <div className='connected-cover'>
                            <h2>The Connected Awards</h2>
                            <div></div>
                        </div>
                        <p>The connected is.....It is a long established fact that 
                                a reader will be distracted by the readable content 
                                of a page when looking at its layout. The point of 
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <Button buttonText='Learn more'/>
                    </SideFlex>
                </div>
                <img id='rightstripe' className='stripe' src={RightStripe} alt="rightstripes" />
            </ConnectedStyle>
        <ConnectedStyleSecond>
                <div className='positioned-connect'>
                    <SideFlex>
                        <div className='connected-cover'>
                            <h2>The Connected Awards</h2>
                            <div></div>
                        </div>
                        <p>The connected is.....It is a long established fact that 
                                a reader will be distracted by the readable content 
                                of a page when looking at its layout. The point of 
                                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <Button buttonText='Learn more'/>
                    </SideFlex>
                    <div className='image-cover'>
                        <img src={PriceMan} alt="connected" />
                        <img src={PriceWoman} alt="connected" />
                        <img src={ViewLady} alt="connected" />
                        <img src={Kacy} alt="connected" />
                    </div>
                </div>
                <img id='leftstripe' className='stripe' src={LeftStripe} alt="leftstripe" />
            </ConnectedStyleSecond>
        <CardsStyle>
            <div className='card'>
                <img src={Ribbon} alt="ribbon" />
                <h3>Promising Talents</h3>
                <p>Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. 
                    Such individual are well recognized in their field for impacting with their skills.
                </p>
            </div>
            <div className='card'>
                <img src={StraightStar} alt="star" />
                <h3>Intermediate Talent</h3>
                <p>Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. 
                    Such individual are well recognized in their field for impacting with their skills.</p>
            </div>
            <div className='card'>
                <img src={CurveStarS} alt="star" />
                <img id='bigstar' src={CurveStar} alt="star" />
                <img src={CurveStarS} alt="star" />
                <h3>Exceptional Talent</h3>
                <p>Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. 
                    Such individual are well recognized in their field for impacting with their skills.</p>
            </div>
        </CardsStyle>
        <Footer/>
    </div>
  )
}

const SearchCover = styled.div`
    text-align:center;
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
const ConnectedStyle = styled.div`
    position:relative;
    .positioned-connect{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin: 3.5rem 6rem;
    }
    .image-cover{
        width: 45%;
        img{
            width: 100%;
        }
    }
    #rightstripe{
        position: absolute;
        right:0;
        bottom:-100px;
    }
    @media screen and (max-width: 685px) {
        .positioned-connect{
        display: block;
        margin: 6rem 1.5rem;
        }
        .image-cover{
            width: 100%;
        }
        
        #rightstripe{
            width: 80px;
            height: 80px;
        }
    }
`
const ConnectedStyleSecond = styled(ConnectedStyle)`
    position: relative;
    .positioned-connect{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin: 6rem;
    }
    .image-cover{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:.5rem;
        img{
            width: 100%;
        }
    }
    #leftstripe{
        position: absolute;
        left:0;
        bottom:-100px;
        transform:rotate(90deg);
    }
    @media screen and (max-width: 685px) {
        .positioned-connect{
            display: flex;
            flex-direction: column-reverse;
            margin: 6rem 1.5rem;
        }
        #leftstripe{
            width: 80px;
            height: 80px;
        }
    }
`
const SideFlex= styled.div`
    width: 50%;
    text-align:left;
    .connected-cover{
        margin: 1.5rem 0;
        h2{
            font-size: 3rem;
            margin: .5rem 0;
        }
        div{
            width: 15%;
            height: 4px;
            background-color: #FA9706;
        }
    }
    p{
        font-size: 1.2rem;
    }
    @media screen and (max-width: 685px){
        width:100%;
        p{
            font-size: .8rem;
        }
        .connected-cover{
            h2{
                font-size: 2rem;
            }
        }
    }
`
const Cards = styled.div`
    background: #1F0231;
    padding:4rem 3rem;
    margin: 5rem 0;
    .targets{
    display:flex;
    align-items:center;
    }
    .card-cover{
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card{
        border: 1px solid gray;
        padding: 5rem;
        margin: 1rem;
        color: #FFF;
        height: 200px;
    }
    h2{
        font-size: 2.5rem;
        color:#FFF;
    }
    @media screen and (max-width: 685px){
        padding: 1rem;
        .card-cover{
            display:grid;
            grid-template-columns: 1fr 1fr;
            height: fit-content;
            width:100%;
            .card{
                padding:.5rem;
                margin:.5rem;
                width: 150px;
                height: 150px;
                img{
                    width: 60px;
                    height: 60px;
                }
                h3{
                    margin: .5rem;
                    font-size: 1rem;
                }
            }
        }
        h2{
            font-size: 2rem;
        }
    }
`
const CardsStyle = styled.div`
    background-color:#FFF;
    padding:0 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;
    .card{
        border: 1px solid gray;
        padding: 3rem;
        margin: 1rem;
        color: #FFF;
        height: 330px;
        
        h3{
            color: #3E0563;
            font-size: 2rem;
        }
        p{
            color:#0C0114;
            font-size: 1.2rem;

        }
    }
    @media screen and (max-width: 685px){
        display:block;
        padding: 0 1rem;
        .card{
            height: fit-content;
            padding: 2rem;
            img{
                width: 40px;
                height: 40px;
            }
            #bigstar{
                width: 60px;
                height: 60px;
            }
            p{
                font-size: .8rem;
            }
            h3{
                font-size: 1rem;
            }
        }
    }
`
export default Home