import { ChatMessage } from '../types';
import { Typography } from '@/components/ui/base/typography';
import { Avatar } from '@/components/ui/base/avatar';
import { BlockLayout } from '@/components/ui/layout/block-layout';
import { useEffect, useRef } from 'react';

interface ChatInterfaceProps {
  messages: ChatMessage[];
  isSplitLayout?: boolean; // 是否在分栏布局中
}

export function ChatInterface({ messages, isSplitLayout = false }: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // 自动滚动到最新消息
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 当消息更新时自动滚动
  useEffect(() => {
    if (messages.length > 0) {
      // 延迟一点确保DOM更新完成
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages]);

  // 如果没有消息，返回空内容
  if (messages.length === 0) {
    return null;
  }

  // 计算聊天容器高度
  const getChatContainerHeight = () => {
    if (isSplitLayout) {
      // 分栏布局：减去顶部栏(64px)、输入框(120px)、操作按钮(100px)
      return 'calc(100vh - 64px - 120px - 100px)';
    } else {
      // 正常布局：减去顶部栏(64px)、输入框(120px)、操作按钮(100px)
      return 'calc(100vh - 64px - 120px - 100px)';
    }
  };

  // 有消息时显示聊天界面
  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* 聊天消息容器 - 固定高度，可滚动 */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-8"
        style={{ 
          height: getChatContainerHeight(),
          maxHeight: getChatContainerHeight()
        }}
      >
        <div className="max-w-5xl mx-auto space-y-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-6 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.type === 'assistant' && (
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  {/* AI Assistant face */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Eyes */}
                    <div className="flex gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    {/* Smile */}
                    <div className="w-2 h-0.5 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-lg p-6 ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                <Typography variant="body" className="text-lg">
                  {message.content}
                </Typography>
              </div>
              {message.type === 'user' && (
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  {/* User face */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Eyes */}
                    <div className="flex gap-1 mb-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    {/* Smile */}
                    <div className="w-2 h-0.5 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {/* 用于自动滚动的空元素 */}
          <div ref={messagesEndRef} style={{ height: '1px' }} />
        </div>
      </div>
    </div>
  );
} 