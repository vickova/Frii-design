import React from 'react';
import styled from 'styled-components';
import Connected from  '../img/connected-logo.png';

const Footer = () => {
  return (
    <FooterStyle>
        <div className='top'>
            <div>
                <h3>About</h3>
                <p>The Connected Magazine</p>
                <p>Past Editions</p>
                <p>Celebrated Techies</p>
            </div>
            <div>
                <h3>Legal</h3>
                <p>Terms of Sercice</p>
                <p>Privay Policy</p>
            </div>
            <div>
                <h3>Social</h3>
                <p>Linkedin</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>+2347057219951</p>
                <p>Chat on WhatsApp</p>
                <p>connectedawards@gmail.com</p>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <img src={Connected} alt="connected-logo" />
                <p>Celebrating Techies Globally</p>
            </div>
            <p>© 2022 The Conected Awards - All rights reserved</p>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    background: #1F0231;
    padding: 1.5rem;
    h3{
        color:#FA9706;

    }
    p{
        color: #FFF;
        font-size: 1.2rem;
    }
    .top{
        display:flex;
        flex-wrap:wrap;
        margin: 3rem;
        gap: 10rem;
        text-align: left;
    }
    .bottom{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;
        margin: 3rem;
    }
    @media screen and (max-width: 685px){
        .top{
            gap: 3rem;
            margin:0;
        }
        .bottom{
            gap:1rem;
            margin:0;
            img{
                width: 100px;
                height: 60px;
            }
        }
        p{
            font-size: .8rem;
        }
        h3{
            font-size: 1rem;
        }
    }

`
export default Footer;