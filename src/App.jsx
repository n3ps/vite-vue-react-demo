import React from 'react'
import logo from './assets/logo.svg'

function App () {
  const counter = React.useRef(0)

  React.useEffect(() => {
    console.log(`App.jsx loaded ${++counter.current} times`)
  }, [])

  return (
    <div className="text-center">
      <img src={logo} className="logo max-h-56" alt="React logo" />
      <p>
          Edit <strong>React</strong> <code>src/App.jsx</code>!
      </p>
    </div>
  )
}

export default App