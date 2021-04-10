import React from 'react'
import { BasicTypes } from './typescript/BasicTypes'
import { LiteralObjects } from './typescript/LiteralObjects'
import { Functions } from './typescript/Functions';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro React - TS</h1>
      <hr />
      {/* <BasicTypes /> */}
      {/* <LiteralObjects /> */}
      <Functions />
    </div>
  )
}

export default App;