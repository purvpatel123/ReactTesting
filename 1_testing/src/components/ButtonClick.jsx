import React from 'react'

function ButtonClick() {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };  
  return (
  <>
  <div>
    <h1>Button Clicked {count} times</h1>
    <button onClick={handleClick}>click me</button></div>
  </>
  )
}

export default ButtonClick