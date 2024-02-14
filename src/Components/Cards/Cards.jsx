import React, { useState } from 'react';
import '../Cards/Cards.css';
import { useNavigate } from 'react-router-dom';

function Cards({ color, imageSrc, index, handleCardHover }) {
    const position = {
        marginTop: `${index >= 3 ? (index) * 60 : (5 - index + 1) * 60}px`,
        left: `${80 + index * 200}px` // Adjust the value to control the horizontal spacing between cards
    };

    const navigate = useNavigate();

    const handleMouseEnter = () => {
        handleCardHover(index);
    };

    const handleMouseLeave = () => {
        handleCardHover(null);
    };

    const handleClick = () => {
        navigate('/chuckles', { state: { param1: { index } } });
    };

    return (
        <div className="card-container relative">
            <div
                className="card rounded-md overflow-hidden shadow-lg"
                style={position}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} />
            </div>
            <div className="card rounded-md overflow-hidden shadow-lg absolute " style={{ ...position, zIndex: -1, top: '10px', left: '10px' }}>
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} style={{ top: 100, left: '10px' }} />
            </div>
        </div>
    );
}

export default Cards;
