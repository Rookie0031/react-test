import React from 'react';
import styles from '../css/ChatHistoryView.module.css'; // Import the CSS file

interface ChatHistoryItem {
  question: string;
  answer: string;
}

interface ChatHistoryViewProps {
  history: ChatHistoryItem[];
}

const ChatHistoryView: React.FC<ChatHistoryViewProps> = ({ history }) => {
  return (
    <div className={styles.historyBoard}>
      {history.map((item, index) => (
        <div key={index} className={styles.historyItem}>
          <strong>Q:</strong> {item.question}
          <br />
          <strong>A:</strong> {item.answer}
          <hr className={styles.divider} /> {/* Add a divider */}
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryView;
