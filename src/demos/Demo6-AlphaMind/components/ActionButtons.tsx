import { useState } from 'react';
import { 
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github
} from 'lucide-react';
import { Button } from '@/components/ui/base/button';


interface ActionButtonsProps {
  onAction?: (actionId: string) => void;
}

export function ActionButtons({ onAction = () => {} }: ActionButtonsProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handlePlatformClick = (platform: string) => {
    setSelectedPlatform(platform);
    onAction(platform);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-8 bg-background">
      <div className="flex items-center gap-6">
        <Button 
          variant={selectedPlatform === 'linkedin' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'linkedin' 
              ? 'bg-blue-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('linkedin')}
        >
          <Linkedin className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatform === 'facebook' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'facebook' 
              ? 'bg-blue-700 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('facebook')}
        >
          <Facebook className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatform === 'instagram' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'instagram' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('instagram')}
        >
          <Instagram className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatform === 'twitter' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'twitter' 
              ? 'bg-blue-400 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('twitter')}
        >
          <Twitter className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatform === 'youtube' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'youtube' 
              ? 'bg-red-600 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('youtube')}
        >
          <Youtube className="h-8 w-8" />
        </Button>
        <Button 
          variant={selectedPlatform === 'github' ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatform === 'github' 
              ? 'bg-gray-800 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => handlePlatformClick('github')}
        >
          <Github className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
} 