import { ChatMessage } from '../types';
import { Typography } from '@/components/ui/base/typography';
import { Avatar } from '@/components/ui/base/avatar';
import { BlockLayout } from '@/components/ui/layout/block-layout';

interface ChatInterfaceProps {
  messages: ChatMessage[];
}

export function ChatInterface({ messages }: ChatInterfaceProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Welcome section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 p-8">
        <div className="space-y-4">
          <Typography variant="h1" className="text-4xl font-bold text-foreground">
            AlphaMind
          </Typography>
          <Typography variant="body" className="text-muted-foreground text-lg">
            Your AI-powered assistant
          </Typography>
        </div>

        {/* Messages display */}
        {messages.length > 0 && (
          <BlockLayout className="w-full max-w-4xl space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.type === 'assistant' && (
                  <Avatar className="w-8 h-8">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Typography variant="body" className="text-primary-foreground font-medium text-sm">
                        AM
                      </Typography>
                    </div>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <Typography variant="body" className="text-sm">
                    {message.content}
                  </Typography>
                </div>
                {message.type === 'user' && (
                  <Avatar className="w-8 h-8">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Typography variant="body" className="text-secondary-foreground font-medium text-sm">
                        U
                      </Typography>
                    </div>
                  </Avatar>
                )}
              </div>
            ))}
          </BlockLayout>
        )}
      </div>
    </div>
  );
} 