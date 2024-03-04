import CustomerAdd from "./Components/CustomerAdd"
import CustomerView from "./Components/CustomerView"
import { Provider } from "react-redux"
import { store } from './Store';


const App = () => {
  return (
    
    <Provider store={store}>
      <div>
      <CustomerAdd/>
      
      <CustomerView/>
    </div> 
    </Provider>
  )
}

export default App