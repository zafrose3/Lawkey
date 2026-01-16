import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} LawKey. Open Source Project.
                </p>
                <p className="text-center text-xs text-red-500 mt-2">
                    ⚠️ DISCLAIMER: Informational use only. Not legal advice.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
