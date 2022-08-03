import React from 'react';
import styled from 'styled-components';
import Google from '../img/google.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginStyle>
        <div className='signup-cover'>
            <h2>Time to vote your favourite Techie, let's make this amazing!</h2>
            <h3>Create an Account</h3>
            <p>Have an account? <span><Link to='/signup'>Log in</Link></span></p>
            <form>
            <Link to='/'>
                <button>
                    <img src={Google} alt="google-icon" />
                    <span>Continue with google</span>
                </button>
                </Link>
                <div id='or'><span></span> <p> OR </p> <span></span></div>
                
                <label htmlFor="emal">Email Address
                    <input type="email" name='email' id='email'/>
                </label>
                <label htmlFor="password">Password
                    <input type="password" name='password' id='password'/>
                </label>
                <button id='color-but'><Link to='/'>Create my account</Link></button>
            </form>
            <p id='forgot'>Forgot Password</p>
        </div>
    </LoginStyle>
  )
}

const LoginStyle = styled.div`
    display:flex;
    justify-content: center;
    background-color: #1F0231;
    padding: 4rem 0;
    .signup-cover{
        background-color: #FFF;
        padding: 2rem;
    }
    span{
        a{
        color:#FA9706;
        text-decoration:none;
        }
    }
    #forgot{
            color: #3E0563;
        }
    p{
        font-size: 1.2rem;
        font-weight: 600;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.5rem;
    }
    form{
        .flex-input{
            display:flex;
            justify-content:center;
            gap: 1rem;
            input{
                width: 400px;
            }
        }
        label{
            display:flex;
            flex-direction: column;
            text-align:left;
            margin: 1rem 0;
            font-size: 1.2rem;
            input{
                padding:1.5rem;
                border-radius: 10px;
                border: 1px solid #c5c4c4;
            }
        }
        select{
            padding: 1.5rem;
            width: 100%;
            margin: 1rem 0;
            border-radius: 10px;
            border: 1px solid #c5c4c4;
            option{
                font-size: 1.2rem;
            }
        }
        button{
            font-size: 1.2rem;
            padding: 1.5rem;
            width: 100%;
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            border-radius: 10px;
            border: 1px solid #a2a0a0;
            cursor:pointer;
            
            img{
                width: 30px;
                height: 30px;
            }
            span{
                color: gray;
            }
        }
        a{
            text-decoration:none;
        }
        #color-but{
            background-color: #3E0563;
            border:none;
            a{
                color: #FFF;
            }
        }
        #or{
            display:flex;
            justify-content: center;
            align-items: center;
        span{
            height:3px;
            width: 50%;
            margin: 0 1rem;
            background-color: #DCDCDC;
        }
    }
    }
    @media screen and (max-width: 685px){
        .signup-cover{
            width: 100%;
            margin:0 2rem;
            padding:2rem 0;
        }
        form{
            padding: 1rem;
        }
    }
`

export default Login;