import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Avatar = ({vote, i}) => {
    let [counts, setCounts] = useState(1);
    const Decrease = ()=>{
        if( counts>=2){
        setCounts(counts - 1);
        }
        else{
            setCounts(counts);
        }
    }
  return (
    <AvatarStyle className='voting-card'>
        <div className='avatar-cover'>
        <div className='avatar'>

        </div>
        </div>
        <h3>{vote.name}</h3>
        <p>{vote.votes} votes</p>
        <div className='vote-box'>
            <p><span onClick={Decrease}>-</span> {counts} <span onClick={()=> setCounts(counts + 1)}>+</span></p>
            <Link to='/power'><button>Vote</button></Link>
        </div>
    </AvatarStyle>
  )
}

const AvatarStyle = styled.div`
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
                        cursor:pointer;
                    }
                }
                button{
                    padding: 1.3rem 2rem;
                    background-color: #3E0563;
                    color: #FFFF;
                    border:none;
                    cursor:pointer;
                }
        }
`
export default Avatar