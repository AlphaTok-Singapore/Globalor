import type { Meta, StoryObj } from '@storybook/react';
import { AlphaMindLayout } from '../../demos/Demo6-AlphaMind/components/AlphaMindLayout';
import { ChatMessage, User } from '../../demos/Demo6-AlphaMind/types';

const meta: Meta<typeof AlphaMindLayout> = {
  title: 'Demos/AlphaMind',
  component: AlphaMindLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'AlphaMind AI 助手界面，包含聊天、任务管理、手机预览等功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    messages: {
      control: 'object',
      description: '聊天消息列表',
    },
    user: {
      control: 'object',
      description: '用户信息',
    },
    onSendMessage: {
      action: 'message sent',
      description: '发送消息的回调函数',
    },
    onAction: {
      action: 'action triggered',
      description: '触发动作的回调函数',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 模拟用户数据
const mockUser: User = {
  id: '1',
  name: 'Alex Lei',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
};

// 模拟聊天消息
const mockMessages: ChatMessage[] = [
  {
    id: '1',
    content: '你好，我需要创建一个社交媒体营销方案。',
    type: 'user',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    content: '好的！我可以帮您创建一个完整的社交媒体营销方案。请告诉我您的目标受众、产品类型和营销目标，我会为您制定一个详细的策略。',
    type: 'assistant',
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: '3',
    content: '我的目标受众是25-35岁的年轻白领，产品是健康食品，目标是提高品牌知名度。',
    type: 'user',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    content: '完美！基于您的需求，我建议采用以下策略：\n\n1. **内容策略**：\n   - 健康生活方式分享\n   - 营养知识科普\n   - 用户见证和案例\n\n2. **平台选择**：\n   - 小红书（生活方式内容）\n   - 抖音（短视频营销）\n   - 微信（私域流量）\n\n3. **内容类型**：\n   - 图文内容 40%\n   - 短视频 35%\n   - 直播 15%\n   - 互动活动 10%\n\n需要我为您生成具体的社交媒体内容吗？',
    type: 'assistant',
    timestamp: new Date(Date.now() - 120000),
  },
];

// 更多消息用于测试滚动
const longMockMessages: ChatMessage[] = [
  ...mockMessages,
  {
    id: '5',
    content: '太好了！请帮我生成一些具体的社交媒体内容。',
    type: 'user',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '6',
    content: '我已经为您生成了以下内容：\n\n**小红书文案：**\n"🌱 今天分享一个超简单的健康早餐！\n\n🥗 只需要5分钟，营养又美味\n✅ 富含蛋白质和纤维\n✅ 低糖低脂\n✅ 适合忙碌的上班族\n\n#健康生活 #营养早餐 #上班族必备"\n\n**抖音脚本：**\n"开场：展示健康食品\n过程：制作过程（快进）\n结尾：成品展示 + 购买链接\n\n标签：#健康食品 #营养早餐 #上班族"\n\n需要我继续生成更多内容吗？',
    type: 'assistant',
    timestamp: new Date(Date.now() - 30000),
  },
];

export const Default: Story = {
  args: {
    user: mockUser,
    messages: [],
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
};

export const WithMessages: Story = {
  args: {
    user: mockUser,
    messages: mockMessages,
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
};

export const LongConversation: Story = {
  args: {
    user: mockUser,
    messages: longMockMessages,
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
};

export const WithoutUser: Story = {
  args: {
    messages: mockMessages,
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
};

export const EmptyState: Story = {
  args: {
    user: mockUser,
    messages: [],
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '显示初始状态，包含欢迎信息和输入框。',
      },
    },
  },
};

export const WithPhoneDisplay: Story = {
  args: {
    user: mockUser,
    messages: mockMessages,
    onSendMessage: (message: string) => {
      console.log('发送消息:', message);
    },
    onAction: (actionId: string) => {
      console.log('触发动作:', actionId);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '当用户选择动作按钮时，会显示手机预览界面。',
      },
    },
  },
}; 