import React from 'react';
import '../css/ChatHistoryView.css'; // Import the CSS file

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
          <hr className="divider" /> {/* Add a divider */}
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryView;
