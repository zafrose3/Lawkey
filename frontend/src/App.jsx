import React from 'react';
import MainLayout from './layouts/MainLayout';
import ChatInterface from './components/chat/ChatInterface';

function App() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-secondary">
          Find the Law. Know Your Rights.
        </h1>
        <ChatInterface />
      </div>
    </MainLayout>
  );
}

export default App;
