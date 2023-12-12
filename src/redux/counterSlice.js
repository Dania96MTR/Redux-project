import { createSlice } from '@reduxjs/toolkit'

const initialValue = [
    {
        id: "123",
        title: " Pages studied this month",
        count: 0,
    },
    {
        id: "456",
        title: "Projects created this month",
        count: 0,
    },
    {
        id: "789",
        title: "TV shows skipped this month",
        count: 0,
    }
]
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counters: initialValue
    },
    reducers: {
        increment: (state, action) => {
            state.counters.forEach(counter => {
                if (counter.id === action.payload.id) {
                    counter.count += 1
                }

            });

        },
        decrement: (state, action) => {
            state.counters.forEach(counter => {
                if (counter.id === action.payload.id) {
                    if (counter.id > 0) {
                        counter.count -= 1
                    }

                }

            });
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer