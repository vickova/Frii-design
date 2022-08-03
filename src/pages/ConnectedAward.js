import React from 'react';
import Connectedaward from '../img/connectedaward.png';
import Connected from '../img/connected.png';
import Footer from '../components/Footer';
import styled from 'styled-components';

const ConnectedAward = () => {
  return (
      <div>
    <ConnectedStyle>
        <div className='connected-cover'>
            <h2>The Connected Awards</h2>
            <h3>Learn about us</h3>
            <img className='con-award' src={Connectedaward} alt="Tech-trend" />
            <div className='connected-inner'>
                <div>
                <h2>Connecting Techies Globally</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                     sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                     software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
                <img src={Connected} alt="connected-pics" />
            </div>
        </div>
    </ConnectedStyle>
    <Footer/>
    </div>
  )
}

const ConnectedStyle = styled.div`
    padding: 0 3rem;
    h2{
        font-size: 2.5rem;
    }
    h3{
        font-size: 1.2rem;
        color: #808080;
    }
    .connected-cover{
        margin: 0 2rem;
    }
    .con-award{
        width: 100%;
    }
    .connected-inner{
        display:flex;
        margin: 4rem 0;
        div{
            width: 50%;
            margin: 2rem;
            text-align: left;
        }
    }
    @media screen and (max-width: 685px){
        padding: 0 1rem;
    .connected-inner{
        display:block;
        div{
            width: 100%;
            margin:0;
        }
        img{
            width: 100%;
        }
    }
    }
`
export default ConnectedAward