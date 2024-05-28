import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">CoolDEX</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
