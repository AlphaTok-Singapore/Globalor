import { 
  Image, 
  Presentation, 
  Globe, 
  FileSpreadsheet, 
  BarChart3, 
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/base/button';
import { useLanguage } from '../contexts/LanguageContext';

interface ActionButtonsProps {
  onAction?: (actionId: string) => void;
}

export function ActionButtons({ onAction = () => {} }: ActionButtonsProps) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center gap-3 p-8 bg-background">
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2"
          onClick={() => onAction('image')}
        >
          <Image className="h-5 w-5" />
          <span className="text-base">{t.actions.image}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2"
          onClick={() => onAction('slides')}
        >
          <Presentation className="h-5 w-5" />
          <span className="text-base">{t.actions.slides}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2"
          onClick={() => onAction('webpage')}
        >
          <Globe className="h-5 w-5" />
          <span className="text-base">{t.actions.webpage}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2 relative"
          onClick={() => onAction('spreadsheet')}
        >
          <FileSpreadsheet className="h-5 w-5" />
          <span className="text-base">{t.actions.spreadsheet}</span>
          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1 rounded">{t.actions.new}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2"
          onClick={() => onAction('visualization')}
        >
          <BarChart3 className="h-5 w-5" />
          <span className="text-base">{t.actions.visualization}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-11 px-4 gap-2"
          onClick={() => onAction('more')}
        >
          <MoreHorizontal className="h-5 w-5" />
          <span className="text-base">{t.actions.more}</span>
        </Button>
      </div>
    </div>
  );
} 