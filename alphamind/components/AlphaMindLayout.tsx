import { useState } from 'react';
import { PageContainer } from '@/components/ui/layout/page-container';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { ChatInterface } from './ChatInterface';
import { InputArea } from './InputArea';
import { ActionButtons } from './ActionButtons';
import { ChatMessage, SystemStatus } from '../types';

interface AlphaMindLayoutProps {
  messages?: ChatMessage[];
  systemStatus?: SystemStatus;
  onSendMessage?: (message: string) => void;
  onAction?: (actionId: string) => void;
}

export function AlphaMindLayout({
  messages = [],
  systemStatus = { isOnline: true, lastUpdate: new Date(), version: '1.0.0' },
  onSendMessage = () => {},
  onAction = () => {},
}: AlphaMindLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <PageContainer variant="full" className="h-screen">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
          <Sidebar
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={handleToggleSidebar}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top header */}
          <TopHeader
            systemStatus={systemStatus}
            onToggleSidebar={handleToggleSidebar}
          />

          {/* Chat interface */}
          <ChatInterface messages={messages} />

          {/* Action buttons */}
          <div className="px-4 py-2 border-t border-border bg-background">
            <ActionButtons onAction={onAction} />
          </div>

          {/* Input area */}
          <InputArea onSendMessage={onSendMessage} />
        </div>
      </div>
    </PageContainer>
  );
} 