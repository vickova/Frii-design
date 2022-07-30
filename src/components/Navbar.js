import React, {useState} from 'react';
import styled from 'styled-components';
import Menu from '../img/menu.svg';
import Logo from '../img/logo.svg';
import Close from '../img/close.svg';

const Navbar = () => {
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
                    <li>Categories</li>
                    <li>Past editions</li>
                    <li>Future editions</li>
                    <li>About us</li>
                    <li>Make a donation</li>
                </ul>
                <ul className='special-lists'>
                    <li>Log In</li>
                    <li>Create Account</li>
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
            font-size: 1.2rem;
            padding: .5rem;
            margin: .8rem;
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
                color:#FFF;
                border-radius: 4px;
            }
        }
    }
    @media screen and (max-width: 685px) {
        .navbar{
        .nav-lists{
            display:${({menu})=> menu? 'block': 'none'};
            width: 100%;
            height: 100%;
            ul{
                display:block;
            }
            .special-lists{
                li:first-child, li:last-child{
                background-color: transparent;
                padding:0;
                color: #000;
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
                border-bottom: 1px solid gray;
            }
        }
    }
`
export default Navbar