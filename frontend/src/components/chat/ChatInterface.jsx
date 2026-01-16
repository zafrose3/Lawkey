import React, { useState } from 'react';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm LawKey. Briefly describe your situation, and I'll find the relevant laws for you.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock response for now
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "I'm still learning (Backend not connected yet). But that sounds like a serious issue.",
                sender: 'bot'
            }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-[600px] border rounded-lg bg-gray-50 shadow-sm overflow-hidden">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.sender === 'user'
                                ? 'bg-primary text-white rounded-br-none'
                                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                            }`}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Describe your situation..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
