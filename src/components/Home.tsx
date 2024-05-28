import React from 'react';

const Home: React.FC = () => {
    return (
        <section id="home" className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to CoolDEX</h2>
            <p className="text-lg mb-4 animate-slide-in">The coolest decentralized exchange platform.</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-bounce">Get Started</button>
        </section>
    );
}

export default Home;
