import React, {useState} from 'react';


function Test({setTheme}) {
  const [stateData, setStateData] = useState('hi');

  const changeState = () => {
    console.log('working?')
    setTheme('light')
  }
  return (
    <div>
      <button onClick={changeState}>change</button>
    </div>
  )
}

export default Test;