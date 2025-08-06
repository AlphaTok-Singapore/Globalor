import { useState } from 'react';
import { Input } from '@/components/ui/data-entry/input';
import { Button } from '@/components/ui/base/button';
import { Send } from 'lucide-react';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
}

export function InputArea({ onSendMessage, placeholder = "Ask anything..." }: InputAreaProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 p-8 bg-background">
      <div className="relative max-w-2xl w-full">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="h-16 text-lg pr-14"
        />
        <Button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
} 