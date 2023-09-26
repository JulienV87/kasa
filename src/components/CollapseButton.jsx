import React, { useState } from 'react';

export default function CollapseButton({title,description}) {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    }
  return (
    <div className='test'>
       <div className='collapse-container'>
        <button className='collapse-toggle' onClick={toggleCollapse}>{title}
        {isOpen ? ' ⬆️' : ' ⬇️'}
      </button>
      {isOpen && (
        <div className='collapse-text'>
          <p>{description}</p>
        </div>
      )}
      </div>
    </div>
  )
}
