import { useState } from 'react';

export default function Emoji(){
  
  const [isHappy, setIsHappy] = useState(true);

  const handleClick = () => {
    setIsHappy(prevIsHappy => !prevIsHappy);
  };

  return (
    <div>
      <h2>Emoji Changer Component</h2>
      <div style={{ fontSize: '3rem' }}>{isHappy ? '😊' : '😞'}</div>
      <button onClick={handleClick}>Change Mood</button>
    </div>
  );
}
