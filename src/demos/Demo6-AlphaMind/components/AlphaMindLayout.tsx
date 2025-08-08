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
  MoreVertical,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github
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
  onClearMessages?: () => void;
  onNewTask?: () => void;
  tasks?: Array<{
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: Date;
    isActive: boolean;
  }>;
  currentTaskId?: string | null;
}

function AlphaMindLayoutContent({ 
  messages = [], 
  user, 
  onSendMessage = () => {}, 
  onAction = () => {}, 
  onClearMessages = () => {}, 
  onNewTask = () => {},
  tasks = [],
  currentTaskId = null
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
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const handleOpenSettings = () => {
    setShowSettings(true);
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

  const handleNewTask = () => {
    // 清理消息并开始新任务
    onClearMessages();
    setSelectedAction(null);
    setWelcomeInputValue('');
    // 回到默认页面（chat 页面）
    setCurrentPage('chat');
    // 重置所有相关状态
    setIsPhoneFullscreen(false);
    setShowSettings(false);
    onNewTask();
  };

  const getSidebarWidth = () => {
    if (isTaskListCollapsed) return 'w-0';
    return 'w-80';
  };

  const getSidebarStyle = () => {
    if (isTaskListCollapsed) {
      return 'fixed left-0 top-0 h-full transform -translate-x-full transition-transform duration-300 ease-in-out z-30';
    }
    return 'fixed left-0 top-0 h-full transition-all duration-300 ease-in-out z-30';
  };

  const getCollapsedSidebarStyle = () => {
    if (isTaskListCollapsed && isHovering) {
      return 'fixed left-4 top-4 h-[calc(100vh-2rem)] w-80 bg-sidebar border border-sidebar-border rounded-xl shadow-2xl transition-all duration-300 ease-in-out z-40 transform translate-x-0';
    }
    return 'fixed left-4 top-4 h-[calc(100vh-2rem)] w-80 bg-sidebar border border-sidebar-border rounded-xl shadow-2xl transition-all duration-300 ease-in-out z-40 transform -translate-x-full';
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
              <div className="flex items-center gap-6 max-w-4xl">
                <Button 
                  variant={selectedAction === 'linkedin' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'linkedin' 
                      ? 'bg-blue-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('linkedin')}
                >
                  <Linkedin className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedAction === 'facebook' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'facebook' 
                      ? 'bg-blue-700 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('facebook')}
                >
                  <Facebook className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedAction === 'instagram' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'instagram' 
                      ? 'bg-pink-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('instagram')}
                >
                  <Instagram className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedAction === 'twitter' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'twitter' 
                      ? 'bg-blue-400 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('twitter')}
                >
                  <Twitter className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedAction === 'youtube' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'youtube' 
                      ? 'bg-red-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('youtube')}
                >
                  <Youtube className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedAction === 'github' ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedAction === 'github' 
                      ? 'bg-gray-700 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('github')}
                >
                  <Github className="h-8 w-8" />
                </Button>
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
              title="Fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedAction(null)}
              className="h-8 w-8 p-0 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              title="Close"
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
        <div className="relative w-[500px] h-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden">
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
            title="Close Fullscreen"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* 鼠标悬停区域 - 用于检测鼠标进入 */}
      <div 
        className="fixed left-0 top-0 w-4 h-full z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 展开状态的 Sidebar */}
      {!isTaskListCollapsed && (
        <div className={`${getSidebarWidth()} ${getSidebarStyle()}`} ref={sidebarRef}>
          <Sidebar
            isCollapsed={isTaskListCollapsed}
            onSelectTask={handleTaskSelect}
            currentPage={currentPage}
            onNavigate={handleNavigate}
            messages={messages}
            onToggleCollapse={handleToggleTaskList}
            onNewTask={handleNewTask}
            onOpenSettings={handleOpenSettings}
            tasks={tasks}
            currentTaskId={currentTaskId}
          />
          <div className="absolute left-4 top-4 z-10">
            <Button variant="outline" size="sm" onClick={handleToggleTaskList} className="h-8 w-8 p-0 rounded-full bg-background border-2 border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110" title="Collapse Sidebar">
              <DoorClosed className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* 收缩状态的 Sidebar - 带圆角和间距 */}
      {isTaskListCollapsed && (
        <div 
          className={getCollapsedSidebarStyle()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sidebarRef}
        >
          <Sidebar
            isCollapsed={false}
            onSelectTask={handleTaskSelect}
            currentPage={currentPage}
            onNavigate={handleNavigate}
            messages={messages}
            onToggleCollapse={handleToggleTaskList}
            onNewTask={handleNewTask}
            onOpenSettings={handleOpenSettings}
            tasks={tasks}
            currentTaskId={currentTaskId}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col h-full bg-background">
        {/* Top header - Fixed height */}
        <div className="flex-shrink-0 h-12">
          <TopHeader user={user} isSidebarCollapsed={isTaskListCollapsed} />
        </div>

        {/* 公司 Logo - 只在 sidebar 打开或弹出时显示 */}
        {(!isTaskListCollapsed || isHovering) && (
          <div className="flex-shrink-0 p-4 bg-background">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">AlphaMind</div>
                <div className="text-sm text-muted-foreground">AI Assistant Platform</div>
              </div>
            </div>
          </div>
        )}

        {/* Page content - Split layout when action selected */}
        {selectedAction ? (
          <div className="flex-1 flex">
            {/* Left chat area - 确保不被 sidebar 遮挡 */}
            <div className={`flex-1 flex flex-col ${(!isTaskListCollapsed || isHovering) ? 'ml-80' : ''}`}>
              {renderPageContent()}
            </div>
            {/* Right phone display area */}
            {renderPhoneDisplay()}
          </div>
        ) : (
          <div className={`flex-1 ${(!isTaskListCollapsed || isHovering) ? 'ml-80' : ''}`}>
            {renderPageContent()}
          </div>
        )}
      </div>

      {/* Floating expand button - 只在收缩且未悬停时显示 */}
      {isTaskListCollapsed && !isHovering && (
        <div className="fixed left-4 top-4 z-20">
          <Button variant="outline" size="sm" onClick={handleToggleTaskList} className="h-8 w-8 p-0 rounded-full bg-background border-2 border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110" title="Expand Sidebar">
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