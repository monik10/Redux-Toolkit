
import Counter from './Components/Counter';
import { Provider } from 'react-redux';
import { store } from './store/Store';

const App = () => {
  return (
    <Provider store={store} >
      <Counter/>
    </Provider>
  )
}

export default App