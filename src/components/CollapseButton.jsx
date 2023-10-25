import React, { useState } from 'react';
import arrow from '../assets/arrow_up.png'

export default function CollapseButton({ title, description }) {
  const [open, setOpen] = React.useState(false);

  const onToggleOpen = () => {
    setOpen(!open);
  };

  const formatedDescription = Array.isArray(description);

  return (
    <div className={`accordion ${open ? "open" : ""}`}>
      <div className="title">
        <div className="full">{title}</div>
        <div className='collapse-button' onClick={onToggleOpen}><img 
        className={`${open ? 'arrow arrow_up' : 'arrow arrow_down'}`} 
        src={arrow} 
        alt="show content" 
        /></div>
      </div>
      <div className="description">
        <div className="wrapper">
          <div>
            {formatedDescription
              ? description.map((item) => {
                  return (
                    <>
                      {item}
                      <br />
                    </>
                  );
                })
              : description}
          </div>
        </div>
      </div>
    </div>
  );
};
