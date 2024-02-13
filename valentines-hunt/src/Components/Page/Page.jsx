import React from 'react';
import Cards from "../Cards/Cards";
import './Page.css'
function Page() {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-4">
                <div className="text-3xl font-bold text-[#FF6464]">
                    <i className="fas fa-heart"></i>URS
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Info</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Login</a></li>
                        <li><button className="bg-[#FF6464] text-white px-4 py-2 rounded hover:bg-[#ff7575]">Get started now</button></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold mb-4">Banters: Interactive Games for Couples</h1>
                    <p className="text-lg mb-8">Select a deck (any deck!) to get started. Each color represents a different category of questions.</p>
                    <div className="flex card-container">
                        <Cards color="#F9D5E5" imageSrc='/Images/1.jpg' index={1} />
                        <Cards color="#FEC8D8" imageSrc="/Images/2.png" index={2} />
                        <Cards color="#FEA3AA" imageSrc="/Images/3.png" index={3} />
                        <Cards color="#F8B88B" imageSrc="/Images/4.png" index={4} />
                        <Cards color="#FF9F80" imageSrc="/Images/5.png" index={5} />
                    </div>
                    <div className="text-center4 mt-8">
                        <div className="text-center">
                            <p className="text-sm">🔍</p>
                            <p className="text-lg font-semibold">The Joy of Conversation - Level 2</p>
                            <p className="text-sm">To play with anyone for connection</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Page;
