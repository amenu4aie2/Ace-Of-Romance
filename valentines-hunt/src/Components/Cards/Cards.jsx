import React from 'react'
import  '../Cards/Cards.css'
function Cards({ color, imageSrc, index }) {
    const position = {
        top: 0,
        left: `${80 + index * 200}px` // Adjust the value to control the horizontal spacing between cards
    };
    // const handleMouseHover={
        
    // }

    return (
        <div style={{ ...position}} className="relative">
            <a href="#" className="card w-32 h-48 rounded-md overflow-hidden shadow-lg absolute top-0 left-0">
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} />
            </a>
            <div className="card w-32 h-48 rounded-md overflow-hidden shadow-lg absolute top-0 left-0" style={{ zIndex: -1,top:'10px',left:'10px' }}>
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} style={{top:100,left:'10px' }} />
            </div>
        </div>
    );
}

export default Cards
