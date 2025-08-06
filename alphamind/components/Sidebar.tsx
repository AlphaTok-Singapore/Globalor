import { NavigationItem } from '../types';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { 
  MessageSquare, 
  Home, 
  Bot, 
  Database, 
  Workflow, 
  BarChart3, 
  Settings,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'chat', label: 'Chat', icon: 'MessageSquare', href: '/chat', isActive: true },
  { id: 'dashboard', label: 'Dashboard', icon: 'Home', href: '/dashboard' },
  { id: 'agents', label: 'Agents', icon: 'Bot', href: '/agents' },
  { id: 'data', label: 'Data', icon: 'Database', href: '/data' },
  { id: 'workflows', label: 'Workflows', icon: 'Workflow', href: '/workflows' },
  { id: 'analytics', label: 'Analytics', icon: 'BarChart3', href: '/analytics' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/settings' },
];

const getIconComponent = (iconName: string) => {
  const iconMap = {
    MessageSquare,
    Home,
    Bot,
    Database,
    Workflow,
    BarChart3,
    Settings,
  };
  return iconMap[iconName as keyof typeof iconMap] || MessageSquare;
};

export function Sidebar({ isCollapsed = false, onToggleCollapse }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Typography variant="body" className="text-primary-foreground font-medium text-sm">
              AM
            </Typography>
          </div>
          {!isCollapsed && (
            <Typography variant="body" className="font-medium">
              AlphaMind
            </Typography>
          )}
        </div>
        {!isCollapsed && onToggleCollapse && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {navigationItems.map((item) => {
          const IconComponent = getIconComponent(item.icon);
          return (
            <Button
              key={item.id}
              variant={item.isActive ? "default" : "ghost"}
              size="sm"
              className={`w-full justify-start gap-3 h-10 ${
                item.isActive 
                  ? 'bg-sidebar-selected text-sidebar-selected-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              {!isCollapsed && (
                <Typography variant="body" className="text-sm">
                  {item.label}
                </Typography>
              )}
            </Button>
          );
        })}
      </nav>
    </div>
  );
} 