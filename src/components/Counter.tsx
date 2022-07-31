import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="container">
      <div className="count">
        {count}
      </div>
      <div className="buttons">
        <button
          onClick={() => setCount(old => old + 1)}
        >+1</button>
        <button
          onClick={() => setCount(0)}
        >Resetar</button>
        <button
          disabled={count === 0}
          onClick={() => setCount(old => old - 1)}
        >-1</button>
      </div>
     </div>
    </>
  )
}

export default Counter