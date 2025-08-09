import { useState } from 'react';
import { 
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  StickyNote,
  Music,
  Mail,
  MessageCircle,
  Send,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/base/button';


interface ActionButtonsProps {
  onAction?: (actionId: string) => void;
  mode?: 'public' | 'private';
}

export function ActionButtons({ onAction = () => {}, mode = 'public' }: ActionButtonsProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => {
      if (mode === 'private') {
        // Single-select in private mode
        return [platform];
      }
      return prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform];
    });
    onAction(platform);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-8 bg-background">
      <div className="flex items-center gap-6">
        {mode === 'public' ? (
          <>
        <Button 
          variant={selectedPlatforms.includes('linkedin') ? "default" : "ghost"}
          size="sm" 
          title="LinkedIn"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('linkedin') 
              ? 'bg-blue-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('linkedin')}
        >
          <Linkedin className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('facebook') ? "default" : "ghost"}
          size="sm" 
          title="Facebook"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('facebook') 
              ? 'bg-blue-700 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('facebook')}
        >
          <Facebook className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('instagram') ? "default" : "ghost"}
          size="sm" 
          title="Instagram"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('instagram') 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('instagram')}
        >
          <Instagram className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('twitter') ? "default" : "ghost"}
          size="sm" 
          title="Twitter"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('twitter') 
              ? 'bg-blue-400 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('twitter')}
        >
          <Twitter className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('youtube') ? "default" : "ghost"}
          size="sm" 
          title="YouTube"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('youtube') 
              ? 'bg-red-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('youtube')}
        >
          <Youtube className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('tiktok') ? "default" : "ghost"}
          size="sm" 
          title="TikTok"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('tiktok') 
              ? 'bg-gray-900 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('tiktok')}
        >
          <Music className="h-8 w-8" />
        </Button>
          </>
        ) : (
          <>
        <Button 
          variant={selectedPlatforms.includes('email') ? "default" : "ghost"}
          size="sm" 
          title="Email"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('email') 
              ? 'bg-blue-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('email')}
        >
          <Mail className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('whatsapp') ? "default" : "ghost"}
          size="sm" 
          title="WhatsApp"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('whatsapp') 
              ? 'bg-green-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('whatsapp')}
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('telegram') ? "default" : "ghost"}
          size="sm" 
          title="Telegram"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('telegram') 
              ? 'bg-sky-500 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('telegram')}
        >
          <Send className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('line') ? "default" : "ghost"}
          size="sm" 
          title="Line"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('line') 
              ? 'bg-green-500 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('line')}
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatforms.includes('crm') ? "default" : "ghost"}
          size="sm" 
          title="CRM"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('crm') 
              ? 'bg-purple-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('crm')}
        >
          <Briefcase className="h-8 w-8" />
        </Button>

        {/* Rednote (replaces GitHub) */}
        <Button 
          variant={selectedPlatforms.includes('rednote') ? "default" : "ghost"}
          size="sm" 
          title="Rednote"
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('rednote') 
              ? 'bg-red-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('rednote')}
        >
          <StickyNote className="h-8 w-8" />
        </Button>
          </>
        )}
      </div>
    </div>
  );
} 