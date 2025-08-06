import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import { AlphaMindPage } from './demos/Demo6-AlphaMind/index'

// 主页面组件
const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-background text-foreground flex">
      {/* 侧边栏 */}
      <div className="w-80 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-sidebar-foreground">设计系统组件库</h1>
          <p className="text-sm text-sidebar-muted-foreground mt-2">基于 shadcn/ui 的设计系统</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">Demo 页面</h3>
            <div className="space-y-2">
              <Link 
                to="/alphamind" 
                className="block p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-selected transition-colors"
              >
                <div className="font-medium">AlphaMind AI 助手</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  AI 聊天助手界面
                </div>
              </Link>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">基础组件</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Button 按钮</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  各种样式的按钮组件
                </div>
              </div>
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Input 输入框</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  文本输入组件
                </div>
              </div>
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Card 卡片</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  内容展示卡片
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">数据展示</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Table 表格</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  数据表格组件
                </div>
              </div>
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Chart 图表</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  数据可视化图表
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-sidebar-foreground mb-3">反馈组件</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Modal 弹窗</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  模态对话框
                </div>
              </div>
              <div className="p-3 rounded-md bg-sidebar-accent text-sidebar-accent-foreground">
                <div className="font-medium">Toast 提示</div>
                <div className="text-xs text-sidebar-muted-foreground mt-1">
                  消息提示组件
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部栏 */}
        <div className="h-16 border-b border-border bg-background flex items-center px-6">
          <h2 className="text-xl font-semibold">组件库预览</h2>
        </div>
        
        {/* 内容区域 */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">欢迎使用设计系统组件库</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                这是一个基于 shadcn/ui 构建的现代化设计系统，提供了丰富的组件和 Demo 页面。
                你可以通过左侧导航栏查看不同的组件和页面示例。
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">快速开始</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">1</div>
                    <span>点击左侧导航栏中的 "AlphaMind AI 助手" 查看完整的 Demo 页面</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">2</div>
                    <span>浏览各种基础组件、数据展示组件和反馈组件</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">3</div>
                    <span>使用 Storybook 查看详细的组件文档和交互示例</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">技术栈</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">前端框架</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• React 18 + TypeScript</li>
                      <li>• Vite 构建工具</li>
                      <li>• React Router 路由</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">样式系统</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tailwind CSS</li>
                      <li>• shadcn/ui 组件库</li>
                      <li>• CSS 变量主题系统</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 主应用组件
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alphamind" element={<AlphaMindPage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 