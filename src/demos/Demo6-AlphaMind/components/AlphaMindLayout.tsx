import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/base/button';
import { Dropdown, DropdownContainer, DropdownTrigger, DropdownContent, DropdownItem } from '@/components/ui/base/dropdown';
import { Typography } from '@/components/ui/base/typography';
import { 
  DoorOpen, 
  DoorClosed, 
  ChevronUp,
  ChevronDown,
  Maximize2,
  X,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  StickyNote,
  Music,
  Mail,
  MessageCircle,
  Send,
  MessageSquare,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  User as UserIcon
} from 'lucide-react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { LanguageDialog } from './LanguageDialog';
import { TopHeader } from './TopHeader';
import { Sidebar } from './Sidebar';
import { ChatInterface } from './ChatInterface';
import { InputArea } from './InputArea';
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
  const [isTaskListCollapsed, setIsTaskListCollapsed] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [welcomeInputValue, setWelcomeInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState('chat');
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState<number>(0);
  const [welcomeMode, setWelcomeMode] = useState<'public' | 'private'>('public');
  const [chatMode, setChatMode] = useState<'public' | 'private'>('public');
  const [isPhoneFullscreen, setIsPhoneFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');
  const [youtubeVideoId, setYoutubeVideoId] = useState<string>('');
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [emailDialogType, setEmailDialogType] = useState<string>('');
  // Email panel states
  type EmailCategory = 'Inbox' | 'Starred' | 'Snoozed' | 'Important' | 'Sent' | 'Drafts' | 'Chats' | 'Scheduled' | 'All Mail' | 'Spam' | 'Trash';
  const [emailCategory, setEmailCategory] = useState<EmailCategory>('Inbox');
  const [selectedEmail, setSelectedEmail] = useState<{
    id: string;
    subject: string;
    contact: string;
    time: string;
    count: number;
  } | null>(null);
  const [selectedEmailThread, setSelectedEmailThread] = useState<Array<{
    id: string;
    sender: string;
    content: string;
    time: string;
    subject?: string;
    body?: string;
  }>>([]);
  // CRM selection states
  const [selectedCrmTopic, setSelectedCrmTopic] = useState<string | null>(null);
  const [selectedCrmDetails, setSelectedCrmDetails] = useState<string[]>([]);
  const [showContacts, setShowContacts] = useState(false);
  const contactsList: Array<{ name: string; email: string; company: string }> = [
    { name: 'Alice Tan', email: 'alice.tan@example.com', company: 'Globalor Pte Ltd' },
    { name: 'Bob Lee', email: 'bob.lee@example.com', company: 'AlphaTok Singapore' },
    { name: 'Carol Wong', email: 'carol.wong@example.com', company: 'Sea Ventures' },
    { name: 'David Chan', email: 'david.chan@example.com', company: 'Nexus Labs' },
  ];
  const emailData: Record<'inbox' | 'sent' | 'trash' | 'drafts', Array<{
    id: string;
    subject: string;
    preview: string;
    contact: string;
    time: string;
    unread?: boolean;
    count?: number;
  }>> = {
    inbox: [
      { id: 'm1', subject: 'Welcome to AlphaMind', preview: 'Thanks for signing up. Here are some tips to get started...', contact: 'Alice', time: '09:24', unread: true, count: 3 },
      { id: 'm2', subject: 'Weekly Report', preview: 'Your weekly performance summary is ready to view.', contact: 'Bob', time: 'Yesterday', count: 6 },
      { id: 'm3', subject: 'Meeting Notes', preview: 'Here are the notes from our meeting yesterday...', contact: 'Carol', time: 'Tue', count: 2 },
    ],
    sent: [
      { id: 's1', subject: 'Re: Partnership Proposal', preview: 'Thanks for the proposal. Let’s schedule a call...', contact: 'Dave', time: '08:10', count: 4 },
      { id: 's2', subject: 'Invoice for July', preview: 'Please find attached the invoice for July.', contact: 'Alice', time: 'Mon', count: 1 },
    ],
    drafts: [
      { id: 'd1', subject: 'Draft: New Campaign Plan', preview: 'Outline: goals, budget, timeline...', contact: 'Carol', time: '10:02', count: 1 },
    ],
    trash: [
      { id: 't1', subject: 'Promotion', preview: 'Limited time offer just for you!', contact: 'Bob', time: '2 days ago', count: 2 },
    ],
  };

  const mapCategoryToDataset = (cat: EmailCategory): 'inbox' | 'sent' | 'trash' | 'drafts' => {
    switch (cat) {
      case 'Sent':
        return 'sent';
      case 'Drafts':
        return 'drafts';
      case 'Spam':
      case 'Trash':
        return 'trash';
      default:
        return 'inbox';
    }
  };
  
  const buildThreadForEmail = (m: { id: string; subject: string; contact: string; time: string; count?: number; preview: string }) => {
    const total = Math.max(1, m.count ?? 1);
    const thread: Array<{ id: string; sender: string; content: string; time: string; subject?: string; body?: string }> = [];
    for (let i = 0; i < total; i++) {
      const isLast = i === total - 1;
      thread.push({
        id: `${m.id}-${i + 1}`,
        sender: i % 2 === 0 ? m.contact : 'Me',
        content: isLast ? `Latest: ${m.subject}` : `Re: ${m.subject} (#${i + 1})`,
        time: isLast ? m.time : `-${total - i}d`,
        subject: isLast ? m.subject : undefined,
        body: isLast ? `${m.preview}\n\nRegards,\n${i % 2 === 0 ? m.contact : 'Me'}` : undefined,
      });
    }
    return thread;
  };
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

  const handleCloseEmailDialog = () => {
    setShowEmailDialog(false);
    setEmailDialogType('');
  };

  const clearAllSelections = () => {
    setSelectedAction(null);
    setSelectedPlatforms([]);
    setCurrentPlatformIndex(0);
    setYoutubeUrl('');
    setYoutubeVideoId('');
  };

  const handleWelcomeModeChange = (mode: 'public' | 'private') => {
    setWelcomeMode(mode);
    if (mode === 'private') {
      // Close phone display when switching to private mode
      setSelectedAction(null);
      setSelectedPlatforms([]);
      setCurrentPlatformIndex(0);
      setYoutubeUrl('');
      setYoutubeVideoId('');
    }
  };

  const handleChatModeChange = (mode: 'public' | 'private') => {
    setChatMode(mode);
    if (mode === 'private') {
      // Close phone display when switching to private mode
      setSelectedAction(null);
      setSelectedPlatforms([]);
      setCurrentPlatformIndex(0);
      setYoutubeUrl('');
      setYoutubeVideoId('');
    }
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleAction = (actionId: string) => {
    // Check if this is a private mode action
    const privateActions = ['email', 'whatsapp', 'telegram', 'line', 'crm'];
    if ((welcomeMode === 'private' || chatMode === 'private') && privateActions.includes(actionId)) {
      // For email, show right-side email panel instead of dialog per requirement
      if (actionId === 'email') {
        setSelectedAction('email');
        setSelectedPlatforms(['email']);
        setIsPhoneFullscreen(false);
        setShowEmailDialog(false);
        return;
      }
      if (actionId === 'crm') {
        setSelectedAction('crm');
        setSelectedPlatforms(['crm']);
        setIsPhoneFullscreen(false);
        setShowEmailDialog(false);
        return;
      }
      setShowEmailDialog(true);
      setEmailDialogType(actionId);
      return;
    }

    setSelectedPlatforms((prev) => {
      const isPrivateSingleSelect = welcomeMode === 'private' || chatMode === 'private';
      const willSelect = !prev.includes(actionId);
      const next = isPrivateSingleSelect
        ? [actionId]
        : willSelect
          ? [...prev, actionId]
          : prev.filter((p) => p !== actionId);
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

    // 当选择了邮件或 CRM 条目时，左侧展示对应信息
    if (selectedAction === 'email' && selectedEmail && selectedEmailThread.length > 0) {
      return (
        <>
          <div className="flex-1 min-h-0 p-4">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold truncate">{selectedEmail.contact} · {selectedEmail.subject}</div>
                <div className="text-xs text-muted-foreground">{selectedEmail.time}</div>
              </div>
              {/* 聊天顺序图（简化为时间顺序列表）*/}
              <div className="space-y-2">
                {selectedEmailThread.map((item, idx) => (
                  <div key={item.id} className="flex gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${idx === selectedEmailThread.length - 1 ? 'bg-blue-600' : 'bg-gray-400'}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium truncate">{item.sender}</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                      </div>
                      {idx === selectedEmailThread.length - 1 ? (
                        <div className="mt-1 bg-white border border-gray-200 rounded-md p-3 space-y-2">
                          <div className="text-sm font-semibold truncate">{item.subject}</div>
                          <div className="text-sm whitespace-pre-line break-words">{item.body}</div>
                        </div>
                      ) : (
                        <div className="text-sm text-foreground truncate">{item.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <InputArea 
              onSendMessage={onSendMessage} 
              mode={chatMode}
              onModeChange={handleChatModeChange}
              onAction={handleAction}
            />
          </div>
        </>
      );
    }

    if (selectedAction === 'crm' && selectedCrmTopic) {
      return (
        <>
          <div className="flex-1 min-h-0 p-4">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold truncate">{selectedCrmTopic}</div>
                <div className="text-xs text-muted-foreground">概览</div>
              </div>
              <div className="space-y-2">
                {selectedCrmDetails.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${i === selectedCrmDetails.length - 1 ? 'bg-purple-600' : 'bg-gray-400'}`} />
                    <div className="flex-1 min-w-0 text-sm text-foreground">{line}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <InputArea 
              onSendMessage={onSendMessage} 
              mode={chatMode}
              onModeChange={handleChatModeChange}
              onAction={handleAction}
            />
          </div>
        </>
      );
    }

    if (messages.length > 0) {
      return (
        <>
          <div className="flex-1 min-h-0">
            <ChatInterface messages={messages} isSplitLayout={hasAnySelection} />
          </div>
          <div className="flex-shrink-0">
            <InputArea 
              onSendMessage={onSendMessage} 
              mode={chatMode}
              onModeChange={handleChatModeChange}
              onAction={handleAction}
              selectedPlatforms={selectedPlatforms}
            />
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
                  className="w-full h-16 text-lg px-12 py-4 pr-24 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                {/* Plus icon at the beginning */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </Button>
                </div>
                {/* Voice input icon */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-14 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x1="12" y1="19" x2="12" y2="23" />
                    <line strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </Button>
                {/* Send button */}
                <Button
                  onClick={handleWelcomeSend}
                  disabled={!welcomeInputValue.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <svg className="h-4 w-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
            </div>
            {/* Public / Private toggle under welcome input */}
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleWelcomeModeChange('public')}
                className={welcomeMode === 'public' ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}
              >
                Public
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleWelcomeModeChange('private')}
                className={welcomeMode === 'private' ? 'bg-gray-200 text-gray-900' : 'text-gray-600'}
              >
                Private
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 px-8 py-6 bg-background">
              <div className="flex items-center gap-6 max-w-4xl">
                {welcomeMode === 'public' ? (
                  <>
                    <Button 
                      variant={selectedPlatforms.includes('linkedin') ? 'default' : 'ghost'}
                      size="sm" 
                      title="LinkedIn"
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
                      title="Facebook"
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
                      title="Instagram"
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
                      title="Twitter"
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
                      title="YouTube"
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
                      variant={selectedPlatforms.includes('tiktok') ? 'default' : 'ghost'}
                      size="sm" 
                      title="TikTok"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('tiktok') 
                          ? 'bg-gray-900 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('tiktok')}
                    >
                      <Music className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant={selectedPlatforms.includes('rednote') ? 'default' : 'ghost'}
                      size="sm" 
                      title="Rednote"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('rednote') 
                          ? 'bg-red-600 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('rednote')}
                    >
                      <StickyNote className="h-8 w-8" />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant={selectedPlatforms.includes('email') ? 'default' : 'ghost'}
                      size="sm" 
                      title="Email"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('email') 
                          ? 'bg-blue-600 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('email')}
                    >
                      <Mail className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant={selectedPlatforms.includes('whatsapp') ? 'default' : 'ghost'}
                      size="sm" 
                      title="WhatsApp"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('whatsapp') 
                          ? 'bg-green-600 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('whatsapp')}
                    >
                      <MessageCircle className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant={selectedPlatforms.includes('telegram') ? 'default' : 'ghost'}
                      size="sm" 
                      title="Telegram"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('telegram') 
                          ? 'bg-sky-500 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('telegram')}
                    >
                      <Send className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant={selectedPlatforms.includes('line') ? 'default' : 'ghost'}
                      size="sm" 
                      title="Line"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('line') 
                          ? 'bg-green-500 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('line')}
                    >
                      <MessageSquare className="h-8 w-8" />
                    </Button>
                    <Button 
                      variant={selectedPlatforms.includes('crm') ? 'default' : 'ghost'}
                      size="sm" 
                      title="CRM"
                      className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
                        selectedPlatforms.includes('crm') 
                          ? 'bg-purple-600 text-white shadow-lg scale-110' 
                          : 'hover:bg-gray-100 hover:scale-105'
                      }`}
                      onClick={() => handleAction('crm')}
                    >
                      <Briefcase className="h-8 w-8" />
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <span className="text-sm">Explore use cases</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderPhoneDisplay = () => {
    if (!effectiveAction) return null;

    // previously had social content map; not required since we renderPlatformHome

    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
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
              onClick={clearAllSelections}
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
        {/* External action buttons below phone (outside display area) */}
        <div className="mt-3 flex items-center gap-2">
          <Button size="sm" variant="outline">Edit</Button>
          <Button size="sm" variant="outline">Post</Button>
          <Button size="sm" variant="default">Post All</Button>
        </div>
      </div>
    );
  };

  // 全屏手机显示
  const renderFullscreenPhone = () => {
    if (!isPhoneFullscreen || !selectedAction) return null;

    // previously had social content map; not required in fullscreen mode

    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <div className={`relative ${
          selectedAction === 'youtube' && youtubeVideoId
            ? 'w-screen h-screen bg-black overflow-hidden'
            : 'w-[640px] h-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden'
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

  // Right-side Email panel when email action selected
  const renderEmailPanel = () => {
    const datasetKey = mapCategoryToDataset(emailCategory);
    const items = emailData[datasetKey];
    return (
      <div className="w-[520px] border-l border-border px-4">
        {/* Top options bar with folders and contacts */}
        <div className="sticky top-0 bg-background z-10 py-3 border-b border-border">
          <div className="flex items-center justify-between gap-3">
            {/* Folder/category dropdown */}
            <Dropdown>
              <DropdownContainer>
                <DropdownTrigger width="auto" placeholder="选择分类" suffix={<ChevronDown className="h-4 w-4 text-muted-foreground" />}>
                  {emailCategory}
                </DropdownTrigger>
                <DropdownContent size="lg">
                  {([
                    'Inbox','Starred','Snoozed','Important','Sent','Drafts','Chats','Scheduled','All Mail','Spam','Trash'
                  ] as EmailCategory[]).map((cat) => (
                    <DropdownItem key={cat} onClick={() => setEmailCategory(cat)}>
                      {cat}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </DropdownContainer>
            </Dropdown>
            {/* Contacts toggle button */}
            <Button size="sm" variant={showContacts ? 'default' : 'outline'} onClick={() => setShowContacts(!showContacts)}>
              Contacts
            </Button>
          </div>
        </div>

        {/* Content: contacts or emails */}
        {showContacts ? (
          <div className="py-3 overflow-y-auto">
            {contactsList.map((c) => (
              <div key={c.email} className="p-3 rounded-md border border-border hover:bg-muted cursor-pointer">
                <div className="flex items-center gap-2 min-w-0 mb-1">
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium truncate">{c.name}</span>
                </div>
                <div className="text-sm text-muted-foreground truncate">{c.email}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.company}</div>
              </div>
            ))}
            {contactsList.length === 0 && (
              <div className="text-sm text-muted-foreground py-8 text-center">暂无联系人</div>
            )}
          </div>
        ) : (
          <div className="py-3 overflow-y-auto">
            {items.map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  setSelectedEmail({ id: m.id, subject: m.subject, contact: m.contact, time: m.time, count: m.count ?? 1 });
                  setSelectedPlatforms([]);
                  setSelectedAction('email');
                  setSelectedEmailThread(buildThreadForEmail(m));
                }}
                className={`p-2 rounded-md border border-border hover:bg-muted cursor-pointer ${m.unread ? 'bg-muted/40' : ''}`}
              >
                {/* 单行：名字 + 标题 + (对话数) + 最后时间；缩小间距 */}
                <div className="flex items-center gap-1 min-w-0">
                  <span className="font-medium truncate max-w-[28%]">{m.contact}</span>
                  <span className="text-sm truncate flex-1">{m.subject}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-1">({m.count ?? 1})</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-1">{m.time}</span>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-sm text-muted-foreground py-8 text-center">暂无邮件</div>
            )}
          </div>
        )}
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
          {/* External action buttons below phone (outside display area) */}
          <div className="mt-3 flex items-center gap-2 justify-center">
            <Button size="sm" variant="outline">Edit</Button>
            <Button size="sm" variant="outline">Post</Button>
            <Button size="sm" variant="default">Post All</Button>
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
          <div className="flex-1 flex py-8">
            {/* Left chat area - 确保不被 sidebar 遮挡 */}
            <div className={`flex-1 flex flex-col ${(!isTaskListCollapsed || isHovering) ? 'ml-80' : ''}`}>
              {renderPageContent()}
            </div>
            {/* Right panel: email panel or CRM panel; fallback to phone display */}
            {selectedAction === 'email' ? renderEmailPanel() : selectedAction === 'crm' ? (
              <div className="w-[420px] border-l border-border px-4 py-4 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-semibold mb-2">客户信息管理</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => { setSelectedCrmTopic('客户信息管理'); setSelectedCrmDetails(['姓名/电话/邮箱/地址/公司/职位','客户分类与标签','交互历史：通话/邮件/会议']); }}>查看</Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-2">销售管理</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => { setSelectedCrmTopic('销售管理'); setSelectedCrmDetails(['线索（Leads）来源/转化','商机（Opportunities）阶段与预计收入','销售管道（Pipeline）可视化']); }}>查看</Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-2">联系人管理</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => { setSelectedCrmTopic('联系人管理'); setSelectedCrmDetails(['多联系人角色/偏好','联系人与公司/商机关联']); }}>查看</Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-2">任务和活动管理</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => { setSelectedCrmTopic('任务和活动管理'); setSelectedCrmDetails(['跟进电话/邮件/会议','日程提醒']); }}>查看</Button>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold mb-2">报表与分析</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" onClick={() => { setSelectedCrmTopic('报表与分析'); setSelectedCrmDetails(['销售业绩/转化率/收入预测','客户行为分析（高价值/流失）','图表与仪表盘']); }}>查看</Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : renderPhoneDisplay()}
          </div>
        ) : (
          <div className={`flex-1 py-8 ${(!isTaskListCollapsed || isHovering) ? 'ml-80' : ''}`}>
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

      {/* Email Dialog */}
      {showEmailDialog && (
        <EmailDialog
          isOpen={showEmailDialog}
          onClose={handleCloseEmailDialog}
          type={emailDialogType}
        />
      )}

      {/* Fullscreen Phone Display */}
      {renderFullscreenPhone()}
    </div>
  );
}

// Email Dialog Component
interface EmailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

function EmailDialog({ isOpen, onClose, type }: EmailDialogProps) {
  if (!isOpen) return null;

  const getDialogContent = () => {
    const content = {
      email: {
        title: "Email",
        icon: "📧",
        description: "Send email message",
        placeholder: "Enter email content...",
        buttonText: "Send Email"
      },
      whatsapp: {
        title: "WhatsApp",
        icon: "💬",
        description: "Send WhatsApp message",
        placeholder: "Enter WhatsApp message...",
        buttonText: "Send WhatsApp"
      },
      telegram: {
        title: "Telegram",
        icon: "📱",
        description: "Send Telegram message",
        placeholder: "Enter Telegram message...",
        buttonText: "Send Telegram"
      },
      line: {
        title: "Line",
        icon: "💚",
        description: "Send Line message",
        placeholder: "Enter Line message...",
        buttonText: "Send Line"
      },
      crm: {
        title: "CRM",
        icon: "📊",
        description: "Manage customer relationship",
        placeholder: "Enter CRM note...",
        buttonText: "Save to CRM"
      }
    };
    return content[type as keyof typeof content] || content.email;
  };

  const dialogContent = getDialogContent();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[500px] max-h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{dialogContent.icon}</span>
            <Typography variant="h2" className="text-xl font-bold">
              {dialogContent.title}
            </Typography>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="space-y-4">
            <Typography variant="body" className="text-gray-600">
              {dialogContent.description}
            </Typography>
            
            {/* Image Preview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div>
                  <Typography variant="body" className="font-medium">AlphaMind</Typography>
                  <Typography variant="body" className="text-sm text-gray-500">AI Assistant</Typography>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border">
                <img 
                  src="https://picsum.photos/seed/email/300/200" 
                  alt="Generated content"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <Typography variant="body" className="text-sm">
                  ✨ Just created this amazing content with AlphaMind! The AI-powered design is absolutely stunning. #AI #Design #Innovation
                </Typography>
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <Typography variant="body" className="text-sm font-medium text-gray-700">
                Message
              </Typography>
              <textarea
                placeholder={dialogContent.placeholder}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button>
            {dialogContent.buttonText}
          </Button>
        </div>
      </div>
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