import { useState } from 'react';
import { AlphaMindLayout } from './components/AlphaMindLayout';
import { ChatMessage, SystemStatus } from './types';

// Mock data for demonstration
const mockMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello! I\'m AlphaMind, your AI-powered assistant. How can I help you today?',
    type: 'assistant',
    timestamp: new Date(),
  },
  {
    id: '2',
    content: 'Can you help me with my marketing strategy?',
    type: 'user',
    timestamp: new Date(),
  },
  {
    id: '3',
    content: 'Of course! I\'d be happy to help you with your marketing strategy. Let me start by understanding your current situation. What type of business are you in, and what are your main marketing goals?',
    type: 'assistant',
    timestamp: new Date(),
  },
];

const mockSystemStatus: SystemStatus = {
  isOnline: true,
  lastUpdate: new Date(),
  version: '1.0.0',
};

export function AlphaMindPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [systemStatus] = useState<SystemStatus>(mockSystemStatus);

  const handleSendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `I received your message: "${content}". This is a simulated response from AlphaMind. In a real application, this would be processed by an AI model.`,
        type: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleAction = (actionId: string) => {
    console.log(`Action triggered: ${actionId}`);
    // Handle different actions here
    switch (actionId) {
      case 'search':
        alert('Search functionality would be implemented here');
        break;
      case 'spaces':
        alert('Spaces management would be implemented here');
        break;
      case 'help':
        alert('Help documentation would be shown here');
        break;
      case 'web':
        alert('Web browsing functionality would be implemented here');
        break;
      case 'attach':
        alert('File attachment functionality would be implemented here');
        break;
      case 'voice':
        alert('Voice input functionality would be implemented here');
        break;
      default:
        console.log(`Unknown action: ${actionId}`);
    }
  };

  return (
    <AlphaMindLayout
      messages={messages}
      systemStatus={systemStatus}
      onSendMessage={handleSendMessage}
      onAction={handleAction}
    />
  );
}

export default AlphaMindPage; 