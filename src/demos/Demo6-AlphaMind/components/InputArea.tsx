import { useState } from 'react';
import { Input } from '@/components/ui/data-entry/input';
import { Button } from '@/components/ui/base/button';
import { Send, Bot, Mic } from 'lucide-react';
import { ActionButtons } from './ActionButtons';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  mode?: 'public' | 'private';
  onModeChange?: (mode: 'public' | 'private') => void;
  onAction?: (actionId: string) => void;
}

export function InputArea({ 
  onSendMessage, 
  placeholder = "Ask anything...",
  mode = 'public',
  onModeChange = () => {},
  onAction = () => {}
}: InputAreaProps) {
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

  const handleModeChange = (newMode: 'public' | 'private') => {
    onModeChange(newMode);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-background">
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

      {/* Mode toggle under input */}
      <div className="flex items-center gap-2">
        <Button
          variant={mode === 'public' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleModeChange('public')}
        >
          Public
        </Button>
        <Button
          variant={mode === 'private' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => handleModeChange('private')}
        >
          Private
        </Button>
      </div>

      {/* Action buttons under input - switch by mode */}
      <ActionButtons mode={mode} onAction={onAction} />
    </div>
  );
} 