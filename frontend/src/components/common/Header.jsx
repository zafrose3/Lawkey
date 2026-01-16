import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-primary">LawKey ⚖️</span>
                        <span className="ml-2 text-sm text-gray-500 hidden sm:block">Legal Awareness AI</span>
                    </div>
                    <div>
                        <a href="https://github.com/StartYourProject/LawKey" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
