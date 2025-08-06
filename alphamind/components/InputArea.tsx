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
    <div className="flex items-center gap-3 p-4 border-t border-border bg-background">
      <div className="flex-1">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="h-12 text-base"
        />
      </div>
      <Button
        onClick={handleSend}
        disabled={!inputValue.trim()}
        className="h-12 w-12 p-0"
      >
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
} 