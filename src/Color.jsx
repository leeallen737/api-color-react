

export const Color = ({ Color, ColorHex }) => {

    const style = {
        backgroundColor: ColorHex,
        height: '200px',
        width: '200px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textTransform: 'uppercase',
        fontWeight: '500',
    }
  return (
      <div>
    <div style={style}><div>{ Color }</div><div>{ ColorHex }</div></div>
    
    </div>
  )
}

