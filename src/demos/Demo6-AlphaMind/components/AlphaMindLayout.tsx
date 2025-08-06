import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { 
  DoorOpen, 
  DoorClosed, 
  ChevronUp,
  Maximize2,
  X,
  Share,
  Edit,
  Heart,
  Trash2,
  MoreVertical
} from 'lucide-react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { LanguageDialog } from './LanguageDialog';
import { TopHeader } from './TopHeader';
import { Sidebar } from './Sidebar';
import { ChatInterface } from './ChatInterface';
import { InputArea } from './InputArea';
import { ActionButtons } from './ActionButtons';
import { SettingsPage } from './SettingsPage';
import { AgentsPage } from './AgentsPage';
import { KnowledgeBasePage } from './KnowledgeBasePage';
import { MaterialsPage } from './MaterialsPage';
import { User, ChatMessage } from '../types';

interface AlphaMindLayoutProps {
  messages?: ChatMessage[];
  user?: User;
  onSendMessage?: (message: string) => void;
  onAction?: (actionId: string) => void;
}

function AlphaMindLayoutContent({ 
  messages = [], 
  user, 
  onSendMessage = () => {}, 
  onAction = () => {} 
}: AlphaMindLayoutProps) {
  const { t, isLanguageDialogVisible, hideLanguageDialog, suggestedLanguage, setLanguage } = useLanguage();
  const [isTaskListCollapsed, setIsTaskListCollapsed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [welcomeInputValue, setWelcomeInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState('chat');
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isPhoneFullscreen, setIsPhoneFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleTaskList = () => {
    setIsTaskListCollapsed(!isTaskListCollapsed);
  };

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 300);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleTaskSelect = (taskId: string) => {
    // 处理任务选择
    console.log('Selected task:', taskId);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleAction = (actionId: string) => {
    setSelectedAction(actionId);
    onAction(actionId);
  };

  const handleSwitchLanguage = (language: string) => {
    setLanguage(language as any);
  };

  const handleWelcomeSend = () => {
    if (welcomeInputValue.trim()) {
      onSendMessage(welcomeInputValue);
      setWelcomeInputValue('');
    }
  };

  const handleWelcomeKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleWelcomeSend();
    }
  };

  const getSidebarWidth = () => {
    if (isTaskListCollapsed) return 'w-0';
    return 'w-80';
  };

  const getSidebarStyle = () => {
    if (isTaskListCollapsed) {
      return 'fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transform -translate-x-full transition-transform duration-300 ease-in-out z-30';
    }
    return 'fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out z-30';
  };

  const renderPageContent = () => {
    if (currentPage === 'agents') return <AgentsPage />;
    if (currentPage === 'knowledge-base') return <KnowledgeBasePage />;
    if (currentPage === 'materials') return <MaterialsPage />;

    if (messages.length > 0) {
      return (
        <>
          <div className="flex-1 min-h-0">
            <ChatInterface messages={messages} isSplitLayout={!!selectedAction} />
          </div>
          <div className="flex-shrink-0">
            <InputArea onSendMessage={onSendMessage} />
          </div>
          <div className="flex-shrink-0">
            <ActionButtons onAction={handleAction} />
          </div>
        </>
      );
    } else {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-8 max-w-4xl mb-12">
            <h1 className="text-6xl font-bold text-foreground">{t.chat.welcome}</h1>
            <p className="text-muted-foreground text-2xl">{t.chat.welcomeSubtitle}</p>
          </div>
          <div className="w-full max-w-4xl space-y-6">
            <div className="flex items-center justify-center gap-3 p-8 bg-background">
              <div className="relative max-w-2xl w-full">
                <input
                  type="text"
                  value={welcomeInputValue}
                  onChange={(e) => setWelcomeInputValue(e.target.value)}
                  onKeyPress={handleWelcomeKeyPress}
                  placeholder={t.chat.inputPlaceholder}
                  className="w-full h-16 text-lg px-6 py-4 pr-14 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button
                  onClick={handleWelcomeSend}
                  disabled={!welcomeInputValue.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 px-8 py-6 bg-background">
              <div className="flex items-center gap-3 max-w-2xl">
                <Button variant="outline" size="sm" onClick={() => handleAction('image')} className="h-11 px-4 gap-2"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span className="text-base">{t.actions.image}</span></Button>
                <Button variant="outline" size="sm" onClick={() => handleAction('slides')} className="h-11 px-4 gap-2"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span className="text-base">{t.actions.slides}</span></Button>
                <Button variant="outline" size="sm" onClick={() => handleAction('webpage')} className="h-11 px-4 gap-2"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" /></svg><span className="text-base">{t.actions.webpage}</span></Button>
                <Button variant="outline" size="sm" onClick={() => handleAction('spreadsheet')} className="h-11 px-4 gap-2 relative"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg><span className="text-base">{t.actions.spreadsheet}</span><span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1 rounded">{t.actions.new}</span></Button>
                <Button variant="outline" size="sm" onClick={() => handleAction('visualization')} className="h-11 px-4 gap-2"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg><span className="text-base">{t.actions.visualization}</span></Button>
                <Button variant="outline" size="sm" onClick={() => handleAction('more')} className="h-11 px-4 gap-2"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg><span className="text-base">{t.actions.more}</span></Button>
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <span className="text-sm">Explore use cases</span>
                <ChevronUp className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderPhoneDisplay = () => {
    if (!selectedAction) return null;

    const getSocialMediaContent = (actionId: string) => {
      const content = {
        image: {
          title: "Instagram Post",
          content: "✨ Just created this amazing image with AlphaMind! The AI-powered design is absolutely stunning. #AI #Design #Innovation",
          likes: "2.4k",
          comments: "156",
          shares: "89"
        },
        slides: {
          title: "LinkedIn Post",
          content: "📊 Excited to share this presentation created with AlphaMind! The AI helped me structure this perfectly. #Professional #AI #Presentation",
          likes: "1.2k",
          comments: "78",
          shares: "45"
        },
        webpage: {
          title: "Twitter Post",
          content: "🌐 Check out this webpage I created with AlphaMind! The AI made web development so much easier. #WebDev #AI #Innovation",
          likes: "3.1k",
          comments: "234",
          shares: "167"
        },
        spreadsheet: {
          title: "Facebook Post",
          content: "📈 Amazing spreadsheet created with AlphaMind! The AI helped me organize this data perfectly. #Data #AI #Productivity",
          likes: "1.8k",
          comments: "92",
          shares: "56"
        },
        visualization: {
          title: "YouTube Post",
          content: "📊 This visualization was created with AlphaMind! The AI made data visualization so much easier. #DataViz #AI #Analytics",
          likes: "4.2k",
          comments: "312",
          shares: "198"
        }
      };
      return content[actionId as keyof typeof content] || content.image;
    };

    const content = getSocialMediaContent(selectedAction);

    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="relative">
          <div className="w-128 h-192 bg-gray-900 rounded-3xl p-4 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Phone Header */}
              <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium">9:41</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Social Media Content */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">AlphaMind</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm font-medium mb-2">{content.title}</div>
                  <div className="text-sm text-gray-700">{content.content}</div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>❤️ {content.likes}</span>
                    <span>💬 {content.comments}</span>
                    <span>🔄 {content.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="absolute -top-4 -right-4 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPhoneFullscreen(true)}
              className="h-8 w-8 p-0 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              title="全屏显示"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedAction(null)}
              className="h-8 w-8 p-0 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              title="关闭显示"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // 全屏手机显示
  const renderFullscreenPhone = () => {
    if (!isPhoneFullscreen || !selectedAction) return null;

    const getSocialMediaContent = (actionId: string) => {
      const content = {
        image: {
          title: "Instagram Post",
          content: "✨ Just created this amazing image with AlphaMind! The AI-powered design is absolutely stunning. #AI #Design #Innovation",
          likes: "2.4k",
          comments: "156",
          shares: "89"
        },
        slides: {
          title: "LinkedIn Post",
          content: "📊 Excited to share this presentation created with AlphaMind! The AI helped me structure this perfectly. #Professional #AI #Presentation",
          likes: "1.2k",
          comments: "78",
          shares: "45"
        },
        webpage: {
          title: "Twitter Post",
          content: "🌐 Check out this webpage I created with AlphaMind! The AI made web development so much easier. #WebDev #AI #Innovation",
          likes: "3.1k",
          comments: "234",
          shares: "167"
        },
        spreadsheet: {
          title: "Facebook Post",
          content: "📈 Amazing spreadsheet created with AlphaMind! The AI helped me organize this data perfectly. #Data #AI #Productivity",
          likes: "1.8k",
          comments: "92",
          shares: "56"
        },
        visualization: {
          title: "YouTube Post",
          content: "📊 This visualization was created with AlphaMind! The AI made data visualization so much easier. #DataViz #AI #Analytics",
          likes: "4.2k",
          comments: "312",
          shares: "198"
        }
      };
      return content[selectedAction as keyof typeof content] || content.image;
    };

    const content = getSocialMediaContent(selectedAction);

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="relative w-96 h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Phone Header */}
          <div className="bg-gray-100 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">9:41</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>

          {/* Social Media Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <div>
                <div className="text-lg font-semibold">AlphaMind</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-lg font-medium mb-3">{content.title}</div>
              <div className="text-base text-gray-700 leading-relaxed">{content.content}</div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-6">
                <span>❤️ {content.likes}</span>
                <span>💬 {content.comments}</span>
                <span>🔄 {content.shares}</span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPhoneFullscreen(false)}
            className="absolute top-4 right-4 h-8 w-8 p-0 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            title="关闭全屏"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Task List Sidebar */}
      <div className={`${getSidebarWidth()} ${getSidebarStyle()}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Sidebar
          isCollapsed={isTaskListCollapsed}
          onSelectTask={handleTaskSelect}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          messages={messages}
        />
        {!isTaskListCollapsed && (
          <div className="absolute left-4 top-4 z-10">
            <Button variant="outline" size="sm" onClick={handleToggleTaskList} className="h-8 w-8 p-0 rounded-full bg-background border-2 border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110" title="收起侧边栏">
              <DoorClosed className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full">
        {/* Top header - Fixed height */}
        <div className="flex-shrink-0 h-16">
          <TopHeader user={user} isSidebarCollapsed={isTaskListCollapsed} />
        </div>

        {/* Page content - Split layout when action selected */}
        {selectedAction ? (
          <div className="flex-1 flex">
            {/* Left chat area */}
            <div className="flex-1 flex flex-col">
              {renderPageContent()}
            </div>
            {/* Right phone display area */}
            {renderPhoneDisplay()}
          </div>
        ) : (
          renderPageContent()
        )}
      </div>

      {/* Floating expand button */}
      {isTaskListCollapsed && !isHovering && (
        <div className="fixed left-4 top-4 z-20">
          <Button variant="outline" size="sm" onClick={handleToggleTaskList} className="h-8 w-8 p-0 rounded-full bg-background border-2 border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110" title="展开侧边栏">
            <DoorOpen className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Settings Dialog */}
      {showSettings && (<SettingsPage onClose={handleCloseSettings} />)}

      {/* Language Dialog */}
      <LanguageDialog
        isVisible={isLanguageDialogVisible}
        onClose={hideLanguageDialog}
        onSwitchLanguage={handleSwitchLanguage}
        suggestedLanguage={suggestedLanguage}
      />

      {/* Fullscreen Phone Display */}
      {renderFullscreenPhone()}
    </div>
  );
}

export function AlphaMindLayout(props: AlphaMindLayoutProps) {
  return (
    <LanguageProvider>
      <AlphaMindLayoutContent {...props} />
    </LanguageProvider>
  );
} 