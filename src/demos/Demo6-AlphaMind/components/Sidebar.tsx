import { useState } from 'react';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { 
  MessageSquare, 
  Bot, 
  Database, 
  Workflow, 
  BarChart3, 
  Settings,
  Plus,
  Share,
  Edit,
  Heart,
  Trash2,
  MoreVertical,
  Clock,
  Search,
  DoorClosed
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChatMessage } from '../types';
// React import not required in React 17+ with jsx transform; remove unused

interface SidebarProps {
  isCollapsed?: boolean;
  onSelectTask?: (taskId: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  messages?: ChatMessage[];
  onToggleCollapse?: () => void;
  onNewTask?: () => void;
  onOpenSettings?: () => void;
  tasks?: Array<{
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: Date;
    isActive: boolean;
  }>;
  currentTaskId?: string | null;
}

// Removed unused TaskItem interface

export function Sidebar({ 
  isCollapsed = false, 
  onSelectTask = () => {}, 
  currentPage = 'chat',
  onNavigate = () => {},
  messages: _messages = [],
  onToggleCollapse = () => {},
  onNewTask = () => {},
  onOpenSettings = () => {},
  tasks = [],
  currentTaskId = null
}: SidebarProps) {
  const { t } = useLanguage();
  const [showTaskOptions, setShowTaskOptions] = useState<string | null>(null);
  // const [searchValue, setSearchValue] = useState('');

  // 处理新建任务
  const handleNewTask = () => {
    onNewTask();
  };

  const navigationItems = [
    { id: 'chat', label: t.navigation.chat, icon: MessageSquare },
    { id: 'agents', label: t.navigation.agents, icon: Bot },
    { id: 'data', label: t.navigation.data, icon: Database },
    { id: 'workflows', label: t.navigation.workflows, icon: Workflow },
    { id: 'analytics', label: t.navigation.analytics, icon: BarChart3 },
  ];

  const handleTaskOptionClick = (taskId: string, action: string) => {
    console.log(`Task ${taskId} action: ${action}`);
    setShowTaskOptions(null);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  // removed unused getTaskIcon

  if (isCollapsed) {
    return (
      <div className="h-full bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* 收缩时的图标导航 */}
        <div className="flex-1 flex flex-col items-center py-4 space-y-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={`h-10 w-10 p-0 rounded-lg ${
                  currentPage === item.id 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-muted-foreground hover:text-sidebar-foreground'
                }`}
                title={item.label}
              >
                <IconComponent className="h-5 w-5" />
              </Button>
            );
          })}
        </div>

        {/* 底部设置按钮 */}
        <div className="p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenSettings}
            className="h-10 w-10 p-0 rounded-lg text-sidebar-muted-foreground hover:text-sidebar-foreground"
            title={t.common.settings}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* 顶部控制按钮区域 */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          {/* 收缩按钮 */}
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleCollapse}
            className="h-8 w-8 p-0 rounded-lg bg-background border border-border hover:bg-accent"
            title="Collapse Sidebar"
          >
            <DoorClosed className="h-4 w-4" />
          </Button>
          
          {/* 搜索按钮 - 只显示图标，放在最右边 */}
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 rounded-lg bg-background border border-border hover:bg-accent"
            title="Search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        {/* 新建任务按钮 */}
        <div className="mb-3">
          <Button className="w-full bg-white text-gray-900 hover:bg-gray-50 border border-gray-200" onClick={handleNewTask}>
            <Plus className="h-4 w-4 mr-2" />
            {t.chat.newTask}
          </Button>
        </div>
      </div>

      {/* 任务列表 - 显示所有任务 */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`group relative p-3 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer ${
                currentTaskId === task.id ? 'bg-sidebar-accent' : ''
              }`}
              onClick={() => onSelectTask(task.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare className="h-4 w-4 text-sidebar-muted-foreground" />
                    <Typography variant="body" className="text-sm font-medium text-sidebar-foreground truncate">
                      {task.title}
                    </Typography>
                  </div>
                  <Typography variant="body" className="text-xs text-sidebar-muted-foreground mb-2 line-clamp-2">
                    {task.messages.length} 条消息
                  </Typography>
                  <div className="flex items-center gap-2 text-xs text-sidebar-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{formatTime(task.createdAt)}</span>
                  </div>
                </div>
                
                {/* 选项按钮 */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTaskOptions(showTaskOptions === task.id ? null : task.id);
                    }}
                    className="h-6 w-6 p-0 text-sidebar-muted-foreground hover:text-sidebar-foreground"
                  >
                    <MoreVertical className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* 选项菜单 */}
              {showTaskOptions === task.id && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTaskOptionClick(task.id, 'share');
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Share className="h-3 w-3" />
                      分享
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTaskOptionClick(task.id, 'rename');
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Edit className="h-3 w-3" />
                      重命名
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTaskOptionClick(task.id, 'favorite');
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                    >
                      <Heart className="h-3 w-3" />
                      添加到收藏
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTaskOptionClick(task.id, 'delete');
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 text-red-600 flex items-center gap-2"
                    >
                      <Trash2 className="h-3 w-3" />
                      删除
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 分享 AlphaMind 部分 */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-lg p-3">
          <Typography variant="body" className="text-sm font-medium text-sidebar-accent-foreground mb-1">
            {t.chat.shareTitle}
          </Typography>
          <Typography variant="body" className="text-xs text-sidebar-muted-foreground mb-2">
            {t.chat.shareSubtitle}
          </Typography>
          <Button variant="outline" size="sm" className="w-full text-xs">
            {t.chat.learnMore}
          </Button>
        </div>
      </div>

      {/* 底部导航菜单 - 只显示图标，横向排列 */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => onNavigate(item.id)}
                className={`h-10 w-10 p-0 rounded-lg ${
                  currentPage === item.id 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-muted-foreground hover:text-sidebar-foreground'
                }`}
                title={item.label}
              >
                <IconComponent className="h-5 w-5" />
              </Button>
            );
          })}
          
          {/* Settings 按钮 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('settings')}
            className={`h-10 w-10 p-0 rounded-lg ${
              currentPage === 'settings' 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'text-sidebar-muted-foreground hover:text-sidebar-foreground'
            }`}
            title={t.common.settings}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 