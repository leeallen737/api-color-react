import './App.css';
import { Button } from './Button';
import ColorContainer from './ColorContainer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [color, updateColorClick] = useState('');
  const [URL, updateURL] = useState('');

  const crayonButton = () => {
    updateURL('https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json')
    updateColorClick('crayon')
    return
  }
  const xkcdButton = () => {
    updateURL('https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/xkcd.json')
    updateColorClick('xkcd')
    return
  }
  const webButton = () => {
    updateURL('https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json')
    updateColorClick('web')
    return
  }

  const clearButton = () => {
    updateURL('')
    updateColorClick('')
    return
  }

    return (
      <div className="App">
              <div className="buttons">
              <Link to='/crayons'><Button buttonFunc={crayonButton} text='Select Crayons'/></Link>
              <Link to='/xkcd'><Button buttonFunc={xkcdButton} text='Select XKCD'/></Link>
              <Link to='/web-colors'><Button buttonFunc={webButton} text='Select Web Colours'/></Link>
              <Link to='/'><Button buttonFunc={clearButton}  text='Clear'/></Link>
              </div>
              
              <Link to='/colors'><ColorContainer color={color} url={URL} /></Link>
              
      </div>
    );
  
  }

export default App;
