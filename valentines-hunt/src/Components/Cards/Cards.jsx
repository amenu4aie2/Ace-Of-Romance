import React from 'react'
import  '../Cards/Cards.css'
import { useNavigate } from 'react-router-dom';
function Cards({ color, imageSrc, index }) {
    const position = {
        top: 0,
        left: `${80 + index * 200}px` // Adjust the value to control the horizontal spacing between cards
    };
    
    // const handleMouseHover={
        
    // }
    const navigate = useNavigate();
    return (
        <div style={{ ...position}} className="relative">
            <div onClick={()=>{navigate('/chuckles', { state: { param1: {index}}})}} className="card w-32 h-48 rounded-md overflow-hidden shadow-lg absolute top-0 left-0">
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} />
            </div>
            <div className="card w-32 h-48 rounded-md overflow-hidden shadow-lg absolute top-0 left-0" style={{ zIndex: -1,top:'10px',left:'10px' }}>
                <img src={imageSrc} alt={`Clickable placeholder image with background color ${color}, text 'URS' in bold and font size 30.`} style={{top:100,left:'10px' }} />
            </div>
        </div>
    );
}

export default Cards
