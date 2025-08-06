export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
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
  description?: string;
}

export interface SystemStatus {
  isOnline: boolean;
  message: string;
}

export interface TaskItem {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  isFavorite: boolean;
  type: 'chat' | 'image' | 'slides' | 'webpage' | 'spreadsheet' | 'visualization';
} 