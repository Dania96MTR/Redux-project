import './App.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import Heading from './components/Heading'
import Counter from './components/Counter'

function App() {
  return (
    <Provider store={store}>
      <Heading />
      <Counter />
    </Provider>
  )
}

export default App
