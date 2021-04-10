import React from 'react'

const name: string = "César"
const age: number = 35
const isActive: boolean = true

const powers: string[] = [] //"speed", "force", "flight"

export const BasicTypes = () => {
  return (
    <>
      <h3>Basic types</h3>
      {name}, {age}, {(isActive) ? 'active' : 'inactive'}
      <br />
      {powers.join(', ')}
    </>
  )
}
