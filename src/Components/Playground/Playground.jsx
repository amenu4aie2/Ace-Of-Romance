import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const whatever = require('./data.json');

function Playground() {
    const [currentStreak, setcurrentStreak] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [cardrejected, setcardrejected] = useState(0);
    const [cardsAnswered, setcardsAnswered] = useState(0);
    const location = useLocation();
    const imagePath = '/Images/' + location.state.param1.index + '.png';

    useEffect(() => {
        var y = 'questions' + `${location.state.param1.index}`;
        setQuestions(whatever[y]);
        console.log(questions);
    }, []);

    return (
<div className="flex justify-between items-center h-screen">
            <div className="" style={{ paddingLeft: '200px' }}>
                <h1 className="text-3xl font-bold mb-4">The Joy of Conversation - Level 1</h1>
                <div className="mb-4">
                    <div className="text-gray-700 mb-1">
                        Cards Answered:
                        <div className="text-purple-600 text-2xl font-semibold">{cardsAnswered}</div>
                    </div>
                </div>
                <div className="border-t border-b border-gray-300 py-4 mb-4">
                    <div className="text-gray-700 mb-1">Current Streak:</div>
                    <div className="text-purple-600 text-2xl font-semibold">5</div>
                </div>
                <div className="">
                    <h2 className="text-lg font-semibold mb-2">How to play</h2>
                    <ul className="text-gray-700">
                        <li>Swipe card to the right after you both answer.</li>
                        <li>Swipe card to the left if you decide to skip.</li>
                    </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Share this game:</span>
                    <div className="flex space-x-2">
                        <i className="fab fa-facebook-f text-blue-600"></i>
                        <i className="fab fa-twitter text-blue-400"></i>
                        <i className="fas fa-envelope text-gray-600"></i>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Download this card</button>
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Buy different deck</button>
                </div>
            </div>
            <div className="absolute w-full max-w-lg" style={{ right: "15%", paddingLeft: '100px', top: '50%', transform: 'translateY(-50%)' }}>

                <div style={{ position: "relative", height: "590px", width: "429px" }}>
                    <img src={imagePath} alt="Stack of cards with a card facing front showing a question 'If you could visit any planet, which would you choose and why?'" className="rounded-lg shadow-lg" style={{ position: "absolute", top: '0', left: '0', width: '100%', height: '100%', transform: 'rotate(-5deg)' }}></img>
                    <img src={imagePath} alt="Stack of cards with a card facing front showing a question 'If you could visit any planet, which would you choose and why?'" className="rounded-lg shadow-lg" style={{ position: "absolute", top: '0', left: '0', width: '100%', height: '100%', transform: 'rotate(-10deg)' }} ></img>
                    <img src={imagePath} alt="Stack of cards with a card facing front showing a question 'If you could visit any planet, which would you choose and why?'" className="rounded-lg shadow-lg" style={{ position: "absolute", top: '0', left: '0', width: '100%', height: '100%' }}></img>
                    <img src="https://placehold.co/429x590/white/ffffff?text=+ \n&bold&fontsize=30" alt="Stack of cards with a card facing front showing a question 'If you could visit any planet, which would you choose and why?'" className="rounded-lg shadow-lg" style={{ position: "absolute", top: '0', left: '0', width: '100%', height: '100%' }}></img>
                    <div style={{ position: 'absolute', top: '10%', left: '20%', fontSize: '2em' }}>{cardsAnswered + cardrejected < 5 && questions[cardsAnswered + cardrejected]
                        ? questions[cardsAnswered + cardrejected]
                        : 'the end'}</div>
                </div>

                <div className="absolute bottom-0 right-0 flex space-x-2">
                    <button className="text-red-500" onClick={() => {
                        setcardrejected(cardrejected + 1)
                    }}><i className="fas fa-times-circle text-3xl"></i></button>
                    <button className="text-blue-500" onClick={() => {
                        setcardsAnswered(cardsAnswered + 1)
                    }}><i className="fas fa-check-circle text-3xl"></i></button>
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                <span className="text-gray-700">@ours</span>
            </div>
        </div>
    )
}

export default Playground;
