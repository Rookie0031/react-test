import { useState } from 'react'
import './App.css'
import UserInputView from './components/UserInputView'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <h1>My Chatbot</h1>
        <UserInputView text={text} setText={setText} />
    </>
  )
}

export default App
