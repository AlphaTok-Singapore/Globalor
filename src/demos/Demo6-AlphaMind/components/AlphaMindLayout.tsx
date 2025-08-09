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
  Github,
  ChevronLeft,
  ChevronRight
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
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState<number>(0);
  const [isPhoneFullscreen, setIsPhoneFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');
  const [youtubeVideoId, setYoutubeVideoId] = useState<string>('');
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
    setSelectedPlatforms((prev) => {
      const willSelect = !prev.includes(actionId);
      const next = willSelect ? [...prev, actionId] : prev.filter((p) => p !== actionId);
      if (next.length === 0) {
        setSelectedAction(null);
        setCurrentPlatformIndex(0);
      } else {
        const idx = willSelect ? next.indexOf(actionId) : 0;
        setCurrentPlatformIndex(idx < 0 ? 0 : idx);
        setSelectedAction(next[idx]);
      }
      if (actionId !== 'youtube') {
        setYoutubeUrl('');
        setYoutubeVideoId('');
      }
      onAction(actionId);
      return next;
    });
  };

  useEffect(() => {
    if (currentPlatformIndex >= selectedPlatforms.length) {
      setCurrentPlatformIndex(selectedPlatforms.length > 0 ? selectedPlatforms.length - 1 : 0);
    }
  }, [selectedPlatforms, currentPlatformIndex]);

  const hasAnySelection = selectedPlatforms.length > 0 || !!selectedAction;
  const effectiveAction: string | null = selectedPlatforms.length > 0
    ? selectedPlatforms[Math.min(currentPlatformIndex, Math.max(0, selectedPlatforms.length - 1))]
    : selectedAction;

  const goPrevPlatform = () => {
    if (selectedPlatforms.length < 2) return;
    setCurrentPlatformIndex((idx) => {
      const nextIdx = (idx - 1 + selectedPlatforms.length) % selectedPlatforms.length;
      setSelectedAction(selectedPlatforms[nextIdx]);
      // 清理非 YouTube 的播放器状态
      if (selectedPlatforms[nextIdx] !== 'youtube') {
        setYoutubeUrl('');
        setYoutubeVideoId('');
      }
      return nextIdx;
    });
  };

  const goNextPlatform = () => {
    if (selectedPlatforms.length < 2) return;
    setCurrentPlatformIndex((idx) => {
      const nextIdx = (idx + 1) % selectedPlatforms.length;
      setSelectedAction(selectedPlatforms[nextIdx]);
      if (selectedPlatforms[nextIdx] !== 'youtube') {
        setYoutubeUrl('');
        setYoutubeVideoId('');
      }
      return nextIdx;
    });
  };

  const handleSwitchLanguage = (language: string) => {
    setLanguage(language as any);
  };

  // YouTube URL 解析函数
  const extractYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const handleYouTubeUrlChange = (url: string) => {
    setYoutubeUrl(url);
    const videoId = extractYouTubeVideoId(url);
    setYoutubeVideoId(videoId);
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

  // 渲染各社交媒体的移动端主页面布局
  const renderPlatformHome = (isFullscreen: boolean) => {
    const padding = isFullscreen ? 'p-6' : 'p-4';
    const sectionGap = isFullscreen ? 'gap-5' : 'gap-4';
    const titleSize = isFullscreen ? 'text-lg' : 'text-base';
    const textSize = isFullscreen ? 'text-base' : 'text-sm';
    const imageUrl = (w: number, h: number, seed: string | number) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

    const Stories = (
      <div className={`flex ${sectionGap} overflow-x-auto no-scrollbar py-2`}> 
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center min-w-[56px]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 p-0.5">
              <img
                src={imageUrl(100, 100, `story-${i}`)}
                alt={`story-${i}`}
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <span className="mt-1 text-[10px] text-gray-500">story</span>
          </div>
        ))}
      </div>
    );

    const BottomNav = (
      <div className="border-t border-gray-200 px-6 py-2 flex items-center justify-between text-lg">
        <span>🏠</span><span>🔍</span><span>➕</span><span>❤️</span><span>👤</span>
      </div>
    );

    switch (selectedAction) {
      case 'instagram':
        return (
          <div className={padding}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">Instagram</div>
              <div className="flex items-center gap-3 text-xl"><span>➕</span><span>❤</span><span>✉️</span></div>
            </div>
            {/* Stories */}
            {Stories}
            {/* Feed */}
            <div className="space-y-4 mt-2">
              {[1,2].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <img src={imageUrl(64, 64, `insta-avatar-${p}`)} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    <div className="text-sm font-medium">user_{p}</div>
                  </div>
                  <img src={imageUrl(800, 600, `insta-post-${p}`)} alt={`post-${p}`} className="w-full h-64 object-cover" />
                  <div className="px-3 py-2 text-xl">❤ 💬 ✈️</div>
                  <div className={`px-3 pb-3 ${textSize} text-gray-700`}>Nice photo #{p} #travel #life</div>
                </div>
              ))}
            </div>
            {BottomNav}
          </div>
        );
      case 'facebook':
        return (
          <div className={padding}>
            {/* Header */}
            <div className="bg-blue-600 text-white rounded-md px-4 py-2 mb-3 flex items-center justify-between">
              <div className="font-semibold">Facebook</div>
              <div>🔔</div>
            </div>
            {/* Composer */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3 flex items-center gap-2">
              <img src={imageUrl(64, 64, 'fb-avatar-me')} alt="me" className="w-9 h-9 rounded-full object-cover" />
              <div className="flex-1 text-gray-500 text-sm">What's on your mind?</div>
            </div>
            {/* Feed */}
            <div className="space-y-4">
              {[1,2].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <img src={imageUrl(64, 64, `fb-avatar-${p}`)} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium">Page {p}</div>
                      <div className="text-[11px] text-gray-500">2h · 🌎</div>
                    </div>
                  </div>
                  <div className="px-3 pb-2 text-sm">Check out our latest update!</div>
                  <img src={imageUrl(900, 600, `fb-photo-${p}`)} alt={`fb-${p}`} className="w-full h-56 object-cover" />
                  <div className="px-3 py-2 text-base">👍 ❤️ 😮 · 120</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'linkedin':
        return (
          <div className={padding}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold text-blue-700">LinkedIn</div>
              <div>🔔 ✉️</div>
            </div>
            {/* Search */}
            <div className="mb-3">
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Search" />
            </div>
            {/* Start a post */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3 text-sm text-gray-600">Start a post...</div>
            {/* Feed */}
            <div className="space-y-4">
              {[1,2].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2">
                    <img src={imageUrl(64, 64, `li-avatar-${p}`)} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-medium">Professional {p}</div>
                      <div className="text-[11px] text-gray-500">1h · Following</div>
                    </div>
                  </div>
                  <div className="px-3 pb-2 text-sm">Sharing insights on AI and productivity.</div>
                  <img src={imageUrl(900, 500, `li-photo-${p}`)} alt={`li-${p}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'twitter':
        return (
          <div className={padding}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">X</div>
              <div>✉️ ⚙️</div>
            </div>
            {/* Compose */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 mb-3 flex gap-2">
              <img src={imageUrl(64, 64, 'x-avatar-me')} alt="me" className="w-9 h-9 rounded-full object-cover" />
              <div className="flex-1 text-sm text-gray-500">What is happening?!</div>
            </div>
            {/* Timeline */}
            <div className="space-y-3">
              {[1,2,3].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg p-3 text-sm">
                  <div className="flex items-start gap-2">
                    <img src={imageUrl(64, 64, `x-avatar-${p}`)} alt="avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-[12px] text-gray-500">@user{p} · 1h</div>
                      <div className="mt-1">Hello from X platform #{p}</div>
                      {p % 2 === 0 && (
                        <img src={imageUrl(800, 450, `x-photo-${p}`)} alt={`x-${p}`} className="w-full mt-2 rounded-lg object-cover" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'github':
        return (
          <div className={padding}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">GitHub</div>
              <div>🔔</div>
            </div>
            {/* Search */}
            <div className="mb-3">
              <input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Search or jump to..." />
            </div>
            {/* Repos */}
            <div className="space-y-2">
              {[1,2,3].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="font-medium text-sm">alpha/repo-{p}</div>
                  <div className="text-xs text-gray-500 mt-1">TypeScript · Updated 2h ago</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'youtube':
        // 对于 YouTube，非视频时显示简单的推荐列表
        return (
          <div className={padding}>
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold text-red-600">YouTube</div>
              <div>🔔</div>
            </div>
            <div className={`grid grid-cols-1 ${sectionGap}`}>
              {[1,2,3].map((p) => (
                <div key={p} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imageUrl(960, 540, `yt-thumb-${p}`)} alt={`yt-${p}`} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <div className={`${titleSize} font-medium mb-1`}>Amazing video #{p}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <img src={imageUrl(64, 64, `yt-avatar-${p}`)} alt="avatar" className="w-5 h-5 rounded-full object-cover" />
                      AlphaMind · 120K views · 1 day ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPageContent = () => {
    if (currentPage === 'agents') return <AgentsPage />;
    if (currentPage === 'knowledge-base') return <KnowledgeBasePage />;
    if (currentPage === 'materials') return <MaterialsPage />;

    if (messages.length > 0) {
      return (
        <>
          <div className="flex-1 min-h-0">
            <ChatInterface messages={messages} isSplitLayout={hasAnySelection} />
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
                  variant={selectedPlatforms.includes('linkedin') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('linkedin') 
                      ? 'bg-blue-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('linkedin')}
                >
                  <Linkedin className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedPlatforms.includes('facebook') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('facebook') 
                      ? 'bg-blue-700 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('facebook')}
                >
                  <Facebook className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedPlatforms.includes('instagram') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('instagram') 
                      ? 'bg-pink-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('instagram')}
                >
                  <Instagram className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedPlatforms.includes('twitter') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('twitter') 
                      ? 'bg-blue-400 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('twitter')}
                >
                  <Twitter className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedPlatforms.includes('youtube') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('youtube') 
                      ? 'bg-red-600 text-white shadow-lg scale-110' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                  onClick={() => handleAction('youtube')}
                >
                  <Youtube className="h-8 w-8" />
                </Button>
                <Button 
                  variant={selectedPlatforms.includes('github') ? 'default' : 'ghost'}
                  size="sm" 
                  className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                    selectedPlatforms.includes('github') 
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
    if (!effectiveAction) return null;

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

    const content = getSocialMediaContent(effectiveAction);

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

              {/* YouTube URL Input - 仅在选中 YouTube 时显示 */}
              {effectiveAction === 'youtube' && (
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="输入YouTube视频链接..."
                      value={youtubeUrl}
                      onChange={(e) => handleYouTubeUrlChange(e.target.value)}
                      className="flex-1 text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <Button
                      size="sm"
                      onClick={() => handleYouTubeUrlChange(youtubeUrl)}
                      className="h-6 px-2 text-xs"
                      disabled={!youtubeUrl.trim()}
                    >
                      播放
                    </Button>
                  </div>
                </div>
              )}

              {/* Video Player or Social Media Content */}
              {effectiveAction === 'youtube' && youtubeVideoId ? (
                <div className="p-3">
                  <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                      title="YouTube video player"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-medium mb-1">YouTube 视频播放</div>
                    <div className="text-xs text-gray-600">正在播放: {youtubeUrl}</div>
                  </div>
                </div>
              ) : (
                <div className="p-0">{renderPlatformHome(false)}</div>
              )}
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
          {selectedPlatforms.length > 1 && (
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goPrevPlatform}
                className="h-8 w-8 p-0 rounded-full bg-white/90 shadow hover:bg-white"
                title="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goNextPlatform}
                className="h-8 w-8 p-0 rounded-full bg-white/90 shadow hover:bg-white"
                title="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
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
      <div className="fixed inset-0 bg-black z-50">
        <div className={`relative ${
          selectedAction === 'youtube' && youtubeVideoId
            ? 'w-screen h-screen bg-black overflow-hidden'
            : 'mx-auto my-auto w-[500px] h-[700px] bg-white rounded-2xl shadow-2xl overflow-hidden'
        }`}>
          {/* Phone Header */}
          {!(selectedAction === 'youtube' && youtubeVideoId) && (
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
          )}



          {/* Video Player or Social Media Content */}
          {youtubeVideoId ? (
            <div className="flex-1 flex flex-col">
              
              
              {/* Full Screen Video Player */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
                    title="YouTube video player"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-0 w-full h-full overflow-auto">{renderPlatformHome(true)}</div>
          )}

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
        {/* Top header - Fixed height; shift right when sidebar is showing/hovering to avoid overlap */}
        <div className={`flex-shrink-0 h-16 ${(!isTaskListCollapsed || isHovering) ? 'ml-80' : ''}`}>
          <TopHeader user={user} />
        </div>

        {/* 公司 Logo 区域移除，避免与 TopHeader 重复 */}

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