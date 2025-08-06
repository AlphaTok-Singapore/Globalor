import { User } from '../types';
import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import {
  Bell,
  Smartphone,
  Star,
  ChevronDown,
  Globe
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TopHeaderProps {
  user?: User;
  isSidebarCollapsed?: boolean;
}

// 亚洲国家数据
const asianCountries = [
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', color: 'bg-red-500' },
  { code: 'CN', name: 'China', flag: '🇨🇳', color: 'bg-red-600' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', color: 'bg-red-500' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', color: 'bg-blue-500' },
  { code: 'IN', name: 'India', flag: '🇮🇳', color: 'bg-orange-500' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', color: 'bg-blue-600' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', color: 'bg-blue-500' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', color: 'bg-red-500' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', color: 'bg-blue-600' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', color: 'bg-red-500' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼', color: 'bg-red-500' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰', color: 'bg-red-500' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', color: 'bg-green-600' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', color: 'bg-green-600' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱', color: 'bg-blue-600' }
];

export function TopHeader({ user, isSidebarCollapsed = false }: TopHeaderProps) {
  const { showLanguageDialog, setLanguage } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState(asianCountries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCountrySelect = (country: typeof asianCountries[0]) => {
    const previousCountry = selectedCountry;
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    
    // 如果切换到了不同的国家，显示语言切换对话框
    if (previousCountry.code !== country.code) {
      showLanguageDialog(country.code);
    }
  };

  // 关闭下拉菜单当点击外部时
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCountryDropdown]);

  return (
    <div className="flex items-center justify-between p-4 bg-background">
      {/* 左侧 - Logo 和名称 */}
      <div className="flex items-center gap-4">
        <div className={`flex items-center gap-2 ${isSidebarCollapsed ? 'ml-12' : ''}`}>
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <Typography variant="body" className="font-semibold text-lg">
            AlphaMind
          </Typography>
        </div>
      </div>

      {/* 右侧 - 国家选择器 */}
      <div className="flex items-center gap-4">
        {/* 通知按钮 */}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Bell className="h-4 w-4" />
        </Button>

        {/* 国家选择器 */}
        <div className="relative" ref={dropdownRef}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            className="h-8 px-3 gap-2 border-gray-300 hover:border-gray-400"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-sm font-medium">{selectedCountry.code}</span>
            <span className="text-sm text-gray-600">{selectedCountry.name}</span>
            <ChevronDown 
              className={`h-3 w-3 transition-transform ${showCountryDropdown ? 'rotate-180' : ''}`} 
            />
          </Button>

          {/* 下拉菜单 */}
          {showCountryDropdown && (
            <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              <div className="py-2">
                {asianCountries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {country.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {country.code}
                      </div>
                    </div>
                    {selectedCountry.code === country.code && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 