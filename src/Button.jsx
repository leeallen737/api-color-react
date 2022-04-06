export const Button = ({text, buttonFunc}) => {
  return (
      <div>
    <button onClick={buttonFunc}>{text}</button>
    </div>
  )
}