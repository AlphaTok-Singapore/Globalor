import type { Meta, StoryObj } from '@storybook/react';
import { AlphaMindPage } from '../../demos/Demo6-AlphaMind/index';

const meta: Meta<typeof AlphaMindPage> = {
  title: 'Demos/AlphaMind',
  component: AlphaMindPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'AlphaMind AI 助手界面，包含聊天、任务管理、手机预览等功能。',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'AlphaMind AI 助手的完整界面，包含聊天、任务管理、手机预览等功能。',
      },
    },
  },
}; 