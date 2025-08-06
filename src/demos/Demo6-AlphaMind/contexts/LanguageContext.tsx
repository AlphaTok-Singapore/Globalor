import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translation, Language } from '../i18n/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  showLanguageDialog: (countryCode: string) => void;
  hideLanguageDialog: () => void;
  isLanguageDialogVisible: boolean;
  suggestedLanguage: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// 国家代码到语言的映射
const countryToLanguage: { [key: string]: string } = {
  'CN': '中文 (简体)',
  'MY': 'Bahasa Melayu',
  'TH': 'ภาษาไทย',
  'ID': 'Bahasa Indonesia',
  // 其他国家都切换到英文
  'SG': 'English',
  'JP': 'English',
  'KR': 'English',
  'IN': 'English',
  'PH': 'English',
  'VN': 'English',
  'TW': 'English',
  'HK': 'English',
  'AE': 'English',
  'SA': 'English',
  'IL': 'English',
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('English');
  const [isLanguageDialogVisible, setIsLanguageDialogVisible] = useState(false);
  const [suggestedLanguage, setSuggestedLanguage] = useState<string | null>(null);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('alphaMind-language', language);
  };

  const showLanguageDialog = (countryCode: string) => {
    const suggestedLang = countryToLanguage[countryCode];
    if (suggestedLang) {
      // 如果建议的语言与当前语言不同，显示对话框
      if (suggestedLang !== currentLanguage) {
        setSuggestedLanguage(suggestedLang);
        setIsLanguageDialogVisible(true);
      }
    }
  };

  const hideLanguageDialog = () => {
    setIsLanguageDialogVisible(false);
    setSuggestedLanguage(null);
  };

  const t = translations[currentLanguage];

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    showLanguageDialog,
    hideLanguageDialog,
    isLanguageDialogVisible,
    suggestedLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 