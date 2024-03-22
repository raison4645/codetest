import './App.css';
import { useState } from 'react';
import { Switch } from './Switch';

function App() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  }
  return (
    <div className="App">
      <Switch 
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label>disable toggle</label>
      <input type="checkbox" onChange={() => setDisabled(!disabled)} />
    </div>
  );
}

export default App;
