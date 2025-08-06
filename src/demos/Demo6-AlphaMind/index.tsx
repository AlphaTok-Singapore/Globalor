import React, { useState } from 'react';
import { AlphaMindLayout } from './components/AlphaMindLayout';
import { ChatMessage, User } from './types';

// 模拟用户数据
const mockUser: User = {
  id: '1',
  name: 'Alex Lei',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
};

export function AlphaMindPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      type: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // 模拟 AI 回复
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `我收到了您的消息："${message}"。这是一个很好的问题！我可以帮您解决这个问题。`,
        type: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleAction = (actionId: string) => {
    console.log('触发动作:', actionId);
    // 这里可以添加具体的动作处理逻辑
  };

  return (
    <AlphaMindLayout
      user={mockUser}
      messages={messages}
      onSendMessage={handleSendMessage}
      onAction={handleAction}
    />
  );
} 