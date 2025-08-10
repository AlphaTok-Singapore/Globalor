import { useState } from 'react';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { 
  Plus, 
  MessageSquare, 
  Bot, 
  Star,
  // Clock,
  Database,
  Workflow,
  BarChart3,
  Settings,
  BookOpen,
  FileText,
  ChevronRight,
  ChevronDown,
  Leaf,
  Search
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Task {
  id: string;
  title: string;
  description: string;
  type: 'chat' | 'agent';
  timestamp: string;
  date: string;
  isFavorite: boolean;
}

interface TaskListProps {
  isCollapsed?: boolean;
  onSelectTask?: (taskId: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

// Mock tasks data
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Chat with AlphaMind',
    description: 'Ask questions and get AI-powered responses',
    type: 'chat',
    timestamp: '2:30 PM',
    date: 'Today',
    isFavorite: true
  },
  {
    id: '2',
    title: 'Data Analysis Agent',
    description: 'Analyze sales data and generate insights',
    type: 'agent',
    timestamp: '1:45 PM',
    date: 'Today',
    isFavorite: false
  },
  {
    id: '3',
    title: 'Content Creation',
    description: 'Create marketing content for social media',
    type: 'chat',
    timestamp: '11:20 AM',
    date: 'Today',
    isFavorite: true
  },
  {
    id: '4',
    title: 'Customer Support Bot',
    description: 'Handle customer inquiries automatically',
    type: 'agent',
    timestamp: '9:15 AM',
    date: 'Today',
    isFavorite: false
  }
];

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  page?: string;
  children?: NavigationItem[];
}

// removed NavigationItemProps (no longer used)

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    MessageSquare,
    Bot,
    Database,
    Workflow,
    BarChart3,
    Settings,
    BookOpen,
    FileText,
    ChevronRight,
    ChevronDown,
    Search
  };
  return iconMap[iconName] || MessageSquare;
};

export function TaskList({ isCollapsed: _isCollapsed = false, onSelectTask, currentPage: _currentPage = 'chat', onNavigate }: TaskListProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'scheduled'>('all');
  const [selectedTask, setSelectedTask] = useState<string>('1');
  // const [expandedItems, setExpandedItems] = useState<string[]>(['data']);

  const handleTaskSelect = (taskId: string) => {
    setSelectedTask(taskId);
    onSelectTask?.(taskId);
  };

  // no tree view at the moment; keep state for future but avoid unused warnings
  // remove unused handler for now
  // const toggleExpanded = (_id: string) => {
  //   setExpandedItems(prev => prev);
  // };

  // const isExpanded = (id: string) => expandedItems.includes(id);

  const filteredTasks = mockTasks.filter(task => {
    if (activeTab === 'favorites') return task.isFavorite;
    if (activeTab === 'scheduled') return task.type === 'agent';
    return true;
  });

  const navigationItems: NavigationItem[] = [
    {
      id: 'chat',
      label: t.navigation.chat,
      icon: 'MessageSquare',
      page: 'chat'
    },
    {
      id: 'agents',
      label: t.navigation.agents,
      icon: 'Bot',
      page: 'agents'
    },
    {
      id: 'data',
      label: t.navigation.data,
      icon: 'Database',
      children: [
        {
          id: 'knowledge-base',
          label: t.navigation.knowledgeBase,
          icon: 'BookOpen',
          page: 'knowledge-base'
        },
        {
          id: 'materials',
          label: t.navigation.materials,
          icon: 'FileText',
          page: 'materials'
        }
      ]
    },
    {
      id: 'workflows',
      label: t.navigation.workflows,
      icon: 'Workflow',
      page: 'workflows'
    },
    {
      id: 'analytics',
      label: t.navigation.analytics,
      icon: 'BarChart3',
      page: 'analytics'
    },
    {
      id: 'settings',
      label: t.common.settings,
      icon: 'Settings',
      page: 'settings'
    }
  ];

  // removed renderNavigationItem (not used in current layout)

  return (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border min-w-0">
      {/* Header - 包含收缩按钮、搜索按钮和新建任务按钮 */}
      <div className="p-4 border-b border-sidebar-border">
        {/* 顶部按钮行 */}
        <div className="flex items-center justify-between mb-4">
          {/* 收缩按钮位置 - 左上方 (Placeholder for alignment) */}
          <div className="w-8 h-8"></div>

          {/* 搜索按钮 - 右上方 */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* 新建任务按钮 - 白色底色 */}
        <Button className="w-full bg-white text-foreground border border-border hover:bg-gray-50 mb-4">
          <Plus className="h-4 w-4 mr-2" />
          {t.chat.newTask}
        </Button>

        <div className="flex gap-1">
          <Button
            variant={activeTab === 'all' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('all')}
            className={`flex-1 ${activeTab === 'all' ? 'bg-black text-white hover:bg-black/90' : ''}`}
          >
            {t.chat.all}
          </Button>
          <Button
            variant={activeTab === 'favorites' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 ${activeTab === 'favorites' ? 'bg-black text-white hover:bg-black/90' : ''}`}
          >
            {t.chat.favorites}
          </Button>
          <Button
            variant={activeTab === 'scheduled' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('scheduled')}
            className={`flex-1 ${activeTab === 'scheduled' ? 'bg-black text-white hover:bg-black/90' : ''}`}
          >
            {t.chat.scheduled}
          </Button>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => handleTaskSelect(task.id)}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                selectedTask === task.id 
                  ? 'bg-sidebar-selected text-sidebar-selected-foreground' 
                  : 'hover:bg-sidebar-accent'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {task.type === 'chat' ? (
                    <MessageSquare className="h-4 w-4 text-blue-500" />
                  ) : (
                    <Bot className="h-4 w-4 text-green-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Typography variant="body" className="text-sm font-medium truncate">
                      {task.title}
                    </Typography>
                    {task.isFavorite && (
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <Typography variant="body" className="text-xs text-sidebar-muted-foreground line-clamp-2">
                    {task.description}
                  </Typography>
                </div>
                <div className="flex-shrink-0 text-right">
                  <Typography variant="body" className="text-xs text-sidebar-muted-foreground">
                    {task.timestamp}
                  </Typography>
                  <Typography variant="body" className="text-xs text-sidebar-muted-foreground">
                    {task.date}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Navigation and Share */}
      <div className="border-t border-sidebar-border p-4 space-y-4">
        {/* Share Section */}
        <div className="bg-sidebar-accent rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-4 w-4 text-green-600" />
            <Typography variant="body" className="text-sm font-medium">
              {t.chat.shareTitle}
            </Typography>
          </div>
          <Typography variant="body" className="text-xs text-sidebar-muted-foreground mb-2">
            {t.chat.shareSubtitle}
          </Typography>
          <Button variant="ghost" size="sm" className="w-full justify-between text-xs">
            <span>{t.chat.learnMore}</span>
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>

        {/* Bottom Navigation - 横向排列的导航图标 */}
        <div className="flex justify-between items-center">
          {navigationItems.map(item => {
            const IconComponent = getIconComponent(item.icon);
            
            return (
              <Button 
                key={item.id}
                variant="ghost" 
                size="sm" 
                className="flex-1"
                onClick={() => item.page && onNavigate!(item.page)}
                title={item.label}
              >
                <IconComponent className="h-4 w-4" />
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
} 