import { SystemStatus } from '../types';
import { Typography } from '@/components/ui/base/typography';
import { Badge } from '@/components/ui/base/badge';
import { Button } from '@/components/ui/base/button';
import { ChevronLeft, Wifi } from 'lucide-react';

interface TopHeaderProps {
  systemStatus: SystemStatus;
  onToggleSidebar?: () => void;
}

export function TopHeader({ systemStatus, onToggleSidebar }: TopHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-border bg-background">
      {/* Left side - Toggle button */}
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Center - Logo and status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <Typography variant="body" className="text-primary-foreground font-medium text-sm">
              AM
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="body" className="font-medium">
              AlphaMind
            </Typography>
            <div className="flex items-center gap-1">
              <Wifi className="h-3 w-3 text-success" />
              <Typography variant="muted" className="text-xs">
                System Online
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Status badge */}
      <div className="flex items-center gap-2">
        <Badge variant={systemStatus.isOnline ? "default" : "destructive"}>
          {systemStatus.isOnline ? 'Online' : 'Offline'}
        </Badge>
      </div>
    </div>
  );
} 