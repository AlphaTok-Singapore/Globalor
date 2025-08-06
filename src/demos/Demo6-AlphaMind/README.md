# AlphaMind AI 助手页面

基于设计系统开发的 AlphaMind AI 助手页面，完全符合 PRD 需求和设计规范。

## 🎯 功能特性

- **响应式布局**：支持不同屏幕尺寸的自适应布局
- **侧边栏导航**：可折叠的侧边栏，包含 Chat、Dashboard、Agents、Data、Workflows、Analytics、Settings
- **聊天界面**：支持用户和 AI 助手的对话交互
- **操作按钮**：Search、Spaces、Help、Web、Attach、Voice 等功能按钮
- **系统状态**：显示在线状态和系统信息
- **主题支持**：支持明暗主题切换

## 📁 文件结构

```
alphamind/
├── components/
│   ├── AlphaMindLayout.tsx      # 主布局组件
│   ├── Sidebar.tsx              # 侧边栏导航
│   ├── TopHeader.tsx            # 顶部状态栏
│   ├── ChatInterface.tsx        # 聊天界面
│   ├── InputArea.tsx            # 输入区域
│   └── ActionButtons.tsx        # 操作按钮组
├── types/
│   └── index.ts                 # 类型定义
├── index.tsx                    # 主入口文件
├── AlphaMind.stories.tsx        # Storybook 故事
└── README.md                    # 使用说明
```

## 🚀 使用方法

### 基本使用

```tsx
import { AlphaMindPage } from './alphamind';

function App() {
  return <AlphaMindPage />;
}
```

### 自定义配置

```tsx
import { AlphaMindLayout } from './alphamind/components/AlphaMindLayout';

function CustomAlphaMind() {
  const handleSendMessage = (message: string) => {
    // 自定义消息处理逻辑
    console.log('发送消息:', message);
  };

  const handleAction = (actionId: string) => {
    // 自定义操作处理逻辑
    console.log('触发操作:', actionId);
  };

  return (
    <AlphaMindLayout
      messages={customMessages}
      systemStatus={customSystemStatus}
      onSendMessage={handleSendMessage}
      onAction={handleAction}
    />
  );
}
```

## 🎨 设计规范遵循

### 组件复用
- 使用 `PageContainer` 作为页面容器
- 使用 `BlockLayout` 作为内容区块
- 使用 `Button`、`Input`、`Typography` 等基础组件
- 使用 `Tooltip` 提供操作提示

### 样式规范
- 遵循 4px 倍数递增的间距原则
- 使用主题变量，避免硬编码颜色
- 支持响应式设计
- 遵循布局系统规范

### 类型安全
- 完整的 TypeScript 类型定义
- 接口清晰的组件 API
- 类型安全的属性传递

## 📋 组件 API

### AlphaMindLayout

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| messages | ChatMessage[] | [] | 聊天消息列表 |
| systemStatus | SystemStatus | 默认在线状态 | 系统状态信息 |
| onSendMessage | (message: string) => void | () => {} | 发送消息回调 |
| onAction | (actionId: string) => void | () => {} | 操作按钮回调 |

### 类型定义

```tsx
interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  user?: User;
}

interface SystemStatus {
  isOnline: boolean;
  lastUpdate: Date;
  version: string;
}
```

## 🎪 功能演示

### 聊天功能
- 支持文本输入和发送
- 显示用户和 AI 助手的对话
- 支持 Enter 键快速发送

### 侧边栏导航
- 可折叠的侧边栏设计
- 高亮当前激活的导航项
- 平滑的展开/收起动画

### 操作按钮
- Search：搜索对话历史
- Spaces：管理工作空间
- Help：获取帮助信息
- Web：网络浏览功能
- Attach：文件附件功能
- Voice：语音输入功能

## 🔧 开发说明

### 组件拆分原则
- **职责单一**：每个组件只负责一个特定功能
- **可复用性**：组件设计考虑复用场景
- **类型安全**：完整的 TypeScript 类型定义
- **样式规范**：遵循设计系统规范

### 状态管理
- 使用 React hooks 管理组件状态
- 通过 props 传递数据和回调函数
- 保持组件的纯函数特性

### 性能优化
- 合理的组件拆分避免不必要的重渲染
- 使用 React.memo 优化性能
- 避免在渲染函数中创建新对象

## 📚 相关文档

- [组件库参考手册](../COMPONENT_LIBRARY_REFERENCE.md)
- [布局系统规范](../LAYOUT_SYSTEM.md)
- [前端样式开发规范](../.cursor/rules/frontend-styles.mdc) 