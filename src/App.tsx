import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import TradeTokens from './components/TradeTokens';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4 mt-16">
                <Home />
                <About />
                <Services />
                <TradeTokens />
            </main>
            <Footer />
        </div>
    );
}

export default App;
