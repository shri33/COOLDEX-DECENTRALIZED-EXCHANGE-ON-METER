import React from 'react';

const TradeTokens: React.FC = () => {
    return (
        <section id="trade-tokens" className="mb-8">
            <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">Trade Tokens</h2>
            <div className="flex space-x-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Buy Token
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Sell Token
                </button>
            </div>
        </section>
    );
}

export default TradeTokens;
