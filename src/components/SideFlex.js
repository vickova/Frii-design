import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SideFlex = ({connectedheader, buttonText}) => {
  return (
    <SideFlexStyle>
        <div className='connected-cover'>
            <h2>{connectedheader}</h2>
            <div></div>
        </div>
        <p>The connected is.....It is a long established fact that 
                a reader will be distracted by the readable content 
                of a page when looking at its layout. The point of 
                using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable English.</p>
        <Button buttonText={buttonText}/>
    </SideFlexStyle>
  )
}

const SideFlexStyle= styled.div`
    width: 50%;
    margin: 1.5rem;
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
`
export default SideFlex