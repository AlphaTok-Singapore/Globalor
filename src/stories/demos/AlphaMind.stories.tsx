import type { Meta, StoryObj } from '@storybook/react';
import { AlphaMindPage } from '../../demos/Demo6-AlphaMind/index';

const meta = {
  title: 'Demos/06-AlphaMind',
  component: AlphaMindPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AlphaMindPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'AlphaMind AI 助手',
  render: () => <AlphaMindPage />,
}; 