import React from 'react'
import { HookCounter } from './components/HookCounter'
// import { Counter } from './components/Counter'
// import { BasicTypes } from './typescript/BasicTypes'
// import { LiteralObjects } from './typescript/LiteralObjects'
// import { Functions } from './typescript/Functions';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro React - TS</h1>
      <hr />
      {/* <BasicTypes /> */}
      {/* <LiteralObjects /> */}
      {/* <Functions /> */}
      {/* <Counter /> */}
      <HookCounter />
    </div>
  )
}

export default App;