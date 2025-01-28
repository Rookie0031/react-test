import React from 'react';

interface ChatHistoryItem {
  question: string;
  answer: string;
}

interface ChatHistoryViewProps {
  history: ChatHistoryItem[];
}

const ChatHistoryView: React.FC<ChatHistoryViewProps> = ({ history }) => {
  return (
    <div className="history-board">
      {history.map((item, index) => (
        <div key={index} className="history-item">
          <strong>Q:</strong> {item.question}
          <br />
          <strong>A:</strong> {item.answer}
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryView;
