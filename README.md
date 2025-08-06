# AlphaMind AI 助手 - 设计系统组件库

基于 shadcn/ui 和 Tailwind CSS 构建的现代化设计系统，包含完整的 AlphaMind AI 助手界面。

## 🚀 项目特色

### **AlphaMind AI 助手功能**
- 🤖 **智能对话**：完整的聊天界面，支持用户和 AI 助手对话
- 📱 **手机预览**：社交媒体内容预览，支持全屏显示
- 🌍 **多语言支持**：英文、中文、马来语、泰语、印尼语
- 📋 **任务管理**：侧边栏任务列表，支持分享、重命名、收藏、删除
- ⚙️ **设置界面**：完整的设置页面，支持语言切换和个性化配置

### **设计系统组件**
- 🎨 **现代化 UI**：基于 Tailwind CSS 4.0 和 shadcn/ui
- 📚 **完整组件库**：包含基础组件、数据展示、表单、反馈等
- 📖 **Storybook 文档**：完整的组件文档和示例
- 🔧 **TypeScript 支持**：完整的类型定义

## 📦 技术栈

- **前端框架**：React 18 + TypeScript
- **样式系统**：Tailwind CSS 4.0
- **UI 组件**：shadcn/ui
- **构建工具**：Vite 6.0
- **开发工具**：Storybook 8.0
- **路由管理**：React Router DOM
- **状态管理**：React Context API

## 🛠️ 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 启动 Storybook
```bash
npm run storybook
```

### 构建项目
```bash
npm run build
```

## 📱 AlphaMind 功能详解

### **1. 手机显示功能**
- **全屏按钮**：点击可以弹出全屏手机显示
- **关闭按钮**：可以关闭手机显示
- **社交媒体预览**：显示不同平台的社交媒体内容
- **互动数据**：显示点赞、评论、分享数量

### **2. 侧边栏任务管理**
- **创建时间显示**：每个任务显示创建时间
- **选项按钮**：悬停显示更多操作选项
- **任务操作**：分享、重命名、收藏、删除
- **自动生成**：每次对话都会在侧边栏生成任务

### **3. 多语言支持**
- **英文默认**：默认使用英文界面
- **语言切换**：支持中文、马来语、泰语、印尼语
- **智能提示**：切换国家时提示语言切换

### **4. 界面优化**
- **响应式设计**：适配不同屏幕尺寸
- **现代化UI**：使用 Tailwind CSS 和 shadcn/ui
- **流畅动画**：平滑的过渡效果

## 🎯 访问地址

### **开发服务器**
- **本地地址**：http://localhost:5174
- **AlphaMind 页面**：http://localhost:5174/alphamind

### **Storybook 组件库**
- **本地地址**：http://localhost:6006
- **AlphaMind 组件**：在 Demos/AlphaMind 分类下

## 📁 项目结构

```
src/
├── components/          # 基础 UI 组件
│   ├── ui/             # shadcn/ui 组件
│   │   ├── base/       # 基础组件
│   │   ├── data-display/ # 数据展示组件
│   │   ├── data-entry/ # 表单组件
│   │   ├── feedback/   # 反馈组件
│   │   ├── layout/     # 布局组件
│   │   └── navigation/ # 导航组件
├── demos/              # 演示页面
│   └── Demo6-AlphaMind/ # AlphaMind 项目
│       ├── components/ # AlphaMind 组件
│       ├── contexts/   # React Context
│       ├── i18n/       # 国际化
│       └── types/      # TypeScript 类型
├── stories/            # Storybook 故事
└── styles/             # 全局样式
```

## 🌟 主要功能

### **AlphaMind 核心功能**
1. **智能对话界面**
   - 用户输入和 AI 回复
   - 消息历史记录
   - 自动滚动到最新消息

2. **手机预览功能**
   - 社交媒体内容预览
   - 全屏显示模式
   - 不同平台的内容展示

3. **任务管理系统**
   - 自动生成任务列表
   - 任务操作（分享、重命名、收藏、删除）
   - 创建时间显示

4. **多语言支持**
   - 5种语言支持
   - 智能语言切换
   - 地域化设置

5. **设置界面**
   - 语言设置
   - 外观设置
   - 个性化配置

## 🔧 开发指南

### **添加新组件**
1. 在 `src/components/ui/` 下创建组件
2. 在 `src/stories/` 下创建对应的 Story
3. 在 `src/demos/` 下创建演示页面

### **添加新语言**
1. 在 `src/demos/Demo6-AlphaMind/i18n/translations.ts` 中添加翻译
2. 在 `src/demos/Demo6-AlphaMind/contexts/LanguageContext.tsx` 中更新映射

### **自定义样式**
1. 修改 `src/index.css` 中的全局样式
2. 使用 Tailwind CSS 类名进行样式定制
3. 在组件中使用 `cn()` 函数合并类名

## 📄 许可证

MIT License

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 联系方式

- **项目地址**：[https://github.com/AlphaTok-Singapore/Globalor.git](https://github.com/AlphaTok-Singapore/Globalor.git)
- **问题反馈**：请在 GitHub Issues 中提交问题

---

**AlphaMind AI 助手** - 让 AI 交互更加智能和友好！ 🚀 