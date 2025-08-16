import { useState } from 'react';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { 
  X, 
  User, 
  Settings, 
  Sparkles, 
  Database, 
  Calendar, 
  Cloud, 
  Grid3X3, 
  HelpCircle,
  ChevronRight,
  Globe,
  Moon,
  Sun,
  Monitor,
  Bell,
  Shield,
  Palette,
  Volume2,
  Smartphone,
  Download,
  Upload,
  Trash2,
  Key,
  Eye,
  EyeOff,
  Save,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsPageProps {
  onClose?: () => void;
}

export function SettingsPage({ onClose }: SettingsPageProps) {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('settings');
  const [theme, setTheme] = useState('Follow System');
  const [exclusiveContent, setExclusiveContent] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [compactMode, setCompactMode] = useState(false);

  const navigationItems = [
    { id: 'account', label: t.common.account, icon: User, active: activeTab === 'account' },
    { id: 'settings', label: t.common.settings, icon: Settings, active: activeTab === 'settings' },
    { id: 'usage', label: t.common.usage, icon: Sparkles, active: activeTab === 'usage' },
    { id: 'data-controls', label: t.common.dataControls, icon: Database, active: activeTab === 'data-controls' },
    { id: 'scheduled-tasks', label: t.common.scheduledTasks, icon: Calendar, active: activeTab === 'scheduled-tasks' },
    { id: 'cloud-browser', label: t.common.cloudBrowser, icon: Cloud, active: activeTab === 'cloud-browser' },
    { id: 'connected-apps', label: t.common.connectedApps, icon: Grid3X3, active: activeTab === 'connected-apps' },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any);
  };

  const renderSettingsContent = () => (
    <div className="space-y-8">
      {/* General Section */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Settings className="h-5 w-5" />
          {t.settings.general}
        </Typography>
        
        {/* Language Settings */}
        <div className="space-y-3">
          <Typography variant="body" className="text-sm font-medium text-gray-700">
            {t.settings.language}
          </Typography>
          <div className="relative">
            <select
              value={currentLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="English">🇺🇸 English</option>
              <option value="中文 (简体)">🇨🇳 中文 (简体)</option>
              <option value="Bahasa Melayu">🇲🇾 Bahasa Melayu</option>
              <option value="ภาษาไทย">🇹🇭 ภาษาไทย</option>
              <option value="Bahasa Indonesia">🇮🇩 Bahasa Indonesia</option>
              <option value="Tiếng Việt">🇻🇳 Tiếng Việt</option>
              <option value="Filipino">🇵🇭 Filipino</option>
              <option value="हिन्दी">🇮🇳 हिन्दी</option>
              <option value="한국어">🇰🇷 한국어</option>
              <option value="日本語">🇯🇵 日本語</option>
              <option value="العربية">🇸🇦 العربية</option>
              <option value="עברית">🇮🇱 עברית</option>
            </select>
            <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Font Size */}
        <div className="space-y-3">
          <Typography variant="body" className="text-sm font-medium text-gray-700">
            Font Size
          </Typography>
          <div className="flex gap-2">
            {['small', 'medium', 'large'].map((size) => (
              <Button
                key={size}
                variant={fontSize === size ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFontSize(size)}
                className="capitalize"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Compact Mode */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Typography variant="body" className="font-medium">
              Compact Mode
            </Typography>
            <Typography variant="body" className="text-sm text-gray-600 mt-1">
              Reduce spacing for more content
            </Typography>
          </div>
          <div
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              compactMode ? 'bg-blue-500' : 'bg-gray-200'
            }`}
            onClick={() => setCompactMode(!compactMode)}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                compactMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Appearance Section */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Palette className="h-5 w-5" />
          {t.settings.appearance}
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              theme === 'Light' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setTheme('Light')}
          >
            <div className="h-16 bg-white border border-gray-200 rounded mb-2 flex items-center justify-center">
              <div className="space-y-1 w-8">
                <div className="h-1 bg-gray-300 rounded"></div>
                <div className="h-1 bg-gray-300 rounded"></div>
                <div className="h-1 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
            <Typography variant="body" className="text-sm text-center">{t.settings.light}</Typography>
          </div>

          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              theme === 'Dark' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setTheme('Dark')}
          >
            <div className="h-16 bg-gray-800 border border-gray-600 rounded mb-2 flex items-center justify-center">
              <div className="space-y-1 w-8">
                <div className="h-1 bg-gray-500 rounded"></div>
                <div className="h-1 bg-gray-500 rounded"></div>
                <div className="h-1 bg-gray-500 rounded w-2/3"></div>
              </div>
            </div>
            <Typography variant="body" className="text-sm text-center">{t.settings.dark}</Typography>
          </div>

          <div
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
              theme === 'Follow System' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setTheme('Follow System')}
          >
            <div className="h-16 bg-gradient-to-r from-white to-gray-800 border border-gray-300 rounded mb-2 flex items-center justify-center">
              <div className="space-y-1 w-8">
                <div className="h-1 bg-gray-300 rounded"></div>
                <div className="h-1 bg-gray-500 rounded"></div>
                <div className="h-1 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
            <Typography variant="body" className="text-sm text-center">{t.settings.followSystem}</Typography>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                {t.settings.emailNotifications}
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                {t.settings.emailNotificationsDesc}
              </Typography>
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                emailNotifications ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onClick={() => setEmailNotifications(!emailNotifications)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                Push Notifications
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                Receive notifications on your device
              </Typography>
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                pushNotifications ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onClick={() => setPushNotifications(!pushNotifications)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  pushNotifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                Sound Notifications
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                Play sound for new messages
              </Typography>
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                soundEnabled ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Personalization Section */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          {t.settings.personalization}
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                {t.settings.receiveExclusiveContent}
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                {t.settings.receiveExclusiveContentDesc}
              </Typography>
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                exclusiveContent ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onClick={() => setExclusiveContent(!exclusiveContent)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  exclusiveContent ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                Auto Save
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                Automatically save your work
              </Typography>
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                autoSave ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              onClick={() => setAutoSave(!autoSave)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSave ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Advanced Settings
          </Typography>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-blue-600 hover:text-blue-700"
          >
            {showAdvanced ? 'Hide' : 'Show'}
          </Button>
        </div>
        
        {showAdvanced && (
          <div className="space-y-4 pl-4 border-l-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="body" className="font-medium">
                  Developer Mode
                </Typography>
                <Typography variant="body" className="text-sm text-gray-600 mt-1">
                  Enable advanced features and debugging
                </Typography>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 cursor-pointer">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="body" className="font-medium">
                  Analytics
                </Typography>
                <Typography variant="body" className="text-sm text-gray-600 mt-1">
                  Help improve manus with usage data
                </Typography>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 cursor-pointer">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Data Management */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Database className="h-5 w-5" />
          Data Management
        </Typography>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12 flex flex-col items-center justify-center gap-1">
            <Download className="h-4 w-4" />
            <span className="text-xs">Export Data</span>
          </Button>
          <Button variant="outline" className="h-12 flex flex-col items-center justify-center gap-1">
            <Upload className="h-4 w-4" />
            <span className="text-xs">Import Data</span>
          </Button>
          <Button variant="outline" className="h-12 flex flex-col items-center justify-center gap-1">
            <RotateCcw className="h-4 w-4" />
            <span className="text-xs">Reset Settings</span>
          </Button>
          <Button variant="outline" className="h-12 flex flex-col items-center justify-center gap-1 text-red-600 hover:text-red-700">
            <Trash2 className="h-4 w-4" />
            <span className="text-xs">Clear All Data</span>
          </Button>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Privacy & Security
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                {t.settings.manageCookies}
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                Control cookie preferences
              </Typography>
            </div>
            <Button variant="outline" size="sm" className="h-8 px-4">
              {t.settings.manage}
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="body" className="font-medium">
                Two-Factor Authentication
              </Typography>
              <Typography variant="body" className="text-sm text-gray-600 mt-1">
                Add an extra layer of security
              </Typography>
            </div>
            <Button variant="outline" size="sm" className="h-8 px-4">
              Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccountContent = () => (
    <div className="space-y-8">
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">A</span>
        </div>
        <Typography variant="h3" className="text-xl font-semibold">Alex Lei</Typography>
        <Typography variant="body" className="text-gray-600">alex@example.com</Typography>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold">Account Information</Typography>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Alex Lei"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              defaultValue="alex@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold">Subscription</Typography>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <Typography variant="body" className="font-semibold text-blue-900">Pro Plan</Typography>
              <Typography variant="body" className="text-sm text-blue-700">$19/month</Typography>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsageContent = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <Typography variant="body" className="text-sm text-blue-600 font-medium">API Calls</Typography>
          <Typography variant="h3" className="text-2xl font-bold text-blue-900">1,247</Typography>
          <Typography variant="body" className="text-xs text-blue-700">of 10,000 this month</Typography>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <Typography variant="body" className="text-sm text-green-600 font-medium">Storage Used</Typography>
          <Typography variant="h3" className="text-2xl font-bold text-green-900">2.4 GB</Typography>
          <Typography variant="body" className="text-xs text-green-700">of 50 GB total</Typography>
        </div>
        <div className="bg-purple-50 rounded-lg p-4">
          <Typography variant="body" className="text-sm text-purple-600 font-medium">Active Projects</Typography>
          <Typography variant="h3" className="text-2xl font-bold text-purple-900">12</Typography>
          <Typography variant="body" className="text-xs text-purple-700">created this month</Typography>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" className="text-lg font-semibold">Recent Activity</Typography>
        <div className="space-y-3">
          {[
            { action: 'Created new project', time: '2 hours ago', type: 'create' },
            { action: 'Updated settings', time: '1 day ago', type: 'update' },
            { action: 'Exported data', time: '3 days ago', type: 'export' },
            { action: 'Connected new app', time: '1 week ago', type: 'connect' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <Typography variant="body" className="font-medium">{item.action}</Typography>
                <Typography variant="body" className="text-sm text-gray-600">{item.time}</Typography>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                item.type === 'create' ? 'bg-green-500' :
                item.type === 'update' ? 'bg-blue-500' :
                item.type === 'export' ? 'bg-purple-500' : 'bg-orange-500'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return renderAccountContent();
      case 'usage':
        return renderUsageContent();
      case 'settings':
      default:
        return renderSettingsContent();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[900px] h-[650px] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-50 p-6 flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">m</span>
            </div>
            <Typography variant="body" className="font-semibold text-lg">
              manus
            </Typography>
          </div>

          {/* Navigation */}
          <div className="flex-1 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    item.active ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Help */}
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{t.common.getHelp}</span>
            <ChevronRight className="h-3 w-3 ml-auto" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Typography variant="h2" className="text-2xl font-bold">
              {navigationItems.find(item => item.active)?.label || t.settings.title}
            </Typography>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 px-3">
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
} 