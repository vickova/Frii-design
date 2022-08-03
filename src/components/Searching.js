import React, {useState} from 'react';
import Search from '../img/Vector (8).png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Searching = ({search, setSearch, votings}) => {
    const [inputs, setInput] = useState('');
    const InputHandler = (e)=>{
        setInput(e.target.value);
    }
    const SearchHandler = ()=>{
        if(inputs){
            const searched = votings.filter((voted) =>voted.name.toLowerCase().includes(inputs)
              || voted.category.toLowerCase().includes(inputs)
            )
            setInput('');
          setSearch(searched);
          }
    }
  return (
    <SearchCover>
        <div className='search-cover'>
            <div className='search-cover-inner'>
                <input value={inputs} type="text" placeholder="Nominee's Name, Nominee's Category" onChange={InputHandler}/>
                <img src={Search} alt="search-icon"/>
            </div>
            <Link to='/votingcategories/voting'><button onClick={SearchHandler}>Search</button></Link>
        </div>
    </SearchCover>
  )
}

const SearchCover = styled.div`
    text-align:center;
    margin: 2rem 0;
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
            cursor:pointer;
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
                height: 30px;
                input{
                    width: 90%;
                    padding: .6rem 1.5rem;
                }
                img{
                    height: 15px;
                    height: 15px;
                    bottom: -5px;
                }
            }
            button{
            font-size: .8rem;
        }
        }
    }
`
export default Searching;