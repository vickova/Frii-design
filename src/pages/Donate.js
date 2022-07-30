import React from 'react';
import Classroom from '../img/classroom.png';
import Notebook  from '../img/notebook.png';
import styled from 'styled-components';

const Donate = () => {
  return (
    <DonateStyle>
        <h2>Make a Donation</h2>
        <h3>Make a contribution to the growth of technology in Africa</h3>
        <div className='donate-cover'>
            <div>
                <img src={Classroom} alt="class-donation" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='notebook'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img src={Notebook} alt="notebook" />
            </div>
        </div>
    </DonateStyle>
  )
}

const DonateStyle = styled.div`
h2{
    font-size: 2.5rem;
    margin: .5rem 0;
}
h3{
    font-size: 2rem;
    color:#808080;

}
 .donate-cover{
     display: flex;
     justify-content: center;
     margin: 3rem 5rem;
     gap: 3rem;
     div{
         width: 50%;
     }
     p{
         text-align: left;
         margin: 1.5rem 0;
         font-size: 1rem;
     }
     img{
         width: 100%;
     }
 }
 @media screen and (max-width: 685px){
     h2{
         font-size: 2rem;
     }
     h3{
         font-size: 1rem;
     }
     .donate-cover{
         display:block;
         margin: 2rem;
         div{
             width: 100%;
         }
         .notebook{
             display: flex;
             flex-direction: column-reverse;
         }
     }
 }
`
export default Donate