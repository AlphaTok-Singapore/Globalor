import { Button } from '@/components/ui/base/button';
import { Typography } from '@/components/ui/base/typography';
import { Globe, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageDialogProps {
  isVisible: boolean;
  onClose: () => void;
  onSwitchLanguage: (language: string) => void;
  suggestedLanguage: string | null;
}

export function LanguageDialog({ 
  isVisible, 
  onClose, 
  onSwitchLanguage, 
  suggestedLanguage 
}: LanguageDialogProps) {
  const { t } = useLanguage();

  if (!isVisible || !suggestedLanguage) return null;

  const handleSwitchLanguage = () => {
    onSwitchLanguage(suggestedLanguage);
    onClose();
  };

  const handleKeepCurrentLanguage = () => {
    onClose();
  };

  // 根据建议的语言决定按钮文本
  const getButtonText = () => {
    if (suggestedLanguage === 'English') {
      return t.languageDialog.keepCurrentLanguage;
    } else {
      return t.languageDialog.keepEnglish;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <Typography variant="h3" className="text-lg font-semibold">
              {t.languageDialog.title}
            </Typography>
          </div>
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
        <div className="p-6">
          <Typography variant="body" className="text-gray-600 mb-6">
            {t.languageDialog.message}
          </Typography>

          {/* Language Preview */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <Typography variant="body" className="text-sm font-medium text-gray-700 mb-2">
              Suggested Language:
            </Typography>
            <Typography variant="body" className="text-lg font-semibold text-gray-900">
              {suggestedLanguage}
            </Typography>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleKeepCurrentLanguage}
              className="flex-1"
            >
              {getButtonText()}
            </Button>
            <Button
              onClick={handleSwitchLanguage}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              {t.languageDialog.switchLanguage}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 