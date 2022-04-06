import { Color } from './Color';
import './Color-container.css';
import { useEffect, useState } from 'react';

const ColorContainer = ( {url, color} ) => {

  const [boxColors, updateBoxColors] = useState([])

  const colorFunction = async(updateColor, URL) => {
    const response = await fetch(URL);
    const data = await response.json();

    updateColor(data.colors)
  }

  useEffect(() => {
    if(url) {

      colorFunction(updateBoxColors, url)
    }
  }, [url])

  

  return (
    <div className='colorContainer'>
      
        {
          
        color ?
        boxColors.map(item => {
          
          return <Color key={item.color} Color={item.color} ColorHex={item.hex}/>
        }):
        <div></div>
      }
    </div>
  )
}

export default ColorContainer