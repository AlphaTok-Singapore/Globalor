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
  Mail,
  Bell,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsPageProps {
  onClose?: () => void;
}

export function SettingsPage({ onClose }: SettingsPageProps) {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState('Follow System');
  const [exclusiveContent, setExclusiveContent] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const navigationItems = [
    { id: 'account', label: t.common.account, icon: User, active: false },
    { id: 'settings', label: t.common.settings, icon: Settings, active: true },
    { id: 'usage', label: t.common.usage, icon: Sparkles, active: false },
    { id: 'data-controls', label: t.common.dataControls, icon: Database, active: false },
    { id: 'scheduled-tasks', label: t.common.scheduledTasks, icon: Calendar, active: false },
    { id: 'cloud-browser', label: t.common.cloudBrowser, icon: Cloud, active: false },
    { id: 'connected-apps', label: t.common.connectedApps, icon: Grid3X3, active: false },
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as any);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[800px] h-[600px] flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-50 p-6 flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <Typography variant="body" className="font-semibold text-lg">
              AlphaMind
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
              {t.settings.title}
            </Typography>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-8">
              {/* General Section */}
              <div className="space-y-4">
                <Typography variant="h3" className="text-lg font-semibold">
                  {t.settings.general}
                </Typography>
                <div className="space-y-2">
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
                  {/* Language Input */}
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Custom language (e.g., en-US)"
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Appearance Section */}
              <div className="space-y-4">
                <Typography variant="h3" className="text-lg font-semibold">
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
                    <div className="flex items-center gap-3 mb-2">
                      <Sun className="h-4 w-4 text-gray-600" />
                      <Typography variant="body" className="font-medium">{t.settings.light}</Typography>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      theme === 'Dark' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setTheme('Dark')}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Moon className="h-4 w-4 text-gray-600" />
                      <Typography variant="body" className="font-medium">{t.settings.dark}</Typography>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                    </div>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      theme === 'Follow System' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setTheme('Follow System')}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Monitor className="h-4 w-4 text-gray-600" />
                      <Typography variant="body" className="font-medium">{t.settings.followSystem}</Typography>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-600 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalization Section */}
              <div className="space-y-4">
                <Typography variant="h3" className="text-lg font-semibold">
                  {t.settings.personalization}
                </Typography>
                <div className="space-y-4">
                  {/* Import File */}
                  <div className="flex items-center justify-between">
                    <Typography variant="body" className="font-medium">
                      Import configuration
                    </Typography>
                    <label className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="file" className="hidden" />
                      <span className="text-sm">Import file</span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Typography variant="body" className="font-medium">
                        {t.settings.receiveExclusiveContent}
                      </Typography>
                      <Typography variant="body" className="text-sm text-gray-600 mt-1">
                        {t.settings.receiveExclusiveContentDesc}
                      </Typography>
                    </div>
                    <Button
                      variant={exclusiveContent ? "default" : "outline"}
                      size="sm"
                      onClick={() => setExclusiveContent(!exclusiveContent)}
                      className={`h-8 px-3 ${exclusiveContent ? 'bg-blue-500' : ''}`}
                    >
                      {exclusiveContent ? 'On' : 'Off'}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Typography variant="body" className="font-medium">
                        {t.settings.emailNotifications}
                      </Typography>
                      <Typography variant="body" className="text-sm text-gray-600 mt-1">
                        {t.settings.emailNotificationsDesc}
                      </Typography>
                    </div>
                    <Button
                      variant={emailNotifications ? "default" : "outline"}
                      size="sm"
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`h-8 px-3 ${emailNotifications ? 'bg-blue-500' : ''}`}
                    >
                      {emailNotifications ? 'On' : 'Off'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Manage Cookies Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="body" className="font-medium">
                    {t.settings.manageCookies}
                  </Typography>
                  <Button variant="outline" size="sm" className="h-8 px-4">
                    {t.settings.manage}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 