import React, { useState } from 'react';
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

  const handleSubmit = async () => {
    try {
      const requestBody: RequestDTO = {
        content: text
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
    }
  };

  return (
    <div>
      {/* Use the SearchBarView component */}
      <SearchBarView text={text} setText={setText} onSubmit={handleSubmit} />

      {/* Use the HistoryBoard component */}
      <ChatHistoryView history={history} />
    </div>
  );
}

export default UserInputView;
