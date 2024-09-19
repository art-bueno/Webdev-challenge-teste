import React from 'react';
import '../Card/card.css';

const Card = ({ title, content, buttons, buttonPlus }) => {
  return (
    <div className="secao-apostas">
      <div className="container-card">
        <div className="card">
          <h2 className="card-title">{title}</h2>
          <p className="card-content">{content}</p>
          <div className="card-buttons">
            {buttons.map((name, index) => (
              <button className='btn-card' key={index}>{name}</button>
            ))}
          </div>
          <div className="card_plus_button">
            {buttonPlus.map((name, index) => (
                <button className='btn-plus' key={index}>{name}</button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

