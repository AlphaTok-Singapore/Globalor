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
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
    onAction(platform);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-8 bg-background">
      <div className="flex items-center gap-6">
        <Button 
          variant={selectedPlatforms.includes('linkedin') ? "default" : "ghost"}
          size="sm" 
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
          variant={selectedPlatforms.includes('github') ? "default" : "ghost"}
          size="sm" 
          className={`h-16 w-16 p-0 rounded-full transition-all duration-200 ${
            selectedPlatforms.includes('github') 
              ? 'bg-gray-800 text-white shadow-lg scale-110' 
              : 'hover:bg-gray-100 hover:scale-105'
          }`}
          onClick={() => togglePlatform('github')}
        >
          <Github className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
} 