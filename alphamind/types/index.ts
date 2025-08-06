export interface User {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  user?: User;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export interface ActionButton {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
  tooltip?: string;
}

export interface SystemStatus {
  isOnline: boolean;
  lastUpdate: Date;
  version: string;
} 