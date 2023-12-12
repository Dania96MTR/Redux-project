import React from 'react'
import { useSelector } from 'react-redux'

export default function Heading() {
    const { counters }= useSelector(state => state.counters)
    const getTotalofCount= ()=>{
        return counters.reduce((total , counter) => total + counter.count , 0)
    }
  return (
    <h1>Productivity Points:{getTotalofCount()}</h1>
  )
}
