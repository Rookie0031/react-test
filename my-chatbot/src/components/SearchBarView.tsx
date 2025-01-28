import React from 'react';
import styles from '../css/SearchBarView.module.css';

interface SearchBarViewProps {
  text: string;
  setText: (text: string) => void;
  onSubmit: () => void;
}

const SearchBarView: React.FC<SearchBarViewProps> = ({ text, setText, onSubmit }) => {
  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here" 
        className={styles.input}
      />
      <button 
        onClick={onSubmit} 
        className={styles.button}
      >
        Submit
      </button>
    </div>
  );
};

export default SearchBarView;
