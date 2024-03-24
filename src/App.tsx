import './App.css';
import { useState, useEffect } from 'react';
import { Switch } from './Switch';
import cards from './cards.json'

function App() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [cardList, setCardList] = useState(cards);

  const onChange = () => {
    setChecked(!checked);
  }

  useEffect(() => {
    checked 
      ? setCardList(cards.sort((a, b) => b.num - a.num))
      : setCardList(cards.sort((a, b) => a.num - b.num))
  },[checked])

  return (
    <div className="App">
      <Switch 
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label>disable toggle</label>
      <input type="checkbox" onChange={() => setDisabled(!disabled)} />
      <div className='cards_container'>
        {cardList.map(item => 
          <div key={item.num}>
            <span>{item.num}</span>
            <span>{item.char}</span>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
