import React, { useState } from 'react';
import RequestDTO from '../dto/openai/requestDto';
import ResponseDTO from '../dto/openai/responseDto';
interface UserInputViewProps {
  text: string;
  setText: (text: string) => void;
}

interface HistoryItem {
  question: string;
  answer: string;
}

const UserInputView: React.FC<UserInputViewProps> = ({ text, setText }) => {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

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
      console.log('Success:', data);
      setApiResponse(data.content);

      // Update history with the new question and answer
      setHistory(prevHistory => [...prevHistory, { question: text, answer: data.content }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here" 
      />
      <button onClick={handleSubmit}>Submit</button>
      {apiResponse && <div>{apiResponse}</div>}

      {/* Render the history board */}
      <div className="history-board">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <strong>Q:</strong> {item.question}
            <br />
            <strong>A:</strong> {item.answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserInputView;
