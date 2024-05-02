import React from 'react'
import DataComponent from './Components/DataComponent'

const App = () => {
  console.log(DataComponent)
  return (
    <div>
        <h1>App</h1>
      {
        DataComponent.map(ele=>(
          <div key={ele.id}>
            <h1>{ele.img}</h1>
          </div>
        ))
      }
    
    </div>
  )
}

export default App