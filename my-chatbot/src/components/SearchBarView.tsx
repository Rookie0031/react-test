import React from 'react';

interface SearchBarViewProps {
  text: string;
  setText: (text: string) => void;
  onSubmit: () => void;
}

const SearchBarView: React.FC<SearchBarViewProps> = ({ text, setText, onSubmit }) => {
  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter text here" 
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default SearchBarView;
