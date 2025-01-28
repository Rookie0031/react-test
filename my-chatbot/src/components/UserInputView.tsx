import React from 'react';

interface UserInputViewProps {
  text: string;
  setText: (text: string) => void;
}

const UserInputView: React.FC<UserInputViewProps> = ({ text, setText }) => {
  const handleSubmit = async () => {
    try {
      const requestBody = {
        content: text
      }
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

      const data = await response.json();
      console.log('Success:', data);
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
    </div>
  );
}

export default UserInputView;
