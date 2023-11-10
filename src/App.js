// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div>
        <label>Enter length of the password: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div>
        <label>Include Uppercase: </label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>

      <div>
        <label>Include Numbers: </label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>

      <div>
        <label>Include Symbols: </label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>

      <button onClick={generatePassword}>Generate Password</button>

      <div>
        <h2>Generated Password:</h2>
        <input type="text" value={password} readOnly />
        <button onClick={copyToClipboard}>Copy password</button>
      </div>
    </div>
  );
};

export default App;
