import React, { useState, useEffect } from 'react';
import ChatHistoryView from './ChatHistroyView';
import SearchBarView from './SearchBarView';
import RequestDTO from '../dto/openai/requestDto';
import ResponseDTO from '../dto/openai/responseDto';

interface UserInputViewProps {
    text: string;
    setText: (text: string) => void;
}

interface ChatHistoryItem {
  question: string;
  answer: string;
}

const UserInputView: React.FC<UserInputViewProps> = ({ text, setText }) => {
  const [history, setHistory] = useState<ChatHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string>('');

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다(새로고침 포함) 새로운 ID 생성
    setConversationId(`conv_${Date.now()}`);
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const requestBody: RequestDTO = {
        content: text,
        conversationId: conversationId // 대화 ID 추가
      };

      const response = await fetch('http://localhost:8001/api/public/openai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: ResponseDTO = await response.json();

      // Update history with the new question and answer
      setHistory(prevHistory => [...prevHistory, { question: text, answer: data.content }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ChatHistoryView history={history} />
      {isLoading && <div>Loading...</div>}
      <SearchBarView text={text} setText={setText} onSubmit={handleSubmit} />
    </div>
  );
}

export default UserInputView;
