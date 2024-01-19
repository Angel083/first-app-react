import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))


const Button = ( {text} ) => {
  return (
    <button>
      { text }
    </button>
  )
}
root.render(
<React.Fragment>
  
  <Button text="Texto 1"></Button>
  <Button text="Texto 2"></Button>
  <Button text="Texto 3 "></Button>

</React.Fragment>
)
