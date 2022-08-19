import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from '../img/menu.svg';
import Logo from '../img/logo.svg';
import Close from '../img/close.svg';
import { Link } from 'react-router-dom';

const Navbar = ({isLoggedIn, LogIn, LogOut}) => {
    const [menu, setMenu] = useState(false);
  return (
    <NavbarStyle menu={menu}>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className='navbar'>
            <img className='menu' src={Menu} alt="menu-button"  onClick={()=> setMenu(!menu)}/>
            <div className='nav-lists'>
                <img className='exit' src={Close} alt="exit" onClick={()=> setMenu(!menu)}/>
                <ul>
                    <li><Link to='/votingcategories'>Categories</Link></li>
                    <li><Link to='/pasteditions'>Past editions</Link></li>
                    <li><Link to='/futureedition'>Future editions</Link></li>
                    <li><Link to='/connectedawards'>About us</Link></li>
                    <li><Link to='/donate'>Make a donation</Link></li>
                </ul>
                <ul className='special-lists'>
                    {
                    isLoggedIn?
                    (<li onClick={LogOut}><Link to='/'>Log Out</Link></li>):(<li><Link to='/login'>Log In</Link></li>)
                    }
                    <li><Link to='/signup'>Create Account</Link></li>
                </ul>
            </div>
        </div>
    </NavbarStyle>
  )
}

const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin:1rem 2rem;
    gap:1rem;
    .logo{
        
    }
    h3{
        font-size: 1rem;
    }
    
    ul{
        display: flex;
        justify-content: space-around;
        li{
            text-decoration: none;
            margin:.5rem 1rem;
            list-style:none;
            padding: .5rem;
            margin: .8rem;
            a{
                text-decoration:none;
                font-size: 1.2rem;
                color: #272626;
            }
        }
    }
    .navbar{
        .nav-lists{
            display:flex;
        }
    
        .menu{
            display:none;
        }
        .exit{
            display:none;
        }
        .special-lists{
            li:first-child{
                background-color:#EEE8F2;
                padding: .5rem 1rem;
                border-radius: 4px;
            }
            li:last-child{
                background-color: #3E0563;
                padding: .5rem 1rem;
                border-radius: 4px;
                a{
                    color: #FFF;
                }
            }
        }
    }
    @media screen and (max-width: 685px) {
        .navbar{
        .nav-lists{
            display:${({menu})=> menu? 'block': 'none'};
            position: ${({menu})=> menu? 'fixed': 'static'};
            background-color:#FFF;
            width: 100%;
            z-index:2;
            height: 100%;
            left:0;
            .exit{
                margin: 1rem;
            }
            ul{
                display:block;
                padding:0;
            }
            .special-lists{
                li:first-child, li:last-child{
                background-color: transparent;
                padding:0;
                color: #000;
                a{
                    color:#000;
                }
                }
            }
            
        }
        .menu{
            display:${({menu})=> menu? 'none': 'block'};
        }
        .exit{
            display:block;
        }
        }
        ul{
            li{
                border: 1px solid gray;
            }
        }
    }
`
export default Navbar