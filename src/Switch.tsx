import './App.css';

interface SwitchProps {
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, disabled, onChange }) => {
  return (
    <>
      {disabled 
        ?
        <div className='switch_container disabled'>
          <button className='switch'></button>
        </div>
        :
        <div className={checked ? 'switch_container checked' : 'switch_container' }>
          <button 
            className={checked ? 'switch checked' : 'switch'}
            onClick={onChange}
          />
        </div>
      }
    </>
  )
}
