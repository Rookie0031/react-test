import React from 'react';
import styles from '../css/ChatHistoryView.module.css';

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
        <div key={index} className={styles.messageContainer}>
          <div className={styles.questionMessage}>
            <div className={styles.messageContent}>
              {item.question}
            </div>
          </div>
          <div className={styles.answerMessage}>
            <div className={styles.messageContent}>
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatHistoryView;
