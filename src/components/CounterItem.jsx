import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { increment , decrement } from '../redux/counterSlice'

export default function CounterItem({counter}) {
    const dispatch = useDispatch()
    const increase = ()=> {
        dispatch(increment({ id : counter.id}))
    }

    const decrease = ()=> {
        dispatch(decrement({ id : counter.id}))
    }
  return (
    <>
    <div className='container'>
        <h3>Title: {counter.title}</h3>
        <p>Count: {counter.count}</p>
        <div className='btns'>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>

    </div>
    </>
  )
}
