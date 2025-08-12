import { useState } from 'react';
import { AlphaMindLayout } from './components/AlphaMindLayout';
import { ChatMessage, User } from './types';
import { useLanguage } from './contexts/LanguageContext';

// 模拟用户数据
const mockUser: User = {
  id: '1',
  name: 'Alex Lei',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
};

// 任务类型
interface Task {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  isActive: boolean;
}

export function AlphaMindPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);

  // 获取当前活跃任务的消息
  const currentTask = tasks.find(task => task.id === currentTaskId);
  const messages = currentTask?.messages || [];

  const handleSendMessage = (message: string) => {
    if (!currentTaskId) {
      // 如果没有活跃任务，创建一个新任务
      const newTask: Task = {
        id: Date.now().toString(),
        title: `${t.chat.conversation} ${tasks.length + 1}`,
        messages: [],
        createdAt: new Date(),
        isActive: true,
      };
      setTasks(prev => [...prev, newTask]);
      setCurrentTaskId(newTask.id);
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      type: 'user',
      timestamp: new Date(),
    };
    
    // 更新当前任务的消息
    setTasks(prev => prev.map(task => 
      task.id === currentTaskId 
        ? { ...task, messages: [...task.messages, newMessage] }
        : task
    ));
    
    // 模拟 AI 回复
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: `我收到了您的消息："${message}"。这是一个很好的问题！我可以帮您解决这个问题。`,
        type: 'assistant',
        timestamp: new Date(),
      };
      setTasks(prev => prev.map(task => 
        task.id === currentTaskId 
          ? { ...task, messages: [...task.messages, aiResponse] }
          : task
      ));
    }, 1000);
  };

  const handleClearMessages = () => {
    // 清理当前任务的消息
    if (currentTaskId) {
      setTasks(prev => prev.map(task => 
        task.id === currentTaskId 
          ? { ...task, messages: [] }
          : task
      ));
    }
  };

  const handleNewTask = () => {
    // 创建新任务
    const newTask: Task = {
      id: Date.now().toString(),
      title: `${t.chat.conversation} ${tasks.length + 1}`,
      messages: [],
      createdAt: new Date(),
      isActive: true,
    };
    
    // 将当前任务设为非活跃
    setTasks(prev => prev.map(task => ({ ...task, isActive: false })));
    
    // 添加新任务并设为当前任务
    setTasks(prev => [...prev, newTask]);
    setCurrentTaskId(newTask.id);
  };

  const handleAction = (actionId: string) => {
    console.log('触发动作:', actionId);
    // 这里可以添加具体的动作处理逻辑
  };

  return (
    <AlphaMindLayout
      user={mockUser}
      messages={messages}
      onSendMessage={handleSendMessage}
      onAction={handleAction}
      onClearMessages={handleClearMessages}
      onNewTask={handleNewTask}
      tasks={tasks}
      currentTaskId={currentTaskId}
    />
  );
} 