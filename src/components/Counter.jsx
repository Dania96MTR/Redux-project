import React from 'react'
import { useSelector } from 'react-redux'
import CounterItem from './CounterItem'


export default function Counter() {
    const { counters }= useSelector(state => state.counters)
    return (
        <div className='counter-list'>
            {counters.map(counter => (
                <CounterItem key={counter.id} counter={counter} />
            ))}
        </div>
    )
}
