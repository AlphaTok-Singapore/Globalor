import { useState } from 'react';
import { Input } from '@/components/ui/data-entry/input';
import { Button } from '@/components/ui/base/button';
import { Send, Bot, Mic } from 'lucide-react';

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
        <div className="relative">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="h-20 text-lg pr-32 pl-12"
          />
          {/* Agent 标志 */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Bot className="h-5 w-5 text-gray-400" />
          </div>
          {/* 语音按钮 */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-16 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700"
          >
            <Mic className="h-4 w-4" />
          </Button>
          {/* 发送按钮 */}
          <Button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center"
          >
            <Send className="h-4 w-4 rotate-90" />
          </Button>
        </div>
      </div>
    </div>
  );
} 