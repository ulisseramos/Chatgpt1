
import React from 'react';
import { Bot } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">
            ChatGPT PRO
          </h1>
          <p className="text-xs text-gray-400">Acesso Premium</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
