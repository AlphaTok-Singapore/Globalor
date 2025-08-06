import { ActionButton } from '../types';
import { Button } from '@/components/ui/base/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/feedback/tooltip';
import { 
  Search, 
  Grid3X3, 
  HelpCircle, 
  Globe, 
  Paperclip, 
  Mic 
} from 'lucide-react';

interface ActionButtonsProps {
  onAction: (actionId: string) => void;
}

const actionButtons: ActionButton[] = [
  { id: 'search', label: 'Search', icon: 'Search', onClick: () => {}, tooltip: 'Search conversations' },
  { id: 'spaces', label: 'Spaces', icon: 'Grid3X3', onClick: () => {}, tooltip: 'Manage workspaces' },
  { id: 'help', label: 'Help', icon: 'HelpCircle', onClick: () => {}, tooltip: 'Get help' },
  { id: 'web', label: 'Web', icon: 'Globe', onClick: () => {}, tooltip: 'Browse web' },
  { id: 'attach', label: 'Attach', icon: 'Paperclip', onClick: () => {}, tooltip: 'Attach files' },
  { id: 'voice', label: 'Voice', icon: 'Mic', onClick: () => {}, tooltip: 'Voice input' },
];

const getIconComponent = (iconName: string) => {
  const iconMap = {
    Search,
    Grid3X3,
    HelpCircle,
    Globe,
    Paperclip,
    Mic,
  };
  return iconMap[iconName as keyof typeof iconMap] || Search;
};

export function ActionButtons({ onAction }: ActionButtonsProps) {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        {actionButtons.map((button) => {
          const IconComponent = getIconComponent(button.icon);
          return (
            <Tooltip key={button.id}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAction(button.id)}
                  className="h-8 px-3 gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm">{button.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{button.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
} 