import React from 'react';
import './Main.css';
import CircleImage from '../CircleImage/CircleImage';
const Main = () => {
  return (
    <>
    <div className='center-piece'>
        <CircleImage src="icons/email.svg" alt="diego-padilla-picture" size='18vw' />
        <h1 className='name' style={{ letterSpacing: -1 }}>Diego Padilla</h1>

    </div>
    </>
  );
};

export default Main;